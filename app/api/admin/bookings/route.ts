import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { validateAdminRequest } from "@/app/lib/admin-auth";

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key) as unknown as {
    from: (table: string) => any;
  };
}

function parseLimit(raw: string | null, fallback: number) {
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export async function GET(req: NextRequest) {
  const auth = validateAdminRequest(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: 401 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Booking database is not configured." },
      { status: 500 },
    );
  }

  const search = req.nextUrl.searchParams;
  const status = (search.get("status") || "").trim();
  const limit = parseLimit(search.get("limit"), 50);
  const from = parseLimit(search.get("from"), 0);

  let query = supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false })
    .range(from, from + limit - 1);

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Admin bookings list failed:", error);
    return NextResponse.json({ ok: false, error: "Could not load bookings." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, data }, { status: 200 });
}

export async function PATCH(req: NextRequest) {
  const auth = validateAdminRequest(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: 401 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Booking database is not configured." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const { id, status, note } = payload as { id?: unknown; status?: unknown; note?: unknown };
  const safeId = typeof id === "string" ? id.trim() : "";
  const safeStatus = typeof status === "string" ? status.trim() : "";

  const allowedStatuses = ["received", "confirmed", "cancelled", "completed", "no-show", "pending"];
  if (!safeId) {
    return NextResponse.json({ ok: false, error: "Missing booking id." }, { status: 400 });
  }
  if (!allowedStatuses.includes(safeStatus)) {
    return NextResponse.json({ ok: false, error: "Invalid status." }, { status: 400 });
  }

  const updates: Record<string, unknown> = {
    status: safeStatus,
  };
  if (typeof note === "string") {
    updates.admin_note = note.trim();
  }
  updates.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .update(updates)
    .eq("id", safeId)
    .select("*")
    .single();

  if (error) {
    console.error("Admin booking update failed:", error);
    return NextResponse.json({ ok: false, error: "Could not update booking." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, data }, { status: 200 });
}
