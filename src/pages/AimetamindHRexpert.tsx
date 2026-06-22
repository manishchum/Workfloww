import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { openCheckout } from "../lib/ai-metamind/razorpay";
import RegistrationModal from "../components/RegistrationModal";
import { initMetaPixel } from "../utils/metaPixel";

/**
 * AI MetaMind — HR Expert Landing Page
 * Visual system: dark navy bg-[#051121], purple/indigo accents, clean Tailwind CSS.
 * 
 * HR Expert Track: AI Strategic Leader for HR
 * 4 Weeks | 16 Hours | ₹14,999 | Batch starts Sat, 20th June '26
 */

// ---------- Data ----------

const problems = [
  {
    icon: '⚡',
    title: 'Your peers are outpacing you with AI',
    body: 'Junior colleagues are shipping AI-powered work in hours that used to take experienced HR professionals days. The speed gap is real, visible, and widening every week.',
  },
  {
    icon: '📊',
    title: "HR isn't at the AI table — yet",
    body: "Leadership is making AI strategy decisions without HR. Not because you're irrelevant — because you haven't signalled AI fluency to the business. That's fixable.",
  },
  {
    icon: '🔄',
    title: "You've \"tried\" AI. That's not the same as using it",
    body: 'Playing with ChatGPT isn\'t an AI skill. Building repeatable, cross-functional workflows that genuinely change how HR operates — that\'s what this program is about.',
  },
  {
    icon: '⏳',
    title: 'Every week of delay is compounding',
    body: 'The professionals who build AI fluency now will set the benchmark for what HR looks like in 2026. The ones who wait will spend years trying to catch up.',
  },
];

const outcomes = [
  'Write compelling job descriptions and screening questions in minutes using AI',
  'Build custom AI agents (recruiters, trainers, advisors) using Google AI Studio & CoPilot Studio',
  'Establish automated onboarding flows, employee engagement pulse surveys, and L&D pipelines',
  'Implement advanced attrition prediction, workforce planning, and performance review analysis',
  'Spot AI leverage zones in HR data, workflows, and pain-points',
  'Govern AI adoption with proper compliance, data privacy, and ethics guidelines',
  'Influence people strategy decisions and show clear ROI of AI initiatives',
  'Leave with an advanced prompt library and blueprint templates ready to deploy',
];

const curriculumWeeks = [
  {
    week: 'Week 1',
    title: 'Foundations & Practical AI in HR',
    modules: [
      {
        num: 'M1',
        name: 'HR 4.0 & AI Foundations',
        points: [
          'Gen AI, LLMs & prompt engineering essentials for HR',
          'HR Tech Stack audit & readying data for AI'
        ]
      },
      {
        num: 'M2',
        name: 'Practical AI Applications',
        points: [
          'Leverage AI tools for job description design, candidate sourcing, screening, outreach',
          'AI for onboarding automation, employee engagement, pulse surveys, training content creation'
        ]
      }
    ]
  },
  {
    week: 'Week 2',
    title: 'Advanced AI Agents & Workflows in HR',
    modules: [
      {
        num: 'M3',
        name: 'Strategic AI Implementation',
        points: [
          'Build custom AI agents (recruiters, trainers, advisors) using Google AI Studio & CoPilot Studio',
          'AI for HR analytics, workforce planning, attrition prediction, performance review parsing'
        ]
      },
      {
        num: 'M4',
        name: 'Responsible AI Management',
        points: [
          'AI governance, ethics, bias detection, data privacy & compliance in HR',
          'Measuring ROI of AI initiatives & building an AI implementation roadmap'
        ]
      },
      {
        num: 'M5',
        name: 'Talent Lifecycle Transformation',
        points: [
          'Design AI-led HR interventions across the full talent lifecycle (Hire to Retire)',
          'Automate candidate onboarding, skill development, and career pathing workflows'
        ]
      }
    ]
  },
  {
    week: 'Week 3',
    title: 'Hands-on Sandbox & Implementation',
    modules: [
      {
        num: 'M6',
        name: 'Custom Agent Lab',
        points: [
          'Build custom AI assistants for recruiting, coaching, and compliance parsing',
          'Configure custom sandboxes using Google AI Studio & Microsoft CoPilot Studio'
        ]
      },
      {
        num: 'M7',
        name: 'HR Workflow Automation',
        points: [
          'Integrate AI agents into your business tools (Slack, Teams, Sheets)',
          'Establish multi-agent orchestration for hire-to-retire process'
        ]
      }
    ]
  },
  {
    week: 'Week 4',
    title: 'Strategic Roadmap & ROI',
    modules: [
      {
        num: 'M8',
        name: 'AI Governance & Compliance',
        points: [
          'Establish bias audit processes and data security guardrails',
          'Draft AI utilization policies for employee handbook'
        ]
      },
      {
        num: 'M9',
        name: 'Capstone Project & Showcase',
        points: [
          'Present your custom HR AI transformation roadmap',
          'Fireside chats with industry leaders and certificate presentation'
        ]
      }
    ]
  }
];

