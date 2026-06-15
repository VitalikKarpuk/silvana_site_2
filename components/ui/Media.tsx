"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import MediaPlaceholder from "./MediaPlaceholder";

type MediaProps = {
  kind?: "image" | "video";
  /**
   * Path under /public, e.g. "/images/blog/v2.jpg".
   * Pass an array to try several candidates in order (first that loads wins) —
   * handy when the real asset's extension isn't known ahead of time.
   */
  src: string | string[];
  alt?: string;
  /** Label shown on the placeholder while the file is missing. */
  label: string;
  ratio?: string; // e.g. "16 / 9"
  poster?: string;
  className?: string;
  /** object-fit for the rendered media. Use "contain" for logos. */
  fit?: "cover" | "contain";
  /**
   * Blend a brand aurora gradient over raster images (png/jpg/webp) so
   * light-background covers cohere with the dark theme. SVG mocks are skipped
   * (already on-theme). Ignored for video.
   */
  tint?: boolean;
  /** Rendered instead of the placeholder when the file is absent. */
  fallback?: ReactNode;
};

/**
 * Two-layer tint that keeps the image visible while it coheres with the dark
 * theme: a soft dark scrim dims the bright background, then a brand aurora is
 * screened on top for the glow seen in the mock covers.
 */
const TINT_SCRIM = {
  background:
    "linear-gradient(180deg, rgba(8,9,10,0.32) 0%, rgba(8,9,10,0.58) 100%)",
};
const TINT_GLOW = {
  background:
    "radial-gradient(70% 90% at 22% 8%, rgba(214,68,143,0.42), transparent 60%)," +
    "radial-gradient(70% 90% at 82% 4%, rgba(139,92,246,0.38), transparent 60%)",
  mixBlendMode: "screen" as const,
};

const RASTER = /\.(png|jpe?g|webp|avif)$/i;

/**
 * Drop-in media: shows the real asset once it exists at `src`, otherwise a
 * placeholder (or a provided fallback). No code change needed to swap — just
 * put the file in /public at the documented path.
 */
export default function Media({
  kind = "image",
  src,
  alt = "",
  label,
  ratio = "16 / 9",
  poster,
  className = "",
  fit = "cover",
  tint = false,
  fallback,
}: MediaProps) {
  const candidates = Array.isArray(src) ? src : [src];
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const [index, setIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Advance to the next candidate; once exhausted, show the fallback.
  const onError = () => setIndex((i) => i + 1);
  const exhausted = index >= candidates.length;

  // Catch loads that already failed before hydration (SSR'd <img> whose 404
  // error fired before React attached onError) and advance to the next source.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) onError();
  }, [index]);

  if (exhausted) {
    return (
      <>{fallback ?? <MediaPlaceholder kind={kind} label={label} ratio={ratio} className={className} />}</>
    );
  }

  const current = candidates[index];

  if (kind === "video") {
    return (
      <video
        key={current}
        src={current}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        onError={onError}
        aria-label={alt || label}
        className={`block w-full rounded-2xl ${fitClass} ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  /* eslint-disable @next/next/no-img-element */
  const img = (
    <img
      key={current}
      ref={imgRef}
      src={current}
      alt={alt || label}
      onError={onError}
      className={`block h-full w-full ${fitClass}`}
      style={{ aspectRatio: ratio }}
    />
  );

  // Plain image (SVG mocks / un-tinted): render the <img> directly.
  if (!tint || !RASTER.test(current)) {
    return (
      <img
        key={current}
        ref={imgRef}
        src={current}
        alt={alt || label}
        onError={onError}
        className={`block w-full rounded-2xl ${fitClass} ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  // Tinted raster: image + aurora multiply overlay, clipped to the frame.
  return (
    <div
      className={`relative block w-full overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {img}
      <div className="pointer-events-none absolute inset-0" style={TINT_SCRIM} />
      <div className="pointer-events-none absolute inset-0" style={TINT_GLOW} />
    </div>
  );
}
