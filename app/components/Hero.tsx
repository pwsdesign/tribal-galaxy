"use client";

export default function Hero() {
  return (
    <section
      className="section-reveal"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Cosmic background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(42,138,122,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 80%, rgba(201,168,76,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 70%, rgba(139,32,53,0.06) 0%, transparent 50%)
        `,
      }} />

      {/* Rotating ring */}
      <div className="rotate-slow orbit-breathe" style={{
        position: "absolute",
        width: "min(700px, 95vw)", height: "min(700px, 95vw)",
        border: "1px solid rgba(201,168,76,0.06)",
        borderRadius: "50%",
        zIndex: 0,
      }} />
      <div className="pulse-ring" style={{
        position: "absolute",
        width: "min(500px, 75vw)", height: "min(500px, 75vw)",
        border: "1px solid rgba(201,168,76,0.1)",
        borderRadius: "50%",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        width: "min(300px, 55vw)", height: "min(300px, 55vw)",
        border: "1px solid rgba(42,138,122,0.15)",
        borderRadius: "50%",
        zIndex: 0,
      }} />

      {/* Star field dots */}
      {[ 
        { top: "12%", left: "8%", size: 2 }, { top: "25%", left: "88%", size: 1.5 },
        { top: "70%", left: "5%", size: 1 }, { top: "85%", left: "80%", size: 2 },
        { top: "40%", left: "92%", size: 1.5 }, { top: "60%", left: "12%", size: 1 },
        { top: "15%", left: "65%", size: 1 }, { top: "75%", left: "55%", size: 2 },
      ].map((s, i) => (
        <div
          key={i}
          className="floating-star"
          style={{
            position: "absolute", top: s.top, left: s.left, zIndex: 1,
            width: s.size, height: s.size, borderRadius: "50%",
            background: "rgba(201,168,76,0.7)",
            boxShadow: "0 0 4px rgba(201,168,76,0.5)",
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${2.2 + (i % 4) * 0.45}s`,
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 780 }}>
        <div className="fade-up" style={{ marginBottom: "1.5rem", animationDelay: "0s" }}>
          <span className="section-tag">Edgewater, Miami · Est. 2017</span>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.1s", marginBottom: "2rem" }}>
          <svg className="icon-orbit" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ margin: "0 auto 1.5rem" }}>
            <circle cx="30" cy="30" r="29" stroke="rgba(201,168,76,0.25)" strokeWidth="0.5" />
            <path d="M30 5L33 25H53L37 37L43 57L30 44L17 57L23 37L7 25H27L30 5Z"
                  fill="none" stroke="rgba(201,168,76,0.6)" strokeWidth="0.8" />
            <circle cx="30" cy="30" r="3" fill="rgba(201,168,76,0.8)" />
          </svg>
        </div>

        <h1 className="gold-glow fade-up" style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          color: "var(--gold)",
          marginBottom: "0.5rem",
            animationDelay: "0.2s",
        }}>
          Tribal
        </h1>
        <h1 className="fade-up" style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
          fontWeight: 400,
          lineHeight: 1.05,
          color: "var(--cream)",
          marginBottom: "2.5rem",
          animationDelay: "0.3s",
        }}>
          Galaxy
        </h1>

        <p className="fade-up" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--cream-dim)",
          lineHeight: 1.7,
          marginBottom: "3rem",
          maxWidth: 540,
          margin: "0 auto 3rem",
          animationDelay: "0.4s",
        }}>
          A sacred space where people from all backgrounds<br />
          come to share, learn, and heal —<br />
          through music, rhythm & ancient wisdom.
        </p>

        <div className="fade-up" style={{
          display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
          animationDelay: "0.5s",
        }}>
          <a href="#offerings" className="btn-solid">Explore Offerings</a>
          <a href="#booking" className="btn-gold">Book a Session</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 2,
      }}>
        <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--gold-dim)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--gold-dim), transparent)" }} />
      </div>
    </section>
  );
}
