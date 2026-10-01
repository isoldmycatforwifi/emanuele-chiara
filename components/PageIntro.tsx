type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12">
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h1 className="max-w-full break-words font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.045em] [hyphens:auto] sm:max-w-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">{description}</p>
      ) : null}
    </header>
  );
}
