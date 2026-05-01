import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PresentationDetailsView } from "./presentation-details-view";
import { LOCALE_COOKIE, normalizeLocale } from "@/lib/i18n-config";
import { getPresentationBySlug } from "@/lib/presentation-details";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { cookies } from "next/headers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getPresentationBySlug(slug);
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE)?.value);
  if (!data) {
    const title =
      locale === "es"
        ? es.presentation.notFoundTitle
        : en.presentation.notFoundTitle;
    return { title };
  }
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function PresentationDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getPresentationBySlug(slug);
  if (!data) {
    notFound();
  }

  return <PresentationDetailsView data={data} />;
}
