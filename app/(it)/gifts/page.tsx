import type { Metadata } from "next";
import { GiftsPage } from "@/components/pages/GiftsPage";
import { getDictionary } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const copy = getDictionary("it").gifts;
export const metadata: Metadata = getPageMetadata("it", "/gifts", copy.metaTitle, copy.description);

export default function Page() {
  return <GiftsPage locale="it" />;
}
