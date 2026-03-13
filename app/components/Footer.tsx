"use client";
export default function Footer() {
  return (
    <footer className="section-reveal" style={{
      padding: "5rem 2rem 3rem",
      borderTop: "1px solid rgba(201,168,76,0.1)",
      position: "relative", zIndex: 1,
      background: "var(--footer-glass)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15.5" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
                <path d="M16 4L17.5 13H26L19 18L21.5 27L16 22L10.5 27L13 18L6 13H14.5L16 4Z"
                      fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="0.8" />
                <circle cx="16" cy="16" r="2" fill="rgba(201,168,76,0.8)" />
              </svg>
              <span style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "0.9rem", color: "var(--gold)" }}>
                Tribal Galaxy
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--cream-dim)", lineHeight: 1.9, fontWeight: 300, maxWidth: 280 }}>
              Uniting people through rhythm, healing, and the universal language of music since 2017.
            </p>
            <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "var(--cream-dim)", fontWeight: 300 }}>
              1040 MacArthur Causeway<br />
              Edgewater, Miami, FL
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem", opacity: 0.8 }}>
              Explore
            </h4>
            {["About Us", "Our Offerings", "Classes & Schedule", "Ceremonies", "Tribal Designs", "Recording Studio"].map((l) => (
                <a key={l} href="#" className="footer-link" style={{ display: "block", fontSize: "0.85rem", fontWeight: 300, marginBottom: "0.75rem" }}>
                {l}
              </a>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem", opacity: 0.8 }}>
              Experience
            </h4>
            {["Sound Healing", "Temazcal", "Full Moon", "Breathwork", "Sound Bath", "Community Events"].map((l) => (
              <a key={l} href="#" className="footer-link" style={{ display: "block", fontSize: "0.85rem", fontWeight: 300, marginBottom: "0.75rem" }}>
                {l}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem", opacity: 0.8 }}>
              Connect
            </h4>
            {[
              { label: "Instagram", href: "https://instagram.com/tribalgalaxy" },
              { label: "LinkTree", href: "https://linktr.ee/Tribalgalaxy" },
              { label: "Book a Session", href: "#booking" },
              { label: "Support Our Mission", href: "https://givebutter.com" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="footer-link" style={{ display: "block", fontSize: "0.85rem", fontWeight: 300, marginBottom: "0.75rem" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "2rem",
          borderTop: "1px solid rgba(201,168,76,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
        }}>
          <p style={{ fontSize: "0.7rem", color: "rgba(196,180,154,0.4)", fontWeight: 300 }}>
            © {new Date().getFullYear()} Tribal Galaxy. All rights reserved. Miami, FL.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem", fontStyle: "italic",
            color: "rgba(201,168,76,0.4)",
          }}>
            "Understand the Whole · Celebration Of Life"
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