const uniqueCards = [
  {
    title: "Integrated HR & AI Expertise",
    body: "The only program that seamlessly merges deep HR functional knowledge with practical AI tools across all HR domains, preparing you for the future of work. (Hire to Retire Process)",
  },
  {
    title: "Beyond Basic AI Tools",
    body: "Go beyond mere tool usage to truly enhance your AI tech skills, enabling you to understand and leverage technology more deeply in HR. Covers aspects of Gen AI, Agentic AI and AI automations.",
  },
  {
    title: "AI-Powered Problem Solving",
    body: "Develop critical thinking and problem-solving skills for complex people challenges, utilizing cutting-edge AI tools to drive effective solutions across the roles of HRBP, COEs (Learning, Rewards, Talent Management, Talent Acquisition), HR Automation, HR Operations.",
  },
  {
    title: "Designed by HR Leaders",
    body: "This program is specifically crafted for HR professionals, by experienced HR leaders, ensuring relevant, real-world insights and applications. We bring real life case studies through our AI consulting work to make the programme enriched and one of its kinds.",
  },
  {
    title: "Agentic AI & AI Automation",
    body: "Only programme which helps learners to build agents in enterprise environment. Be it Microsoft Co Pilot Studio or Google AI Studio. We give sandboxes to participants to experiment & prototype.",
  },
  {
    title: "Post Learning Support",
    body: "Only AI programme which gives one month extended support to participants to excel in the journey of AI Adoption post the session. Our engineering teams work with you to help you build AI solutions in your workflows.",
  },
];

const testimonials = [
  {
    quote:
      "I came in skeptical — I'd tried ChatGPT and thought I understood AI. This expert program with Manish Chum opened my eyes to strategic agent frameworks. Our TA pipeline automation saves us 10+ hours a week now.",
    name: 'Sarah Menon',
    role: 'HRBP, Fortune 500 Tech',
    initials: 'SM',
  },
  {
    quote:
      "What Manish teaches goes way beyond simple prompts. It's system-level design for HR. I walked away with custom L&D agents built in CoPilot Studio that our teams use daily.",
    name: 'Priya Desai',
    role: 'L&D Manager, Global Services',
    initials: 'PD',
  },
  {
    quote:
      "The 4-week structure is perfect. It gives you time to build, test, and implement custom AI agents in real time. The ROI is immediate. I can now speak with our CHRO about AI strategy with absolute confidence.",
    name: 'Rajesh Sharma',
    role: 'Talent Acquisition Lead, Startup',
    initials: 'RS',
  },
];

