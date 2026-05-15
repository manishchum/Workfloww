import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Zap,
  BarChart3,
  MapPin,
  MessageSquare,
  Rocket,
  ShieldCheck,
} from "lucide-react";

// ─────────────── CONTENT ───────────────
const LUCID_CONTENT = {
  hero: {
    subtitle: "MISSION-CRITICAL EXECUTION",
    description:
      "The operating layer between what your organization decides and what actually happens — at the counter, on the floor, in the field, on the line.",
    stats: [
      { label: "18.4", sub: "%", desc: "Average performance gap between top and bottom locations" },
      { label: "42", sub: "%", desc: "Strategy loss between decision makers and frontline staff" },
      { label: "3.2", sub: "x", desc: "Revenue multiplier for organizations with higher execution clarity" },
    ],
  },
  story: {
    need: {
      points: [
        { id: "01", title: "Deploy in hours, not months." },
        { id: "02", title: "Something your frontline actually uses." },
        { id: "03", title: "AI with real business impact.", },
        { id: "04", title: "Execution visible. Revenue defensible." },
      ],
    },
    definition: {
      upper: ["That's not a feature list.", "That's not a wish list.", "That's the description of an operating system for your business."],
      core: "Fast. AI-powered. Deployed everywhere your frontline is.",
      outcome: "Outcomes you can see, measure, and act on.",
      final: "That's what Lucid is built to be.",
    },
  },
  comparison: {
    before: "Traditional Management: Reactive & Opaque",
    after: "Lucid OS: Proactive & Transparent",
  },
  capabilities: {
    subtitle: "WHAT LUCID DOES",
    title: "Six Things That Move Your Numbers.",
    description: "Every capability in Lucid exists for one reason — closing the gap between your business intent and ground-level execution.",
    items: [
      {
        icon: "zap",
        title: "Convert & Deploy",
        desc: "Your SOPs, product docs, and brand standards converted into deployed formats — WhatsApp, video, audio — in hours, not weeks."
      },
      {
        icon: "mappin",
        title: "Execution Visibility",
        desc: "Know what your frontline knows — by role, by location, by shift. Not activity metrics. Actual execution readiness."
      },
      {
        icon: "shield",
        title: "Compliance at Scale",
        desc: "SOP audits, photo capture, corrective actions — all mobile. Run compliance across 10 or 1,000 locations without adding headcount."
      },
      {
        icon: "rocket",
        title: "Launch Execution",
        desc: "New product. New campaign. New process. Lucid deploys to your entire frontline before the launch date — not after."
      },
      {
        icon: "chart",
        title: "Performance Signal",
        desc: "A single score — by team, by outlet, by region — that tells you where execution is strong and where revenue is at risk."
      },
      {
        icon: "message",
        title: "Zero Friction Delivery",
        desc: "Delivered on WhatsApp. No app download. No login. No IT dependency. Works on the phone already in your frontline's pocket."
      }
    ]
  },
  howItWorks: {
    subtitle: "HOW IT WORKS",
    title: "Three steps. One operating system.",
    description: "Lucid doesn't replace what you have. It makes what you have actually reach the ground.",
    steps: [
      {
        id: "step-1",
        title: "Upload",
        heading: "Upload what you already have.",
        description: "Your SOPs. Your product manuals. Your brand standards. Your audit checklists. Lucid takes what exists and converts it — no rebuilding, no instructional designers, no six-month implementation.",
        points: [
          "PDFs, videos, voice notes, and decks all accepted",
          "AI converts to WhatsApp sprints, videos, audio, and flashcards",
          "Live in 48 hours from contract signing"
        ],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "step-2",
        title: "Deploy",
        heading: "Deploy to your frontline. Instantly.",
        description: "No app download. No login. No training room. Content reaches your frontline on WhatsApp — the channel they already use, on the device they already own.",
        points: [
          "WhatsApp micro-sprints under 5 minutes",
          "Works on any smartphone including basic Android",
          "Hinglish and regional language support built in"
        ],
        image: "https://images.unsplash.com/photo-1556742049-ed1f93ad74e4?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "step-3",
        title: "Analyze",
        heading: "See where execution stands. Act on it.",
        description: "A single dashboard shows you execution readiness by outlet, by role, by region. Not completion rates — actual capability signals. So you know exactly where to intervene before it hits your numbers.",
        points: [
          "Location-level execution scores",
          "Compliance audit results in real time",
          "Gap alerts before they become floor problems"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  },
};

// ─────────────── ICON MAP ───────────────
const IconComp = ({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) => {
  const map: Record<string, React.ComponentType<any>> = {
    zap: Zap,
    mappin: MapPin,
    shield: ShieldCheck,
    rocket: Rocket,
    chart: BarChart3,
    message: MessageSquare
  };
  const C = map[name] || Zap;
  return <C className={className} style={style} />;
};

// ─────────────── ACT 1 — Questions ───────────────
const StoryAct1 = ({ onNext, onSkip }) => {
  const questions = [
    {
      id: "01",
      text: "Your best location and your weakest location run the <span style='color:#2563eb;font-weight:700'>same process, same product, same team size.</span> The performance gap between them — can you explain it precisely?",
      footer: "Most leaders have the number. Almost none have the cause.",
    },
    {
      id: "02",
      text: "You rolled out a new product, process, or campaign last quarter. <span style='color:#2563eb;font-weight:700'>Right now, today</span> — what percentage of your frontline can execute it without hesitation?",
      footer: "Not what they were briefed on. What they can actually do when it matters.",
    },
    {
      id: "03",
       text: "Your process is documented. Your people are experienced. Yet <span style='color:#2563eb;font-weight:700'>every site visit, every review, every audit</span> — the same deviations surface. Why does the gap keep coming back?",
      footer: "If it keeps returning, it was never really fixed. It was managed around.",
    },
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < questions.length - 1) {
      const t = setTimeout(() => setIndex((p) => p + 1), 5500);
      return () => clearTimeout(t);
    }
  }, [index]);

  return (
    <div style={{ height: "100vh", background: "#f8fafc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {/* ambient blob */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(147,197,253,0.35) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* subtle noise */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, width: "100%", padding: "0 2rem", textAlign: "center", position: "relative", zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* label */}
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.5em", color: "#60a5fa", fontFamily: "monospace", textTransform: "uppercase" }}>Section {questions[index].id}</span>
              <div style={{ width: 48, height: 1, background: "#cbd5e1" }} />
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.5em", color: "#94a3b8", fontFamily: "monospace", textTransform: "uppercase" }}>The Execution Gap</span>
            </div> */}

            {/* question */}
            <h2
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)", fontWeight: 500, letterSpacing: "-0.025em", color: "#0f172a", lineHeight: 1.2, marginBottom: "1.5rem", fontFamily: "Georgia, serif" }}
              dangerouslySetInnerHTML={{ __html: questions[index].text }}
            />

            {/* footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "3rem", fontWeight: 300, maxWidth: 540, margin: "0 auto 3rem auto" }}
            >
              {questions[index].footer}
            </motion.p>

            {/* answer options
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 540, margin: "0 auto" }}
            >
              {questions[index].answers.map((answer, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem 1.5rem",
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    borderRadius: 8,
                    fontSize: "0.95rem",
                    color: "#334155",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "system-ui, -apple-system, sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)";
                  }}
                >
                  {answer}
                </div>
              ))}
            </motion.div> */}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* progress dots */}
      <div style={{ position: "absolute", bottom: 80, display: "flex", gap: 8 }}>
        {questions.map((_, i) => (
          <div key={i} style={{ width: i === index ? 24 : 8, height: 8, borderRadius: 9999, background: i === index ? "#2563eb" : "#cbd5e1", transition: "all 0.4s ease" }} />
        ))}
      </div>

      {/* "Find the answer" appears after last question */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: index === questions.length - 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        onClick={onNext}
        style={{ position: "absolute", bottom: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#64748b" }}
      >
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" }}>Find the answer</span>
        <ChevronDown style={{ width: 20, height: 20, animation: "bounce 1.5s infinite" }} />
      </motion.button>

      {/* skip */}
      <button
        onClick={onSkip}
        style={{ position: "absolute", bottom: 28, right: 28, display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #e2e8f0", borderRadius: 9999, background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#94a3b8", cursor: "pointer" }}
        onMouseEnter={e => e.currentTarget.style.color = "#2563eb"}
        onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
      >
        Skip Intro <ArrowRight style={{ width: 12, height: 12 }} />
      </button>

      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
    </div>
  );
};

// ─────────────── ACT 2 — The Answer (dark) ───────────────
const StoryAct2 = ({ onNext, onSkip }) => {
  const { need } = LUCID_CONTENT.story;

  return (
    <div style={{ height: "100vh", width: "100vw", background: "#020617", color: "#f8fafc", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Background Grids & Glows */}
      <div style={{ position: "absolute", top: "50%", left: "50%", width: "120vh", height: "120vh", background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", backgroundPosition: "center center", pointerEvents: "none" }} />

      {/* Top Header / Navbar */}
      <div style={{ padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 12px #3b82f6" }} />

        </div>

      </div>

      {/* Main Dense Layout */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "1.5rem 2rem 2rem", position: "relative", zIndex: 10, maxWidth: 1600, margin: "0 auto", width: "100%" }}>

        {/* Core 3-Column Architecture */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 400px 1fr", gap: "2rem", alignItems: "center", position: "relative" }}>

          {/* SVG Connecting Lines Background */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* From Left to Center */}
            <motion.path d="M 20 25 L 35 25 C 45 25, 45 50, 50 50" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="0.2" />
            <motion.path d="M 20 75 L 35 75 C 45 75, 45 50, 50 50" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="0.2" />

            {/* From Center to Right */}
            <motion.path d="M 50 50 C 55 50, 55 25, 65 25 L 80 25" fill="none" stroke="rgba(74,222,128,0.2)" strokeWidth="0.2" />
            <motion.path d="M 50 50 C 55 50, 55 75, 65 75 L 80 75" fill="none" stroke="rgba(74,222,128,0.2)" strokeWidth="0.2" />

            {/* Animated Data Streams */}
            <motion.circle r="0.6" fill="#60a5fa" style={{ filter: "drop-shadow(0 0 2px #60a5fa)" }}>
              <animateMotion dur="3s" repeatCount="indefinite" path="M 20 25 L 35 25 C 45 25, 45 50, 50 50" />
            </motion.circle>
            <motion.circle r="0.6" fill="#60a5fa" style={{ filter: "drop-shadow(0 0 2px #60a5fa)" }}>
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 20 75 L 35 75 C 45 75, 45 50, 50 50" />
            </motion.circle>
            <motion.circle r="0.6" fill="#4ade80" style={{ filter: "drop-shadow(0 0 2px #4ade80)" }}>
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 50 C 55 50, 55 25, 65 25 L 80 25" />
            </motion.circle>
            <motion.circle r="0.6" fill="#4ade80" style={{ filter: "drop-shadow(0 0 2px #4ade80)" }}>
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M 50 50 C 55 50, 55 75, 65 75 L 80 75" />
            </motion.circle>
          </svg>

          {/* Left Column (Inputs) */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", padding: "2rem 0", zIndex: 10 }}>
            {[need.points[0], need.points[1]].map((point, i) => (
              <motion.div key={point.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }} style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: "1.5rem", backdropFilter: "blur(12px)", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div style={{ position: "absolute", top: "50%", right: "-12px", width: 12, height: 2, background: "rgba(59,130,246,0.5)", transform: "translateY(-50%)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#60a5fa", fontFamily: "monospace", letterSpacing: "0.1em", background: "rgba(59,130,246,0.1)", padding: "2px 6px", borderRadius: 4 }}>INPUT_NODE</div>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
                  <div style={{ fontSize: 10, color: "#4ade80", fontFamily: "monospace" }}>SYNCED</div>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3, color: "#f8fafc" }}>{point.title}</h3>
                <div style={{ marginTop: "1.25rem", height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2, overflow: "hidden" }}>
                  <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }} style={{ height: "100%", background: "#3b82f6" }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column (AI Core) */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10, height: "100%" }}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, type: "spring" }} style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Core Glow */}
              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 60%)", borderRadius: "50%" }} />

              {/* Outer Data Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: 280, height: 280, border: "1px dashed rgba(59,130,246,0.4)", borderRadius: "50%" }} />

              {/* Inner Process Ring */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: 200, height: 200, border: "2px solid rgba(59,130,246,0.05)", borderTopColor: "rgba(59,130,246,0.9)", borderBottomColor: "rgba(59,130,246,0.9)", borderRadius: "50%" }} />

              {/* Central Diamond Core with Logo */}
              <motion.div animate={{ rotate: 90 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ width: 88, height: 88, background: "rgba(15,23,42,0.9)", border: "2px solid #3b82f6", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(59,130,246,0.6)", backdropFilter: "blur(10px)", zIndex: 5 }}>
                <img src="images/logo.png" alt="Lucid Logo" style={{ width: 50, height: 50, transform: "rotate(-45deg)" }} />
              </motion.div>

              {/* Core Text Label */}
              <div style={{ position: "absolute", bottom: -40, textAlign: "center", width: "100%" }}>
                <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.3em", color: "#60a5fa", fontFamily: "monospace" }}>LUCID_ENGINE</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
                  <div style={{ fontSize: 10, color: "#94a3b8", letterSpacing: "0.05em" }}>OPTIMIZING WORKFLOWS</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Outputs) */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", padding: "2rem 0", zIndex: 10 }}>
            {[need.points[2], need.points[3]].map((point, i) => (
              <motion.div key={point.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }} style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: 16, padding: "1.5rem", backdropFilter: "blur(12px)", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div style={{ position: "absolute", top: "50%", left: "-12px", width: 12, height: 2, background: "rgba(74,222,128,0.5)", transform: "translateY(-50%)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#4ade80", fontFamily: "monospace", letterSpacing: "0.1em", background: "rgba(74,222,128,0.1)", padding: "2px 6px", borderRadius: 4 }}>OUTCOME_NODE</div>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
                  <div style={{ fontSize: 10, color: "#60a5fa", fontFamily: "monospace" }}>DEFENSIBLE</div>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3, color: "#f8fafc" }}>{point.title}</h3>
                <div style={{ marginTop: "1.25rem", display: "flex", gap: 4, height: 16 }}>
                  {[...Array(16)].map((_, j) => (
                    <motion.div key={j} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.05 }} style={{ flex: 1, background: "#4ade80", borderRadius: 2 }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Command Bar & CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ background: "rgba(2,6,23,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "1.25rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(20px)", marginTop: "auto", zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 10px #4ade80" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#94a3b8", fontFamily: "monospace" }}>SYSTEM VERIFIED</span>
              </div>
              
            </div>

            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />

            <div style={{ display: "flex", gap: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <span style={{ fontSize: 9, color: "#71717a", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Global Uptime</span>
                <span style={{ fontSize: 14, color: "#f8fafc", fontWeight: 700 }}>99.99%</span> */}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <span style={{ fontSize: 9, color: "#71717a", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Net Latency</span>
                <span style={{ fontSize: 14, color: "#f8fafc", fontWeight: 700 }}>12ms</span> */}
              </div>
            </div>
          </div>

          <button onClick={onNext} style={{ display: "flex", alignItems: "center", gap: 10, padding: "1rem 2.5rem", borderRadius: 12, background: "#f8fafc", color: "#020617", fontSize: "1rem", fontWeight: 800, border: "none", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 25px rgba(255,255,255,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            Initialize OS <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};



// ─────────────── HERO ───────────────
const Hero = () => {
  const { hero } = LUCID_CONTENT;
  const [open, setOpen] = React.useState(false);

  return (
    <section style={{ minHeight: "calc(100vh - 72px)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: "#fff", borderBottom: "1px solid #f1f5f9" }}>
      {/* blobs */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 700, height: 700, background: "radial-gradient(circle, rgba(191,219,254,0.5) 0%, transparent 65%)", transform: "translate(30%, -30%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 500, height: 500, background: "radial-gradient(circle, rgba(186,230,253,0.3) 0%, transparent 70%)", transform: "translate(-30%, 30%)", pointerEvents: "none" }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 2rem 3rem", maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: "2.5rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: 9999, background: "#2563eb" }} />
            <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.4em", color: "#3b82f6", textTransform: "uppercase" }}>{hero.subtitle}</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.88, marginBottom: "2rem", color: "#0f172a", fontFamily: "Georgia, serif" }}>
            The operating system<br />
            your <em style={{ color: "#2563eb", fontStyle: "italic" }}>business runs on.</em><br />
            <span style={{ color: "#94a3b8", fontStyle: "normal" }}>From decision to execution.</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#64748b", maxWidth: 640, marginBottom: "3rem", lineHeight: 1.7, fontWeight: 300 }}>
            Not a feature. Not a dashboard. The <strong style={{ color: "#0f172a", fontWeight: 700 }}>operating layer between what your organization decides and what actually happens</strong> — at the counter, on the floor, in the field, on the line.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <button onClick={() => setOpen(true)} style={{ height: 56, padding: "0 2.5rem", borderRadius: 18, background: "#2563eb", color: "#fff", fontWeight: 800, fontSize: "1.05rem", border: "none", cursor: "pointer", boxShadow: "0 12px 30px rgba(37,99,235,0.3)", transition: "transform 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              See Lucid in action
            </button>
            <button style={{ height: 56, padding: "0 2.5rem", borderRadius: 18, background: "transparent", color: "#475569", fontWeight: 800, fontSize: "1.05rem", border: "1.5px solid #cbd5e1", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#cbd5e1"}>
              Request a 30-day pilot
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div style={{ borderTop: "1px solid #f1f5f9", background: "rgba(248,250,252,0.8)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {hero.stats.map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1, marginBottom: 8 }}>
                {stat.label}<span style={{ color: "#2563eb", fontSize: "0.6em" }}>{stat.sub}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase", maxWidth: 180 }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo dialog */}
      {open && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }} onClick={() => setOpen(false)}>
          <div style={{ background: "#fff", borderRadius: 28, padding: "3rem", maxWidth: 440, width: "100%", boxShadow: "0 40px 80px rgba(0,0,0,0.2)" }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 900, letterSpacing: "-0.03em", color: "#0f172a", marginBottom: 8 }}>See Lucid in Action</h3>
            <p style={{ color: "#64748b", marginBottom: "2rem", fontWeight: 300 }}>Schedule a personalized tour of the Lucid OS.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", display: "block", marginBottom: 6 }}>Full Name</label>
                <input placeholder="John Doe" style={{ width: "100%", height: 48, padding: "0 1rem", border: "1.5px solid #e2e8f0", borderRadius: 14, fontSize: "1rem", color: "#0f172a", background: "#f8fafc", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", display: "block", marginBottom: 6 }}>Work Email</label>
                <input type="email" placeholder="john@company.com" style={{ width: "100%", height: 48, padding: "0 1rem", border: "1.5px solid #e2e8f0", borderRadius: 14, fontSize: "1rem", color: "#0f172a", background: "#f8fafc", boxSizing: "border-box" }} />
              </div>
              <button onClick={() => { alert("Demo request submitted! Our team will contact you shortly."); setOpen(false); }} style={{ height: 52, borderRadius: 14, background: "#2563eb", color: "#fff", fontWeight: 800, fontSize: "1rem", border: "none", cursor: "pointer" }}>
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// ─────────────── COMPARISON ───────────────
const Comparison = () => {
  const { comparison } = LUCID_CONTENT;
  return (
    <section style={{ padding: "8rem 2rem", background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <p style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", color: "#64748b", fontWeight: 300, lineHeight: 1.6, marginBottom: "4rem" }}>
            The way <em style={{ color: "#0f172a", fontWeight: 700 }}>Instagram became non-negotiable for marketing at scale</em> — Lucid is becoming non-negotiable for <em style={{ color: "#0f172a", fontWeight: 700 }}>sales and operations execution.</em> Organizations running on Lucid don't debate whether to use it. They can't imagine operating without it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────── CAPABILITIES ───────────────
const Capabilities = () => {
  const { capabilities } = LUCID_CONTENT;
  return (
    <section id="results" style={{ padding: "7rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
            <div style={{ width: 32, height: 1.5, background: "#2563eb" }} />
            <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.4em", color: "#3b82f6", textTransform: "uppercase" }}>{capabilities.subtitle}</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#0f172a", marginBottom: "1.5rem", lineHeight: 1 }}>
            {capabilities.title}
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#64748b", maxWidth: 560, fontWeight: 300, lineHeight: 1.7 }}>{capabilities.description}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {capabilities.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
              <div style={{ height: "100%", padding: "2.5rem", background: "#f8fafc", borderRadius: 28, border: "1px solid transparent", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.borderColor = "transparent"; }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <IconComp name={item.icon} className="w-6 h-6" style={{ width: 24, height: 24, color: "#2563eb" }} />
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.025em", color: "#0f172a", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────── HOW IT WORKS ───────────────
const HowItWorks = () => {
  const { howItWorks } = LUCID_CONTENT;
  return (
    <section id="how-it-works" style={{ padding: "7rem 2rem", background: "#fff", borderTop: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "6rem" }}>
          <span style={{ display: "inline-block", padding: "0.35rem 1rem", borderRadius: 9999, border: "1px solid #bfdbfe", background: "#eff6ff", color: "#2563eb", fontSize: 10, fontWeight: 900, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.5rem" }}>{howItWorks.subtitle}</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#0f172a", marginBottom: "1.5rem", lineHeight: 1 }}>{howItWorks.title}</h2>
          <p style={{ fontSize: "1.25rem", color: "#64748b", maxWidth: 540, fontWeight: 300, lineHeight: 1.7 }}>{howItWorks.description}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
          {howItWorks.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
                <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} style={{ order: isEven ? 1 : 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
                    <div style={{ width: 28, height: 1.5, background: "#2563eb" }} />
                    <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.35em", color: "#3b82f6", textTransform: "uppercase" }}>Step 0{index + 1}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.035em", color: "#0f172a", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                    {step.heading.includes("Lucid")
                      ? step.heading.split("Lucid").map((part, i, arr) => (
                        <span key={i}>{part}{i < arr.length - 1 && <em style={{ color: "#2563eb" }}>Lucid </em>}</span>
                      ))
                      : step.heading}
                  </h3>
                  <p style={{ fontSize: "1.1rem", color: "#64748b", marginBottom: "2.5rem", lineHeight: 1.8, fontWeight: 300 }}>{step.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {step.points.map((point, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                        <div style={{ width: 6, height: 6, borderRadius: 9999, background: "#2563eb", marginTop: 9, flexShrink: 0 }} />
                        <span style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.6, fontWeight: 300 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ order: isEven ? 2 : 1 }}>
                  <div style={{ borderRadius: 32, overflow: "hidden", background: "#f1f5f9", padding: 12, boxShadow: "0 24px 60px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
                    <img src={step.image} alt={step.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 22, display: "block" }} referrerPolicy="no-referrer" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─────────────── FINAL CTA ───────────────
const FinalCTA = () => (
  <section style={{ padding: "6rem 2rem", background: "#fff" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ background: "#0f172a", borderRadius: 48, padding: "clamp(3rem,8vw,7rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(37,99,235,0.25) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 780, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 6vw, 5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.045em", lineHeight: 0.9, marginBottom: "2rem" }}>
            Your execution gap<br />has a <em style={{ color: "#60a5fa", fontStyle: "italic" }}>cost.</em>
          </h2>
          <p style={{ color: "#64748b", fontSize: "clamp(1rem, 2vw, 1.4rem)", marginBottom: "3.5rem", lineHeight: 1.7, fontWeight: 300 }}>
            Every week without Lucid is a week where your strategy stays at the top and your <span style={{ color: "#fff", fontWeight: 500 }}>ground reality stays unknown.</span> The Lighthouse Programme gives you 30 days to find out exactly what's possible.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <button style={{ height: 60, padding: "0 3rem", borderRadius: 20, background: "#2563eb", color: "#fff", fontWeight: 800, fontSize: "1.05rem", border: "none", cursor: "pointer", boxShadow: "0 20px 40px rgba(37,99,235,0.3)", transition: "transform 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              Apply for the Lighthouse Programme
            </button>
            <button style={{ height: 60, padding: "0 2rem", borderRadius: 20, background: "transparent", color: "#94a3b8", fontWeight: 800, fontSize: "1.05rem", border: "none", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
              Talk to us first →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────── MAIN APP ───────────────
export default function Home() {
  const [act, setAct] = React.useState(1);

  React.useEffect(() => {
    const isDark = act === 2;
    window.dispatchEvent(new CustomEvent("lucid:header", { detail: { dark: isDark } }));
    return () => {
      window.dispatchEvent(new CustomEvent("lucid:header", { detail: { dark: false } }));
    };
  }, [act]);

  const nextAct = () => setAct(p => p + 1);
  const skipToMain = () => setAct(3);

  if (act === 1) return <StoryAct1 onNext={nextAct} onSkip={skipToMain} />;
  if (act === 2) return <StoryAct2 onNext={skipToMain} onSkip={skipToMain} />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Hero />
      <Comparison />
      <Capabilities />
      <HowItWorks />
      <FinalCTA />
    </motion.div>
  );
}