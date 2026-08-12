import { notFound } from "next/navigation";
import { isTranslatedLocale, type TranslatedLocale } from "@/lib/i18n";

export type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

export async function getRouteLocale(
  params: LocalizedPageProps["params"],
): Promise<TranslatedLocale> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return locale;
}
