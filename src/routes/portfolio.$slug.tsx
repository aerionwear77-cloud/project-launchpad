import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { getProject, relatedProjects } from "@/data/portfolio";
import { getService } from "@/data/services";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — BAPARDEKAR CREATIVE" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.projectType}${p.isConcept ? " (Concept)" : ""} | BAPARDEKAR CREATIVE` },
        { name: "description", content: `${p.short} ${p.overview}`.slice(0, 158) },
        { property: "og:title", content: `${p.name} — ${p.projectType}` },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="bg-charcoal px-6 pb-32 pt-48 text-center text-on-dark">
      <h1 className="display-md">Project not found</h1>
      <Link to="/portfolio" className="mt-6 inline-block text-orange link-underline">Back to portfolio</Link>
    </div>
  ),
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const related = relatedProjects(p);
  const service = getService(p.serviceSlug);

  return (
    <>
      {/* Cover */}
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-charcoal text-on-dark">
        <img src={p.cover} alt={`${p.name} cover`} className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1080} />
        <div className="veil-bottom absolute inset-0 -z-10" />
        <div className="container-wide flex min-h-[88svh] flex-col justify-end pb-16 pt-40">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange px-3 py-1 font-heading text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal">{p.category}</span>
              {p.isConcept && (
                <span className="border border-on-dark/40 px-3 py-1 font-heading text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                  Concept project
                </span>
              )}
            </div>
            <h1 className="display-xl mt-6">{p.name}</h1>
            <p className="mt-4 max-w-2xl text-xl text-on-dark-muted">{p.short}</p>
          </Reveal>
        </div>
      </section>

      {/* Meta + overview */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <dl className="grid grid-cols-2 gap-6 md:col-span-4 md:grid-cols-1">
            {[
              ["Project type", p.projectType],
              ["Category", p.category],
              ["Year", p.year],
              ["Status", p.isConcept ? "Self-initiated concept" : "Client project"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-hairline pt-4">
                <dt className="eyebrow text-slate">{k}</dt>
                <dd className="mt-2 font-display text-2xl text-charcoal">{v}</dd>
              </div>
            ))}
          </dl>
          <Reveal className="md:col-span-7 md:col-start-6">
            <p className="eyebrow text-orange-deep">Overview</p>
            <p className="mt-6 font-display text-3xl leading-snug text-charcoal md:text-4xl">{p.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Challenge & direction */}
      <section className="grid bg-charcoal text-on-dark md:grid-cols-2">
        <div className="section-pad border-b border-on-dark/10 px-[clamp(1.25rem,4vw,3.5rem)] md:border-b-0 md:border-r">
          <Reveal>
            <p className="eyebrow text-orange">The creative challenge</p>
            <p className="mt-6 text-xl leading-relaxed text-on-dark-muted">{p.challenge}</p>
          </Reveal>
        </div>
        <div className="section-pad px-[clamp(1.25rem,4vw,3.5rem)]">
          <Reveal>
            <p className="eyebrow text-orange">Creative direction</p>
            <p className="mt-6 text-xl leading-relaxed text-on-dark-muted">{p.direction}</p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-beige">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-orange-deep">Design process</p>
            <h2 className="display-md mt-4 text-charcoal">How it came together</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {p.process.map((step, i) => (
              <li key={step.title} className="border-t-2 border-charcoal pt-6">
                <span className="font-heading text-xs tracking-[0.25em] text-orange-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-3xl text-charcoal">{step.title}</h3>
                <p className="mt-2 text-slate">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery / video */}
      <section className="bg-offwhite py-20">
        <div className="container-wide space-y-8">
          {p.video && (
            <video className="aspect-video w-full bg-charcoal object-cover" src={p.video} poster={p.cover} controls preload="none" playsInline />
          )}
          {p.isVideo && !p.video && (
            <p className="border border-dashed border-charcoal/25 p-6 text-center text-slate">
              Concept visual study — no playable video has been added to this project.
            </p>
          )}
          <div className="grid gap-8 md:grid-cols-2">
            {p.gallery.map((src, i) => (
              <Reveal key={src + i} className={i === 0 ? "md:col-span-2" : ""}>
                <img
                  src={src}
                  alt={`${p.name}: ${p.projectType} concept visual, ${i === 0 ? "overview composition" : "supporting artwork"}`}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className={i === 0 ? "aspect-[16/9] w-full object-cover" : "aspect-[4/3] w-full object-cover"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Output & tools */}
      <section className="bg-offwhite pb-24">
        <div className="container-wide grid gap-12 border-t border-hairline pt-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-orange-deep">Final output</p>
            <p className="mt-4 text-xl text-charcoal">{p.output}</p>
          </div>
          <div>
            <p className="eyebrow text-orange-deep">Tools used</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span key={t} className="border border-charcoal/20 px-4 py-2 text-charcoal">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain bg-charcoal py-24 text-on-dark">
        <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-orange">Inspired?</p>
            <h2 className="display-lg mt-4">Start a similar project.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project" search={{ service: service?.slug }}>Start a similar project</Link>
            </Button>
            {service && (
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/services/$slug" params={{ slug: service.slug }}>About {service.name}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <h2 className="display-md text-charcoal">Related projects</h2>
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-charcoal link-underline">
              <ArrowLeft className="h-4 w-4" /> All work
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {related.map((r) => (
              <ProjectCard key={r.slug} project={r} aspect="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
