import type { Metadata } from "next";
import { OurStoryPage } from "@/components/pages/OurStoryPage";
import { getDictionary } from "@/lib/i18n";
import { getRouteLocale, type LocalizedPageProps } from "@/lib/locale-page";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  return getPageMetadata(locale, "/our-story", getDictionary(locale).story.metaTitle);
}

export default async function Page({ params }: LocalizedPageProps) {
  return <OurStoryPage locale={await getRouteLocale(params)} />;
}
