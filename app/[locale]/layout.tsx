import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getDictionary, getNavigation, isTranslatedLocale } from "@/lib/i18n";
import { getSiteMetadata } from "@/lib/metadata";
import "../globals.css";

type LocalizedLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sc" }];
}

export async function generateMetadata({ params }: LocalizedLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return getSiteMetadata(locale);
}

export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <Navbar
          copy={{
            navAria: dictionary.global.navAria,
            openMenu: dictionary.global.openMenu,
            closeMenu: dictionary.global.closeMenu,
            languageAria: dictionary.global.languageAria,
            datePlace: dictionary.global.datePlace,
          }}
          locale={locale}
          navigation={getNavigation(locale)}
        />
        <main className="page-enter min-h-[70vh]">{children}</main>
        <Footer credit={dictionary.global.footerCredit} datePlace={dictionary.global.datePlace} locale={locale} />
      </body>
    </html>
  );
}
