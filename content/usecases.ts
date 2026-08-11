export type UseCase = {
  slug: string;
  navLabel: string;          // short label for nav/footer/cross-links
  // SEO
  title: string;             // <title> (the layout appends "· MyShorts")
  description: string;
  keywords: string[];
  // hero
  eyebrow: string;
  h1lead: string;            // plain text before the ember highlight
  h1highlight: string;       // ember-highlighted phrase
  h1tail: string;            // text after the highlight
  lede: string;
  cardDesc: string;          // one-liner used on cross-link cards
  steps: { n: string; h: string; p: string }[];
  features: { h: string; p: string }[];
  faqs: [string, string][];
};

export const USECASES: Record<string, UseCase> = {
  "youtube-summarizer": {
    slug: "youtube-summarizer",
    navLabel: "Summarize",
    title: "YouTube Video Summarizer — Summarize any video in seconds",
    description:
      "Paste a YouTube link and get a clean, structured AI summary — key points, takeaways, and timestamps — in seconds. Free to start, no download. Works on long podcasts, lectures and webinars.",
    keywords: [
      "youtube video summarizer",
      "summarize youtube video",
      "ai video summary",
      "tldr youtube video",
      "summarize a video with ai",
      "youtube summary generator",
    ],
    eyebrow: "Video summaries",
    h1lead: "Summarize any YouTube video ",
    h1highlight: "in seconds",
    h1tail: ".",
    lede: "Paste a link and MyShorts reads the entire transcript, then hands you a clean, structured summary — key points, takeaways, and timestamps — so you skip the 40-minute watch.",
    cardDesc: "Key points, takeaways and timestamps from any video — instantly.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "Any video — a podcast, lecture, webinar or tutorial. No upload, no download." },
      { n: "02", h: "We read the transcript", p: "The AI processes the full transcript, not just the title or description." },
      { n: "03", h: "Get a structured summary", p: "Key points, takeaways and section timestamps you can skim in under a minute." },
    ],
    features: [
      { h: "Key points & takeaways", p: "The important ideas pulled out and organized — not a wall of text." },
      { h: "Timestamped sections", p: "Jump straight to the part you actually care about." },
      { h: "Built for long videos", p: "Hour-long podcasts and lectures summarize just as easily as short clips." },
      { h: "More than a summary", p: "Every video also gets editable notes, grounded Q&A, and viral 9:16 Shorts." },
    ],
    faqs: [
      ["Is the YouTube summarizer free?", "Yes — you can summarize videos for free, no card required. Summaries are generated once and saved to your library."],
      ["Does it work on long videos?", "Yes. It reads the full transcript, so hour-long podcasts, lectures and webinars summarize just as well as short clips."],
      ["Do I need to download the video?", "No. Paste a YouTube link and MyShorts handles the rest — nothing to upload or install."],
      ["Are there timestamps?", "Yes — summaries include section timestamps so you can jump to the exact moment in the original video."],
      ["How accurate is the summary?", "It's generated from the actual transcript, so it reflects what was said. Always give AI output a quick review before relying on it."],
    ],
  },

  "youtube-notes": {
    slug: "youtube-notes",
    navLabel: "Notes",
    title: "Turn YouTube Videos Into Notes — AI video notes",
    description:
      "Turn any YouTube video into clean, organized, editable notes with AI. Perfect for students, researchers and meetings. Paste a link — no pausing, no scribbling. Free to start.",
    keywords: [
      "youtube video notes",
      "take notes from youtube",
      "video to notes ai",
      "study notes from youtube",
      "note taking from videos",
      "youtube notes generator",
    ],
    eyebrow: "Video notes",
    h1lead: "Turn any YouTube video into ",
    h1highlight: "clean, editable notes",
    h1tail: ".",
    lede: "Stop pausing and scribbling. MyShorts turns a video's transcript into organized, editable notes you can keep, edit, and export — ready to study or share.",
    cardDesc: "Structured, editable notes from any video — keep and export them.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "A lecture, tutorial, meeting recording or podcast — anything with speech." },
      { n: "02", h: "We structure the content", p: "The transcript becomes organized notes with headings and bullet points." },
      { n: "03", h: "Edit & export", p: "Tweak anything, then copy or download your notes to keep forever." },
    ],
    features: [
      { h: "Organized automatically", p: "Headings and bullets instead of a raw transcript dump." },
      { h: "Fully editable", p: "Add, remove or rewrite anything — the notes are yours." },
      { h: "Export & keep", p: "Copy or download so your notes live in your own system." },
      { h: "For students & teams", p: "Study notes, research notes, meeting notes — plus summaries, Q&A and Shorts." },
    ],
    faqs: [
      ["Can I edit the notes?", "Yes — the notes are fully editable. Rewrite, add or delete anything before you export."],
      ["Is it good for studying?", "Absolutely. Turn lectures and explainer videos into clean study notes with headings and key points."],
      ["Can I export my notes?", "Yes — copy them or download them so they live wherever you take notes."],
      ["Do I need to watch the whole video?", "No. Paste the link and MyShorts builds the notes from the transcript for you."],
      ["Is it free?", "You can create notes for free, no card required — upgrade only when you need more monthly volume."],
    ],
  },

  "chat-with-youtube": {
    slug: "chat-with-youtube",
    navLabel: "Ask a video",
    title: "Chat With Any YouTube Video — ask questions, get answers",
    description:
      "Ask any YouTube video a question and get a grounded answer with the timestamp — straight from the transcript. Find what was said without scrubbing. Free to start, no download.",
    keywords: [
      "chat with youtube video",
      "ask questions about a video",
      "youtube video q&a",
      "talk to a video ai",
      "ask a youtube video",
      "question answering video",
    ],
    eyebrow: "Ask the video",
    h1lead: "Ask any YouTube video ",
    h1highlight: "anything",
    h1tail: ".",
    lede: "Have a question about a video? Just ask. MyShorts answers from the actual transcript — grounded, with the timestamp — so you find exactly what was said without scrubbing the timeline.",
    cardDesc: "Ask a question, get a grounded answer with the timestamp.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "Any talk, tutorial, interview or lecture you have a question about." },
      { n: "02", h: "Ask your question", p: "In plain English — “what did they say about X?”, “what's the main argument?”" },
      { n: "03", h: "Get a grounded answer", p: "Answered from the transcript, with the timestamp so you can verify it." },
    ],
    features: [
      { h: "Grounded in the transcript", p: "Answers come from what's actually said in the video — not made up." },
      { h: "Jump to the moment", p: "Every answer points to the timestamp so you can watch that exact part." },
      { h: "Ask follow-ups", p: "Keep the conversation going until you've got what you need." },
      { h: "The whole toolkit", p: "The same video also gives you a summary, editable notes, and viral Shorts." },
    ],
    faqs: [
      ["How is this different from a normal chatbot?", "Answers are grounded in the video's transcript and cite the timestamp, so you get what was actually said — not a generic guess."],
      ["Can I ask follow-up questions?", "Yes — it's a conversation. Keep asking until you've found what you need."],
      ["Does it show where the answer is?", "Yes — each answer includes the timestamp so you can jump to that exact moment in the video."],
      ["Do I need to watch the video first?", "No. Paste the link and start asking — MyShorts reads the transcript for you."],
      ["Is it free?", "You can ask questions for free (a few per video); paid plans raise the limit."],
    ],
  },
};

export const usecaseList = Object.values(USECASES);
export const getUseCase = (slug: string) => USECASES[slug];
