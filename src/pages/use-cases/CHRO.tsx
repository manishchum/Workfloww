import * as React from "react";
import { Button } from "@/components/ui/button";

const HERO_STATS = [
  { value: "18%", label: "attrition rate (down)" },
  { value: "76", label: "capability score" },
  { value: "12", label: "at-risk employees" },
  { value: "4.2w", label: "avg ramp (↓1.8w)" }
];

const RISK_EMPLOYEES = [
  {
    name: "Riya Menon",
    role: "Store Manager · Mumbai",
    signal: "Exit intent spiked after Week 5",
    badge: "High risk",
    badgeClass: "bg-rose-100 text-rose-700"
  },
  {
    name: "Arjun Patel",
    role: "Shift Lead · Delhi",
    signal: "Capability drop after role change",
    badge: "Watch",
    badgeClass: "bg-amber-100 text-amber-700"
  },
  {
    name: "Meera Iyer",
    role: "Floor Lead · Bangalore",
    signal: "Absence pattern before notice",
    badge: "High risk",
    badgeClass: "bg-rose-100 text-rose-700"
  }
];

const ROLE_CAPABILITY = [
  { role: "Store Manager", score: 82 },
  { role: "Shift Lead", score: 74 },
  { role: "Cashier", score: 61 },
  { role: "Crew", score: 58 }
];

const OUTCOMES = [
  {
    title: "Lower attrition cost",
    body: "Reduce the <strong>3–6x</strong> replacement expense per frontline exit."
  },
  {
    title: "Protect sales per labor hour",
    body: "See when capability dips before revenue loss shows up."
  },
  {
    title: "Hold managers accountable",
    body: "Compare execution by manager, not just by store."
  },
  {
    title: "Improve ramp velocity",
    body: "Keep new hires on track to hit <strong>84%</strong> retention at month 6."
  },
  {
    title: "Forecast workforce risk",
    body: "Know which cohorts will drop to <strong>41%</strong> if capability stays low."
  },
  {
    title: "Reduce lost productivity",
    body: "Recover the 30% speed advantage in every new cohort."
  }
];

const SCALE_OUTCOMES = [
  "Lucid flags them before the resignation.",
  "See capability gaps by role, not just by location.",
  "Prioritize fixes that prevent revenue loss.",
  "Hold leaders to measurable readiness targets."
];

const RAMP_PROGRESS = [
  { label: "Week 1", value: 40 },
  { label: "Week 2", value: 62 },
  { label: "Week 4", value: 81 },
  { label: "Week 6", value: 94 }
];

const getRetentionWidth = (value: number) => `${value}%`;

