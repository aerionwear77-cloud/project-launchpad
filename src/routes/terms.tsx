import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BAPARDEKAR CREATIVE" },
      { name: "description", content: "Terms and conditions for working with BAPARDEKAR CREATIVE." },
      { property: "og:title", content: "Terms & Conditions — BAPARDEKAR CREATIVE" },
      { property: "og:description", content: "Terms for projects and use of the BAPARDEKAR CREATIVE website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" compact />
      <section className="section-pad bg-offwhite">
        <div className="container-wide max-w-4xl">
          <div className="mb-12 border-l-2 border-orange bg-beige p-6">
            <p className="eyebrow text-orange-deep">Draft · Business and legal review required</p>
            <p className="mt-3 text-slate">Not reviewed legal advice. Business-specific details and an effective date must be confirmed before this becomes a final policy.</p>
          </div>
          <div className="space-y-10">
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">1. Requests and quotations</h2><p className="mt-4 text-slate">Preparing a brief does not create a paid order. A preferred consultation date does not confirm an appointment. Scope and project terms require a separate written agreement.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">2. Project scope and changes</h2><p className="mt-4 text-slate">Business confirmation required: define agreed deliverables, exclusions, client responsibilities, approval stages and how scope changes are reviewed and quoted.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">3. Pricing and payments</h2><p className="mt-4 text-slate">No fixed service price is advertised. Confirm the project quote, currency, taxes, payment schedule, payment methods and any deposit terms in a written agreement; this draft sets none of them.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">4. Revisions and approvals</h2><p className="mt-4 text-slate">Revision allowances and additional change requests must be specified in the quote. No default number of revisions or additional fee is established by this page.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">5. Timeline and delivery</h2><p className="mt-4 text-slate">Confirm milestones, client-input requirements, delivery dates, formats and handover arrangements for each project. Preferred deadlines shown in a brief are not guaranteed delivery dates.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">6. Intellectual property and third-party assets</h2><p className="mt-4 text-slate">Business/legal review required: define rights to final work and source files, when any rights transfer occurs, permitted portfolio use and responsibility for fonts, music, footage and other licensed materials.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">7. Cancellation and refunds</h2><p className="mt-4 text-slate">Business/legal review required: agree cancellation procedures, work completed, refund eligibility and any non-refundable amounts before payment. No cancellation fee or refund promise is established here.</p></section>
            <section className="border-t border-hairline pt-6"><h2 className="font-display text-3xl">8. Confidentiality, disputes and governing law</h2><p className="mt-4 text-slate">Confirm confidentiality arrangements, dispute procedures, limitation of liability, governing law, verified business identity and a contact for contractual questions. These require appropriate legal review.</p></section>
          </div>
        </div>
      </section>
    </>
  ),
});
