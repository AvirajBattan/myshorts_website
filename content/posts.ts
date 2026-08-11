export type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO — used for <time> and sitemap lastModified
  readMins: number;
  tag: string;
  keywords: string[];  // per-post SEO keywords
  body: Block[];
  related?: { label: string; href: string };  // internal link to the matching landing page
};

export const posts: Post[] = [
  {
    slug: "youtube-to-shorts-workflow",
    title: "How to Turn One YouTube Video Into a Week of Shorts (2026 Guide)",
    excerpt:
      "A repeatable, five-minute workflow for pulling scroll-stopping vertical Shorts out of any long-form YouTube upload — no editing timeline required.",
    date: "2026-08-01",
    readMins: 6,
    tag: "Playbook",
    keywords: [
      "how to turn a youtube video into shorts",
      "youtube to shorts",
      "make shorts from long videos",
      "repurpose youtube videos",
      "ai shorts generator",
    ],
    body: [
      { type: "p", text: "Every long-form video you have ever published is sitting on a week's worth of Shorts. The problem was never a lack of material — it was the hours of scrubbing, cropping, and captioning it used to take to extract them. This guide walks through a repeatable workflow that turns one YouTube video into a batch of vertical clips in minutes." },
      { type: "h2", text: "Why repurpose long videos into Shorts?" },
      { type: "p", text: "Short-form vertical video is how new viewers discover you. A single 40-minute podcast or tutorial contains dozens of self-contained moments — a strong hook, a surprising stat, a clear explanation — that each work as a standalone Short on YouTube Shorts, Instagram Reels, and TikTok. Repurposing is the highest-leverage content you can make: the ideas are already recorded and already validated." },
      { type: "h2", text: "The five-minute workflow" },
      { type: "h3", text: "1. Start with the transcript, not the timeline" },
      { type: "p", text: "Instead of dragging a playhead across an hour of footage, describe the moment you want in plain English — “the most viral 30 seconds,” or “where they explain the framework.” An AI clip finder reads the transcript and returns the exact timestamps, ranked by how likely each is to perform." },
      { type: "h3", text: "2. Reframe on the speaker" },
      { type: "p", text: "A widescreen 16:9 clip has to become a 9:16 vertical without slicing the speaker out of frame. Face-aware reframing tracks whoever is talking and keeps them centered — and for two people it can stack them podcast-style or zoom out so nobody is lost." },
      { type: "h3", text: "3. Burn in captions" },
      { type: "p", text: "The majority of short-form video is watched on mute. Word-by-word captions are not optional — they are what stops the scroll. Add bold, readable subtitles before you export." },
      { type: "h3", text: "4. Export and batch" },
      { type: "p", text: "Render in full HD with no watermark, then repeat for the next moment. Because the transcript is already analysed, pulling the second, third, and fourth clip takes seconds — that is how one upload becomes a week of posts." },
      { type: "h2", text: "How many Shorts can one video produce?" },
      { type: "ul", items: [
        "A 10-minute tutorial: 3–5 clips (one per key step or tip)",
        "A 30–60 minute podcast: 8–15 clips (hooks, hot takes, stories)",
        "A webinar or talk: 5–10 clips (the framework, the proof, the call to action)",
      ]},
      { type: "h2", text: "Do it now" },
      { type: "p", text: "Paste a YouTube link, describe the moment, and get your first Short free — no card required. The fastest way to learn this workflow is to run one video through it." },
    ],
  },
  {
    slug: "ai-clip-finder-how-it-works",
    title: "How AI Finds the Best Clips in a Long Video",
    excerpt:
      "“Clip by description” skips the scrubbing entirely: describe the moment in plain English and the AI returns the exact cut, scored by viral potential. Here is how it works.",
    date: "2026-07-18",
    readMins: 5,
    tag: "How it works",
    keywords: [
      "ai clip finder",
      "clip by description",
      "find best moments in video",
      "ai video clipping tool",
      "viral clip detector",
    ],
    body: [
      { type: "p", text: "The hardest part of making Shorts was never the editing — it was finding the 30 seconds worth editing. “Clip by description” removes that step: you say what you want, and the AI finds it." },
      { type: "h2", text: "It reads the transcript, not the pixels" },
      { type: "p", text: "When you submit a YouTube link, the transcript is pulled and analysed. Because the AI understands the words being said, you can search by meaning rather than by timestamp. Type “the strongest hook” or “the part where they disagree” and it maps your intent to the exact segment." },
      { type: "h2", text: "Every candidate is scored" },
      { type: "p", text: "Each suggested clip comes back with a score that estimates viral potential — based on signals like a clear hook, a self-contained idea, emotional punch, and a natural start and end point. You get a ranked shortlist instead of a wall of raw footage." },
      { type: "ul", items: [
        "Describe the moment in plain English",
        "Get ranked, timestamped candidates in seconds",
        "Preview, then render the ones you like to 9:16",
      ]},
      { type: "h2", text: "Why this beats manual scrubbing" },
      { type: "p", text: "Manual clipping is slow and biased toward the parts you happen to remember. A transcript-aware AI surfaces strong moments you forgot were in the video — often the best-performing ones. It also makes batching realistic: pulling ten clips from one upload is a few clicks, not an afternoon." },
      { type: "p", text: "Want to see it on your own video? Paste a link and describe a moment — the first clip is free." },
    ],
  },
  {
    slug: "face-aware-vertical-reframing",
    title: "Face-Aware 9:16 Reframing: Never Cut Off the Speaker Again",
    excerpt:
      "Most auto-croppers center-cut and slice people in half. Face-aware reframing tracks the speaker frame-by-frame so your vertical clips actually look intentional.",
    date: "2026-07-04",
    readMins: 5,
    tag: "How it works",
    keywords: [
      "9:16 reframe",
      "vertical video crop",
      "face aware cropping",
      "convert 16:9 to 9:16",
      "keep speaker in frame",
    ],
    body: [
      { type: "p", text: "Turning a 16:9 video into a 9:16 Short means throwing away most of the width of the frame. Do it with a naive center crop and you get foreheads, shoulders, and empty chairs while the speaker drifts off-screen. Face-aware reframing solves this." },
      { type: "h2", text: "The problem with center-cropping" },
      { type: "p", text: "A fixed center crop assumes the subject never moves and always sits dead-center. Real footage does not work that way — people lean, gesture, and shift, and interviews put two people on opposite sides of the frame. A static crop cuts them off." },
      { type: "h2", text: "How face-aware reframing works" },
      { type: "p", text: "Detection finds the face (or faces) in each part of the clip, and the crop pans to follow the person who is talking. You get three framing modes for different situations:" },
      { type: "ul", items: [
        "Speaker — a tight vertical punch-in that follows the talker",
        "Wide — zooms out so the whole scene stays in frame",
        "Split — two faces stacked podcast-style, both framed",
      ]},
      { type: "h2", text: "Why it matters for reach" },
      { type: "p", text: "Vertical clips that keep the subject centered simply look professional — and viewers stay on professional-looking clips longer. Watch time is the strongest ranking signal on every short-form platform, so framing is not a cosmetic detail; it is a growth lever." },
      { type: "p", text: "See the reframe on your own footage — paste a YouTube link and pick a framing mode." },
    ],
  },
  {
    slug: "captions-for-shorts",
    title: "Why Captions Make or Break Your Shorts (and How to Add Them Fast)",
    excerpt:
      "Most short-form video is watched on mute. Word-by-word captions are the single highest-ROI edit you can make. Here is why, and how to add them in seconds.",
    date: "2026-06-20",
    readMins: 4,
    tag: "Playbook",
    keywords: [
      "captions for shorts",
      "auto captions",
      "add subtitles to video",
      "word by word captions",
      "burn in captions",
    ],
    body: [
      { type: "p", text: "If you only make one edit to a Short, make it captions. A large share of short-form video plays without sound, especially on autoplay feeds — without on-screen text, your first three seconds are silent, and silence gets scrolled past." },
      { type: "h2", text: "Captions increase watch time" },
      { type: "p", text: "On-screen words give viewers a reason to stay even when their volume is off, and they make fast-paced speech easier to follow. More watch time means more distribution — the platforms push clips that hold attention." },
      { type: "h2", text: "Word-by-word beats a static block" },
      { type: "p", text: "Animated, word-by-word captions that highlight each word as it is spoken outperform a single static subtitle. The motion itself is a retention device — the eye follows the changing word." },
      { type: "h2", text: "Add them without the busywork" },
      { type: "p", text: "Manually timing subtitles is tedious. Generating them from the transcript and burning them in automatically takes the effort to zero, and lets you pick a style — clean, bold, boxed, or minimal — that matches your brand." },
      { type: "ul", items: [
        "Choose a caption style that fits your channel",
        "Keep lines short so they never cover the subject",
        "Export burned-in so captions survive re-uploads and downloads",
      ]},
      { type: "p", text: "Try it on a clip — captions are included on every plan, free ones too." },
    ],
  },
  {
    slug: "youtube-shorts-tool-pricing-india",
    title: "What Should a YouTube Shorts Tool Cost in India?",
    excerpt:
      "Most Shorts tools price in dollars and cap quality on cheaper plans. Here is a straight look at fair pricing for Indian creators — and why full HD should never be a paid upgrade.",
    date: "2026-06-06",
    readMins: 5,
    tag: "Guide",
    keywords: [
      "youtube shorts tool india",
      "shorts maker price india",
      "ai video tool inr pricing",
      "affordable shorts generator",
      "opus clip alternative india",
    ],
    body: [
      { type: "p", text: "Most AI Shorts tools were built for a US audience: they price in dollars, and their cheapest tiers add watermarks or cap resolution. For an Indian creator, a “$20/month” plan is a real barrier — and paying extra just to remove a watermark feels backwards." },
      { type: "h2", text: "What you should never pay extra for" },
      { type: "ul", items: [
        "Full HD output — quality should be standard, not a premium add-on",
        "No watermark — your clips should look like yours from day one",
        "Basic captions and reframing — the core feature set",
      ]},
      { type: "h2", text: "What paid plans should actually add" },
      { type: "p", text: "A fair model charges for volume, not quality. As you publish more, you need more monthly videos and renders — that is the thing worth paying for. The output of a free clip and a paid clip should be identical in quality; only the quantity should differ." },
      { type: "h2", text: "Priced for India" },
      { type: "p", text: "That is the principle MyShorts is built on: full HD and no watermark on every plan, including Free, with paid tiers starting at ₹499/month purely for more monthly volume. You can start free, ship real clips, and upgrade only when your output grows." },
      { type: "p", text: "Compare it against whatever you are using now — then paste a link and see the quality for yourself." },
    ],
  },
  {
    slug: "summarize-long-youtube-video",
    title: "How to Summarize a Long YouTube Video (Podcast or Lecture) in Seconds",
    excerpt:
      "A two-hour podcast, summarized before your coffee cools. Here's how to get the key points, takeaways, and timestamps from any long YouTube video — without watching it end to end.",
    date: "2026-08-08",
    readMins: 5,
    tag: "How-to",
    keywords: [
      "summarize long youtube video",
      "youtube video summarizer",
      "summarize a podcast",
      "ai video summary",
      "tldr youtube",
    ],
    related: { label: "Try the YouTube summarizer →", href: "/youtube-summarizer" },
    body: [
      { type: "p", text: "Long videos are where the good ideas live — and where your time goes to die. A single podcast can run two hours; a lecture, ninety minutes. You don't need to watch all of it to get the point. You need a summary you can skim, with timestamps so you can dive into the parts that matter." },
      { type: "h2", text: "Why title-and-description summaries fail" },
      { type: "p", text: "Most \"summaries\" are written from the title and description — not the actual content. That's why they're vague. A useful summary is built from the full transcript, so it reflects what was really said, in order, with the specifics intact." },
      { type: "h2", text: "The fast way: summarize from the transcript" },
      { type: "h3", text: "1. Paste the link" },
      { type: "p", text: "No download, no upload. The transcript is pulled instantly, even for a long video." },
      { type: "h3", text: "2. Let the AI read the whole thing" },
      { type: "p", text: "Because it processes the entire transcript, an hour-long lecture summarizes as easily as a five-minute clip." },
      { type: "h3", text: "3. Skim the structured output" },
      { type: "p", text: "You get key points, takeaways, and section timestamps — so you can jump straight to the 8-minute stretch you actually care about." },
      { type: "h2", text: "What a good long-video summary includes" },
      { type: "ul", items: [
        "Key points — the main ideas, pulled out and ordered",
        "Takeaways — what to actually do with the information",
        "Timestamps — so the summary is a map back into the video",
      ]},
      { type: "p", text: "One tip: always give an AI summary a quick read before you rely on it. It's built from the transcript, so it's grounded — but a 20-second sanity check never hurts." },
    ],
  },
  {
    slug: "youtube-video-to-study-notes",
    title: "Turn Any YouTube Video Into Study Notes (Without Pausing Every 10 Seconds)",
    excerpt:
      "Pausing a lecture to scribble notes is slow and you still miss things. Here's how to turn any YouTube video into clean, organized, editable study notes you can keep.",
    date: "2026-08-05",
    readMins: 4,
    tag: "Playbook",
    keywords: [
      "youtube video to notes",
      "study notes from youtube",
      "take notes from a video",
      "ai note taking",
      "video notes generator",
    ],
    related: { label: "Turn videos into notes →", href: "/youtube-notes" },
    body: [
      { type: "p", text: "The pause-scribble-rewind loop is how most people take notes from videos. It's slow, it breaks your focus, and you still end up with half-finished bullet points. There's a better way: let the transcript do the heavy lifting, then edit." },
      { type: "h2", text: "Notes, not a transcript dump" },
      { type: "p", text: "A raw transcript isn't notes — it's a wall of text. Good notes have structure: headings for each topic, bullets for the key points, and none of the filler. The goal is something you can revise from in five minutes." },
      { type: "h2", text: "The workflow" },
      { type: "ul", items: [
        "Paste the YouTube link — a lecture, tutorial or explainer",
        "Let it structure the transcript into headings and bullets",
        "Edit anything, then export or copy the notes to keep",
      ]},
      { type: "h2", text: "Why editable matters" },
      { type: "p", text: "AI-generated notes are a starting point, not the finish line. The best notes are the ones you've reworded in your own voice — that's when the ideas actually stick. So the notes are fully editable: cut what you don't need, add your own thoughts, and make them yours before you export." },
      { type: "h2", text: "Who this is for" },
      { type: "p", text: "Students turning lectures into revision notes, researchers logging sources, and anyone who watches to learn. Same link also gives you a summary and lets you ask the video questions — so your notes and your research live in one place." },
    ],
  },
  {
    slug: "ask-youtube-video-questions",
    title: "How to Ask a YouTube Video Questions (Instead of Scrubbing the Timeline)",
    excerpt:
      "“Where did they mention the pricing?” Instead of dragging the playhead around, just ask the video. Here's how grounded Q&A finds the answer — with the timestamp.",
    date: "2026-08-02",
    readMins: 4,
    tag: "How-to",
    keywords: [
      "ask youtube video questions",
      "chat with youtube video",
      "question answering video",
      "find moment in video",
      "talk to a video",
    ],
    related: { label: "Chat with any video →", href: "/chat-with-youtube" },
    body: [
      { type: "p", text: "You remember someone said the thing — you just can't find where. So you scrub: drag the playhead, overshoot, rewind, repeat. For a long video it's maddening. The fix is to stop searching the timeline and start asking the video." },
      { type: "h2", text: "Grounded answers beat a generic chatbot" },
      { type: "p", text: "A general chatbot guesses. Grounded Q&A answers from the video's actual transcript and cites the timestamp — so you get what was really said, and you can jump straight there to verify it." },
      { type: "h2", text: "How it works" },
      { type: "ul", items: [
        "Paste the YouTube link",
        "Ask in plain English — “what did they say about X?”",
        "Get an answer grounded in the transcript, with the timestamp",
      ]},
      { type: "h2", text: "Great questions to ask a video" },
      { type: "ul", items: [
        "“What's the main argument?” — the thesis in one line",
        "“Where do they explain X?” — jump to the exact part",
        "“What did they recommend?” — pull out the action items",
      ]},
      { type: "p", text: "Follow-ups work too — it's a conversation, not a single query. Keep asking until you've found what you came for, then use the timestamp to watch just that moment." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
