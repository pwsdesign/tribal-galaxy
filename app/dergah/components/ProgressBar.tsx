interface ProgressBarProps {
  progress: number; // 0–100
  label?: string;
  showPercent?: boolean;
}

export default function ProgressBar({
  progress,
  label,
  showPercent = true,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));
  return (
    <div>
      {(label || showPercent) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.4rem",
          }}
        >
          {label && (
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                color: "var(--cream-dim)",
                fontWeight: 300,
              }}
            >
              {label}
            </span>
          )}
          {showPercent && (
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                color: "var(--gold)",
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
            >
              {clamped}%
            </span>
          )}
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: 2,
          background: "rgba(255,255,255,0.07)",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${clamped}%`,
            height: "100%",
            background:
              "linear-gradient(90deg, var(--teal) 0%, var(--gold) 100%)",
            transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}
