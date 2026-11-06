import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BAPARDEKAR CREATIVE" },
      { name: "description", content: "How BAPARDEKAR CREATIVE handles personal information shared through this website." },
      { property: "og:title", content: "Privacy Policy — BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "Privacy policy for the BAPARDEKAR CREATIVE website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" compact />
      <section className="section-pad bg-offwhite">
        <div className="container-wide max-w-3xl space-y-5 text-lg text-slate">
          <p>This policy is a draft and should be reviewed before the website goes live.</p>
          <p>We only collect the details you choose to send us, such as your name, email and project information, and use them solely to respond to your inquiry and deliver our services. We do not sell your information.</p>
          <p>To ask about or remove your data, email us at the address on our Contact page.</p>
        </div>
      </section>
    </>
  ),
});
