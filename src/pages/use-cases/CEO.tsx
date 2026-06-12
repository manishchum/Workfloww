import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../Analytics";

const LOCATIONS = [
  { name: "Mumbai North", execution: 91, revenue: "₹2.8L", conversion: 38, csat: 4.7 },
  { name: "Delhi South", execution: 87, revenue: "₹2.6L", conversion: 35, csat: 4.5 },
  { name: "Bangalore West", execution: 72, revenue: "₹2.1L", conversion: 28, csat: 4.1 },
  { name: "Chennai Central", execution: 58, revenue: "₹1.7L", conversion: 22, csat: 3.6 },
  { name: "Pune East", execution: 61, revenue: "₹1.8L", conversion: 24, csat: 3.8 },
];

const HERO_STATS = [
  { value: "50–200", label: "locations under one CEO" },
  { value: "48hrs", label: "to first store live" },
  { value: "<30%", label: "execution drift after a launch" },
];

const OUTCOME_CARDS = [
  {
    title: "Reduce revenue leakage",
    body: "See where pricing, availability, and compliance slip before the month closes.",
  },
  {
    title: "Lift conversion in weak zones",
    body: "Pinpoint which stores fall below the <strong>20–30%</strong> uplift target.",
  },
  {
    title: "Shrink launch delays",
    body: "Track whether promotions land inside the promised <strong>48hrs</strong>.",
  },
  {
    title: "Contain labor overspend",
    body: "Spot stores burning hours without execution gains.",
  },
  {
    title: "Protect customer loyalty",
    body: "Catch CSAT slippage before it drives churn.",
  },
  {
    title: "Recover missed capacity",
    body: "Expose bottlenecks that keep high performers below plan.",
  },
];

const SCALE_OUTCOMES = [
  "See where your strategy is dissolving by location.",
  "Know which zones will miss plan this week.",
  "Expose execution gaps by shift, not just by store.",
  "Align every manager to the same scoreboard.",
];

const getExecutionColor = (value: number) => {
  if (value >= 85) return "bg-emerald-500";
  if (value >= 70) return "bg-amber-500";
  return "bg-rose-500";
};

/* Shared section padding — centered alignment */
const sectionPadding = "max-w-[1200px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 sm:py-10 lg:py-16";

