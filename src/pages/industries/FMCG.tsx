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
    drop: "↓ 22% didn't open · 53 reps",
    count: 240
  },
  {
    title: "Brief opened",
    sub: "read WhatsApp sprint",
    value: "78%",
    width: "78%",
    color: "#5b4ef5",
    drop: "↓ 19% failed comprehension · 45 reps",
    count: 187
  },
  {
    title: "Scheme understood",
    sub: "passed check",
    value: "59%",
    width: "59%",
    color: "#f97316",
    drop: "↓ 18% not actively selling · 44 reps",
    count: 142
  },
  {
    title: "Actively selling",
    sub: "confirmed beat",
    value: "41%",
    width: "41%",
    color: "#e8412a",
    drop: null,
    count: 98
  }
];

const PROBLEM_FIX_ROWS = [
  {
    label: "SCHEME LEAKAGE",
    problemTitle: "Briefed ≠ Selling",
    fixTitle: "Execution Waterfall Visibility",
    fixBody: "Every rep's status tracked — briefed, opened, comprehended, actively selling. NSM sees the waterfall by Day 1 of the scheme, not after the review call.",
    roi: "Scheme offtake",
    roiValue: "+100% Coverage"
  },
  {
    label: "TERRITORY BLINDNESS",
    problemTitle: "Critical Territories Hidden in Averages",
    fixTitle: "Territory Readiness Scorecard",
    fixBody: "Field readiness score by territory, updated weekly. Critical territories flagged automatically. NSM and ZSM alerted — not after the review, before it.",
    roi: "Coverage efficiency",
    roiValue: "Zero Blind Territories"
  },
  {
    label: "COMPREHENSION GAP",
    problemTitle: "Reps Who Can't Pitch the Scheme",
    fixTitle: "Targeted Remediation Sprint",
    fixBody: "Reps who fail comprehension receive a 3-minute reinforcement sprint on WhatsApp — same day. Comprehension re-verified before they hit their next outlet.",
    roi: "Pitch conversion",
    roiValue: "↑ Outlet Conversion Rate"
  },
  {
    label: "BEAT EXECUTION DRIFT",
    problemTitle: "Beat Checklist That No One Updates",
    fixTitle: "Real-Time Beat Compliance",
    fixBody: "Scheme pitch confirmation added to beat checklist automatically on launch day. Coverage confirmed at outlet level, not inferred from rep self-report.",
    roi: "Field accuracy",
    roiValue: "↑ Beat Compliance Rate"
  },
  {
    label: "NEW REP RAMP RISK",
    problemTitle: "Freshers in the Field on Launch Week",
    fixTitle: "Role-Based Launch Readiness",
    fixBody: "Freshers receive role-calibrated scheme briefs with objection handling scripts. Readiness score by rep seniority, visible to ZSM before launch week begins.",
    roi: "Ramp speed",
    roiValue: "↓ Fresher Drop-off"
  }
];

const METRICS = [
  { label: "National Field Score", value: "71", color: "#fbbf24", sub: "↓ 5 from last scheme" },
  { label: "Actively Selling", value: "41%", color: "#e8412a", sub: "142 reps not converting" },
  { label: "Scheme Comprehension", value: "59%", color: "#f97316", sub: "45 reps failed check" },
  { label: "Critical Territories", value: "2", color: "#e8412a", sub: "West <60 · Central <70" }
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
  { icon: LayoutGrid, title: "NSM / Sales Director", desc: "Scheme execution waterfall, national. Critical territories by Day 1. No review call needed." },
  { icon: LineChart, title: "ZSM / RSM", desc: "Territory readiness score weekly. Underperforming reps flagged before Friday review." },
  { icon: User, title: "ASM / Field Manager", desc: "Rep-level comprehension scores. Remediation sprint deployed to non-performing reps instantly." },
  { icon: Star, title: "Trade Marketing", desc: "Scheme comprehension rate vs. offtake correlation. Proof of execution for every campaign." }
];

const getToneColor = (score) => {
  if (score < 60) return "#e8412a";
  if (score < 80) return "#fbbf24";
  return "#4ade80";
};

