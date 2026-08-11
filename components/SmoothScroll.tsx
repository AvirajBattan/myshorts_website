"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const NAV_OFFSET = -76; // sticky nav height, so sections aren't hidden under it

/** Buttery smooth scrolling (respects reduced-motion) + working hash-anchor links.
 *  Lenis controls scroll, so native "#section" jumps get overridden — we handle
 *  anchor clicks and incoming hashes explicitly via lenis.scrollTo. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let id = requestAnimationFrame(function raf(t: number) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });

    const scrollToHash = (hash: string, immediate = false) => {
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (el) lenis.scrollTo(el as HTMLElement, { offset: NAV_OFFSET, immediate });
    };

    // Smooth-scroll same-page anchor clicks ("#x" or "/#x" targeting this page).
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      const el = url.hash && document.querySelector(url.hash);
      if (!el) return; // let cross-page /#section links navigate normally
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: NAV_OFFSET });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    // Honor a hash we arrived with (e.g. navigating from /blog to /#pricing).
    if (window.location.hash) {
      const t = setTimeout(() => scrollToHash(window.location.hash), 90);
      return () => { clearTimeout(t); document.removeEventListener("click", onClick); cancelAnimationFrame(id); lenis.destroy(); };
    }
    return () => { document.removeEventListener("click", onClick); cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  return null;
}
