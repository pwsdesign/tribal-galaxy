"use client";
const offerings = [
  {
    icon: "♪",
    title: "Recording Studio",
    subtitle: "Tribal Galaxy Studio",
    desc: "Live concerts with world-class musicians, music recording, streaming, and a full record label.",
    color: "var(--gold)",
  },
  {
    icon: "◈",
    title: "School & Classes",
    subtitle: "Education",
    desc: "Percussion, voice training, mental wellness education, yoga, meditation, sound healing, and breathwork.",
    color: "var(--teal-light)",
  },
  {
    icon: "✦",
    title: "Community Space",
    subtitle: "Social Hub",
    desc: "A vegetarian food truck and gathering space where people can eat, drink, and connect.",
    color: "var(--amber)",
  },
  {
    icon: "⊕",
    title: "Holistic Therapy",
    subtitle: "Wellness Center",
    desc: "A healing center offering transformative experiences — bodywork, energy healing, and integrative therapies.",
    color: "var(--teal)",
  },
  {
    icon: "☽",
    title: "Silent Garden",
    subtitle: "Sacred Space",
    desc: "A dedicated outdoor sanctuary for music, meditation, deep listening, and inner stillness.",
    color: "var(--crimson)",
  },
  {
    icon: "⚗",
    title: "Tribal Designs",
    subtitle: "Artisan Clothing",
    desc: "Unique, world-sourced clothing and artisan goods that carry the spirit of global culture.",
    color: "var(--gold-dim)",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="section-reveal" style={{ padding: "8rem 2rem", position: "relative", zIndex: 1 }}>
      {/* Top divider */}
      <div className="glow-divider" style={{ width: "100%", height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)", marginBottom: "5rem" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-tag" style={{ display: "block", marginBottom: "1.25rem" }}>
            What We Offer
          </span>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--cream)",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}>
            A Universe of<br />
            <span style={{ color: "var(--gold)" }}>Transformative Experiences</span>
          </h2>
          <p style={{
            color: "var(--cream-dim)", fontSize: "1rem",
            lineHeight: 1.8, maxWidth: 520, margin: "0 auto", fontWeight: 300,
          }}>
            From live music and ancient ceremonies to healing arts and community gathering —
            Tribal Galaxy is a complete ecosystem for the soul.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {offerings.map((o, i) => (
            <div
              key={o.title}
              className="service-card card-enter"
              style={{ padding: "2.5rem", animationDelay: `${i * 0.08}s` }}
            >
              <div className="icon-orbit" style={{
                fontSize: "1.5rem",
                color: o.color,
                marginBottom: "1.25rem",
                width: 48, height: 48,
                border: `1px solid ${o.color}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {o.icon}
              </div>
              <span style={{
                fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase",
                color: o.color, display: "block", marginBottom: "0.5rem", opacity: 0.8,
              }}>
                {o.subtitle}
              </span>
              <h3 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}>
                {o.title}
              </h3>
              <p style={{ color: "var(--cream-dim)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 }}>
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
