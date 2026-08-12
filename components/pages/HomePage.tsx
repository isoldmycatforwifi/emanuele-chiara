import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "@/components/icons";
import { Countdown } from "@/components/Countdown";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary, localizedPath, type Locale } from "@/lib/i18n";
import { images } from "@/lib/site-data";

export function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4.75rem)] items-center justify-center overflow-hidden bg-[#3f4431] px-5 py-12 text-[var(--hero-cream)] sm:px-8 lg:min-h-[calc(100svh-6.25rem)] lg:px-12 lg:py-16">
        <div aria-hidden="true" className="hero-calm-background absolute inset-0" />
        <div aria-hidden="true" className="absolute -right-48 top-[7%] h-[34rem] w-[34rem] rounded-full border border-[var(--hero-gold)]/15 sm:-right-28 lg:h-[46rem] lg:w-[46rem]" />
        <div aria-hidden="true" className="absolute -bottom-64 -left-44 h-[34rem] w-[34rem] rounded-full border border-white/8 lg:h-[42rem] lg:w-[42rem]" />
        <div aria-hidden="true" className="absolute right-[12%] top-[20%] h-px w-36 rotate-[-28deg] bg-[var(--hero-gold)]/20 sm:w-64" />
        <div aria-hidden="true" className="absolute bottom-[18%] left-[9%] h-px w-28 rotate-[18deg] bg-white/10 sm:w-52" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="mb-7 text-[0.66rem] font-medium uppercase tracking-[0.36em] text-[var(--hero-cream)]/85 sm:mb-8 sm:text-xs">
            {copy.heroEyebrow}
          </p>

          <h1 aria-label="Emanuele & Chiara" className="font-serif text-[clamp(3.8rem,14vw,9.25rem)] leading-[0.76] tracking-[-0.045em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.12)]">
            <span aria-hidden="true" className="block -translate-x-[3%]">Emanuele</span>
            <span aria-hidden="true" className="mt-[0.08em] flex items-baseline justify-center gap-[0.11em]">
              <span className="text-[0.48em] font-normal text-[var(--hero-gold)]">&</span>
              <span>Chiara</span>
            </span>
          </h1>

          <div aria-hidden="true" className="mt-10 flex w-full max-w-[25rem] items-center gap-6 sm:mt-12">
            <span className="h-px flex-1 bg-[var(--hero-gold)]/75" />
            <span className="h-2.5 w-2.5 rotate-45 bg-[var(--hero-gold)]" />
            <span className="h-px flex-1 bg-[var(--hero-gold)]/75" />
          </div>

          <p className="font-script mt-7 text-[clamp(1.75rem,4vw,2.6rem)] leading-none text-[var(--hero-cream)]/95 sm:mt-8">
            {copy.heroInvitation}
          </p>

          <Link
            aria-label={copy.scrollAria}
            className="focus-ring-dark mt-8 inline-flex h-11 w-11 items-center justify-center text-[var(--hero-gold)] transition-transform duration-300 hover:translate-y-1 sm:mt-9"
            href="#save-the-date"
          >
            <ChevronDown className="h-8 w-8" />
          </Link>
        </div>
      </section>

      <section className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40" id="save-the-date">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-5">{copy.saveDate}</p>
          <h2 className="font-serif text-[clamp(3.1rem,8vw,7.5rem)] leading-none tracking-[-0.055em]">{dictionary.global.date}</h2>
          <div className="my-12 h-px bg-[var(--line)] sm:my-16" />
          <Countdown copy={dictionary.countdown} />
          <p className="mx-auto mt-12 max-w-xl text-sm leading-7 text-[var(--muted)] sm:mt-16 sm:text-base">{copy.introduction}</p>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="group relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
            <Image
              alt={copy.detailAlt}
              className="editorial-image object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              src={images.homeDetail}
            />
          </div>
          <div className="pb-12 lg:pb-0 lg:pr-10">
            <SectionHeading body={copy.featureBody} eyebrow={copy.featureEyebrow} title={copy.featureTitle} />
            <Link
              className="focus-ring mt-10 inline-flex items-center gap-3 border-b border-[var(--charcoal)] pb-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:text-[var(--sage-dark)]"
              href={localizedPath(locale, "/wedding")}
            >
              {copy.featureCta} <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
        <p className="eyebrow mb-5">{copy.noteEyebrow}</p>
        <blockquote className="font-serif text-balance mx-auto max-w-5xl text-[clamp(2.6rem,6.5vw,6rem)] leading-[1.02] tracking-[-0.04em]">
          {copy.quote}
        </blockquote>
        <Link
          className="focus-ring mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage-dark)]"
          href={localizedPath(locale, "/faq-rsvp")}
        >
          {copy.rsvpCta} <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
