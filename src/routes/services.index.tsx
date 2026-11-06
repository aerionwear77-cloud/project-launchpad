import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { departments, formatPrice, servicesByDepartment, type Department } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Graphic Design & Video Editing | BAPARDEKAR CREATIVE" },
      {
        name: "description",
        content:
          "Logo design, brand identity, social media graphics, posters, reels, YouTube editing, product videos and motion graphics from BAPARDEKAR CREATIVE.",
      },
      { property: "og:title", content: "Services — BAPARDEKAR DESIGN & BAPARDEKAR MOTION" },
      { property: "og:description", content: "Two departments covering graphic design, branding, video editing and motion graphics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function DepartmentBlock({ dep, flip }: { dep: Department; flip?: boolean }) {
  const d = departments[dep];
  const list = servicesByDepartment(dep);
  return (
    <section id={dep} className={flip ? "scroll-mt-20 bg-beige" : "scroll-mt-20 bg-offwhite"}>
      <div className="container-wide section-pad">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className={flip ? "md:order-2 md:col-span-5 md:col-start-8" : "md:col-span-5"}>
            <div className="sticky top-28">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.image} alt={d.label} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
          <div className={flip ? "md:order-1 md:col-span-6" : "md:col-span-6 md:col-start-7"}>
            <Reveal>
              <p className="eyebrow text-orange-deep">Department {dep === "design" ? "A" : "B"}</p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-[0.15em] text-charcoal md:text-4xl">{d.name}</h2>
              <p className="mt-3 font-display text-3xl italic text-slate">{d.label}</p>
              <p className="mt-6 text-lg text-slate">{d.intro}</p>
            </Reveal>
            <ul className="mt-12 border-t border-charcoal/15">
              {list.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.03}>
                  <li>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-charcoal/15 py-6"
                    >
                      <span className="font-heading text-xs tracking-[0.2em] text-orange-deep">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-display text-3xl text-charcoal transition-colors group-hover:text-orange-deep">{s.name}</span>
                        <span className="mt-1 block text-[0.95rem] text-slate">
                          {s.short} · {s.turnaround} · {formatPrice(s.startingPrice)}
                        </span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-charcoal transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange" />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Design that's recognised. <em className="text-orange">Video that's watched.</em>
          </>
        }
        intro="Two specialist departments under one studio. Choose a service to see what's included, typical turnaround and how to order."
      >
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#design" className="border border-on-dark/25 px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-on-dark hover:border-orange hover:text-orange">
            BAPARDEKAR DESIGN
          </a>
          <a href="#motion" className="border border-on-dark/25 px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-on-dark hover:border-orange hover:text-orange">
            BAPARDEKAR MOTION
          </a>
        </div>
      </PageHero>
      <DepartmentBlock dep="design" />
      <DepartmentBlock dep="motion" flip />
      <section className="bg-charcoal py-16 text-on-dark">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl font-display text-3xl">
            Not sure which service fits? Every project can be quoted individually.
          </p>
          <Link to="/start-project" className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-orange link-underline">
            Request a custom quote
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
