import * as React from "react";
import { Button } from "@/components/ui/button";

const HERO_METRICS = [
  { label: "Compliance", value: "89%" },
  { label: "Ops Score", value: "74" },
  { label: "Open Actions", value: "7▲" }
];

const HERO_ZONES = [
  { name: "Zone North", value: 94, color: "#1D9E75" },
  { name: "Zone West", value: 88, color: "#1D9E75" },
  { name: "Zone East", value: 74, color: "#EF9F27" },
  { name: "Zone South", value: 61, color: "#D85A30" }
];

const STAT_STRIP = [
  {
    value: "4/5",
    label: "Site visits surface the same deviation found last month. Recurring means systemic."
  },
  {
    value: "48hrs",
    label: "For Lucid to give you a full compliance baseline from contract to first data."
  },
  {
    value: "Real-time",
    label: "Audit results on your dashboard the moment submitted. Not 3 days later in Excel."
  },
  {
    value: "Zero.",
    label: "Additional auditors needed to scale compliance across 50 to 200 locations."
  }
];

const EXECUTION_BULLETS = [
  "SOP zero-lag deployment",
  "Mobile audit checklists",
  "Auto corrective action",
  "Compliance trend by location"
];

const VISIBILITY_FEATURES = [
  { title: "Location Score", body: "Know which outlets are drifting before they fail audit." },
  { title: "Deviation Alerts", body: "Get flagged the moment variance becomes repeatable." },
  { title: "Photo Evidence", body: "Proof of execution tied to every checklist." },
  { title: "Scheduled Cadence", body: "Lock compliance checks into every shift, not once a month." }
];

const OUTCOMES = [
  "Compliance Visibility",
  "Standard Enforcement",
  "Corrective Action",
  "Pattern Detection",
  "Shift Consistency",
  "Regional Rollup"
];

const HEATMAP_DATA = [
  {
    location: "Mumbai N",
    values: [94, 91, 96, 83, 92, 89, 94, 91, 95, 93]
  },
  {
    location: "Delhi S",
    values: [88, 91, 82, 71, 87, 90, 88, 84, 89, 92]
  },
  {
    location: "Bangalore",
    values: [68, 71, 74, 78, 81, 83, 86, 88, 89, 91]
  },
  {
    location: "Hyderabad",
    values: [79, 74, 77, 80, 73, 78, 80, 82, 79, 81]
  },
  {
    location: "Chennai",
    values: [51, 58, 54, 49, 62, 55, 52, 60, 57, 53]
  },
  {
    location: "Pune",
    values: [86, 52, 88, 48, 91, 61, 87, 55, 89, 50]
  },
  {
    location: "Kolkata",
    values: [72, 69, 74, 70, 73, 71, 75, 77, 79, 80]
  },
  {
    location: "Ahmedabad",
    values: [null, null, 44, 58, 67, 76, 80, 85, 88, 90]
  }
];

const HEATMAP_ANNOTATIONS = [
  {
    after: "Delhi S",
    label: "Improving after intervention",
    tone: "text-[#1D9E75]"
  },
  {
    after: "Chennai",
    label: "Chronic non-compliance — systemic gap, not a one-off",
    tone: "text-[#D85A30]"
  },
  {
    after: "Pune",
    label: "High volatility — manager-dependent, not system-driven",
    tone: "text-[#D85A30]"
  },
  {
    after: "Ahmedabad",
    label: "Rapid improvement — Lucid from Day 1",
    tone: "text-[#1D9E75]"
  }
];

const ACTION_BULLETS = [
  "Assigned in seconds",
  "Photo verification required",
  "Closed-loop check",
  "Recurring pattern detection"
];

const deviationColor = (value: number | null) => {
  if (value === null) return "bg-slate-100 text-slate-400 border-slate-200";
  if (value >= 90) return "bg-[#1D9E75]/15 text-[#1D9E75] border-[#1D9E75]/30";
  if (value >= 80) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (value >= 70) return "bg-[#EF9F27]/15 text-[#B97314] border-[#EF9F27]/30";
  if (value >= 60) return "bg-[#EF9F27]/25 text-[#B97314] border-[#EF9F27]/40";
  return "bg-[#D85A30]/20 text-[#D85A30] border-[#D85A30]/30";
};

