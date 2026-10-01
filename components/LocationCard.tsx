import { ArrowUpRight, MapPinIcon } from "@/components/icons";

type LocationCardProps = {
  title: string;
  subtitle: string;
  address: string;
  directionsHref: string;
  copy: {
    aria: string;
    label: string;
    regionCountry: string;
    mapsCta: string;
    mapsHint: string;
  };
};

export function LocationCard({ title, subtitle, address, directionsHref, copy }: LocationCardProps) {
  return (
    <a
      aria-label={copy.aria}
      className="focus-ring group flex min-h-72 flex-col justify-between bg-[var(--sage-dark)] p-7 text-white sm:min-h-80 sm:p-10"
      href={directionsHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/65">{copy.label}</p>
        <MapPinIcon className="h-6 w-6 text-[var(--hero-gold)]" />
      </div>
      <div>
        <h2 className="font-serif text-[clamp(2.9rem,7vw,5.6rem)] leading-[0.88] tracking-[-0.05em]">{title}</h2>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">{subtitle}</p>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/65">{address}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">{copy.regionCountry}</p>
        <span className="mt-7 inline-flex w-fit items-center gap-3 bg-[var(--hero-cream)] px-4 py-3 text-left text-[var(--sage-dark)] shadow-sm transition-transform duration-300 group-hover:translate-x-1">
          <MapPinIcon className="h-5 w-5 shrink-0" />
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.15em]">{copy.mapsCta}</span>
            <span className="mt-0.5 block text-[0.68rem] text-[var(--muted)]">{copy.mapsHint}</span>
          </span>
          <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" />
        </span>
      </div>
    </a>
  );
}
