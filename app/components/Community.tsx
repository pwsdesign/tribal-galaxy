"use client";
const stats = [
  { value: "7+", label: "Years of Community", sub: "Est. 2017" },
  { value: "3.7K+", label: "Global Followers", sub: "Instagram Community" },
  { value: "195+", label: "Events & Posts", sub: "Musical Memories" },
  { value: "2024", label: "City of Miami Grant", sub: "Cultural Hub Award" },
];

export default function Community() {
  return (
    <section className="section-reveal" style={{ padding: "5rem 2rem", position: "relative", zIndex: 1 }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem", marginBottom: "6rem",
        }}>
          {stats.map((s, i) => (
            <div
              key={s.value}
              className="metric-card card-enter"
              style={{ textAlign: "center", padding: "2rem 1rem", animationDelay: `${i * 0.08}s` }}
            >
              <div style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 900, color: "var(--gold)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--cream)", fontWeight: 400, letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                {s.label}
              </div>
              <div style={{ fontSize: "0.65rem", color: "var(--cream-dim)", fontWeight: 300, letterSpacing: "0.1em" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Vision banner */}
        <div className="section-reveal" style={{
          textAlign: "center",
          padding: "5rem 3rem",
          border: "1px solid rgba(201,168,76,0.1)",
          background: "linear-gradient(135deg, var(--card-glass) 0%, var(--cosmos) 100%)",
          backdropFilter: "blur(20px)",
          position: "relative",
        }}>
          {/* Corner accents */}
          {["tl", "tr", "bl", "br"].map((c) => (
            <div key={c} style={{
              position: "absolute",
              top: c.startsWith("t") ? -1 : "auto", bottom: c.startsWith("b") ? -1 : "auto",
              left: c.endsWith("l") ? -1 : "auto", right: c.endsWith("r") ? -1 : "auto",
              width: 24, height: 24,
              borderTop: c.startsWith("t") ? "1px solid rgba(201,168,76,0.5)" : "none",
              borderBottom: c.startsWith("b") ? "1px solid rgba(201,168,76,0.5)" : "none",
              borderLeft: c.endsWith("l") ? "1px solid rgba(201,168,76,0.5)" : "none",
              borderRight: c.endsWith("r") ? "1px solid rgba(201,168,76,0.5)" : "none",
            }} />
          ))}

          <span className="section-tag" style={{ display: "block", marginBottom: "1.5rem" }}>
            Our Vision
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--cream)",
            lineHeight: 1.5,
            maxWidth: 680, margin: "0 auto 2rem",
          }}>
            "Imagine a sacred space where{" "}
            <span style={{ color: "var(--gold)", fontStyle: "normal", fontWeight: 600 }}>
              people from all backgrounds
            </span>{" "}
            come together to share, learn, and heal — where everyone is welcomed
            on their transformational journey."
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#booking" className="btn-solid">Join Our Community</a>
            <a href="https://givebutter.com" target="_blank" rel="noreferrer" className="btn-gold">
              Support Our Mission
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section > div > div:first-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
