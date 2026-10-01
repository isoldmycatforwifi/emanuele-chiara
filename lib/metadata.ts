import type { Metadata } from "next";
import { getDictionary, localizedPath, type Locale } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function getSiteMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dictionary.global.defaultTitle,
      template: "%s — Emanuele & Chiara",
    },
    description: dictionary.global.description,
  };
}

export function getPageMetadata(
  locale: Locale,
  path: string,
  title?: string,
  description?: string,
): Metadata {
  const dictionary = getDictionary(locale);
  const canonical = localizedPath(locale, path);

  return {
    title: title ?? { absolute: dictionary.global.defaultTitle },
    description: description ?? dictionary.global.description,
    alternates: {
      canonical,
      languages: {
        it: localizedPath("it", path),
        en: localizedPath("en", path),
        de: localizedPath("de", path),
        sc: localizedPath("sc", path),
        "x-default": localizedPath("it", path),
      },
    },
    openGraph: {
      title: title ?? dictionary.global.defaultTitle,
      description: description ?? dictionary.global.description,
      locale: locale === "en" ? "en_GB" : locale === "de" ? "de_DE" : locale === "sc" ? "sc_IT" : "it_IT",
      type: "website",
      url: canonical,
    },
  };
}
