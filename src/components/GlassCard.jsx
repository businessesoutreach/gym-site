// ── Reusable glass card ─────────────────────────────────────────────────────────
// Usage: import { GlassCard } from "./GlassCard";
// <GlassCard style={{ padding: 24 }}>...</GlassCard>
export default function GlassCard({ children, className = "", style = {} }) {
  return (
    <div
      className={`bg-white/4 backdrop-blur-md border border-white/8 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}