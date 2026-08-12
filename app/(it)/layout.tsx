import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getDictionary, getNavigation } from "@/lib/i18n";
import { getSiteMetadata } from "@/lib/metadata";
import "../globals.css";

const locale = "it" as const;
const dictionary = getDictionary(locale);

export const metadata: Metadata = getSiteMetadata(locale);

export default function ItalianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
