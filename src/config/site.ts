/**
 * Editable business details. Replace every value marked PLACEHOLDER
 * with your real information before publishing.
 */
export const site = {
  name: "BAPARDEKAR CREATIVE",
  tagline: "Creativity. Delivered with purpose.",
  description:
    "A founder-led digital creative agency from India offering graphic design, branding and video editing for businesses, brands and creators worldwide.",
  location: "India",
  coverage: "India | Working Worldwide",
  timezone: "Asia/Kolkata",
  contact: {
    email: null as string | null, // Add a verified business email before enabling contact.
    phone: null as string | null, // PLACEHOLDER, e.g. "+91 00000 00000"
    whatsapp: null as string | null,
  },
  social: [] as { label: string; href: string }[],
  founder: {
    name: "Tarang V Bapardekar", // confirm or edit
    role: "Founder & Creative Director",
    // Add a verified biography here; do not present invented experience.
    bio: [
      "Thoughtful design starts with listening. Clear ideas, careful craft and honest collaboration shape the studio's creative philosophy.",
    ],
  },
} as const;
