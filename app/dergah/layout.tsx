import Nav from "@/app/components/Nav";

export const metadata = {
  title: "Dergah | Tribal Galaxy Learning Portal",
  description:
    "A sacred gathering place for healing arts, music, meditation, breathwork, and spiritual education.",
};

export default function DergahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--void)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Ambient background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(ellipse at 20% 15%, rgba(42,138,122,0.035) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 85%, rgba(201,168,76,0.03) 0%, transparent 55%),
            radial-gradient(ellipse at 65% 20%, rgba(139,32,53,0.02) 0%, transparent 40%)
          `,
        }}
      />

      <Nav />

      <main style={{ position: "relative", zIndex: 1, paddingTop: "88px" }}>
        {children}
      </main>

      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(201,168,76,0.08)",
          padding: "2.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          ← Tribal Galaxy
        </a>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: "var(--cream-dim)",
            opacity: 0.5,
          }}
        >
          Dergah · A threshold for seekers and teachers
        </span>
        <a
          href="/dergah/teachers"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            textDecoration: "none",
          }}
        >
          Teach on Dergah →
        </a>
      </footer>
    </div>
  );
}
