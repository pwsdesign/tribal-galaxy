"use client";
const classes = [
  { name: "Djembe & Percussion", day: "Monday", time: "7:00 PM", level: "All Levels", instructor: "Ali Ceyhun" },
  { name: "Sound Healing Journey", day: "Tuesday", time: "6:30 PM", level: "All Levels", instructor: "Tribal Healers" },
  { name: "Breathwork & Meditation", day: "Wednesday", time: "8:00 AM", level: "All Levels", instructor: "Tribal Teachers" },
  { name: "Voice Training", day: "Wednesday", time: "6:00 PM", level: "Intermediate", instructor: "Guest Artists" },
  { name: "Yoga Flow", day: "Thursday", time: "7:30 AM", level: "All Levels", instructor: "Tribal Teachers" },
  { name: "Mental Wellness Workshop", day: "Thursday", time: "7:00 PM", level: "All Levels", instructor: "Tribal Healers" },
  { name: "World Percussion Circle", day: "Friday", time: "7:00 PM", level: "All Levels", instructor: "Ali Ceyhun" },
  { name: "Full Moon Gathering", day: "Monthly", time: "Varies", level: "Open", instructor: "Community" },
];

export default function Classes() {
  return (
    <section id="classes" className="section-reveal" style={{ padding: "8rem 2rem", position: "relative", zIndex: 1 }}>
      <div className="glow-divider" style={{ width: "100%", height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)", marginBottom: "5rem" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>

          <div className="section-reveal-left" style={{ position: "sticky", top: "8rem", animationDelay: "0.1s" }}>
            <span className="section-tag" style={{ display: "block", marginBottom: "1.25rem" }}>
              School & Education
            </span>
            <h2 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--cream)",
              lineHeight: 1.3,
              marginBottom: "1.5rem",
            }}>
              Weekly<br />
              <span style={{ color: "var(--gold)" }}>Class Schedule</span>
            </h2>
            <p style={{ color: "var(--cream-dim)", fontSize: "0.95rem", lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem" }}>
              Our classes are designed to awaken your inner rhythm, heal your spirit,
              and connect you with a global community of seekers.
            </p>
            <a href="#booking" className="btn-gold" style={{ display: "inline-flex" }}>
              Reserve Your Spot
            </a>
          </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {classes.map((c, i) => (
              <div
                key={i}
                className="class-row card-enter"
                style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr auto",
                gap: "1.5rem",
                alignItems: "center",
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
                background: i % 2 === 0 ? "rgba(14,11,31,0.3)" : "transparent",
                transition: "background 0.3s ease",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? "rgba(14,11,31,0.3)" : "transparent")}
              >
                <div>
                  <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.8, marginBottom: "0.2rem" }}>
                    {c.day}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--cream-dim)", fontWeight: 300 }}>{c.time}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", color: "var(--cream)", fontWeight: 400, marginBottom: "0.2rem" }}>{c.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--cream-dim)", fontWeight: 300 }}>with {c.instructor}</div>
                </div>
                <div style={{
                  fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
                  border: "1px solid rgba(42,138,122,0.3)",
                  color: "var(--teal-light)",
                  whiteSpace: "nowrap",
                }}>
                  {c.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #classes > div > div { grid-template-columns: 1fr !important; }
          #classes > div > div > div:first-child { position: static !important; }
          #classes .class-row { grid-template-columns: 80px 1fr !important; }
        }
      `}</style>
    </section>
  );
}
