import { Reveal } from "./Reveal";

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    text: "Understand the client's goals and requirements.",
    detail: "We start with a conversation and a short brief — your audience, goals, references, deadlines and budget.",
  },
  {
    n: "02",
    title: "Plan",
    text: "Establish scope, creative direction and pricing.",
    detail: "You receive a clear scope, a creative direction and a timeline or quotation before any work begins.",
  },
  {
    n: "03",
    title: "Create",
    text: "Coordinate the production of the project.",
    detail: "We match the project with the right specialist and direct the work, sharing progress at agreed milestones.",
  },
  {
    n: "04",
    title: "Deliver",
    text: "Review quality and deliver the final work.",
    detail: "Every output is reviewed against the brief, refined through revisions and delivered in the formats you need.",
  },
];

export function ProcessSteps({ tone = "dark", detailed = false }: { tone?: "dark" | "light"; detailed?: boolean }) {
  const dark = tone === "dark";
  return (
    <div role="list" className="grid gap-px md:grid-cols-4">
      {processSteps.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.08}>
          <article role="listitem"
            className={
              dark
                ? "group relative h-full border-t border-on-dark/15 pt-8 md:pr-8"
                : "group relative h-full border-t border-charcoal/15 pt-8 md:pr-8"
            }
          >
            <span className="absolute -top-px left-0 h-px w-0 bg-orange transition-all duration-700 group-hover:w-full" />
            <span className="font-heading text-xs font-semibold tracking-[0.25em] text-orange">{s.n}</span>
            <h3 className={dark ? "mt-4 font-display text-4xl text-on-dark" : "mt-4 font-display text-4xl text-charcoal"}>
              {s.title}
            </h3>
            <p className={dark ? "mt-3 text-on-dark-muted" : "mt-3 text-slate"}>{detailed ? s.detail : s.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
