import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { processSteps } from "@/components/site/ProcessSteps";
import { assets } from "@/config/assets";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — How BAPARDEKAR CREATIVE Works" },
      {
        name: "description",
        content: "Discover, strategize, create, deliver: the four-stage creative process behind every BAPARDEKAR CREATIVE project.",
      },
      { property: "og:title", content: "Our Process — BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "A clear, collaborative path from idea to final delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const stepDetails = [
  ["Inquiry or consultation call", "Project brief and references", "Goals, audience and constraints"],
  ["Scope and deliverables", "Creative direction or moodboard", "Timeline and quotation"],
  ["Specialist assigned and briefed", "Work-in-progress check-ins", "Agreed revision rounds"],
  ["Final quality review", "Files in all required formats", "Handover and usage guidance"],
];

const faqs = [
  { q: "Is submitting a project request a confirmed order?", a: "No. A request starts a conversation. We review it, confirm scope and send a quotation. Work begins only once you approve." },
  { q: "Who will work on my project?", a: "Every project is directed by the founder. Production is carried out by an independent specialist selected for your brief, and quality is reviewed before delivery." },
  { q: "Do you work with international clients?", a: "Yes. We're based in India and work with clients worldwide. Consultations are scheduled in India Standard Time with your local time shown." },
  { q: "How many revisions are included?", a: "Revision limits depend on the service and are stated clearly in your quotation." },
];

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title={
          <>
            Clarity at every step, <em className="text-orange">from first call to final file.</em>
          </>
        }
        intro="Creative work goes best when everyone knows what happens next. Here is exactly how a project moves with us."
        image={assets.about.collaboration}
        imageAlt="Creatives reviewing work together"
        compact
      />

      <section className="bg-offwhite">
        {processSteps.map((s, i) => (
          <div key={s.n} className={i % 2 ? "bg-beige" : "bg-offwhite"}>
            <div className="container-wide grid gap-10 py-20 md:grid-cols-12 md:py-28">
              <Reveal className="md:col-span-3">
                <span className="font-display text-[7rem] leading-none text-orange md:text-[9rem]">{s.n}</span>
              </Reveal>
              <Reveal delay={0.08} className="md:col-span-5">
                <h2 className="display-lg text-charcoal">{s.title}</h2>
                <p className="mt-6 text-xl text-slate">{s.detail}</p>
              </Reveal>
              <Reveal delay={0.16} className="md:col-span-3 md:col-start-10">
                <p className="eyebrow text-slate">What happens</p>
                <ul className="mt-4 space-y-3">
                  {(stepDetails[i] ?? []).map((d) => (
                    <li key={d} className="flex gap-3 border-b border-charcoal/10 pb-3 text-charcoal">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" /> {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad grain bg-charcoal text-on-dark">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-orange">Questions</p>
            <h2 className="display-md mt-5">Before you begin.</h2>
            <Link to="/contact" className="mt-8 inline-block font-heading text-xs font-semibold uppercase tracking-[0.2em] text-on-dark link-underline">
              Ask us something else
            </Link>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-on-dark/15 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl">
                  {f.q}
                  <span className="text-orange transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-on-dark-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
