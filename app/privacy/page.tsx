import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MyShorts collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "9 August 2026";

export default function Privacy() {
  return (
    <article className="section article">
      <div className="wrap article-wrap">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: {UPDATED}</p>
        <div className="article-body">
          <p>This Privacy Policy explains how MyShorts (&ldquo;MyShorts&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, shares, and protects information when you use our website at myshorts.in and our application at app.myshorts.in (together, the &ldquo;Service&rdquo;). By using the Service, you agree to the practices described here.</p>

          <h2>1. Who we are</h2>
          <p>MyShorts is an AI tool that turns long-form YouTube videos into short vertical clips, along with summaries, notes, and question-and-answer features. We are based in India and serve creators, marketers, and educators. For any privacy question, contact us at <a href="mailto:hello@myshorts.in">hello@myshorts.in</a>.</p>

          <h2>2. Information we collect</h2>
          <p>We collect only what we need to run the Service:</p>
          <ul>
            <li><b>Account information</b> — your email address and authentication details when you sign up or sign in.</li>
            <li><b>Content you submit</b> — the YouTube links (URLs) you paste, the clip descriptions and prompts you enter, and any notes you create.</li>
            <li><b>Generated content</b> — the transcripts, clips, summaries, notes, and answers produced for your videos, which we store so you can return to them.</li>
            <li><b>Payment information</b> — if you subscribe to a paid plan, payments are processed by Razorpay. We receive confirmation of your subscription status and identifiers, but <b>we do not collect or store your full card, UPI, or bank details</b> — those are handled directly by Razorpay.</li>
            <li><b>Usage and technical data</b> — basic logs such as IP address, browser type, device information, and actions taken in the app, used to operate, secure, and improve the Service and to enforce plan limits.</li>
          </ul>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To provide the Service — fetch transcripts, find and render clips, and generate summaries, notes, and answers.</li>
            <li>To create and manage your account and enforce plan limits.</li>
            <li>To process subscriptions and payments through Razorpay.</li>
            <li>To secure the Service, prevent abuse, and debug problems.</li>
            <li>To communicate with you about your account, security, and important changes.</li>
            <li>To improve features and performance.</li>
          </ul>

          <h2>4. AI processing</h2>
          <p>To generate clips, summaries, notes, and answers, we send video transcripts and your prompts to third-party AI providers (which may include Google Gemini, OpenAI, or Anthropic Claude). If you supply your own AI model key in settings, your content is processed using that key and provider instead. We do not use your private content to train our own models.</p>

          <h2>5. Third-party services we rely on</h2>
          <p>We share limited data with service providers strictly to operate the Service:</p>
          <ul>
            <li><b>Razorpay</b> — payment and subscription processing.</li>
            <li><b>AI providers</b> (Google, OpenAI, Anthropic) — content generation.</li>
            <li><b>Cloud infrastructure and storage</b> (including our hosting providers and Cloudflare R2) — to run the app and store your rendered files.</li>
            <li><b>YouTube</b> — we retrieve publicly available video data and transcripts for the links you submit. MyShorts is not affiliated with, endorsed by, or sponsored by YouTube or Google LLC.</li>
          </ul>
          <p>We do not sell your personal information to anyone.</p>

          <h2>6. Cookies</h2>
          <p>We use essential cookies and similar technologies to keep you signed in and to operate the Service. We do not use cookies to sell your data. You can control cookies through your browser settings, though disabling essential cookies may break sign-in.</p>

          <h2>7. Data retention</h2>
          <p>We keep your account and generated content for as long as your account is active so you can access your library. Some limits (such as summaries and notes) are generated once and served from our database. You can delete your videos and associated content from the app; when you delete content or close your account, we remove the associated data within a reasonable period, except where we must retain records to comply with legal, tax, or security obligations.</p>

          <h2>8. Data security</h2>
          <p>We use industry-standard measures to protect your data, including encryption of sensitive fields, encrypted connections (HTTPS), and access controls. No method of transmission or storage is completely secure, but we work to protect your information and to respond promptly to any incident.</p>

          <h2>9. Your rights</h2>
          <p>Depending on your location (including under India&rsquo;s Digital Personal Data Protection Act and, where applicable, the GDPR), you may have the right to access, correct, export, or delete your personal data, and to withdraw consent. To exercise these rights, email <a href="mailto:hello@myshorts.in">hello@myshorts.in</a> and we will respond within the timelines required by applicable law.</p>

          <h2>10. Children</h2>
          <p>The Service is not directed to children under 18, and we do not knowingly collect personal data from them. If you believe a child has provided us data, contact us and we will delete it.</p>

          <h2>11. International transfers</h2>
          <p>Your data may be processed on servers located outside your country by us or our service providers. Where required, we take steps to ensure your data is protected in accordance with applicable law.</p>

          <h2>12. Changes to this policy</h2>
          <p>We may update this Privacy Policy from time to time. We will post the updated version here with a new &ldquo;Last updated&rdquo; date, and material changes may be communicated by email or in-app.</p>

          <h2>13. Contact us</h2>
          <p>Questions or requests about this policy or your data? Email <a href="mailto:hello@myshorts.in">hello@myshorts.in</a>.</p>
        </div>
      </div>
    </article>
  );
}
