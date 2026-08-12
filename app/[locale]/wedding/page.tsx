import type { Metadata } from "next";
import { WeddingPage } from "@/components/pages/WeddingPage";
import { getDictionary } from "@/lib/i18n";
import { getRouteLocale, type LocalizedPageProps } from "@/lib/locale-page";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const copy = getDictionary(locale).wedding;
  return getPageMetadata(locale, "/wedding", copy.metaTitle, copy.description);
}

export default async function Page({ params }: LocalizedPageProps) {
  return <WeddingPage locale={await getRouteLocale(params)} />;
}
