import * as React from "react";

const PURPLE = "#6357d4";
const GREEN = "#1D9E75";
const AMBER = "#EF9F27";
const ORANGE = "#D85A30";
const RED = "#A32D2D";
const DARK = "#0f1117";

const HERO_LINES = [
  { line: "Line A", shifts: [92, 89, 87] },
  { line: "Line B", shifts: [88, 78, 78] },
  { line: "Line C", shifts: [69, 81, 44], highlight: true },
  { line: "Line D", shifts: [85, 80, 77] },
  { line: "Line E", shifts: [83, 80, 71] },
];

const PROBLEM_FIX_PAIRS = [
  {
    label: "SOP Execution Gap",
    problemTitle: "The SOP on the Wall Is Not the SOP in Practice",
    problemBody: "Documented. Laminated. Posted. Consistently ignored — not from defiance, but because no one verified the operator actually understood it before they touched the line.",
    fixTitle: "SOP on the Operator's Phone. Before the Shift.",
    fixBody: "SOP converted to a 4-minute WhatsApp knowledge sprint. Comprehension verified before the operator touches the line. Updated SOPs cascade immediately.",
    roi: "Quality Consistency",
    roiValue: "↓ SOP Deviation Rate",
  },
  {
    label: "Shift Handover Risk",
    problemTitle: "What Gets Lost Between Shifts Becomes a Quality Problem by Morning",
    problemBody: "The outgoing shift knew about a process adjustment. A near-miss. A machine setting. None reached the incoming team — because the handover was 90 seconds and a WhatsApp message.",
    fixTitle: "Structured Handover. Verified. Logged. Auditable.",
    fixBody: "Outgoing shift logs in Lucid before sign-off. Incoming receives a structured brief — acknowledged and verified before they start. Full audit trail.",
    roi: "Shift Continuity",
    roiValue: "↓ First-Hour Incidents",
  },
  {
    label: "Quality Deviation Loop",
    problemTitle: "The Corrective Action Was Filed. The Deviation Came Back.",
    problemBody: "Same finding, same line, same shift. Paperwork completed. Knowledge gap never closed.",
    fixTitle: "Root Cause Closed. Not Just Documented.",
    fixBody: "Deviation mapped to a knowledge gap. Sprint deployed to the specific line and shift. Comprehension verified. Recurrence tracked.",
    roi: "Audit Readiness",
    roiValue: "Zero Repeat Findings",
  },
  {
    label: "GMP / Regulatory Risk",
    problemTitle: "The Audit Is in 30 Days. Your Compliance Records Are Paper-Based.",
    problemBody: "FDA. FSSAI. ISO audit. Inspector asks: can you demonstrate every operator on Line B was briefed on the updated GMP procedure last month? Your answer involves a filing cabinet.",
    fixTitle: "Audit-Ready in Seconds. Not Days.",
    fixBody: "Every SOP delivery, comprehension check, corrective action — logged with timestamp and operator identity. Audit-ready evidence on demand.",
    roi: "Regulatory Compliance",
    roiValue: "↓ Audit Risk",
  },
  {
    label: "Safety Incident",
    problemTitle: "A Safety Incident Happened. There Is No Proof the Operator Was Briefed.",
    problemBody: "Investigation begins. Was the operator briefed? Supervisor says yes. No record. The liability is yours.",
    fixTitle: '"Yes" Becomes a Timestamped, Verified Record.',
    fixBody: "Safety protocol delivered digitally. Comprehension confirmed before workstation access. Digital record: who received it, when, what they confirmed.",
    roi: "Safety & Liability",
    roiValue: "↓ LTIFR Risk",
  },
];

const HEATMAP = [
  { line: "Line A", values: [91, 88, 79, 93, 90, 82, 94, 91, 88, 92, 89, 87] },
  { line: "Line B", values: [88, 81, 64, 87, 85, 88, 90, 78, 81, 88, 78, 78] },
  { line: "Line C", values: [86, 80, 48, 88, 82, 51, 79, 79, 46, 69, 81, 44], highlight: true },
  { line: "Line D", values: [76, 58, 62, 79, 65, 88, 82, 74, 72, 85, 80, 77] },
  { line: "Line E", values: [83, 80, 71, 82, 78, 69, 84, 81, 73, 83, 80, 71] },
];

const ROOT_CAUSE = [
  { label: "SOP not understood by operator", value: 44, color: PURPLE },
  { label: "SOP known but not followed", value: 28, color: PURPLE },
  { label: "SOP updated — not communicated", value: 18, color: PURPLE },
  { label: "Equipment / process related", value: 10, color: "#6b7280" },
];

const CHIP_LIST = [
  "Auto & EV", "Pharma manufacturing", "Food processing",
  "Chemicals", "Textiles", "Building materials", "Consumer goods mfg",
];

