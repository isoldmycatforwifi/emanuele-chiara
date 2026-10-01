import Image from "next/image";
import { ExpandableBankDetails } from "@/components/ExpandableBankDetails";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary, type Locale } from "@/lib/i18n";
import { images } from "@/lib/site-data";

export function GiftsPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.gifts;

  return (
    <>
      <PageIntro description={copy.description} eyebrow={copy.eyebrow} title={copy.title} />

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[var(--cream)] lg:grid-cols-2">
          <div className="flex items-center px-6 py-16 sm:px-12 sm:py-24 lg:px-16 lg:py-28">
            <div className="max-w-xl">
              <p className="eyebrow mb-5">{copy.dreamEyebrow}</p>
              <h2 className="font-serif text-balance text-[clamp(3rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.05em]">{copy.dreamTitle}</h2>
              <div className="mt-9 space-y-6 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                {copy.dreamParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
          <div className="relative min-h-[38rem] overflow-hidden lg:min-h-0">
            <Image
              alt={copy.safariAlt}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={images.safari}
            />
            <div className="absolute bottom-5 right-5 w-[38%] max-w-[15rem] border-[6px] border-[var(--paper)] bg-[var(--paper)] shadow-xl sm:bottom-8 sm:right-8">
              <Image
                alt={copy.safariCoupleAlt}
                className="h-auto w-full"
                height={2400}
                sizes="(max-width: 1024px) 35vw, 16vw"
                src={images.safariCouple}
                width={1800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading body={copy.infoBody} eyebrow={copy.thanksEyebrow} title={copy.infoTitle} />
          <div className="lg:pt-4">
            <ExpandableBankDetails copy={dictionary.bank} />
          </div>
        </div>
      </section>
    </>
  );
}
