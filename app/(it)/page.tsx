import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("it", "/");

export default function Page() {
  return <HomePage locale="it" />;
}
