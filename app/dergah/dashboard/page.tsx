"use client";

import { dashboardData, courses, getCoursesByIds } from "../data/mockData";
import CourseCard from "../components/CourseCard";
import ProgressBar from "../components/ProgressBar";

export default function DashboardPage() {
  const { studentName, enrolledCourses, upcomingSessions, recommendedCourseIds } =
    dashboardData;

  const recommended = getCoursesByIds(recommendedCourseIds);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem 6rem" }}>
      {/* ── Greeting ──────────────────────────────────────────────── */}
      <div
        style={{
          marginBottom: "3.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
          Your Portal
        </p>
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
            color: "var(--cream)",
            letterSpacing: "0.08em",
          }}
        >
          Welcome back, {studentName}
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          marginBottom: "4rem",
        }}
      >
        {/* ── My Courses ──────────────────────────────────────────── */}
        <div>
          <p className="section-tag" style={{ marginBottom: "1.25rem" }}>
            My Courses
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {enrolledCourses.map((ec) => {
              const course = courses.find((c) => c.id === ec.courseId);
              return (
                <a
                  key={ec.courseId}
                  href={course ? `/dergah/courses/${course.slug}` : "#"}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    padding: "1.5rem",
                    border: "1px solid rgba(201,168,76,0.12)",
                    background: "var(--card-glass)",
                    backdropFilter: "blur(10px)",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "0.78rem",
                      color: "var(--cream)",
                      letterSpacing: "0.06em",
                      marginBottom: "0.3rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {ec.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.65rem",
                      color: "var(--gold-dim)",
                      letterSpacing: "0.12em",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {ec.teacherName}
                  </p>
                  <ProgressBar progress={ec.progress} />
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.62rem",
                      color: "var(--cream-dim)",
                      marginTop: "0.5rem",
                      opacity: 0.6,
                    }}
                  >
                    {ec.completedSessions} of {ec.totalSessions} sessions complete
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Upcoming Live Sessions ───────────────────────────────── */}
        <div>
          <p className="section-tag" style={{ marginBottom: "1.25rem" }}>
            Upcoming Live Sessions
          </p>

          {upcomingSessions.length === 0 ? (
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "var(--cream-dim)",
                opacity: 0.6,
              }}
            >
              No upcoming sessions. Browse live courses to enroll.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {upcomingSessions.map((session) => {
                const course = courses.find((c) => c.id === session.courseId);
                return (
                  <div
                    key={session.id}
                    style={{
                      padding: "1.5rem",
                      border: "1px solid rgba(139,32,53,0.2)",
                      background: "rgba(139,32,53,0.05)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {/* Live indicator */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        className="pulse-ring"
                        style={{
                          display: "inline-block",
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--crimson)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.58rem",
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "var(--crimson)",
                        }}
                      >
                        Live Session
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontSize: "0.78rem",
                        color: "var(--cream)",
                        letterSpacing: "0.05em",
                        marginBottom: "0.4rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {session.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.65rem",
                        color: "var(--gold-dim)",
                        letterSpacing: "0.1em",
                        marginBottom: "1rem",
                      }}
                    >
                      {session.teacherName}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        marginBottom: "1.25rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.72rem",
                          color: "var(--cream-dim)",
                        }}
                      >
                        📅 {session.date}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.72rem",
                          color: "var(--cream-dim)",
                        }}
                      >
                        🕖 {session.time}
                      </span>
                    </div>

                    <a
                      href={course ? `/dergah/courses/${course.slug}` : "#"}
                      className="btn-gold"
                      style={{ fontSize: "0.6rem", padding: "0.6rem 1.25rem" }}
                    >
                      View Session
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── Recommended ─────────────────────────────────────────────── */}
      <div>
        <p className="section-tag" style={{ marginBottom: "0.5rem" }}>
          Chosen for You
        </p>
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "var(--cream)",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
          }}
        >
          Recommended
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {recommended.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
