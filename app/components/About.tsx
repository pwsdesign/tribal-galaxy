"use client";
export default function About() {
  return (
    <section id="about" className="section-reveal" style={{ padding: "8rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

          {/* Left — visual */}
          <div className="section-reveal-left" style={{ position: "relative", animationDelay: "0s" }}>
            {/* Decorative geometric */}
            <div style={{
              position: "relative", width: "100%", paddingBottom: "100%",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "4px",
                background: "var(--card-glass)",
                backdropFilter: "blur(10px)",
              }} />
              {/* Inner star mandala */}
              <div style={{
                position: "absolute", inset: "15%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 200 200" fill="none" style={{ width: "100%", maxWidth: 260 }}>
                  <circle cx="100" cy="100" r="98" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="75" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="50" stroke="rgba(42,138,122,0.2)" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="25" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
                  {/* 8-point star */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x2 = 100 + Math.cos(angle) * 95;
                    const y2 = 100 + Math.sin(angle) * 95;
                    return <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />;
                  })}
                  {/* Center star */}
                  <path d="M100 60L104 88H132L109 105L116 133L100 118L84 133L91 105L68 88H96L100 60Z"
                        fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="4" fill="rgba(201,168,76,0.8)" />
                  {/* Dots at corners */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x = 100 + Math.cos(angle) * 75;
                    const y = 100 + Math.sin(angle) * 75;
                    return <circle key={i} cx={x} cy={y} r="2" fill="rgba(42,138,122,0.6)" />;
                  })}
                  {/* Text around circle */}
                  <text fontSize="5" fill="rgba(201,168,76,0.3)" fontFamily="Jost, sans-serif" letterSpacing="3">
                    <textPath href="#circle-path">
                      · MUSIC · HEALING · COMMUNITY · MIAMI · MUSIC · HEALING · COMMUNITY · MIAMI ·
                    </textPath>
                  </text>
                  <defs>
                    <path id="circle-path" d="M100,2 a98,98 0 0 1 0,196 a98,98 0 0 1 0,-196" />
                  </defs>
                </svg>
              </div>
              {/* Corner accents */}
              {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
                <div key={pos} style={{
                  position: "absolute",
                  ...(pos.includes("top") ? { top: -1 } : { bottom: -1 }),
                  ...(pos.includes("left") ? { left: -1 } : { right: -1 }),
                  width: 20, height: 20,
                  borderTop: pos.includes("top") ? "1px solid rgba(201,168,76,0.5)" : "none",
                  borderBottom: pos.includes("bottom") ? "1px solid rgba(201,168,76,0.5)" : "none",
                  borderLeft: pos.includes("left") ? "1px solid rgba(201,168,76,0.5)" : "none",
                  borderRight: pos.includes("right") ? "1px solid rgba(201,168,76,0.5)" : "none",
                }} />
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div className="section-reveal-right" style={{ animationDelay: "0.12s" }}>
            <span className="section-tag" style={{ display: "block", marginBottom: "1.5rem" }}>
              Our Story
            </span>
            <h2 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--cream)",
              lineHeight: 1.3,
              marginBottom: "2rem",
            }}>
              Seven Years of<br />
              <span style={{ color: "var(--gold)" }}>Sacred Connection</span>
            </h2>

            <p style={{ color: "var(--cream-dim)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.5rem", fontWeight: 300 }}>
              For seven years, Tribal Galaxy has cultivated a vibrant community of multicultural artists,
              healers, musicians, and teachers in Miami and around the world. Our work enhances the
              well-being of the spiritual community through music, culture, and holistic healing.
            </p>
            <p style={{ color: "var(--cream-dim)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "2.5rem", fontWeight: 300 }}>
              In 2024, the City of Miami recognized Tribal Galaxy as a cultural hub, awarding us an
              artist grant as a first step of support. Now, we call on our global community to help
              us expand this vision to a new home.
            </p>

            {/* Founder */}
            <div style={{
              borderLeft: "2px solid rgba(201,168,76,0.3)",
              paddingLeft: "1.5rem",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "var(--cream)",
                lineHeight: 1.7,
                marginBottom: "0.75rem",
              }}>
                "To awaken the shared consciousness born of love and reconnect people with their inner light."
              </p>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 400 }}>
                Ali Ceyhun Kartalsuna
              </p>
              <p style={{ fontSize: "0.7rem", color: "var(--cream-dim)", letterSpacing: "0.05em", marginTop: "0.25rem" }}>
                Founder · Turkish Percussionist · Berklee College of Music
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
