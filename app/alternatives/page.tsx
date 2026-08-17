import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { compareList } from "@/content/usecases";

const SITE = "https://myshorts.in";
const APP = "https://app.myshorts.in";

export const metadata: Metadata = {
  title: "MyShorts Alternatives — Compare vs Opus Clip, Klap, Eightify & more",
  description:
    "Looking for the best AI video tool? See how MyShorts compares to Opus Clip, Klap, Vizard, Submagic, Eightify, NoteGPT, Glasp and more — full HD, no watermark on every plan, priced for India from ₹499/mo.",
  keywords: [
    "myshorts alternatives",
    "opus clip alternative",
    "klap alternative",
    "eightify alternative",
    "youtube shorts tool comparison",
    "ai video tool alternatives",
    "best youtube to shorts tool",
    "best youtube summarizer",
  ],
  alternates: { canonical: "/alternatives" },
  openGraph: {
    type: "website",
    url: `${SITE}/alternatives`,
    siteName: "MyShorts",
    title: "MyShorts vs the alternatives",
    description:
      "How MyShorts compares to the popular tools for Shorts, summaries and notes — full HD, no watermark, from ₹499/mo.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "MyShorts alternatives compared", description: "Full HD, no watermark, priced for India — plus summaries, notes and Q&A." },
};

export default function AlternativesHub() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MyShorts alternatives",
    itemListElement: compareList.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: u.navLabel,
      url: `${SITE}/${u.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <section className="section uc-hero">
        <Reveal className="uc-hero-inner">
          <span className="eyebrow">Comparisons</span>
          <h1>MyShorts vs the <span className="hl">alternatives</span>.</h1>
          <p className="lede">
            Comparing AI video tools? MyShorts turns any YouTube video into face-aware 9:16 Shorts with
            captions — and, from the same link, summaries, editable notes, a transcript, and grounded Q&amp;A.
            Full HD and no watermark on every plan, including Free, priced for India from ₹499/mo.
          </p>
          <a className="btn btn-signal btn-lg" href={APP}>Start free — paste a link</a>
        </Reveal>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Side by side</span>
            <h2>Pick the tool you&apos;re comparing.</h2>
            <p className="sec-sub">Each page shows exactly what MyShorts gives you as an alternative.</p>
          </Reveal>
          <div className="alt-hub-grid">
            {compareList.map((u, i) => (
              <Reveal as="article" className="uc-card" key={u.slug} delay={i * 0.03}>
                <Link href={`/${u.slug}`}>
                  <h3>{u.navLabel}</h3>
                  <p>{u.cardDesc}</p>
                  <span className="uc-card-go">Compare →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section uc-body">
        <div className="wrap">
          <div className="uc-prose">
            <Reveal>
              <h2>What makes MyShorts a strong alternative</h2>
              <p>
                Most AI Shorts and video-summary tools were built for a US audience: they price in dollars, and
                their cheaper tiers add watermarks or cap resolution. MyShorts flips that. Full HD and a
                watermark-free export are standard on every plan — including Free — so your clips look like yours
                from the very first render. Paid plans start at ₹499/month and only add monthly volume, never quality.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>One tool instead of five</h2>
              <p>
                Where most alternatives do one job — clip a video, or summarize it, or caption it — MyShorts does
                the whole workflow from a single YouTube link. Describe the moment you want and it finds the exact
                cut, reframes it to a face-aware 9:16, and burns in animated captions. The same link also gives you
                a structured summary with timestamps, editable notes you can export, a searchable transcript, and
                grounded Q&amp;A that answers from what was actually said in the video. That means fewer subscriptions,
                one place to work, and more Shorts, summaries and notes out of every upload.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <Reveal className="wrap cta-inner">
          <h2>See the difference on your own video.</h2>
          <a className="btn btn-dark btn-lg" href={APP}>Start free — paste a link</a>
        </Reveal>
      </section>
    </>
  );
}