export default function OperationsHead() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#6357d4] uppercase mb-6">
                For the Operations Head
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                You visited five locations last week. Found the same problem in four. <span className="text-[#6357d4]">Again.</span>
              </h1>
              <p className="text-lg text-slate-600 mt-6 max-w-xl">
                Recurring deviations are not a discipline problem. They are a systems problem. The standard exists. The people are capable. But the gap between your SOP and what happens on the floor has no system to close it. Lucid is that system.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                              <Button size="lg" className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white">
                                Book a Demo
                              </Button>
                              <Button variant="outline" size="lg" className="h-12 px-6 rounded-xl text-base font-semibold border-slate-300">
                                View the 30-day pilot
                              </Button>
                            </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                    Compliance & Ops · Live
                  </p>
                  <h3 className="text-2xl font-bold mt-2">Execution snapshot</h3>
                </div>
                <span className="text-xs font-semibold text-[#1D9E75]">Live</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-xl font-bold text-slate-900">{metric.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {HERO_ZONES.map((zone) => (
                  <div key={zone.name}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{zone.name}</span>
                      <span className="font-semibold text-slate-900">{zone.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mt-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${zone.value}%`, backgroundColor: zone.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAT_STRIP.map((stat) => (
              <div key={stat.value} className="bg-white border border-slate-200 rounded-2xl p-6">
                <p className="text-3xl font-heading font-extrabold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Consistency */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#6357d4] uppercase mb-4">
                Execution Consistency
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                One standard. Every location. Every shift. No exceptions.
              </h2>
              <p className="text-lg text-slate-600 mt-5 max-w-xl">
                The moment you can't personally visit every location variance creeps in. Lucid enforces your standards everywhere through deployed knowledge, mobile audits, real-time corrective actions.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {EXECUTION_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#6357d4]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                    SOP Deployment Tracker
                  </p>
                  <h3 className="text-2xl font-bold mt-2">Latest SOP update</h3>
                </div>
                <span className="text-xs font-semibold text-[#1D9E75]">Updated 2 hrs ago</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xl font-bold text-emerald-700">100%</p>
                  <p className="text-xs text-emerald-700 mt-1">Locations received</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xl font-bold text-amber-700">89%</p>
                  <p className="text-xs text-amber-700 mt-1">Associates confirmed</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xl font-bold text-amber-700">76%</p>
                  <p className="text-xs text-amber-700 mt-1">Comprehension verified</p>
                </div>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                  <p className="text-xl font-bold text-rose-700">4</p>
                  <p className="text-xs text-rose-700 mt-1">Locations on remediation</p>
                </div>
              </div>

              <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.3em]">Zone South</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-slate-600">Compliance trend</span>
                  <span className="text-sm font-semibold text-slate-900">53% → 89% in 10 weeks</span>
                </div>
                <div className="mt-3 flex items-end gap-2">
                  {[53, 58, 61, 66, 70, 74, 79, 82, 86, 89].map((value) => (
                    <div
                      key={value}
                      className="w-4 rounded-full"
                      style={{ height: `${value / 2.2}px`, backgroundColor: "#6357d4" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Visibility */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-start">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Operational visibility</p>
                  <h3 className="text-2xl font-bold mt-2">Live deviation monitor</h3>
                </div>
                <span className="text-xs font-semibold text-[#6357d4]">Live</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600">31</p>
                  <p className="text-xs text-emerald-700 mt-1">Passing</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">8</p>
                  <p className="text-xs text-amber-700 mt-1">At risk</p>
                </div>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center">
                  <p className="text-2xl font-bold text-rose-600">4</p>
                  <p className="text-xs text-rose-700 mt-1">Failing</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { title: "Pre-shift checklist", location: "Chennai", status: "Recurring", tone: "text-[#D85A30]" },
                  { title: "Cold chain", location: "Pune", status: "Open", tone: "text-[#EF9F27]" },
                  { title: "Display", location: "Delhi", status: "Closed", tone: "text-[#1D9E75]" }
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-700 font-semibold">{item.title}</span>
                      <span className={`text-xs font-semibold ${item.tone}`}>{item.status}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#6357d4] uppercase mb-4">Operational Visibility</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Stop finding out about problems from site visits.
              </h2>
              <p className="text-lg text-slate-600 mt-5 max-w-xl">
                A site visit reveals what went wrong last week. Lucid shows what is going wrong right now — by location, by team, by shift. Reactive vs proactive.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {VISIBILITY_FEATURES.map((feature) => (
                  <div key={feature.title} className="border border-slate-200 rounded-2xl p-4 bg-white">
                    <p className="font-semibold text-slate-900 mb-2">{feature.title}</p>
                    <p className="text-sm text-slate-600">{feature.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heatmap Evidence */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#6357d4] uppercase mb-4">The Evidence</p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Compliance patterns across locations and time — visible at a glance.
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl">
            Each cell is one location, one week. The patterns invisible in site visit reports become impossible to ignore.
          </p>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[140px_repeat(10,1fr)] gap-2 text-xs text-slate-500 mb-3">
                <div></div>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="text-center">W{index + 1}</div>
                ))}
              </div>

              <div className="space-y-3">
                {HEATMAP_DATA.map((row) => {
                  const annotation = HEATMAP_ANNOTATIONS.find((item) => item.after === row.location);
                  return (
                    <div key={row.location}>
                      <div className="grid grid-cols-[140px_repeat(10,1fr)] gap-2 items-center">
                        <div className="text-sm font-semibold text-slate-700">{row.location}</div>
                        {row.values.map((value, index) => (
                          <div
                            key={`${row.location}-${index}`}
                            className={`h-12 rounded-lg border flex items-center justify-center text-xs font-semibold ${deviationColor(value)}`}
                          >
                            {value ?? "—"}
                          </div>
                        ))}
                      </div>
                      {annotation ? (
                        <div className={`mt-2 text-xs font-semibold ${annotation.tone}`}>
                          {annotation.label}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-6">
            <p className="text-sm font-semibold text-slate-900">
              Three patterns invisible in your site visit reports...
            </p>
            <p className="text-sm text-slate-600 mt-2">
              You cannot manage what you cannot see. Now you can see it.
            </p>
          </div>
        </div>
      </section>

      {/* Speed of Correction */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#6357d4] uppercase mb-4">
                Speed of Correction
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Finding a problem and fixing a problem are two very different things.
              </h2>
              <p className="text-lg text-slate-600 mt-5 max-w-xl">
                Most audit tools tell you what's wrong. Few tell you if it got fixed. Lucid assigns, tracks, and verifies every deviation to resolution — with photo evidence and full audit trail.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {ACTION_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#6357d4]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                    Corrective action
                  </p>
                  <h3 className="text-2xl font-bold mt-2">Resolution control</h3>
                </div>
                <span className="text-xs font-semibold text-[#1D9E75]">Live</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center">
                  <p className="text-2xl font-bold text-rose-600">24</p>
                  <p className="text-xs text-rose-700 mt-1">Flagged</p>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600">19</p>
                  <p className="text-xs text-emerald-700 mt-1">Closed</p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">5</p>
                  <p className="text-xs text-amber-700 mt-1">Open</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { title: "Food safety", status: "Open", time: "Assigned 11:04 AM", tone: "text-[#D85A30]" },
                  { title: "End cap display", status: "In review", time: "Due today 5:00 PM", tone: "text-[#EF9F27]" },
                  { title: "Cashier checklist", status: "Closed", time: "Verified 9:22 AM", tone: "text-[#1D9E75]" }
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-700 font-semibold">{item.title}</span>
                      <span className={`text-xs font-semibold ${item.tone}`}>{item.status}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.time}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl px-4 py-3">
                Mean time to resolution: <span className="text-slate-900">2.1hrs</span> — down from 3.4 days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Six outcomes operations teams can finally control.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OUTCOMES.map((item) => (
              <div key={item} className="border border-slate-200 rounded-2xl p-6">
                <p className="text-lg font-semibold text-slate-900">{item}</p>
                <p className="text-sm text-slate-600 mt-2">
                  Measured weekly across every location and shift.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Operations that run on Lucid <span className="text-[#6357d4]">don't have recurring deviations.</span>
              </h2>
              <p className="text-slate-300 text-lg mt-6">
                They have a system that catches gaps before they become patterns — and closes them before they reach your P&L. The Lighthouse Programme gives you your compliance baseline in 30 days.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white">
                  Request a pilot
                </Button>
                <Button variant="ghost" size="lg" className="h-12 px-6 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-white/10">
                  Talk to us first →
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Live in 48hrs</span>
                <span>No IT dependency</span>
                <span>30-day pilot</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
