import { assets } from "@/config/assets";

/**
 * Portfolio projects. All current entries are self-initiated CONCEPT projects
 * and are labelled as such on the website. Replace or add real client work here.
 */
export const portfolioFilters = [
  "All Projects",
  "Branding",
  "Logo Design",
  "Social Media",
  "Posters",
  "Video Editing",
  "Promotional Videos",
] as const;

export type PortfolioCategory = Exclude<(typeof portfolioFilters)[number], "All Projects">;

export type Project = {
  slug: string;
  name: string;
  category: PortfolioCategory;
  projectType: string;
  short: string;
  cover: string;
  orientation: "landscape" | "portrait";
  isConcept: boolean;
  isVideo: boolean;
  year: string;
  overview: string;
  challenge: string;
  direction: string;
  process: { title: string; text: string }[];
  output: string;
  gallery: string[];
  video: string | null;
  tools: string[];
  serviceSlug: string;
};

export const projects: Project[] = [
  {
    slug: "ember-roasters-identity",
    name: "Ember Roasters",
    category: "Branding",
    projectType: "Brand Identity",
    short: "A warm, tactile identity for a small-batch coffee roaster.",
    cover: assets.portfolio.emberRoasters,
    orientation: "landscape",
    isConcept: true,
    isVideo: false,
    year: "2026",
    overview:
      "A self-initiated concept exploring how a specialty coffee roaster could express craft and warmth through a restrained geometric identity.",
    challenge:
      "Specialty coffee packaging is crowded with illustration and noise. The goal was an identity that felt handmade yet confident enough to stand out on a shelf.",
    direction:
      "We built the system around a split-circle emblem — a nod to the roasting drum and the rising sun — paired with kraft textures, deep charcoal and terracotta.",
    process: [
      { title: "Research", text: "Shelf audit of specialty coffee brands and packaging materials." },
      { title: "Mark exploration", text: "Over thirty sketches reduced to one geometric emblem." },
      { title: "System", text: "Colour, type and large-scale graphic shapes for packaging." },
      { title: "Application", text: "Bags, cups, cards and merchandise mockups." },
    ],
    output: "Logo, packaging system, stationery and brand guidelines (concept).",
    gallery: [assets.portfolio.emberRoasters, assets.services.design, assets.about.moodboard],
    video: null,
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    serviceSlug: "brand-identity",
  },
  {
    slug: "monogram-study",
    name: "Monogram Study",
    category: "Logo Design",
    projectType: "Logo Design",
    short: "Constructing a monogram on a strict geometric grid.",
    cover: assets.portfolio.monogramStudy,
    orientation: "portrait",
    isConcept: true,
    isVideo: false,
    year: "2026",
    overview: "A concept study in building a monogram from circles and straight cuts, tested across sizes and colours.",
    challenge: "Create a mark that remains legible at 16 pixels yet feels elegant at billboard scale.",
    direction: "A grid of circles and a single diagonal cut creates movement while keeping the form stable.",
    process: [
      { title: "Sketching", text: "Pencil explorations on construction grids." },
      { title: "Vectorising", text: "Precise curves and optical corrections." },
      { title: "Testing", text: "Scale, contrast and colour tests." },
    ],
    output: "Primary monogram, colour variants and construction sheet (concept).",
    gallery: [assets.portfolio.monogramStudy, assets.about.moodboard],
    video: null,
    tools: ["Pencil & paper", "Adobe Illustrator"],
    serviceSlug: "logo-design",
  },
  {
    slug: "lumen-skincare-carousel",
    name: "Lumen Skincare",
    category: "Social Media",
    projectType: "Instagram Carousel",
    short: "An editorial carousel series for a minimalist skincare label.",
    cover: assets.portfolio.lumenCarousel,
    orientation: "portrait",
    isConcept: true,
    isVideo: false,
    year: "2026",
    overview: "A concept carousel system that turns product education into calm, editorial storytelling.",
    challenge: "Make educational content feel premium rather than cluttered.",
    direction: "Generous whitespace, warm stone props and a single orange accent per slide.",
    process: [
      { title: "Content map", text: "Breaking a skincare routine into a five-slide narrative." },
      { title: "Art direction", text: "Prop styling and colour system." },
      { title: "Templates", text: "Reusable layouts for ongoing posts." },
    ],
    output: "Carousel templates and a launch series (concept).",
    gallery: [assets.portfolio.lumenCarousel, assets.about.moodboard],
    video: null,
    tools: ["Figma", "Adobe Photoshop"],
    serviceSlug: "instagram-carousel-design",
  },
  {
    slug: "midnight-sessions-posters",
    name: "Midnight Sessions",
    category: "Posters",
    projectType: "Event Poster Series",
    short: "A bold geometric poster series for a jazz night.",
    cover: assets.portfolio.midnightSessions,
    orientation: "landscape",
    isConcept: true,
    isVideo: false,
    year: "2026",
    overview: "A concept poster trilogy combining documentary photography with modernist shapes.",
    challenge: "Create a series that reads as one campaign while each poster stands alone.",
    direction: "Duotone photography cut by burnt orange circles and diagonals, referencing album art of the 1960s.",
    process: [
      { title: "References", text: "Modernist record sleeves and gig posters." },
      { title: "Composition", text: "Shape language and photo treatment." },
      { title: "Print prep", text: "Large-format print files." },
    ],
    output: "Three A1 posters and social adaptations (concept).",
    gallery: [assets.portfolio.midnightSessions],
    video: null,
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    serviceSlug: "promotional-posters",
  },
  {
    slug: "coastline-short-film",
    name: "Coastline",
    category: "Video Editing",
    projectType: "Cinematic Edit",
    short: "A quiet travel film edited around light and silence.",
    cover: assets.portfolio.coastlineFilm,
    orientation: "landscape",
    isConcept: true,
    isVideo: true,
    year: "2026",
    overview: "A concept cinematic edit exploring pacing, colour grading and sound to tell a story without dialogue.",
    challenge: "Hold attention for three minutes with no voice-over.",
    direction: "Long takes, a teal-and-amber grade and layered ambient sound build a meditative rhythm.",
    process: [
      { title: "Selects", text: "Choosing moments that carry emotion." },
      { title: "Rhythm", text: "Cutting to breath and music." },
      { title: "Grade", text: "A warm, filmic look with soft highlights." },
      { title: "Sound", text: "Ambient layers and a restrained score." },
    ],
    output: "3-minute film and 30-second teaser (concept).",
    gallery: [assets.portfolio.coastlineFilm, assets.services.motion],
    video: null,
    tools: ["DaVinci Resolve", "Adobe Premiere Pro"],
    serviceSlug: "cinematic-video-editing",
  },
  {
    slug: "aura-product-film",
    name: "Aura Headphones",
    category: "Promotional Videos",
    projectType: "Product Video",
    short: "A dark, kinetic product film for wireless headphones.",
    cover: assets.portfolio.auraProductFilm,
    orientation: "landscape",
    isConcept: true,
    isVideo: true,
    year: "2026",
    overview: "A concept product promo built around light trails, sound-reactive motion and close-up detail.",
    challenge: "Communicate sound quality visually in under 30 seconds.",
    direction: "Light streaks that move with the beat, deep blacks and a single orange accent.",
    process: [
      { title: "Storyboard", text: "Ten key moments mapped to the music." },
      { title: "Edit & motion", text: "Speed ramps and motion graphics." },
      { title: "Finishing", text: "Grade, sound design and platform cut-downs." },
    ],
    output: "30-second hero film with 15s and 6s cut-downs (concept).",
    gallery: [assets.portfolio.auraProductFilm, assets.services.motion],
    video: null,
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "DaVinci Resolve"],
    serviceSlug: "product-videos",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(project: Project, count = 3) {
  const same = projects.filter((p) => p.slug !== project.slug && p.category === project.category);
  const rest = projects.filter((p) => p.slug !== project.slug && p.category !== project.category);
  return [...same, ...rest].slice(0, count);
}
