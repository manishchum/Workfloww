import * as React from "react";
import { LayoutGrid, LineChart, Star, User } from "lucide-react";

const TAGS = [
  "FMCG beverages",
  "Personal care",
  "Foods & snacking",
  "Home care",
  "Baby & nutrition",
  "OTC pharma"
];

const WATERFALL_STEPS = [
  {
    title: "Reps briefed",
    sub: "total field force",
    value: "100%",
    width: "100%",
    color: "#a78bfa",
    drop: "↓ 22% didn't open · 53 reps"
  },
  {
    title: "Brief opened",
    sub: "read WhatsApp sprint",
    value: "78%",
    width: "78%",
    color: "#5b4ef5",
    drop: "↓ 19% failed comprehension · 45 reps"
  },
  {
    title: "Scheme understood",
    sub: "passed check",
    value: "59%",
    width: "59%",
    color: "#f97316",
    drop: "↓ 18% not actively selling · 44 reps"
  },
  {
    title: "Actively selling",
    sub: "confirmed beat",
    value: "41%",
    width: "41%",
    color: "#e8412a",
    drop: null
  }
];

const PROBLEM_FIX_ROWS = [
  {
    eyebrow: "SCHEME LEAKAGE",
    problemTitle: "Briefed ≠ Selling",
    fixTitle: "Execution Waterfall Visibility",
    roiLabel: "Scheme offtake",
    roiValue: "+100% Coverage",
    fixCopy: "Every rep's status tracked — briefed, opened, comprehended, actively selling. NSM sees the waterfall by Day 1 of the scheme, not after the review call."
  },
  {
    eyebrow: "TERRITORY BLINDNESS",
    problemTitle: "Critical Territories Hidden in Averages",
    fixTitle: "Territory Readiness Scorecard",
    roiLabel: "Coverage efficiency",
    roiValue: "Zero Blind Territories",
    fixCopy: "Field readiness score by territory, updated weekly. Critical territories flagged automatically. NSM and ZSM alerted — not after the review, before it."
  },
  {
    eyebrow: "COMPREHENSION GAP",
    problemTitle: "Reps Who Can't Pitch the Scheme",
    fixTitle: "Targeted Remediation Sprint",
    roiLabel: "Pitch conversion",
    roiValue: "↑ Outlet Conversion Rate",
    fixCopy: "Reps who fail comprehension receive a 3-minute reinforcement sprint on WhatsApp — same day. Comprehension re-verified before they hit their next outlet."
  },
  {
    eyebrow: "BEAT EXECUTION DRIFT",
    problemTitle: "Beat Checklist That No One Updates",
    fixTitle: "Real-Time Beat Compliance",
    roiLabel: "Field accuracy",
    roiValue: "↑ Beat Compliance Rate",
    fixCopy: "Scheme pitch confirmation added to beat checklist automatically on launch day. Coverage confirmed at outlet level, not inferred from rep self-report."
  },
  {
    eyebrow: "NEW REP RAMP RISK",
    problemTitle: "Freshers in the Field on Launch Week",
    fixTitle: "Role-Based Launch Readiness",
    roiLabel: "Ramp speed",
    roiValue: "↓ Fresher Drop-off",
    fixCopy: "Freshers receive role-calibrated scheme briefs with objection handling scripts. Readiness score by rep seniority, visible to ZSM before launch week begins."
  }
];

const METRICS = [
  {
    label: "National Field Score",
    value: "71",
    color: "#fbbf24",
    sub: "↓ 5 from last scheme"
  },
  {
    label: "Actively Selling",
    value: "41%",
    color: "#e8412a",
    sub: "142 reps not converting"
  },
  {
    label: "Scheme Comprehension",
    value: "59%",
    color: "#f97316",
    sub: "45 reps failed check"
  },
  {
    label: "Critical Territories",
    value: "2",
    color: "#e8412a",
    sub: "West <60 · Central <70"
  }
];

