import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BAPARDEKAR CREATIVE" },
      {
        name: "description",
        content:
          "How BAPARDEKAR CREATIVE handles personal information shared through this website.",
      },
      { property: "og:title", content: "Privacy Policy — BAPARDEKAR CREATIVE" },
      {
        property: "og:description",
        content: "Privacy policy for the BAPARDEKAR CREATIVE website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" compact />
      <section className="section-pad bg-offwhite">
        <div className="container-wide max-w-4xl">
          <div className="mb-12 border-l-2 border-orange bg-beige p-6">
            <p className="eyebrow text-orange-deep">Draft · Business and legal review required</p>
            <p className="mt-3 text-slate">
              Not reviewed legal advice. Business-specific details and an effective date must be
              confirmed before this becomes a final policy.
            </p>
          </div>
          <div className="space-y-10">
            <section className="border-t border-hairline pt-6">
              <h2 className="font-display text-3xl">1. Information in a brief</h2>
              <p className="mt-4 text-slate">
                The project and consultation forms ask for your name, email, optional WhatsApp and
                business details, service selection, project description, budget preference,
                preferred dates and reference links. Avoid including passwords, financial
                credentials or sensitive personal information.
              </p>
            </section>
            <section className="border-t border-hairline pt-6">
              <h2 className="font-display text-3xl">2. Current form status</h2>
              <p className="mt-4 text-slate">
                Online submission delivery is not connected. Entered details are held in the current
                page while you prepare your draft. Downloading a draft creates a text file on your
                device; it does not send the information to the studio.
              </p>
            </section>
            <section className="border-t border-hairline pt-6">
              <h2 className="font-display text-3xl">3. Purpose and inquiry handling</h2>
              <p className="mt-4 text-slate">
                Before enabling delivery, confirm the services used to receive and store inquiries,
                who can access them and how project information is used to respond, prepare quotes
                and coordinate work.
              </p>
            </section>
            <section className="border-t border-hairline pt-6">
              <h2 className="font-display text-3xl">4. Service providers and website data</h2>
              <p className="mt-4 text-slate">
                Confirm hosting, form delivery, analytics, embedded media, cookies and any
                international transfers before publishing a final policy. This page does not
                establish the data practices of hosting or third-party services.
              </p>
            </section>
            <section className="border-t border-hairline pt-6">
              <h2 className="font-display text-3xl">5. Retention and deletion requests</h2>
              <p className="mt-4 text-slate">
                Business confirmation required: specify retention periods, deletion procedures and
                any records that must be retained. A verified privacy contact must be added before
                visitors are asked to send personal information.
              </p>
            </section>
            <section className="border-t border-hairline pt-6">
              <h2 className="font-display text-3xl">6. Security and policy changes</h2>
              <p className="mt-4 text-slate">
                Confirm access controls, security practices, policy review procedures and an
                effective date before enabling online submissions. This draft makes no claim of
                legal compliance.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  ),
});
