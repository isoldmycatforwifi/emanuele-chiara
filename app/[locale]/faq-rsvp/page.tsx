import type { Metadata } from "next";
import { FaqRsvpPage } from "@/components/pages/FaqRsvpPage";
import { getDictionary } from "@/lib/i18n";
import { getRouteLocale, type LocalizedPageProps } from "@/lib/locale-page";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const copy = getDictionary(locale).faqPage;
  return getPageMetadata(locale, "/faq-rsvp", copy.metaTitle, copy.description);
}

export default async function Page({ params }: LocalizedPageProps) {
  return <FaqRsvpPage locale={await getRouteLocale(params)} />;
}