export default function CEO() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-slate-900">
      <Helmet>
        <title>CEO Use Case – Execution Visibility Across All Locations | Lucid</title>
        <meta name="description" content="Lucid gives CEOs a live execution view across 50–200 locations. See where strategy breaks down, which stores are at risk, and lift conversion in weak zones — in 48 hours." />
        <link rel="canonical" href="https://www.workfloww.ai/ceo" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className={sectionPadding}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

            {/* Left copy */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-4 sm:mb-6">
                <span className="eyebrow">CEO Use Case</span>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Execution gaps are eroding{" "}
                <span className="text-[#6357d4]">store performance</span> every week.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-4 sm:mt-6 max-w-xl">
                Lucid gives CEOs a live view of where strategy breaks down across 50–200 locations, then shows exactly what to fix.
              </p>
              <p className="text-sm sm:text-base text-slate-600 mt-3 sm:mt-4 max-w-xl">
                See execution in{" "}
                <span className="font-semibold text-slate-900">48hrs</span>, prioritize the{" "}
                <span className="font-semibold text-slate-900">&lt;30%</span> of stores dragging the network, and lift the weakest conversion bands by{" "}
                <span className="font-semibold text-slate-900">20–30%</span>.
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {HERO_STATS.map((stat) => (
                  <div key={stat.value} className="border border-slate-200 rounded-2xl p-4">
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right dashboard card */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Live execution</p>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">National Score</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-bold text-[#6357d4]">74</div>
                  <p className="text-xs text-emerald-600 font-semibold">+2 WoW</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 space-y-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.name}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{loc.name}</span>
                      <span className="font-semibold text-slate-900">{loc.execution}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mt-2">
                      <div
                        className={`h-2 rounded-full ${getExecutionColor(loc.execution)}`}
                        style={{ width: `${loc.execution}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 bg-rose-50 border border-rose-100 text-rose-700 text-sm font-semibold rounded-xl px-4 py-3">
                4 locations at risk this week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visibility Problem ─────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sectionPadding}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                You can't fix what you can't see in the weekly cadence.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                Traditional reports arrive after the damage. Lucid shows where execution drops before revenue does.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-3 text-slate-700 text-sm sm:text-base">
                <li>See where your strategy is dissolving.</li>
                <li>Know which locations need an intervention now.</li>
                <li>Align every regional leader on one truth.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Weekly Digest</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">Execution alerts</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Mon 9:15 AM</span>
              </div>

              <div className="mt-5 sm:mt-6 space-y-4">
                {LOCATIONS.slice(0, 3).map((loc) => (
                  <div key={loc.name} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-slate-900">{loc.name}</p>
                      <p className="text-slate-500">Execution {loc.execution}%</p>
                    </div>
                    <div className="w-16 sm:w-20 h-2 bg-slate-100 rounded-full">
                      <div
                        className={`h-2 rounded-full ${getExecutionColor(loc.execution)}`}
                        style={{ width: `${loc.execution}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3">
                <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Chennai Central dropped 6 points in 72 hours.
                </div>
                <div className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  Pune East is below plan on conversion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scale Problem ──────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sectionPadding}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                Scaling past 50 stores without execution visibility is a tax on growth.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl">
                Lucid isolates weak execution bands so you stop applying blanket fixes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                {SCALE_OUTCOMES.map((item) => (
                  <div key={item} className="border border-slate-200 rounded-2xl p-4 text-slate-700 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-5 sm:p-6 mt-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">National executive view</p>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">Network execution</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-[#6357d4]">74</div>
                  <p className="text-xs text-emerald-600 font-semibold">+2 WoW</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 space-y-3">
                {LOCATIONS.map((loc) => (
                  <div key={loc.name} className="flex items-center gap-3">
                    <span className="text-sm text-slate-600 w-28 sm:w-36 shrink-0">{loc.name}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full min-w-0">
                      <div
                        className={`h-2 rounded-full ${getExecutionColor(loc.execution)}`}
                        style={{ width: `${loc.execution}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 shrink-0">{loc.execution}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 bg-slate-100 text-slate-600 text-sm font-semibold rounded-xl px-4 py-3">
                4 locations at risk this week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evidence Table ─────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sectionPadding}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10">
            Evidence of execution gaps across the network.
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full border-collapse min-w-[520px]">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.2em] text-slate-500">
                  <th className="pb-4 pr-4">Location</th>
                  <th className="pb-4 pr-4">Execution</th>
                  <th className="pb-4 pr-4">Revenue / Day</th>
                  <th className="pb-4 pr-4">Conversion</th>
                  <th className="pb-4">CSAT</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {LOCATIONS.map((loc) => (
                  <tr key={loc.name} className="border-t border-slate-200">
                    <td className="py-4 sm:py-5 font-semibold text-slate-900 pr-4 whitespace-nowrap">{loc.name}</td>
                    <td className="py-4 sm:py-5 pr-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-20 sm:w-32 h-2 bg-slate-100 rounded-full">
                          <div
                            className={`h-2 rounded-full ${getExecutionColor(loc.execution)}`}
                            style={{ width: `${loc.execution}%` }}
                          />
                        </div>
                        <span className="font-semibold text-slate-900 whitespace-nowrap">{loc.execution}%</span>
                      </div>
                    </td>
                    <td className="py-4 sm:py-5 text-slate-700 pr-4 whitespace-nowrap">{loc.revenue}</td>
                    <td className="py-4 sm:py-5 text-slate-700 pr-4">{loc.conversion}%</td>
                    <td className="py-4 sm:py-5 text-slate-700">{loc.csat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Six Outcomes ───────────────────────────────────────────────── */}
      <section className="border-b border-slate-200">
        <div className={sectionPadding}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Six outcomes tied directly to P&amp;L performance.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {OUTCOME_CARDS.map((card) => (
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
        <div className={sectionPadding}>
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Put a <span className="text-[#6357d4]">30-day pilot</span> against your execution gap.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4">
              Lucid delivers a CEO-ready execution baseline and a fix list in four weeks.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Button
  size="lg"
  onClick={() => {
    trackEvent(
      "Lead",
      "Reserve Pilot Click",
      "CEO Bottom CTA"
    );

    navigate("/contact");
  }}
  className="h-12 px-6 rounded-xl text-base font-semibold bg-[#6357d4] hover:bg-[#5146c7] text-white w-full sm:w-auto"
>
  Reserve the pilot
</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 text-xs uppercase tracking-[0.2em] text-slate-400">
              <div className="border border-slate-700 rounded-full px-4 py-2 text-center">ISO-ready data</div>
              <div className="border border-slate-700 rounded-full px-4 py-2 text-center">WhatsApp native</div>
              <div className="border border-slate-700 rounded-full px-4 py-2 text-center">50–200 locations</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}