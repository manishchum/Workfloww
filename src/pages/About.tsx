import * as React from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  const approachCards = [
    {
      num: "01",
      title: "Ground First",
      body: "Every product decision starts with one question: does this work for the person at the counter, on the floor, in the field? If it doesn't reach them, it doesn't matter how sophisticated it is.",
    },
    {
      num: "02",
      title: "Outcomes Over Activity",
      body: "We don't measure success by content created or modules completed. We measure it by whether execution on the ground actually improved. That is the only metric that connects to your business.",
    },
    {
      num: "03",
      title: "Speed as Principle",
      body: "48 hours from contract to live deployment is not a product feature. It is a statement about how we think organizations should work. The gap cannot wait six months for a platform to go live.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        /* ── Shared centered container ── */
        .ab-container {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 64px;
          padding-right: 64px;
          box-sizing: border-box;
        }

        /* ── Section pads ── */
        .ab-pad   { padding-top: 88px; padding-bottom: 88px; }
        .ab-pad-sm { padding-top: 80px; padding-bottom: 80px; }

        /* ── Content width caps ── */
        .ab-narrow {
          max-width: 740px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Eyebrow ── */
        .ab-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 500;
          margin: 0;
          text-align: center;
        }
        .ab-eyebrow-light {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          font-weight: 500;
          margin: 0;
          text-align: center;
        }

        /* ── Divider ── */
        .ab-divider {
          width: 40px;
          height: 2px;
          background: #0b1220;
          margin: 20px auto 28px;
        }
        .ab-divider-light {
          width: 40px;
          height: 2px;
          background: rgba(255,255,255,0.45);
          margin: 20px auto 28px;
        }

        /* ── Headings ── */
        .ab-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 58px);
          line-height: 1.15;
          font-weight: 600;
          color: white;
          margin: 28px 0 44px;
          text-align: center;
        }
        .ab-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(26px, 3.2vw, 44px);
          line-height: 1.2;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 32px;
          text-align: center;
        }

        /* ── Body text ── */
        .ab-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.85;
          color: #4b5563;
          text-align: justify;
          text-justify: inter-word;
        }
        .ab-body p { margin: 0 0 20px; }
        .ab-body p:last-child { margin: 0; }

        /* ── Pull quote ── */
        .ab-pullquote {
          border-left: 3px solid #0b1220;
          padding: 4px 0 4px 24px;
          margin: 36px 0;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-style: italic;
          color: #0f172a;
          line-height: 1.55;
          text-align: left;
        }

        /* ── Hero ── */
        .ab-hero-ghost {
          position: absolute;
          right: 64px;
          top: 60px;
          font-family: 'Playfair Display', serif;
          font-size: 260px;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          pointer-events: none;
          font-style: italic;
          user-select: none;
        }
        .ab-gap-bar {
          display: flex;
          max-width: 560px;
          height: 6px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          margin-left: auto;
          margin-right: auto;
        }
        .ab-gap-a { background: rgba(255,255,255,0.5); flex: 7; }
        .ab-gap-b { background: #ef4444; flex: 1; }
        .ab-gap-c { background: rgba(255,255,255,0.18); flex: 4; }
        .ab-gap-labels {
          display: grid;
          grid-template-columns: 7fr 1fr 4fr;
          align-items: center;
          max-width: 560px;
          margin-bottom: 52px;
          margin-left: auto;
          margin-right: auto;
          column-gap: 8px;
        }
        .ab-gap-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .ab-gap-label-left { text-align: left; }
        .ab-gap-label-center { text-align: center; }
        .ab-gap-label-right { text-align: right; }
        .ab-gap-red { color: #fca5a5; }
        .ab-hero-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          line-height: 1.85;
          color: rgba(255,255,255,0.65);
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-align: justify;
          text-justify: inter-word;
        }
        .ab-hero-body p { margin: 0 0 20px; }
        .ab-hero-closer {
          font-family: 'Playfair Display', serif !important;
          font-style: italic;
          font-size: 19px !important;
          color: rgba(255,255,255,0.88) !important;
          margin-top: 32px !important;
        }

        /* ── Stats ── */
        .ab-stats {
          display: flex;
          justify-content: space-between;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid #e5e7eb;
        }
        .ab-stat {
          flex: 1;
          padding-right: 32px;
          margin-right: 32px;
          border-right: 1px solid #e5e7eb;
        }
        .ab-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .ab-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          font-weight: 600;
          line-height: 1;
          color: #0b1220;
        }
        .ab-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #6b7280;
          margin-top: 7px;
          text-align: center;
        }

        /* ── Founders ── */
        .ab-founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          margin-top: 48px;
        }
        .ab-founder-header {
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 24px;
        }
        .ab-founder-name {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .ab-founder-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #6b7280;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ab-founder-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #0b1220;
          flex-shrink: 0;
        }
        .ab-team-dark .ab-founder-name {
          color: #ffffff !important;
        }
        .ab-team-dark .ab-founder-role {
          color: rgba(255,255,255,0.55);
        }
        .ab-team-dark .ab-founder-dot {
          background: #fca5a5;
        }
        .ab-team-dark .ab-founder-header {
          border-bottom-color: rgba(255,255,255,0.18);
        }
        .ab-team-dark .ab-body {
          color: rgba(255,255,255,0.65);
        }

        /* ── Approach cards ── */
        .ab-approach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #1f2937;
          border: 1px solid #1f2937;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 40px;
        }
        .ab-approach-card { background: #0f172a; padding: 36px 32px; }
        .ab-approach-num {
          font-family: 'Playfair Display', serif;
          font-size: 68px;
          color: rgba(255,255,255,0.08);
          font-weight: 600;
          line-height: 1;
          margin-bottom: 14px;
        }
        .ab-approach-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: #e5e7eb;
          margin-bottom: 14px;
        }
        .ab-approach-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: #9ca3af;
          margin: 0;
        }

        /* ── CTA ── */
        .ab-cta-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 3vw, 42px);
          line-height: 1.25;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 24px;
          text-align: center;
        }
        .ab-cta-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.75;
          color: #4b5563;
          margin: 0 0 40px;
          max-width: 620px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .ab-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .ab-cta-secondary {
          border-color: #0f172a !important;
          color: #0f172a !important;
        }
        .ab-cta-secondary:hover {
          background: rgba(15, 23, 42, 0.08) !important;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ab-container { padding-left: 32px; padding-right: 32px; }
          .ab-founders-grid { grid-template-columns: 1fr; gap: 40px; }
          .ab-approach-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .ab-container { padding-left: 20px; padding-right: 20px; }
          .ab-pad, .ab-pad-sm { padding-top: 60px; padding-bottom: 60px; }
          .ab-hero-ghost { display: none; }
          .ab-stats { flex-direction: column; }
          .ab-stat {
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
            padding: 0 0 24px;
            margin: 0 0 24px;
          }
          .ab-stat:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        }
      `}</style>

      <div>

        {/* ── HERO ── */}
        <section style={{ background: "#0b1220", position: "relative", overflow: "hidden" }} className="ab-pad">
          <div className="ab-hero-ghost">"</div>
          <div className="ab-container ab-team-dark">
            <p className="ab-eyebrow-light">Company — Workfloww.ai</p>
            <h1 className="ab-h1">
              There is a moment every Sales Head, every COO, every Operations Director knows.
            </h1>
            <div className="ab-gap-bar">
              <div className="ab-gap-a" />
              <div className="ab-gap-b" />
              <div className="ab-gap-c" />
            </div>
            <div className="ab-gap-labels">
              <span className="ab-gap-label ab-gap-label-left">What Was Decided</span>
              <span className="ab-gap-label ab-gap-label-center ab-gap-red">The Gap</span>
              <span className="ab-gap-label ab-gap-label-right">What Happened On The Ground</span>
            </div>
            <div className="ab-hero-body">
              <p>The product is good. The team is capable. The launch was planned meticulously — briefings done, decks shared, messages cascaded down the chain.</p>
              <p>Then comes the field visit.</p>
              <p>Three weeks after the launch. The shelf isn't set to standard. The floor team can't answer a basic customer question about the new product. The promotion that was supposed to drive revenue this quarter hasn't moved past a manager's WhatsApp forward.</p>
              <p>Nothing failed dramatically. No one was negligent. The people on the ground were doing their best — with incomplete information, in formats that didn't reach them, arriving too late to act on.</p>
              <p className="ab-hero-closer">The gap between what was decided and what happened on the ground had no name. And no fix. That is why Workfloww.ai exists.</p>
            </div>
          </div>
        </section>

        {/* ── OUR STARTING POINT ── */}
        <section style={{ background: "#ffffff" }} className="ab-pad-sm">
          <div className="ab-container">
            <div className="ab-narrow">
              <p className="ab-eyebrow">Our Starting Point</p>
              <div className="ab-divider" />
              <h2 className="ab-h2">Sales and operations people are not the problem. They never were.</h2>
              <div className="ab-body">
                <p>The store associate who can't explain the new SKU wasn't briefed properly. The field executive who missed the compliance standard didn't have it in a format they could use. The shift supervisor making the wrong call didn't have the right information at the right moment.</p>
                <p>These are not performance failures. They are system failures.</p>
              </div>
              <blockquote className="ab-pullquote">
                Give ground-level teams the right information, in the right format, at the right moment — and execution takes care of itself.
              </blockquote>
              <div className="ab-body">
                <p>The people doing the work — at the counter, on the floor, in the field, on the line — are among the most hardworking people in any organization. What they have lacked is not effort or intent. They have lacked the tools to make effective decisions on the ground, in real time, when it matters.</p>
                <p>Workfloww.ai was built on a single conviction: give ground-level teams the right information, in the right format, at the right moment — and execution takes care of itself.</p>
              </div>
              <div className="ab-stats">
                <div className="ab-stat">
                  <div className="ab-stat-num">48h</div>
                  <div className="ab-stat-label">Contract to live deployment</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">20+</div>
                  <div className="ab-stat-label">Years of combined domain experience</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">0</div>
                  <div className="ab-stat-label">Lengthy implementations required</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE TEAM ── */}
        <section style={{ background: "#0b1220" }} className="ab-pad-sm">
          <div className="ab-container ab-team-dark">
            <p className="ab-eyebrow-light">The Team</p>
            <div className="ab-divider-light" />
            <h2 className="ab-h2" style={{ color: "#e5e7eb" }}>
              Built by people who have been on both sides of the gap.
            </h2>
            <div className="ab-founders-grid">
              <div>
                <div className="ab-founder-header">
                  <div className="ab-founder-name">Manish Chum</div>
                  <div className="ab-founder-role">
                    <span className="ab-founder-dot" />
                    Founder &amp; CEO
                  </div>
                </div>
                <div className="ab-body">
                  <p>Manish Chum spent over two decades at the intersection of people, performance, and organizational scale — across Airtel, EY, Maersk, Tech Mahindra, and Whirlpool.</p>
                  <p>Across every organization, across every industry, he watched the same moment repeat itself. Leadership made sound decisions. Sales and operations teams worked hard. And somewhere between the boardroom and the ground, the plan dissolved — not because of incompetence, but because the systems to carry it forward simply did not exist.</p>
                  <p>He saw product launches brief managers who briefed teams who forgot by Thursday. He saw SOPs that existed in folders no one opened. He saw field forces that were accountable for outcomes they had no tools to achieve.</p>
                  <p>Before founding Workfloww.ai, Manish built Learnify.Today — a professional community connecting thousands of practitioners across India — which showed him both how hungry ground-level teams are for the right information, and how completely underserved they are by existing tools.</p>
                  <p>Lucid is not built from a feature wishlist. It is built from twenty years of watching what happens when the last 100 feet of execution are left to chance — and the conviction that it doesn't have to be this way.</p>
                </div>
              </div>
              <div>
                <div className="ab-founder-header">
                  <div className="ab-founder-name">Shilpa Chitkara</div>
                  <div className="ab-founder-role">
                    <span className="ab-founder-dot" />
                    Co-Founder &amp; Director of Technology
                  </div>
                </div>
                <div className="ab-body">
                  <p>Shilpa Chitkara brings over 20 years of experience building technology systems that work at enterprise scale — from her early engineering years at Infosys and L&amp;T Infotech, through more than a decade leading complex technical delivery at Genesis BCW, to her current role architecting the full technology ecosystem at Workfloww.ai.</p>
                  <p>Her expertise sits at the intersection of digital transformation, automation, and AI-driven product development. She was an early practitioner of Generative and Agentic AI in enterprise contexts — completing her Leadership in AI programme at the Indian School of Business — and brings that depth directly into how Lucid is built.</p>
                  <p>At Workfloww.ai, Shilpa leads the design and evolution of Lucid's platform architecture and its Agentic AI Suite — the engine that converts unstructured organizational knowledge into deployed execution, at scale, without friction.</p>
                  <p>Where Manish saw the gap from the business side, Shilpa is the one building the system that closes it. Together, they represent the two things every enterprise buyer needs to trust: deep domain knowledge of the problem, and the technical capability to solve it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section style={{ background: "#ffffff" }} className="ab-pad-sm">
          <div className="ab-container">
            <div className="ab-narrow">
              <p className="ab-eyebrow">The Mission</p>
              <div className="ab-divider" />
              <h2 className="ab-h2">The operating system for business execution. Built for the ground. Designed for global scale.</h2>
              <div className="ab-body">
                <p>We are not building a content platform. We are not building a compliance tool or a performance dashboard or a course library.</p>
                <p>We are building the layer that has been missing from every sales and operations organization — the layer between what leadership decides and what the frontline does. The layer that makes execution consistent, visible, and improvable.</p>
              </div>
              <blockquote className="ab-pullquote">
                Like Instagram made marketing a system every organization could run at scale — Lucid is making business execution a system that every frontline-heavy organization can finally depend on.
              </blockquote>
              <div className="ab-body">
                <p>We are starting in India — QSR, FMCG, Retail, Manufacturing, Beverages. We intend to define this category globally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section style={{ background: "#0b1220" }} className="ab-pad-sm">
          <div className="ab-container">
            <p className="ab-eyebrow-light">The Workfloww.ai Approach</p>
            <div className="ab-divider-light" />
            <div className="ab-approach-grid">
              {approachCards.map((card) => (
                <div key={card.title} className="ab-approach-card">
                  <div className="ab-approach-num">{card.num}</div>
                  <div className="ab-approach-title">{card.title}</div>
                  <p className="ab-approach-body">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "#ffffff" }} className="ab-pad">
          <div className="ab-container">
            <div className="ab-narrow">
              <h2 className="ab-cta-h2">
                If you've seen that moment — the gap between what you planned and what you found on the ground — you already know why we built this.
              </h2>
              <p className="ab-cta-sub">
                The Lighthouse Programme gives your organization 30 days to see what Lucid actually changes. No lengthy implementation. No commitment to continue. Just the answer to one question: what does your ground-level execution actually look like right now?
              </p>
              <div className="ab-cta-actions">
                <Button size="lg">Apply for the Lighthouse Programme</Button>
                <Button variant="outline" size="lg" className="ab-cta-secondary">
                  Talk to us →
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}