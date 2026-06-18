// import React, { useState } from "react";
// import { openCheckout } from "../lib/ai-metamind/razorpay";

// /**
//  * AI MetaMind — AI Strategic Leader (Expert Tier) Landing Page
//  * Same visual system as the AI MetaMind HR Series page (dark navy,
//  * indigo/blue accent, bold rounded sans display type), extended with the
//  * teal/cyan accent used in this deck's card borders.
//  *
//  * Single tier shown: AI Strategic Leader – Expert
//  * 16+ Hours | 4 Live Sessions | ₹14,999 | Batch starts Sat, 20th June '26
//  *
//  * Drop this file into your React app. Replace RAZORPAY_LINK below with your
//  * real Razorpay payment link — every "Reserve My Seat" button uses it.
//  */

// // Replace this with your real Razorpay short-link for the ₹14,999 payment
// const RAZORPAY_LINK = "https://rzp.io/REPLACE_WITH_14999_LINK";

// // ---------- Reusable bits ----------

// const Eyebrow = ({ children }: { children: React.ReactNode }) => (
//   <p className="eyebrow">{children}</p>
// );

// const ReserveButton = ({
//   className = "",
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => (
//   <button type="button" onClick={openCheckout} className={`btn-primary ${className}`}>
//     {children}
//   </button>
// );

// const DotIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
//     <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
//   </svg>
// );

// // ---------- Data ----------

// const whyProgramme = [
//   "Understand how AI works & how to apply it",
//   "Every learning element is grounded in practical application — decision making, productivity, problem solving, brainstorming & real workplace scenarios",
//   "Instead of being overwhelmed by AI tools, it's a structured step-by-step mastery",
//   "Live classes ensure dialogue & reflection",
//   "This programme equips you to stay relevant, valuable, and ahead of the curve",
//   "Simplifying the technology for non-tech talent",
// ];

// const uniqueCards = [
//   {
//     title: "Integrated AI Expertise",
//     body: "The only program that seamlessly merges functional knowledge with practical AI tools across domains of sales, marketing, HR, finance, operations, strategy, and product development — preparing you for the future of work.",
//   },
//   {
//     title: "Beyond Basic AI Tools",
//     body: "Go beyond mere tool usage to truly enhance your AI tech skills, enabling you to understand and leverage technology more deeply in your domain. Covers Gen AI, Agentic AI, and AI automations.",
//   },
//   {
//     title: "AI-Powered Problem Solving",
//     body: "Develop critical thinking and problem-solving skills for complex business challenges, using cutting-edge AI tools to drive effective solutions across the roles in your domain.",
//   },
//   {
//     title: "Designed by Business Leaders",
//     body: "Crafted for professionals by experienced business leaders, ensuring relevant, real-world insights — enriched with real-life case studies from our AI consulting work.",
//   },
//   {
//     title: "Agentic AI & AI Automation",
//     body: "The only programme that helps learners build agents in an enterprise environment — Microsoft Copilot Studio or Google AI Studio — with sandboxes to experiment & prototype.",
//   },
//   {
//     title: "Post Learning Support",
//     body: "Get extended support to excel in your AI adoption journey post-session. Our engineering teams work with you to help build AI solutions into your real workflows.",
//   },
// ];

// const learningModules = [
//   {
//     title: "Agentic AI",
//     body: "Cover the nuances of Agentic AI — framework, types, and applications. We go deep on enterprise tools like Microsoft and Google.",
//   },
//   {
//     title: "AI Automations",
//     body: "Learn how to automate processes using AI tools to be dramatically more productive in your day-to-day role.",
//   },
//   {
//     title: "Post Learning Support",
//     body: "Get extended weeks of AI tech support from our engineering teams as you build your own AI product.",
//   },
//   {
//     title: "Capstone Project",
//     body: "Become an AI builder by building an AI product to solve your biggest problem statement.",
//   },
// ];

// const everythingIncluded = [
//   "Everything in Beginner: AI & Gen-AI foundations, prompt engineering essentials, AI productivity tool kit, responsible AI basics",
//   "Everything in Intermediate: workflow mapping, advanced prompting & templates, your own AI learning roadmap, AI analytics, AI practice test",
//   "Plus Agentic AI, AI automations, post-learning support, and a hands-on capstone project",
// ];

// const functionalUseCases =
//   "Solve live functional use cases across sales, marketing, finance, and more. Get hands-on understanding of solving your domain's problem statements using AI tools.";

// const toolNames = [
//   "ChatGPT",
//   "Claude",
//   "NotebookLM",
//   "Make",
//   "Gemini",
//   "Perplexity",
//   "Julius",
//   "Midjourney",
//   "Copilot",
//   "Zapier",
//   "Gamma AI",
//   "Sora",
//   "Napkin AI",
//   "ElevenLabs",
//   "Lovable",
//   "DeepSeek",
//   "Grok",
//   "Google AI Studio",
//   "DALL·E",
// ];

// const whatYouGet = [
//   "Prompt Playbook",
//   "AI Case Books",
//   "AI Template Stack",
//   "Lifetime AI Community",
//   "Fortnightly AMA with Alumni Mentors",
//   "Certification of Completion",
// ];

// const takeaways = [
//   "Build AI-powered solutions",
//   "Automate what slows you down",
//   "Boost strategic value of your role using AI",
//   "Become a trusted AI functional expert",
// ];

// const faqs = [
//   {
//     q: "Who is this programme designed for?",
//     a: "Professionals, students, job aspirants, and curious learners. The Expert track specifically suits leaders aiming to drive the AI agenda at an organizational or business level and build custom solutions.",
//   },
//   {
//     q: "Do I need any technical or coding background?",
//     a: "No. The programme is designed to simplify AI technology for non-technical talent. You'll work with no-code tools and guided frameworks throughout — including the Agentic AI and automation modules.",
//   },
//   {
//     q: "What's covered that isn't in the Beginner or Intermediate tracks?",
//     a: "The Expert track includes everything from Beginner and Intermediate, plus Agentic AI frameworks, enterprise tools like Microsoft Copilot Studio and Google AI Studio, AI automations, a capstone project, and solving live functional use cases across sales, marketing, and finance.",
//   },
//   {
//     q: "What if I can't attend a live session?",
//     a: "You get full access to recorded content, so you won't miss anything. The live, interactive format is where most participants get the most value, so we recommend attending live wherever possible.",
//   },
//   {
//     q: "How long is the programme, and what is the format?",
//     a: "16+ hours across 4 live sessions (4 hours each, Saturday/Sunday). Delivered online, live and interactive, with instructor-led teaching and hands-on tool labs.",
//   },
// ];

// // ---------- Component ----------

// const AIMetaMindExpert: React.FC = () => {
//   const [openFaq, setOpenFaq] = useState<number | null>(0);

//   return (
//     <div className="page">
//       <style>{css}</style>

//       {/* NAV */}
//       <header className="nav">
//         <div className="nav-inner">
//           <div className="brand">
//             <span className="brand-main">AI MetaMind</span>
//             <span className="brand-sub">STRATEGIC LEADER</span>
//           </div>
//           <ReserveButton className="nav-cta">Reserve My Seat — ₹14,999</ReserveButton>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="hero">
//         <div className="hero-inner">
//           <div className="pill">
//             <span className="pill-dot" />
//             Batch starting Saturday, 20th June&apos;26 · Expert Track
//           </div>

//           <h1 className="hero-title">
//             The Future of AI Is Here.
//             <br />
//             <span className="accent">Be the One Who Leads It.</span>
//           </h1>

//           <p className="hero-sub">
//             AI Strategic Leader is the expert-level track of AI MetaMind — built for
//             leaders aiming to drive the AI agenda at an organizational level and build
//             custom AI solutions. Live classes. Weekend programme. For professionals,
//             students, job aspirants, and curious learners.
//           </p>

//           <button
//           onClick={openCheckout}
//           className="
//           bg-blue-600
//           hover:bg-blue-700
//           text-white
//           font-semibold
//           text-lg
//           px-12
//           py-4
//           rounded-full
//           shadow-xl
//           shadow-blue-600/25
//           mb-8
//           transition
//           hover:scale-105
//           "
//         >

//           Reserve My Seat — ₹14999

//         </button>

//           <p className="hero-meta">
//             16+ hours <span className="dot">•</span> 4 live sessions{" "}
//             <span className="dot">•</span> Live + interactive + hands-on{" "}
//             <span className="dot">•</span> Recording included
//           </p>

//           <div className="cohort-banner">
//             <div>
//               <p className="cohort-label">NEXT BATCH</p>
//               <p className="cohort-date">🚀 Starting Saturday, 20th June&apos;26</p>
//             </div>
//             <p className="cohort-side">4 weekends · 4 hrs each · ₹14,999</p>
//           </div>
//         </div>
//       </section>

//       {/* WHY THIS PROGRAMME */}
//       <section className="section">
//         <div className="container">
//           <Eyebrow>Why This Programme?</Eyebrow>
//           <h2 className="h2">Built to Make AI Make Sense</h2>
//           <p className="lede">
//             Not theory. Not jargon. A structured path from confused to confident.
//           </p>

//           <ul className="check-list mt-xl single-col">
//             {whyProgramme.map((item) => (
//               <li key={item}>
//                 <span className="check-bullet">
//                   <DotIcon />
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* HOW IT'S ONE OF ITS KIND */}
//       <section className="section alt">
//         <div className="container">
//           <Eyebrow>What Makes This Different</Eyebrow>
//           <h2 className="h2">How This Programme Is One of Its Kind</h2>

//           <div className="grid-3 mt-xl">
//             {uniqueCards.map((item) => (
//               <div className="card card-teal" key={item.title}>
//                 <h3 className="card-title">{item.title}</h3>
//                 <p className="card-body">{item.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROGRAMME OVERVIEW */}
//       <section className="section">
//         <div className="container">
//           <Eyebrow>Programme Overview</Eyebrow>
//           <h2 className="h2">AI Strategic Leader — Expert</h2>
//           <p className="lede">
//             For leaders aiming to drive the AI agenda at an organizational or business
//             level and build custom solutions.
//           </p>

//           <div className="grid-4 mt-xl">
//             {[
//               { label: "Duration", value: "16+ hours · 4 live sessions (4 hrs each, Sat/Sun)" },
//               { label: "Learning Format", value: "Instructor-led, hands-on tool labs" },
//               { label: "Delivery", value: "Delivered online — live, interactive, hands-on" },
//               { label: "Access", value: "Full access to recorded content" },
//             ].map((item) => (
//               <div className="stat-card" key={item.label}>
//                 <p className="stat-label">{item.label}</p>
//                 <p className="stat-value">{item.value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHAT YOU'LL LEARN */}
//       <section className="section alt">
//         <div className="container">
//           <Eyebrow>What You&apos;ll Learn</Eyebrow>
//           <h2 className="h2">Everything in Beginner &amp; Intermediate. Plus the Expert Layer.</h2>

//           <ul className="check-list mt-md single-col compact">
//             {everythingIncluded.map((item) => (
//               <li key={item}>
//                 <span className="check-bullet">
//                   <DotIcon />
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <div className="grid-2 mt-xl">
//             {learningModules.map((mod) => (
//               <div className="card card-teal" key={mod.title}>
//                 <h3 className="card-title">{mod.title}</h3>
//                 <p className="card-body">{mod.body}</p>
//               </div>
//             ))}
//           </div>

//           <div className="card card-teal wide mt-md">
//             <h3 className="card-title">Solving Functional Use Cases</h3>
//             <p className="card-body">{functionalUseCases}</p>
//           </div>
//         </div>
//       </section>

//       {/* CAPSTONE & EVALUATION */}
//       <section className="section">
//         <div className="container grid-2-uneven">
//           <div>
//             <Eyebrow>Capstone &amp; Evaluation</Eyebrow>
//             <h2 className="h2 small">How You&apos;re Evaluated</h2>
//             <div className="mini-stack">
//               <div className="card card-flat">
//                 <h3 className="card-title">Team Project — 50%</h3>
//                 <p className="card-body">
//                   Solve a real business challenge using AI tools. Work collaboratively to
//                   apply the frameworks, tools, and ethics covered in class.
//                 </p>
//               </div>
//               <div className="card card-flat">
//                 <h3 className="card-title">Quizzes — 50%</h3>
//                 <p className="card-body">
//                   Test your understanding through scenario-based quizzes and live
//                   interactions.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <Eyebrow>What You Get</Eyebrow>
//             <h2 className="h2 small">Your Takeaway Kit</h2>
//             <ul className="check-list">
//               {whatYouGet.map((item) => (
//                 <li key={item}>
//                   <span className="check-bullet">
//                     <DotIcon />
//                   </span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <div className="highlight-banner mt-md">AI Tool Kit Worth ₹10,000 — Free</div>
//           </div>
//         </div>
//       </section>

//       {/* YOUR TAKEAWAY */}
//       <section className="section alt">
//         <div className="container">
//           <Eyebrow>Your Takeaway</Eyebrow>
//           <h2 className="h2">By the End, You Won&apos;t Just Know AI</h2>
//           <p className="lede">You&apos;ll deploy it, sell it, and lead with it.</p>

//           <ul className="check-list mt-xl single-col">
//             {takeaways.map((item) => (
//               <li key={item}>
//                 <span className="check-bullet">
//                   <DotIcon />
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

      {/* KEY TOOLS */}
//       <section className="section">
//         <div className="container narrow center">
//           <img
//           src="/images/ai-tools.png"
//           alt="AI tools"
//           className="
//           mx-auto
//           w-full
//           max-w-5xl
//           object-contain
//           "
//         />

// //         </div>
// //       </section>

//       {/* PRICING */}
//       <section className="section alt">
//         <div className="container grid-2-uneven">
//           <div>
//             <Eyebrow>Investment</Eyebrow>
//             <h2 className="h2">
//               One Programme. <span className="accent">A Leadership Edge</span> in AI.
//             </h2>
//             <p className="lede">
//               The Expert track is the deepest tier of AI MetaMind — built for leaders who
//               want to drive the AI agenda, not just keep up with it.
//             </p>

//             <ul className="emoji-list">
//               <li><span>🔴</span> 16+ hours · 4 live sessions on Zoom</li>
//               <li><span>🎬</span> Full access to recorded content</li>
//               <li><span>🤖</span> Agentic AI &amp; enterprise automation modules</li>
//               <li><span>🛠️</span> Sandbox access — Microsoft Copilot Studio &amp; Google AI Studio</li>
//               <li><span>🚀</span> Capstone project — build your own AI product</li>
//               <li><span>🏆</span> Certificate of completion</li>
//             </ul>
//           </div>

//           <div className="price-card">
//             <p className="price-pill">⚡ Batch starting Sat, 20th June&apos;26 — limited seats</p>

//             <p className="price-tier">AI Strategic Leader — Expert</p>
//             <p className="price-main">₹14,999</p>
//             <p className="price-note">16+ hours · 4 weekends · One-time payment</p>

//             <button
//           onClick={openCheckout}
//           className="
//           bg-blue-600
//           hover:bg-blue-700
//           text-white
//           font-semibold
//           text-lg
//           px-12
//           py-4
//           rounded-full
//           shadow-xl
//           shadow-blue-600/25
//           mb-8
//           transition
//           hover:scale-105
//           "
//         >

//           Reserve My Seat — ₹14999

//         </button>
//             <p className="price-secure">🔒 Secure checkout via Razorpay · SSL encrypted</p>

//             <div className="guarantee">
//               <strong>For queries:</strong> manish.chum@workfloww.ai ·{" "}
//               +91-9958824445
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="section">
//         <div className="container narrow">
//           <Eyebrow>FAQ</Eyebrow>
//           <h2 className="h2">Common Questions</h2>

//           <div className="faq-list mt-xl">
//             {faqs.map((item, i) => {
//               const isOpen = openFaq === i;
//               return (
//                 <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
//                   <button
//                     className="faq-question"
//                     onClick={() => setOpenFaq(isOpen ? null : i)}
//                     aria-expanded={isOpen}
//                   >
//                     <span>{item.q}</span>
//                     <span className="faq-icon">{isOpen ? "−" : "+"}</span>
//                   </button>
//                   {isOpen && <p className="faq-answer">{item.a}</p>}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CLOSING CTA */}
//       <section className="closing">
//         <div className="container narrow center">
//           <Eyebrow>The Decision Point</Eyebrow>
//           <h2 className="closing-title">Lead the AI Agenda. Don&apos;t Just Watch It.</h2>
//           <p className="closing-quote">
//             &quot;Six months from now, the question won&apos;t be whether you should have
//             learned AI. It&apos;ll be how much further ahead you could have been.&quot;
//           </p>
//           <p className="closing-sub">
//             16+ hours. ₹14,999. One programme built to make you the AI-fluent leader in
//             the room.
//           </p>
//           <button
//           onClick={openCheckout}
//           className="
//           bg-blue-600
//           hover:bg-blue-700
//           text-white
//           font-semibold
//           text-lg
//           px-12
//           py-4
//           rounded-full
//           shadow-xl
//           shadow-blue-600/25
//           mb-8
//           transition
//           hover:scale-105
//           "
//         >

//           Reserve My Seat — ₹14999

//         </button>
//           <p className="hero-meta">
//             Limited seats <span className="dot">•</span> Live on Zoom{" "}
//             <span className="dot">•</span> Recording included{" "}
//             <span className="dot">•</span> Capstone project included
//           </p>
//         </div>

//         <footer className="footer">
//           <div className="container footer-inner">
//             <div>
//               <div className="brand">
//                 <span className="brand-main">AI MetaMind</span>
//                 <span className="brand-sub">STRATEGIC LEADER</span>
//               </div>
//               <p className="footer-tag">Live AI upskilling — for professionals, students, and job aspirants</p>
//             </div>
//             <div className="footer-links">
//               <a href="#" className="footer-link">Privacy Policy</a>
//               <a href="#" className="footer-link">Contact</a>
//             </div>
//             <p className="footer-copy">© 2026 Workfloww. All rights reserved.</p>
//           </div>
//           <div className="container footer-contact">
//             <p>
//               For queries:{" "}
//               <a href="mailto:manish.chum@workfloww.ai">manish.chum@workfloww.ai</a> ·{" "}
//               <a href="tel:+919958824445">+91-9958824445</a>
//             </p>
//           </div>
//         </footer>
//       </section>
//     </div>
//   );
// };

// export default AIMetaMindExpert;

// // ---------- Styles ----------

// const css = `
// :root {
//   --bg: #0a0e1a;
//   --bg-alt: #0d1322;
//   --card: #10162a;
//   --border: rgba(255,255,255,0.08);
//   --border-soft: rgba(255,255,255,0.06);
//   --teal-border: rgba(45,212,191,0.35);
//   --text: #f4f6fb;
//   --text-dim: #aab2c5;
//   --text-faint: #7d869c;
//   --accent: #6f7bf7;
//   --accent-bright: #818cf8;
//   --teal: #2dd4bf;
//   --blue: #2f5bff;
//   --blue-hover: #4470ff;
//   --radius-lg: 20px;
//   --radius-md: 14px;
//   --radius-pill: 999px;
// }

// * { box-sizing: border-box; }

// /* Reset browser defaults to avoid white gap at the very top */
// html, body, #root { margin: 0; padding: 0; height: 100%; background: var(--bg); }

// .page {
//   background: var(--bg);
//   color: var(--text);
//   font-family: "Inter", "General Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
//   line-height: 1.55;
//   -webkit-font-smoothing: antialiased;
// }

// .container { max-width: 1180px; margin: 0 auto; padding: 0 28px; }
// .container.narrow { max-width: 880px; }
// .container.center { text-align: center; }

// .section { padding: 21px 28px; border-top: 1px solid var(--border-soft); }
// .section.alt { background: var(--bg-alt); }

// .mt-xl { margin-top: 48px; }
// .mt-md { margin-top: 28px; }

// .eyebrow {
//   color: var(--accent-bright);
//   font-size: 13px;
//   font-weight: 700;
//   letter-spacing: 0.12em;
//   text-transform: uppercase;
//   margin: 0 0 16px;
// }

// .h2 {
//   font-size: clamp(28px, 4vw, 42px);
//   font-weight: 800;
//   letter-spacing: -0.02em;
//   line-height: 1.15;
//   margin: 0 0 16px;
//   max-width: 760px;
// }
// .h2.small { font-size: clamp(24px, 3vw, 32px); max-width: 100%; }
// .h2.center { text-align: center; margin: 0 auto 0; }

// .lede { color: var(--text-dim); font-size: 18px; max-width: 640px; margin: 0; }

// /* NAV */
// .nav {
//   position: sticky; top: 0; z-index: 50;
//   background: rgba(10,14,26,0.85);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid var(--border-soft);
// }
// .nav-inner {
//   max-width: 1180px; margin: 0 auto; padding: 18px 28px;
//   display: flex; align-items: center; justify-content: space-between;
// }
// .brand { display: flex; align-items: baseline; gap: 10px; }
// .brand-main { font-weight: 800; font-size: 19px; letter-spacing: -0.01em; }
// .brand-sub { font-size: 11px; letter-spacing: 0.12em; color: var(--text-faint); font-weight: 700; }
// .nav-cta { padding: 11px 22px; font-size: 14px; }

// /* BUTTON */
// .btn-primary {
//   display: inline-flex; align-items: center; justify-content: center;
//   background: var(--blue); color: #fff; font-weight: 700; text-decoration: none;
//   padding: 17px 34px; border-radius: var(--radius-pill); font-size: 16px;
//   transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
//   white-space: nowrap;
// }
// .btn-primary:hover {
//   background: var(--blue-hover); transform: translateY(-1px);
//   box-shadow: 0 8px 30px rgba(47,91,255,0.35);
// }

// /* HERO */
// .hero { padding: 16px 0 0; }
// .hero-inner {
//   max-width: 880px; margin: 0 auto; padding: 56px 28px 64px;
//   text-align: center; display: flex; flex-direction: column; align-items: center;
// }
// .pill {
//   display: inline-flex; align-items: center; gap: 9px;
//   background: var(--card); border: 1px solid var(--border);
//   border-radius: var(--radius-pill); padding: 9px 18px;
//   font-size: 14px; color: var(--text-dim); margin-bottom: 36px;
// }
// .pill-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--teal); }
// .hero-title {
//   font-size: clamp(38px, 6.4vw, 64px); font-weight: 800; letter-spacing: -0.03em;
//   line-height: 1.1; margin: 0 0 28px;
// }
// .accent { color: var(--accent-bright); }
// .hero-sub { color: var(--text-dim); font-size: 18px; max-width: 620px; margin: 0 0 40px; }
// .hero-cta { margin-bottom: 22px; }
// .hero-meta { color: var(--text-faint); font-size: 14px; margin: 0; }
// .dot { margin: 0 4px; opacity: 0.5; }

// .cohort-banner {
//   margin-top: 56px; width: 100%;
//   background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg);
//   padding: 26px 28px; display: flex; align-items: center; justify-content: space-between;
//   flex-wrap: wrap; gap: 12px; text-align: left;
// }
// .cohort-label { color: var(--accent-bright); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; margin: 0 0 6px; }
// .cohort-date { font-size: 22px; font-weight: 800; margin: 0; }
// .cohort-side { color: var(--text-faint); font-size: 14px; margin: 0; }

// /* GRIDS */
// .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
// .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
// .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
// .grid-2-uneven { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: start; }

// @media (max-width: 980px) {
//   .grid-3 { grid-template-columns: 1fr 1fr; }
//   .grid-4 { grid-template-columns: 1fr 1fr; }
//   .grid-2-uneven { grid-template-columns: 1fr; }
// }
// @media (max-width: 640px) {
//   .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
// }

// /* CARDS */
// .card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; }
// .card-flat { padding: 28px; }
// .card-teal { border-color: var(--teal-border); }
// .card-teal.wide { padding: 32px; }
// .card-title { font-size: 19px; font-weight: 700; margin: 0 0 10px; letter-spacing: -0.01em; }
// .card-body { color: var(--text-dim); font-size: 15px; margin: 0; }

// /* STAT CARDS */
// .stat-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; }
// .stat-label { color: var(--accent-bright); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px; }
// .stat-value { font-size: 15px; color: var(--text); margin: 0; line-height: 1.5; }

// /* CHECK LIST */
// .check-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 22px; }
// .check-list.compact { gap: 14px; }
// .check-list.single-col { max-width: 720px; }
// .check-list li { display: flex; gap: 14px; color: var(--text-dim); font-size: 16px; align-items: flex-start; }
// .check-bullet {
//   flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
//   border: 1px solid var(--teal); color: var(--teal);
//   display: flex; align-items: center; justify-content: center; margin-top: 1px;
// }

// /* EMOJI LIST (pricing) */
// .emoji-list { list-style: none; margin: 28px 0 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
// .emoji-list li { display: flex; gap: 12px; color: var(--text-dim); font-size: 16px; align-items: flex-start; }
// .emoji-list li span:first-child { flex-shrink: 0; }

// /* TOOL CHIPS */
// .tool-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 40px; }
// .tool-chip {
//   background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-pill);
//   padding: 10px 20px; font-size: 14px; font-weight: 600; color: var(--text);
// }

// /* HIGHLIGHT BANNER */
// .highlight-banner {
//   background: rgba(45,212,191,0.12); color: var(--teal);
//   border-radius: var(--radius-md); padding: 18px 22px;
//   font-weight: 700; font-size: 16px; text-align: center;
// }

// /* PRICING */
// .price-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; position: sticky; top: 100px; }
// .price-pill {
//   background: rgba(45,212,191,0.12); color: var(--teal); border-radius: var(--radius-pill);
//   padding: 10px 16px; font-size: 13px; font-weight: 600; text-align: center; margin: 0 0 24px;
// }
// .price-tier { color: var(--text-dim); font-size: 14px; font-weight: 600; margin: 0 0 6px; }
// .price-main { font-size: 48px; font-weight: 800; margin: 4px 0 6px; letter-spacing: -0.02em; }
// .price-note { color: var(--text-faint); font-size: 14px; margin: 0 0 24px; }
// .price-cta { width: 100%; margin-bottom: 14px; }
// .price-secure { text-align: center; color: var(--text-faint); font-size: 13px; margin: 0; }
// .guarantee { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border-soft); color: var(--text-dim); font-size: 14px; line-height: 1.6; }

// /* FAQ */
// .faq-list { display: flex; flex-direction: column; gap: 12px; }
// .faq-item { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
// .faq-question {
//   width: 100%; background: none; border: none; color: var(--text); font-size: 16px; font-weight: 700;
//   padding: 22px 26px; display: flex; align-items: center; justify-content: space-between;
//   cursor: pointer; text-align: left; font-family: inherit;
// }
// .faq-icon { color: var(--teal); font-size: 20px; font-weight: 400; flex-shrink: 0; margin-left: 16px; }
// .faq-answer { color: var(--text-dim); font-size: 15px; padding: 0 26px 22px; margin: 0; line-height: 1.6; }

// /* CLOSING */
// .closing { background: linear-gradient(180deg, var(--bg) 0%, #131b34 100%); padding: 96px 0 0; }
// .closing-title { font-size: clamp(32px, 5vw, 48px); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 28px; }
// .closing-quote { font-style: italic; color: var(--text-dim); font-size: 20px; max-width: 680px; margin: 0 auto 24px; line-height: 1.5; }
// .closing-sub { color: var(--text-dim); font-size: 16px; max-width: 600px; margin: 0 auto 36px; }

// /* FOOTER */
// .footer { padding: 56px 0 32px; margin-top: 64px; border-top: 1px solid var(--border-soft); }
// .footer-inner { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
// .footer-tag { color: var(--text-faint); font-size: 14px; margin: 10px 0 0; }
// .footer-links { display: flex; gap: 24px; }
// .footer-link { color: var(--text-dim); text-decoration: none; font-size: 14px; }
// .footer-link:hover { color: var(--text); }
// .footer-copy { color: var(--text-faint); font-size: 13px; margin: 0; }
// .footer-contact { margin-top: 32px; text-align: center; color: var(--text-faint); font-size: 14px; }
// .footer-contact a { color: var(--teal); text-decoration: none; }

// @media (max-width: 640px) {
//   .nav-cta { display: none; }
//   .hero-inner { padding: 40px 24px 48px; }
//   .section { padding: 64px 0; }
//   .container { padding: 0 20px; }
// }
// `;



import React, { useState, useEffect } from "react";
import { openCheckout } from "../lib/ai-metamind/razorpay";
import { initMetaPixel } from "../utils/metaPixel";

/**
 * AI MetaMind — AI Essentials (Beginner Tier) Landing Page
 * Visual system: dark navy, indigo/blue accent, teal highlights.
 * 
 * Beginner Track: AI Essentials
 * 4+ Hours | 2 Live Sessions | ₹499 | Batch starts Sat, 20th June '26
 */

// ---------- Reusable bits ----------

const Eyebrow = ({ children }) => (
  <p className="eyebrow">{children}</p>
);

const ReserveButton = ({ className = "", children }) => (
  <button
    type="button"
    onClick={() => {
      window.fbq?.("track", "InitiateCheckout");
      openCheckout();
    }}
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
  "Understand how AI works & how to apply it",
  "Every learning element is grounded in practical application — decision making, productivity, problem solving, brainstorming & real workplace scenarios",
  "Instead of being overwhelmed by AI tools, it's a structured step-by-step mastery",
  "Live classes ensure dialogue & reflection",
  "This programme equips you to stay relevant, valuable, and ahead of the curve",
  "Simplifying the technology for non-tech talent",
];

const uniqueCards = [
  {
    title: "Integrated AI Expertise",
    body: "The only program that seamlessly merges functional knowledge with practical AI tools across domains of sales, marketing, HR, Finance, Operations, strategy, and product development — preparing you for the future of work.",
  },
  {
    title: "Beyond Basic AI Tools",
    body: "Go beyond mere tool usage to truly enhance your AI tech skills, enabling you to understand and leverage technology more deeply in your domain. Covers Gen AI, Agentic AI, and AI automations.",
  },
  {
    title: "AI-Powered Problem Solving",
    body: "Develop critical thinking and problem-solving skills for complex business challenges, using cutting-edge AI tools to drive effective solutions across the roles in your domain.",
  },
  {
    title: "Designed by Business Leaders",
    body: "Crafted for professionals by experienced business leaders, ensuring relevant, real-world insights — enriched with real-life case studies from our AI consulting work.",
  },
  {
    title: "Practical Application First",
    body: "Every session is built around real workplace scenarios. You'll leave each class with tools and frameworks you can use at work immediately — not someday, but the very next day.",
  },
  {
    title: "Post Learning Support",
    body: "Get extended support to excel in your AI adoption journey post-session. Our community and alumni mentors are there to guide you as you apply what you've learnt.",
  },
];

const learningModules = [
  {
    title: "AI & Gen-AI Foundations",
    body: "Get a clear understanding of the technical terminologies without the 'tech-talk'. Cut through the jargon and understand how AI actually works.",
  },
  {
    title: "Prompt Engineering Essentials",
    body: "Master frameworks to craft clear instructions and get the best results from AI tools. The skill that multiplies everything else you do with AI.",
  },
  {
    title: "AI Productivity Tool Kit",
    body: "Live showcase of tools which save hours of your manual effort. See them work in real time and learn how to bring them into your workflow.",
  },
  {
    title: "Responsible AI Basics",
    body: "Understand the essentials of bias, fairness, and ethics in AI — so you use these tools confidently and responsibly at work.",
  },
];

const areasForApplication = "Design AI-led interventions across your functional area — sales, marketing, HR, operations — and identify where AI can make the biggest difference in your specific role.";

const whatYouGet = [
  "Prompt Playbook",
  "AI Case Books",
  "AI Template Stack",
  "Lifetime AI Community",
  "Fortnightly AMA with Alumni Mentors",
  "Certification of Completion",
];

const takeaways = [
  "Cut through AI jargon and actually understand what it means for your role",
  "Use AI tools confidently for day-to-day productivity",
  "Prompt AI effectively to get results that matter",
  "Become the AI-aware professional in the room",
];

const faqs = [
  {
    q: "Who is this programme designed for?",
    a: "Professionals, students, job aspirants, and curious learners who want to cut through the jargon and start using AI today. No prior experience with AI is needed — this is the perfect starting point.",
  },
  {
    q: "Do I need any technical or coding background?",
    a: "Absolutely not. The programme is designed specifically to simplify AI for non-technical professionals. You'll work with intuitive, no-code tools and guided frameworks throughout every session.",
  },
  {
    q: "What will I be able to do after this programme?",
    a: "You'll understand how AI and Gen-AI work, craft effective prompts, use an AI productivity toolkit to save hours of manual work, and apply responsible AI principles in your workplace — all within 4+ hours across 2 live sessions.",
  },
  {
    q: "What if I can't attend a live session?",
    a: "You get full access to recorded content, so you won't miss anything. That said, the live, interactive format is where most participants get the most value — the dialogue and Q&A make the learning stick.",
  },
  {
    q: "How long is the programme, and what is the format?",
    a: "4+ hours across 2 live sessions (2 hours each, Saturday/Sunday). Delivered online — live, interactive, and hands-on — with instructor-led teaching and tool labs.",
  },
  {
    q: "Can I upgrade to Intermediate or Expert later?",
    a: "Yes! The Beginner track is the foundation of AI MetaMind. Once you complete it, you can continue your journey with the Intermediate (AI Practitioner) or Expert (AI Strategic Leader) tracks.",
  },
];

// ---------- Component ----------
const credentials = [
  { value: '22+', label: 'Years Leadership Experience' },
  { value: 'Founder', label: 'AI Product Builder' },
  { value: 'Big 4', label: 'EY Advisory Background' },
];

const facilitationExperience = [
  '22+ years of leadership experience across global organizations.',
  'Designs and facilitates leadership immersion sessions, functional bootcamps and AI hackathons for business teams.',
  'Facilitated change management and transformation engagements across Pharma, FMCG, Fintech, Alco Beverages, Technology, Consulting and Telecom.',
];

const credentialsList = [
  // 'Founder, AI Product builder',
  // 'Certified Change Management Professional.',
  // 'Big 4 advisory experience with EY — strategy and business transformations.',
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
                Manish Chum is founder, Workfloww.ai of AI tech consulting firm Workfloww.ai. Senior
                industry expert with 20+ years of experience with organizations like
                EY, Airtel, and Mahindra, he specializes in designing and delivering
                GenAI and Agentic AI capability-building journeys for business teams
                across India and global markets. He works with CXOs and business
                leaders to embed practical AI workflows across business operations.
              </p>
            </div>

            {/* <h3 className="text-white font-semibold text-xl mt-10 mb-4">
              Facilitation Experience
            </h3>
            <ul className="space-y-3 text-white/65 text-lg leading-relaxed list-disc pl-5">
              {facilitationExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul> */}

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

const AIMetaMindBeginner = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <div className="page">
      <style>{css}</style>

      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <span className="brand-main">AI MetaMind</span>
            <span className="brand-sub">AI ESSENTIALS</span>
          </div>
          <ReserveButton className="nav-cta">Reserve My Seat — ₹499</ReserveButton>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="pill">
            <span className="pill-dot" />
            Batch starting Saturday, 20th June '26 · Beginner Track
          </div>

          <h1 className="hero-title">
            The Future of AI Is Here.
            <br />
            <span className="accent">Start Before It Leaves You Behind.</span>
          </h1>

          <p className="hero-sub">
            AI Essentials is the beginner track of AI MetaMind — built for professionals
            who want to cut through the jargon and start using AI today. Live classes.
            Weekend programme. For professionals, students, job aspirants, and curious
            learners.
          </p>

          <button
  onClick={() => {
    window.fbq?.("track", "InitiateCheckout");
    openCheckout();
  }}
  className="hero-btn"
>
  Reserve My Seat — ₹499
</button>

          <p className="hero-meta">
            4+ hours <span className="dot">•</span> 2 live sessions{" "}
            <span className="dot">•</span> Live + interactive + hands-on{" "}
            <span className="dot">•</span> Recording included
          </p>

          {/* <div className="cohort-banner">
            <div>
              <p className="cohort-label">NEXT BATCH</p>
              <p className="cohort-date">🚀 Starting Saturday, 20th June '26</p>
            </div>
            <p className="cohort-side">2 weekends · 2 hrs each · ₹499</p>
          </div> */}
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
          <h2 className="h2">AI Essentials — Beginner</h2>
          <p className="lede">
            For professionals looking to cut through the jargon and start using AI today.
          </p>

          <div className="grid-4 mt-xl">
            {[
              { label: "Duration", value: "4+ hours · 2 live sessions (2 hrs each, Sat/Sun)" },
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
            Everything you need to go from AI-curious to AI-confident in a single weekend.
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
                  prompting, explore AI tools, and build your confidence with live
                  instructor support.
                </p>
              </div>
              <div className="card card-flat">
                <h3 className="card-title">Quizzes — 50%</h3>
                <p className="card-body">
                  Test your understanding through scenario-based quizzes and live
                  interactions designed to reinforce key concepts.
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
            <div className="highlight-banner mt-md">AI Tool Kit Worth ₹10,000 — Free</div>
          </div>
        </div>
      </section>

      {/* YOUR TAKEAWAY */}
      <section className="section alt">
        <div className="container">
          <Eyebrow>Your Takeaway</Eyebrow>
          <h2 className="h2">By the End, AI Won't Feel Like a Black Box</h2>
          <p className="lede">You'll understand it, use it, and talk about it with confidence.</p>

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
      {/* <section className="section">
        <div className="container narrow center">
          <Eyebrow>Tools You'll Explore</Eyebrow>
          <h2 className="h2 center">Key AI Tools &amp; Platforms</h2>
          <div className="tool-grid mt-xl">
            {["ChatGPT", "Claude", "NotebookLM", "Gemini", "Perplexity", "Copilot", "Gamma AI", "Napkin AI", "DALL·E", "Midjourney", "Sora", "ElevenLabs"].map((tool) => (
              <span className="tool-chip" key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section> */}

    <section className="section">
        <div className="container narrow center">
          <img
          src="/images/ai-tools.png"
          alt="AI tools"
          className="
          mx-auto
          w-full
          max-w-5xl
          object-contain
          "
        />
        </div>
     </section>

      

      {/* PRICING */}
      <section className="section alt">
        <div className="container grid-2-uneven">
          <div>
            <Eyebrow>Investment</Eyebrow>
            <h2 className="h2">
              One Weekend. <span className="accent">A Real Head Start</span> in AI.
            </h2>
            <p className="lede">
              The Beginner track is the fastest way to go from zero to AI-confident — built
              for professionals who want to start now, not someday.
            </p>

            <ul className="emoji-list">
              <li><span>🔴</span> 4+ hours · 2 live sessions on Zoom</li>
              <li><span>🎬</span> Full access to recorded content</li>
              <li><span>🤖</span> AI & Gen-AI foundations + prompt engineering</li>
              <li><span>🛠️</span> Live AI productivity tool kit showcase</li>
              <li><span>📚</span> Prompt Playbook, AI Case Books & Template Stack</li>
              <li><span>🏆</span> Certificate of completion</li>
            </ul>
          </div>

          <div className="price-card">
            <p className="price-pill">⚡ Batch starting Sat, 20th June '26 — limited seats</p>

            <p className="price-tier">AI Essentials — Beginner</p>
            <p className="price-main">₹499</p>
            <p className="price-note">4+ hours · 2 weekends · One-time payment</p>

            <button
  onClick={() => {
    window.fbq?.("track", "InitiateCheckout");
    openCheckout();
  }}
  className="hero-btn price-cta"
>
  Reserve My Seat — ₹499
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
              { tier: "Beginner", name: "AI Essentials", price: "₹499", duration: "4+ hrs · 2 sessions", desc: "Cut through jargon. Start using AI today.", active: true },
              { tier: "Intermediate", name: "AI Practitioner", price: "₹10,000", duration: "9+ hrs · 3 sessions", desc: "Integrate AI into your daily workflow & decision-making.", active: false },
              { tier: "Expert", name: "AI Strategic Leader", price: "₹14,999", duration: "16+ hrs · 4 sessions", desc: "Drive the AI agenda. Build custom AI solutions.", active: false },
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
          <h2 className="closing-title">Everyone's Using AI. Learn to Use It Well.</h2>
          <p className="closing-quote">
            "The best time to start learning AI was six months ago. The second best time is
            this Saturday."
          </p>
          <p className="closing-sub">
            4+ hours. ₹499. One programme built to make AI make sense — finally.
          </p>
          <button
  onClick={() => {
    window.fbq?.("track", "InitiateCheckout");
    openCheckout();
  }}
  className="hero-btn"
>
  Reserve My Seat — ₹499
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
                <span className="brand-sub">AI ESSENTIALS</span>
              </div>
              <p className="footer-tag">Live AI upskilling — for professionals, students, and job aspirants</p>
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
    </div>
  );
};

export default AIMetaMindBeginner;

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