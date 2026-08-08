import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE = "https://myshorts.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "MyShorts — Turn one YouTube video into a month of Shorts",
    template: "%s · MyShorts",
  },
  description:
    "Paste a YouTube link, describe the moment you want, and get scroll-stopping vertical Shorts — face-aware 9:16 reframing, animated captions, and AI clip-finding. Full HD, no watermark, from ₹499/mo.",
  keywords: [
    "youtube to shorts", "ai shorts generator", "clip finder", "vertical video",
    "9:16 reframe", "auto captions", "repurpose video", "shorts maker india",
  ],
  authors: [{ name: "MyShorts" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "MyShorts",
    title: "MyShorts — One video in. A month of Shorts out.",
    description:
      "AI that turns long YouTube videos into viral vertical Shorts. Face-aware reframing, animated captions, clip-by-description. Full HD, no watermark.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MyShorts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyShorts — One video in. A month of Shorts out.",
    description:
      "AI that turns long YouTube videos into viral vertical Shorts. Full HD, no watermark, from ₹499/mo.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MyShorts",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: SITE,
  description:
    "AI that turns long YouTube videos into viral vertical Shorts with face-aware reframing and animated captions.",
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
    { "@type": "Offer", name: "Creator", price: "499", priceCurrency: "INR" },
    { "@type": "Offer", name: "Pro", price: "1299", priceCurrency: "INR" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Nav />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
