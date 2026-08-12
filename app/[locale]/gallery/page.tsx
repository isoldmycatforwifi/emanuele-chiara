import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";
import { getDictionary } from "@/lib/i18n";
import { getRouteLocale, type LocalizedPageProps } from "@/lib/locale-page";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const copy = getDictionary(locale).gallery;
  return getPageMetadata(locale, "/gallery", copy.metaTitle, copy.description);
}

export default async function Page({ params }: LocalizedPageProps) {
  return <GalleryPage locale={await getRouteLocale(params)} />;
}
