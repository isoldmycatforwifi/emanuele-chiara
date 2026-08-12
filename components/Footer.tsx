import Image from "next/image";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  datePlace: string;
  credit: string;
};

export function Footer({ locale, datePlace, credit }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--brand-background)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <Link aria-label="Emanuele & Chiara" className="focus-ring inline-block" href={localizedPath(locale, "/")}>
          <Image
            alt=""
            className="h-auto w-[17rem] sm:w-[20rem]"
            height={724}
            src="/images/brand/emanuele-chiara-logo.png"
            width={2172}
          />
        </Link>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          {datePlace}
        </p>
        <p className="mt-8 w-full max-w-xl border-t border-[var(--line)] pt-6 text-[0.68rem] leading-6 tracking-[0.08em] text-[var(--muted)]">
          {credit}
        </p>
      </div>
    </footer>
  );
}
