type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="font-serif text-balance text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-[-0.035em]">
        {title}
      </h2>
      {body ? <p className="mt-6 text-[0.98rem] leading-7 text-[var(--muted)] sm:text-base">{body}</p> : null}
    </div>
  );
}