const TERRITORIES = [
  { name: "West (Raj + Guj)", score: 52, reps: "48 reps", status: "Critical", tone: "s-crit" },
  { name: "Central (MP + CG)", score: 69, reps: "36 reps", status: "At risk", tone: "s-risk" },
  { name: "North (UP + Haryana)", score: 76, reps: "52 reps", status: "At risk", tone: "s-risk" },
  { name: "North East", score: 88, reps: "28 reps", status: "Strong", tone: "s-ready" },
  { name: "East (WB + Bihar)", score: 83, reps: "38 reps", status: "Strong", tone: "s-ready" },
  { name: "West South", score: 87, reps: "30 reps", status: "Strong", tone: "s-ready" },
  { name: "South East (TN + KL)", score: 91, reps: "32 reps", status: "Strong", tone: "s-ready" },
  { name: "South (AP + KA)", score: 71, reps: "16 reps", status: "At risk", tone: "s-risk" }
];

const PERSONAS = [
  {
    icon: LayoutGrid,
    title: "NSM / Sales Director",
    desc: "Scheme execution waterfall, national. Critical territories by Day 1. No review call needed."
  },
  {
    icon: LineChart,
    title: "ZSM / RSM",
    desc: "Territory readiness score weekly. Underperforming reps flagged before Friday review."
  },
  {
    icon: User,
    title: "ASM / Field Manager",
    desc: "Rep-level comprehension scores. Remediation sprint deployed to non-performing reps instantly."
  },
  {
    icon: Star,
    title: "Trade Marketing",
    desc: "Scheme comprehension rate vs. offtake correlation. Proof of execution for every campaign."
  }
];

const getToneColor = (score: number) => {
  if (score < 60) return "#e8412a";
  if (score < 80) return "#fbbf24";
  return "#4ade80";
};