const faqs = [
  {
    q: 'Who is this program designed for?',
    a: "Built specifically for HR professionals — HRBPs, Talent Acquisition leads, L&D managers, CHROs, and HR generalists — who want to lead AI strategy and build custom AI agents. No prior technical or programming experience is required.",
  },
  {
    q: 'Do I need any technical or coding background?',
    a: "None. This cohort is entirely non-technical. You'll use AI tools through simple text interfaces and no-code builders — no code, no data science, no prior AI experience required.",
  },
  {
    q: "What if I can't attend a live session?",
    a: "All sessions are recorded and made available for 90 days. We strongly recommend attending live to participate in sandboxes and workflow labs, but you get full replay access.",
  },
  {
    q: 'What AI tools will we be working with?',
    a: "We work with Google AI Studio, Microsoft CoPilot Studio, ChatGPT (GPT-4), Claude, and key automation workflows. You will receive hands-on sandboxes to build and test custom HR agents.",
  },
  {
    q: 'How long is the program, and what is the format?',
    a: "16 hours total across 4 weeks (4 hours per weekend session). The sessions are delivered online, featuring live interactive teaching, case studies, tool labs, and capstone presentation.",
  }
];

const credentials = [
  { value: '22+', label: 'Years Leadership Experience' },
  { value: 'Founder', label: 'AI Product Builder' },
  { value: 'Big 4', label: 'EY Advisory Background' },
];

const credentialsList = [
  'IIT Kanpur, AI in Leadership. MBA - SCMHRD',
];

// ---------- Components ----------

function Check() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6357d4]/15 border border-[#6357d4]/35 flex items-center justify-center mt-0.5">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path
          d="M1.5 5l2.5 2.5 4.5-4.5"
          stroke="#6357d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 mb-6" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#6357d4" aria-hidden="true">
          <path d="M7 1l1.66 3.36 3.71.54L9.86 7.3l.64 3.7L7 9.25l-3.5 1.84.64-3.7L1.63 4.9l3.71-.54L7 1z" />
        </svg>
      ))}
    </div>
  );
}

function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#051121]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-lg">AI MetaMind</span>
          <span className="text-white/30 text-xs bg-white/5 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">HR Expert</span>
        </div>
        <button
          onClick={() => {
            window.fbq?.("track", "InitiateCheckout");
            window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'hrexpert_nav' } }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition duration-200 cursor-pointer"
        >
          Reserve My Seat — ₹14,999
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center justify-center px-6 pt-28 pb-12 overflow-hidden bg-[#051121]">
      <div className="absolute inset-0 bg-[#051121]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6357d4]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-white/65 text-sm">Next Cohort starting 20th June '26</span>
        </div>

        <h1 className="font-bold text-white leading-tight tracking-tight mb-6">
          <span className="block text-5xl md:text-7xl">AI MetaMind HR</span>
          <span className="block text-4xl md:text-6xl text-[#7b70e0] mt-2">
            The Future of HR Is Here. Be the One Who Leads It.
          </span>
        </h1>

        <p className="italic text-white/55 text-xl max-w-2xl mx-auto mb-6">
          "The HR professionals who thrive in the next 3 years will be the ones who learned to build AI workflows — not the ones who waited."
        </p>

        <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
          4 Weeks | 16 Hours | Live Learning | Weekend Programme. For HR professionals Across Roles - HRBP | COEs | HR Transformation | HR Operations | CHRO Office.
        </p>

        <button
          onClick={() => {
            window.fbq?.("track", "InitiateCheckout");
            window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'hrexpert_hero' } }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-12 py-4 rounded-full shadow-xl shadow-blue-600/25 mb-8 transition hover:scale-105"
        >
          Reserve My Seat — ₹14,999
        </button>

        <div className="flex flex-wrap justify-center gap-5 text-white/40 text-sm">
          <span>4 Weeks</span>
          <span>•</span>
          <span>16 Hours</span>
          <span>•</span>
          <span>Live Learning</span>
          <span>•</span>
          <span>Weekend Programme</span>
        </div>
      </div>
    </section>
  );
}

