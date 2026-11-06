import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { FounderSection } from "@/components/site/FounderSection";
import { CtaBand } from "@/components/site/CtaBand";
import { assets } from "@/config/assets";
import { site } from "@/config/site";
import { departments } from "@/data/services";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAPARDEKAR CREATIVE — Graphic Design & Video Editing Agency, India" },
      {
        name: "description",
        content:
          "A founder-led creative agency from India crafting brand identities, social media design and cinematic video editing for clients worldwide.",
      },
      { property: "og:title", content: "BAPARDEKAR CREATIVE — Creativity. Delivered with purpose." },
      {
        property: "og:description",
        content: "Graphic design, branding and video editing for businesses, brands and creators — India and worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const differences = [
  { title: "Thoughtful creative direction", text: "Every project starts with intent. We define what the work needs to say before deciding how it should look." },
  { title: "Professional coordination", text: "One point of contact manages your project, specialists and timelines from brief to delivery." },
  { title: "Clear communication", text: "Plain-language updates, agreed milestones and no surprises about scope or cost." },
  { title: "Quality control", text: "Each deliverable is reviewed against your brief and our own standards before it reaches you." },
  { title: "Flexible requirements", text: "From a single poster to an ongoing content calendar, the engagement fits what you actually need." },
  { title: "Reliable delivery", text: "Realistic timelines agreed up front, and the right file formats delivered every time." },
];

