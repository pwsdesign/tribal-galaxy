import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { randomUUID, createHash } from "node:crypto";

const BOOKING_TIME_OPTIONS = [
  "Morning (8–11 AM)",
  "Afternoon (12–4 PM)",
  "Evening (5–9 PM)",
  "Flexible",
];

const BOOKING_SERVICES = [
  "Recording Studio Session",
  "Private Percussion Lesson",
  "Sound Healing Session",
  "Temazcal Ceremony",
  "Breath of Life Workshop",
  "Full Moon Gathering",
  "Sound Bath Experience",
  "Yoga Class",
  "Voice Training Session",
  "Mental Wellness Workshop",
  "Community Event / Venue Rental",
  "Other / Inquiry",
];

type BookingRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  guests: string;
  message: string;
  website: string;
};

type BookingRecord = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  event_date: string;
  event_time: string | null;
  guests: number;
  message: string | null;
  status: string;
  created_at: string;
  client_ip_hash?: string | null;
};

const ACTIVE_STATUSES = ["received", "confirmed", "pending"];
const MAX_MESSAGE_LENGTH = 1200;

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeGuests(value: string): number {
  const match = sanitize(value).match(/\d+/);
  return Number(match?.[0] ?? "0");
}

function normalizeDate(value: unknown): string {
  return sanitize(value).slice(0, 10);
}

