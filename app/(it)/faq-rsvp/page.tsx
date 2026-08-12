import type { Metadata } from "next";
import { FaqRsvpPage } from "@/components/pages/FaqRsvpPage";
import { getDictionary } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const copy = getDictionary("it").faqPage;
export const metadata: Metadata = getPageMetadata("it", "/faq-rsvp", copy.metaTitle, copy.description);

export default function Page() {
  return <FaqRsvpPage locale="it" />;
}
