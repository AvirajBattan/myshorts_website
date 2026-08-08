import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/posts";

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
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "MyShorts" },
    mainEntityOfPage: `https://myshorts.in/blog/${post.slug}`,
  };

  return (
    <article className="section article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap article-wrap">
        <Link className="article-back" href="/blog">← All posts</Link>
        <span className="post-tag">{post.tag}</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
          <span>· {post.readMins} min read</span>
        </div>
        <div className="article-body">
          {post.body.map((b, i) =>
            b.type === "h2" ? <h2 key={i}>{b.text}</h2> : <p key={i}>{b.text}</p>
          )}
        </div>
      </div>
    </article>
  );
}