function CohortBanner() {
  return (
    <section className="bg-[#051121] px-7 py-6">
      <div className="max-w-5xl mx-auto rounded-2xl border border-[#6357d4]/40 bg-[#6357d4]/10 px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-[#8b7cff] text-sm uppercase tracking-widest font-semibold mb-1">Next Live Cohort</p>
          <h2 className="text-white text-3xl font-bold">🚀 Starting Saturday, 20th June '26</h2>
        </div>
        <p className="text-white/70 text-sm md:text-base">Limited seats available • Live AI workshop series</p>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-[#0a1928] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">WHY THIS MATTERS NOW</p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-4 max-w-2xl">HR Is at an Inflection Point</h2>
        <p className="text-white/55 text-lg max-w-xl mb-16 leading-relaxed">And most HR professionals are watching it happen rather than leading it.</p>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="bg-[#051121] rounded-2xl p-8 border border-white/5 hover:border-[#6357d4]/25 transition-colors duration-300">
              <span className="text-3xl mb-5 block">{p.icon}</span>
              <h3 className="font-semibold text-white text-xl mb-3 leading-snug">{p.title}</h3>
              <p className="text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcome() {
  return (
    <section className="bg-[#051121] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">TRANSFORMATION</p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-4 max-w-2xl">After This Program, You'll Be Different</h2>
        <p className="italic text-white/45 text-xl mb-16 leading-relaxed">Not a little different. Fundamentally more capable.</p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex gap-3.5 items-start">
              <Check />
              <p className="text-white/75 leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section className="bg-[#0a1928] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">CURRICULUM</p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-4">What You'll Learn</h2>
        <p className="text-white/55 text-lg mb-16 max-w-xl leading-relaxed">Four weeks of deep interactive modules, sandboxes, and custom agent-building labs.</p>

        <div className="space-y-12">
          {curriculumWeeks.map((week) => (
            <div key={week.week} className="border-t border-white/5 pt-8">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-2">
                <span className="text-[#8b7cff] font-bold text-xl uppercase tracking-wider">{week.week}</span>
                <h3 className="text-white font-bold text-2xl md:text-3xl">{week.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {week.modules.map((mod) => (
                  <div key={mod.num} className="bg-[#051121] rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3.5 mb-5">
                      <span className="font-bold text-[#6357d4]/50 text-3xl leading-none">{mod.num}</span>
                      <h4 className="font-semibold text-white text-lg leading-snug">{mod.name}</h4>
                    </div>
                    <ul className="space-y-3">
                      {mod.points.map((point) => (
                        <li key={point} className="flex gap-2 items-start">
                          <span className="text-[#6357d4]/50 mt-1 text-xs flex-shrink-0">→</span>
                          <span className="text-white/60 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UniqueFeatures() {
  return (
    <section className="bg-[#051121] py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">WHAT MAKES THIS DIFFERENT</p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-16">How This Programme Is One of Its Kind</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueCards.map((card) => (
            <div key={card.title} className="bg-[#0a1928] border border-white/5 rounded-2xl p-8 hover:border-[#6357d4]/20 transition duration-300">
              <h3 className="font-semibold text-white text-lg mb-3">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramOverviewStats() {
  return (
    <section className="bg-[#0a1928] py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">PROGRAMME OVERVIEW</p>
        <h2 className="font-bold text-white text-4xl leading-tight mb-12">At a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-[#051121] border border-white/5 p-8 rounded-2xl">
            <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Duration</span>
            <p className="text-white font-semibold text-lg">4 Weeks | 4 Live Sessions (4 hrs each | Saturday/Sunday)</p>
          </div>
          <div className="bg-[#051121] border border-white/5 p-8 rounded-2xl">
            <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Learning Format</span>
            <p className="text-white font-semibold text-lg">Total 16 Hours | Instructor-led, Tool Labs, Case-studies & Fireside chats</p>
          </div>
          <div className="bg-[#051121] border border-white/5 p-8 rounded-2xl">
            <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Delivery & Access</span>
            <p className="text-white font-semibold text-lg">Delivered Online | Live + Interactive + Hands-on | Recording access</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coach() {
  return (
    <section className="bg-[#051121] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-14">YOUR FACILITATOR</p>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                <div key={c.label} className="bg-[#0a1928] border border-white/8 rounded-xl p-4 text-center">
                  <p className="font-bold text-white text-xl leading-none mb-1">{c.value}</p>
                  <p className="text-white/35 text-xs leading-snug">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-2">Manish Chum</h2>
            <p className="text-[#6357d4] text-lg mb-2 font-medium">Founder, Workfloww.ai</p>
            <p className="text-white/35 text-sm mb-10">Gurugram, India</p>

            <div className="space-y-5 text-white/65 text-lg leading-relaxed">
              <h3 className="text-white font-semibold text-xl !mb-3">Professional Background</h3>
              <p>
                Manish has spent two decades inside the HR function — leading talent
                strategy, building L&D programs, and navigating organizational change
                at enterprise scale.
              </p>
              <p>
                Today, he works with HR teams to move them from passive observers of
                the AI revolution to active practitioners. Every workshop he runs is
                built on one principle:{' '}
                <span className="text-white font-medium">no theory, only implementation.</span>
              </p>
              <p>
                He doesn't teach AI from the outside. He's built the workflows, tested
                the tools, and made the mistakes — so you don't have to.
              </p>
            </div>

            {/* <h3 className="text-white font-semibold text-xl mt-10 mb-4">Relevant Certifications / Credentials</h3>
            <ul className="space-y-3 text-white/65 text-lg leading-relaxed list-disc pl-5">
              {credentialsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul> */}

            <blockquote className="mt-10 border-l-2 border-[#6357d4] pl-6">
              <p className="italic text-white/55 text-xl leading-relaxed">
                "My goal is simple: you leave this cohort with custom AI workflows and agents you can deploy in HR immediately. Not someday. This Monday."
              </p>
              <cite className="text-white/30 text-sm mt-3 block not-italic">— Manish Chum</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#0a1928] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">WHAT PARTICIPANTS SAY</p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-16 max-w-xl">From HR Professionals Like You</h2>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.initials} className="bg-[#051121] rounded-2xl p-8 border border-white/5 flex flex-col">
              <Stars />
              <blockquote className="italic text-white/65 text-lg leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6357d4]/15 border border-[#6357d4]/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#6357d4] text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{t.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-[#051121] py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">INVESTMENT</p>
            <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-6">
              One Cohort. <span className="text-[#7b70e0]">A Career's Worth</span> of Advantage.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Transform your HR career in 4 weeks. Build actual, working custom agents under Manish's guidance, deploy live sandboxes, and receive a comprehensive roadmap.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3.5">
                <span className="text-xl flex-shrink-0">🔴</span>
                <span className="text-white/70">16 hours of live workshop sessions</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="text-xl flex-shrink-0">🎬</span>
                <span className="text-white/70">Recording access for 90 days</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="text-xl flex-shrink-0">📝</span>
                <span className="text-white/70">Advanced 100+ prompt library & templates</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="text-xl flex-shrink-0">🛠️</span>
                <span className="text-white/70">Google AI Studio & CoPilot Studio sandboxes</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="text-xl flex-shrink-0">🏆</span>
                <span className="text-white/70">Certificate of Completion</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-[#0a1928] rounded-3xl border border-white/8 p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#6357d4]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 bg-[#6357d4]/15 border border-[#6357d4]/30 rounded-xl px-4 py-2.5 mb-8 text-center">
                <p className="text-[#6357d4] text-sm font-medium">⚡ limited batch size — secure your seat now</p>
              </div>

              <div className="relative z-10">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-white/35 text-lg line-through">₹29,999</span>
                  <span className="text-white/35 text-xs bg-white/5 rounded px-2 py-0.5">Early-bird</span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-white text-7xl leading-none">₹14,999</span>
                </div>
                <p className="text-white/30 text-sm mb-8">One-time payment · Full sandboxes included</p>

                <button
                  onClick={() => {
                    window.fbq?.("track", "InitiateCheckout");
                    window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'hrexpert_pricing' } }));
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-xl transition duration-200 mb-4 cursor-pointer"
                >
                  Reserve My Seat — ₹14,999
                </button>

                <p className="text-white/25 text-xs text-center">🔒 Secure checkout via Razorpay · SSL encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#0a1928] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-16">Common Questions</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#051121] border border-white/8 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-7 py-6 flex items-start justify-between gap-4 hover:bg-white/[0.025] transition duration-200 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-white text-lg leading-snug">{faq.q}</span>
                <span className={`text-[#6357d4] text-2xl leading-none flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#051121]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6357d4]/12 via-transparent to-blue-600/8 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#6357d4]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-7">THE DECISION POINT</p>
        <h2 className="font-bold text-white text-4xl lg:text-6xl leading-tight mb-7">The Gap Won't Close Itself</h2>
        <p className="italic text-white/45 text-xl lg:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
          "Six months from now, the question won't be whether you should have learned AI. It'll be how much further ahead you could have been."
        </p>
        <p className="text-white/55 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          16 hours total. ₹14,999. One live cohort that changes how you lead HR. The only question is whether you're in it.
        </p>

        <button
          onClick={() => {
            window.fbq?.("track", "InitiateCheckout");
            window.dispatchEvent(new CustomEvent('open-registration-modal', { detail: { source: 'hrexpert_final_cta' } }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-14 py-5 rounded-full transition duration-200 hover:scale-[1.03] shadow-2xl shadow-blue-600/25 cursor-pointer"
        >
          Reserve My Seat — ₹14,999
        </button>

        <p className="text-white/25 text-sm mt-7">Limited seats · Live on Zoom · Recording included · Full support guarantee</p>
      </div>
    </section>
  );
}

// ---------- Main Page Component ----------

export default function AiMetamindHRExpert() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('hrexpert_general');

  useEffect(() => {
    initMetaPixel();

    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setModalSource(`hrexpert_${customEvent.detail?.source || 'general'}`);
      setIsModalOpen(true);
    };
    window.addEventListener('open-registration-modal', handleOpen);
    return () => window.removeEventListener('open-registration-modal', handleOpen);
  }, []);

  return (
    <div className="bg-[#051121] min-h-screen text-white font-sans antialiased selection:bg-blue-500/20 selection:text-blue-400">
      <Helmet>
        <title>AI MetaMind HR Expert Series - Live AI Cohort for HR Leaders</title>
        <meta
          name="description"
          content="Transform your HR career in this 4-week live program with Manish Chum. Learn to design and integrate custom AI agents and strategic workflows across recruiters, trainers, and data analysts."
        />
        <meta name="og:title" content="AI MetaMind HR Expert Series" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://workfloww.ai/ai-metamind-hr-expert" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <StickyHeader />
      <Hero />
      <CohortBanner />
      <Problem />
      <Outcome />
      <Curriculum />
      <UniqueFeatures />
      <ProgramOverviewStats />
      <Coach />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />

      <footer className="bg-[#051121] border-t border-white/8 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="font-bold text-white">AI MetaMind</span>
            <span className="text-white/30 ml-2 text-sm">HR Expert Series</span>
            <p className="text-white/25 text-xs mt-1">Live strategic AI upskilling for HR leaders</p>
          </div>

          <nav className="flex gap-6 text-sm text-white/30">
            <a href="/privacy-policy" className="hover:text-white/60 transition duration-200">Privacy Policy</a>
            <a href="/contact" className="hover:text-white/60 transition duration-200">Contact</a>
          </nav>

          <p className="text-white/20 text-xs">© 2026 Workfloww. All rights reserved.</p>
        </div>
      </footer>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
      />
    </div>
  );
}