// SVG map territory paths (illustrative India regions)
const MAP_TERRITORIES = [
  { id: "north", label: "North", score: 76, cx: 213, cy: 245, path: "M160,180 L270,180 L290,230 L250,270 L180,265 L155,230 Z" },
  { id: "northeast", label: "North East", score: 88, cx: 383, cy: 245, path: "M295,185 L420,195 L435,260 L390,280 L300,265 L290,230 Z" },
  { id: "west", label: "West", score: 52, cx: 152, cy: 382, path: "M100,275 L195,270 L210,320 L195,390 L145,420 L90,390 L80,330 Z" },
  { id: "central", label: "Central", score: 69, cx: 298, cy: 368, path: "M200,270 L360,268 L375,320 L355,380 L260,400 L200,370 L195,320 Z" },
  { id: "east", label: "East", score: 83, cx: 415, cy: 355, path: "M365,270 L435,275 L450,340 L430,400 L370,405 L355,355 Z" },
  { id: "westsouth", label: "West South", score: 87, cx: 175, cy: 503, path: "M100,425 L205,400 L220,455 L200,520 L155,550 L100,520 L85,460 Z" },
  { id: "south", label: "South", score: 71, cx: 288, cy: 510, path: "M210,405 L360,405 L370,460 L330,540 L250,565 L210,525 L205,460 Z" },
  { id: "southeast", label: "South East", score: 91, cx: 408, cy: 490, path: "M365,410 L435,405 L455,460 L420,530 L365,545 L340,490 L355,435 Z" }
];

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
        .section { padding: 96px 24px; }
        .section.surface { background: var(--surface-2); }
        .container { max-width: 1180px; margin: 0 auto; }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; background: var(--accent-light); border-radius: 999px;
          font-size: 11px; font-weight: 600; letter-spacing: 1.2px;
          text-transform: uppercase; color: var(--accent);
        }
        .eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 999px; background: var(--accent);
        }
        .btn-primary {
          background: var(--accent); color: white; border: none;
          padding: 12px 22px; border-radius: 999px; font-weight: 600;
          box-shadow: 0 12px 30px rgba(91,78,245,0.25); cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 32px rgba(91,78,245,0.35); }
        .btn-ghost {
          background: transparent; color: var(--ink);
          border: 1px solid rgba(91,78,245,0.25); padding: 12px 22px;
          border-radius: 999px; font-weight: 600; cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .btn-ghost:hover { color: var(--accent); border-color: var(--accent); }
        .hero-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 48px; align-items: center; }
        .hero-title { font-weight: 800; letter-spacing: -0.02em; margin: 20px 0; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .tag-pill { background: var(--surface-2); padding: 6px 12px; border-radius: 999px; font-size: 12px; color: var(--ink-3); }
        .mini-card {
          border-radius: 20px; background: linear-gradient(180deg,#1a1534,#f5f4f9 55%);
          padding: 18px; box-shadow: 0 24px 50px rgba(17,12,46,0.15);
        }
        .mini-card-inner { background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(91,78,245,0.15); }
        .mini-header {
          background: var(--dark-card); color: white; padding: 16px;
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
        }
        .live-badge {
          display: inline-flex; align-items: center; gap: 6px; font-size: 11px;
          background: rgba(26,158,104,0.15); color: #1a9e68; padding: 4px 8px; border-radius: 999px;
          white-space: nowrap;
        }
        .live-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .waterfall { display: flex; flex-direction: column; gap: 14px; }
        .waterfall-row { display: grid; grid-template-columns: 1.4fr 2.4fr 0.6fr; gap: 12px; align-items: center; font-size: 12px; }
        .waterfall-bar { height: 8px; border-radius: 4px; background: rgba(15,14,23,0.08); overflow: hidden; }
        .waterfall-bar span { display: block; height: 100%; border-radius: 4px; }
        .drop-label { font-size: 11px; color: #f87171; padding-left: 12px; }
        .drop-label::before { content: ""; display: block; border-bottom: 1px dashed rgba(248,113,113,0.6); margin: 8px 0 6px; }
        .insight-strip { background: var(--accent-light); padding: 12px 14px; border-radius: 12px; font-size: 13px; color: var(--ink-2); margin-top: 14px; }

        /* Flip cards */
        .flip-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .flip-grid-bottom { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; max-width: 66.666%; margin: 32px auto 0; }
        @media (max-width: 900px) { .flip-grid { grid-template-columns: repeat(2,1fr); } .flip-grid-bottom { max-width: 100%; } }
        @media (max-width: 600px) { .flip-grid { grid-template-columns: 1fr; } .flip-grid-bottom { grid-template-columns: 1fr; } }
        .flip-card { height: 270px; perspective: 1000px; cursor: pointer; }
        .flip-inner {
          position: relative; width: 100%; height: 100%;
          transition: transform 0.65s cubic-bezier(0.4,0.2,0.2,1); transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner { transform: rotateY(180deg); }
        .flip-front, .flip-back {
          position: absolute; inset: 0; border-radius: 16px; padding: 24px;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
        }
        .flip-front {
          background: #ffffff; border: 1px solid rgba(232,65,42,0.2);
          border-left: 4px solid var(--danger); box-shadow: 0 8px 24px rgba(15,14,23,0.06);
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .flip-back {
          background: var(--dark-card); border: 1px solid rgba(91,78,245,0.3);
          transform: rotateY(180deg); display: flex; flex-direction: column;
          justify-content: space-between; box-shadow: 0 16px 40px rgba(91,78,245,0.2);
        }
        .flip-front-eyebrow {
          display: flex; align-items: center; gap: 6px; font-size: 10px;
          text-transform: uppercase; letter-spacing: 1.4px; color: var(--danger); font-weight: 700;
        }
        .flip-front-eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--danger); flex-shrink: 0; }
        .flip-front h4 { font-size: 22px; font-weight: 800; color: var(--ink); margin: 12px 0 0; line-height: 1.25; }
        .flip-hint { font-size: 11px; color: var(--ink-3); display: flex; align-items: center; gap: 4px; margin-top: auto; padding-top: 16px; }
        .flip-back-eyebrow {
          display: flex; align-items: center; gap: 6px; font-size: 10px;
          text-transform: uppercase; letter-spacing: 1.4px; color: var(--accent-mid); font-weight: 700;
        }
        .flip-back-eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent-mid); flex-shrink: 0; }
        .flip-back h4 { font-size: 18px; font-weight: 700; color: white; margin: 10px 0 8px; line-height: 1.3; }
        .flip-back p { font-size: 13px; color: #c4c0db; line-height: 1.55; flex: 1; }
        .flip-roi {
          margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);
          display: flex; justify-content: space-between; font-size: 12px; color: rgba(255,255,255,0.5);
        }
        .flip-roi strong { color: var(--accent-mid); font-weight: 700; }

        /* Dashboard */
        .dashboard {
          background: var(--dark-card); color: white; border-radius: 18px; padding: 0;
          box-shadow: 0 4px 80px rgba(91,78,245,0.1); border: 1px solid rgba(91,78,245,0.25);
          overflow: hidden; margin-top: 24px;
        }
        .dash-top-header {
          background: #0a0818; padding: 18px 24px;
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .dash-two-col {
          display: grid; grid-template-columns: 1fr 1fr; min-height: 520px;
        }
        .dash-left {
          border-right: 1px solid rgba(255,255,255,0.06); padding: 24px;
          display: flex; flex-direction: column;
        }
        .dash-right { padding: 24px; display: flex; flex-direction: column; gap: 0; }
        .dash-col-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 1.8px;
          color: rgba(255,255,255,0.4); font-weight: 600; margin-bottom: 14px;
        }
        .legend-row { display: flex; gap: 16px; margin-bottom: 16px; flex-wrap: wrap; }
        .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(255,255,255,0.6); }
        .legend-dot { width: 10px; height: 10px; border-radius: 50%; }

        /* Map SVG */
        .map-svg-wrap { flex: 1; display: flex; flex-direction: column; }
        .map-caption { font-size: 11px; color: rgba(255,255,255,0.3); margin-top: 12px; }

        /* Territory list below map */
        .territory-list { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
        .territory-list-row {
          display: grid; grid-template-columns: 1.6fr 1fr 0.5fr 0.6fr;
          font-size: 12px; align-items: center; gap: 8px;
        }
        .t-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .t-name { display: flex; align-items: center; gap: 6px; }
        .mini-track { width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
        .mini-track span { display: block; height: 100%; border-radius: 999px; }
        .t-score { font-weight: 700; }
        .t-reps { color: rgba(255,255,255,0.4); text-align: right; }

        /* Waterfall right side */
        .waterfall-v2 { display: flex; flex-direction: column; gap: 20px; }
        .wf-row { display: flex; flex-direction: column; gap: 6px; }
        .wf-row-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .wf-label { font-size: 14px; font-weight: 700; color: white; }
        .wf-sub { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .wf-pct { font-size: 20px; font-weight: 800; }
        .wf-bar-wrap { display: flex; gap: 8px; align-items: center; }
        .wf-bar-bg { flex: 1; height: 36px; background: rgba(255,255,255,0.07); border-radius: 8px; overflow: hidden; }
        .wf-bar-fill { height: 100%; border-radius: 8px; display: flex; align-items: center; padding-left: 12px; }
        .wf-count { font-size: 16px; font-weight: 700; color: white; }
        .wf-drop { font-size: 11px; color: #f87171; padding-left: 4px; display: flex; align-items: center; gap: 4px; }
        .wf-drop::before { content: "↓"; }

        /* Callout cards */
        .dash-callouts { border-top: 1px solid rgba(255,255,255,0.06); display: grid; grid-template-columns: 1fr 1fr; }
        .callout-red {
          padding: 20px 24px; border-right: 1px solid rgba(255,255,255,0.06);
          background: rgba(232,65,42,0.05);
        }
        .callout-red .value { font-size: 28px; font-weight: 800; color: #f87171; margin-bottom: 6px; }
        .callout-red p { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.55; }
        .callout-red p strong { color: rgba(255,255,255,0.85); }
        .callout-purple { padding: 20px 24px; background: rgba(91,78,245,0.07); }
        .callout-purple p { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.55; }
        .callout-purple p strong { color: #a78bfa; }

        .status-pill {
          font-size: 10px; font-weight: 500; padding: 2px 8px; border-radius: 100px;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .s-ready { background: rgba(26,158,104,0.12); color: #1a9e68; }
        .s-risk { background: rgba(217,119,6,0.12); color: #b45309; }
        .s-crit { background: rgba(232,65,42,0.12); color: #e8412a; }

        .persona-grid { display: grid; grid-template-columns: 200px repeat(4,minmax(0,1fr)); gap: 16px; align-items: start; }
        .persona-card { background: var(--surface-2); border: 1px solid rgba(91,78,245,0.1); border-radius: 14px; padding: 16px; }
        .icon-box { width: 36px; height: 36px; border-radius: 10px; background: var(--accent-light); display: grid; place-items: center; color: var(--accent); margin-bottom: 12px; }
        .cta {
          background: var(--dark-card); border-radius: 24px; padding: 32px;
          border: 1px solid rgba(91,78,245,0.45); box-shadow: 0 24px 60px rgba(91,78,245,0.25);
          display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; align-items: center;
        }
        .cta h3 { margin: 0 0 12px; color: white; }
        .cta p { color: #bcb8d9; }
        .cta .trust { color: #8f8aa9; font-size: 12px; margin-top: 16px; }
        .footer {
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid rgba(91,78,245,0.1); padding: 24px;
          font-size: 12px; color: var(--ink-3);
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .mini-card { display: none; }
          .dash-two-col { grid-template-columns: 1fr; }
          .dash-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .dash-callouts { grid-template-columns: 1fr; }
          .callout-red { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .persona-grid { grid-template-columns: 1fr 1fr; }
          .cta { grid-template-columns: 1fr; }
          .flip-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 600px) {
          .flip-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="section" id="hero">
        <div className="container hero-grid">
          <div className="reveal" data-reveal>
            <span className="eyebrow">FMCG</span>
            <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight">
              Scheme leaking<br />while your<br />
              <span style={{ color: "var(--accent)" }}>NSM is on a call.</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-xl">
              Your scheme is running. Your reps are in the field. But 41% of them aren't actively selling it.{" "}
              <span className="font-semibold text-slate-900">Right now, you have no way to know which territories are burning and which are executing.</span>
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <button className="btn-primary">Request a pilot</button>
              <button className="btn-ghost">See how it works →</button>
            </div>
            <div className="tag-row">
              {TAGS.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
            </div>
          </div>

          <div className="mini-card reveal" data-reveal>
            <div className="mini-card-inner">
              <div className="mini-header">
                <div>
                  <div style={{ fontWeight: 600 }}>National Field Readiness · Oct Diwali Scheme</div>
                  <small style={{ color: "rgba(255,255,255,0.6)" }}>8 territories · 240 field reps · 4,800+ outlets · FMCG beverages</small>
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

      {/* ── PROBLEM / FIX — flip cards ── */}
      <section className="section surface" id="problem">
        <div className="container reveal" data-reveal>
          <div style={{ marginBottom: 48 }}>
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">Where Lucid Plays</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">The problem. The fix.</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-xl">
              Every scheme leak has a territory signature. Lucid closes the loop with execution proof and correction speed.
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="flip-grid" style={{ marginBottom: 32 }}>
            {PROBLEM_FIX_ROWS.slice(0, 3).map((pair) => (
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
          <div className="flip-grid-bottom">
            {PROBLEM_FIX_ROWS.slice(3).map((pair) => (
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
            

      {/* ── DASHBOARD — Image 2 layout ── */}
      <section className="section" id="dashboard">
        <div className="container reveal" data-reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">What Lucid Shows You</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Your field force. Every Monday morning.</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-xl">
              Not activity reports. Where your scheme is landing — and where it's leaking.
            </p>
          </div>

          <div className="dashboard reveal" data-reveal>
            {/* Header */}
            <div className="dash-top-header">
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>National Field Readiness · Oct Diwali Scheme · Week of 28 Oct</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>8 territories · 240 field reps · 4,800+ outlets · FMCG beverages</div>
              </div>
              <span className="live-badge"><span className="live-dot" />Live · Updated 2 hrs ago</span>
            </div>

            {/* Two-column body */}
            <div className="dash-two-col">
              {/* LEFT — Map + territory list */}
              <div className="dash-left">
                <div className="dash-col-label">Field Readiness Score · By Territory</div>
                <div className="legend-row">
                  <div className="legend-item"><span className="legend-dot" style={{ background: "#4ade80" }} />Strong (&gt;80)</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: "#fbbf24" }} />At risk (60–80)</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: "#e8412a" }} />Critical (&lt;60)</div>
                </div>

                {/* India territory map — illustrative SVG */}
                <div className="map-svg-wrap">
                  <svg viewBox="60 160 420 420" style={{ width: "100%", maxHeight: 340 }}>
                    {MAP_TERRITORIES.map((t) => (
                      <g key={t.id}>
                        <path
                          d={t.path}
                          fill={getToneColor(t.score)}
                          fillOpacity={0.85}
                          stroke="#0e0c1f"
                          strokeWidth={2}
                        />
                        {t.score < 60 && (
                          <circle cx={t.cx - 28} cy={t.cy - 12} r={10} fill="white" fillOpacity={0.15} />
                        )}
                        <text x={t.cx} y={t.cy - 6} textAnchor="middle" fill="white" fontSize={11} fontWeight={700}>{t.label}</text>
                        <text x={t.cx} y={t.cy + 10} textAnchor="middle" fill="white" fontSize={13} fontWeight={800}>{t.score}</text>
                      </g>
                    ))}
                  </svg>
                  <div className="map-caption">India · Territory readiness · Illustrative</div>
                </div>

                {/* Territory list */}
                <div className="territory-list">
                  {TERRITORIES.filter(t => ["West (Raj + Guj)", "Central (MP + CG)", "North (UP + Haryana)", "East (WB + Bihar)", "South East (TN + KL)"].includes(t.name)).map((row) => (
                    <div key={row.name} className="territory-list-row">
                      <div className="t-name">
                        <span className="t-dot" style={{ background: getToneColor(row.score) }} />
                        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>{row.name}</span>
                      </div>
                      <div className="mini-track">
                        <span style={{ width: `${row.score}%`, background: getToneColor(row.score) }} />
                      </div>
                      <span className="t-score" style={{ color: getToneColor(row.score) }}>{row.score}</span>
                      <span className="t-reps">{row.reps}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Waterfall */}
              <div className="dash-right">
                <div className="dash-col-label">Scheme Execution Waterfall · Oct Diwali · National</div>
                <div className="waterfall-v2">
                  {WATERFALL_STEPS.map((step, i) => (
                    <div key={step.title}>
                      <div className="wf-row">
                        <div className="wf-row-top">
                          <div>
                            <div className="wf-label">{step.title}</div>
                            <div className="wf-sub">{i === 0 ? "Total field force" : i === 1 ? "Read the WhatsApp sprint" : i === 2 ? "Passed comprehension check" : "Confirmed in beat checklist"}</div>
                          </div>
                          <div className="wf-pct" style={{ color: step.color }}>{step.value}</div>
                        </div>
                        <div className="wf-bar-wrap">
                          <div className="wf-bar-bg">
                            <div className="wf-bar-fill" style={{ width: step.width, background: step.color }}>
                              <span className="wf-count">{step.count}</span>
                            </div>
                          </div>
                        </div>
                        {step.drop && (
                          <div className="wf-drop">{step.drop.replace("↓ ", "")}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Callout cards */}
            <div className="dash-callouts">
              <div className="callout-red">
                <div className="value">142 reps</div>
                <p>understand the scheme but are <strong>not actively selling it.</strong> That is your single biggest offtake opportunity this week — and it costs nothing to fix.</p>
              </div>
              <div className="callout-purple">
                <p><strong>Lucid deploys a 3-minute reinforcement sprint</strong> to those 142 reps now. Beat checklist updated to require scheme pitch confirmation at every outlet. NSM sees the change in coverage by Thursday.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO USES LUCID ── */}
      <section className="section surface" id="who">
        <div className="container reveal" data-reveal>
          <div className="persona-grid">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">Who Uses Lucid</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Field leaders who need scheme execution proof.</h2>
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

      {/* ── CTA ── */}
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