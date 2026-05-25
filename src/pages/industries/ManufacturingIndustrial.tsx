import * as React from "react";
import SectionWrapper from "../../components/SectionWrapper";

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
    problemBody:
      "Documented. Laminated. Posted. Consistently ignored, not from defiance, but because no one verified the operator actually understood it before they touched the line.",
    fixTitle: "SOP on the Operator's Phone. Before the Shift.",
    fixBody:
      "SOP converted to a 4-minute WhatsApp knowledge sprint. Comprehension verified before the operator touches the line. Updated SOPs cascade immediately.",
    roi: "Quality Consistency",
    roiValue: "↓ SOP Deviation Rate",
  },
  {
    label: "Shift Handover Risk",
    problemTitle: "What Gets Lost Between Shifts Becomes a Quality Problem by Morning",
    problemBody:
      "The outgoing shift knew about a process adjustment. A near-miss. A machine setting. None reached the incoming team because the handover was 90 seconds and a WhatsApp message.",
    fixTitle: "Structured Handover. Verified. Logged. Auditable.",
    fixBody:
      "Outgoing shift logs in Lucid before sign-off. Incoming receives a structured brief, acknowledged and verified before they start. Full audit trail.",
    roi: "Shift Continuity",
    roiValue: "↓ First-Hour Incidents",
  },
  {
    label: "Quality Deviation Loop",
    problemTitle: "The Corrective Action Was Filed. The Deviation Came Back.",
    problemBody:
      "Same finding, same line, same shift. Paperwork completed. Knowledge gap never closed.",
    fixTitle: "Root Cause Closed. Not Just Documented.",
    fixBody:
      "Deviation mapped to a knowledge gap. Sprint deployed to the specific line and shift. Comprehension verified. Recurrence tracked.",
    roi: "Audit Readiness",
    roiValue: "Zero Repeat Findings",
  },
  {
    label: "GMP / Regulatory Risk",
    problemTitle: "The Audit Is in 30 Days. Your Compliance Records Are Paper-Based.",
    problemBody:
      "FDA. FSSAI. ISO audit. Inspector asks: can you demonstrate every operator on Line B was briefed on the updated GMP procedure last month? Your answer involves a filing cabinet.",
    fixTitle: "Audit-Ready in Seconds. Not Days.",
    fixBody:
      "Every SOP delivery, comprehension check, corrective action logged with timestamp and operator identity. Audit-ready evidence on demand.",
    roi: "Regulatory Compliance",
    roiValue: "↓ Audit Risk",
  },
  {
    label: "Safety Incident",
    problemTitle: "A Safety Incident Happened. There Is No Proof the Operator Was Briefed.",
    problemBody:
      "Investigation begins. Was the operator briefed? Supervisor says yes. No record. The liability is yours.",
    fixTitle: '"Yes" Becomes a Timestamped, Verified Record.',
    fixBody:
      "Safety protocol delivered digitally. Comprehension confirmed before workstation access. Digital record: who received it, when, what they confirmed.",
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
  { label: "SOP updated, not communicated", value: 18, color: PURPLE },
  { label: "Equipment / process related", value: 10, color: "#6b7280" },
];

const CHIP_LIST = [
  "Auto & EV",
  "Pharma manufacturing",
  "Food processing",
  "Chemicals",
  "Textiles",
  "Building materials",
  "Consumer goods mfg",
];

const WHO_USES = [
  { role: "Plant Head", detail: "Line-by-line SOP adherence, shift pattern, deviation root cause, weekly." },
  { role: "Quality Head", detail: "Deviation trend by line, root cause breakdown, audit-ready evidence on demand." },
  { role: "Manufacturing Head", detail: "Cross-plant execution view, which plants are improving, which are stuck." },
  { role: "EHS Head", detail: "Safety protocol delivery verified, incident investigation ready, LTIFR signal visible." },
];

const getHeatColor = (value: number) => {
  if (value >= 85) return GREEN;
  if (value >= 75) return AMBER;
  if (value >= 60) return ORANGE;
  return RED;
};

