import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const ACTIVE_STATUSES = ["received", "confirmed", "pending"];

function parseDate(value: string | null): string {
  return typeof value === "string" ? value.trim().slice(0, 10) : "";
}

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

function getEnvInt(name: string, fallback: number): number {
  const raw = process.env[name];
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export async function GET(req: NextRequest) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      {
        ok: false,
        error: "Booking database is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 500 },
    );
  }

  const searchParams = req.nextUrl.searchParams;
  const date = parseDate(searchParams.get("date"));
  const time = (searchParams.get("time") || "").trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ ok: false, error: "date is required as YYYY-MM-DD." }, { status: 400 });
  }

  const perSlotLimit = getEnvInt("BOOKING_SLOT_CAPACITY", 3);
  const perDateLimit = getEnvInt("BOOKING_DATE_CAPACITY", 40);

  const isFlexible = !time || time === "Flexible";
  let used = 0;
  let limit = perDateLimit;
  let available = true;

  if (isFlexible) {
    const { count, error } = await supabase
      .from("bookings")
      .select("id", { count: "exact", head: true })
      .eq("event_date", date)
      .in("status", ACTIVE_STATUSES);

    if (!error) {
      used = count ?? 0;
      available = used < limit;
    } else {
      console.error("Availability query failed (flexible date check):", error);
    }
  } else {
    const { count, error } = await supabase
      .from("bookings")
      .select("id", { count: "exact", head: true })
      .eq("event_date", date)
      .eq("event_time", time)
      .in("status", ACTIVE_STATUSES);

    if (!error) {
      used = count ?? 0;
      limit = perSlotLimit;
      available = used < limit;
    } else {
      console.error("Availability query failed (time slot check):", error);
    }
  }

  return NextResponse.json({
    ok: true,
    date,
    time: time || "Flexible",
    available,
    used,
    limit,
    remaining: Math.max(limit - used, 0),
  });
}
