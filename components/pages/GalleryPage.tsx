import { GalleryGrid } from "@/components/GalleryGrid";
import { PageIntro } from "@/components/PageIntro";
import { getDictionary, type Locale } from "@/lib/i18n";

export function GalleryPage({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).gallery;

  return (
    <>
      <PageIntro description={copy.description} eyebrow={copy.eyebrow} title={copy.title} />
      <section className="px-3 pb-24 sm:px-5 sm:pb-32 lg:px-8 lg:pb-40">
        <div className="mx-auto max-w-[100rem]">
          <GalleryGrid copy={copy} />
        </div>
      </section>
    </>
  );
}
