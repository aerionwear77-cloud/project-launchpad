import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand } from "@/components/site/CtaBand";
import { portfolioFilters, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Branding, Design & Video Work | BAPARDEKAR CREATIVE" },
      {
        name: "description",
        content: "Explore branding, logo design, social media, poster and video editing projects by BAPARDEKAR CREATIVE.",
      },
      { property: "og:title", content: "Portfolio — BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "Identity, social content, posters and cinematic video projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("All Projects");
  const list = filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Selected work <em className="text-orange">& studies.</em>
          </>
        }
        intro="Projects marked “Concept” are self-initiated studio explorations created to demonstrate our approach. They are not commissioned client work."
        compact
      />

      <section className="bg-offwhite pb-28 pt-12">
        <div className="container-wide">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="sticky top-[4.25rem] z-30 -mx-[clamp(1.25rem,4vw,3.5rem)] flex gap-2 overflow-x-auto bg-offwhite/95 px-[clamp(1.25rem,4vw,3.5rem)] py-4 backdrop-blur"
          >
            {portfolioFilters.map((f) => {
              const count = f === "All Projects" ? projects.length : projects.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "shrink-0 border px-5 py-2.5 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                    filter === f
                      ? "border-charcoal bg-charcoal text-offwhite"
                      : "border-charcoal/20 text-charcoal hover:border-charcoal",
                  )}
                >
                  {f} <span className={filter === f ? "text-orange" : "text-slate"}>({count})</span>
                </button>
              );
            })}
          </div>

          {list.length === 0 ? (
            <p className="py-24 text-center text-lg text-slate">
              New projects in this category are coming soon.
            </p>
          ) : (
            <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-12">
              {list.map((p, i) => {
                const pattern = ["lg:col-span-7", "lg:col-span-5 lg:mt-24", "lg:col-span-5", "lg:col-span-7 lg:mt-16"];
                return (
                  <Reveal key={p.slug} delay={(i % 2) * 0.08} className={pattern[i % 4] ?? ""}>
                    {i % 4 === 0 || i % 4 === 3 ? (
                      <ProjectCard project={p} aspect="aspect-[16/11]" />
                    ) : (
                      <ProjectCard project={p} />
                    )}
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <CtaBand title="Want work like this for your brand?" />
    </>
  );
}
