import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link to="/" aria-label="BAPARDEKAR CREATIVE — home" className={cn("group flex items-center gap-3", className)}>
      <span className="relative grid h-9 w-9 place-items-center bg-charcoal font-display text-2xl leading-none text-offwhite ring-1 ring-on-dark/15">
        B
        <span className="absolute bottom-[7px] right-[5px] h-1.5 w-1.5 rounded-full bg-orange transition-transform duration-500 group-hover:scale-150" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.82rem] font-bold tracking-[0.3em]",
            tone === "light" ? "text-on-dark" : "text-charcoal",
          )}
        >
          BAPARDEKAR
        </span>
        <span
          className={cn(
            "mt-1 font-heading text-[0.58rem] font-medium tracking-[0.55em]",
            tone === "light" ? "text-on-dark-muted" : "text-slate",
          )}
        >
          CREATIVE
        </span>
      </span>
    </Link>
  );
}
