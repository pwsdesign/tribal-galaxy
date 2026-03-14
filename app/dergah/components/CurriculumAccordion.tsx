"use client";

import { useState } from "react";
import type { CourseModule } from "../data/mockData";

interface CurriculumAccordionProps {
  curriculum: CourseModule[];
}

export default function CurriculumAccordion({
  curriculum,
}: CurriculumAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      {curriculum.map((module, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: `1px solid ${isOpen ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.1)"}`,
              background: isOpen
                ? "rgba(201,168,76,0.04)"
                : "var(--card-glass)",
              transition: "all 0.3s ease",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "1rem",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.58rem",
                    color: "var(--gold)",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.2rem",
                  }}
                >
                  Module {i + 1}
                </span>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    color: "var(--cream)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {module.title}
                </p>
              </div>
              <span
                style={{
                  color: "var(--gold)",
                  fontSize: "0.8rem",
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  opacity: 0.7,
                }}
              >
                ↓
              </span>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 1.25rem 1.25rem",
                  borderTop: "1px solid rgba(201,168,76,0.08)",
                }}
              >
                <div style={{ paddingTop: "0.75rem" }}>
                  {module.lessons.map((lesson, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        padding: "0.45rem 0",
                        borderBottom:
                          j < module.lessons.length - 1
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--gold-dim)",
                          fontSize: "0.65rem",
                          flexShrink: 0,
                          marginTop: "0.1em",
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.78rem",
                          color: "var(--cream-dim)",
                          fontWeight: 300,
                          lineHeight: 1.5,
                        }}
                      >
                        {lesson}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
