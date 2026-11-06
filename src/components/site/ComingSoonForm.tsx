import { site } from "@/config/site";

/** Shown where an online form is not finished yet. Points visitors to email instead. */
export function ComingSoonForm({ what }: { what: string }) {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-wide max-w-3xl">
        <p className="eyebrow text-orange-deep">Coming soon</p>
        <h2 className="display-md mt-4 text-charcoal">The online {what} form is on its way.</h2>
        <p className="mt-6 text-lg text-slate">
          Until it's ready, email us with a few details and we'll reply personally.
        </p>
        <a
          href={`mailto:${site.contact.email}?subject=${encodeURIComponent(what)}`}
          className="mt-8 inline-flex h-14 items-center bg-charcoal px-9 font-heading text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-offwhite hover:bg-orange hover:text-charcoal"
        >
          Email {site.contact.email}
        </a>
      </div>
    </section>
  );
}
