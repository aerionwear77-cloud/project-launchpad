import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BAPARDEKAR CREATIVE" },
      { name: "description", content: "Terms and conditions for working with BAPARDEKAR CREATIVE." },
      { property: "og:title", content: "Terms & Conditions — BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "Terms for projects and use of the BAPARDEKAR CREATIVE website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" compact />
      <section className="section-pad bg-offwhite">
        <div className="container-wide max-w-3xl space-y-5 text-lg text-slate">
          <p>These terms are a draft and should be reviewed before the website goes live.</p>
          <p>Submitting a project request or booking a call does not create a paid order. Scope, price, timeline and revision limits are agreed in writing before work begins.</p>
        </div>
      </section>
    </>
  ),
});