const WHO_USES = [
  { role: "Plant Head", detail: "Line-by-line SOP adherence, shift pattern, deviation root cause, weekly." },
  { role: "Quality Head", detail: "Deviation trend by line, root cause breakdown, audit-ready evidence on demand." },
  { role: "Manufacturing Head", detail: "Cross-plant execution view, which plants are improving, which are stuck." },
  { role: "EHS Head", detail: "Safety protocol delivery verified, incident investigation ready, LTIFR signal visible." },
];

const getHeatColor = (value) => {
  if (value >= 85) return GREEN;
  if (value >= 75) return AMBER;
  if (value >= 60) return ORANGE;
  return RED;
};

export default function ManufacturingIndustrial() {
  return (
    <div className="lucid-mfg">
      <style>{`
        :root {
          --accent: #6357d4;
          --accent-light: #ede9ff;
          --accent-mid: #7b6ef8;
          --ink: #0f0e17;
          --ink-2: #3a3850;
          --ink-3: #7a7891;
          --surface: #ffffff;
          --surface-2: #f5f4f9;
          --dark-card: #0f1117;
          --danger: #D85A30;
        }
        .lucid-mfg {
          font-family: "DM Sans", system-ui, sans-serif;
          color: var(--ink);
          background: var(--surface);
        }
        .section { padding: 80px 24px; }
        .section#hero { padding: 20px 24px; }
        .container { max-width: 1180px; margin: 0 auto; }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          align-items: center;
        }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; background: var(--accent-light);
          border-radius: 999px; font-size: 12px; font-weight: 600;
          letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent);
        }
        .eyebrow::before {
          content: ""; width: 6px; height: 6px;
          border-radius: 999px; background: var(--accent);
        }
        .hero-title { font-weight: 800; letter-spacing: -0.02em; margin: 20px 0; color: var(--ink); }
        .hero-copy { font-size: 17px; color: var(--ink-2); line-height: 1.65; }
        .btn-primary {
          background: var(--accent); color: white; border: none;
          padding: 12px 22px; border-radius: 999px; font-weight: 600;
          box-shadow: 0 12px 30px rgba(91,78,245,0.25); cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 32px rgba(91,78,245,0.35); }
        .btn-ghost {
          background: transparent; color: var(--ink);
          border: 1px solid rgba(91,78,245,0.25);
          padding: 12px 22px; border-radius: 999px; font-weight: 600; cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .btn-ghost:hover { color: var(--accent); border-color: var(--accent); }
        .tag-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .tag-pill { background: var(--surface-2); padding: 6px 12px; border-radius: 999px; font-size: 12px; color: var(--ink-3); }

        /* ── Flip cards ── */
        .flip-grid-top {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        .flip-grid-bottom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .flip-grid-bottom .flip-card:first-child {
          grid-column: 1 / 2;
          margin-left: calc(50% + 12px);
        }
        .flip-grid-bottom .flip-card:nth-child(2) {
          grid-column: 2 / 3;
          margin-right: calc(50% + 12px);
        }
        .flip-bottom-wrap {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 0;
        }
        .flip-bottom-wrap .flip-card {
          flex: 0 0 calc(33.333% - 12px);
          max-width: calc(33.333% - 12px);
        }
        .flip-card { height: 280px; perspective: 1000px; cursor: pointer; }
        .flip-inner {
          position: relative; width: 100%; height: 100%;
          transition: transform 0.65s cubic-bezier(0.4,0.2,0.2,1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner { transform: rotateY(180deg); }
        .flip-front, .flip-back {
          position: absolute; inset: 0; border-radius: 16px; padding: 24px;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
        }
        .flip-front {
          background: #ffffff;
          border: 1px solid rgba(216, 90, 48, 0.2);
          border-left: 4px solid var(--danger);
          box-shadow: 0 8px 24px rgba(15,14,23,0.06);
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .flip-back {
          background: var(--dark-card);
          border: 1px solid rgba(99,87,212,0.3);
          transform: rotateY(180deg);
          display: flex; flex-direction: column; justify-content: space-between;
          box-shadow: 0 16px 40px rgba(99,87,212,0.2);
        }
        .flip-front-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; text-transform: uppercase; letter-spacing: 1.4px;
          color: var(--danger); font-weight: 700;
        }
        .flip-front-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: var(--danger); flex-shrink: 0;
        }
        .flip-front h4 {
          font-size: 20px; font-weight: 800; color: var(--ink);
          margin: 12px 0 0; line-height: 1.25;
        }
        .flip-hint {
          font-size: 11px; color: var(--ink-3);
          display: flex; align-items: center; gap: 4px;
          margin-top: auto; padding-top: 16px;
        }
        .flip-back-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; text-transform: uppercase; letter-spacing: 1.4px;
          color: var(--accent-mid); font-weight: 700;
        }
        .flip-back-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent-mid); flex-shrink: 0;
        }
        .flip-back h4 { font-size: 16px; font-weight: 700; color: white; margin: 10px 0 8px; line-height: 1.3; }
        .flip-back p { font-size: 13px; color: #c4c0db; line-height: 1.55; flex: 1; }
        .flip-roi {
          margin-top: 14px; padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex; justify-content: space-between;
          font-size: 12px; color: rgba(255,255,255,0.5);
        }
        .flip-roi strong { color: var(--accent-mid); font-weight: 700; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .flip-grid-top { grid-template-columns: repeat(2,1fr); }
          .flip-bottom-wrap { flex-wrap: wrap; }
          .flip-bottom-wrap .flip-card { flex: 0 0 calc(50% - 12px); max-width: calc(50% - 12px); }
        }
        @media (max-width: 600px) {
          .flip-grid-top { grid-template-columns: 1fr; }
          .flip-bottom-wrap .flip-card { flex: 0 0 100%; max-width: 100%; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="section" id="hero" style={{ paddingTop: "80px", marginTop: "80px" }}>
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Manufacturing & Industrial</span>
            <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight">
              Line C. Night shift.<br />
              Same deviation.<br />
              <span className="text-[#6357d4]">Eight weeks straight.</span>
            </h1>
            <p className="hero-copy text-lg mt-6 max-w-2xl">
              The SOP exists. The operator has been briefed. The corrective action was filed in March. A deviation that repeats is not a people problem. It is a system that has never actually fixed it.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <button className="btn-primary">Request a pilot</button>
              <button className="btn-ghost">See how it works →</button>
            </div>
            <div className="tag-row">
              {CHIP_LIST.map((chip) => <span key={chip} className="tag-pill">{chip}</span>)}
            </div>
          </div>

          <div className="rounded-3xl p-6 text-white shadow-2xl" style={{ background: DARK }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mini Plant View</p>
                <p className="text-sm text-slate-300">5 lines · 3 shifts</p>
              </div>
              <span className="text-xs text-slate-400">Live</span>
            </div>
            <div className="space-y-3">
              {HERO_LINES.map((line) => (
                <div
                  key={line.line}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 ${line.highlight ? "border border-[#A32D2D]" : "border border-transparent"}`}
                >
                  <span className="text-sm text-slate-200 w-20">{line.line}</span>
                  <div className="grid grid-cols-3 gap-2 flex-1">
                    {line.shifts.map((value, index) => (
                      <div
                        key={`${line.line}-${index}`}
                        className="rounded-lg px-2 py-1 text-center text-xs font-semibold"
                        style={{ background: getHeatColor(value) }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#A32D2D]/40 bg-[#2a0f12] p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Line C Night shift — score 44 for 4 consecutive weeks.</p>
              <p className="text-slate-300 mt-2">Morning and afternoon at 86–89. The gap is the night shift. → Deploy targeted SOP sprint to Line C Night operators</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / FIX — flip cards 3 + 2 centered ── */}
      <section className="section" id="problem" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent)" }}>
              Where Lucid Plays
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: "var(--ink)" }}>
              The Problem. The Fix.
            </h2>
            <p className="text-lg mt-4 max-w-xl" style={{ color: "var(--ink-2)" }}>
              Every operational leak has a quality signature. Lucid closes the loop with execution proof and correction speed.
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="flip-grid-top">
            {PROBLEM_FIX_PAIRS.slice(0, 3).map((pair) => (
              <div key={pair.label} className="flip-card">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div>
                      <div className="flip-front-eyebrow">{pair.label}</div>
                      <h4>{pair.problemTitle}</h4>
                    </div>
                    <div className="flip-hint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 16V4m0 0L3 8m4-4 4 4"/><path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
                      </svg>
                      Hover to see the fix
                    </div>
                  </div>
                  <div className="flip-back">
                    <div>
                      <div className="flip-back-eyebrow">Fix · {pair.label}</div>
                      <h4>{pair.fixTitle}</h4>
                      <p>{pair.fixBody}</p>
                    </div>
                    <div className="flip-roi">
                      <span>{pair.roi}</span>
                      <strong>{pair.roiValue}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="flip-bottom-wrap">
            {PROBLEM_FIX_PAIRS.slice(3).map((pair) => (
              <div key={pair.label} className="flip-card">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div>
                      <div className="flip-front-eyebrow">{pair.label}</div>
                      <h4>{pair.problemTitle}</h4>
                    </div>
                    <div className="flip-hint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 16V4m0 0L3 8m4-4 4 4"/><path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
                      </svg>
                      Hover to see the fix
                    </div>
                  </div>
                  <div className="flip-back">
                    <div>
                      <div className="flip-back-eyebrow">Fix · {pair.label}</div>
                      <h4>{pair.fixTitle}</h4>
                      <p>{pair.fixBody}</p>
                    </div>
                    <div className="flip-roi">
                      <span>{pair.roi}</span>
                      <strong>{pair.roiValue}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANT DASHBOARD ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">What Lucid Shows You</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-4">Your plant. Every Monday morning.</h2>
            <p className="text-slate-300 mt-4">
              Not a quality report filed three days after the week ends. The pattern — visible in real time, before it becomes a finding.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-800 bg-[#111827] p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Plant Execution · SOP Adherence & Quality Deviations · Week of 28 Oct</p>
                <p className="text-xs text-slate-500 mt-2">5 production lines · 3 shifts · 84 operators · Auto components plant</p>
              </div>
              <span className="text-xs text-emerald-400">Live · Updated 1 hr ago</span>
            </div>

            <div className="mt-8 grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-8">
              {/* Heatmap */}
              <div>
                <p className="text-sm text-slate-300 mb-4">SOP Adherence Heatmap</p>
                <div className="space-y-3">
                  {HEATMAP.map((row) => (
                    <div
                      key={row.line}
                      className={`grid grid-cols-[90px_repeat(12,minmax(0,1fr))] gap-1 items-center ${row.highlight ? "rounded-lg p-2" : ""}`}
                      style={row.highlight ? { border: `2px solid ${RED}` } : undefined}
                    >
                      <span className="text-xs text-slate-300">{row.line}</span>
                      {row.values.map((value, idx) => (
                        <div
                          key={`${row.line}-${idx}`}
                          className="h-8 rounded-md text-[10px] font-semibold flex items-center justify-center"
                          style={{ background: getHeatColor(value) }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: GREEN }} /> &gt;85 Strong</span>
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: AMBER }} /> 75–85 Good</span>
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: ORANGE }} /> 60–75 At risk</span>
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: RED }} /> &lt;60 Critical</span>
                </div>
                <div className="mt-6 rounded-2xl border border-[#A32D2D]/40 bg-[#2a0f12] p-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">Line C · Night shift — scores 44–51 for 4 consecutive weeks while morning and afternoon run at 86–89.</p>
                  <p className="text-slate-300 mt-2">Same operators rotating. The gap is the night shift. → Deploy targeted SOP sprint to Line C Night operators</p>
                </div>
              </div>

              {/* Right panel */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800 bg-[#0b0f16] p-5">
                  <p className="text-sm text-slate-300 mb-4">Quality Deviations Per Week · Line C · By Shift</p>
                  <div className="h-40 w-full">
                    <svg viewBox="0 0 320 140" className="w-full h-full">
                      <polyline fill="none" stroke="#A32D2D" strokeWidth="3" points="10,40 70,38 130,36 190,35 250,34 310,80" />
                      <polyline fill="none" stroke="#1D9E75" strokeWidth="2" strokeDasharray="6 6" points="10,110 70,112 130,108 190,111 250,109 310,108" />
                      <line x1="250" y1="20" x2="250" y2="120" stroke="#6357d4" strokeDasharray="4 4" />
                      <text x="258" y="24" fill="#a5b4fc" fontSize="10">Lucid deployed</text>
                    </svg>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: RED }} /> Line C Night</span>
                    <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: GREEN }} /> Line A Morning</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-[#0b0f16] p-5">
                  <p className="text-sm text-slate-300 mb-4">Root Cause Breakdown · Line C Night Deviations</p>
                  <div className="space-y-4">
                    {ROOT_CAUSE.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                          <div className="h-2 rounded-full" style={{ width: `${item.value}%`, background: item.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-[#6357d4]/40 bg-[#1b1430] p-3 text-xs text-[#c4b8ff]">
                    90% of deviations are knowledge gaps — not equipment. Lucid addresses all three purple bars directly.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-[#0b0f16] p-5 text-sm text-slate-300">
              A Plant Head reading this doesn't need a quality review meeting to know what to do.{" "}
              <span className="text-[#6357d4]">Line C Night shift. 4 weeks straight. 90% knowledge gap. One targeted sprint fixes it before next Monday.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO USES ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Who uses Lucid in Manufacturing & Industrial</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_USES.map((item) => (
              <div key={item.role} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="container mx-auto px-6 text-white">
          <div className="rounded-3xl border border-slate-800 bg-[#0b0f16] p-10 md:p-14">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Line C. Night shift.<br />
              <span className="text-[#6357d4]">Fixed before next Monday.</span>
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl">
              Live in 48 hours. SOP adherence by line and shift in 72. Your Plant Head has this view for every line by Day 7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full px-6 py-3 font-semibold text-white" style={{ background: PURPLE }}>
                Request a pilot
              </button>
              <button className="rounded-full px-6 py-3 font-semibold border border-slate-600 text-slate-300 hover:text-white">
                Talk to us first →
              </button>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
              No IT dependency · 30-day pilot · No commitment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}