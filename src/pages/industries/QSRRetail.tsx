import * as React from "react";
import { BarChart3, Clock, Users } from "lucide-react";

const TAGS = [
  "QSR chains",
  "Cloud kitchens",
  "Fashion retail",
  "Pharmacy chains",
  "Quick commerce",
  "Consumer electronics",
  "Franchise networks"
];

const PROBLEM_FIX_ROWS = [
  {
    eyebrow: "THE OPERATIONAL FRICTION",
    problemTitle: "Disconnected Product Launches",
    fixTitle: "Pre-emptive Readiness",
    roiLabel: "ROI: Speed to Market",
    roiValue: "+100% Alignment",
    fixCopy: "Launch brief deployed to every associate's phone before go-live. Readiness score by outlet — before the launch, not after the complaint."
  },
  {
    eyebrow: "PERFORMANCE VARIANCE",
    problemTitle: "Unexplained Revenue Gaps",
    fixTitle: "Performance Replicability",
    roiLabel: "ROI: Bottom-line Growth",
    roiValue: "Gap Minimization",
    fixCopy: "Execution score by outlet, updated every week. Revenue correlation visible. Best practice identified and replicated to underperforming locations."
  },
  {
    eyebrow: "CHRONIC NON-COMPLIANCE",
    problemTitle: "The Recurring Audit Loop",
    fixTitle: "Root Cause Resolution",
    roiLabel: "ROI: Operational Efficiency",
    roiValue: "Zero Recurrence",
    fixCopy: "Root cause mapped to the knowledge gap behind the deviation. Fix deployed to the right team. Comprehension verified. Recurrence tracked."
  },
  {
    eyebrow: "STANDARDS DRIFT",
    problemTitle: "Planogram That Lives on Paper",
    fixTitle: "Real-Time VM Compliance",
    roiLabel: "ROI: Brand Consistency",
    roiValue: "↑ Compliance Rate",
    fixCopy: "Mobile photo-capture audit against your VM standard. Non-compliance flagged and corrective action assigned the same day — not at the next site visit."
  },
  {
    eyebrow: "ATTRITION COST",
    problemTitle: "New Hires Who Leave Before They Land",
    fixTitle: "Early Attrition Signal",
    roiLabel: "ROI: Retention & Ramp",
    roiValue: "↓ 90-Day Attrition",
    fixCopy: "Role-specific capability deployed from Day 1 on WhatsApp. Capability score by associate from Week 1. Manager alerted when score drops — not when the resignation lands."
  }
];

const METRICS = [
  {
    label: "Execution Score",
    value: "74",
    color: "#f97316",
    sub: "↓ 6 from last week"
  },
  {
    label: "Launch Readiness",
    value: "61%",
    color: "#e11d48",
    sub: "⚠ Below 80% threshold / Masala Crunch · go-live in 3 days"
  },
  {
    label: "Audit Pass Rate",
    value: "88%",
    color: "#22c55e",
    sub: "↑ 4 from last week"
  },
  {
    label: "New Hire Ramp",
    value: "Week 3",
    color: "#5b4ef5",
    sub: "⚠ Rajan below threshold / Priya 81% · Rajan 58%"
  }
];

const ROLE_READINESS = [
  { role: "Shift Supervisor", count: "2/2", status: "Ready", tone: "s-ready" },
  { role: "Senior Associate", count: "3/4", status: "At risk", tone: "s-risk" },
  { role: "Associate", count: "2/4", status: "Not ready", tone: "s-not" },
  { role: "New Hire", count: "0/2", status: "Not ready", tone: "s-not" }
];

const DEVIATIONS = [
  { label: "Combo board not updated", weeks: "4 weeks", count: 4 },
  { label: "Temperature log incomplete", weeks: "3 weeks", count: 3 },
  { label: "Upsell script not followed", weeks: "2 weeks", count: 2 },
  { label: "Handwash station not stocked", weeks: "2 weeks", count: 2 },
  { label: "Opening checklist partial", weeks: "1 week", count: 1 }
];

