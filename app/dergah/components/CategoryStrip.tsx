import { categories } from "../data/mockData";

export default function CategoryStrip() {
  return (
    <>
      <style>{`
        .dg-cat-strip { scrollbar-width: none; -ms-overflow-style: none; }
        .dg-cat-strip::-webkit-scrollbar { display: none; }
        .dg-cat-pill { transition: all 0.3s ease; }
        .dg-cat-pill:hover {
          background: rgba(201,168,76,0.12) !important;
          border-color: rgba(201,168,76,0.4) !important;
          color: var(--gold) !important;
        }
      `}</style>
      <div
        className="dg-cat-strip"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "0.65rem",
          paddingBottom: "0.25rem",
        }}
      >
        {categories.map((cat) => (
          <a
            key={cat}
            href={`/dergah/courses`}
            className="dg-cat-pill"
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              padding: "0.5rem 1.25rem",
              border: "1px solid rgba(201,168,76,0.18)",
              background: "var(--card-glass)",
              color: "var(--cream-dim)",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </a>
        ))}
      </div>
    </>
  );
}
