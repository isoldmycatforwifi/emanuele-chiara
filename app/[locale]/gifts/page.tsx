import type { Metadata } from "next";
import { GiftsPage } from "@/components/pages/GiftsPage";
import { getDictionary } from "@/lib/i18n";
import { getRouteLocale, type LocalizedPageProps } from "@/lib/locale-page";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const copy = getDictionary(locale).gifts;
  return getPageMetadata(locale, "/gifts", copy.metaTitle, copy.description);
}

export default async function Page({ params }: LocalizedPageProps) {
  return <GiftsPage locale={await getRouteLocale(params)} />;
}
