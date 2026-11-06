/**
 * Central registry of every image, video and document the website uses.
 * Files live in /public/assets — replace a file with one of the same name,
 * or point the path below to a new file. See /public/assets/README.md.
 *
 * Video entries set to `null` fall back to their poster image until a real
 * MP4 is added to /public/assets/videos/...
 */
export const assets = {
  logo: {
    primary: "/assets/images/logo/bapardekar-primary.svg",
    monogram: "/assets/images/logo/bapardekar-monogram.svg",
  },
  hero: {
    background: null as string | null, // e.g. "/assets/videos/hero/hero-background.mp4"
    poster: "/assets/images/hero/hero-studio.webp",
  },
  about: {
    moodboard: "/assets/images/about/moodboard-session.webp",
    collaboration: "/assets/images/about/collaboration.webp",
  },
  founder: {
    // Add your portrait here, e.g. "/assets/images/founder/founder-portrait.webp"
    portrait: null as string | null,
  },
  services: {
    design: "/assets/images/services/graphic-design/cover.webp",
    motion: "/assets/images/services/video-editing/cover.webp",
  },
  portfolio: {
    emberRoasters: "/assets/images/portfolio/branding/ember-roasters-cover.webp",
    monogramStudy: "/assets/images/portfolio/logo-design/monogram-study-cover.webp",
    lumenCarousel: "/assets/images/portfolio/social-media/lumen-carousel-cover.webp",
    midnightSessions: "/assets/images/portfolio/posters/midnight-sessions-cover.webp",
    coastlineFilm: "/assets/images/portfolio/video-editing/coastline-film-cover.webp",
    auraProductFilm: "/assets/images/portfolio/video-editing/aura-product-film-cover.webp",
  },
  fallback: "/assets/images/hero/hero-studio.webp",
} as const;
