import { ArrowUpRight, MapPinIcon } from "@/components/icons";

type LocationCardProps = {
  copy: {
    aria: string;
    label: string;
    regionCountry: string;
    mapsCta: string;
    mapsHint: string;
  };
};

export function LocationCard({ copy }: LocationCardProps) {
  return (
    <a
      aria-label={copy.aria}
      className="focus-ring group flex min-h-64 flex-col justify-between bg-[var(--sage-dark)] p-7 text-white sm:min-h-80 sm:p-10"
      href="https://www.google.com/maps/dir/?api=1&destination=Salerno%2C%20Italy"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/65">{copy.label}</p>
        <MapPinIcon className="h-6 w-6 text-[var(--hero-gold)]" />
      </div>
      <div>
        <h2 className="font-serif text-[clamp(3.4rem,8vw,6.5rem)] leading-[0.85] tracking-[-0.055em]">Salerno</h2>
        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/70">{copy.regionCountry}</p>
        <span className="mt-8 inline-flex w-fit items-center gap-3 bg-[var(--hero-cream)] px-4 py-3 text-left text-[var(--sage-dark)] shadow-sm transition-transform duration-300 group-hover:translate-x-1">
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
