import * as React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../Analytics";

const HERO_STATS = [
  { value: "18%", label: "attrition rate (down)" },
  { value: "76", label: "capability score" },
  { value: "12", label: "at-risk employees" },
  { value: "4.2w", label: "avg ramp (↓1.8w)" },
];

const RISK_EMPLOYEES = [
  {
    name: "Riya Menon",
    role: "Store Manager · Mumbai",
    signal: "Exit intent spiked after Week 5",
    badge: "High risk",
    badgeClass: "bg-rose-100 text-rose-700",
  },
  {
    name: "Arjun Patel",
    role: "Shift Lead · Delhi",
    signal: "Capability drop after role change",
    badge: "Watch",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    name: "Meera Iyer",
    role: "Floor Lead · Bangalore",
    signal: "Absence pattern before notice",
    badge: "High risk",
    badgeClass: "bg-rose-100 text-rose-700",
  },
];

const ROLE_CAPABILITY = [
  { role: "Store Manager", score: 82 },
  { role: "Shift Lead", score: 74 },
  { role: "Cashier", score: 61 },
  { role: "Crew", score: 58 },
];

const OUTCOMES = [
  {
    title: "Lower attrition cost",
    body: "Reduce the <strong>3–6x</strong> replacement expense per frontline exit.",
  },
  {
    title: "Protect sales per labor hour",
    body: "See when capability dips before revenue loss shows up.",
  },
  {
    title: "Hold managers accountable",
    body: "Compare execution by manager, not just by store.",
  },
  {
    title: "Improve ramp velocity",
    body: "Keep new hires on track to hit <strong>84%</strong> retention at month 6.",
  },
  {
    title: "Forecast workforce risk",
    body: "Know which cohorts will drop to <strong>41%</strong> if capability stays low.",
  },
  {
    title: "Reduce lost productivity",
    body: "Recover the 30% speed advantage in every new cohort.",
  },
];

const SCALE_OUTCOMES = [
  "Lucid flags them before the resignation.",
  "See capability gaps by role, not just by location.",
  "Prioritize fixes that prevent revenue loss.",
  "Hold leaders to measurable readiness targets.",
];

const RAMP_PROGRESS = [
  { label: "Week 1", value: 40 },
  { label: "Week 2", value: 62 },
  { label: "Week 4", value: 81 },
  { label: "Week 6", value: 94 },
];

const getRetentionWidth = (value: number) => `${value}%`;

/* Shared section padding - centered alignment */
const sp = "max-w-[1200px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 sm:py-14 lg:py-20";

export default function CHRO() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-slate-900">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-4 sm:mb-6">
                CHRO Use Case
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-[var(--font-heading)]">
                Attrition is compounding cost across the frontline.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-4 sm:mt-6 max-w-xl">
                Lucid shows where capability breaks, predicts exit risk early, and cuts ramp time across every new hire wave.
              </p>
              <p className="text-sm sm:text-base text-slate-600 mt-3 sm:mt-4 max-w-xl">
                Stop losing{" "}
                <span className="font-semibold text-slate-900">60%</span> of productivity during churn. Identify cohorts that drop to{" "}
                <span className="font-semibold text-slate-900">41%</span> retention, and protect the{" "}
                <span className="font-semibold text-slate-900">3–6x</span> replacement cost of every exit.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Button
  size="lg"
  onClick={() => {
    trackEvent(
      "Lead",
      "book_demo_click",
      "CTA Button"
    );

    navigate("/contact");
  }}
  className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white w-full sm:w-auto"
>
  Book a Demo
</Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 rounded-xl text-base font-semibold border-slate-300 w-full sm:w-auto"
                >
                  View the 30-day pilot
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
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Capability & retention</p>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">Live workforce pulse</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-bold text-[#6357d4]">76</div>
                  <p className="text-xs text-emerald-600 font-semibold">Capability score</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">Attrition rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    18% <span className="text-emerald-600 text-sm font-semibold">down</span>
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">At risk</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">12 team members</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">Ramp speed</p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">30% faster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Attrition Problem ──────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
                Attrition hits your P&amp;L before it hits your HR dashboard.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                Lucid spots the signals that lead to resignation and flags them while you can still act.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-3 text-slate-700 text-sm sm:text-base">
                <li>Lucid flags them before the resignation.</li>
                <li>See which teams will miss productivity targets.</li>
                <li>Focus retention efforts where cost is highest.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Attrition risk radar</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">Flagged this week</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Updated 9:10 AM</span>
              </div>

              <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                {RISK_EMPLOYEES.map((employee) => (
                  <div key={employee.name} className="rounded-2xl border border-slate-200 p-3 sm:p-4">
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{employee.name}</p>
                        <p className="text-xs text-slate-500 mt-1">{employee.role}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shrink-0 ${employee.badgeClass}`}>
                        {employee.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2 sm:mt-3">{employee.signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Blind Spot ──────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">

            {/* Card first on mobile, left on desktop */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Capability score by role</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">Role readiness</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Live</span>
              </div>
              <div className="mt-5 sm:mt-6 space-y-4">
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
              <div className="mt-5 sm:mt-6 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl px-4 py-3">
                Cashier capability threatens month-end conversion.
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
                Capability blind spots destroy retention and output.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                Lucid turns role readiness into a weekly operating metric tied to attrition risk.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {SCALE_OUTCOMES.map((item) => (
                  <div key={item} className="border border-slate-200 rounded-2xl p-3 sm:p-4 text-slate-700 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evidence ───────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-heading)] mb-8 sm:mb-10">
            Retention drops sharply when capability stays low.
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              { label: "Day 30", high: 95, low: 78 },
              { label: "Day 60", high: 91, low: 62 },
              { label: "Day 90", high: 88, low: 51 },
              { label: "Month 6", high: 84, low: 41 },
            ].map((row) => (
              <div key={row.label} className="border border-slate-200 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600 mb-3 sm:mb-4 gap-1">
                  <span className="font-semibold text-slate-900">{row.label}</span>
                  <span className="text-xs sm:text-sm">High capability vs low capability</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xs text-slate-500 w-20 sm:w-24 shrink-0">High cohort</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full min-w-0">
                      <div
                        className="h-3 rounded-full bg-[#AFA9EC]"
                        style={{ width: getRetentionWidth(row.high) }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 w-10 sm:w-12 shrink-0">{row.high}%</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xs text-slate-500 w-20 sm:w-24 shrink-0">Low cohort</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full min-w-0">
                      <div
                        className="h-3 rounded-full bg-[#F09595]"
                        style={{ width: getRetentionWidth(row.low) }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-rose-600 w-10 sm:w-12 shrink-0">{row.low}%</span>
                    <span className="text-xs text-rose-600 hidden sm:inline">At-risk cohort</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Speed to Productivity ──────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
                Ramp speed determines how fast you recoup hiring cost.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                The current cohort hits productivity in 4.2 weeks,{" "}
                <span className="font-semibold text-slate-900">30%</span> faster than the last cycle.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-3 text-slate-700 text-sm sm:text-base">
                <li>Compare cohort ramp in real time.</li>
                <li>Fix onboarding blockers before Week 2.</li>
                <li>Protect productivity while attrition drops.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">New hire ramp tracker</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">Current cohort</h3>
                </div>
                <span className="text-xs font-semibold text-emerald-600">↓1.8w vs last cohort</span>
              </div>
              <div className="mt-5 sm:mt-6 space-y-4">
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
              <div className="mt-5 sm:mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                <p className="text-sm text-slate-600">
                  Current cohort avg ramp:{" "}
                  <span className="font-semibold text-slate-900">4.2 weeks</span>
                </p>
                <p className="text-xs text-slate-500 mt-2">30% faster productivity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Six Outcomes ───────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-heading)]">
            Six outcomes tied to workforce cost and retention.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {OUTCOMES.map((card) => (
              <div key={card.title} className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{card.title}</h3>
                <p
                  className="text-sm text-slate-600 mt-2 sm:mt-3"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Dark ───────────────────────────────────────────────────── */}
      <section className="bg-[#0f1117] text-white">
        <div className={sp}>
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)]">
              Put a <span className="text-[#6357d4]">30-day pilot</span> against frontline attrition.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4">
              Lucid delivers an attrition risk map and capability plan in four weeks.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Button
  size="lg"
  onClick={() => {
    trackEvent(
      "Lead",
      "Reserve Pilot Click",
      "CHRO Bottom CTA"
    );

    navigate("/contact");
  }}
  className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white w-full sm:w-auto"
>
  Reserve the pilot
</Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}