export default function FMCG() {
  React.useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lucid-fmcg">
      <style>{`
        :root {
          --accent: #5b4ef5;
          --accent-light: #ede9ff;
          --accent-mid: #7b6ef8;
          --ink: #0f0e17;
          --ink-2: #3a3850;
          --ink-3: #7a7891;
          --surface: #ffffff;
          --surface-2: #f5f4f9;
          --dark-card: #0e0c1f;
          --danger: #e8412a;
          --success: #1a9e68;
          --warn: #d97706;
        }
        .lucid-fmcg {
          font-family: "DM Sans", system-ui, sans-serif;
          color: var(--ink);
          background: var(--surface);
        }
        .section {
          padding: 96px 24px;
        }
        .section.surface {
          background: var(--surface-2);
        }
        .container {
          max-width: 1180px;
          margin: 0 auto;
        }
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.55s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: var(--accent-light);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--accent);
        }
        .eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--accent);
        }
        .btn-primary {
          background: var(--accent);
          color: white;
          border: none;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 600;
          box-shadow: 0 12px 30px rgba(91, 78, 245, 0.25);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(91, 78, 245, 0.35);
        }
        .btn-ghost {
          background: transparent;
          color: var(--ink);
          border: 1px solid rgba(91, 78, 245, 0.25);
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
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          align-items: center;
        }
        .hero-title {
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 20px 0;
        }
        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }
        .tag-pill {
          background: var(--surface-2);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          color: var(--ink-3);
        }
        .mini-card {
          border-radius: 20px;
          background: linear-gradient(180deg, #1a1534, #f5f4f9 55%);
          padding: 18px;
          box-shadow: 0 24px 50px rgba(17, 12, 46, 0.15);
        }
        .mini-card-inner {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(91, 78, 245, 0.15);
        }
        .mini-header {
          background: var(--dark-card);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          background: rgba(26, 158, 104, 0.15);
          color: #1a9e68;
          padding: 4px 8px;
          border-radius: 999px;
        }
        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 rgba(34, 197, 94, 0.6);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
          70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .waterfall {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .waterfall-row {
          display: grid;
          grid-template-columns: 1.4fr 2.4fr 0.6fr;
          gap: 12px;
          align-items: center;
          font-size: 12px;
        }
        .waterfall-bar {
          height: 8px;
          border-radius: 4px;
          background: rgba(15, 14, 23, 0.08);
          overflow: hidden;
        }
        .waterfall-bar span {
          display: block;
          height: 100%;
          border-radius: 4px;
        }
        .drop-label {
          font-size: 11px;
          color: #f87171;
          padding-left: 12px;
        }
        .drop-label::before {
          content: "";
          display: block;
          border-bottom: 1px dashed rgba(248, 113, 113, 0.6);
          margin: 8px 0 6px;
        }
        .insight-strip {
          background: var(--accent-light);
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 13px;
          color: var(--ink-2);
          margin-top: 14px;
        }
        .problem-grid {
          display: grid;
          gap: 18px;
        }
        .problem-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .problem-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 18px;
          border-left: 3px solid var(--danger);
          box-shadow: 0 8px 20px rgba(15, 14, 23, 0.04);
        }
        .problem-eyebrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          color: var(--danger);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .problem-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--danger);
        }
        .problem-card h4 {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 700;
        }
        .fix-card {
          background: var(--dark-card);
          color: white;
          border-radius: 16px;
          padding: 18px;
          position: relative;
        }
        .fix-card::after {
          content: "";
          position: absolute;
          top: 16px;
          right: 16px;
          width: 28px;
          height: 28px;
          border-radius: 10px;
          background: rgba(91, 78, 245, 0.2);
          box-shadow: inset 0 0 0 1px rgba(91, 78, 245, 0.4);
        }
        .fix-eyebrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          color: var(--accent-mid);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .fix-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-mid);
        }
        .fix-card h4 {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 700;
        }
        .roi {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }
        .roi strong {
          color: var(--accent-mid);
          font-weight: 700;
        }
        .dashboard {
          background: var(--dark-card);
          color: white;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 80px rgba(91, 78, 245, 0.1);
          border: 1px solid rgba(91, 78, 245, 0.25);
        }
        .metrics {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 20px;
        }
        .metric {
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          padding: 14px;
        }
        .metric-value {
          font-size: 28px;
          font-weight: 700;
        }
        .metric-bar {
          height: 3px;
          border-radius: 999px;
          margin-top: 8px;
          background: rgba(255,255,255,0.15);
          overflow: hidden;
        }
        .metric-bar span {
          display: block;
          height: 100%;
        }
        .dash-body {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .territory-table {
          background: rgba(255,255,255,0.04);
          padding: 14px;
          border-radius: 12px;
        }
        .territory-row {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr 0.8fr 0.9fr;
          gap: 10px;
          font-size: 12px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          align-items: center;
        }
        .territory-row:last-child { border-bottom: none; }
        .mini-track {
          width: 80px;
          height: 4px;
          background: rgba(255,255,255,0.12);
          border-radius: 999px;
          overflow: hidden;
        }
        .mini-track span {
          display: block;
          height: 100%;
        }
        .status-pill {
          font-size: 10px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .s-ready { background: rgba(26,158,104,0.12); color: #1a9e68; }
        .s-risk { background: rgba(217,119,6,0.12); color: #b45309; }
        .s-crit { background: rgba(232,65,42,0.12); color: #e8412a; }
        .waterfall-full {
          background: rgba(255,255,255,0.04);
          padding: 14px;
          border-radius: 12px;
        }
        .waterfall-full .waterfall-row {
          grid-template-columns: 1.2fr 2.4fr 0.6fr;
          font-size: 12px;
        }
        .callouts {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }
        .callout-red {
          background: rgba(232,65,42,0.08);
          border: 1px solid rgba(232,65,42,0.2);
          border-radius: 8px;
          padding: 12px;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
        }
        .callout-red strong {
          color: rgba(255,255,255,0.85);
        }
        .callout-red .value {
          font-size: 22px;
          font-weight: 700;
          color: #f87171;
        }
        .callout-purple {
          background: rgba(91,78,245,0.1);
          border: 1px solid rgba(91,78,245,0.2);
          border-radius: 8px;
          padding: 12px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        .callout-purple a { color: #a78bfa; text-decoration: none; }
        .insight {
          margin-top: 16px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(91, 78, 245, 0.15);
          color: rgba(255,255,255,0.7);
          font-size: 13px;
        }
        .insight strong { color: #a78bfa; font-weight: 500; }
        .persona-grid {
          display: grid;
          grid-template-columns: 200px repeat(4, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .persona-card {
          background: var(--surface-2);
          border: 1px solid rgba(91, 78, 245, 0.1);
          border-radius: 14px;
          padding: 16px;
        }
        .icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--accent-light);
          display: grid;
          place-items: center;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .cta {
          background: var(--dark-card);
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(91, 78, 245, 0.45);
          box-shadow: 0 24px 60px rgba(91, 78, 245, 0.25);
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          align-items: center;
        }
        .cta h3 {
          margin: 0 0 12px;
          color: white;
        }
        .cta p { color: #bcb8d9; }
        .cta .trust { color: #8f8aa9; font-size: 12px; margin-top: 16px; }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(91, 78, 245, 0.1);
          padding: 24px;
          font-size: 12px;
          color: var(--ink-3);
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .mini-card { display: none; }
          .problem-row { grid-template-columns: 1fr; }
          .metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .dash-body { grid-template-columns: 1fr; }
          .persona-grid { grid-template-columns: 1fr 1fr; }
          .cta { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section" id="hero">
        <div className="container hero-grid">
          <div className="reveal" data-reveal>
            <span className="eyebrow">FMCG</span>
            <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight">
              Scheme leaking<br />while your<br />
              <span style={{ color: "var(--accent)" }}>NSM is on a call.</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-xl">
              Your scheme is running. Your reps are in the field. But 41% of them aren't actively selling it. <span className="font-semibold text-slate-900">Right now, you have no way to know which territories are burning and which are executing.</span>
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <button className="btn-primary">Request a pilot</button>
              <button className="btn-ghost">See how it works →</button>
            </div>
            <div className="tag-row">
              {TAGS.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mini-card reveal" data-reveal>
            <div className="mini-card-inner">
              <div className="mini-header">
                <div>
                  <div style={{ fontWeight: 600 }}>National Field Readiness · Oct Diwali Scheme</div>
                  <small>8 territories · 240 field reps · 4,800+ outlets · FMCG beverages</small>
                </div>
                <span className="live-badge"><span className="live-dot" />Live</span>
              </div>
              <div style={{ padding: 16 }}>
                <div className="waterfall">
                  {WATERFALL_STEPS.map((step) => (
                    <div key={step.title}>
                      <div className="waterfall-row">
                        <div>
                          <div style={{ fontWeight: 600 }}>{step.title}</div>
                          <div style={{ color: "#7a7891" }}>{step.sub}</div>
                        </div>
                        <div className="waterfall-bar">
                          <span style={{ width: step.width, background: step.color }} />
                        </div>
                        <div style={{ fontWeight: 700, color: step.color }}>{step.value}</div>
                      </div>
                      {step.drop && <div className="drop-label">{step.drop}</div>}
                    </div>
                  ))}
                </div>
                <div className="insight-strip">
                  💡 <strong>142 reps</strong> understand the scheme but aren't actively selling it. That is your single biggest offtake opportunity this week — and it costs nothing to fix.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface" id="problem">
        <div className="container reveal" data-reveal>
          <div style={{ marginBottom: 32 }}>
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
              Where Lucid Plays
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              The problem. The fix.
            </h2>
            <p className="text-lg text-slate-600 mt-4 max-w-xl">
              Every scheme leak has a territory signature. Lucid closes the loop with execution proof and correction speed.
            </p>
          </div>
          <div className="problem-grid">
            {PROBLEM_FIX_ROWS.map((row) => (
              <div key={row.problemTitle} className="problem-row reveal" data-reveal>
                <div className="problem-card">
                  <div className="problem-eyebrow">{row.eyebrow}</div>
                  <h4>{row.problemTitle}</h4>
                </div>
                <div className="fix-card">
                  <div className="fix-eyebrow">Fix</div>
                  <h4>{row.fixTitle}</h4>
                  <p><strong>{row.fixCopy}</strong></p>
                  <div className="roi">
                    <span>{row.roiLabel}</span>
                    <strong>{row.roiValue}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="dashboard">
        <div className="container reveal" data-reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
                What Lucid Shows You
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Your field force. Every Monday morning.
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-xl">
              Not activity reports. Where your scheme is landing — and where it's leaking.
            </p>
          </div>

          <div className="dashboard reveal" data-reveal style={{ marginTop: 24 }}>
            <div className="mini-header" style={{ borderRadius: 12 }}>
              <div>
                <div style={{ fontWeight: 600 }}>National Field Readiness · Oct Diwali Scheme · Week of 28 Oct</div>
                <small>8 territories · 240 field reps · 4,800+ outlets · FMCG beverages</small>
              </div>
              <span className="live-badge"><span className="live-dot" />Live · Updated 2 hrs ago</span>
            </div>

            <div className="metrics">
              {METRICS.map((metric) => (
                <div key={metric.label} className="metric">
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1.2px", color: "#b9b4d9" }}>{metric.label}</div>
                  <div className="metric-value" style={{ color: metric.color }}>{metric.value}</div>
                  <div style={{ fontSize: 12, color: "#c4c0db" }}>{metric.sub}</div>
                  <div className="metric-bar"><span style={{ width: "60%", background: metric.color }} /></div>
                </div>
              ))}
            </div>

            <div className="dash-body">
              <div className="territory-table">
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Territory readiness by territory</div>
                {TERRITORIES.map((row) => (
                  <div key={row.name} className="territory-row">
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "999px", background: getToneColor(row.score) }} />
                      <span>{row.name}</span>
                    </div>
                    <div className="mini-track"><span style={{ width: `${row.score}%`, background: getToneColor(row.score) }} /></div>
                    <span style={{ fontWeight: 700 }}>{row.score}</span>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "center" }}>
                      <span style={{ color: "#c4c0db" }}>{row.reps}</span>
                      <span className={`status-pill ${row.tone}`}>{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="waterfall-full">
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Scheme execution waterfall</div>
                {WATERFALL_STEPS.map((step) => (
                  <div key={step.title} style={{ marginBottom: 12 }}>
                    <div className="waterfall-row">
                      <div>
                        <div style={{ fontWeight: 600 }}>{step.title}</div>
                        <div style={{ color: "#7a7891" }}>{step.sub}</div>
                      </div>
                      <div className="waterfall-bar" style={{ height: 10 }}>
                        <span style={{ width: step.width, background: step.color }} />
                      </div>
                      <div style={{ fontWeight: 700, color: step.color }}>{step.value}</div>
                    </div>
                    {step.drop && <div className="drop-label">{step.drop}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="callouts">
              <div className="callout-red">
                <div className="value">142 reps</div>
                <p><strong>understand the scheme but are not actively selling it.</strong> That is your single biggest offtake opportunity this week — and it costs nothing to fix.</p>
              </div>
              <div className="callout-purple">
                <strong>Lucid deploys a 3-minute reinforcement sprint</strong> to those 142 reps now. Beat checklist updated to require scheme pitch confirmation at every outlet. NSM sees the change in coverage by Thursday.
              </div>
              <div className="insight">
                💡 An NSM reading this doesn't need a review call to know what's wrong. <strong>West territory is critical. 142 reps understand the scheme but aren't selling it. Both are fixable before Friday.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface" id="who">
        <div className="container reveal" data-reveal>
          <div className="persona-grid">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
                Who Uses Lucid
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Field leaders who need scheme execution proof.
              </h2>
            </div>
            {PERSONAS.map((persona) => {
              const Icon = persona.icon;
              return (
                <div key={persona.title} className="persona-card">
                  <div className="icon-box"><Icon size={18} /></div>
                  <div style={{ fontWeight: 600 }}>{persona.title}</div>
                  <p style={{ color: "var(--ink-3)", fontSize: 13 }}>{persona.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta reveal" data-reveal>
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                See your field force<br /><span style={{ color: "#a78bfa" }}>before Friday's review.</span>
              </h3>
              <p className="mt-4">Live in 48 hours. Territory readiness baseline in 72. Your NSM has the full execution waterfall for every ongoing scheme by Day 7.</p>
              <div className="trust">No IT dependency · WhatsApp-native · 30-day pilot</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button className="btn-primary">Request a pilot</button>
              <button className="btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>Talk to us first →</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div style={{ fontWeight: 800, color: "var(--ink)" }}>Lucid</div>
        <div>© 2026 Lucid. All rights reserved.</div>
      </footer>
    </div>
  );
}
