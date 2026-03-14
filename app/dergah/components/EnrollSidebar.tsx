"use client";

import { useState } from "react";
import LiveBadge from "./LiveBadge";

interface EnrollSidebarProps {
  price: number;
  isFree: boolean;
  sessionCount: number;
  isLive: boolean;
  level: string;
  language: string;
  duration: string;
}

export default function EnrollSidebar({
  price,
  isFree,
  sessionCount,
  isLive,
  level,
  language,
  duration,
}: EnrollSidebarProps) {
  const [enrolled, setEnrolled] = useState(false);

  const details = [
    { label: "Sessions", value: `${sessionCount} sessions` },
    { label: "Duration", value: duration },
    { label: "Level", value: level },
    { label: "Language", value: language },
  ];

  return (
    <div
      style={{
        border: "1px solid rgba(201,168,76,0.2)",
        background: "var(--card-glass)",
        backdropFilter: "blur(12px)",
        padding: "2rem",
        position: "sticky",
        top: 100,
      }}
    >
      {/* Price */}
      <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
        <span
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: isFree ? "1.6rem" : "2.2rem",
            color: isFree ? "var(--teal-light)" : "var(--gold)",
            letterSpacing: "0.05em",
          }}
        >
          {isFree ? "Free" : `$${price}`}
        </span>
        {!isFree && (
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.6rem",
              color: "var(--cream-dim)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: "0.25rem",
            }}
          >
            One-time access
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        onClick={() => setEnrolled(true)}
        className={enrolled ? "btn-solid" : "btn-gold"}
        style={{
          width: "100%",
          justifyContent: "center",
          marginBottom: "1.5rem",
          opacity: enrolled ? 0.75 : 1,
          cursor: enrolled ? "default" : "pointer",
          fontSize: "0.65rem",
        }}
      >
        {enrolled ? "✓  Enrolled" : isFree ? "Enroll for Free" : "Enroll Now"}
      </button>

      {/* Detail rows */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: "0" }}
      >
        {details.map(({ label, value }) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.65rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                opacity: 0.65,
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.78rem",
                color: "var(--cream-dim)",
                fontWeight: 300,
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Format badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.25rem",
        }}
      >
        <LiveBadge isLive={isLive} />
      </div>
    </div>
  );
}
