"use client";
const ceremonies = [
  {
    name: "Temazcal",
    subtitle: "Ancient Sweat Lodge",
    desc: "An ancestral purification ceremony using fire, steam, and sacred plants to cleanse body, mind, and spirit.",
    duration: "3–4 Hours",
    frequency: "Monthly",
    icon: "🔥",
  },
  {
    name: "Breath of Life",
    subtitle: "Holotropic Breathwork",
    desc: "A transformative journey using conscious breathing techniques to access deeper states of awareness and healing.",
    duration: "2–3 Hours",
    frequency: "Bi-Weekly",
    icon: "◎",
  },
  {
    name: "Full Moon Gathering",
    subtitle: "Community Ritual",
    desc: "Monthly gathering under the moon — live drumming, song, fire, and collective intention-setting for the community.",
    duration: "2–4 Hours",
    frequency: "Monthly",
    icon: "☾",
  },
  {
    name: "Sound Bath",
    subtitle: "Vibrational Healing",
    desc: "Deep immersion in healing frequencies through crystal bowls, gongs, and ancient instruments that realign your energy field.",
    duration: "75 Minutes",
    frequency: "Weekly",
    icon: "∿",
  },
];

export default function Ceremonies() {
  return (
    <section id="ceremonies" className="section-reveal" style={{ padding: "8rem 2rem", position: "relative", zIndex: 1 }}>
      <div className="glow-divider" style={{ width: "100%", height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent)", marginBottom: "5rem" }} />

      {/* Background glow */}
      <div className="floating-orbital" style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(139,32,53,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-tag" style={{ display: "block", marginBottom: "1.25rem" }}>
            Spiritual Practice
          </span>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--cream)",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}>
            Ancient<br />
            <span style={{ color: "var(--gold)" }}>Healing Ceremonies</span>
          </h2>
          <p style={{ color: "var(--cream-dim)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 500, margin: "0 auto", fontWeight: 300 }}>
            Rooted in ancestral wisdom, our ceremonies create a container for profound
            transformation, release, and rebirth.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {ceremonies.map((c, i) => (
            <div
              key={c.name}
              className="card-enter"
              style={{
                animationDelay: `${i * 0.08}s`,
              }}
            >
            <div style={{
              padding: "2.5rem 2rem",
              border: "1px solid rgba(201,168,76,0.1)",
              background: "var(--card-glass)",
              position: "relative",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {/* Top accent */}
              <div style={{
                position: "absolute", top: -1, left: "20%", right: "20%",
                height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
              }} />

              <div className="icon-orbit" style={{
                fontSize: "2rem", marginBottom: "1.5rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 56, height: 56,
                border: "1px solid rgba(139,32,53,0.2)",
                borderRadius: "50%",
                background: "rgba(139,32,53,0.05)",
              }}>
                {c.icon}
              </div>

              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crimson)", opacity: 0.9, display: "block", marginBottom: "0.5rem" }}>
                {c.subtitle}
              </span>
              <h3 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.05rem", fontWeight: 700,
                color: "var(--cream)", marginBottom: "1rem",
              }}>
                {c.name}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--cream-dim)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
                {c.desc}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                <div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "0.2rem" }}>Duration</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--cream-dim)" }}>{c.duration}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "0.2rem" }}>Frequency</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--cream-dim)" }}>{c.frequency}</div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
