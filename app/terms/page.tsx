import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using MyShorts.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <article className="section article">
      <div className="wrap article-wrap">
        <h1>Terms of Service</h1>
        <div className="article-body">
          <p>This is a placeholder terms of service. Replace it with your finalised legal copy before launch.</p>
          <h2>Using the service</h2>
          <p>You are responsible for having the rights to the videos you process. MyShorts is not affiliated with YouTube.</p>
          <h2>Plans &amp; billing</h2>
          <p>Paid plans are billed monthly via Razorpay and can be cancelled anytime.</p>
          <h2>Contact</h2>
          <p>Questions? Email hello@myshorts.in.</p>
        </div>
      </div>
    </article>
  );
}
