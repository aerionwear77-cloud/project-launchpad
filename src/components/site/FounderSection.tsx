import { Link } from "@tanstack/react-router";
import { assets } from "@/config/assets";
import { site } from "@/config/site";
import { Reveal } from "./Reveal";

export function FounderPortrait() {
  if (assets.founder.portrait) {
    return (
      <img
        src={assets.founder.portrait}
        alt={`${site.founder.name}, ${site.founder.role}`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between bg-charcoal p-8 text-on-dark"
      role="img"
      aria-label="Founder portrait placeholder"
    >
      <span className="eyebrow text-on-dark-muted">Portrait coming soon</span>
      <span className="font-display text-[12rem] leading-none text-on-dark/90">
        B<span className="text-orange">.</span>
      </span>
      <span className="text-sm text-on-dark-muted">Add your photo in /public/assets/images/founder/</span>
    </div>
  );
}

export function FounderSection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-wide grid items-center gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden shadow-lift">
              <FounderPortrait />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-orange md:block" aria-hidden />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow text-orange-deep">The founder</p>
            <h2 className="display-lg mt-5 text-charcoal">Behind the creative vision.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              {site.founder.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-hairline pt-6">
              <p className="font-display text-3xl text-charcoal">{site.founder.name}</p>
              <p className="eyebrow mt-2 text-slate">{site.founder.role}</p>
            </div>
            {showLink && (
              <Link to="/about" className="mt-8 inline-block font-heading text-xs font-semibold uppercase tracking-[0.2em] text-charcoal link-underline">
                Read our story
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
