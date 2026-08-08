// MyShorts.ai landing — minimal, purposeful JS.

// Sticky nav: solidify on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const burger = document.getElementById("burger");
burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
document.getElementById("navLinks")?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); burger?.setAttribute("aria-expanded", "false"); }
});

// Scroll-reveal (subtle rise + fade), respecting reduced motion
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
if (reduce || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // light stagger for siblings entering together
        setTimeout(() => entry.target.classList.add("in"), Math.min(i * 60, 180));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((el) => io.observe(el));
}

// Video fallback: load a real clip if the file exists in /assets, else keep the
// animated scene (so a missing/blocked video never shows a black box).
document.querySelectorAll(".fill-vid").forEach((v) => {
  const s = v.dataset.src;
  if (!s) return;
  v.addEventListener("loadeddata", () => {
    v.classList.add("loaded");
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  });
  v.addEventListener("error", () => v.classList.remove("loaded"));
  v.src = s;
});

// Scroll-choreographed motion via GSAP (additive — falls back to mouse parallax if
// GSAP didn't load, and to nothing if reduced-motion is on).
const stage = document.querySelector(".hero-stage");
const src = stage && stage.querySelector(".source-frame");
const ph = stage && stage.querySelector(".phone");

if (!reduce && window.gsap && window.ScrollTrigger) {
  const g = window.gsap;
  g.registerPlugin(window.ScrollTrigger);
  // hero visual drifts apart as you scroll (depth)
  if (src) g.to(src, { yPercent: -18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  if (ph) g.to(ph, { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  // cinematic settle for the app showcase
  const shot = document.querySelector(".shot .browser");
  if (shot) g.from(shot, { y: 72, scale: 0.94, ease: "power3.out", duration: 1.1, scrollTrigger: { trigger: ".showcase", start: "top 80%" } });
  // deep-dive phone slow drift
  const dph = document.querySelector(".dive-visual .phone");
  if (dph) g.to(dph, { yPercent: -12, ease: "none", scrollTrigger: { trigger: ".dive", start: "top bottom", end: "bottom top", scrub: true } });
} else if (!reduce && stage) {
  // fallback: subtle mouse parallax on the hero visual
  const hero = document.querySelector(".hero");
  hero.addEventListener("mousemove", (e) => {
    const r = stage.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    if (src) src.style.transform = `translate(${dx * 14}px, ${dy * 10}px)`;
    if (ph) ph.style.transform = `translate(${dx * -10}px, ${dy * -6}px)`;
  });
  hero.addEventListener("mouseleave", () => {
    if (src) src.style.transform = "";
    if (ph) ph.style.transform = "";
  });
}

// Current year in footer
const yr = document.getElementById("yr");
if (yr) yr.textContent = String(new Date().getFullYear());
