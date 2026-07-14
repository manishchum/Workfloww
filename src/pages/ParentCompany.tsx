import * as React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

export default function ParentCompany() {
  return (
    <div className="lh-page min-h-screen pt-24">
      <Helmet>
        <title>Parent Company – Workfloww.AI | Lucid Ownership</title>
        <meta
          name="description"
          content="Lucid is built and operated by Equinox Corp. Workfloww.ai operates as part of Equinox Corp, the company that owns and is accountable for Lucid."
        />
        <link rel="canonical" href="https://www.workfloww.ai/parent-company" />
      </Helmet>

      <section className="bg-white" style={{ padding: "2.5rem 1.25rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lh-display font-semibold tracking-tight mb-6 leading-relaxed lh-text-ink"
            >
              Lucid is built and operated by <span className="lh-accent-text">Equinox Corp.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold lh-text-muted"
            >
              Workfloww.ai, the company behind Lucid, operates as part of Equinox Corp — the entity
              that owns Lucid and is accountable for it.
            </motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-8">
              <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold lh-text-ink mb-4">Ownership</h3>
                <p className="text-base lh-text-muted leading-relaxed">
                  Lucid is a product of Workfloww.ai. Equinox Corp owns and operates Workfloww.ai,
                  the company that builds Lucid.
                </p>
                <p className="text-base lh-text-muted leading-relaxed mt-4">
                  Equinox Corp owns and operates Workfloww.ai, and holds full accountability for the
                  business, its commitments, and the platform customers rely on.
                </p>
              </section>

              <section className="bg-white rounded-3xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold lh-text-ink mb-4">Why it matters</h3>
                <p className="text-base lh-text-muted leading-relaxed">
                  Enterprise customers evaluating Lucid — for procurement, legal, or vendor-risk review —
                  can rely on Equinox Corp as the contracting and governing entity behind the product.
                </p>
              </section>

              <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold lh-text-ink mb-4">Get in touch</h3>
                <p className="text-base lh-text-muted leading-relaxed">
                  For due-diligence documentation, contracting details, or any other questions about
                  the corporate structure behind Lucid, reach out via <a href="/contact" className="text-blue-500 hover:text-blue-600">Contact</a>.
                </p>
              </section>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold lh-text-ink mb-6">Company structure</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-5">
                  <span className="font-medium text-slate-900">Equinox Corp</span>
                  <span className="text-sm text-slate-500">Parent company</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-5">
                  <span className="font-medium text-slate-900">Workfloww.ai</span>
                  <span className="text-sm text-slate-500">Operating company</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-5">
                  <span className="font-medium text-slate-900">Lucid</span>
                  <span className="text-sm text-slate-500">Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          section[style*="padding: 2.5rem 1.25rem"] {
            padding: 3rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
