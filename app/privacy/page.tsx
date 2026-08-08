import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MyShorts handles your data.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <article className="section article">
      <div className="wrap article-wrap">
        <h1>Privacy Policy</h1>
        <div className="article-body">
          <p>This is a placeholder privacy policy. Replace it with your finalised legal copy before launch.</p>
          <h2>What we collect</h2>
          <p>Account details you provide, the YouTube URLs you submit, and basic usage data needed to run the service.</p>
          <h2>How we use it</h2>
          <p>To generate your Shorts, summaries and notes, to enforce plan limits, and to process payments via Razorpay.</p>
          <h2>Contact</h2>
          <p>Questions? Email hello@myshorts.in.</p>
        </div>
      </div>
    </article>
  );
}
