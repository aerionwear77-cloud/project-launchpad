import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BAPARDEKAR CREATIVE" },
      {
        name: "description",
        content:
          "Get in touch with BAPARDEKAR CREATIVE, a creative agency in India working worldwide.",
      },
      { property: "og:title", content: "Contact BAPARDEKAR CREATIVE" },
      {
        property: "og:description",
        content: "Email us about graphic design, branding or video editing.",
      },
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
            <p className="eyebrow text-orange-deep">Your project</p>
            <h2 className="display-md mt-4">Let's start with your idea.</h2>
            <p className="mt-5 text-slate">
              Design, branding or video—prepare a brief for the work you have in mind.
            </p>
            <Button asChild variant="ink" size="xl" className="mt-8">
              <Link to="/start-project">
                Start a Project <ArrowUpRight />
              </Link>
            </Button>
            {site.contact.email && (
              <>
                <p className="eyebrow mt-10 text-orange-deep">Email</p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-4 block font-display text-4xl text-charcoal link-underline"
                >
                  {site.contact.email}
                </a>
              </>
            )}
            {site.contact.whatsapp && (
              <a
                className="mt-5 block text-charcoal link-underline"
                href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp the studio
              </a>
            )}
          </div>
          <div>
            <p className="eyebrow text-orange-deep">A conversation</p>
            <h2 className="display-md mt-4">Find the right direction.</h2>
            <p className="mt-5 text-slate">
              Discuss your goals, references and project scope. Call times are in Asia/Kolkata.
            </p>
            <Button asChild variant="inkOutline" size="xl" className="mt-8">
              <Link to="/book">
                Consultation <ArrowUpRight />
              </Link>
            </Button>
            {!site.contact.email && (
              <p className="mt-8 border-t border-hairline pt-6 text-sm text-slate">
                Direct contact details have not been added yet. Online requests are not being
                delivered.
              </p>
            )}
            {site.social.length > 0 && <p className="eyebrow mt-10 text-orange-deep">Follow</p>}
            <ul className="mt-4 space-y-2 text-lg">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal link-underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  ),
});
