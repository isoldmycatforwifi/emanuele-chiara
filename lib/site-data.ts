export const WEDDING_DATE = "2027-05-16T16:00:00+02:00";

// Centralized photography so page components can stay focused on layout.
export const images = {
  homeHero: "/images/couple/poolside.jpg",
  homeHeroSecondary: "/images/couple/garden-portrait.jpg",
  homeDetail:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=85",
  storyHero: "/images/couple/black-white-portrait.jpg",
  storyOne: "/images/couple/city-street.jpg",
  storyTwo: "/images/couple/engagement.jpg",
  venue:
    "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=2000&q=85",
  safari: "/images/couple/waterfall-adventure.jpg",
};

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/couple/marina-sunset.jpg", width: 2400, height: 1800 },
  { src: "/images/couple/city-street.jpg", width: 1512, height: 1890 },
  { src: "/images/couple/poolside.jpg", width: 2400, height: 1800 },
  { src: "/images/couple/engagement.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/ancient-ruins.jpg", width: 2400, height: 1800 },
  { src: "/images/couple/black-white-portrait.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/waterfall-adventure.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/sunset-silhouette.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/cafe-central.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/by-the-sea.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/winter-market.jpg", width: 2174, height: 2400 },
  { src: "/images/couple/garden-portrait.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/lake-adventure.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/mirror-selfie.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/lake-overlook.jpg", width: 1800, height: 2400 },
  { src: "/images/couple/summer-selfie.jpg", width: 1800, height: 2400 },
];
