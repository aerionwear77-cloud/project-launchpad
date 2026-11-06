import { assets } from "@/config/assets";

/**
 * Service catalogue. Edit names, descriptions, turnaround and prices here.
 * `startingPrice: null` shows "Request a quote" on the website.
 * Turnaround and revision terms remain unconfirmed until a project quotation.
 */
export type Department = "design" | "motion";

export type Price = { amount: number; currency: "INR" | "USD" };

export type Service = {
  slug: string;
  department: Department;
  name: string;
  short: string;
  intro: string;
  included: string[];
  deliverables: string[];
  suitableFor: string[];
  formats?: string[];
  turnaround: string;
  startingPrice: Price | null;
  revisionPolicy?: string;
  faqs?: { question: string; answer: string }[];
  orderService: string;
  portfolioCategories: string[];
};

export const departments: Record<
  Department,
  { name: string; label: string; summary: string; image: string; intro: string }
> = {
  design: {
    name: "BAPARDEKAR DESIGN",
    label: "Graphic Design, Branding & Visual Communication",
    summary:
      "Identities, campaigns and everyday brand assets designed to be recognised, remembered and trusted.",
    intro:
      "Design is how a business is first understood. We shape logos, identities and marketing visuals that feel considered, consistent and unmistakably yours.",
    image: assets.services.design,
  },
  motion: {
    name: "BAPARDEKAR MOTION",
    label: "Video Editing, Cinematic Content & Motion Graphics",
    summary: "Edits with rhythm and intention — from short-form reels to cinematic brand films.",
    intro:
      "Attention is earned in seconds. We edit, grade and animate video that holds viewers, tells a clear story and fits the platform it lives on.",
    image: assets.services.motion,
  },
};

