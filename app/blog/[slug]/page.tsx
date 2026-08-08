import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/posts";

const SITE = "https://myshorts.in";
const APP = "https://app.myshorts.in";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/og.png"] },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    author: { "@type": "Organization", name: "MyShorts", url: SITE },
    publisher: { "@type": "Organization", name: "MyShorts", url: SITE },
    image: `${SITE}/og.png`,
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  return (
    <article className="section article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="wrap article-wrap">
        <Link className="article-back" href="/blog">← All posts</Link>
        <span className="post-tag">{post.tag}</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
          <span>· {post.readMins} min read</span>
        </div>

        <div className="article-body">
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.type === "ul") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
            return <p key={i}>{b.text}</p>;
          })}
        </div>

        <div className="article-cta">
          <h3>Turn your next video into Shorts</h3>
          <p>Paste a YouTube link, describe the moment, and get a full-HD 9:16 Short — free to start, no card.</p>
          <a className="btn btn-signal btn-lg" href={APP}>Start free →</a>
        </div>

        {related.length > 0 && (
          <aside className="article-related">
            <h3>Keep reading</h3>
            <div className="related-list">
              {related.map((r) => (
                <Link key={r.slug} className="related-card" href={`/blog/${r.slug}`}>
                  <span className="post-tag">{r.tag}</span>
                  <b>{r.title}</b>
                  <span className="related-excerpt">{r.excerpt}</span>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
