import * as React from "react";
import { Button } from "@/components/ui/button";

const HERO_STATS = [
  { value: "₹1.2Cr", label: "annual revenue leakage from weak counter readiness" },
  { value: "+17%", label: "close rate lift with readiness fixes" },
  { value: "88", label: "launch readiness score" },
  { value: "6", label: "locations trending low" },
];

const READINESS_BY_ROLE = [
  { role: "Senior Associate", value: 91 },
  { role: "Associate", value: 76 },
  { role: "New Hire", value: 48 },
  { role: "Part-Time", value: 39 },
];

const LAUNCH_LOCATIONS = [
  { name: "Pune East", value: 38, status: "red" },
  { name: "Chennai Central", value: 44, status: "amber" },
  { name: "Mumbai North", value: 94, status: "green" },
];

const EXECUTION_FEATURES = [
  {
    title: "Readiness by role",
    body: "See which role pulls close rate down before the day starts.",
  },
  {
    title: "Location scorecards",
    body: "Spot the exact outlets dragging launch revenue below plan.",
  },
  {
    title: "Gap alerts",
    body: "Get notified when readiness dips below 80 before it hits sales.",
  },
  {
    title: "WhatsApp delivery proof",
    body: "Track who received, opened, and passed execution checks.",
  },
];

const OUTCOMES = [
  "Counter Conversion",
  "Launch ROI",
  "Location Consistency",
  "Real-Time Visibility",
  "Gap Alerts",
  "Speed to Revenue",
];

const statusStyles: Record<string, string> = {
  red: "bg-rose-100 text-rose-700 border-rose-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  green: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const readinessColor = (value: number) => {
  if (value >= 85) return "bg-emerald-500";
  if (value >= 60) return "bg-amber-500";
  return "bg-rose-500";
};

/* Shared section padding - centered alignment */
const sp = "max-w-[1200px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 sm:py-14 lg:py-20";

export default function SalesHead() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-4 sm:mb-6">
                Sales Head Use Case
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                ₹1.2Cr vanishes when counter readiness slips below launch day.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-4 sm:mt-6 max-w-xl">
                Lucid ties frontline execution to revenue for QSR, FMCG, and Retail sales heads who need every outlet ready before the promo goes live.
              </p>
              <p className="text-sm sm:text-base text-slate-600 mt-3 sm:mt-4 max-w-xl">
                Drive a <span className="font-semibold text-slate-900">+17%</span> close rate lift, keep launch readiness at{" "}
                <span className="font-semibold text-slate-900">88</span>, and surface the{" "}
                <span className="font-semibold text-slate-900">6</span> locations that leak revenue first.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Button
                  size="lg"
                  className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white w-full sm:w-auto"
                >
                  Book a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 rounded-xl text-base font-semibold border-slate-300 w-full sm:w-auto"
                >
                  See the 30-day pilot
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
                {HERO_STATS.map((stat) => (
                  <div key={stat.value} className="border border-slate-200 rounded-2xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard card */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Counter readiness live</p>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">Product knowledge by role</h3>
                </div>
                <span className="text-xs font-semibold text-emerald-600">Live</span>
              </div>
              <div className="mt-5 sm:mt-6 space-y-4">
                {READINESS_BY_ROLE.map((role) => (
                  <div key={role.role}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{role.role}</span>
                      <span className="font-semibold text-slate-900">{role.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mt-2">
                      <div
                        className={`h-2 rounded-full ${readinessColor(role.value)}`}
                        style={{ width: `${role.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 bg-rose-50 border border-rose-100 text-rose-700 text-sm font-semibold rounded-xl px-4 py-3">
                New hire readiness is costing ₹48,000 per outlet this week.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Revenue Assurance ──────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                ₹7.5L in launch revenue disappears when readiness stays below 90.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                Lucid flags weak locations before the campaign drops, so you stop betting the month on guesswork.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-3 text-slate-700 text-sm sm:text-base">
                <li>
                  Launch readiness score holds at{" "}
                  <span className="font-semibold text-slate-900">88</span>.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">6</span> locations are below target and bleeding close rate.
                </li>
                <li>Fix the bottom 20% before the promo goes live.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Launch readiness</p>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">Regional score</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-[#6357d4]">88</div>
                  <p className="text-xs text-amber-600 font-semibold">6 locations low</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                {LAUNCH_LOCATIONS.map((location) => (
                  <div
                    key={location.name}
                    className={`rounded-2xl border px-4 py-3 ${statusStyles[location.status]}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{location.name}</p>
                      <span className="text-sm font-bold">{location.value}%</span>
                    </div>
                    <p className="text-xs mt-2">Readiness risk impacting close rate.</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl px-4 py-3">
                Recovery opportunity: ₹2.4L if Pune & Chennai recover this week.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Launch Execution ───────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">

            {/* Card first on mobile */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Location dashboard</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">Launch execution today</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Updated 9:20 AM</span>
              </div>

              <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">28</p>
                  <p className="text-xs text-emerald-700 mt-1">Ready</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-amber-600">9</p>
                  <p className="text-xs text-amber-700 mt-1">Partial</p>
                </div>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-rose-600">6</p>
                  <p className="text-xs text-rose-700 mt-1">Not ready</p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 space-y-3">
                {[
                  { label: "WhatsApp delivery", value: "100%" },
                  { label: "Opened", value: "87%" },
                  { label: "Quiz passed", value: "71%" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between text-sm"
                  >
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-semibold text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 sm:mt-6 bg-amber-50 border border-amber-100 text-amber-700 text-sm font-semibold rounded-xl px-4 py-3">
                9 outlets are one shift away from a close-rate dip.
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                ₹4.2L per week is lost when launches go live without execution proof.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                Lucid turns launch execution into a daily revenue control system, not a post-mortem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {EXECUTION_FEATURES.map((feature) => (
                  <div key={feature.title} className="border border-slate-200 rounded-2xl p-4 text-slate-700 text-sm">
                    <p className="font-semibold text-slate-900 mb-2">{feature.title}</p>
                    <p>{feature.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ───────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10">
            ₹2.1Cr is recovered when every outlet runs the same play.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {OUTCOMES.map((item) => (
              <div key={item} className="border border-slate-200 rounded-2xl p-5 sm:p-6">
                <p className="text-base sm:text-lg font-semibold text-slate-900">{item}</p>
                <p className="text-sm text-slate-500 mt-2">
                  Every point of readiness adds to close rate and revenue certainty.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Dark ───────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white">
        <div className={sp}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase mb-3 sm:mb-4">
                Sales leader mandate
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                If your floor isn't ready, your campaign isn't working.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-3 sm:mt-4 max-w-2xl">
                Protect every launch rupee with execution proof in the first 48 hours.
              </p>
            </div>
            <Button
              size="lg"
              className="h-12 px-6 rounded-xl text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto shrink-0"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}