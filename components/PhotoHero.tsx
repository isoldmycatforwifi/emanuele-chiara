import Image from "next/image";

type PhotoHeroProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  heightClass?: string;
};

export function PhotoHero({
  src,
  alt,
  eyebrow,
  title,
  subtitle,
  heightClass = "min-h-[calc(100svh-4.75rem)]",
}: PhotoHeroProps) {
  return (
    <section className={`image-veil relative flex overflow-hidden ${heightClass}`}>
      <Image
        alt={alt}
        className="editorial-image object-cover"
        fill
        priority
        sizes="100vw"
        src={src}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col items-center justify-end px-5 pb-12 text-center text-white sm:px-8 sm:pb-18 lg:px-12 lg:pb-20">
        {eyebrow ? <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-white/85">{eyebrow}</p> : null}
        <h1 className="font-serif text-balance text-[clamp(4.1rem,12vw,10rem)] leading-[0.84] tracking-[-0.045em] drop-shadow-sm">
          {title}
        </h1>
        {subtitle ? <p className="mt-7 text-xs uppercase tracking-[0.26em] text-white/85 sm:text-sm">{subtitle}</p> : null}
      </div>
    </section>
  );
}
