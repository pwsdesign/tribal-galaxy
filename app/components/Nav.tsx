"use client";
import { useState, useEffect } from "react";

type ThemeMode = "dark" | "light";
const THEME_KEY = "tribal-theme-mode";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const savedMode = window.localStorage.getItem(THEME_KEY);
    const isLightPreferred = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialMode = (savedMode === "light" || savedMode === "dark" ? savedMode : isLightPreferred ? "light" : "dark") as ThemeMode;
    document.documentElement.dataset.theme = initialMode;
    setThemeMode(initialMode);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleThemeToggle = () => {
    const nextMode: ThemeMode = themeMode === "dark" ? "light" : "dark";
    setThemeMode(nextMode);
    document.documentElement.dataset.theme = nextMode;
    window.localStorage.setItem(THEME_KEY, nextMode);
  };

  const links = [
    { label: "About", href: "/#about" },
    { label: "Offerings", href: "/#offerings" },
    { label: "Classes", href: "/#classes" },
    { label: "Ceremonies", href: "/#ceremonies" },
    { label: "Book", href: "/#booking" },
  ];

  return (
    <nav
      className="nav-shell"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: scrolled ? "1rem 2rem" : "1.75rem 2rem",
        background: scrolled ? "var(--surface-glass)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.08)" : "none",
        transition: "all 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div className="nav-logo-sigil" style={{
          width: 36, height: 36,
          border: "1px solid rgba(201,168,76,0.4)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 9H21L15 13.5L17.5 21L12 16.5L6.5 21L9 13.5L3 9H10.5L12 2Z" fill="rgba(201,168,76,0.9)" />
          </svg>
        </div>
        <span style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          color: "var(--gold)",
          lineHeight: 1.1,
        }}>
          Tribal<br />
          <span style={{ fontWeight: 400, fontSize: "0.65rem", color: "var(--cream-dim)" }}>Galaxy</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden-mobile">
        {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          {/* Dergah portal link */}
          <a
            href="/dergah"
            className="nav-link"
            style={{ color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            Dergah
            <span
              className="pulse-ring"
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--gold)",
                flexShrink: 0,
              }}
            />
          </a>
          <button
            type="button"
            aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            onClick={handleThemeToggle}
            data-mode={themeMode}
            className="theme-toggle"
            style={{ marginTop: "-1px" }}
          >
            <span className="theme-toggle-icon">{themeMode === "light" ? "☀" : "🌙"}</span>
            <span className="theme-toggle-thumb" />
          </button>
          <a href="#booking" className="btn-gold" style={{ padding: "0.5rem 1.25rem", fontSize: "0.65rem" }}>
            Book Now
          </a>
        </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        className="show-mobile"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 22, height: 1, background: "var(--gold)", transition: "all 0.3s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)" :
                         menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, top: 72,
          background: "var(--surface-glass)",
          backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "2.5rem", zIndex: 400,
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link" style={{ fontSize: "1rem", letterSpacing: "0.3em" }}
               onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a
            href="/dergah"
            className="nav-link"
            style={{ fontSize: "1rem", letterSpacing: "0.3em", color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            onClick={() => setMenuOpen(false)}
          >
            Dergah
            <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
          </a>
          <button
            type="button"
            aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            onClick={handleThemeToggle}
            data-mode={themeMode}
            className="theme-toggle"
            style={{ marginTop: "0.5rem" }}
          >
            <span className="theme-toggle-icon">{themeMode === "light" ? "☀" : "🌙"}</span>
            <span className="theme-toggle-thumb" />
          </button>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
