export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO — used for <time> and sitemap lastModified
  readMins: number;
  tag: string;
  /** Body as an array of simple blocks. Swap for MDX later; structure-only for now. */
  body: { type: "h2" | "p"; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "youtube-to-shorts-workflow",
    title: "The 5-minute workflow: turn one YouTube video into a week of Shorts",
    excerpt:
      "A repeatable process for pulling scroll-stopping vertical clips out of any long-form upload — without touching an editing timeline.",
    date: "2026-08-01",
    readMins: 5,
    tag: "Playbook",
    body: [
      { type: "p", text: "This is a placeholder post. Replace the body with the real article — the layout, SEO metadata, and routing are already wired up." },
      { type: "h2", text: "1. Start with the transcript, not the timeline" },
      { type: "p", text: "Describe the moment you want in plain English and let the AI surface the exact cut, scored by viral potential." },
      { type: "h2", text: "2. Reframe on the speaker" },
      { type: "p", text: "Face-aware 9:16 keeps whoever is talking in frame — no center-cropping people in half." },
      { type: "h2", text: "3. Caption, then ship" },
      { type: "p", text: "Word-by-word captions convert on muted feeds. Export in full HD, no watermark, and post." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
