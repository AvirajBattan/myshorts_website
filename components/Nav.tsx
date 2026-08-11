"use client";
import { useEffect, useState } from "react";

const APP = "https://app.myshorts.in";

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <defs><linearGradient id="msw" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FF7A5A" /><stop offset="1" stopColor="#F5342B" /></linearGradient></defs>
        <rect x="6" y="6" width="36" height="36" rx="11" fill="url(#msw)" />
        <path d="M20 16.5 L32 24 L20 31.5 Z" fill="#fff" />
        <path d="M14 12 l1.1 2.4 2.4 1.1 -2.4 1.1 -1.1 2.4 -1.1 -2.4 -2.4 -1.1 2.4 -1.1 Z" fill="#fff" />
      </svg>
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="/#top" aria-label="MyShorts home"><Mark /><span className="brand-word">MyShorts<span className="brand-ai">.in</span></span></a>
        <nav className="nav-links" onClick={() => setOpen(false)} aria-label="Primary">
          <a href="/#how">How it works</a>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/blog">Blog</a>
          {/* shown inside the mobile dropdown only */}
          <div className="nav-links-cta">
            <a className="btn btn-line" href={APP}>Sign in</a>
            <a className="btn btn-signal" href={APP}>Start free →</a>
          </div>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost" href={APP}>Sign in</a>
          <a className="btn btn-signal" href={APP}>Start free</a>
        </div>
        {/* persistent compact CTA on mobile */}
        <a className="btn btn-signal btn-sm nav-cta-mini" href={APP}>Open app</a>
        <button className="nav-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
