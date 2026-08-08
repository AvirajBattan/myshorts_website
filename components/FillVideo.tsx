"use client";
import { useEffect, useRef, useState } from "react";

/** Plays a real clip if the file exists in /public; otherwise stays transparent so the
 *  animated .scene behind it shows (never a black box). Checks readyState on mount so a
 *  clip that finished loading before hydration still fades in (avoids the loadeddata race). */
export default function FillVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (v.readyState >= 2) { setLoaded(true); return; }
    const onLoad = () => setLoaded(true);
    const onErr = () => setLoaded(false);
    v.addEventListener("loadeddata", onLoad);
    v.addEventListener("error", onErr);
    return () => { v.removeEventListener("loadeddata", onLoad); v.removeEventListener("error", onErr); };
  }, []);

  return (
    <video
      ref={ref}
      className={`fill-vid${loaded ? " loaded" : ""}`}
      autoPlay muted loop playsInline preload="metadata" poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
