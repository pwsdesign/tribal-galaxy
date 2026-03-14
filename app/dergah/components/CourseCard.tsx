import type { Course } from "../data/mockData";
import LiveBadge from "./LiveBadge";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <>
      <style>{`
        .dg-course-card { transition: all 0.4s ease; }
        .dg-course-card:hover { border-color: rgba(201,168,76,0.28) !important; transform: translateY(-4px); }
      `}</style>
      <a
        href={`/dergah/courses/${course.slug}`}
        style={{ display: "block", textDecoration: "none", height: "100%" }}
      >
        <div
          className="dg-course-card"
          style={{
            border: "1px solid rgba(201,168,76,0.1)",
            background: "var(--card-glass)",
            backdropFilter: "blur(10px)",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Thumbnail */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              background: course.thumbnailGradient,
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
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
                  fontSize: "2.8rem",
                  color: "var(--gold)",
                  opacity: 0.1,
                }}
              >
                ✦
              </span>
            </div>
            <div
              style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}
            >
              <LiveBadge isLive={course.isLive} />
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
              {course.category}
            </p>
            <h3
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "0.82rem",
                color: "var(--cream)",
                marginBottom: "0.3rem",
                letterSpacing: "0.05em",
                lineHeight: 1.4,
              }}
            >
              {course.title}
            </h3>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                color: "var(--cream-dim)",
                marginBottom: "1rem",
                fontWeight: 300,
              }}
            >
              with {course.teacherName}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.65rem",
                  color: "var(--cream-dim)",
                  letterSpacing: "0.12em",
                }}
              >
                {course.sessionCount} sessions
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: course.isFree ? "var(--teal-light)" : "var(--gold)",
                }}
              >
                {course.isFree ? "Free" : `$${course.price}`}
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
