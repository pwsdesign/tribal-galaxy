import type { Teacher } from "../data/mockData";

interface TeacherCardProps {
  teacher: Teacher;
  compact?: boolean;
}

export default function TeacherCard({
  teacher,
  compact = false,
}: TeacherCardProps) {
  return (
    <>
      <style>{`
        .dg-teacher-card { transition: all 0.4s ease; }
        .dg-teacher-card:hover { border-color: rgba(201,168,76,0.3) !important; transform: translateY(-4px); }
      `}</style>
      <a
        href={`/dergah/teachers/${teacher.slug}`}
        style={{
          display: "block",
          textDecoration: "none",
          flexShrink: compact ? 0 : undefined,
          width: compact ? 210 : "100%",
        }}
      >
        <div
          className="dg-teacher-card"
          style={{
            border: "1px solid rgba(201,168,76,0.1)",
            background: "var(--card-glass)",
            backdropFilter: "blur(10px)",
            overflow: "hidden",
            height: "100%",
          }}
        >
          {/* Photo placeholder */}
          <div
            style={{
              width: "100%",
              aspectRatio: compact ? "1 / 1.1" : "4 / 3",
              background: teacher.photoGradient,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: compact ? "2rem" : "2.5rem",
                  color: "var(--gold)",
                  opacity: 0.12,
                  letterSpacing: "0.1em",
                }}
              >
                ✦
              </span>
            </div>
            {/* Discipline tag overlaid */}
            <div
              style={{
                position: "absolute",
                bottom: "0.75rem",
                left: "0.75rem",
              }}
            >
              <span className="section-tag">{teacher.discipline}</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: compact ? "1rem" : "1.25rem" }}>
            <h3
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: compact ? "0.72rem" : "0.85rem",
                letterSpacing: "0.08em",
                color: "var(--cream)",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
              }}
            >
              {teacher.name}
            </h3>
            {!compact && (
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.95rem",
                  color: "var(--cream-dim)",
                  lineHeight: 1.65,
                }}
              >
                {teacher.shortBio}
              </p>
            )}
          </div>
        </div>
      </a>
    </>
  );
}
