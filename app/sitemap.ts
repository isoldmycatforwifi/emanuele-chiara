import type { MetadataRoute } from "next";
import { locales, localizedPath, pageRoutes } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageRoutes.flatMap((route) => {
    const languages = {
      it: absoluteUrl(localizedPath("it", route.href)),
      en: absoluteUrl(localizedPath("en", route.href)),
      sc: absoluteUrl(localizedPath("sc", route.href)),
      "x-default": absoluteUrl(localizedPath("it", route.href)),
    };

    return locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, route.href)),
      changeFrequency: "monthly" as const,
      priority: route.href === "/" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
