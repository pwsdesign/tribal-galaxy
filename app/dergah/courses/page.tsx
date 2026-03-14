import { courses } from "../data/mockData";
import CourseCard from "../components/CourseCard";

export const metadata = {
  title: "Courses · Dergah | Tribal Galaxy",
};

export default function CoursesPage() {
  const freeCourses = courses.filter((c) => c.isFree);
  const paidCourses = courses.filter((c) => !c.isFree);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
          Dergah
        </p>
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "var(--cream)",
            letterSpacing: "0.1em",
            marginBottom: "1.25rem",
          }}
        >
          All Courses
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--cream-dim)",
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Percussion. Sound. Breath. Yoga. Voice. Meditation. Each path leads
          inward.
        </p>
      </div>

      {/* Free courses */}
      {freeCourses.length > 0 && (
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            <p className="section-tag">Begin Here · Free</p>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "rgba(42,138,122,0.2)",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {freeCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* Paid courses */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.75rem",
          }}
        >
          <p className="section-tag">Full Programs</p>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "rgba(201,168,76,0.15)",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {paidCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
