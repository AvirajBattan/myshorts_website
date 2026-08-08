"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

/** As you scroll through this tall section, the widescreen frame "reframes" into a
 *  9:16 vertical keep-zone (scrubbed), with the discarded edges dimming out. */
export default function Reframe() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const winW = useTransform(scrollYProgress, [0.05, 0.55], ["94%", "34%"]);
  const dim = useTransform(scrollYProgress, [0.05, 0.5], [0.12, 0.62]);
  const shadow = useMotionTemplate`0 0 0 1200px rgba(9,10,14,${dim})`;
  const capO = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const label916 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const label169 = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);

  return (
    <section className="rf-wrap" ref={ref} id="reframe">
      <div className="rf-sticky">
        <div className="wrap dive">
          <div className="dive-copy">
            <span className="eyebrow">Reframing</span>
            <h2>The speaker stays in frame. Always.</h2>
            <p>Most auto-croppers center-cut and slice people in half. MyShorts detects faces and pans with them — and for two people it stacks them podcast-style or zooms out so nobody&apos;s lost.</p>
            <ul className="ticks">
              <li><b>Speaker</b> — a tight vertical punch-in that follows the talker</li>
              <li><b>Wide</b> — zooms out so the whole scene stays in</li>
              <li><b>Split</b> — two faces, stacked and framed</li>
            </ul>
          </div>
          <div className="dive-visual">
            <div className="rf-media">
              <div className="scene" aria-hidden="true" />
              <motion.span className="rf-tag rf-tag-16" style={{ opacity: label169 }}>16:9 source</motion.span>
              <motion.div className="rf-window" style={{ width: winW, boxShadow: shadow }}>
                <motion.span className="rf-tag rf-tag-9" style={{ opacity: label916 }}>9:16</motion.span>
                <motion.div className="rf-cap" style={{ opacity: capO }}>watch <span className="heat">this</span> part</motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
