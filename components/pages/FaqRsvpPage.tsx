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
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-5">{copy.replyEyebrow}</p>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">{copy.replyTitle}</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">{copy.replyBody}</p>
            <div className="mt-9">
              <RSVPModal copy={dictionary.rsvp} date={dictionary.global.date} />
            </div>
          </aside>
          <FAQAccordion faqs={dictionary.faqs} />
        </div>
      </section>
    </>
  );
}
