interface LiveBadgeProps {
  isLive: boolean;
}

export default function LiveBadge({ isLive }: LiveBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.2rem 0.65rem",
        background: isLive
          ? "rgba(139,32,53,0.18)"
          : "rgba(42,138,122,0.14)",
        border: `1px solid ${isLive ? "rgba(139,32,53,0.35)" : "rgba(42,138,122,0.3)"}`,
        fontFamily: "'Jost', sans-serif",
        fontSize: "0.58rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: isLive ? "var(--crimson)" : "var(--teal-light)",
      }}
    >
      {isLive && (
        <span
          className="pulse-ring"
          style={{
            display: "inline-block",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "var(--crimson)",
            flexShrink: 0,
          }}
        />
      )}
      {isLive ? "Live" : "On Demand"}
    </span>
  );
}
