import Link from "next/link";
import Reveal from "@/components/Reveal";
import { type UseCase, usecaseList } from "@/content/usecases";

const APP = "https://app.myshorts.in";

export default function UseCasePage({ data }: { data: UseCase }) {
  const others = usecaseList.filter((u) => u.slug !== data.slug);

  return (
    <>
      {/* hero */}
      <section className="section uc-hero">
        <Reveal className="uc-hero-inner">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.h1lead}<span className="hl">{data.h1highlight}</span>{data.h1tail}</h1>
          <p className="lede">{data.lede}</p>
          <form className="paste" action={APP} method="get">
            <span className="paste-yt" aria-hidden="true"><svg viewBox="0 0 28 20"><rect width="28" height="20" rx="6" fill="currentColor" /><path d="M11 6v8l7-4z" fill="#fff" /></svg></span>
            <input type="url" name="url" placeholder="Paste a YouTube link…" aria-label="YouTube video URL" />
            <button className="btn btn-signal" type="submit">Try it free →</button>
          </form>
          <p className="paste-note"><b>Free to start</b> · no card · no download</p>
        </Reveal>
      </section>

      {/* how it works */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">How it works</span><h2>Three steps. No editing.</h2></Reveal>
          <ol className="steps">
            {data.steps.map((s, i) => (
              <Reveal as="li" className="step" key={s.n} delay={i * 0.08}>
                <span className="step-no">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* features */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">What you get</span><h2>Everything you need, from one link.</h2></Reveal>
          <div className="who-grid">
            {data.features.map((f, i) => (
              <Reveal className="who-card" key={f.h} delay={i * 0.06}><h3>{f.h}</h3><p>{f.p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cross-links to other use cases (internal linking + discovery) */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head"><span className="eyebrow">One video, everything</span><h2>MyShorts does more than this.</h2><p className="sec-sub">The same YouTube link powers every one of these.</p></Reveal>
          <div className="uc-cards">
            {others.map((u, i) => (
              <Reveal as="article" className="uc-card" key={u.slug} delay={i * 0.06}>
                <Link href={`/${u.slug}`}>
                  <h3>{u.navLabel}</h3>
                  <p>{u.cardDesc}</p>
                  <span className="uc-card-go">Learn more →</span>
                </Link>
              </Reveal>
            ))}
            <Reveal as="article" className="uc-card" delay={others.length * 0.06}>
              <Link href="/#top">
                <h3>Viral Shorts</h3>
                <p>Turn the best moments into scroll-stopping 9:16 clips with captions.</p>
                <span className="uc-card-go">Learn more →</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap faq-wrap">
          <Reveal className="sec-head"><span className="eyebrow">FAQ</span><h2>Good questions.</h2></Reveal>
          <div className="faq">
            {data.faqs.map(([q, a], i) => (
              <Reveal key={i} delay={i * 0.04}><details><summary>{q}</summary><p>{a}</p></details></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <Reveal className="wrap cta-inner">
          <h2>{data.h1lead}{data.h1highlight}{data.h1tail}</h2>
          <a className="btn btn-dark btn-lg" href={APP}>Start free — paste a link</a>
        </Reveal>
      </section>
    </>
  );
}
