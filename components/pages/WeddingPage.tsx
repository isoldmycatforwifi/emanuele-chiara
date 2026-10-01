import { LocationCard } from "@/components/LocationCard";
import { PageIntro } from "@/components/PageIntro";
import { getDictionary, type Locale } from "@/lib/i18n";

function directionsUrl(destination: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

function mapUrl(destination: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(destination)}&z=15&output=embed`;
}

type DetailListProps = {
  labels: { address: string; arrival: string; parking: string };
  address: string;
  arrival: string;
  parking: string;
};

function DetailList({ labels, address, arrival, parking }: DetailListProps) {
  return (
    <dl className="divide-y divide-black/15 border-y border-black/15">
      <div className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr]">
        <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage-dark)]">{labels.address}</dt>
        <dd className="text-sm leading-7">{address}</dd>
      </div>
      <div className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr]">
        <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage-dark)]">{labels.arrival}</dt>
        <dd className="text-sm leading-7 text-[var(--muted)]">{arrival}</dd>
      </div>
      <div className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr]">
        <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage-dark)]">{labels.parking}</dt>
        <dd className="text-sm leading-7 text-[var(--muted)]">{parking}</dd>
      </div>
    </dl>
  );
}

export function WeddingPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.wedding;
  const labels = {
    address: copy.addressLabel,
    arrival: copy.arrivalLabel,
    parking: copy.parkingLabel,
  };

  return (
    <>
      <PageIntro description={copy.description} eyebrow={dictionary.global.date} title={copy.title} />

      <section className="px-5 pb-20 text-center sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-4xl border-y border-[var(--line)] py-10 sm:py-14">
          <p className="eyebrow">{copy.ceremonyTimeLabel}</p>
          <p className="font-serif mt-3 text-[clamp(4.5rem,13vw,9rem)] leading-none tracking-[-0.06em]">12:00</p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{copy.ceremonyTimeBody}</p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <LocationCard
              address={copy.churchAddress}
              copy={{
                aria: copy.churchLocationAria,
                label: copy.churchLabel,
                regionCountry: copy.regionCountry,
                mapsCta: copy.mapsCta,
                mapsHint: copy.mapsHint,
              }}
              directionsHref={directionsUrl(copy.churchMapDestination)}
              subtitle={copy.churchName}
              title={copy.churchTown}
            />
            <div className="min-h-80 overflow-hidden border border-[var(--line)] bg-[var(--cream)] lg:min-h-[30rem]">
              <iframe
                className="h-full min-h-80 w-full border-0 lg:min-h-[30rem]"
                loading="lazy"
                referrerPolicy="no-referrer"
                src={mapUrl(copy.churchMapDestination)}
                title={copy.churchMapTitle}
              />
            </div>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-4">{copy.churchEyebrow}</p>
              <h2 className="font-serif text-balance text-[clamp(2.7rem,6vw,5rem)] leading-[0.98] tracking-[-0.04em]">{copy.churchName}</h2>
            </div>
            <DetailList address={copy.churchAddress} arrival={copy.churchArrival} labels={labels} parking={copy.churchParking} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <LocationCard
              address={copy.venueAddress}
              copy={{
                aria: copy.venueLocationAria,
                label: copy.venueLabel,
                regionCountry: copy.regionCountry,
                mapsCta: copy.mapsCta,
                mapsHint: copy.mapsHint,
              }}
              directionsHref={directionsUrl(copy.venueMapDestination)}
              subtitle={copy.venueName}
              title={copy.venueTown}
            />
            <div className="min-h-80 overflow-hidden border border-black/10 bg-[var(--paper)] lg:min-h-[30rem]">
              <iframe
                className="h-full min-h-80 w-full border-0 lg:min-h-[30rem]"
                loading="lazy"
                referrerPolicy="no-referrer"
                src={mapUrl(copy.venueMapDestination)}
                title={copy.venueMapTitle}
              />
            </div>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-4">{copy.venueEyebrow}</p>
              <h2 className="font-serif text-balance text-[clamp(2.7rem,6vw,5rem)] leading-[0.98] tracking-[-0.04em]">{copy.venueName}</h2>
            </div>
            <DetailList address={copy.venueAddress} arrival={copy.venueArrival} labels={labels} parking={copy.venueParking} />
          </div>
        </div>
      </section>
    </>
  );
}