function HomePage() {
  const reduce = useReducedMotion();
  const featured = projects as [
    (typeof projects)[number],
    (typeof projects)[number],
    (typeof projects)[number],
    (typeof projects)[number],
    (typeof projects)[number],
    (typeof projects)[number],
  ];

  return (
    <>
      {/* 01 — HERO */}
      <section className="grain relative isolate overflow-hidden bg-charcoal text-on-dark">
        {assets.hero.background ? (
          <video className="absolute inset-0 -z-20 h-full w-full object-cover" src={assets.hero.background} poster={assets.hero.poster} autoPlay={!reduce} muted loop playsInline preload="none" />
        ) : (
          <img src={assets.hero.poster} alt="Creative studio with design sketches and a video editing workspace" className="absolute inset-0 -z-20 h-full w-full object-cover" width={1600} height={1920} fetchPriority="high" />
        )}
        <div className="absolute inset-0 -z-10 bg-charcoal/65" />
        <div className="veil-side absolute inset-0 -z-10" />
        <div className="container-wide flex min-h-[86svh] flex-col justify-end pb-14 pt-40 md:pb-20">
          <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl">
            <p className="eyebrow text-orange">Design · Branding · Motion</p>
            <h1 className="display-xl mt-6">BAPARDEKAR<br /><em className="text-orange">CREATIVE</em></h1>
            <p className="mt-6 font-display text-3xl md:text-4xl">Creative thinking. Exceptional execution.</p>
            <p className="mt-6 max-w-2xl text-lg text-on-dark-muted">We help brands, businesses and creators transform ideas into meaningful visual experiences through thoughtful design and engaging video.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl"><Link to="/start-project">Start a Project <ArrowUpRight /></Link></Button>
              <Button asChild variant="heroOutline" size="xl"><Link to="/portfolio">Explore Our Work</Link></Button>
            </div>
            <p className="eyebrow mt-8 text-on-dark-muted">{site.coverage}</p>
          </motion.div>
        </div>
        <ArrowDownRight className="absolute bottom-8 right-8 hidden h-6 w-6 text-on-dark-muted md:block" aria-hidden />
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-charcoal/10 bg-offwhite py-6" aria-hidden>
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-4xl italic text-charcoal/80">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Logo Design", "Brand Identity", "Instagram Reels", "Posters", "YouTube Editing", "Motion Graphics", "Carousels", "Product Films"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w} <span className="h-2 w-2 rounded-full bg-orange" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 02 — BRAND INTRODUCTION */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-orange-deep">Who we are</p>
              <h2 className="display-lg mt-6 text-charcoal">
                More than creative services. <em className="text-slate">A creative partnership.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-8 text-lg leading-relaxed text-slate md:grid-cols-2">
                <p>
                  BAPARDEKAR CREATIVE is a founder-led agency built on a simple idea: good design should be within reach
                  of every business, and it should always serve a purpose.
                </p>
                <p>
                  We work as an extension of your team — listening first, shaping a clear direction, then coordinating
                  skilled independent designers and editors to bring it to life.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-charcoal link-underline"
              >
                Read our story <ArrowUpRight className="h-4 w-4 text-orange" />
              </Link>
            </Reveal>
          </div>
          <div className="relative md:col-span-5">
            <Reveal delay={0.15}>
              <div className="aspect-[4/5] overflow-hidden md:mt-24">
                <img
                  src={assets.about.moodboard}
                  alt="Hands arranging photographs, swatches and logo sketches on a moodboard"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="absolute -left-8 top-8 hidden max-w-[14rem] bg-charcoal p-6 text-on-dark md:block">
              <p className="font-display text-2xl italic leading-snug">"Every business deserves quality creative work."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — FEATURED SERVICES */}
      <section className="bg-charcoal text-on-dark">
        <div className="container-wide pt-24 md:pt-32">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-orange">Two departments</p>
                <h2 className="display-lg mt-5 max-w-3xl">One studio. Two crafts.</h2>
              </div>
              <Link to="/services" className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-on-dark link-underline">
                All services
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid md:grid-cols-12">
          {(["design", "motion"] as const).map((key, i) => {
            const d = departments[key];
            return (
              <Link
                key={key}
                to="/services"
                hash={key}
                className={
                  i === 0
                    ? "group relative block min-h-[34rem] overflow-hidden md:col-span-7 md:min-h-[44rem]"
                    : "group relative block min-h-[34rem] overflow-hidden md:col-span-5 md:min-h-[44rem]"
                }
              >
                <img
                  src={d.image}
                  alt={key === "design" ? "Brand identity stationery in charcoal and burnt orange" : "A video editor working at a colour grading desk"}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1.4s] group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="veil-bottom absolute inset-0" />
                <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-8 md:p-12">
                  <span className="font-heading text-xs tracking-[0.25em] text-orange">0{i + 1}</span>
                  <h3 className="mt-3 font-heading text-2xl font-bold tracking-[0.18em] md:text-3xl">{d.name}</h3>
                  <p className="mt-2 font-display text-2xl italic text-on-dark-muted">{d.label}</p>
                  <p className="mt-5 max-w-md text-on-dark-muted">{d.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-on-dark transition-colors group-hover:text-orange">
                    Explore {key === "design" ? "design" : "motion"} <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 04 — SELECTED WORK */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-orange-deep">Selected work</p>
                <h2 className="display-lg mt-5 max-w-3xl text-charcoal">Ideas, given form.</h2>
                <p className="mt-5 max-w-xl text-slate">
                  A curated selection of studio concept projects exploring identity, social content, print and film.
                </p>
              </div>
              <Button asChild variant="inkOutline" size="xl">
                <Link to="/portfolio">View full portfolio</Link>
              </Button>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <ProjectCard project={featured[0]} aspect="aspect-[16/10]" />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4 md:mt-32">
              <ProjectCard project={featured[1]} />
            </Reveal>
            <Reveal className="md:col-span-4">
              <ProjectCard project={featured[2]} />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8 md:mt-24">
              <ProjectCard project={featured[4]} aspect="aspect-[16/9]" />
            </Reveal>
            <Reveal className="md:col-span-6">
              <ProjectCard project={featured[3]} aspect="aspect-[3/2]" />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-6 md:mt-20">
              <ProjectCard project={featured[5]} aspect="aspect-[3/2]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — THE AGENCY DIFFERENCE */}
      <section className="section-pad bg-beige">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-orange-deep">The agency difference</p>
              <h2 className="display-md mt-5 text-charcoal">Why clients choose to work with us.</h2>
              <p className="mt-6 text-slate">
                We are a managed creative agency. You get the flexibility of specialist freelancers with the care,
                direction and accountability of a single studio.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 aspect-[4/3] overflow-hidden">
                <img
                  src={assets.about.collaboration}
                  alt="Two creatives reviewing printed layouts together at a studio table"
                  loading="lazy"
                  width={1600}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <dl className="divide-y divide-charcoal/10 border-y border-charcoal/10">
              {differences.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.05}>
                  <div className="group grid gap-3 py-8 md:grid-cols-[4rem_1fr_1.3fr] md:gap-8">
                    <span className="font-heading text-xs tracking-[0.25em] text-orange-deep">0{i + 1}</span>
                    <dt className="font-display text-3xl text-charcoal transition-transform duration-500 group-hover:translate-x-2">
                      {d.title}
                    </dt>
                    <dd className="text-slate">{d.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 06 — CREATIVE PROCESS */}
      <section className="section-pad grain bg-charcoal text-on-dark">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-orange">How we work</p>
                <h2 className="display-lg mt-5 max-w-3xl">A clear path from idea to delivery.</h2>
              </div>
              <Link to="/process" className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-on-dark link-underline">
                Our full process
              </Link>
            </div>
          </Reveal>
          <div className="mt-16">
            <ProcessSteps tone="dark" />
          </div>
        </div>
      </section>

      {/* 07 — HUMAN BRAND STORY */}
      <FounderSection />

      {/* 08 — CTA */}
      <CtaBand />
    </>
  );
}
