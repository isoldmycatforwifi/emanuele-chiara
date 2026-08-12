import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getRouteLocale, type LocalizedPageProps } from "@/lib/locale-page";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return getPageMetadata(await getRouteLocale(params), "/");
}

export default async function Page({ params }: LocalizedPageProps) {
  return <HomePage locale={await getRouteLocale(params)} />;
}
