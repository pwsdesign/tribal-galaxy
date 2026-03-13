"use client";

import { useEffect, useMemo, useState } from "react";

type BookingStatus =
  | "received"
  | "confirmed"
  | "pending"
  | "cancelled"
  | "completed"
  | "no-show";

type BookingItem = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  event_date: string;
  event_time: string | null;
  guests: number;
  message: string | null;
  status: BookingStatus;
  created_at: string;
  admin_note?: string | null;
};

const statusOptions: BookingStatus[] = ["received", "confirmed", "pending", "cancelled", "completed", "no-show"];

async function parseResponseError(res: Response) {
  try {
    const payload = (await res.json()) as { error?: string };
    return payload.error || `Request failed with ${res.status}`;
  } catch {
    return `Request failed with ${res.status}`;
  }
}

export default function AdminBookings() {
  const [token, setToken] = useState("");
  const [loadedToken, setLoadedToken] = useState("");
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const headers = useMemo(
    () => ({ Authorization: `Bearer ${loadedToken}`, "Content-Type": "application/json" }),
    [loadedToken],
  );

  async function loadBookings() {
    if (!loadedToken) return;
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.set("status", statusFilter);
      const res = await fetch(`/api/admin/bookings?${params.toString()}`, {
        headers,
      });
      if (!res.ok) {
        throw new Error(await parseResponseError(res));
      }
      const payload = (await res.json()) as { ok: boolean; data?: BookingItem[] };
      setBookings(payload.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load bookings.");
      setBookings([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const cached = window.localStorage.getItem("tribal-galaxy-admin-token") || "";
    if (cached) setLoadedToken(cached);
  }, []);

  useEffect(() => {
    if (!loadedToken) return;
    void loadBookings();
  }, [loadedToken, statusFilter]);

  async function handleSaveStatus(id: string, status: BookingStatus) {
    setError("");
    if (!loadedToken) return;
    try {
      const res = await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers,
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) {
        throw new Error(await parseResponseError(res));
      }
      await loadBookings();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update booking.");
    }
  }

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: 1100, margin: "0 auto", color: "var(--cream)" }}>
      <h1 style={{ marginBottom: "2rem", fontFamily: "'Cinzel Decorative', serif" }}>Booking Management</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem", alignItems: "center" }}>
        <label className="form-label" style={{ marginBottom: 0 }}>Admin Token</label>
        <input
          className="form-input"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          placeholder="Paste admin token"
          style={{ maxWidth: 320 }}
        />
        <button
          className="btn-solid"
          onClick={() => {
            const next = token.trim();
            setLoadedToken(next);
            window.localStorage.setItem("tribal-galaxy-admin-token", next);
          }}
          style={{ minWidth: 120 }}
        >
          Save Token
        </button>

        <label className="form-label" style={{ marginBottom: 0 }}>Status filter</label>
        <select
          className="form-input"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          style={{ maxWidth: 220 }}
        >
          <option value="">All</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <button className="btn-gold" onClick={() => void loadBookings()} style={{ minWidth: 140 }}>
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error ? <p style={{ color: "var(--crimson)", marginBottom: "1rem" }}>{error}</p> : null}

      {!loadedToken ? <p>Set your admin token to load booking submissions.</p> : null}

      {loadedToken && !bookings.length ? (
        <p style={{ color: "var(--cream-dim)" }}>
          {loading ? "Loading..." : "No bookings found for this filter."}
        </p>
      ) : null}

      {!!bookings.length ? (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 960 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Created</th>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Booking</th>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Service</th>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Date / Time</th>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Guests</th>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Status</th>
                <th style={{ textAlign: "left", padding: "0.6rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                    <strong>{item.name}</strong>
                    <div style={{ color: "var(--cream-dim)", fontSize: "0.75rem" }}>{item.email}</div>
                    <div style={{ color: "var(--cream-dim)", fontSize: "0.75rem" }}>{item.phone || "—"}</div>
                  </td>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>{item.service}</td>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                    {item.event_date}<br />
                    {item.event_time || "Flexible"}
                  </td>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>{item.guests}</td>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>{item.status}</td>
                  <td style={{ padding: "0.75rem 0.4rem", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                    <select
                      className="form-input"
                      value={item.status}
                      onChange={(event) => {
                        void handleSaveStatus(item.id, event.target.value as BookingStatus);
                      }}
                      style={{ minWidth: 130 }}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                    {item.admin_note ? <p style={{ fontSize: "0.72rem", color: "var(--cream-dim)" }}>Note: {item.admin_note}</p> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
