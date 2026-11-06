import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact" },
] as const;

/** Every page opens on a charcoal band, so the header is always light-on-dark. */
export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-charcoal/95 py-3 shadow-soft backdrop-blur-md" : "py-6",
      )}
    >
      <div className="container-wide flex items-center justify-between gap-6">
        <Wordmark tone="light" />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative py-1 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-on-dark/75 transition-colors hover:text-on-dark data-[status=active]:text-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/book"
            className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-on-dark link-underline"
          >
            Book a Call
          </Link>
          <Button asChild variant="hero" className="h-11 px-6">
            <Link to="/start-project">Start a Project</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          type="button"
          className="text-on-dark lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </Button>
      </div>

      {open && (
        <div className="container-wide flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-y-auto pb-10 pt-8 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex items-baseline gap-4 border-b border-on-dark/10 py-4 font-display text-4xl text-on-dark data-[status=active]:text-orange"
              >
                <span className="font-heading text-xs text-on-dark-muted">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">Start a Project</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/book">Book a Call</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
