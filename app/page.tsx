import Link from "next/link";
import Hero from "@/components/Hero";
import Reframe from "@/components/Reframe";
import Reveal from "@/components/Reveal";
import FillVideo from "@/components/FillVideo";
import { usecaseList } from "@/content/usecases";

const APP = "https://app.myshorts.in";

const FAQS: [string, string][] = [
  ["Do I need to upload or download the video?", "No. Paste a YouTube link and we handle the rest — nothing to upload, nothing to install."],
  ["What quality are the clips?", "Full HD (up to 1440p) with no watermark — on every plan, including Free. Paid plans only add more monthly volume."],
  ["How does the AI know which part to clip?", "You describe the moment in plain English (“the most viral 30 seconds”, “where they explain X”). The AI reads the transcript and finds the best-matching cut, scored by viral potential."],
  ["Will it cut off the person speaking?", "No — the crop is face-aware and tracks the speaker. For two-person clips you can stack them (split) or zoom out (wide)."],
  ["Can I use my own AI key?", "Yes. Bring your own model key (Gemini, OpenAI or Claude) in settings, or use the built-in default."],
  ["Can I cancel anytime?", "Yes. Plans are monthly via Razorpay and you can cancel whenever you like."],
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Hero />

      {/* ===== TRUST STRIP ===== */}
      <section className="strip">
        <Reveal className="wrap strip-inner">
          <span className="strip-label">Built for creators, marketers &amp; educators</span>
          <div className="strip-chips">
            <em>Describe-a-clip AI</em>
            <em>Face-aware reframing</em>
            <em>Animated captions</em>
            <em>Summary · Notes · Q&amp;A</em>
          </div>
        </Reveal>
      </section>

      {/* ===== APP SHOWCASE ===== */}
      <section className="showcase">
        <div className="wrap">
          <Reveal className="sec-head showcase-head">
            <span className="eyebrow">Inside the app</span>
            <h2>Describe the moment. Get the clip.</h2>
            <p className="sec-sub">No timeline, no scrubbing — tell the AI what you want and it finds the exact cut.</p>
          </Reveal>
          <Reveal className="shot" delay={0.1}>
            <div className="browser">
              <div className="chrome"><i /><i /><i /><span className="url">app.myshorts.in</span></div>
              <div className="app">
                <aside className="app-rail">
                  <div className="brand-sm">MyShorts<b>.in</b></div>
                  <div className="rl-item on"><span className="th" /><span>How to build a habit</span></div>
                  <div className="rl-item"><span className="th" /><span>Neural networks explained</span></div>
                  <div className="rl-item"><span className="th" /><span>The science of focus</span></div>
                </aside>
                <div className="app-main">
                  <div className="composer"><span>&ldquo;the strongest hook&rdquo;</span><b>Find clips</b></div>
                  <div className="cc"><span className="score">92</span><div className="cc-t"><b>The 3-second rule</b><i>2:14–2:41 · 27s</i></div><span className="go">Render 9:16</span></div>
                  <div className="cc"><span className="score">86</span><div className="cc-t"><b>Why most people quit</b><i>5:02–5:38 · 36s</i></div><span className="go">Render 9:16</span></div>
                  <div className="cc"><span className="score">81</span><div className="cc-t"><b>The habit loop, explained</b><i>8:41–9:12 · 31s</i></div><span className="go">Render 9:16</span></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>Three steps. No editing timeline.</h2>
          </Reveal>
          <ol className="steps">
            {[
              { n: "01", h: "Paste a link", p: "Drop in any YouTube URL. We pull the transcript instantly — no upload, no download." },
              { n: "02", h: "Describe the moment", p: "“The most viral 30 seconds,” “where they explain the framework” — say it in plain English." },
              { n: "03", h: "Get your Shorts", p: "We reframe to 9:16 on the speaker, burn in captions, and hand you a ready-to-post clip." },
            ].map((s, i) => (
              <Reveal as="li" className="step" key={s.n} delay={i * 0.08}>
                <span className="step-no">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== FEATURE BENTO ===== */}
      <section className="section" id="features">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>From long-form to feed-ready, without the edit.</h2>
          </Reveal>
          <div className="bento">
            <Reveal as="article" className="tile">
              <div className="tile-body">
                <h3>Clip by description</h3>
                <p>Don&apos;t scrub an hour of footage. Say the moment you want in plain English — the AI finds the exact cut, scored by viral potential.</p>
              </div>
              <div className="tile-mini describe" aria-hidden="true">
                <div className="mini-find">
                  <div className="mf-bar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                    <span>&ldquo;the most viral 30 seconds&rdquo;</span>
                    <b>Find</b>
                  </div>
                  <div className="mf-row"><span className="mf-score">94</span><span className="mf-t">The 3-second hook</span><span className="mf-dur">0:27</span></div>
                  <div className="mf-row"><span className="mf-score">88</span><span className="mf-t">Why most people quit</span><span className="mf-dur">0:36</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="tile" delay={0.06}>
              <div className="tile-body">
                <h3>Face-aware 9:16</h3>
                <p>The crop tracks the speaker frame-by-frame — nobody gets cut off.</p>
              </div>
              <div className="tile-mini reframe"><FillVideo src="/reframe.mp4" /><div className="mini-reticle" /></div>
            </Reveal>
            <Reveal as="article" className="tile" delay={0.12}>
              <div className="tile-body">
                <h3>Captions that pop</h3>
                <p>Word-by-word subtitles in clean, bold, boxed or minimal styles.</p>
              </div>
              <div className="tile-mini caps"><span>captions</span> <span className="heat">that</span> <span>convert</span></div>
            </Reveal>
            <Reveal as="article" className="tile tile-wide" delay={0.06}>
              <div className="tile-body">
                <h3>Not just clips — understand the whole video</h3>
                <p>Every video also gets an instant summary, editable notes, a searchable transcript, and grounded Q&amp;A. Research and repurpose in one place.</p>
              </div>
              <div className="insight" aria-hidden="true">
                <div className="insight-tabs"><b>Summary</b><span>Notes</span><span>Transcript</span><span>Q&amp;A</span></div>
                <div className="insight-body">
                  <span className="il" /><span className="il" /><span className="il w80" />
                  <div className="insight-qa">
                    <span className="qa-q">Q</span>
                    <div className="qa-t"><b>What&apos;s the core framework?</b><i>Answered from the transcript · 0:00–12:40</i></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== REFRAME (scroll-scrubbed) ===== */}
      <Reframe />

      {/* ===== MORE THAN SHORTS (use-case landing links) ===== */}
      <section className="section" id="tools">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">More than Shorts</span>
            <h2>One link. Summaries, notes, answers — and Shorts.</h2>
            <p className="sec-sub">Paste a YouTube video once and MyShorts becomes whatever you need it to be.</p>
          </Reveal>
          <div className="uc-cards">
            {usecaseList.map((u, i) => (
              <Reveal as="article" className="uc-card" key={u.slug} delay={i * 0.06}>
                <Link href={`/${u.slug}`}>
                  <h3>{u.navLabel}</h3>
                  <p>{u.cardDesc}</p>
                  <span className="uc-card-go">Learn more →</span>
                </Link>
              </Reveal>
            ))}
            <Reveal as="article" className="uc-card" delay={usecaseList.length * 0.06}>
              <a href="#features">
                <h3>Viral Shorts</h3>
                <p>Turn the best moments into scroll-stopping 9:16 clips with captions.</p>
                <span className="uc-card-go">See how →</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="section" id="who">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">Made for</span><h2>Whatever you publish, publish more of it.</h2></Reveal>
          <div className="who-grid">
            {[
              { h: "Creators", p: "Turn every long upload into a week of Shorts, Reels and TikToks." },
              { h: "Marketers", p: "Slice webinars and podcasts into social-ready proof and hooks." },
              { h: "Educators", p: "Pull the key explanations into bite-size, captioned lessons." },
              { h: "Agencies", p: "Ship more clips per client without a bigger edit team." },
            ].map((w, i) => (
              <Reveal className="who-card" key={w.h} delay={i * 0.06}><h3>{w.h}</h3><p>{w.p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Pricing</span>
            <h2>Priced for India. Full quality on every plan.</h2>
            <p className="sec-sub">No watermark, no resolution caps — even on Free. Upgrade only for more volume.</p>
          </Reveal>
          <div className="price-grid">
            <Reveal as="article" className="price">
              <div className="price-name">Free</div>
              <div className="price-amt">₹0</div>
              <ul>
                <li>2 videos / month</li>
                <li>3 clip renders / month</li>
                <li>Full HD, no watermark</li>
                <li>Summary, notes &amp; Q&amp;A</li>
              </ul>
              <a className="btn btn-line" href={APP}>Start free</a>
            </Reveal>
            <Reveal as="article" className="price featured" delay={0.06}>
              <div className="price-tag">Most popular</div>
              <div className="price-name">Creator</div>
              <div className="price-amt">₹499<span>/mo</span></div>
              <ul>
                <li>10 videos / month</li>
                <li>20 clip renders / month</li>
                <li>All caption styles &amp; framing</li>
                <li>Full HD, no watermark</li>
              </ul>
              <a className="btn btn-signal" href={APP}>Choose Creator</a>
            </Reveal>
            <Reveal as="article" className="price" delay={0.12}>
              <div className="price-name">Pro</div>
              <div className="price-amt">₹1,299<span>/mo</span></div>
              <ul>
                <li>60 videos / month</li>
                <li>100 clip renders / month</li>
                <li>Priority rendering</li>
                <li>10 Q&amp;A per video</li>
              </ul>
              <a className="btn btn-line" href={APP}>Choose Pro</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><span className="eyebrow">FAQ</span><h2>Good questions.</h2></Reveal>
          <div className="faq">
            {FAQS.map(([q, a], i) => (
              <Reveal key={i} delay={i * 0.04}>
                <details><summary>{q}</summary><p>{a}</p></details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta-band">
        <Reveal className="wrap cta-inner">
          <h2>Your next viral Short is already inside a video you&apos;ve made.</h2>
          <a className="btn btn-dark btn-lg" href={APP}>Start free — paste a link</a>
        </Reveal>
      </section>
    </>
  );
}
