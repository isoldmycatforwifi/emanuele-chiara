import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";
import { getDictionary } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const copy = getDictionary("it").gallery;
export const metadata: Metadata = getPageMetadata("it", "/gallery", copy.metaTitle, copy.description);

export default function Page() {
  return <GalleryPage locale="it" />;
}