type ProblemFixPair = (typeof PROBLEM_FIX_PAIRS)[number];

function FlipCard({ pair }: { pair: ProblemFixPair }) {
  return (
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <div>
            <div className="flip-front-eyebrow">{pair.label}</div>
            <h4>{pair.problemTitle}</h4>
          </div>
          <div className="flip-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 16V4m0 0L3 8m4-4 4 4" />
              <path d="M17 8v12m0 0 4-4m-4 4-4-4" />
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
  );
}

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
          overflow-x: hidden;
        }

        .lucid-mfg * {
          box-sizing: border-box;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
          gap: 56px;
          align-items: center;
          width: 100%;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: var(--accent-light);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--accent);
          flex-shrink: 0;
        }

        .hero-title {
          font-weight: 800;
          letter-spacing: 0;
          margin: 20px 0;
          color: var(--ink);
          max-width: 560px;
        }

        .hero-copy {
          font-size: 17px;
          color: var(--ink-2);
          line-height: 1.65;
          max-width: 540px;
        }

        .btn-primary {
          background: var(--accent);
          color: white;
          border: none;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 600;
          box-shadow: 0 12px 30px rgba(91,78,245,0.25);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(91,78,245,0.35);
        }

        .btn-ghost {
          background: transparent;
          color: var(--ink);
          border: 1px solid rgba(91,78,245,0.25);
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .btn-ghost:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
          max-width: 540px;
        }

        .tag-pill {
          background: var(--surface-2);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          color: var(--ink-3);
        }

        .mini-plant {
          background: ${DARK};
          color: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 24px 50px rgba(17,12,46,0.18);
          width: 100%;
          max-width: 520px;
          justify-self: end;
        }

        .mini-plant-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .mini-plant-kicker {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #94a3b8;
          margin: 0;
        }

        .mini-plant-sub {
          font-size: 14px;
          color: #cbd5e1;
          margin: 4px 0 0;
        }

        .mini-line-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border: 1px solid transparent;
          border-radius: 12px;
          padding: 8px 12px;
        }

        .mini-line-row.highlight {
          border-color: ${RED};
        }

        .mini-line-label {
          width: 80px;
          font-size: 14px;
          color: #e2e8f0;
          flex-shrink: 0;
        }

        .mini-shift-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          flex: 1;
        }

        .mini-shift-cell {
          border-radius: 8px;
          padding: 4px 8px;
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          color: white;
        }

        .mini-alert {
          margin-top: 24px;
          border-radius: 16px;
          border: 1px solid rgba(163,45,45,0.45);
          background: #2a0f12;
          padding: 16px;
          font-size: 14px;
          color: #e2e8f0;
        }

        .section-heading {
          margin-bottom: 48px;
        }

        .section-kicker {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 24px;
          color: var(--accent);
        }

        .section-title {
          color: var(--ink);
          margin: 0;
        }

        .section-copy {
          color: var(--ink-2);
          margin-top: 16px;
          max-width: 560px;
        }

        .flip-grid-top {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 24px;
          width: 100%;
        }

        .flip-bottom-wrap {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          width: 100%;
          max-width: calc((100% - 48px) / 3 * 2 + 24px);
          margin: 0 auto;
        }

        .flip-card {
          height: 280px;
          perspective: 1000px;
          cursor: pointer;
          min-width: 0;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.65s cubic-bezier(0.4,0.2,0.2,1);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 24px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-front {
          background: #ffffff;
          border: 1px solid rgba(216,90,48,0.2);
          border-left: 4px solid var(--danger);
          box-shadow: 0 8px 24px rgba(15,14,23,0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .flip-back {
          background: var(--dark-card);
          border: 1px solid rgba(99,87,212,0.3);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 16px 40px rgba(99,87,212,0.2);
        }

        .flip-front-eyebrow,
        .flip-back-eyebrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-weight: 700;
        }

        .flip-front-eyebrow {
          color: var(--danger);
        }

        .flip-back-eyebrow {
          color: var(--accent-mid);
        }

        .flip-front-eyebrow::before,
        .flip-back-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .flip-front-eyebrow::before {
          background: var(--danger);
        }

        .flip-back-eyebrow::before {
          background: var(--accent-mid);
        }

        .flip-front h4 {
          font-size: 20px;
          font-weight: 800;
          color: var(--ink);
          margin: 12px 0 0;
          line-height: 1.25;
        }

        .flip-back h4 {
          font-size: 16px;
          font-weight: 700;
          color: white;
          margin: 10px 0 8px;
          line-height: 1.3;
        }

        .flip-back p {
          font-size: 13px;
          color: #c4c0db;
          line-height: 1.55;
          flex: 1;
        }

        .flip-hint {
          font-size: 11px;
          color: var(--ink-3);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: auto;
          padding-top: 16px;
        }

        .flip-roi {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }

        .flip-roi strong {
          color: var(--accent-mid);
          font-weight: 700;
          text-align: right;
        }

        .dark-section {
          background: ${DARK};
          color: white;
        }

        .plant-dashboard {
          margin-top: 40px;
          border-radius: 24px;
          border: 1px solid #1e293b;
          background: #111827;
          padding: 32px;
          width: 100%;
        }

        .dashboard-header {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .dashboard-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 32px;
        }

        .heatmap-row {
          display: grid;
          grid-template-columns: 90px repeat(12, minmax(0, 1fr));
          gap: 4px;
          align-items: center;
        }

        .heatmap-row.highlight {
          border: 2px solid ${RED};
          border-radius: 12px;
          padding: 8px;
        }

        .heatmap-cell {
          height: 32px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .legend {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 12px;
          color: #94a3b8;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .dashboard-alert {
          margin-top: 24px;
          border-radius: 16px;
          border: 1px solid rgba(163,45,45,0.45);
          background: #2a0f12;
          padding: 16px;
          font-size: 14px;
          color: #e2e8f0;
        }

        .side-card {
          border-radius: 16px;
          border: 1px solid #1e293b;
          background: #0b0f16;
          padding: 20px;
        }

        .root-row {
          margin-top: 16px;
        }

        .root-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 12px;
          color: #94a3b8;
        }

        .root-track {
          margin-top: 8px;
          height: 8px;
          width: 100%;
          border-radius: 999px;
          background: #1e293b;
          overflow: hidden;
        }

        .root-fill {
          height: 100%;
          border-radius: 999px;
        }

        .dashboard-note {
          margin-top: 32px;
          border-radius: 16px;
          border: 1px solid #1e293b;
          background: #0b0f16;
          padding: 20px;
          font-size: 14px;
          color: #cbd5e1;
        }

        .who-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          width: 100%;
        }

        .who-card {
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          background: white;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(15,14,23,0.04);
        }

        .cta-card {
          border-radius: 24px;
          border: 1px solid #1e293b;
          background: #0b0f16;
          padding: 48px;
          color: white;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .mini-plant {
            max-width: 100%;
            justify-self: stretch;
          }

          .flip-grid-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .flip-bottom-wrap {
            max-width: 100%;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .who-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .flip-grid-top,
          .flip-bottom-wrap,
          .who-grid {
            grid-template-columns: 1fr;
          }

          .mini-plant {
            display: none;
          }

          .heatmap-row {
            grid-template-columns: 72px repeat(12, minmax(24px, 1fr));
            overflow-x: auto;
          }

          .plant-dashboard,
          .cta-card {
            padding: 24px;
          }

          .flip-card {
            height: 300px;
          }
        }
      `}</style>

      <SectionWrapper
        id="hero"
        maxWidth={1100}
        padding={{ mobile: "8rem 1.25rem 5.5rem", desktop: "4rem 2rem 3rem" }}
      >
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Manufacturing & Industrial</span>
            <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight">
              Line C. Night shift.<br />
              Same deviation.<br />
              <span className="text-[#6357d4]">Eight weeks straight.</span>
            </h1>
            <p className="hero-copy text-lg mt-6">
              The SOP exists. The operator has been briefed. The corrective action was filed in March. A deviation that repeats is not a people problem. It is a system that has never actually fixed it.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <button className="btn-primary">Request a pilot</button>
              <button className="btn-ghost">See how it works →</button>
            </div>
            <div className="tag-row">
              {CHIP_LIST.map((chip) => (
                <span key={chip} className="tag-pill">{chip}</span>
              ))}
            </div>
          </div>

          <div className="mini-plant">
            <div className="mini-plant-header">
              <div>
                <p className="mini-plant-kicker">Mini Plant View</p>
                <p className="mini-plant-sub">5 lines · 3 shifts</p>
              </div>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>Live</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HERO_LINES.map((line) => (
                <div key={line.line} className={`mini-line-row ${line.highlight ? "highlight" : ""}`}>
                  <span className="mini-line-label">{line.line}</span>
                  <div className="mini-shift-grid">
                    {line.shifts.map((value, index) => (
                      <div
                        key={`${line.line}-${index}`}
                        className="mini-shift-cell"
                        style={{ background: getHeatColor(value) }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mini-alert">
              <p style={{ fontWeight: 700, color: "white", margin: 0 }}>
                Line C Night shift, score 44 for 4 consecutive weeks.
              </p>
              <p style={{ color: "#cbd5e1", margin: "8px 0 0" }}>
                Morning and afternoon at 86-89. The gap is the night shift. Deploy targeted SOP sprint to Line C Night operators.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="problem" background="var(--surface-2)" maxWidth={1100}>
        <div>
          <div className="section-heading">
            <p className="section-kicker">Where Lucid Plays</p>
            <h2 className="section-title text-3xl md:text-4xl font-extrabold leading-tight">
              The Problem. The Fix.
            </h2>
            <p className="section-copy text-lg">
              Every operational leak has a quality signature. Lucid closes the loop with execution proof and correction speed.
            </p>
          </div>

          <div className="flip-grid-top">
            {PROBLEM_FIX_PAIRS.slice(0, 3).map((pair) => (
              <FlipCard key={pair.label} pair={pair} />
            ))}
          </div>

          <div className="flip-bottom-wrap">
            {PROBLEM_FIX_PAIRS.slice(3).map((pair) => (
              <FlipCard key={pair.label} pair={pair} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="dashboard"
        background={DARK}
        maxWidth={1100}
        padding={{ mobile: "3rem 1.25rem", desktop: "4rem 2rem" }}
      >
        <div className="dark-section">
          <div style={{ maxWidth: 640 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">What Lucid Shows You</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mt-4">
              Your plant. Every Monday morning.
            </h2>
            <p className="text-slate-300 mt-4">
              Not a quality report filed three days after the week ends. The pattern, visible in real time, before it becomes a finding.
            </p>
          </div>

          <div className="plant-dashboard">
            <div className="dashboard-header">
              <div>
                <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>
                  Plant Execution · SOP Adherence & Quality Deviations · Week of 28 Oct
                </p>
                <p style={{ fontSize: 12, color: "#64748b", margin: "8px 0 0" }}>
                  5 production lines · 3 shifts · 84 operators · Auto components plant
                </p>
              </div>
              <span style={{ fontSize: 12, color: "#34d399" }}>Live · Updated 1 hr ago</span>
            </div>

            <div className="dashboard-grid">
              <div>
                <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 16 }}>SOP Adherence Heatmap</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {HEATMAP.map((row) => (
                    <div key={row.line} className={`heatmap-row ${row.highlight ? "highlight" : ""}`}>
                      <span style={{ fontSize: 12, color: "#cbd5e1" }}>{row.line}</span>
                      {row.values.map((value, index) => (
                        <div
                          key={`${row.line}-${index}`}
                          className="heatmap-cell"
                          style={{ background: getHeatColor(value) }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="legend">
                  <span className="legend-item"><span className="legend-dot" style={{ background: GREEN }} /> &gt;85 Strong</span>
                  <span className="legend-item"><span className="legend-dot" style={{ background: AMBER }} /> 75-85 Good</span>
                  <span className="legend-item"><span className="legend-dot" style={{ background: ORANGE }} /> 60-75 At risk</span>
                  <span className="legend-item"><span className="legend-dot" style={{ background: RED }} /> &lt;60 Critical</span>
                </div>

                <div className="dashboard-alert">
                  <p style={{ fontWeight: 700, color: "white", margin: 0 }}>
                    Line C · Night shift, scores 44-51 for 4 consecutive weeks while morning and afternoon run at 86-89.
                  </p>
                  <p style={{ color: "#cbd5e1", margin: "8px 0 0" }}>
                    Same operators rotating. The gap is the night shift. Deploy targeted SOP sprint to Line C Night operators.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="side-card">
                  <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 16 }}>
                    Quality Deviations Per Week · Line C · By Shift
                  </p>
                  <div style={{ height: 160, width: "100%" }}>
                    <svg viewBox="0 0 320 140" style={{ width: "100%", height: "100%" }}>
                      <polyline fill="none" stroke="#A32D2D" strokeWidth="3" points="10,40 70,38 130,36 190,35 250,34 310,80" />
                      <polyline fill="none" stroke="#1D9E75" strokeWidth="2" strokeDasharray="6 6" points="10,110 70,112 130,108 190,111 250,109 310,108" />
                      <line x1="250" y1="20" x2="250" y2="120" stroke="#6357d4" strokeDasharray="4 4" />
                      <text x="258" y="24" fill="#a5b4fc" fontSize="10">Lucid deployed</text>
                    </svg>
                  </div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12, color: "#94a3b8", marginTop: 8 }}>
                    <span className="legend-item"><span className="legend-dot" style={{ background: RED }} /> Line C Night</span>
                    <span className="legend-item"><span className="legend-dot" style={{ background: GREEN }} /> Line A Morning</span>
                  </div>
                </div>

                <div className="side-card">
                  <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 16 }}>
                    Root Cause Breakdown · Line C Night Deviations
                  </p>
                  {ROOT_CAUSE.map((item) => (
                    <div key={item.label} className="root-row">
                      <div className="root-label">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="root-track">
                        <div className="root-fill" style={{ width: `${item.value}%`, background: item.color }} />
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, borderRadius: 12, border: "1px solid rgba(99,87,212,0.45)", background: "#1b1430", padding: 12, fontSize: 12, color: "#c4b8ff" }}>
                    90% of deviations are knowledge gaps, not equipment. Lucid addresses all three purple bars directly.
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-note">
              A Plant Head reading this doesn't need a quality review meeting to know what to do.{" "}
              <span style={{ color: "#8b7cff" }}>
                Line C Night shift. 4 weeks straight. 90% knowledge gap. One targeted sprint fixes it before next Monday.
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="who" maxWidth={1100}>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Who uses Lucid in Manufacturing & Industrial
          </p>
          <div className="who-grid" style={{ marginTop: 32 }}>
            {WHO_USES.map((item) => (
              <div key={item.role} className="who-card">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 14, lineHeight: 1.65 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="mfg-cta"
        background={DARK}
        maxWidth={1100}
        padding={{ mobile: "3rem 1.25rem", desktop: "4rem 2rem" }}
      >
        <div className="cta-card">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Line C. Night shift.<br />
            <span className="text-[#6357d4]">Fixed before next Monday.</span>
          </h2>
          <p className="text-slate-300 mt-4" style={{ maxWidth: 640 }}>
            Live in 48 hours. SOP adherence by line and shift in 72. Your Plant Head has this view for every line by Day 7.
          </p>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <button className="btn-primary">Request a pilot</button>
            <button className="btn-ghost" style={{ color: "#cbd5e1", borderColor: "#475569" }}>
              Talk to us first →
            </button>
          </div>
          <div style={{ marginTop: 24, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.3em", color: "#94a3b8" }}>
            No IT dependency · 30-day pilot · No commitment
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}