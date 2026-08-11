import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { USECASES, usecaseList, getUseCase } from "@/content/usecases";
import UseCasePage from "@/components/UseCasePage";

const SITE = "https://myshorts.in";

export function generateStaticParams() {
  return usecaseList.map((u) => ({ usecase: u.slug }));
}

// Only the known use-case slugs are valid; everything else 404s.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ usecase: string }> }): Promise<Metadata> {
  const { usecase } = await params;
  const uc = getUseCase(usecase);
  if (!uc) return {};
  return {
    title: uc.title,
    description: uc.description,
    keywords: uc.keywords,
    alternates: { canonical: `/${uc.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE}/${uc.slug}`,
      siteName: "MyShorts",
      title: uc.title,
      description: uc.description,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: uc.title, description: uc.description, images: ["/og.png"] },
  };
}

export default async function Page({ params }: { params: Promise<{ usecase: string }> }) {
  const { usecase } = await params;
  const uc = getUseCase(usecase);
  if (!uc) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: uc.navLabel, item: `${SITE}/${uc.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <UseCasePage data={uc} />
    </>
  );
}
