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
  body?: { h: string; p: string }[];  // long-form, keyword-rich prose section (SEO)
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
    body: [
      { h: "Summarize any YouTube video in seconds", p: "A good YouTube summarizer saves you the one thing you can't get back: time. Instead of scrubbing through an hour-long podcast, lecture, webinar or product review to find the part that matters, you paste the link and MyShorts reads the entire transcript and returns a structured summary — the main argument, the key points, and the takeaways — with section timestamps so you can jump straight to the moment in the original video. It works on long videos and short ones, in the browser, with nothing to download or install." },
      { h: "From summary to Shorts, notes and answers", p: "Because MyShorts summarizes from the actual transcript rather than guessing, the summary reflects what was really said — and it becomes the starting point for everything else. From the same YouTube link you can turn the strongest moments into face-aware 9:16 Shorts, export editable study notes, search the full transcript, and ask grounded questions that are answered from the video itself. So the summarizer isn't a dead end: it's how you decide what to clip, what to study, and what to publish." },
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
    body: [
      { h: "Turn YouTube videos into study notes", p: "Watching a lecture is passive; notes make it stick. MyShorts turns any YouTube video into clean, structured notes — headings, bullet points and the key takeaways — built from the full transcript, so nothing important gets skipped. It's ideal for students turning recorded classes and explainer videos into revision material, and for professionals distilling webinars, conference talks and tutorials into something they can actually reference later. Paste the link and the notes are ready in seconds, with no need to watch the whole thing end to end." },
      { h: "Editable notes you can keep", p: "AI-generated notes are only useful if they fit the way you work, so every note in MyShorts is fully editable — rewrite a line, add your own point, delete what you don't need, then copy or export the notes to wherever you study or write. And because the same YouTube link also gives you a summary, a searchable transcript, grounded Q&A and face-aware 9:16 Shorts, your notes sit alongside everything else you might want from the video, in one place instead of five separate tools." },
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
    body: [
      { h: "Chat with any YouTube video", p: "Sometimes you don't want to watch a 90-minute video — you just want one answer. MyShorts lets you chat with any YouTube video: paste the link and ask questions in plain language, and it answers from the transcript, citing the timestamp so you can jump to the exact moment it was said. Ask what the speaker recommended, what a term means, what the conclusion was, or how a step works — then keep the conversation going with follow-ups until you've found what you need. It's the fastest way to interrogate long podcasts, interviews, lectures and tutorials without scrubbing." },
      { h: "Answers grounded in the video, not guesses", p: "Unlike a generic chatbot, MyShorts Q&A is grounded: every answer comes from what was actually said in that video, with a timestamp you can verify, so you're not relying on a model's memory or a hallucination. That makes it genuinely useful for research and study. And because the same link also produces a summary, editable notes, a full transcript and face-aware 9:16 Shorts, chatting with the video is one part of a single workflow — understand it, take notes from it, and clip it, all in the same place." },
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

  "youtube-transcript": {
    slug: "youtube-transcript",
    kind: "feature",
    navLabel: "Transcript",
    title: "YouTube Transcript Generator — Get the transcript of any video",
    description:
      "Get the full transcript of any YouTube video, free. Paste a link, read the searchable text, jump to any moment, and download it as an SRT subtitle file. No extension, no download.",
    keywords: [
      "youtube transcript",
      "youtube transcript generator",
      "get transcript of youtube video",
      "youtube to text",
      "download youtube transcript",
      "youtube captions to text",
    ],
    eyebrow: "Transcripts",
    h1lead: "Get the transcript of any ",
    h1highlight: "YouTube video",
    h1tail: ".",
    lede: "Paste a link and read the full, searchable transcript — jump to any moment, copy the text, or download it as an SRT subtitle file. No extension, nothing to install.",
    cardDesc: "The full, searchable transcript of any video — download as SRT.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "Any video with captions or auto-generated subtitles." },
      { n: "02", h: "We pull the transcript", p: "The full text, time-coded, in seconds — no download or upload." },
      { n: "03", h: "Read, search, export", p: "Search the text, click a line to jump in the video, or download SRT." },
    ],
    features: [
      { h: "Searchable full text", p: "Find any word instantly instead of scrubbing the timeline." },
      { h: "Click-to-timestamp", p: "Every line links back to that exact moment in the video." },
      { h: "Download as SRT", p: "Export subtitles to reuse or upload elsewhere." },
      { h: "More than text", p: "The same link also gives you a summary, notes, Q&A, and Shorts." },
    ],
    faqs: [
      ["Is the transcript free?", "Yes — you can pull transcripts for free, no card required."],
      ["Can I download it as SRT?", "Yes — export the transcript as an SRT subtitle file to reuse anywhere."],
      ["Does it work without official captions?", "In most cases yes — it uses auto-generated subtitles when a video has no manual captions."],
      ["Do I need a browser extension?", "No — it runs on the web. Just paste a link."],
      ["Can it also summarize the video?", "Yes — from the same link you also get a summary, editable notes, grounded Q&A, and 9:16 Shorts."],
    ],
    body: [
      { h: "Get the transcript of any YouTube video", p: "A transcript is the raw material behind everything else — search it, quote it, translate it, or turn it into subtitles. MyShorts pulls the full transcript of any YouTube video from a single link, with no browser extension to install and nothing to download. It works even when a video has no manual captions, falling back to auto-generated subtitles, and you can export the result as a plain-text transcript or an SRT subtitle file to reuse in your editor, your blog, or your own captions. Paste the link and the whole spoken text is in front of you in seconds." },
      { h: "More than text on a page", p: "Once you have the transcript, MyShorts puts it to work: the same link gives you a structured summary with timestamps, clean editable notes, grounded Q&A that answers from the transcript, and face-aware 9:16 Shorts cut from the moments that matter. So instead of copying a transcript into three other tools, you read it, search it, and act on it in one place — which is why creators, students and researchers use MyShorts as their YouTube transcript tool of choice." },
    ],
  },

  "submagic-alternative": {
    slug: "submagic-alternative",
    kind: "compare",
    navLabel: "Submagic alternative",
    title: "Submagic Alternative — Auto-caption & clip YouTube videos",
    description:
      "A Submagic alternative for creators in India: auto animated captions plus face-aware 9:16 clips from any YouTube video — full HD, no watermark on every plan, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "submagic alternative",
      "ai caption tool alternative",
      "auto captions alternative",
      "shorts captions alternative",
      "submagic india",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Submagic alternative",
    h1tail: " that clips and captions.",
    lede: "Auto animated captions and face-aware 9:16 clips from any YouTube video — full HD, no watermark on any plan, priced in rupees from ₹499/mo. Plus summaries, notes and Q&A from the same link.",
    cardDesc: "Animated captions + face-aware clips, no watermark, from ₹499/mo.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload — the transcript is pulled instantly." },
      { n: "02", h: "Pick the moment", p: "Describe the clip you want; the AI finds the exact cut." },
      { n: "03", h: "Captioned Short, ready", p: "Face-aware 9:16 with animated captions, full HD, no watermark." },
    ],
    features: [
      { h: "Animated captions", p: "Word-by-word subtitles in clean, bold, boxed or minimal styles." },
      { h: "No watermark on Free", p: "Clips look like yours from the first render." },
      { h: "Priced for India", p: "From ₹499/mo — start free, upgrade only for volume." },
      { h: "More than captions", p: "Summaries, editable notes and grounded Q&A too." },
    ],
    faqs: [
      ["Is MyShorts a good Submagic alternative?", "If you want animated captions plus face-aware 9:16 clipping, no watermark, and rupee pricing — with summaries, notes and Q&A on top — MyShorts covers it."],
      ["Does the free plan add a watermark?", "No — no watermark on any plan, including Free."],
      ["What caption styles are there?", "Clean, bold, boxed and minimal, in multiple colours including the brand ember."],
      ["Is it priced in rupees?", "Yes — plans from ₹499/mo via Razorpay, cancel anytime."],
      ["What else can it do?", "Summaries, editable notes, a searchable transcript, and grounded Q&A."],
    ],
  },

  "vidyo-ai-alternative": {
    slug: "vidyo-ai-alternative",
    kind: "compare",
    navLabel: "Vidyo.ai alternative",
    title: "Vidyo.ai Alternative — Turn videos into Shorts, no watermark",
    description:
      "A Vidyo.ai alternative for Indian creators: turn any YouTube video into face-aware 9:16 clips with captions — full HD, no watermark on every plan, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "vidyo.ai alternative",
      "vidyo ai alternative",
      "ai video repurposing alternative",
      "youtube to shorts alternative",
      "clip generator alternative",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Vidyo.ai alternative",
    h1tail: " priced for India.",
    lede: "Repurpose any YouTube video into face-aware vertical clips with captions — full HD, no watermark, from ₹499/mo. Then get summaries, notes and Q&A from the same link.",
    cardDesc: "Repurpose videos into Shorts — full HD, no watermark, from ₹499/mo.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "Nothing to install; the transcript is pulled instantly." },
      { n: "02", h: "Describe the moment", p: "The AI finds the exact cut, scored by viral potential." },
      { n: "03", h: "Get your Short", p: "Face-aware 9:16 with captions, full HD, no watermark." },
    ],
    features: [
      { h: "No watermark, ever", p: "Every plan, including Free, exports clean." },
      { h: "Full HD", p: "No resolution caps on any plan." },
      { h: "Rupee pricing", p: "From ₹499/mo — start free." },
      { h: "All-in-one", p: "Summaries, notes and grounded Q&A from one link." },
    ],
    faqs: [
      ["Is MyShorts a good Vidyo.ai alternative?", "If you want face-aware vertical clips with captions, no watermark, full HD and rupee pricing — plus summaries, notes and Q&A — MyShorts is built for it."],
      ["Is there a watermark on the free plan?", "No — no watermark on any plan, and no resolution caps."],
      ["Is it available in India?", "Yes — plans from ₹499/mo via Razorpay, cancel anytime."],
      ["Does it keep the speaker in frame?", "Yes — the crop is face-aware, with Wide and Split framing options."],
      ["What else does it do?", "Summaries, editable notes, a searchable transcript, and grounded Q&A."],
    ],
  },

  "munch-alternative": {
    slug: "munch-alternative",
    kind: "compare",
    navLabel: "Munch alternative",
    title: "Munch Alternative — Clip long videos into Shorts, from ₹499",
    description:
      "A Munch alternative for creators in India: clip any long YouTube video into face-aware 9:16 Shorts with captions — full HD, no watermark on every plan, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "munch alternative",
      "munch.io alternative",
      "video repurposing alternative",
      "ai clip tool alternative",
      "youtube to shorts alternative",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Munch alternative",
    h1tail: " built for India.",
    lede: "Clip long YouTube videos into scroll-stopping 9:16 Shorts with captions — full HD, no watermark, from ₹499/mo. Plus summaries, notes and Q&A from the same link.",
    cardDesc: "Clip long videos into Shorts — full HD, no watermark, from ₹499/mo.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload — the transcript is pulled instantly." },
      { n: "02", h: "Describe the moment", p: "Say the clip you want; the AI finds the exact cut." },
      { n: "03", h: "Get a ready-to-post Short", p: "Face-aware 9:16 with captions, full HD, no watermark." },
    ],
    features: [
      { h: "No watermark on Free", p: "Ship clips that look like yours from day one." },
      { h: "Full HD, no caps", p: "Quality is standard, not a paid upgrade." },
      { h: "Priced for India", p: "From ₹499/mo — start free, upgrade for volume." },
      { h: "More than clips", p: "Summaries, editable notes and grounded Q&A too." },
    ],
    faqs: [
      ["Is MyShorts a good Munch alternative?", "If you want to clip long videos into face-aware captioned Shorts, with no watermark, full HD and rupee pricing — plus summaries, notes and Q&A — MyShorts fits."],
      ["Does the free plan add a watermark?", "No — no watermark on any plan, including Free."],
      ["Is it priced in rupees?", "Yes — plans from ₹499/mo via Razorpay, cancel anytime."],
      ["Does it track the speaker?", "Yes — face-aware crop, with Wide and Split framing options."],
      ["What else can it do?", "Summaries, editable notes, a searchable transcript, and grounded Q&A."],
    ],
  },

  "notta-alternative": {
    slug: "notta-alternative",
    kind: "compare",
    navLabel: "Notta alternative",
    title: "Notta Alternative — YouTube transcripts, summaries & notes",
    description:
      "A Notta alternative for YouTube: paste a link to get the full transcript, an AI summary, editable notes, and grounded Q&A — plus viral Shorts. On the web, no extension, free to start.",
    keywords: [
      "notta alternative",
      "transcription alternative",
      "youtube transcript alternative",
      "ai notes alternative",
      "free transcription tool",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Notta alternative",
    h1tail: " for YouTube videos.",
    lede: "Paste a YouTube link and get the full transcript, an AI summary, editable notes, and grounded Q&A — then turn the best moments into Shorts. All from one link, on the web.",
    cardDesc: "Transcript, summary, notes and Q&A from any YouTube link.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No extension, no upload — it works in your browser." },
      { n: "02", h: "We read the transcript", p: "The full text, time-coded, ready to search or export." },
      { n: "03", h: "Transcript, summary, notes, Q&A", p: "Everything from one link, saved to your library." },
    ],
    features: [
      { h: "Full transcript + SRT", p: "Searchable text you can download as subtitles." },
      { h: "AI summary", p: "Key points and takeaways with timestamps." },
      { h: "Editable notes & Q&A", p: "Turn it into notes, or ask the video questions." },
      { h: "Makes Shorts too", p: "Clip the best moments into face-aware 9:16 videos." },
    ],
    faqs: [
      ["Is MyShorts a good Notta alternative for YouTube?", "For YouTube specifically, yes — you get the transcript, an AI summary, editable notes, and grounded Q&A from one link, plus the option to make Shorts."],
      ["Do I need a browser extension?", "No — MyShorts runs on the web. Just paste a link."],
      ["Can I download the transcript?", "Yes — export it as an SRT subtitle file."],
      ["Does it summarize long videos?", "Yes — it reads the full transcript, so long videos work fine."],
      ["Is it free?", "Yes — transcripts, summaries and notes are free to start, with paid plans for more volume."],
    ],
  },

  "youtube-to-reels": {
    slug: "youtube-to-reels",
    kind: "feature",
    navLabel: "Reels",
    title: "YouTube to Reels — Make Instagram Reels from any YouTube video",
    description:
      "Turn any YouTube video into Instagram Reels: pull the best moments, reframe to face-aware 9:16, and add captions — full HD, no watermark. Also perfect for TikTok and YouTube Shorts. Free to start.",
    keywords: [
      "youtube to reels",
      "instagram reels from youtube",
      "make reels from youtube video",
      "youtube video to reels",
      "reels maker",
      "convert youtube to reels",
    ],
    eyebrow: "Instagram Reels",
    h1lead: "Turn any YouTube video into ",
    h1highlight: "Instagram Reels",
    h1tail: ".",
    lede: "Pull the best moments out of a YouTube video, reframe them to vertical 9:16, and burn in captions — ready to post as Instagram Reels, TikToks and YouTube Shorts. Full HD, no watermark.",
    cardDesc: "Instagram Reels from any YouTube video — 9:16, captions, no watermark.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload, no download — MyShorts pulls the transcript instantly." },
      { n: "02", h: "Describe the moment", p: "Say the clip you want in plain English; the AI finds the exact cut." },
      { n: "03", h: "Post your Reel", p: "Face-aware 9:16 with captions, full HD, no watermark — ready for Instagram." },
    ],
    features: [
      { h: "Made for 9:16", p: "Vertical framing sized for Reels, TikTok and Shorts." },
      { h: "Face-aware crop", p: "The speaker stays centered — no cut-off heads." },
      { h: "Captions that convert", p: "Word-by-word subtitles, since most Reels are watched on mute." },
      { h: "Full HD, no watermark", p: "Every plan, including Free — plus summaries, notes and Q&A." },
    ],
    faqs: [
      ["Can I make Instagram Reels from a YouTube video?", "Yes — paste a YouTube link, pick the moment, and MyShorts hands you a 9:16 clip with captions that's ready to upload as a Reel."],
      ["Is there a watermark?", "No — no watermark on any plan, including Free, and no resolution caps."],
      ["Does it work for TikTok and Shorts too?", "Yes — the same 9:16 export works for Instagram Reels, TikTok and YouTube Shorts."],
      ["Do I need to download the video?", "No — nothing to upload or install; just paste the link."],
      ["Is it free?", "You can start free with no card, and upgrade only for more monthly volume."],
    ],
    body: [
      { h: "Why turn YouTube videos into Reels?", p: "Instagram Reels reward consistency, and the easiest way to stay consistent is to repurpose what you already publish. A single long YouTube upload — a podcast, interview, tutorial or vlog — hides a week of Reels: the strong hook, the surprising line, the clear explanation. Instead of filming something new, you clip the best 15–45 seconds, reframe it to the vertical 9:16 that Instagram favours, add captions for the sound-off scroll, and post. MyShorts does that in a couple of clicks, so repurposing YouTube to Reels stops being an editing chore." },
      { h: "How MyShorts makes Reels from YouTube", p: "Paste the YouTube link and describe the moment you want in plain English — MyShorts reads the transcript and finds the exact cut, then reframes it with face-aware cropping so the speaker never drifts out of frame. Word-by-word captions are burned in (most Reels are watched muted), and you export in full HD with no watermark. Because the same link also produces a summary, notes, a transcript and Q&A, you can plan your Reels and repurpose the whole video from one place." },
    ],
  },

  "2short-ai-alternative": {
    slug: "2short-ai-alternative",
    kind: "compare",
    navLabel: "2short.ai alternative",
    title: "2short.ai Alternative — YouTube to Shorts, no watermark",
    description:
      "A 2short.ai alternative for creators in India: turn any YouTube video into face-aware 9:16 Shorts with captions — full HD, no watermark on every plan, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "2short.ai alternative",
      "2short alternative",
      "youtube to shorts alternative",
      "ai shorts tool alternative",
      "free youtube shorts maker",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "2short.ai alternative",
    h1tail: " that does more.",
    lede: "Turn long YouTube videos into face-aware 9:16 Shorts with captions — full HD, no watermark, priced in rupees from ₹499/mo. Then get summaries, notes and Q&A from the same link.",
    cardDesc: "YouTube → Shorts, full HD, no watermark — plus summaries & notes.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload; the transcript is pulled instantly." },
      { n: "02", h: "Describe the moment", p: "The AI finds the exact cut, scored by viral potential." },
      { n: "03", h: "Get a ready-to-post Short", p: "Face-aware 9:16 with captions, full HD, no watermark." },
    ],
    features: [
      { h: "No watermark on Free", p: "Clips look like yours from the first render." },
      { h: "Full HD, no caps", p: "Quality is standard, not a paid upgrade." },
      { h: "Priced for India", p: "From ₹499/mo — start free, upgrade for volume." },
      { h: "More than clips", p: "Summaries, editable notes and grounded Q&A too." },
    ],
    faqs: [
      ["Is MyShorts a good 2short.ai alternative?", "If you want face-aware vertical Shorts with captions, no watermark, full HD and rupee pricing — plus summaries, notes and Q&A — MyShorts is built for it."],
      ["Does the free plan add a watermark?", "No — no watermark on any plan, including Free."],
      ["Is it priced in rupees?", "Yes — plans from ₹499/mo via Razorpay, cancel anytime."],
      ["Does it keep the speaker in frame?", "Yes — face-aware crop, with Wide and Split framing options."],
      ["What else can it do?", "Summaries, editable notes, a searchable transcript, and grounded Q&A."],
    ],
    body: [
      { h: "Choosing a 2short.ai alternative", p: "When you compare AI Shorts tools, three things separate a good one from a frustrating one: whether the crop keeps the speaker in frame, whether the free tier is actually usable, and whether the pricing makes sense for where you live. MyShorts is built around all three — face-aware 9:16 that tracks the talker (with Wide and Split modes for two people), full HD with no watermark on every plan including Free, and pricing in rupees from ₹499/month. You describe the moment you want in plain English and the AI finds the exact cut from the transcript, so there's no scrubbing an hour of footage." },
    ],
  },

  "crayo-alternative": {
    slug: "crayo-alternative",
    kind: "compare",
    navLabel: "Crayo alternative",
    title: "Crayo Alternative — Turn YouTube videos into captioned Shorts",
    description:
      "A Crayo alternative for creators in India: clip any YouTube video into face-aware 9:16 Shorts with animated captions — full HD, no watermark on every plan, from ₹499/mo. Plus summaries, notes and Q&A.",
    keywords: [
      "crayo alternative",
      "crayo.ai alternative",
      "shorts generator alternative",
      "ai shorts tool alternative",
      "captioned shorts alternative",
    ],
    eyebrow: "Alternative",
    h1lead: "The ",
    h1highlight: "Crayo alternative",
    h1tail: " for real videos.",
    lede: "Clip any YouTube video into face-aware 9:16 Shorts with animated captions — full HD, no watermark, priced in rupees from ₹499/mo. Plus summaries, notes and Q&A from the same link.",
    cardDesc: "Captioned Shorts from real videos — no watermark, from ₹499/mo.",
    steps: [
      { n: "01", h: "Paste a YouTube link", p: "No upload; the transcript is pulled instantly." },
      { n: "02", h: "Describe the moment", p: "Say the clip you want; the AI finds the exact cut." },
      { n: "03", h: "Get a captioned Short", p: "Face-aware 9:16 with animated captions, full HD, no watermark." },
    ],
    features: [
      { h: "Animated captions", p: "Word-by-word subtitles in clean, bold, boxed or minimal styles." },
      { h: "No watermark, full HD", p: "On every plan, including Free — no resolution caps." },
      { h: "Priced for India", p: "From ₹499/mo — start free." },
      { h: "All-in-one", p: "Summaries, editable notes and grounded Q&A too." },
    ],
    faqs: [
      ["Is MyShorts a good Crayo alternative?", "If you want to clip real YouTube videos into face-aware captioned Shorts — with no watermark, full HD and rupee pricing, plus summaries, notes and Q&A — MyShorts fits."],
      ["Does the free plan add a watermark?", "No — no watermark on any plan, including Free."],
      ["What caption styles are there?", "Clean, bold, boxed and minimal, in several colours including the brand ember."],
      ["Is it priced in rupees?", "Yes — plans from ₹499/mo via Razorpay, cancel anytime."],
      ["What else can it do?", "Summaries, editable notes, a searchable transcript, and grounded Q&A."],
    ],
    body: [
      { h: "A Crayo alternative for repurposing real footage", p: "If your Shorts come from real videos — podcasts, interviews, talks, tutorials — you need a tool that understands the footage, not just a caption template. MyShorts reads the full transcript of any YouTube video, finds the exact moment you describe, and reframes it to a face-aware 9:16 so the speaker stays centered. Animated word-by-word captions are burned in for the sound-off feed, and everything exports in full HD with no watermark on any plan, including Free. Pricing is in rupees from ₹499/month, and the same link also gives you a summary, notes, a transcript and grounded Q&A — so one upload becomes a whole batch of content." },
    ],
  },
};

export const usecaseList = Object.values(USECASES);
export const featureList = usecaseList.filter((u) => u.kind === "feature");
export const compareList = usecaseList.filter((u) => u.kind === "compare");
export const getUseCase = (slug: string) => USECASES[slug];
