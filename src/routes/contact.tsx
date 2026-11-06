import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BAPARDEKAR CREATIVE" },
      { name: "description", content: "Get in touch with BAPARDEKAR CREATIVE, a creative agency in India working worldwide." },
      { property: "og:title", content: "Contact BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "Email us about graphic design, branding or video editing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Say hello." intro={site.coverage} compact />
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-orange-deep">Email</p>
            <a href={`mailto:${site.contact.email}`} className="mt-4 block font-display text-4xl text-charcoal link-underline">
              {site.contact.email}
            </a>
          </div>
          <div>
            <p className="eyebrow text-orange-deep">Follow</p>
            <ul className="mt-4 space-y-2 text-lg">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-charcoal link-underline">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  ),
});
