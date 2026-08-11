import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { usecaseList } from "@/content/usecases";

const SITE = "https://myshorts.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/privacy", "/terms"].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  // Use-case landing pages — high priority (they carry the non-"shorts" search intents).
  const useCasePages = usecaseList.map((u) => ({
    url: `${SITE}/${u.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...useCasePages, ...blogPages];
}
