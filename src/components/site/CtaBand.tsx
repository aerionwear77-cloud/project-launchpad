import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Have something in mind?",
  copy = "Let's turn your next idea into something meaningful.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="container-wide grid items-end gap-10 py-24 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-8">
          <p className="eyebrow text-orange-deep">Next step</p>
          <h2 className="display-lg mt-5 text-charcoal">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-slate">{copy}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 md:col-span-4 md:items-end">
          <Button asChild variant="ink" size="xl" className="w-full md:w-auto">
            <Link to="/start-project">Start a Project</Link>
          </Button>
          <Button asChild variant="inkOutline" size="xl" className="w-full md:w-auto">
            <Link to="/book">Book a Consultation</Link>
          </Button>
        </Reveal>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-16 select-none font-display text-[18rem] leading-none text-charcoal/[0.04]"
      >
        B
      </span>
    </section>
  );
}
