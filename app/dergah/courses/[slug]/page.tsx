import { courses, getCourseBySlug, getCoursesByIds, getTeacherById } from "../../data/mockData";
import CurriculumAccordion from "../../components/CurriculumAccordion";
import EnrollSidebar from "../../components/EnrollSidebar";
import CourseCard from "../../components/CourseCard";
import LiveBadge from "../../components/LiveBadge";

export function generateStaticParams(): { slug: string }[] {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course
      ? `${course.title} · Dergah | Tribal Galaxy`
      : "Course · Dergah | Tribal Galaxy",
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          color: "var(--cream-dim)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "1.2rem",
            color: "var(--cream)",
            marginBottom: "1rem",
          }}
        >
          Course not found
        </h2>
        <a href="/dergah/courses" className="btn-gold">
          Browse Courses
        </a>
      </div>
    );
  }

  const teacher = getTeacherById(course.teacherId);
  const relatedCourses = getCoursesByIds(course.relatedCourseIds);

  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "4rem 2rem 3rem",
          background: course.thumbnailGradient,
          borderBottom: "1px solid rgba(201,168,76,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 30%, var(--void) 100%)",
          }}
        />
        {/* Decorative glyph */}
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(6rem, 15vw, 12rem)",
            color: "var(--gold)",
            opacity: 0.05,
            fontFamily: "'Cinzel Decorative', serif",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ✦
        </div>

        <div
          style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}
        >
          <a
            href="/dergah/courses"
            style={{
              display: "inline-block",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold-dim)",
              textDecoration: "none",
              marginBottom: "1.75rem",
            }}
          >
            ← All Courses
          </a>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <p className="section-tag">{course.category}</p>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream-dim)",
                opacity: 0.6,
              }}
            >
              {course.level}
            </span>
            <LiveBadge isLive={course.isLive} />
          </div>

          <h1
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.5rem, 5vw, 2.8rem)",
              color: "var(--cream)",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            {course.title}
          </h1>

          {teacher && (
            <a
              href={`/dergah/teachers/${teacher.slug}`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "var(--gold)",
                opacity: 0.8,
                textDecoration: "none",
              }}
            >
              with {teacher.name}
            </a>
          )}
        </div>
      </section>

      {/* ── Body + Sidebar ──────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "3rem 2rem 6rem",
          display: "grid",
          gridTemplateColumns: "1fr min(340px, 100%)",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Main content */}
        <div style={{ minWidth: 0 }}>
          {/* Description */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              color: "var(--cream-dim)",
              lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            {course.description}
          </p>

          {/* What you receive */}
          <div
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              border: "1px solid rgba(201,168,76,0.12)",
              background: "rgba(201,168,76,0.02)",
            }}
          >
            <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
              What You Will Receive
            </p>
            <h3
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "0.95rem",
                color: "var(--cream)",
                letterSpacing: "0.06em",
                marginBottom: "1.25rem",
              }}
            >
              Inside This Course
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {course.whatYouReceive.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.85rem",
                    alignItems: "flex-start",
                    padding: "0.6rem 0",
                    borderBottom:
                      i < course.whatYouReceive.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.6rem",
                      marginTop: "0.25em",
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--cream-dim)",
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
              Program Outline
            </p>
            <h3
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "0.95rem",
                color: "var(--cream)",
                letterSpacing: "0.06em",
                marginBottom: "1.5rem",
              }}
            >
              Curriculum · {course.curriculum.length} Modules
            </h3>
            <CurriculumAccordion curriculum={course.curriculum} />
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <EnrollSidebar
            price={course.price}
            isFree={course.isFree}
            sessionCount={course.sessionCount}
            isLive={course.isLive}
            level={course.level}
            language={course.language}
            duration={course.duration}
          />
        </div>
      </div>

      {/* ── Related Courses ─────────────────────────────────────────── */}
      {relatedCourses.length > 0 && (
        <section
          style={{
            padding: "4rem 2rem 5rem",
            borderTop: "1px solid rgba(201,168,76,0.07)",
            background: "rgba(14,11,31,0.4)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
              Continue Your Journey
            </p>
            <h3
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                color: "var(--cream)",
                letterSpacing: "0.08em",
                marginBottom: "2rem",
              }}
            >
              Related Courses
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {relatedCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile sidebar (below main on small screens) */}
      <style>{`
        @media (max-width: 768px) {
          .dg-course-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
