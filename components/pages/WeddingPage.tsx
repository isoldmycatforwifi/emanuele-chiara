import { LocationCard } from "@/components/LocationCard";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { WeddingTimeline } from "@/components/WeddingTimeline";
import { getDictionary, type Locale } from "@/lib/i18n";

export function WeddingPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.wedding;

  return (
    <>
      <PageIntro description={copy.description} eyebrow={dictionary.global.date} title={copy.title} />

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <LocationCard
            copy={{
              aria: copy.locationAria,
              label: copy.locationLabel,
              regionCountry: copy.regionCountry,
              mapsCta: copy.mapsCta,
              mapsHint: copy.mapsHint,
            }}
          />
          <div className="min-h-80 overflow-hidden border border-[var(--line)] bg-[var(--cream)] lg:min-h-[30rem]">
            <iframe
              allowFullScreen
              className="h-full min-h-80 w-full border-0 lg:min-h-[30rem]"
              loading="lazy"
              referrerPolicy="no-referrer"
              src="https://www.google.com/maps?q=Salerno%2C%20Italy&z=13&output=embed"
              title={copy.mapTitle}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-28">
          <SectionHeading body={copy.venueBody} eyebrow={copy.venueEyebrow} title={copy.venueTitle} />
          <dl className="divide-y divide-black/15 border-y border-black/15">
            <div className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage-dark)]">{copy.addressLabel}</dt>
              <dd className="text-sm leading-7">{copy.address}</dd>
            </div>
            <div className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage-dark)]">{copy.arrivalLabel}</dt>
              <dd className="text-sm leading-7 text-[var(--muted)]">{copy.arrivalBody}</dd>
            </div>
            <div className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr]">
              <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage-dark)]">{copy.parkingLabel}</dt>
              <dd className="text-sm leading-7 text-[var(--muted)]">{copy.parkingBody}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading body={copy.scheduleBody} eyebrow={copy.celebrationEyebrow} title={copy.scheduleTitle} />
          </div>
          <WeddingTimeline schedule={dictionary.schedule} />
        </div>
      </section>
    </>
  );
}