function parseEmail(value: unknown): string {
  return sanitize(value).toLowerCase();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function hashIp(ip: string): string {
  const salt = process.env.BOOKING_IP_SALT || "tribal-galaxy-booking";
  return createHash("sha256").update(`${ip}:${salt}`).digest("hex");
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const direct = req.headers.get("x-real-ip");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  if (direct) return direct;
  return "127.0.0.1";
}

function getSupabaseClient(): any | null {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return null;
  return createClient(url, serviceRoleKey) as any;
}

function getEnvInt(name: string, fallback: number): number {
  const raw = process.env[name];
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getEnvFloat(name: string, fallback: number): number {
  const raw = process.env[name];
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function validate(form: BookingRequest): string[] {
  const errors: string[] = [];
  const guests = normalizeGuests(form.guests);

  if (form.website) {
    errors.push("Invalid request signature.");
    return errors;
  }

  if (sanitize(form.name).length < 2) {
    errors.push("Full name must be at least 2 characters.");
  }
  const email = parseEmail(form.email);
  if (!isValidEmail(email)) {
    errors.push("Enter a valid email.");
  }
  if (!BOOKING_SERVICES.includes(form.service)) {
    errors.push("Choose a valid service.");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalizeDate(form.date))) {
    errors.push("Choose a valid date.");
  }
  if (form.time && !BOOKING_TIME_OPTIONS.includes(form.time)) {
    errors.push("Choose a valid time.");
  }
  if (!Number.isInteger(guests) || guests < 1) {
    errors.push("Guests must be at least 1.");
  }
  if (guests > 100) {
    errors.push("Guests cannot exceed 100.");
  }
  if (sanitize(form.message).length > MAX_MESSAGE_LENGTH) {
    errors.push(`Message must be ${MAX_MESSAGE_LENGTH} chars or less.`);
  }

  return errors;
}

async function enforceRateLimit(supabase: any | null, ip: string, email: string) {
  if (!supabase) return;
  const maxAttempts = getEnvInt("BOOKING_RATE_LIMIT_MAX_ATTEMPTS", 5);
  const windowMinutes = getEnvInt("BOOKING_RATE_LIMIT_WINDOW_MINUTES", 10);

  const since = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString();
  const ipHash = hashIp(ip);

  const { count, error: countErr } = await supabase
    .from("booking_rate_limits")
    .select("*", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);

  if (countErr) {
    console.error("Rate limit count error:", countErr);
  }

  const attempts = typeof count === "number" ? count : 0;
  if (attempts >= maxAttempts) {
    throw new Error("Too many booking attempts. Please wait a few minutes and try again.");
  }

  const { error: insertErr } = await supabase
    .from("booking_rate_limits")
    .insert({ ip_hash: ipHash, email: email.toLowerCase() });

  if (insertErr) {
    console.error("Rate limit write error:", insertErr);
  }

  const cleanupAt = new Date(Date.now() - (windowMinutes + 5) * 60 * 1000).toISOString();
  await supabase
    .from("booking_rate_limits")
    .delete()
    .lt("created_at", cleanupAt);
}

async function isSlotAvailable(
  supabase: any | null,
  eventDate: string,
  eventTime: string,
): Promise<{ available: boolean; used: number; limit: number }> {
  if (!supabase) return { available: true, used: 0, limit: 1 };
  const perSlotLimit = getEnvInt("BOOKING_SLOT_CAPACITY", 3);
  const perDateLimit = getEnvInt("BOOKING_DATE_CAPACITY", 40);

  if (!eventTime || eventTime === "Flexible") {
    const { count, error } = await supabase
      .from("bookings")
      .select("id", { count: "exact", head: true })
      .eq("event_date", eventDate)
      .in("status", ACTIVE_STATUSES);

    if (error) {
      console.error("Date availability check failed:", error);
      return { available: true, used: 0, limit: perDateLimit };
    }

    return { available: (count ?? 0) < perDateLimit, used: count ?? 0, limit: perDateLimit };
  }

  const { count, error } = await supabase
    .from("bookings")
    .select("id", { count: "exact", head: true })
    .eq("event_date", eventDate)
    .eq("event_time", eventTime)
    .in("status", ACTIVE_STATUSES);

  if (error) {
    console.error("Time slot availability check failed:", error);
    return { available: true, used: 0, limit: perSlotLimit };
  }

  return { available: (count ?? 0) < perSlotLimit, used: count ?? 0, limit: perSlotLimit };
}

async function sendEmailNotification(record: BookingRecord, toName: string, toEmail: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.BOOKING_FROM_EMAIL || "no-reply@tribal-galaxy.com";
  const adminEmail = process.env.ADMIN_BOOKING_EMAIL;

  if (!apiKey || !adminEmail) {
    console.log("Email not configured; skipping email notification for booking", record.id);
    return;
  }

  const messageBlock = `
    <p><strong>Booking ID:</strong> ${record.id}</p>
    <p><strong>Name:</strong> ${record.name}</p>
    <p><strong>Email:</strong> ${record.email}</p>
    <p><strong>Phone:</strong> ${record.phone ?? "N/A"}</p>
    <p><strong>Service:</strong> ${record.service}</p>
    <p><strong>Date:</strong> ${record.event_date}</p>
    <p><strong>Time:</strong> ${record.event_time ?? "Flexible/Not specified"}</p>
    <p><strong>Guests:</strong> ${record.guests}</p>
    <p><strong>Message:</strong> ${record.message ?? "—"}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: adminEmail,
      subject: `New booking request from ${record.name}`,
      html: `<h3>New Tribal Galaxy Booking Request</h3>${messageBlock}`,
      text: `Booking ID: ${record.id}\nName: ${record.name}\nEmail: ${record.email}\nPhone: ${record.phone ?? "N/A"}\nService: ${record.service}\nDate: ${record.event_date}\nTime: ${record.event_time ?? "Flexible/Not specified"}\nGuests: ${record.guests}\nMessage: ${record.message ?? "—"}`,
    }),
  });

  if (!response.ok) {
    console.error("Failed to send admin notification:", await response.text());
  }

  const confirmation = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      subject: "Your booking request was received",
      html: `<p>Hi ${toName},</p><p>We received your request and will confirm your booking within 24 hours.</p><p>Booking ID: ${record.id}</p>`,
      text: `Hi ${toName}, we received your request and will confirm it within 24 hours. Booking ID: ${record.id}`,
    }),
  });
  if (!confirmation.ok) {
    console.error("Failed to send customer confirmation:", await confirmation.text());
  }
}

export async function POST(req: NextRequest) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Booking database is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }
  if (!payload || typeof payload !== "object") {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const raw = payload as Partial<BookingRequest>;
  const form: BookingRequest = {
    name: sanitize(raw.name),
    email: parseEmail(raw.email),
    phone: sanitize(raw.phone),
    service: sanitize(raw.service),
    date: normalizeDate(raw.date),
    time: sanitize(raw.time),
    guests: sanitize(raw.guests),
    message: sanitize(raw.message),
    website: sanitize(raw.website),
  };

  const errors = validate(form);
  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors[0] }, { status: 400 });
  }

  const ip = getClientIp(req);
  try {
    await enforceRateLimit(supabase, ip, form.email);
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Rate limit exceeded." },
      { status: 429 },
    );
  }

  const normalizedGuests = normalizeGuests(form.guests);
  const slot = await isSlotAvailable(supabase, form.date, form.time);
  if (!slot.available) {
    return NextResponse.json(
      {
        ok: false,
        error: `Selected slot is full. ${slot.used} booking(s) already recorded for this slot (${slot.limit} max).`,
      },
      { status: 409 },
    );
  }

  const recordPayload = {
    id: randomUUID(),
    name: form.name,
    email: form.email,
    phone: form.phone || null,
    service: form.service,
    event_date: form.date,
    event_time: form.time || null,
    guests: normalizedGuests,
    message: form.message || null,
    status: "received",
    client_ip_hash: hashIp(ip),
    created_at: new Date().toISOString(),
  };

  const { data, error: insertErr } = await supabase
    .from("bookings")
    .insert(recordPayload)
    .select("id, name, email, phone, service, event_date, event_time, guests, message, status, created_at")
    .single();

  if (insertErr) {
    console.error("Booking DB insert error:", insertErr);
    return NextResponse.json(
      { ok: false, error: "Could not save booking at this time." },
      { status: 500 },
    );
  }

  const record = data as BookingRecord;
  try {
    await sendEmailNotification(record, form.name, form.email);
  } catch (error) {
    console.error("Email send failed:", error);
  }

  return NextResponse.json(
    { ok: true, bookingId: record.id },
    { status: 201 },
  );
}

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      ok: true,
      availabilityEndpoint: "/api/booking/availability",
      message: "Use POST to create a booking request.",
    },
    { status: 200 },
  );
}
