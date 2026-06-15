type MediaPlaceholderProps = {
  kind?: "image" | "video";
  label: string;
  ratio?: string; // e.g. "16 / 9"
  className?: string;
};

/**
 * Mock placeholder for media the client will swap in.
 * Marked clearly so it's obvious where to drop real assets.
 */
export default function MediaPlaceholder({
  kind = "image",
  label,
  ratio = "16 / 9",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-2xl border border-dashed border-line bg-surface/60 ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder — ${label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <span className="mono rounded-full border border-line bg-bg/60 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted">
          {kind === "video" ? "▶ video" : "▦ image"} placeholder
        </span>
        <span className="max-w-xs text-sm text-muted">{label}</span>
      </div>
    </div>
  );
}
