import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";

const SITE = "https://myshorts.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/privacy", "/terms"].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const blogPages = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...blogPages];
}
