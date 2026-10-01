import { FAQAccordion } from "@/components/FAQAccordion";
import { PageIntro } from "@/components/PageIntro";
import { RSVPModal } from "@/components/RSVPModal";
import { getDictionary, type Locale } from "@/lib/i18n";

export function FaqRsvpPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.faqPage;

  return (
    <>
      <PageIntro description={copy.description} eyebrow={copy.eyebrow} title={copy.title} />
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion faqs={dictionary.faqs} />
          <aside className="mt-16 border-t border-[var(--line)] pt-14 text-center sm:mt-20 sm:pt-20">
            <p className="eyebrow mb-5">{copy.replyEyebrow}</p>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">{copy.replyTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">{copy.replyBody}</p>
            <div className="mt-9">
              <RSVPModal copy={dictionary.rsvp} date={dictionary.global.date} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sage-dark)]">{copy.deadline}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
