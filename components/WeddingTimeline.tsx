type WeddingTimelineProps = {
  schedule: ReadonlyArray<{ time: string; title: string; description: string }>;
};

export function WeddingTimeline({ schedule }: WeddingTimelineProps) {
  return (
    <ol className="relative">
      {schedule.map((item, index) => (
        <li className="grid grid-cols-[4.5rem_1fr] gap-5 pb-10 last:pb-0 sm:grid-cols-[6rem_1fr] sm:gap-10 sm:pb-12" key={`${item.time}-${item.title}`}>
          <time className="font-serif text-xl tabular-nums tracking-[-0.02em] sm:text-2xl" dateTime={item.time}>{item.time}</time>
          <div className="relative border-l border-[var(--line)] pl-7 sm:pl-10">
            <span
              className={`absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border-2 border-[var(--ivory)] ring-1 ring-[var(--sage)] ${
                index === 1 ? "bg-[var(--sage)]" : "bg-[var(--ivory)]"
              }`}
            />
            <h3 className="font-serif text-2xl leading-none tracking-[-0.025em] sm:text-3xl">{item.title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)] sm:text-base">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