const PERSONAS = [
  {
    icon: BarChart3,
    title: "CEO / COO",
    desc: "Execution score by outlet. Revenue correlation. Weekly."
  },
  {
    icon: Clock,
    title: "Sales Head",
    desc: "Launch readiness before go-live. Revenue variance explained."
  },
  {
    icon: Users,
    title: "Operations Head",
    desc: "Audit results same day. No recurring deviations."
  },
  {
    icon: Users,
    title: "CHRO",
    desc: "Attrition signal at Week 2. Ramp speed as a number."
  }
];

export default function QSRRetail() {
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
    <div className="lucid-qsr">
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
        .lucid-qsr {
          font-family: "DM Sans", system-ui, sans-serif;
          color: var(--ink);
          background: var(--surface);
        }
        .section {
          padding: 2rem 24px;
        }
        .section#hero {
          padding: 20px 24px;
        }
        .section.surface {
          background: var(--surface-2);
        }
          .container {
          max-width: 1180px;
            margin: 0 auto;
            padding-top: 8px;      /* py-8 top */
            padding-bottom: 4px;
            padding-left: 45px;
            padding-right: 42px;
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
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
        }
        .hero-title {
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 20px 0;
        }
        .hero-title span {
          color: var(--accent);
        }
        .hero-copy {
          font-size: 17px;
          color: var(--ink-2);
          line-height: 1.65;
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
        .dashboard-preview {
          border-radius: 20px;
          background: linear-gradient(180deg, #1a1534, #f5f4f9 55%);
          padding: 18px;
          box-shadow: 0 24px 50px rgba(17, 12, 46, 0.15);
        }
        .dash-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(91, 78, 245, 0.15);
        }
        .dash-header {
          background: var(--dark-card);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dash-header small {
          color: rgba(255,255,255,0.7);
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

        /* ── Flip card styles ── */
        .flip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .flip-grid-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 66.666%;
          margin: 32px auto 0;
        }
        @media (max-width: 900px) {
          .flip-grid { grid-template-columns: repeat(2, 1fr); }
          .flip-grid-bottom { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .flip-grid { grid-template-columns: 1fr; }
          .flip-grid-bottom { grid-template-columns: 1fr; }
        }
        .flip-card {
          height: 270px;
          perspective: 1000px;
          cursor: pointer;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front, .flip-back {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 24px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-front {
          background: #ffffff;
          border: 1px solid rgba(232, 65, 42, 0.2);
          border-left: 4px solid var(--danger);
          box-shadow: 0 8px 24px rgba(15, 14, 23, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flip-back {
          background: var(--dark-card);
          border: 1px solid rgba(91, 78, 245, 0.3);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 16px 40px rgba(91, 78, 245, 0.2);
        }
        .flip-front-eyebrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          color: var(--danger);
          font-weight: 700;
        }
        .flip-front-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--danger);
          flex-shrink: 0;
        }
        .flip-front h4 {
          font-size: 22px;
          font-weight: 800;
          color: var(--ink);
          margin: 12px 0 0;
          line-height: 1.25;
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
        .flip-back-eyebrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          color: var(--accent-mid);
          font-weight: 700;
        }
        .flip-back-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-mid);
          flex-shrink: 0;
        }
        .flip-back h4 {
          font-size: 18px;
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
        .flip-roi {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        .flip-roi strong {
          color: var(--accent-mid);
          font-weight: 700;
        }

        .dashboard {
          background: var(--dark-card);
          color: white;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 30px 60px rgba(91, 78, 245, 0.2);
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
          font-size: 24px;
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
        .role-table {
          background: rgba(255,255,255,0.04);
          padding: 14px;
          border-radius: 12px;
        }
        .role-row {
          display: grid;
          grid-template-columns: 1.3fr 0.6fr 0.8fr;
          gap: 10px;
          font-size: 12px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .role-row:last-child { border-bottom: none; }
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
        .s-not { background: rgba(232,65,42,0.12); color: #e8412a; }
        .deviation {
          background: rgba(255,255,255,0.04);
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        .bars {
          display: grid;
          grid-template-columns: repeat(4, 16px);
          gap: 4px;
          margin-top: 6px;
        }
        .bar {
          width: 16px;
          height: 3px;
          border-radius: 1px;
          background: #f87171;
        }
        .bar.empty { opacity: 0.25; }
        .alert {
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(232,65,42,0.12);
          border: 1px solid rgba(232,65,42,0.35);
          color: #fca5a5;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .alert a { color: var(--accent-mid); text-decoration: none; }
        .insight {
          margin-top: 16px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(91, 78, 245, 0.15);
          color: #c7c3ff;
          font-size: 13px;
        }
        .persona-grid {
          display: grid;
          grid-template-columns: 1fr repeat(4, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .persona-card {
          background: var(--surface-2);
          border: 1px solid rgba(91, 78, 245, 0.1);
          border-radius: 16px;
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
        .cta strong { color: var(--accent); }
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
          .dashboard-preview { display: none; }
          .metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .dash-body { grid-template-columns: 1fr; }
          .persona-grid { grid-template-columns: 1fr 1fr; }
          .cta { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="section" id="hero" style={{ paddingTop: "80px", marginTop: "80px" }}>
        <div className="container hero-grid">
          <div className="reveal" data-reveal>
            <span className="eyebrow">QSR & Retail</span>
            <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Revenue made or lost<br />in <span>30 seconds</span><br />at the counter.
            </h1>
            <p className="hero-copy text-lg text-slate-600 mt-6 max-w-xl">
              Your floor team either knows what to do — or they don't. <span className="font-semibold text-slate-900">Right now, most organizations have no way to know which side they're on.</span>
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

          <div className="dashboard-preview reveal" data-reveal>
            <div className="dash-card">
              <div className="dash-header">
                <div>
                  <div style={{ fontWeight: 600 }}>Outlet #47 · Indiranagar, Bangalore</div>
                  <small>Week of 28 Oct · 12 associates · 3 shifts · QSR chain</small>
                </div>
                <span className="live-badge"><span className="live-dot" />Live · Updated 2 hrs ago</span>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
                  {METRICS.slice(0, 2).map((metric) => (
                    <div key={metric.label} style={{ background: "#f5f4f9", borderRadius: 12, padding: 12 }}>
                      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#7a7891" }}>{metric.label}</div>
                      <div style={{ fontWeight: 700, fontSize: 20, color: metric.color }}>{metric.value}</div>
                      <div style={{ fontSize: 11, color: "#7a7891" }}>{metric.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
                  {METRICS.slice(2).map((metric) => (
                    <div key={metric.label} style={{ background: "#f5f4f9", borderRadius: 12, padding: 12 }}>
                      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#7a7891" }}>{metric.label}</div>
                      <div style={{ fontWeight: 700, fontSize: 20, color: metric.color }}>{metric.value}</div>
                      <div style={{ fontSize: 11, color: "#7a7891" }}>{metric.sub}</div>
                    </div>
                  ))}
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
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
              Where Lucid Plays
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              The problem. The fix.
            </h2>
            <p className="text-lg text-slate-600 mt-4 max-w-xl">
              Every operational leak has a revenue signature. Lucid closes the loop with execution proof and correction speed.
            </p>
          </div>

          <div className="flip-grid">
            {PROBLEM_FIX_ROWS.slice(0, 3).map((row) => (
              <div key={row.problemTitle} className="flip-card reveal" data-reveal>
                <div className="flip-inner">
                  {/* Front — white problem card */}
                  <div className="flip-front">
                    <div>
                      <div className="flip-front-eyebrow">{row.eyebrow}</div>
                      <h4>{row.problemTitle}</h4>
                    </div>
                    <div className="flip-hint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 16V4m0 0L3 8m4-4 4 4"/>
                        <path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
                      </svg>
                      Hover to see the fix
                    </div>
                  </div>
                  {/* Back — dark fix card */}
                  <div className="flip-back">
                    <div>
                      <div className="flip-back-eyebrow">Fix · {row.fixTitle}</div>
                      <h4>{row.fixTitle}</h4>
                      <p>{row.fixCopy}</p>
                    </div>
                    <div className="flip-roi">
                      <span>{row.roiLabel}</span>
                      <strong>{row.roiValue}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flip-grid-bottom">
            {PROBLEM_FIX_ROWS.slice(3).map((row) => (
              <div key={row.problemTitle} className="flip-card reveal" data-reveal>
                <div className="flip-inner">
                  {/* Front — white problem card */}
                  <div className="flip-front">
                    <div>
                      <div className="flip-front-eyebrow">{row.eyebrow}</div>
                      <h4>{row.problemTitle}</h4>
                    </div>
                    <div className="flip-hint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 16V4m0 0L3 8m4-4 4 4"/>
                        <path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
                      </svg>
                      Hover to see the fix
                    </div>
                  </div>
                  {/* Back — dark fix card */}
                  <div className="flip-back">
                    <div>
                      <div className="flip-back-eyebrow">Fix · {row.fixTitle}</div>
                      <h4>{row.fixTitle}</h4>
                      <p>{row.fixCopy}</p>
                    </div>
                    <div className="flip-roi">
                      <span>{row.roiLabel}</span>
                      <strong>{row.roiValue}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD ── */}
      <section className="section" id="dashboard">
        <div className="container reveal" data-reveal>
          <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Your outlet. Every Monday morning.
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-xl">
            Not a training report. A commercial view of execution — by outlet, by role, this week.
          </p>
          <div className="dashboard" data-reveal>
            <div className="dash-header" style={{ borderRadius: 12 }}>
              <div>
                <div style={{ fontWeight: 600 }}>Outlet #47 · Indiranagar, Bangalore</div>
                <small>Week of 28 Oct · 12 associates · 3 shifts · QSR chain</small>
              </div>
              <span className="live-badge"><span className="live-dot" />Live · Updated 2 hrs ago</span>
            </div>
            <div className="metrics">
              {METRICS.map((metric) => (
                <div key={metric.label} className="metric">
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1.2px", color: "#b9b4d9" }}>{metric.label}</div>
                  <div className="metric-value" style={{ color: metric.color }}>{metric.value}</div>
                  <div style={{ fontSize: 11, color: "#c4c0db" }}>{metric.sub}</div>
                  <div className="metric-bar"><span style={{ width: "60%", background: metric.color }} /></div>
                </div>
              ))}
            </div>
            <div className="dash-body">
              <div className="role-table">
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Launch readiness by role</div>
                {ROLE_READINESS.map((row) => (
                  <div key={row.role} className="role-row">
                    <span>{row.role}</span>
                    <span>{row.count}</span>
                    <span className={`status-pill ${row.tone}`}>{row.status}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Recurring deviations (last 4 weeks)</div>
                {DEVIATIONS.map((item) => (
                  <div key={item.label} className="deviation">
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                      <span>{item.label}</span>
                      <span>{item.weeks}</span>
                    </div>
                    <div className="bars">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className={`bar ${index < item.count ? "" : "empty"}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="alert">
              <span>6 associates not ready. Launch in 3 days.</span>
              <a href="#problem">→ Deploy remediation sprint now</a>
            </div>
            <div className="insight">
              An ops head reading this knows exactly what to fix in the next 24 hours. Not a training report — an execution view built for operations.
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO USES LUCID ── */}
      <section className="section surface" id="who">
        <div className="container reveal" data-reveal>
          <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase mb-6">
            Who Uses Lucid
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            Operations leaders who need execution proof.
          </h2>
          <div className="persona-grid">
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
                See your outlet #47.<br /><span style={{ color: "var(--accent)" }}>Know what to fix by tomorrow.</span>
              </h3>
              <p>Live in 48 hours. Execution baseline by outlet in 72. Your ops head has this report for every outlet by Day 7.</p>
              <div className="trust">No IT dependency · 30-day pilot · No commitment</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button className="btn-primary">Request a pilot</button>
              <button className="btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>Talk to us first →</button>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="footer">
        <div className="nav-logo" style={{ color: "var(--ink)" }}>Lucid</div>
        <div>© 2026 Lucid. All rights reserved.</div>
      </footer> */}
    </div>
  );
}