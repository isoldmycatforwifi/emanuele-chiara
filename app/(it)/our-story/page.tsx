import type { Metadata } from "next";
import { OurStoryPage } from "@/components/pages/OurStoryPage";
import { getDictionary } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const copy = getDictionary("it").story;
export const metadata: Metadata = getPageMetadata("it", "/our-story", copy.metaTitle);

export default function Page() {
  return <OurStoryPage locale="it" />;
}
