"use client";
import { useState } from "react";

const bookingOptions = [
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

const bookingTimes = [
  "Morning (8–11 AM)",
  "Afternoon (12–4 PM)",
  "Evening (5–9 PM)",
  "Flexible",
];

type BookingFormState = {
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

const initialFormState: BookingFormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  guests: "1",
  message: "",
  website: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error((payload as { error?: string }).error || "Unable to submit booking right now.");
      }

      setBookingId((payload as { bookingId?: string }).bookingId || "");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="section-reveal" style={{ padding: "8rem 2rem 6rem", position: "relative", zIndex: 1 }}>
      <div className="glow-divider" style={{ width: "100%", height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)", marginBottom: "5rem" }} />

      {/* Cosmic glow */}
      <div className="floating-orbital" style={{
        position: "absolute", top: "20%", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(42,138,122,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-tag" style={{ display: "block", marginBottom: "1.25rem" }}>
            Reserve Your Experience
          </span>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--cream)",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}>
            Begin Your<br />
            <span style={{ color: "var(--gold)" }}>Sacred Journey</span>
          </h2>
          <p style={{ color: "var(--cream-dim)", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, maxWidth: 480, margin: "0 auto" }}>
            Book a session, class, or ceremony and take the first step toward
            your transformation.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="booking-panel card-enter" style={{
            background: "var(--card-glass)",
            border: "1px solid rgba(201,168,76,0.12)",
            backdropFilter: "blur(20px)",
            padding: "3rem",
            position: "relative",
            animationDelay: "0.2s",
          }}>
            {/* Top accent */}
            <div style={{
              position: "absolute", top: -1, left: "10%", right: "10%",
              height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)",
            }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <label className="form-label">Full Name *</label>
                <input name="name" required value={form.name} onChange={handleChange}
                       className="form-input" placeholder="Your name" />
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange}
                       className="form-input" placeholder="your@email.com" />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <label className="form-label">Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange}
                       className="form-input" placeholder="+1 (305) 000-0000" />
              </div>
              <div>
                <label className="form-label">Number of Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange} className="form-input">
                  {["1", "2", "3–5", "6–10", "10+"].map((n) => (
                    <option key={n} value={n}>{n} {n === "1" ? "person" : "people"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label className="form-label">Select Experience *</label>
              <select name="service" required value={form.service} onChange={handleChange} className="form-input">
                <option value="">Choose a service or class...</option>
                {bookingOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <label className="form-label">Preferred Date *</label>
                <input name="date" type="date" required value={form.date} onChange={handleChange}
                       className="form-input" style={{ colorScheme: "dark" }} />
              </div>
              <div>
                <label className="form-label">Preferred Time</label>
                <select name="time" value={form.time} onChange={handleChange} className="form-input">
                  <option value="">Select a time...</option>
                  {bookingTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem", opacity: 0, height: 0, overflow: "hidden", position: "absolute" }}>
              <label className="form-label">Do not fill this out</label>
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden
              />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <label className="form-label">Message or Special Requests</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                        className="form-input" rows={4}
                        placeholder="Tell us about your intention, any health considerations, or questions..."
                        style={{ resize: "vertical" }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--cream-dim)", fontWeight: 300, maxWidth: 340 }}>
                We&apos;ll confirm your booking within 24 hours. Located at 1040 MacArthur Causeway, Edgewater, Miami.
              </p>
              <span style={{ color: "var(--crimson)", fontSize: "0.8rem", minHeight: 18 }}>
                {error}
              </span>
              <button type="submit" className="btn-solid" disabled={loading} style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "wait" : "pointer",
                minWidth: 180,
              }}>
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </form>
        ) : (
          <div className="booking-success card-enter" style={{
            textAlign: "center",
            padding: "5rem 2rem",
            border: "1px solid rgba(201,168,76,0.15)",
            background: "var(--card-glass)",
            backdropFilter: "blur(20px)",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>✦</div>
            <h3 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1.5rem", fontWeight: 700,
              color: "var(--gold)", marginBottom: "1rem",
            }}>
              Your Journey Awaits
            </h3>
            <p style={{ color: "var(--cream-dim)", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}>
              Thank you, {form.name || "there"}. We&apos;ve received your request and will<br />
              reach out within 24 hours to confirm your experience.
            </p>
            {bookingId ? (
              <p style={{ color: "var(--cream-dim)", marginTop: "1rem", fontSize: "0.8rem" }}>
                Booking ID: {bookingId}
              </p>
            ) : null}
            <button onClick={() => {
              setSubmitted(false);
              setBookingId("");
              setError("");
              setForm(initialFormState);
            }} className="btn-gold" style={{ marginTop: "2.5rem", cursor: "pointer" }}>
              Book Another Session
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
