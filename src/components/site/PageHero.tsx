import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Charcoal opening band used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-charcoal text-on-dark">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
            width={1600}
            height={1000}
          />
          <div className="veil-side absolute inset-0 -z-10" />
        </>
      )}
      <div className={cn("container-wide", compact ? "pb-16 pt-36 md:pb-20 md:pt-44" : "pb-20 pt-40 md:pb-28 md:pt-52")}>
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-orange">
            <span className="h-px w-10 bg-orange" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className={cn("mt-6 max-w-5xl", compact ? "display-lg" : "display-xl")}>{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <div className="mt-8 max-w-2xl text-lg leading-relaxed text-on-dark-muted md:text-xl">{intro}</div>
          </Reveal>
        )}
        {children && <Reveal delay={0.24}>{children}</Reveal>}
      </div>
    </section>
  );
}
