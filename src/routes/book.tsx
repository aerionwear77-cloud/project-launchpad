import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — BAPARDEKAR CREATIVE" },
      {
        name: "description",
        content:
          "Book a consultation call with BAPARDEKAR CREATIVE. Times are in India Standard Time.",
      },
      { property: "og:title", content: "Book a Consultation — BAPARDEKAR CREATIVE" },
      {
        property: "og:description",
        content: "Schedule a call to discuss your design or video project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Let's talk about your idea."
        intro="Calls are scheduled in India Standard Time (Asia/Kolkata)."
        compact
      />
      <InquiryForm consultation />
    </>
  ),
});
