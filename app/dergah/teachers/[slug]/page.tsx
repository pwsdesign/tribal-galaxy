import { teachers, getTeacherBySlug, getCoursesByIds } from "../../data/mockData";
import CourseCard from "../../components/CourseCard";

export function generateStaticParams(): { slug: string }[] {
  return teachers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);
  return {
    title: teacher
      ? `${teacher.name} · Dergah | Tribal Galaxy`
      : "Teacher · Dergah | Tribal Galaxy",
  };
}

export default async function TeacherProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);

  if (!teacher) {
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
          Teacher not found
        </h2>
        <a href="/dergah/teachers" className="btn-gold">
          Browse Teachers
        </a>
      </div>
    );
  }

  const teacherCourses = getCoursesByIds(teacher.courseIds);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(201,168,76,0.07)",
        }}
      >
        {/* Photo gradient backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: teacher.photoGradient,
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, var(--void) 100%)",
          }}
        />

        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          {/* Back */}
          <a
            href="/dergah/teachers"
            style={{
              display: "inline-block",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold-dim)",
              textDecoration: "none",
              marginBottom: "2.5rem",
            }}
          >
            ← All Teachers
          </a>

          {/* Photo placeholder */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: teacher.photoGradient,
              border: "2px solid rgba(201,168,76,0.3)",
              margin: "0 auto 1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "2.2rem",
                color: "var(--gold)",
                opacity: 0.25,
              }}
            >
              ✦
            </span>
          </div>

          <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
            {teacher.discipline}
          </p>

          <h1
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
              color: "var(--cream)",
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
            }}
          >
            {teacher.name}
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--gold)",
              opacity: 0.85,
              maxWidth: 560,
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            &ldquo;{teacher.quote}&rdquo;
          </p>

          <a
            href="/#booking"
            className="btn-gold"
            style={{ fontSize: "0.65rem" }}
          >
            Book a Private Session
          </a>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2rem", maxWidth: 860, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3.5rem",
          }}
        >
          {/* Full bio */}
          <div>
            <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
              About
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "var(--cream-dim)",
                lineHeight: 1.85,
              }}
            >
              {teacher.fullBio}
            </p>
          </div>

          {/* Lineage + Approach */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
                Lineage
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  color: "var(--cream-dim)",
                  lineHeight: 1.8,
                }}
              >
                {teacher.lineage}
              </p>
            </div>

            <div>
              <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
                Approach
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "var(--cream-dim)",
                  lineHeight: 1.8,
                }}
              >
                {teacher.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────────────── */}
      {teacherCourses.length > 0 && (
        <section
          style={{
            padding: "4rem 2rem 6rem",
            background: "rgba(14,11,31,0.4)",
            borderTop: "1px solid rgba(201,168,76,0.07)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
              With {teacher.name}
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                color: "var(--cream)",
                letterSpacing: "0.08em",
                marginBottom: "2.5rem",
              }}
            >
              Courses
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {teacherCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
