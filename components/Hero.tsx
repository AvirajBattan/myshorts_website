"use client";
import { motion } from "framer-motion";
import FillVideo from "./FillVideo";

const APP = "https://app.myshorts.in";
const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Hero() {
  const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
  const item = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <motion.div className="hero-copy" variants={stagger} initial="initial" animate="animate">
          <motion.span className="eyebrow" variants={item}>AI Shorts studio</motion.span>
          <motion.h1 variants={item}>One video in.<br />A <span className="hl">month of Shorts</span> out.</motion.h1>
          <motion.p className="lede" variants={item}>Paste a YouTube link and describe the moment you want. MyShorts finds it, reframes it to vertical, and burns in captions — a scroll-stopping 9:16 Short in seconds.</motion.p>
          <motion.form className="paste" action={APP} method="get" variants={item}>
            <span className="paste-yt" aria-hidden="true"><svg viewBox="0 0 28 20"><rect width="28" height="20" rx="6" fill="currentColor" /><path d="M11 6v8l7-4z" fill="#fff" /></svg></span>
            <input type="url" name="url" placeholder="Paste a YouTube link…" aria-label="YouTube video URL" />
            <button className="btn btn-signal" type="submit">Get Shorts →</button>
          </motion.form>
          <motion.p className="paste-note" variants={item}><b>Works with any YouTube video</b> · free to start, no card</motion.p>
          <motion.ul className="hero-trust" variants={item}>
            <li>Full HD on every plan</li><li>No watermark</li><li>From ₹499/mo</li>
          </motion.ul>
        </motion.div>

        <motion.div className="hero-stage" initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.15 }}>
          <div className="source-frame">
            <div className="scene" aria-hidden="true" />
            <FillVideo src="/source.mp4" />
            <span className="src-tag"><svg className="ytd" viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" rx="5" fill="#FF0033" /><path d="M11 6v8l7-4z" fill="#fff" /></svg> youtube.com</span>
            <div className="fd-scan" aria-hidden="true" />
            <div className="fd-box" aria-hidden="true"><span className="fd-label">Speaker 98%</span></div>
          </div>
          <div className="phone">
            <div className="phone-notch" aria-hidden="true" />
            <div className="short">
              <div className="scene" aria-hidden="true" />
              <FillVideo src="/short.mp4" />
              <span className="short-badge">9:16 · Short</span>
              <div className="captions" aria-hidden="true">
                <span>this</span> <span>one</span> <span>trick</span> <span className="heat">changed</span> <span className="heat">everything</span>
              </div>
              <div className="short-progress"><i /></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
