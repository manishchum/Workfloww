import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Map, Users, ArrowRight, Target, CheckCircle2,
  BarChart3, Zap, Layers, Network,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const outcomes = [
  {
    title: "Sales Readiness",
    description:
      "Stop losing deals because your team wasn't ready. Lucid gets your frontline sales reps field-ready — carrying the right knowledge, the right pitch, and the right confidence before they face a single customer.",
    metrics: [
      "Faster ramp, faster first deal",
      "Reps who know what to say and when",
      "No more \"still learning\" excuses in the field",
    ],
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Execution Consistency",
    description:
      "Your best rep and your newest rep should sound like the same company. Lucid locks in your winning sales process across every rep, every region, every day — so great execution stops being an accident.",
    metrics: [
      "One playbook, zero deviation",
      "Best practices become team habits",
      "Pipeline quality goes up across the board",
    ],
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "Manager Visibility",
    description:
      "Don't wait for missed targets to tell you something's wrong. Lucid gives managers a live pulse on team readiness — so you can coach early, course-correct fast, and stop firefighting at quarter end.",
    metrics: [
      "Know who's ready before they're in front of a customer",
      "Spot gaps before they become lost deals",
      "Coach on signal, not just on results",
    ],
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Content & Tool Adoption",
    description:
      "The right content, in the right hands, at the right moment. Lucid ensures your reps show up to every conversation armed — with the latest pitch, the sharpest objection handler, and the proof that closes.",
    metrics: [
      "Reps walk in prepared, not winging it",
      "Latest playbooks used, not ignored",
      "Every conversation backed by the right content",
    ],
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

const deliverables = [
  {
    title: "Comprehensive Audit",
    description:
      "A deep-dive assessment of your current GTM content, methodology, and tech stack to pinpoint critical revenue leaks.",
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: "The Lucid Blueprint",
    description:
      "A mapped, ideal-state architecture tailored to your unique operational constraints and growth targets, taking into account the context of sales team, sales process and tools used.",
    icon: <Map className="w-6 h-6" />,
  },
  {
    title: "Champion Enablement",
    description:
      "Identification and training of frontline leaders to drive organic, bottom-up adoption rather than top-down mandates, equipping them with tools and content to drive higher sales outcomes.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Pilot Outcomes",
    description: "A fully scoped and executed pilot in sales with proven ROI.",
    icon: <Layers className="w-6 h-6" />,
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function LighthouseProgram() {
  const [activeOutcome, setActiveOutcome] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="lh-page min-h-screen pt-24">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative lucid-container flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-[85vh] px-5 sm:px-6 md:px-8 lg:px-8 xl:px-8 py-10 lg:py-12" style={{ padding: "5rem 1.25rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] lh-bg-light rounded-full blur-[120px] -z-10 opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        {/* Left copy */}
        <div className="flex-1 space-y-6 lg:space-y-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest lh-accent-text mb-4 lh-display">
              Lighthouse Program
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lh-display font-semibold tracking-tight lh-text-ink leading-[1.1] mb-6">
              30 Days to{" "}
              <span className="lh-accent-text">Revenue Clarity.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lh-text-muted max-w-xl font-light leading-relaxed"
          >
            <strong className="font-semibold lh-text-ink">The Lighthouse Program</strong>{" "}
            is an exclusive 30-day discovery and pilot initiative built for revenue
            leaders. We set up your next stage of sales performance — aligning your
            people, sharpening execution, and equipping your team with the right
            tools and content.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => navigate("/contact")}
              className="h-12 sm:h-14 px-6 sm:px-8 rounded-full lh-bg-accent text-white font-medium hover:opacity-90 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Talk to Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#what-you-get"
              className="h-12 sm:h-14 px-6 sm:px-8 rounded-full border lh-border-faint font-medium hover:bg-gray-100 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Explore Deliverables
            </a>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full aspect-[4/3] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden lh-bg-ink max-w-sm sm:max-w-md lg:max-w-xl mx-auto lg:mx-0 shadow-2xl"
        >
          <div className="absolute inset-0 lh-bg-accent opacity-20 mix-blend-overlay z-10 hover:opacity-0 transition-opacity duration-500" />
          <img
            src="/images/Lighthouse.gif"
            alt="Lighthouse Beacon"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* ── Deliverables ────────────────────────────────────────────────── */}
      <section
        id="what-you-get"
        className="bg-white border-y lh-border-faint"
        style={{ padding: "2.5rem 1.25rem" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="max-w-3xl mb-10 sm:mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-widest lh-accent-text mb-4 lh-display">
              What You Get
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lh-display font-medium tracking-tight mb-4 sm:mb-6 lh-text-ink">
              A 30-Day Accelerated Sales Blueprint.
            </h3>
            <p className="text-base sm:text-lg lh-text-muted">
              The Lighthouse Program transitions your organization from fragmented
              execution to a validated, operational prototype in exactly one month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl lg:rounded-3xl lh-bg-paper border lh-border-faint hover:border-sky-300 transition-colors group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center lh-accent-text mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="lh-display font-semibold text-lg sm:text-xl mb-2 sm:mb-3 lh-text-ink">
                  {item.title}
                </h4>
                <p className="lh-text-muted text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Outcomes ────────────────────────────────────────────────── */}
      <section
        id="outcomes"
        className="lh-bg-paper"
        style={{ padding: "2.5rem 1.25rem" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="max-w-2xl mb-10 sm:mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-widest lh-accent-text mb-4 lh-display">
              Key Outcomes
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lh-display font-medium tracking-tight mb-4 sm:mb-6 lh-text-ink">
              Engineered for measurable impact.
            </h3>
            <p className="text-base sm:text-lg lh-text-muted">
              We don't just deliver slide decks. We build self-sustaining revenue
              engines that fundamentally change how your sales team goes to market.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Tab nav */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x lg:snap-none">
              {outcomes.map((outcome, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveOutcome(idx)}
                  className={`text-left p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 snap-start shrink-0 lg:shrink lg:w-auto w-56 sm:w-64 ${
                    activeOutcome === idx
                      ? "lh-bg-ink text-white shadow-xl border-transparent lg:translate-x-2"
                      : "bg-white lh-border-faint lh-text-muted hover:lh-text-ink"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="lh-display font-medium text-base sm:text-lg lg:text-xl">
                      {outcome.title}
                    </span>
                    {activeOutcome === idx && (
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 opacity-50 shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="lg:col-span-8 bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center border lh-border-faint shadow-sm min-h-[320px] sm:min-h-[380px] lg:min-h-[400px]">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 lh-bg-light rounded-full blur-[80px] -z-10 opacity-50 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOutcome}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center lh-bg-paper shadow-inner lh-accent-text border border-black/5">
                    {outcomes[activeOutcome].icon}
                  </div>

                  <div>
                    <h4 className="text-2xl sm:text-3xl lh-display font-semibold mb-3 sm:mb-4 lh-text-ink">
                      {outcomes[activeOutcome].title}
                    </h4>
                    <p className="text-base sm:text-lg lg:text-xl lh-text-muted max-w-lg leading-relaxed">
                      {outcomes[activeOutcome].description}
                    </p>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t lh-border-faint flex flex-col sm:flex-row flex-wrap gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4">
                    {outcomes[activeOutcome].metrics.map((metric, i) => (
                      <div key={i} className="flex items-start sm:items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 lh-accent-text shrink-0 mt-0.5 sm:mt-0" />
                        <span className="font-medium text-sm lh-text-ink">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="" style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="bg-white border lh-border-faint shadow-xl rounded-2xl lg:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-full h-full opacity-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, #e0f2fe 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lh-display font-semibold lh-text-ink mb-6 sm:mb-8 lg:mb-10">
                Ready to Accelerate Your Revenue Engine?
              </h2>
              <button
                onClick={() => navigate("/contact")}
                className="h-12 sm:h-14 px-6 sm:px-8 rounded-full lh-bg-ink text-white font-medium hover:opacity-90 transition-all shadow-lg text-base sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                Talk to us
              </button>
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