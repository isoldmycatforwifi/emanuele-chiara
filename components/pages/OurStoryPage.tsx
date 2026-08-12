import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import { images } from "@/lib/site-data";

export function OurStoryPage({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).story;

  return (
    <>
      <section className="px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-5">{copy.heroEyebrow}</p>
          <h1 className="font-serif text-balance text-[clamp(4rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.055em]">{copy.title}</h1>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.23em] text-[var(--muted)] sm:text-sm">{copy.heroSubtitle}</p>
          <div className="mx-auto mt-14 w-full max-w-[29rem] bg-[var(--cream)] p-3 sm:mt-18 sm:p-5">
            <Image
              alt={copy.heroAlt}
              className="h-auto w-full"
              height={2400}
              priority
              sizes="(max-width: 640px) 90vw, 29rem"
              src={images.storyHero}
              width={1800}
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">{copy.beginningEyebrow}</p>
            <p className="font-serif text-3xl leading-[1.18] tracking-[-0.025em] sm:text-4xl lg:max-w-sm">{copy.beginningLead}</p>
          </div>
          <div className="max-w-2xl space-y-7 text-[0.98rem] leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            {copy.paragraphs.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="grid bg-[var(--cream)] lg:grid-cols-2">
        <div className="flex items-center justify-center p-5 sm:p-10 lg:p-16">
          <Image
            alt={copy.earlyDaysAlt}
            className="h-auto w-full max-w-2xl"
            height={1890}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={images.storyOne}
            width={1512}
          />
        </div>
        <div className="flex items-center px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
          <div className="max-w-lg">
            <p className="eyebrow mb-5">{copy.thenEyebrow}</p>
            <h2 className="font-serif text-balance text-[clamp(3rem,6vw,5.4rem)] leading-[0.98] tracking-[-0.045em]">{copy.thenTitle}</h2>
            <p className="mt-8 text-base leading-8 text-[var(--muted)]">{copy.paragraphs[2]}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="order-2 lg:order-1 lg:pl-12">
            <p className="eyebrow mb-5">{copy.questionEyebrow}</p>
            <h2 className="font-serif text-balance text-[clamp(3rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.045em]">{copy.questionTitle}</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted)]">
              <p>{copy.proposalParagraph}</p>
              <p>{copy.closingParagraph}</p>
            </div>
          </div>
          <div className="order-1 flex justify-center bg-[var(--cream)] p-5 sm:p-10 lg:order-2 lg:p-14">
            <Image
              alt={copy.engagementAlt}
              className="h-auto w-full max-w-[34rem]"
              height={2400}
              sizes="(max-width: 1024px) 100vw, 55vw"
              src={images.storyTwo}
              width={1800}
            />
          </div>
        </div>
      </section>
    </>
  );
}
