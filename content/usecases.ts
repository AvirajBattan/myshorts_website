export type UseCase = {
  slug: string;
  kind: "feature" | "compare";  // feature pages show in nav/footer/home; compare pages are "X alternative" SEO pages
  navLabel: string;             // short label for nav/footer/cross-links
  // SEO
  title: string;                // <title> (the layout appends "· MyShorts")
  description: string;
  keywords: string[];
  // hero
  eyebrow: string;
  h1lead: string;               // plain text before the ember highlight
  h1highlight: string;          // ember-highlighted phrase
  h1tail: string;               // text after the highlight
  lede: string;
  cardDesc: string;             // one-liner used on cross-link cards
  steps: { n: string; h: string; p: string }[];
  features: { h: string; p: string }[];
  faqs: [string, string][];
};

export const USECASES: Record<string, UseCase> = {
  "youtube-summarizer": {
    slug: "youtube-summarizer",
    kind: "feature",
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
    kind: "feature",
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
    kind: "feature",
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

  "opus-clip-alternative": {
    slug: "opus-clip-alternative",
    kind: "compare",
    navLabel: "Opus Clip alternative",
    title: "Opus Clip Alternative — Turn videos into Shorts, priced for India",
    description:
      "Looking for an Opus Clip alternative? MyShorts turns any YouTube video into face-aware 9:16 Shorts with captions — full HD and no watermark on every plan, including Free, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "opus clip alternative",
      "opusclip alternative",
      "youtube to shorts alternative",
      "ai shorts tool",
      "clip generator alternative",
      "opus clip india",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Opus Clip alternative",
    h1tail: " built for creators in India.",
    lede: "Turn any YouTube video into scroll-stopping vertical Shorts — face-aware reframing, animated captions, full HD, and no watermark on every plan, including Free. Priced in rupees, from ₹499/mo.",
    cardDesc: "Turn videos into Shorts — full HD, no watermark, from ₹499/mo.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload, no download — MyShorts pulls the transcript instantly." },
      { n: "02", h: "Describe the moment", p: "Say the clip you want in plain English; the AI finds the exact cut." },
      { n: "03", h: "Get a ready-to-post Short", p: "Face-aware 9:16 with burned-in captions, in full HD with no watermark." },
    ],
    features: [
      { h: "No watermark — on every plan", p: "Your clips look like yours from day one, including on the Free plan." },
      { h: "Full HD, no resolution caps", p: "Quality is standard, not a paid upgrade." },
      { h: "Priced for India", p: "Plans in rupees, from ₹499/mo — start free, upgrade only for more volume." },
      { h: "More than clips", p: "The same link also gives you summaries, editable notes and grounded Q&A." },
    ],
    faqs: [
      ["Is MyShorts a good Opus Clip alternative?", "If you want face-aware vertical clips with captions, full HD and no watermark on every plan, and pricing in rupees, MyShorts is built for exactly that — plus summaries, notes and Q&A from the same video."],
      ["Does the free plan add a watermark?", "No. MyShorts adds no watermark on any plan, including Free, and there are no resolution caps."],
      ["Is it available in India and priced in rupees?", "Yes — plans start at ₹499/mo, billed via Razorpay, and you can cancel anytime."],
      ["Does it keep the speaker in frame?", "Yes — the 9:16 crop is face-aware and tracks the speaker, with Wide and Split framing for two people."],
      ["What else can it do?", "Beyond Shorts, every video gets an instant summary, editable notes, a searchable transcript, and grounded Q&A."],
    ],
  },

  "eightify-alternative": {
    slug: "eightify-alternative",
    kind: "compare",
    navLabel: "Eightify alternative",
    title: "Eightify Alternative — Summarize videos, plus notes, Q&A and Shorts",
    description:
      "A free Eightify alternative: paste a YouTube link and get an AI summary with timestamps — plus editable notes, grounded Q&A, and viral Shorts. One tool, on the web, no extension or download.",
    keywords: [
      "eightify alternative",
      "youtube summarizer alternative",
      "ai youtube summary tool",
      "free youtube summarizer",
      "video summary alternative",
      "youtube summary without extension",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Eightify alternative",
    h1tail: " that does more than summaries.",
    lede: "Get instant AI summaries of any YouTube video with timestamps — then go further with editable notes, grounded Q&A, and scroll-stopping Shorts. All from one link, right in your browser.",
    cardDesc: "AI summaries with timestamps — plus notes, Q&A and Shorts.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No browser extension to install — it works on the web." },
      { n: "02", h: "We read the transcript", p: "The AI summarizes the full video, not just the description." },
      { n: "03", h: "Get a summary — and more", p: "Key points and timestamps, plus notes, Q&A and Shorts on demand." },
    ],
    features: [
      { h: "Structured summaries", p: "Key points and takeaways with section timestamps you can jump to." },
      { h: "Editable notes", p: "Turn the summary into notes you can rewrite, keep and export." },
      { h: "Grounded Q&A", p: "Ask the video a question and get an answer with the timestamp." },
      { h: "Makes Shorts too", p: "Pull the best moments into face-aware 9:16 clips with captions." },
    ],
    faqs: [
      ["Is MyShorts a good Eightify alternative?", "If you want AI summaries with timestamps plus editable notes, grounded Q&A, and the ability to make Shorts — all from one YouTube link — MyShorts covers all of it."],
      ["Do I need a browser extension?", "No. MyShorts runs on the web — just paste a YouTube link, nothing to install."],
      ["Does it summarize long videos?", "Yes — it reads the full transcript, so long podcasts and lectures summarize just as well as short videos."],
      ["Is it free?", "Yes — you can summarize videos for free, no card required, with paid plans for more monthly volume."],
      ["What else can it do?", "Editable notes, grounded Q&A with timestamps, a searchable transcript, and viral 9:16 Shorts — all from the same video."],
    ],
  },

  "klap-alternative": {
    slug: "klap-alternative",
    kind: "compare",
    navLabel: "Klap alternative",
    title: "Klap Alternative — YouTube to Shorts, full HD & no watermark",
    description:
      "A Klap alternative built for creators in India: turn any YouTube video into face-aware 9:16 Shorts with captions — full HD, no watermark on every plan including Free, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "klap alternative",
      "klap.app alternative",
      "youtube to shorts alternative",
      "ai clip tool alternative",
      "shorts generator alternative",
      "klap india",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Klap alternative",
    h1tail: " priced for India.",
    lede: "Turn long YouTube videos into scroll-stopping vertical Shorts — face-aware reframing, animated captions, full HD, and no watermark on any plan. Priced in rupees, from ₹499/mo.",
    cardDesc: "YouTube → Shorts, full HD, no watermark, from ₹499/mo.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload, no download — the transcript is pulled instantly." },
      { n: "02", h: "Describe the moment", p: "Say the clip you want in plain English; the AI finds the exact cut." },
      { n: "03", h: "Get a ready-to-post Short", p: "Face-aware 9:16 with captions, full HD, no watermark." },
    ],
    features: [
      { h: "No watermark — every plan", p: "Clips look like yours from day one, including on Free." },
      { h: "Full HD, no caps", p: "Quality is standard, not a paid upgrade." },
      { h: "Priced for India", p: "Plans in rupees, from ₹499/mo — start free." },
      { h: "All-in-one", p: "Also gives you summaries, notes and grounded Q&A." },
    ],
    faqs: [
      ["Is MyShorts a good Klap alternative?", "If you want face-aware vertical Shorts with captions, full HD and no watermark on every plan, plus rupee pricing and summaries/notes/Q&A, MyShorts is built for that."],
      ["Does the free plan add a watermark?", "No — MyShorts adds no watermark on any plan, including Free, with no resolution caps."],
      ["Is it priced in rupees?", "Yes — plans start at ₹499/mo, billed via Razorpay, cancel anytime."],
      ["Does it keep the speaker in frame?", "Yes — the 9:16 crop is face-aware, with Wide and Split framing for two people."],
      ["What else can it do?", "Every video also gets an instant summary, editable notes, a searchable transcript, and grounded Q&A."],
    ],
  },

  "vizard-alternative": {
    slug: "vizard-alternative",
    kind: "compare",
    navLabel: "Vizard alternative",
    title: "Vizard Alternative — Turn videos into Shorts, no watermark",
    description:
      "A Vizard alternative for creators in India: turn any YouTube video into face-aware 9:16 clips with captions — full HD, no watermark on every plan including Free, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "vizard alternative",
      "vizard.ai alternative",
      "ai video clipping alternative",
      "youtube to shorts alternative",
      "clip generator alternative",
      "vizard india",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Vizard alternative",
    h1tail: " that does more than clips.",
    lede: "Turn any YouTube video into face-aware vertical clips with captions — full HD, no watermark, priced in rupees from ₹499/mo. Then get summaries, notes and Q&A from the same link.",
    cardDesc: "Face-aware clips, full HD, no watermark — plus summaries & notes.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "MyShorts pulls the transcript instantly — nothing to install." },
      { n: "02", h: "Describe the moment", p: "The AI finds the exact cut, scored by viral potential." },
      { n: "03", h: "Get your Short", p: "Face-aware 9:16 with burned-in captions, full HD, no watermark." },
    ],
    features: [
      { h: "No watermark on Free", p: "Ship clips that look like yours from the first render." },
      { h: "Full HD quality", p: "No resolution caps on any plan." },
      { h: "Rupee pricing", p: "From ₹499/mo — start free, upgrade only for volume." },
      { h: "More than clips", p: "Summaries, editable notes and grounded Q&A, from one link." },
    ],
    faqs: [
      ["Is MyShorts a good Vizard alternative?", "If you want face-aware vertical clips with captions and no watermark, full HD, rupee pricing, and summaries/notes/Q&A in the same tool, MyShorts covers it."],
      ["Is there a watermark on the free plan?", "No — no watermark on any plan, including Free, and no resolution caps."],
      ["Is it available in India?", "Yes — plans start at ₹499/mo via Razorpay, cancel anytime."],
      ["Does it track the speaker?", "Yes — the crop is face-aware, with Wide and Split framing options."],
      ["What else does it do?", "Summaries, editable notes, a searchable transcript, and grounded Q&A."],
    ],
  },

  "notegpt-alternative": {
    slug: "notegpt-alternative",
    kind: "compare",
    navLabel: "NoteGPT alternative",
    title: "NoteGPT Alternative — Summarize YouTube, take notes, ask questions",
    description:
      "A free NoteGPT alternative: paste a YouTube link and get an AI summary with timestamps, editable notes, and grounded Q&A — plus viral Shorts. One tool, on the web, no extension needed.",
    keywords: [
      "notegpt alternative",
      "youtube summarizer alternative",
      "ai notes alternative",
      "video summary tool alternative",
      "free youtube summarizer",
      "youtube notes alternative",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "NoteGPT alternative",
    h1tail: " that also makes Shorts.",
    lede: "Summarize any YouTube video with timestamps, turn it into editable notes, and ask it questions — then pull the best moments into scroll-stopping Shorts. All from one link.",
    cardDesc: "Summaries, notes and Q&A — plus Shorts — from one link.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No browser extension to install — it works on the web." },
      { n: "02", h: "We read the transcript", p: "The AI summarizes and structures the full video." },
      { n: "03", h: "Summary, notes, Q&A — and Shorts", p: "Everything from one link, saved to your library." },
    ],
    features: [
      { h: "Summaries with timestamps", p: "Key points you can skim, mapped back to the video." },
      { h: "Editable notes", p: "Rewrite, keep and export — the notes are yours." },
      { h: "Grounded Q&A", p: "Ask the video anything; answers cite the timestamp." },
      { h: "Makes Shorts too", p: "Turn the best moments into face-aware 9:16 clips." },
    ],
    faqs: [
      ["Is MyShorts a good NoteGPT alternative?", "If you want summaries with timestamps, editable notes, grounded Q&A, and the ability to make Shorts — from one YouTube link — MyShorts does all of it."],
      ["Do I need a browser extension?", "No — MyShorts runs on the web. Just paste a link, nothing to install."],
      ["Does it summarize long videos?", "Yes — it reads the full transcript, so long podcasts and lectures work fine."],
      ["Is it free?", "Yes — summarize and take notes for free, with paid plans for more monthly volume."],
      ["Can I export my notes?", "Yes — copy or download them so they live in your own system."],
    ],
  },

  "glasp-alternative": {
    slug: "glasp-alternative",
    kind: "compare",
    navLabel: "Glasp alternative",
    title: "Glasp Alternative — YouTube summaries, notes and Q&A (no extension)",
    description:
      "A Glasp alternative that needs no extension: paste a YouTube link and get an AI summary with timestamps, editable notes, and grounded Q&A — plus viral Shorts. Free to start.",
    keywords: [
      "glasp alternative",
      "youtube summary alternative",
      "glasp youtube summary alternative",
      "ai summarizer alternative",
      "summarize youtube without extension",
      "free youtube summary tool",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Glasp alternative",
    h1tail: " with notes, Q&A and Shorts.",
    lede: "Get instant AI summaries of any YouTube video with timestamps — no browser extension needed — then go further with editable notes, grounded Q&A, and scroll-stopping Shorts.",
    cardDesc: "Summaries with timestamps — no extension — plus notes & Q&A.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "Runs on the web — nothing to install." },
      { n: "02", h: "We read the transcript", p: "The AI summarizes the whole video, not just the description." },
      { n: "03", h: "Get a summary — and more", p: "Plus notes, Q&A and Shorts, on demand." },
    ],
    features: [
      { h: "Structured summaries", p: "Key points and takeaways with jump-to timestamps." },
      { h: "No extension needed", p: "Works in any browser — just paste a link." },
      { h: "Notes & grounded Q&A", p: "Turn the summary into notes, or ask the video questions." },
      { h: "Makes Shorts too", p: "Pull the best moments into face-aware 9:16 clips with captions." },
    ],
    faqs: [
      ["Is MyShorts a good Glasp alternative?", "If you want YouTube summaries with timestamps, notes and grounded Q&A — plus the option to make Shorts, with no extension to install — MyShorts covers it."],
      ["Do I need a browser extension?", "No — MyShorts is a web app. Paste a YouTube link and go."],
      ["Are there timestamps?", "Yes — summaries include section timestamps so you can jump to the exact moment."],
      ["Is it free?", "Yes — summarize videos for free, with paid plans for more monthly volume."],
      ["What else can it do?", "Editable notes, grounded Q&A, a searchable transcript, and viral 9:16 Shorts."],
    ],
  },
};

export const usecaseList = Object.values(USECASES);
export const featureList = usecaseList.filter((u) => u.kind === "feature");
export const compareList = usecaseList.filter((u) => u.kind === "compare");
export const getUseCase = (slug: string) => USECASES[slug];