export default function CHRO() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
                CHRO Use Case
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-[var(--font-heading)]">
                Attrition is compounding cost across the frontline.
              </h1>
              <p className="text-lg text-slate-600 mt-6 max-w-xl">
                Lucid shows where capability breaks, predicts exit risk early, and cuts ramp time across every new hire wave.
              </p>
              <p className="text-base text-slate-600 mt-4 max-w-xl">
                Stop losing <span className="font-semibold text-slate-900">60%</span> of productivity during churn. Identify cohorts that drop to <span className="font-semibold text-slate-900">41%</span> retention, and protect the <span className="font-semibold text-slate-900">3–6x</span> replacement cost of every exit.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white">
                  Book a Demo
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-6 rounded-xl text-base font-semibold border-slate-300">
                  View the 30-day pilot
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {HERO_STATS.map((stat) => (
                  <div key={stat.value} className="border border-slate-200 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Capability & retention</p>
                  <h3 className="text-2xl font-bold mt-2">Live workforce pulse</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#6357d4]">76</div>
                  <p className="text-xs text-emerald-600 font-semibold">Capability score</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">Attrition rate</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">18% <span className="text-emerald-600 text-sm font-semibold">down</span></p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">At risk</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">12 team members</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">Ramp speed</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">30% faster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attrition Problem */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
                Attrition hits your P&L before it hits your HR dashboard.
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-xl">
                Lucid spots the signals that lead to resignation and flags them while you can still act.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Lucid flags them before the resignation.</li>
                <li>See which teams will miss productivity targets.</li>
                <li>Focus retention efforts where cost is highest.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Attrition risk radar</p>
                  <h3 className="text-xl font-bold mt-2">Flagged this week</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Updated 9:10 AM</span>
              </div>

              <div className="mt-6 space-y-4">
                {RISK_EMPLOYEES.map((employee) => (
                  <div key={employee.name} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{employee.name}</p>
                        <p className="text-xs text-slate-500 mt-1">{employee.role}</p>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${employee.badgeClass}`}>
                        {employee.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-3">{employee.signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Blind Spot */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-start">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Capability score by role</p>
                  <h3 className="text-xl font-bold mt-2">Role readiness</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Live</span>
              </div>
              <div className="mt-6 space-y-4">
                {ROLE_CAPABILITY.map((role) => (
                  <div key={role.role}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{role.role}</span>
                      <span className="font-semibold text-slate-900">{role.score}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mt-2">
                      <div
                        className="h-2 rounded-full bg-[#6357d4]"
                        style={{ width: `${role.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl px-4 py-3">
                Cashier capability threatens month-end conversion.
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
                Capability blind spots destroy retention and output.
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-xl">
                Lucid turns role readiness into a weekly operating metric tied to attrition risk.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {SCALE_OUTCOMES.map((item) => (
                  <div key={item} className="border border-slate-200 rounded-2xl p-4 text-slate-700 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-heading)] mb-10">
            Retention drops sharply when capability stays low.
          </h2>
          <div className="space-y-6">
            {[
              { label: "Day 30", high: 95, low: 78 },
              { label: "Day 60", high: 91, low: 62 },
              { label: "Day 90", high: 88, low: 51 },
              { label: "Month 6", high: 84, low: 41 }
            ].map((row) => (
              <div key={row.label} className="border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span className="font-semibold text-slate-900">{row.label}</span>
                  <span>High capability vs low capability</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500 w-24">High cohort</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full">
                      <div
                        className="h-3 rounded-full bg-[#AFA9EC]"
                        style={{ width: getRetentionWidth(row.high) }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 w-12">{row.high}%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500 w-24">Low cohort</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full">
                      <div
                        className="h-3 rounded-full bg-[#F09595]"
                        style={{ width: getRetentionWidth(row.low) }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-rose-600 w-12">{row.low}%</span>
                    <span className="text-xs text-rose-600">At-risk cohort</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed to Productivity */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
                Ramp speed determines how fast you recoup hiring cost.
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-xl">
                The current cohort hits productivity in 4.2 weeks, <span className="font-semibold text-slate-900">30%</span> faster than the last cycle.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Compare cohort ramp in real time.</li>
                <li>Fix onboarding blockers before Week 2.</li>
                <li>Protect productivity while attrition drops.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">New hire ramp tracker</p>
                  <h3 className="text-xl font-bold mt-2">Current cohort</h3>
                </div>
                <span className="text-xs font-semibold text-emerald-600">↓1.8w vs last cohort</span>
              </div>
              <div className="mt-6 space-y-4">
                {RAMP_PROGRESS.map((step) => (
                  <div key={step.label}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{step.label}</span>
                      <span className="font-semibold text-slate-900">{step.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mt-2">
                      <div
                        className="h-2 rounded-full bg-[#6357d4]"
                        style={{ width: `${step.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">Current cohort avg ramp: <span className="font-semibold text-slate-900">4.2 weeks</span></p>
                <p className="text-xs text-slate-500 mt-2">30% faster productivity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Outcomes */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
            Six outcomes tied to workforce cost and retention.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {OUTCOMES.map((card) => (
              <div key={card.title} className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p
                  className="text-sm text-slate-600 mt-3"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Dark */}
      <section className="bg-[#0f1117] text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold font-[var(--font-heading)]">
              Put a <span className="text-[#6357d4]">30-day pilot</span> against frontline attrition.
            </h2>
            <p className="text-lg text-slate-300 mt-4">
              Lucid delivers an attrition risk map and capability plan in four weeks.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white">
                Reserve the pilot
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 rounded-xl text-base font-semibold border-slate-600 text-white hover:bg-white/5"
              >
                Speak with strategy
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
