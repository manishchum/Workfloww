import React, { useState, useEffect } from "react";
import { openCheckout } from "../lib/ai-metamind/razorpay";
import RegistrationModal from "../components/RegistrationModal";
import { initMetaPixel } from "../utils/metaPixel";

/**
 * AI MetaMind — AI Strategic Leader (Expert Tier) Landing Page
 * Visual system: dark navy, indigo/blue accent, teal highlights.
 * 
 * Expert Track: AI Strategic Leader
 * 16+ Hours | 4 Live Sessions (4 hrs each | Saturday/Sunday) | ₹14,999 | Batch starts Sat, 20th June '26
 */

// ---------- Reusable bits ----------

const Eyebrow = ({ children }) => (
  <p className="eyebrow">{children}</p>
);

const ReserveButton = ({ className = "", children }) => (
  <button
    type="button"
    onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'expert_nav' } }))}
    className={`btn-primary ${className}`}
  >
    {children}
  </button>
);

const DotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

// ---------- Data ----------

const whyProgramme = [
  "Understand how AI works & how to apply it strategically",
  "Every learning element is grounded in practical application — Decision making, productivity, problem Solving, brainstorming & real workplace scenarios",
  "Instead of being overwhelmed by AI tools, its a structured step by step mastery",
  "Live classes ensure dialogue & reflection",
  "This programme equips you to stay relevant, valuable, and ahead of the curve.",
  "Simplifying the technology for non tech talent",
];

const uniqueCards = [
  {
    title: "Integrated AI Expertise",
    body: "The only program that seamlessly merges functional knowledge with practical AI tools across domains of sales, marketing, HR, Finance, Operations, strategy, and product development — preparing you for the future of work.",
  },
  {
    title: "Beyond Basic AI Tools",
    body: "Go beyond mere tool usage to truly enhance your AI tech skills, enabling you to understand and leverage technology more deeply in your domain. Covers aspects of Gen AI, Agentic AI and AI automations.",
  },
  {
    title: "AI-Powered Problem Solving",
    body: "Develop critical thinking and problem-solving skills for complex business challenges, utilizing cutting-edge AI tools to drive effective solutions across the roles in your domain.",
  },
  {
    title: "Designed by Business Leaders",
    body: "This program is specifically crafted for professionals by experienced business leaders, ensuring relevant, real-world insights and applications. We bring real life case studies through our AI consulting work to make the programme enriched and one of its kinds.",
  },
  {
    title: "Agentic AI & AI Automation",
    body: "Only programme which helps learners to build agents in enterprise environment. Be it Microsoft Co Pilot Studio or Google AI Studio. We give sandboxes to participants to experiment & prototype.",
  },
  {
    title: "Post Learning Support",
    body: "Only AI programme which gives 2 weeks extended support to participants to excel in the journey of AI Adoption post the session. Our engineering teams work with you to help you build AI solutions in your workflows.",
  },
];

const learningModules = [
  {
    title: "AI & Gen-AI Foundations",
    body: "Get a clear understanding of the technical terminologies without the 'tech-talk'. Cut through the jargon and understand how AI actually works at an organizational scale.",
  },
  {
    title: "Prompt Engineering Essentials",
    body: "Master frameworks to master clear instructions to get best results from AI tools. Unlock the hidden capabilities of advanced LLMs.",
  },
  {
    title: "AI Productivity Tool Kit",
    body: "Live show case of tools which saves hours of your manual effort. Learn how to configure and deploy these solutions directly inside your workflows.",
  },
  {
    title: "Responsible AI Basics",
    body: "Understand essentials of bias, fairness and ethics. Learn how to govern AI implementations and align them with corporate policies.",
  },
];

const areasForApplication = "Design AI-led HR interventions across the full talent lifecycle and establish automated cross-functional workflows across sales, marketing, operations, and finance.";

const whatYouGet = [
  "Prompt Playbook (Advanced Edition)",
  "AI Case Books & Implementation Maps",
  "AI Template Stack & Blueprint Templates",
  "Lifetime AI Community Access",
  "Fortnightly AMA with Alumni Mentors",
  "Certification of Completion",
];

