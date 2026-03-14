import { teachers } from "../data/mockData";
import TeacherCard from "../components/TeacherCard";

export const metadata = {
  title: "Teachers · Dergah | Tribal Galaxy",
};

export default function TeachersPage() {
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
          The Teachers
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
          Those who teach from the inside out — practitioners who have lived
          what they offer.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

      {/* Teach CTA */}
      <div
        style={{
          marginTop: "5rem",
          padding: "3rem 2rem",
          textAlign: "center",
          border: "1px solid rgba(201,168,76,0.12)",
          background: "rgba(201,168,76,0.02)",
        }}
      >
        <p className="section-tag" style={{ marginBottom: "0.75rem" }}>
          Are You a Teacher?
        </p>
        <h3
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "1.1rem",
            color: "var(--cream)",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Teach on Dergah
        </h3>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            color: "var(--cream-dim)",
            marginBottom: "1.75rem",
            lineHeight: 1.7,
          }}
        >
          We welcome practitioners of healing arts, rhythm, movement,
          breathwork, and spiritual education.
        </p>
        <a href="/#booking" className="btn-gold">
          Apply to Teach
        </a>
      </div>
    </div>
  );
}
