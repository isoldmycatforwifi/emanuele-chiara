import type { Metadata } from "next";
import { WeddingPage } from "@/components/pages/WeddingPage";
import { getDictionary } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const copy = getDictionary("it").wedding;
export const metadata: Metadata = getPageMetadata("it", "/wedding", copy.metaTitle, copy.description);

export default function Page() {
  return <WeddingPage locale="it" />;
}