const takeaways = [
  "Understand how AI works & how to apply it strategically in your role",
  "Build custom AI agents and automate workflows to save hours of manual work",
  "Prompt AI effectively and design AI-led solutions across business functions",
  "Become the AI strategic leader in your organization",
];

const faqs = [
  {
    q: "Who is this programme designed for?",
    a: "Professionals, managers, business leaders, and consultants who want to drive the AI agenda and build custom AI solutions. No prior technical or programming experience is needed — we focus on no-code tool stacks and strategic frameworks.",
  },
  {
    q: "Do I need any technical or coding background?",
    a: "Absolutely not. The program is designed specifically to simplify AI for non-technical leaders and professionals. You'll build intelligent agents using intuitive, no-code platforms like Microsoft CoPilot Studio and Google AI Studio.",
  },
  {
    q: "What will I be able to do after this programme?",
    a: "You'll understand how to apply AI strategically, build custom enterprise agents, automate manual workflows to save hours of labor, and implement responsible AI policies in your team — all within 16+ hours of live instruction.",
  },
  {
    q: "What if I can't attend a live session?",
    a: "You get full access to recorded content, so you won't miss anything. However, because our format is highly interactive, we encourage attending live to benefit from guided tool labs and peer discussions.",
  },
  {
    q: "How long is the programme, and what is the format?",
    a: "16+ hours across 4 live sessions (4 hours each, Saturday/Sunday). Delivered online — live, interactive, and hands-on — with instructor-led teaching, live prototype sandboxes, and tool labs.",
  },
  {
    q: "Can I take this if I haven't done the Beginner track?",
    a: "Yes! While the Beginner track serves as a helpful foundation, the Expert track is structured to start from fundamental concepts and rapidly ramp up to advanced hands-on agent building.",
  },
];

const credentials = [
  { value: '22+', label: 'Years Leadership Experience' },
  { value: 'Founder', label: 'AI Product Builder' },
  { value: 'Big 4', label: 'EY Advisory Background' },
];

const credentialsList = [
  'IIT Kanpur, AI in Leadership. MBA - SCMHRD',
];