export const services: Service[] = [
  // ——— DESIGN ———
  {
    slug: "logo-design",
    department: "design",
    name: "Logo Design",
    short: "A distinctive mark built to last.",
    intro:
      "Your logo is the signature of your business. We research your market, explore multiple directions and refine one mark until it works everywhere — from a favicon to a storefront.",
    included: [
      "Discovery questionnaire and brief review",
      "Moodboard and creative direction",
      "Multiple initial concepts",
      "Refinement rounds on the chosen direction",
      "Colour and monochrome versions",
    ],
    deliverables: [
      "Primary logo",
      "Secondary / stacked version",
      "Icon or monogram",
      "SVG, PNG, PDF and JPG files",
    ],
    suitableFor: ["New businesses", "Rebrands", "Personal brands", "Product launches"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Logo Design",
    portfolioCategories: ["Logo Design"],
  },
  {
    slug: "brand-identity",
    department: "design",
    name: "Brand Identity",
    short: "A complete visual language for your business.",
    intro:
      "Beyond a logo, an identity system defines how your brand looks and feels in every touchpoint — typography, colour, imagery and the rules that hold them together.",
    included: [
      "Brand discovery session",
      "Logo suite",
      "Colour palette and typography system",
      "Graphic elements and patterns",
      "Brand guidelines document",
    ],
    deliverables: [
      "Logo suite",
      "Brand guidelines PDF",
      "Stationery designs",
      "Social media templates",
    ],
    suitableFor: [
      "Startups",
      "Growing businesses",
      "Restaurants and cafés",
      "Professional services",
    ],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Branding",
    portfolioCategories: ["Branding"],
  },
  {
    slug: "social-media-graphics",
    department: "design",
    name: "Social Media Graphics",
    short: "Consistent, scroll-stopping posts.",
    intro:
      "Designs that keep your feed recognisable and on-brand, created for the formats and sizes each platform prefers.",
    included: [
      "Platform-specific sizing",
      "On-brand templates",
      "Copy layout and hierarchy",
      "Revision round",
    ],
    deliverables: ["Static posts", "Story designs", "Editable templates on request"],
    suitableFor: ["Small businesses", "Creators", "Marketing teams", "Events"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Social Media Design",
    portfolioCategories: ["Social Media"],
  },
  {
    slug: "instagram-carousel-design",
    department: "design",
    name: "Instagram Carousel Design",
    short: "Stories told slide by slide.",
    intro:
      "Carousels that educate, sell and get saved — with a clear narrative flow and a strong first slide.",
    included: [
      "Content structuring",
      "Slide-by-slide layout",
      "Cover slide design",
      "Brand-consistent styling",
    ],
    deliverables: ["Carousel slides (PNG/JPG)", "Optional editable source file"],
    suitableFor: ["Educators and coaches", "D2C brands", "Agencies", "Personal brands"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Social Media Design",
    portfolioCategories: ["Social Media"],
  },
  {
    slug: "promotional-posters",
    department: "design",
    name: "Promotional Posters",
    short: "Bold visuals for events and offers.",
    intro:
      "Posters for print and digital use that communicate an offer, event or launch at a glance.",
    included: ["Concept and layout", "Typography and hierarchy", "Print or digital preparation"],
    deliverables: ["High-resolution print file", "Digital versions for social and web"],
    suitableFor: ["Events", "Retail offers", "Launches", "Music and culture"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Poster Design",
    portfolioCategories: ["Posters"],
  },
  {
    slug: "marketing-banners",
    department: "design",
    name: "Marketing Banners",
    short: "Web and display banners that convert.",
    intro:
      "Banners for websites, marketplaces and advertising, designed for clarity and click-through.",
    included: ["Multiple sizes", "Message hierarchy", "Call-to-action design"],
    deliverables: ["Web banners", "Marketplace banners", "Display ad sizes"],
    suitableFor: ["E-commerce", "Campaigns", "Websites", "Marketplaces"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Social Media Design",
    portfolioCategories: ["Social Media", "Posters"],
  },
  {
    slug: "brochures",
    department: "design",
    name: "Brochures",
    short: "Printed and digital brochures with depth.",
    intro:
      "Multi-page brochures that present your products or services with a clear editorial structure.",
    included: ["Page structure", "Layout and typography", "Image treatment", "Print-ready setup"],
    deliverables: ["Print-ready PDF", "Digital PDF"],
    suitableFor: ["Real estate", "Education", "Manufacturing", "Hospitality"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Other",
    portfolioCategories: ["Branding"],
  },
  {
    slug: "product-advertising-creatives",
    department: "design",
    name: "Product Advertising Creatives",
    short: "Ad visuals that put the product first.",
    intro:
      "Static ad creatives for Meta, Google and marketplaces, built to highlight your product clearly.",
    included: ["Ad concept", "Product-focused composition", "Multiple ad sizes", "Copy layout"],
    deliverables: ["Ad creatives in required sizes", "Variations for testing"],
    suitableFor: ["D2C brands", "E-commerce stores", "Performance marketers"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Social Media Design",
    portfolioCategories: ["Social Media"],
  },
  {
    slug: "business-presentation-design",
    department: "design",
    name: "Business Presentation Design",
    short: "Decks that make your case clearly.",
    intro:
      "Pitch decks, company profiles and sales presentations designed for clarity and confidence.",
    included: [
      "Slide structure review",
      "Master template",
      "Data visualisation",
      "Icon and image styling",
    ],
    deliverables: ["PowerPoint / Keynote / Google Slides file", "PDF export"],
    suitableFor: ["Startups raising funds", "Sales teams", "Consultants"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Other",
    portfolioCategories: ["Branding"],
  },

  // ——— MOTION ———
  {
    slug: "instagram-reels",
    department: "motion",
    name: "Instagram Reels",
    short: "Short-form edits built for the feed.",
    intro:
      "Fast, rhythmic reels with captions, music sync and hooks designed to keep viewers watching.",
    included: [
      "Hook-first edit",
      "Captions and text animation",
      "Music and sound design",
      "Colour correction",
    ],
    deliverables: ["Vertical 9:16 MP4", "Cover frame"],
    suitableFor: ["Creators", "Brands", "Restaurants", "Coaches"],
    formats: ["MP4 (H.264)", "1080×1920", "Up to 90 seconds"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Reels Editing",
    portfolioCategories: ["Video Editing"],
  },
  {
    slug: "youtube-shorts",
    department: "motion",
    name: "YouTube Shorts",
    short: "Vertical edits tuned for Shorts.",
    intro: "Shorts edited for retention, with punchy pacing, captions and a strong opening second.",
    included: ["Pacing and cuts", "Captions", "Sound design", "Thumbnail frame"],
    deliverables: ["Vertical 9:16 MP4"],
    suitableFor: ["YouTubers", "Educators", "Podcasters repurposing content"],
    formats: ["MP4 (H.264)", "1080×1920", "Up to 60 seconds"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "YouTube Editing",
    portfolioCategories: ["Video Editing"],
  },
  {
    slug: "youtube-video-editing",
    department: "motion",
    name: "YouTube Video Editing",
    short: "Long-form edits with story and structure.",
    intro:
      "Complete editing for long-form YouTube content — structure, b-roll, graphics, sound and colour.",
    included: [
      "Story structure",
      "B-roll and graphics",
      "Audio clean-up and music",
      "Colour correction",
    ],
    deliverables: ["16:9 MP4 master", "Optional thumbnail design"],
    suitableFor: ["YouTubers", "Educators", "Brands with channels"],
    formats: ["MP4 (H.264/H.265)", "1080p or 4K"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "YouTube Editing",
    portfolioCategories: ["Video Editing"],
  },
  {
    slug: "promotional-videos",
    department: "motion",
    name: "Promotional Videos",
    short: "Campaign videos with a clear message.",
    intro: "Promotional edits for launches, offers and events, cut to communicate one clear idea.",
    included: [
      "Script / storyboard review",
      "Editing and pacing",
      "Text and motion graphics",
      "Music licensing guidance",
    ],
    deliverables: ["Master video", "Social cut-downs in multiple ratios"],
    suitableFor: ["Businesses", "Events", "Product launches"],
    formats: ["MP4", "16:9, 1:1, 9:16"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Promotional Video",
    portfolioCategories: ["Promotional Videos"],
  },
  {
    slug: "product-videos",
    department: "motion",
    name: "Product Videos",
    short: "Show the product at its best.",
    intro: "Clean, cinematic product edits for websites, marketplaces and ads.",
    included: ["Shot selection", "Grading", "Feature callouts", "Sound design"],
    deliverables: ["Hero product video", "Short ad cut-downs"],
    suitableFor: ["D2C brands", "E-commerce", "Hardware and gadgets"],
    formats: ["MP4", "16:9, 1:1, 9:16"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Promotional Video",
    portfolioCategories: ["Promotional Videos"],
  },
  {
    slug: "cinematic-video-editing",
    department: "motion",
    name: "Cinematic Video Editing",
    short: "Film-grade storytelling and colour.",
    intro:
      "Cinematic edits for brand films, travel films and short films, with careful grading and sound.",
    included: ["Narrative editing", "Colour grading", "Sound design", "Titles"],
    deliverables: ["Master film", "Trailer or teaser cut"],
    suitableFor: ["Filmmakers", "Travel creators", "Brand films", "Weddings and events"],
    formats: ["MP4 / MOV", "Up to 4K"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Other",
    portfolioCategories: ["Video Editing"],
  },
  {
    slug: "motion-graphics",
    department: "motion",
    name: "Motion Graphics",
    short: "Animated logos, titles and explainers.",
    intro: "Motion design that brings brand elements, data and ideas to life.",
    included: ["Style frames", "Animation", "Sound sync", "Export for each platform"],
    deliverables: ["Animated logo", "Lower thirds and titles", "Explainer sequences"],
    suitableFor: ["Brands", "YouTubers", "Agencies", "Product teams"],
    formats: ["MP4", "MOV with alpha", "GIF / Lottie on request"],
    turnaround: "Confirmed after scope review",
    startingPrice: null,
    orderService: "Other",
    portfolioCategories: ["Promotional Videos", "Video Editing"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByDepartment(dep: Department) {
  return services.filter((s) => s.department === dep);
}

export function formatPrice(price: Price | null) {
  if (!price) return "Request a quote";
  const locale = price.currency === "INR" ? "en-IN" : "en-US";
  return `From ${new Intl.NumberFormat(locale, { style: "currency", currency: price.currency, maximumFractionDigits: 0 }).format(price.amount)}`;
}

/** Shared quote-stage information; service-specific policies can override it. */
export const serviceQuoteDetails = {
  revisionPolicy:
    "Revision rounds and change requests are defined in your project quotation. No fixed revision allowance is confirmed here.",
  faqs: [
    {
      question: "How is pricing decided?",
      answer:
        "Pricing depends on scope, complexity and deliverables. Request a quote for your brief; no fixed price is advertised.",
    },
    {
      question: "What should I prepare?",
      answer:
        "Share your goals, audience, existing brand assets, reference links and any preferred deadline.",
    },
    {
      question: "When will the work be delivered?",
      answer:
        "Timing is confirmed after scope review. A preferred deadline is a request, not a delivery commitment.",
    },
    {
      question: "Are editable source files included?",
      answer:
        "Specify the formats you need in your brief. Source files, licensing and final deliverables need to be confirmed in the quotation.",
    },
  ],
};
