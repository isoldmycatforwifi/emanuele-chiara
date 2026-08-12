import Image from "next/image";
import { galleryImages } from "@/lib/site-data";

type GalleryGridProps = {
  copy: {
    imageAlts: readonly string[];
  };
};

export function GalleryGrid({ copy }: GalleryGridProps) {
  const localizedImages = galleryImages.map((image, index) => ({
    ...image,
    alt: copy.imageAlts[index] ?? "",
  }));

  return (
    <div className="columns-2 gap-3 sm:gap-5 lg:columns-3 xl:columns-4" role="list">
      {localizedImages.map((image, index) => (
        <div className="mb-3 break-inside-avoid overflow-hidden bg-[var(--cream)] sm:mb-5" key={`${image.src}-${index}`} role="listitem">
          <Image
            alt={image.alt}
            className="h-auto w-full"
            height={image.height}
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
            src={image.src}
            width={image.width}
          />
        </div>
      ))}
    </div>
  );
}
