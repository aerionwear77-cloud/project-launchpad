import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FounderSection } from "@/components/site/FounderSection";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { CtaBand } from "@/components/site/CtaBand";
import { assets } from "@/config/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Story of BAPARDEKAR CREATIVE" },
      {
        name: "description",
        content:
          "Why BAPARDEKAR CREATIVE exists, our creative philosophy, mission and how our founder-led agency works with clients in India and worldwide.",
      },
      { property: "og:title", content: "About BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "A founder-led creative agency built on thoughtful design and reliable execution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const philosophy = [
  { word: "Listen", text: "Good work begins with understanding. We ask questions before we open any design tool." },
  { word: "Simplify", text: "Clarity is a creative decision. We remove what doesn't serve the message." },
  { word: "Craft", text: "Details are where trust is built — spacing, timing, colour, a single frame." },
  { word: "Deliver", text: "Ideas only matter when they ship. We plan carefully and finish what we start." },
];

const commitments = [
  "Honest scoping and transparent pricing before work begins.",
  "A single point of contact for every project.",
  "Clear revision limits agreed up front.",
  "Your files, delivered in the formats you need.",
  "Respect for your confidentiality and your ideas.",
  "No inflated claims — only work we can stand behind.",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            A name, a belief, <em className="text-orange">a creative practice.</em>
          </>
        }
        intro="BAPARDEKAR is a family name. Building a creative agency around it is a promise — that every piece of work carries personal care and accountability."
        image={assets.about.collaboration}
        imageAlt="Two creatives collaborating over printed layouts"
      />

      {/* 1. Our Story */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-orange-deep">01 — Our story</p>
            <h2 className="display-md mt-5 text-charcoal">Why BAPARDEKAR CREATIVE exists.</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <div className="space-y-6 text-xl leading-relaxed text-slate">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-orange">
                Visual communication shapes how people feel about a business long before they read a word. A logo, a
                reel, a poster on a wall — each one either builds trust or quietly erodes it.
              </p>
              <p>
                Too many small and growing businesses are left choosing between expensive agencies and inconsistent,
                rushed design. BAPARDEKAR CREATIVE was started to offer a third way: thoughtful, professionally directed
                creative work that is accessible and dependable.
              </p>
              <p>
                The ambition is long-term — to build a creative brand that people recognise for its quality, its
                honesty and the care it brings to every project, whether the client is in Mumbai or Melbourne.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Why */}
      <section className="bg-charcoal text-on-dark">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img
              src={assets.about.moodboard}
              alt="Moodboard with photographs, fabric swatches and pencil logo sketches"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="section-pad px-[clamp(1.25rem,4vw,3.5rem)]">
            <Reveal>
              <p className="eyebrow text-orange">02 — Why BAPARDEKAR CREATIVE</p>
              <h2 className="display-md mt-5">Founder-led care. Specialist talent.</h2>
              <p className="mt-6 text-lg text-on-dark-muted">
                We are honest about how we work. BAPARDEKAR CREATIVE is a managed creative agency: the founder
                directs every project, and production is carried out with a trusted network of independent designers
                and video editors selected for each brief.
              </p>
              <p className="mt-5 text-lg text-on-dark-muted">
                That model lets us match the right skills to your project, scale up or down as needed, and keep one
                consistent standard of quality across everything we deliver.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Philosophy */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-orange-deep">03 — Creative philosophy</p>
            <h2 className="display-lg mt-5 max-w-3xl text-charcoal">Four words we design by.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-hairline md:grid-cols-4">
            {philosophy.map((p, i) => (
              <Reveal key={p.word} delay={i * 0.06} className="bg-offwhite">
                <div className="h-full p-8">
                  <p className="font-display text-6xl italic text-charcoal">{p.word}</p>
                  <p className="mt-6 text-slate">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="section-pad bg-beige">
        <div className="container-wide grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-orange-deep">04 — Mission</p>
            <p className="mt-6 font-display text-4xl leading-tight text-charcoal md:text-5xl">
              To give every business access to creative work made with purpose, care and professional direction.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-orange-deep">Vision</p>
            <p className="mt-6 font-display text-4xl italic leading-tight text-slate md:text-5xl">
              To build a creative brand from India that is recognised worldwide for thoughtful design and reliable
              execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. Founder */}
      <FounderSection showLink={false} />

      {/* 6. How we work */}
      <section className="section-pad grain bg-charcoal text-on-dark">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-orange">06 — How we work</p>
            <h2 className="display-lg mt-5 max-w-3xl">Structured, collaborative, transparent.</h2>
          </Reveal>
          <div className="mt-16">
            <ProcessSteps tone="dark" detailed />
          </div>
        </div>
      </section>

      {/* 7. Commitment */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-orange-deep">07 — Our commitment</p>
            <h2 className="display-md mt-5 text-charcoal">What you can always expect from us.</h2>
          </Reveal>
          <ul className="md:col-span-7">
            {commitments.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <li className="flex gap-6 border-b border-hairline py-6 text-lg text-charcoal">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. CTA */}
      <CtaBand title="Let's build something worth remembering." />
    </>
  );
}
