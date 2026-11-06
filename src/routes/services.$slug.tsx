import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand } from "@/components/site/CtaBand";
import { departments, formatPrice, getService, servicesByDepartment } from "@/data/services";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service not found — BAPARDEKAR CREATIVE" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${s.name} — ${departments[s.department].name} | BAPARDEKAR CREATIVE` },
        { name: "description", content: `${s.short} ${s.intro}`.slice(0, 158) },
        { property: "og:title", content: `${s.name} — BAPARDEKAR CREATIVE` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="bg-charcoal px-6 pb-32 pt-48 text-center text-on-dark">
      <h1 className="display-md">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-orange link-underline">Back to services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const dep = departments[s.department];
  const examples = projects.filter((p) => s.portfolioCategories.includes(p.category)).slice(0, 2);
  const others = servicesByDepartment(s.department).filter((o) => o.slug !== s.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow={dep.name} title={s.name} intro={s.intro} image={dep.image} imageAlt={dep.label} compact>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-on-dark-muted">
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange" /> {s.turnaround}</span>
          <span className="flex items-center gap-2"><Tag className="h-4 w-4 text-orange" /> {formatPrice(s.startingPrice)}</span>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <Link to="/start-project" search={{ service: s.orderService }}>Order Now</Link>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/book">Discuss on a call</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="display-md text-charcoal">What's included</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {s.included.map((i) => (
                  <li key={i} className="flex gap-3 border-t border-hairline pt-4 text-charcoal">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-orange" /> {i}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-md mt-16 text-charcoal">Example deliverables</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {s.deliverables.map((d) => (
                  <span key={d} className="border border-charcoal/20 px-4 py-2 text-[0.95rem] text-charcoal">{d}</span>
                ))}
              </div>
            </Reveal>
            {s.formats && (
              <Reveal delay={0.05}>
                <h2 className="display-md mt-16 text-charcoal">Supported formats</h2>
                <p className="mt-6 text-lg text-slate">{s.formats.join(" · ")}</p>
              </Reveal>
            )}
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="sticky top-28 bg-charcoal p-8 text-on-dark">
              <p className="eyebrow text-orange">At a glance</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm text-on-dark-muted">Starting price</dt>
                  <dd className="font-display text-3xl">{formatPrice(s.startingPrice)}</dd>
                </div>
                <div>
                  <dt className="text-sm text-on-dark-muted">Typical turnaround</dt>
                  <dd className="font-display text-3xl">{s.turnaround}</dd>
                </div>
                <div>
                  <dt className="text-sm text-on-dark-muted">Well suited to</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {s.suitableFor.map((c) => (
                      <span key={c} className="bg-on-dark/10 px-3 py-1 text-sm">{c}</span>
                    ))}
                  </dd>
                </div>
              </dl>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full">
                <Link to="/start-project" search={{ service: s.orderService }}>Order Now</Link>
              </Button>
              <p className="mt-4 text-xs text-on-dark-muted">
                Submitting a request is not a payment. We'll confirm scope and price with you first.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {examples.length > 0 && (
        <section className="section-pad bg-beige">
          <div className="container-wide">
            <Reveal>
              <p className="eyebrow text-orange-deep">Relevant work</p>
              <h2 className="display-md mt-4 text-charcoal">From the portfolio</h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {examples.map((p) => (
                <Reveal key={p.slug}>
                  <ProjectCard project={p} aspect="aspect-[4/3]" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-offwhite py-20">
        <div className="container-wide">
          <Link to="/services" className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-charcoal link-underline">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="group bg-offwhite p-6 hover:bg-paper">
                <p className="font-display text-2xl text-charcoal group-hover:text-orange-deep">{o.name}</p>
                <p className="mt-2 text-sm text-slate">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
