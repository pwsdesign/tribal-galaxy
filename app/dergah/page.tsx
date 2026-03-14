import { teachers, courses } from "./data/mockData";
import TeacherCard from "./components/TeacherCard";
import CourseCard from "./components/CourseCard";
import CategoryStrip from "./components/CategoryStrip";

export default function DergahPage() {
  const featuredTeachers = teachers;
  const featuredCourses = courses.slice(0, 3);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "5rem 2rem 4rem",
          position: "relative",
        }}
      >
        {/* Glow behind title */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "40vh",
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <p className="section-tag fade-up" style={{ marginBottom: "1.75rem" }}>
          The Portal
        </p>

        <h1
          className="gold-glow fade-up"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(3.5rem, 11vw, 9rem)",
            letterSpacing: "0.18em",
            color: "var(--cream)",
            lineHeight: 1,
            marginBottom: "1.75rem",
          }}
        >
          DERGAH
        </h1>

        <p
          className="fade-up"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.15rem, 2.5vw, 1.65rem)",
            color: "var(--cream-dim)",
            letterSpacing: "0.04em",
            marginBottom: "2rem",
            lineHeight: 1.4,
          }}
        >
          A threshold for those who teach from the inside out.
        </p>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 1,
            background: "var(--gold)",
            opacity: 0.3,
            marginBottom: "2rem",
          }}
        />

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "var(--cream-dim)",
            lineHeight: 1.75,
            maxWidth: 580,
            marginBottom: "3rem",
          }}
        >
          Dergah is an ancient word for a sacred gathering place — a threshold
          where teachers and seekers meet. This is Tribal Galaxy&apos;s online
          learning portal for healing arts, music, meditation, breathwork, and
          spiritual education.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="/dergah/courses" className="btn-solid">
            Explore Courses
          </a>
          <a href="/dergah/teachers" className="btn-gold">
            Meet the Teachers
          </a>
        </div>

        {/* Scroll glyph */}
        <div
          className="scroll-indicator"
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--gold)",
            opacity: 0.3,
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            fontFamily: "'Jost', sans-serif",
          }}
        >
          ↓
        </div>
      </section>

      {/* ── Featured Teachers ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 2rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
              Who Teaches Here
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                color: "var(--cream)",
                letterSpacing: "0.08em",
              }}
            >
              The Teachers
            </h2>
          </div>
          <a
            href="/dergah/teachers"
            className="nav-link"
            style={{ fontSize: "0.65rem" }}
          >
            View All →
          </a>
        </div>

        {/* Horizontal scroll row */}
        <>
          <style>{`
            .dg-teachers-scroll { scrollbar-width: none; -ms-overflow-style: none; }
            .dg-teachers-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          <div
            className="dg-teachers-scroll"
            style={{
              display: "flex",
              gap: "1.25rem",
              overflowX: "auto",
              paddingBottom: "0.5rem",
            }}
          >
            {featuredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} compact />
            ))}
          </div>
        </>
      </section>

      {/* ── Featured Courses ───────────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "rgba(14,11,31,0.4)",
          borderTop: "1px solid rgba(201,168,76,0.06)",
          borderBottom: "1px solid rgba(201,168,76,0.06)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
                Begin Your Journey
              </p>
              <h2
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                  color: "var(--cream)",
                  letterSpacing: "0.08em",
                }}
              >
                Featured Courses
              </h2>
            </div>
            <a
              href="/dergah/courses"
              className="nav-link"
              style={{ fontSize: "0.65rem" }}
            >
              Browse All →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
          Explore by Path
        </p>
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
            color: "var(--cream)",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
          }}
        >
          Disciplines
        </h2>
        <CategoryStrip />
      </section>

      {/* ── Teach on Dergah ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          background: "rgba(201,168,76,0.03)",
          borderTop: "1px solid rgba(201,168,76,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glyph */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(8rem, 20vw, 18rem)",
              color: "var(--gold)",
              opacity: 0.025,
              userSelect: "none",
            }}
          >
            ✦
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="section-tag" style={{ marginBottom: "1rem" }}>
            For Teachers & Facilitators
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
              color: "var(--cream)",
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
            }}
          >
            Teach on Dergah
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--cream-dim)",
              lineHeight: 1.75,
              maxWidth: 540,
              margin: "0 auto 2.5rem",
            }}
          >
            If you carry a lineage, a practice, or a calling to share — Dergah
            is your portal. We welcome teachers of healing arts, music,
            movement, breathwork, ceremony, and the sacred sciences.
          </p>
          <a href="/#booking" className="btn-gold">
            Apply to Teach
          </a>
        </div>
      </section>
    </>
  );
}
