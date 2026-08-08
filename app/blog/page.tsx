import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog — playbooks for repurposing video",
  description: "Practical guides on turning long-form YouTube videos into Shorts, Reels and TikToks that get watched.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <section className="section blog-section">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Blog</span>
          <h2>Playbooks for repurposing video.</h2>
          <p className="sec-sub">Short, practical guides on getting more reach out of every upload.</p>
        </Reveal>
        <div className="post-list">
          {posts.map((p, i) => (
            <Reveal as="article" className="post-card" key={p.slug} delay={i * 0.06}>
              <Link href={`/blog/${p.slug}`}>
                <span className="post-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="post-meta">
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
                  <span>· {p.readMins} min read</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
