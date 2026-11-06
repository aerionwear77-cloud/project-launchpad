import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/start-project")({
  validateSearch: (search: Record<string, unknown>): { service?: string | undefined } => ({
    service: typeof search["service"] === "string" ? search["service"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Start a Project — BAPARDEKAR CREATIVE" },
      { name: "description", content: "Tell BAPARDEKAR CREATIVE about your design or video project and request a quotation." },
      { property: "og:title", content: "Start a Project — BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "Request a quote for graphic design, branding or video editing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StartProjectPage,
});

function StartProjectPage() {
  const { service } = Route.useSearch();
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell us what you're building."
        intro={service ? `Service selected: ${service}. A request is not a paid order — we confirm scope and price first.` : "A request is not a paid order — we confirm scope and price with you first."}
        compact
      />
      <InquiryForm initialService={service} />
    </>
  );
}