function Coach() {
  return (
    <section className="bg-[#051121] py-24 lg:py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-14">
          YOUR FACILITATOR
        </p>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder + credentials */}
          <div>
            <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden mb-6 border border-white/8 bg-white/5">
              <img
                src="/images/ai-metamind/manish.png"
                alt="Manish Chum"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="bg-[#0a1928] border border-white/8 rounded-xl p-4 text-center"
                >
                  <p className="font-bold text-white text-xl leading-none mb-1">
                    {c.value}
                  </p>
                  <p className="text-white/35 text-xs leading-snug">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-2">
              Manish Chum
            </h2>
            <p className="text-[#6357d4] text-lg mb-2 font-medium">
              Founder, Workfloww.ai
            </p>
            <p className="text-white/35 text-sm mb-10">Gurugram, India</p>

            <div className="space-y-5 text-white/65 text-lg leading-relaxed">
              <h3 className="text-white font-semibold text-xl !mb-3">
                Professional Background
              </h3>
              <p>
                Manish Chum is founder of AI tech consulting firm Workfloww.ai. Senior
                industry expert with 20+ years of experience with organizations like
                EY, Airtel, and Mahindra, he specializes in designing and delivering
                GenAI and Agentic AI capability-building journeys for business teams
                across India and global markets. He works with CXOs and business
                leaders to embed practical AI workflows across business operations.
              </p>
            </div>

            <h3 className="text-white font-semibold text-xl mt-10 mb-4">
              Relevant Certifications / Credentials
            </h3>
            <ul className="space-y-3 text-white/65 text-lg leading-relaxed list-disc pl-5">
              {credentialsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-2 border-[#6357d4] pl-6">
              <p className="italic text-white/55 text-xl leading-relaxed">
                "My goal is simple: you leave this workshop with AI skills you can use
                on Monday morning. Not someday. This Monday."
              </p>
              <cite className="text-white/30 text-sm mt-3 block not-italic">
                — Manish Chum
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

const AIMetaMindExpert = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('expert_general');

  useEffect(() => {
    initMetaPixel();

    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setModalSource(`expert_${customEvent.detail?.source || 'general'}`);
      setIsModalOpen(true);
    };
    window.addEventListener('open-registration-modal', handleOpen);
    return () => window.removeEventListener('open-registration-modal', handleOpen);
  }, []);

  return (
    <div className="page">
      <style>{css}</style>

      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <span className="brand-main">AI MetaMind</span>
            <span className="brand-sub">AI STRATEGIC LEADER</span>
          </div>
          <ReserveButton className="nav-cta">Reserve My Seat — ₹14,999</ReserveButton>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="pill">
            <span className="pill-dot" />
            Batch starting Saturday, 20th June '26 · Expert Track
          </div>

          <h1 className="hero-title">
            The Future of AI Is Here.
            <br />
            <span className="accent">Be the One Who Leads It.</span>
          </h1>

          <p className="hero-sub">
            AI Strategic Leader is the expert track of AI MetaMind — built for professionals,
            business leaders, and managers who want to drive the AI agenda and build custom AI solutions.
            Live classes. Weekend programme. For professionals, students, job aspirants, and curious learners.
          </p>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'expert_hero' } }))}
            className="hero-btn"
          >
            Reserve My Seat — ₹14,999
          </button>

          <p className="hero-meta">
            16+ hours <span className="dot">•</span> 4 live sessions{" "}
            <span className="dot">•</span> Live + interactive + hands-on{" "}
            <span className="dot">•</span> Recording included
          </p>
        </div>
      </section>

      {/* WHY THIS PROGRAMME */}
      <section className="section">
        <div className="container">
          <Eyebrow>Why This Programme?</Eyebrow>
          <h2 className="h2">Built to Make AI Make Sense</h2>
          <p className="lede">
            Not theory. Not jargon. A structured path from confused to confident — in
            just one weekend.
          </p>

          <ul className="check-list mt-xl single-col">
            {whyProgramme.map((item) => (
              <li key={item}>
                <span className="check-bullet">
                  <DotIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT'S ONE OF ITS KIND */}
      <section className="section alt">
        <div className="container">
          <Eyebrow>What Makes This Different</Eyebrow>
          <h2 className="h2">How This Programme Is One of Its Kind</h2>

          <div className="grid-3 mt-xl">
            {uniqueCards.map((item) => (
              <div className="card card-teal" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME OVERVIEW */}
      <section className="section">
        <div className="container">
          <Eyebrow>Programme Overview</Eyebrow>
          <h2 className="h2">AI Strategic Leader — Expert</h2>
          <p className="lede">
            For business leaders looking to drive the AI agenda and build custom AI solutions today.
          </p>

          <div className="grid-4 mt-xl">
            {[
              { label: "Duration", value: "16+ hours · 4 live sessions (4 hrs each, Sat/Sun)" },
              { label: "Learning Format", value: "Instructor-led, hands-on tool labs" },
              { label: "Delivery", value: "Delivered online — live, interactive, hands-on" },
              { label: "Access", value: "Full access to recorded content" },
            ].map((item) => (
              <div className="stat-card" key={item.label}>
                <p className="stat-label">{item.label}</p>
                <p className="stat-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="section alt">
        <div className="container">
          <Eyebrow>What You'll Learn</Eyebrow>
          <h2 className="h2">Four Modules. Practical from Day One.</h2>
          <p className="lede">
            Everything you need to go from AI-aware to AI-expert.
          </p>

          <div className="grid-2 mt-xl">
            {learningModules.map((mod) => (
              <div className="card card-teal" key={mod.title}>
                <h3 className="card-title">{mod.title}</h3>
                <p className="card-body">{mod.body}</p>
              </div>
            ))}
          </div>

          <div className="card card-teal wide mt-md">
            <h3 className="card-title">Areas for Application of AI</h3>
            <p className="card-body">{areasForApplication}</p>
          </div>
        </div>
      </section>

      {/* CAPSTONE & EVALUATION */}
      <section className="section">
        <div className="container grid-2-uneven">
          <div>
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="h2 small">How You're Evaluated</h2>
            <div className="mini-stack">
              <div className="card card-flat">
                <h3 className="card-title">Hands-on Tool Labs — 50%</h3>
                <p className="card-body">
                  Apply what you learn in real time during guided tool labs. Practise
                  prompting, build agents in sandboxes, and configure workflows with live
                  instructor support.
                </p>
              </div>
              <div className="card card-flat">
                <h3 className="card-title">Quizzes & Roadmap — 50%</h3>
                <p className="card-body">
                  Test your technical concepts with scenario-based quizzes and present your
                  customized AI roadmap tailored for your business function.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>What You Get</Eyebrow>
            <h2 className="h2 small">Your Takeaway Kit</h2>
            <ul className="check-list">
              {whatYouGet.map((item) => (
                <li key={item}>
                  <span className="check-bullet">
                    <DotIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="highlight-banner mt-md">AI Agent Sandbox Access — Included</div>
          </div>
        </div>
      </section>

      {/* YOUR TAKEAWAY */}
      <section className="section alt">
        <div className="container">
          <Eyebrow>Your Takeaway</Eyebrow>
          <h2 className="h2">By the End, AI Won't Feel Like a Black Box</h2>
          <p className="lede">You'll understand it, build with it, and lead your organization with confidence.</p>

          <ul className="check-list mt-xl single-col">
            {takeaways.map((item) => (
              <li key={item}>
                <span className="check-bullet">
                  <DotIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KEY TOOLS */}
      <section className="section">
        <div className="container narrow center">
          <img
            src="/images/ai-tools.png"
            alt="AI tools"
            className="mx-auto w-full max-w-5xl object-contain"
          />
        </div>
      </section>

      {/* PRICING */}
      <section className="section alt">
        <div className="container grid-2-uneven">
          <div>
            <Eyebrow>Investment</Eyebrow>
            <h2 className="h2">
              Deep-Dive Cohort. <span className="accent">A Real Strategic Edge</span> in AI.
            </h2>
            <p className="lede">
              The Expert track is the comprehensive roadmap to leading AI integration — built
              for leaders and professionals who want to build, automate, and drive the AI agenda.
            </p>

            <ul className="emoji-list">
              <li><span>🔴</span> 16+ hours · 4 live sessions on Zoom</li>
              <li><span>🎬</span> Full access to recorded content</li>
              <li><span>🤖</span> Custom GPTs, CoPilot Studio, and Google AI Studio labs</li>
              <li><span>🛠️</span> Live agent building and automation sandboxes</li>
              <li><span>📚</span> Advanced Prompt Playbook & Implementation Maps</li>
              <li><span>🏆</span> Certificate of completion</li>
            </ul>
          </div>

          <div className="price-card">
            <p className="price-pill">⚡ Batch starting Sat, 20th June '26 — limited seats</p>

            <p className="price-tier">AI Strategic Leader — Expert</p>
            <p className="price-main">₹14,999</p>
            <p className="price-note">16+ hours · 4 weekends · One-time payment</p>

            <button onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'expert_pricing' } }))} className="hero-btn price-cta">
              Reserve My Seat — ₹14,999
            </button>

            <p className="price-secure">🔒 Secure checkout via Razorpay · SSL encrypted</p>

            <div className="guarantee">
              <strong>For queries:</strong> manish.chum@workfloww.ai ·{" "}
              +91-9958824445
            </div>
          </div>
        </div>
      </section>

      {/* COACH */}
      <Coach />

      {/* TRACK COMPARISON */}
      <section className="section">
        <div className="container">
          <Eyebrow>All Tracks</Eyebrow>
          <h2 className="h2">Start Here. Go Further.</h2>
          <p className="lede">Complete the Beginner track and continue your AI journey at your own pace.</p>
          <div className="grid-3 mt-xl">
            {[
              { tier: "Beginner", name: "AI Essentials", price: "₹499", duration: "4+ hrs · 2 sessions", desc: "Cut through jargon. Start using AI today.", active: false },
              { tier: "Intermediate", name: "AI Practitioner", price: "₹899", duration: "9+ hrs · 3 sessions", desc: "Integrate AI into your daily workflow & decision-making.", active: false },
              { tier: "Expert", name: "AI Strategic Leader", price: "₹14,999", duration: "16+ hrs · 4 sessions", desc: "Drive the AI agenda. Build custom AI solutions.", active: true },
            ].map((track) => (
              <div className={`card ${track.active ? "card-teal card-active" : "card-dim"}`} key={track.tier}>
                {track.active && <span className="active-badge">You are here</span>}
                <p className="track-tier">{track.tier}</p>
                <h3 className="card-title">{track.name}</h3>
                <p className="track-price">{track.price}</p>
                <p className="track-duration">{track.duration}</p>
                <p className="card-body">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt">
        <div className="container narrow">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="h2">Common Questions</h2>

          <div className="faq-list mt-xl">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="faq-answer">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="closing">
        <div className="container narrow center">
          <Eyebrow>The Decision Point</Eyebrow>
          <h2 className="closing-title">Everyone's Using AI. Learn to Lead It.</h2>
          <p className="closing-quote">
            "The best time to start learning AI was six months ago. The second best time is
            this Saturday."
          </p>
          <p className="closing-sub">
            16+ hours. ₹14,999. One programme built to help you lead the AI future.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'expert_final-cta' } }))} className="hero-btn">
            Reserve My Seat — ₹14,999
          </button>
          <p className="hero-meta mt-md">
            Limited seats <span className="dot">•</span> Live on Zoom{" "}
            <span className="dot">•</span> Recording included{" "}
            <span className="dot">•</span> Certificate included
          </p>
        </div>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="brand">
                <span className="brand-main">AI MetaMind</span>
                <span className="brand-sub">AI STRATEGIC LEADER</span>
              </div>
              <p className="footer-tag">Live AI upskilling — for professionals, leaders, and managers</p>
            </div>
            <div className="footer-links">
              <a 
                href="/privacy-policy"
                className="hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
            <p className="footer-copy">© 2026 Workfloww. All rights reserved.</p>
          </div>
          <div className="container footer-contact">
            <p>
              For queries:{" "}
              <a href="mailto:manish.chum@workfloww.ai">manish.chum@workfloww.ai</a> ·{" "}
              <a href="tel:+919958824445">+91-9958824445</a>
            </p>
          </div>
        </footer>
      </section>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
      />
    </div>
  );
};

export default AIMetaMindExpert;

// ---------- Styles ----------

const css = `
:root {
  --bg: #0a0e1a;
  --bg-alt: #0d1322;
  --card: #10162a;
  --border: rgba(255,255,255,0.08);
  --border-soft: rgba(255,255,255,0.06);
  --teal-border: rgba(45,212,191,0.35);
  --text: #f4f6fb;
  --text-dim: #aab2c5;
  --text-faint: #7d869c;
  --accent: #6f7bf7;
  --accent-bright: #818cf8;
  --teal: #2dd4bf;
  --blue: #2f5bff;
  --blue-hover: #4470ff;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-pill: 999px;
}

* { box-sizing: border-box; }

html, body, #root { margin: 0; padding: 0; height: 100%; background: var(--bg); }

.page {
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", "General Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.container { max-width: 1180px; margin: 0 auto; padding: 0 28px; }
.container.narrow { max-width: 880px; }
.container.center { text-align: center; }

.section { padding: 24px 0; border-top: 1px solid var(--border-soft); }
.section.alt { background: var(--bg-alt); }

.mt-xl { margin-top: 48px; }
.mt-md { margin-top: 28px; }

.eyebrow {
  color: var(--accent-bright);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 16px;
}

.h2 {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 16px;
  max-width: 760px;
}
.h2.small { font-size: clamp(24px, 3vw, 32px); max-width: 100%; }
.h2.center { text-align: center; margin: 0 auto 0; }

.lede { color: var(--text-dim); font-size: 18px; max-width: 640px; margin: 0; }

/* NAV */
.nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(10,14,26,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-soft);
}
.nav-inner {
  max-width: 1180px; margin: 0 auto; padding: 18px 28px;
  display: flex; align-items: center; justify-content: space-between;
}
.brand { display: flex; align-items: baseline; gap: 10px; }
.brand-main { font-weight: 800; font-size: 19px; letter-spacing: -0.01em; }
.brand-sub { font-size: 11px; letter-spacing: 0.12em; color: var(--text-faint); font-weight: 700; }
.nav-cta { padding: 11px 22px; font-size: 14px; }

/* BUTTON */
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--blue); color: #fff; font-weight: 700; text-decoration: none;
  padding: 17px 34px; border-radius: var(--radius-pill); font-size: 16px;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  white-space: nowrap; border: none; cursor: pointer;
}
.btn-primary:hover {
  background: var(--blue-hover); transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(47,91,255,0.35);
}

.hero-btn {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--blue); color: #fff; font-weight: 700;
  padding: 17px 40px; border-radius: var(--radius-pill); font-size: 18px;
  border: none; cursor: pointer; margin-bottom: 22px;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 30px rgba(47,91,255,0.3);
}
.hero-btn:hover {
  background: var(--blue-hover); transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(47,91,255,0.4);
}

/* HERO */
.hero { padding: 16px 0 0; }
.hero-inner {
  max-width: 880px; margin: 0 auto; padding: 56px 28px 64px;
  text-align: center; display: flex; flex-direction: column; align-items: center;
}
.pill {
  display: inline-flex; align-items: center; gap: 9px;
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-pill); padding: 9px 18px;
  font-size: 14px; color: var(--text-dim); margin-bottom: 36px;
}
.pill-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--teal); }
.hero-title {
  font-size: clamp(38px, 6.4vw, 64px); font-weight: 800; letter-spacing: -0.03em;
  line-height: 1.1; margin: 0 0 28px;
}
.accent { color: var(--accent-bright); }
.hero-sub { color: var(--text-dim); font-size: 18px; max-width: 620px; margin: 0 0 40px; }
.hero-meta { color: var(--text-faint); font-size: 14px; margin: 0; }
.dot { margin: 0 4px; opacity: 0.5; }

.cohort-banner {
  margin-top: 56px; width: 100%;
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 26px 28px; display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; text-align: left;
}
.cohort-label { color: var(--accent-bright); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; margin: 0 0 6px; }
.cohort-date { font-size: 22px; font-weight: 800; margin: 0; }
.cohort-side { color: var(--text-faint); font-size: 14px; margin: 0; }

/* GRIDS */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.grid-2-uneven { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: start; }

@media (max-width: 980px) {
  .grid-3 { grid-template-columns: 1fr 1fr; }
  .grid-4 { grid-template-columns: 1fr 1fr; }
  .grid-2-uneven { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}

/* CARDS */
.card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; position: relative; }
.card-flat { padding: 28px; }
.card-teal { border-color: var(--teal-border); }
.card-teal.wide { padding: 32px; }
.card-dim { opacity: 0.6; }
.card-active { opacity: 1; box-shadow: 0 0 0 2px var(--teal); }
.card-title { font-size: 19px; font-weight: 700; margin: 0 0 10px; letter-spacing: -0.01em; }
.card-body { color: var(--text-dim); font-size: 15px; margin: 0; }

/* TRACK COMPARISON */
.active-badge {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: var(--teal); color: #0a0e1a; font-size: 11px; font-weight: 700;
  padding: 4px 14px; border-radius: var(--radius-pill); white-space: nowrap;
  letter-spacing: 0.06em; text-transform: uppercase;
}
.track-tier { color: var(--accent-bright); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 8px; }
.track-price { font-size: 28px; font-weight: 800; margin: 12px 0 4px; letter-spacing: -0.01em; }
.track-duration { color: var(--text-faint); font-size: 13px; margin: 0 0 14px; }

/* STAT CARDS */
.stat-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; }
.stat-label { color: var(--accent-bright); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px; }
.stat-value { font-size: 15px; color: var(--text); margin: 0; line-height: 1.5; }

/* CHECK LIST */
.check-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 22px; }
.check-list.compact { gap: 14px; }
.check-list.single-col { max-width: 720px; }
.check-list li { display: flex; gap: 14px; color: var(--text-dim); font-size: 16px; align-items: flex-start; }
.check-bullet {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid var(--teal); color: var(--teal);
  display: flex; align-items: center; justify-content: center; margin-top: 1px;
}

/* EMOJI LIST */
.emoji-list { list-style: none; margin: 28px 0 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.emoji-list li { display: flex; gap: 12px; color: var(--text-dim); font-size: 16px; align-items: flex-start; }
.emoji-list li span:first-child { flex-shrink: 0; }

/* TOOL CHIPS */
.tool-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.tool-chip {
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-pill);
  padding: 10px 20px; font-size: 14px; font-weight: 600; color: var(--text);
}

/* HIGHLIGHT BANNER */
.highlight-banner {
  background: rgba(45,212,191,0.12); color: var(--teal);
  border-radius: var(--radius-md); padding: 18px 22px;
  font-weight: 700; font-size: 16px; text-align: center;
}

/* MINI STACK */
.mini-stack { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }

/* PRICING */
.price-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; position: sticky; top: 100px; }
.price-pill {
  background: rgba(45,212,191,0.12); color: var(--teal); border-radius: var(--radius-pill);
  padding: 10px 16px; font-size: 13px; font-weight: 600; text-align: center; margin: 0 0 24px;
}
.price-tier { color: var(--text-dim); font-size: 14px; font-weight: 600; margin: 0 0 6px; }
.price-main { font-size: 48px; font-weight: 800; margin: 4px 0 6px; letter-spacing: -0.02em; }
.price-note { color: var(--text-faint); font-size: 14px; margin: 0 0 24px; }
.price-cta { width: 100%; margin-bottom: 14px; }
.price-secure { text-align: center; color: var(--text-faint); font-size: 13px; margin: 0; }
.guarantee { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border-soft); color: var(--text-dim); font-size: 14px; line-height: 1.6; }

/* FAQ */
.faq-list { display: flex; flex-direction: column; gap: 12px; }
.faq-item { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
.faq-question {
  width: 100%; background: none; border: none; color: var(--text); font-size: 16px; font-weight: 700;
  padding: 22px 26px; display: flex; align-items: center; justify-content: space-between;
  cursor: pointer; text-align: left; font-family: inherit;
}
.faq-icon { color: var(--teal); font-size: 20px; font-weight: 400; flex-shrink: 0; margin-left: 16px; }
.faq-answer { color: var(--text-dim); font-size: 15px; padding: 0 26px 22px; margin: 0; line-height: 1.6; }

/* CLOSING */
.closing { background: linear-gradient(180deg, var(--bg) 0%, #131b34 100%); padding: 96px 0 0; }
.closing-title { font-size: clamp(32px, 5vw, 48px); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 28px; }
.closing-quote { font-style: italic; color: var(--text-dim); font-size: 20px; max-width: 680px; margin: 0 auto 24px; line-height: 1.5; }
.closing-sub { color: var(--text-dim); font-size: 16px; max-width: 600px; margin: 0 auto 36px; }

/* FOOTER */
.footer { padding: 56px 0 32px; margin-top: 64px; border-top: 1px solid var(--border-soft); }
.footer-inner { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
.footer-tag { color: var(--text-faint); font-size: 14px; margin: 10px 0 0; }
.footer-links { display: flex; gap: 24px; }
.footer-link { color: var(--text-dim); text-decoration: none; font-size: 14px; }
.footer-link:hover { color: var(--text); }
.footer-copy { color: var(--text-faint); font-size: 13px; margin: 0; }
.footer-contact { margin-top: 32px; text-align: center; color: var(--text-faint); font-size: 14px; }
.footer-contact a { color: var(--teal); text-decoration: none; }

@media (max-width: 640px) {
  .nav-cta { display: none; }
  .hero-inner { padding: 40px 24px 48px; }
  .section { padding: 64px 0; }
  .container { padding: 0 20px; }
}
`;
