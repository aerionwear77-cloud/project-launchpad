import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { servicesByDepartment } from "@/data/services";
import { projects } from "@/data/portfolio";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain overflow-hidden bg-charcoal text-on-dark">
      <div className="container-wide border-b border-on-dark/10 py-20 md:py-28">
        <p className="eyebrow text-orange">Let's work together</p>
        <Link
          to="/start-project"
          className="group mt-6 flex flex-wrap items-end gap-x-6 font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] text-on-dark"
        >
          <span>Start a project</span>
          <ArrowUpRight className="mb-3 h-[0.6em] w-[0.6em] text-orange transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2" />
        </Link>
        {site.contact.email && <a
          href={`mailto:${site.contact.email}`}
          className="mt-8 inline-block font-heading text-sm tracking-[0.15em] text-on-dark-muted link-underline hover:text-on-dark"
        >
          {site.contact.email}
        </a>}
      </div>

      <div className="container-wide grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Wordmark tone="light" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-on-dark-muted">{site.description}</p>
          <p className="mt-6 eyebrow text-on-dark/60">{site.coverage}</p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5 text-orange">Design</p>
          <ul className="space-y-2.5 text-[0.95rem] text-on-dark-muted">
            {servicesByDepartment("design").slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-on-dark">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mb-5 mt-8 text-orange">Motion</p>
          <ul className="space-y-2.5 text-[0.95rem] text-on-dark-muted">
            {servicesByDepartment("motion").slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-on-dark">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5 text-orange">Work</p>
          <ul className="space-y-2.5 text-[0.95rem] text-on-dark-muted">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="hover:text-on-dark">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5 text-orange">Studio</p>
          <ul className="space-y-2.5 text-[0.95rem] text-on-dark-muted">
            <li><Link to="/about" className="hover:text-on-dark">About</Link></li>
            <li><Link to="/process" className="hover:text-on-dark">Our Process</Link></li>
            <li><Link to="/book" className="hover:text-on-dark">Book a Consultation</Link></li>
            <li><Link to="/contact" className="hover:text-on-dark">Contact</Link></li>
          </ul>
          {site.social.length > 0 && <p className="eyebrow mb-5 mt-8 text-orange">Follow</p>}
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-on-dark-muted">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-on-dark">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wide flex flex-col gap-4 border-t border-on-dark/10 py-8 text-xs text-on-dark/50 md:flex-row md:items-center md:justify-between">
        <p>© {year} BAPARDEKAR CREATIVE. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-on-dark">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-on-dark">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
