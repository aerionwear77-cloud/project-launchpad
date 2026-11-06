import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
  aspect,
  tone = "light",
}: {
  project: Project;
  className?: string;
  aspect?: string;
  tone?: "light" | "dark";
}) {
  const ratio = aspect ?? (project.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]");
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className={cn("group block", className)}
      aria-label={`View project: ${project.name}`}
    >
      <div className={cn("relative overflow-hidden bg-charcoal", ratio)}>
        <img
          src={project.cover}
          alt={`${project.name} — ${project.projectType}`}
          loading="lazy"
          width={1600}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/25" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="bg-offwhite/90 px-2.5 py-1 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-charcoal">
            {project.category}
          </span>
          {project.isConcept && (
            <span className="bg-charcoal/80 px-2.5 py-1 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-on-dark">
              Concept Project
            </span>
          )}
        </div>
        {project.isVideo && project.video && (
          <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-orange text-charcoal transition-transform duration-500 group-hover:scale-110">
            <Play className="h-4 w-4 fill-current" />
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3
            className={cn(
              "font-display text-3xl",
              tone === "dark" ? "text-on-dark" : "text-charcoal",
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              "mt-1 text-[0.95rem]",
              tone === "dark" ? "text-on-dark-muted" : "text-slate",
            )}
          >
            {project.short}
          </p>
        </div>
        <span
          className={cn(
            "mt-2 flex shrink-0 items-center gap-1 font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-colors group-hover:text-orange",
            tone === "dark" ? "text-on-dark" : "text-charcoal",
          )}
        >
          View Project <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
