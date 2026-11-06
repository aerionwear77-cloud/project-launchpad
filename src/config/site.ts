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
    email: "hello@bapardekarcreative.com", // PLACEHOLDER
    phone: null as string | null, // PLACEHOLDER, e.g. "+91 00000 00000"
    whatsapp: null as string | null,
  },
  social: [
    { label: "Instagram", href: "https://instagram.com/" }, // PLACEHOLDER
    { label: "Behance", href: "https://behance.net/" }, // PLACEHOLDER
    { label: "LinkedIn", href: "https://linkedin.com/" }, // PLACEHOLDER
    { label: "YouTube", href: "https://youtube.com/" }, // PLACEHOLDER
  ],
  founder: {
    name: "Tarang V Bapardekar", // confirm or edit
    role: "Founder & Creative Director",
    // PLACEHOLDER biography — replace with your own words.
    bio: [
      "BAPARDEKAR CREATIVE began with a simple belief: every business, no matter its size, deserves creative work made with care.",
      "I started this agency to bring thoughtful design and honest collaboration to people who are building something of their own. Each project is shaped by listening first, then designing with intention.",
      "Today the agency works with a trusted circle of independent designers and editors, while every project is directed and quality-checked personally.",
    ],
  },
} as const;
