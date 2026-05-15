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
    subtitle: "WHAT IS LUCID",
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
        { id: "01", title: "Deploy in hours, not months?" },
        { id: "02", title: "Something your frontline actually uses?" },
        { id: "03", title: "AI with real business impact?", },
        { id: "04", title: "Execution visible. Revenue defensible?" },
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
        image: "/images/upload.png"
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
        image: "/images/secondstep.png"
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
        image: "/images/analytics.png"
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
      id: "FMCG",
      text: "Sales Scheme Is Live. Margins Are Sweetend. Yet<span style='color:#2563eb;font-weight:700'> Secondary Sales Are Flat.</span> Did You Rep Know What To Push Before The Beat Started?",
      footer: "A Whatsapp Broadcast The Night Before Isn't Readiness.The Margin Was Lost Before The Sale Began.",
    },
    {
      id: "BANKING",
      text: "Sales Target Are Set. Portfolio Is Full. Yet <span style='color:#2563eb;font-weight:700'>Wallet Share Hasn't Moved In Two Quaters.</span> Does Your Relationship Manager Know How To Have The Next Conversation? ",
      footer: "Incentives Don't Build The Pitch. If The Relationship Manager Wasn't Ready, The Opportunity Walked Out Every Day ",
    },
    {
      id: "QSR",
       text: "Food Menu Is Live. Combo Margins Are Higher. Yet <span style='color:#2563eb;font-weight:700'>Average Order Value Hasn't Moved Since Launch.</span> Is Your Crew Selling — Or Just Reading It Out?",
       footer: "The Order Screen Can't Suggest The combo. Only The Crew Can. Every Shift Since Launch Is Revenue Left On The Counter..",
    },
    {
      id: "RETAIL",
       text: "Planogram Is Set. Promotion Is Live. Yet <span style='color:#2563eb;font-weight:700'>Conversion At The Shelf Hasn't Moved.</span> Does Your Store Associate Know What To Say When The Customer Picks It Up?",
       footer: "Footfall Isn't The Gap. The Conversation At The Shelf Is. If The Associate Wasn't Ready, The Sale Walked Out With The Customer.",
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem" }}>
              <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.5em", color: "#60a5fa", fontFamily: "monospace", textTransform: "uppercase" }}> {questions[index].id}</span>
              {/* <div style={{ width: 48, height: 1, background: "#cbd5e1" }} /> */}
              {/* <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.5em", color: "#94a3b8", fontFamily: "monospace", textTransform: "uppercase" }}></span> */}
            </div>

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
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" }}>What You Need to Increase Your Revenue</span>
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

// ─────────────── ACT 2 — The Answer (dark, hover-reveal 2×2 grid) ───────────────
// Replace your existing StoryAct2 component entirely with this one.
// Everything else (imports, LUCID_CONTENT, other components, Home) stays unchanged.

const StoryAct2 = ({ onNext, onSkip }) => {
  const cards = [
    {
      id: "01",
      label: "PEOPLE",
      summary: "Deploy in hours, not months.",
      points: [
        "You need your top rep's accounts covered the day they resign — not three months later.",

"You need the new rep to walk into the territory knowing every account, every relationship, every open deal — not start from zero.",

"You need your forecast pressure-tested at rep level — not trusted because the manager said so."

      ],
    },
    {
      id: "02",
      label: "SALES PROCESS",
      summary: "Something your frontline actually uses.",
      points: [
        "You need to know if Tuesday's task was done — not take the ASM's word for it.",

"You need your rep to counter the competitor at the shelf — not after losing the order.",

"You need every lost deal to make the next rep sharper — not disappear into a CRM field."
      ],
    },
    {
      id: "03",
      label: "TOOLS",
      summary: "AI with real business impact.",
      points: [
        "You need the battle card before the meeting — not the day after.",

"You need photo proof the display was executed — not a WhatsApp \"done sir.\"",

"You need the pitch deck your rep opens to be current — not three versions old."
      ],
    },
    {
      id: "04",
      label: "CONTENT",
      summary: "Execution visible. Revenue defensible.",
      points: [
        "You need the new scheme at the distributor counter the day it launches — not when the RSM gets around to it.",

"You need a competitor response in your rep's hand the week they drop a new product — not three weeks later.",

"You need the pitch your marketing built to actually reflect what works on the ground — not sit unused in a shared drive."
      ],
    },
  ];

  const [hovered, setHovered] = React.useState(null);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#020617",
        color: "#f8fafc",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "system-ui, -apple-system, sans-serif",
        paddingTop: "80px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Background layers ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "120vh",
          height: "120vh",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content container ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "1.25rem 2rem",
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          minHeight: 0,
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: "0.75rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.4em",
              color: "#94a3b8",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            WHAT YOU NEED?
          </span>
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: "0.75rem",
            minHeight: 0,
          }}
        >
          {cards.map((card, i) => {
            const isHovered = hovered === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  background: isHovered
                    ? "rgba(15,23,42,0.95)"
                    : "rgba(2,6,23,0.6)",
                  padding: "1.25rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "default",
                  transition: "background 0.35s ease",
                  outline: isHovered
                    ? "1px solid rgba(59,130,246,0.4)"
                    : "none",
                  outlineOffset: "-1px",
                  minHeight: 0,
                  overflow: "hidden",
                }}
              >
                {/* Top row: label + ghost number */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.35em",
                      color: isHovered ? "#60a5fa" : "#475569",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      transition: "color 0.35s",
                    }}
                  >
                    {card.label}
                  </span>

                  {/* Ghost number — fades out on hover */}
                  <span
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.06)",
                      lineHeight: 1,
                      fontFamily: "Georgia, serif",
                      userSelect: "none",
                      opacity: isHovered ? 0 : 1,
                      transform: isHovered ? "scale(0.92)" : "scale(1)",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                    }}
                  >
                    {card.id}
                  </span>
                </div>

                {/* Bullet points — slide in on hover */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 0",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
                    pointerEvents: isHovered ? "auto" : "none",
                    minHeight: 0,
                  }}
                >
                  {card.points.map((point, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.7rem",
                      }}
                    >
                      {/* Left bar */}
                      <div
                        style={{
                          width: 2,
                          minHeight: "100%",
                          alignSelf: "stretch",
                          background: "rgba(96,165,250,0.5)",
                          borderRadius: 2,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "#94a3b8",
                          lineHeight: 1.3,
                          fontWeight: 300,
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Summary line */}
                <div
                  style={{
                    fontSize: "clamp(0.75rem, 0.95vw, 0.85rem)",
                    fontWeight: 600,
                    color: "#e2e8f0",
                    lineHeight: 1.25,
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? "translateY(4px)" : "translateY(0)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                    marginTop: "0.5rem",
                  }}
                >
                  {card.summary}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ── Bottom command bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: "rgba(2,6,23,0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "0.85rem 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backdropFilter: "blur(20px)",
            zIndex: 10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            flexShrink: 0,
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4ade80",
                    boxShadow: "0 0 10px #4ade80",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  SYSTEM VERIFIED
                </span>
              </div>
            </div>
            <div
              style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }}
            />
          </div>

          <button
            onClick={onNext}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0.65rem 1.5rem",
              borderRadius: 12,
              background: "#f8fafc",
              color: "#020617",
              fontSize: "0.85rem",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
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
            Lucid Is The Operating System<br />
            Your <em style={{ color: "#2563eb", fontStyle: "italic" }}>Business Runs On.</em><br />
            <span style={{ color: "#94a3b8", fontStyle: "normal" }}>From Decision To Execution.</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#64748b", maxWidth: 640, marginBottom: "3rem", lineHeight: 1.7, fontWeight: 300 }}>
            Not a Feature. Not a Dashboard. The <strong style={{ color: "#0f172a", fontWeight: 700 }}>Operating Layer Between What Your Sales Organization Decides And What Actually Happens</strong> — At The Counter, On The Floor, In The Field, On The Line.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <button onClick={() => setOpen(true)} style={{ height: 56, padding: "0 2.5rem", borderRadius: 18, background: "#2563eb", color: "#fff", fontWeight: 800, fontSize: "1.05rem", border: "none", cursor: "pointer", boxShadow: "0 12px 30px rgba(37,99,235,0.3)", transition: "transform 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              Join Lighthouse Programme 
            </button>
            <button style={{ height: 56, padding: "0 2.5rem", borderRadius: 18, background: "transparent", color: "#475569", fontWeight: 800, fontSize: "1.05rem", border: "1.5px solid #cbd5e1", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#cbd5e1"}>
              Book a Demo
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

// ─────────────── UPLOAD WORKFLOW ANIMATION ───────────────
const UploadWorkflowAnimation = () => {
  const inputFiles = [
    { id: 1, name: "SOP.pdf", icon: "📄", delay: 0 },
    { id: 2, name: "Product_Manual.docx", icon: "📘", delay: 0.1 },
    { id: 3, name: "Audit_Checklist.xlsx", icon: "📊", delay: 0.2 },
    { id: 4, name: "Voice_Note.mp3", icon: "🎙️", delay: 0.3 },
    { id: 5, name: "Brand_Guidelines.ppt", icon: "🎨", delay: 0.4 },
  ];

  const outputAssets = [
    { id: 1, name: "WhatsApp Sprint", icon: "💬", delay: 0.6 },
    { id: 2, name: "Microlearning Video", icon: "🎬", delay: 0.7 },
    { id: 3, name: "Audio Lesson", icon: "🎵", delay: 0.8 },
    { id: 4, name: "Flashcards", icon: "📇", delay: 0.9 },
    { id: 5, name: "Training Checklist", icon: "✅", delay: 1 },
  ];

  return (
    <div style={{ width: "100%", aspectRatio: "4/3", background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", borderRadius: 24, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Left: Input Files */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", width: "20%" }}>
          {inputFiles.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: file.delay, duration: 0.6 }}
            >
              <motion.div
                animate={{ x: [0, 80, 0] }}
                transition={{ delay: file.delay + 0.8, duration: 2.5, repeat: Infinity }}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: "0.75rem 1rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#64748b",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                <span>{file.icon}</span>
                <span>{file.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Center: Processing Engine */}
        <div style={{ width: "40%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative", width: 140, height: 140 }}>
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 0,
                border: "2px solid transparent",
                borderTop: "2px solid #3b82f6",
                borderRight: "2px solid #3b82f6",
                borderRadius: "50%",
              }}
            />

            {/* Inner pulsing circle */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: "absolute",
                inset: 10,
                background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            {/* Core element */}
            <div style={{
              position: "absolute",
              inset: 30,
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              boxShadow: "0 8px 24px rgba(37,99,235,0.3)",
            }}>
              ⚙️
            </div>

            {/* Animated particles */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                style={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <div style={{
                  position: "absolute",
                  width: 4,
                  height: 4,
                  background: "#2563eb",
                  borderRadius: "50%",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  opacity: 0.6,
                }} />
              </motion.div>
            ))}

            {/* Label */}
            <div style={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#2563eb",
              letterSpacing: "0.05em",
            }}>
              LUCID AI
            </div>
          </div>
        </div>

        {/* Right: Output Assets */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", width: "20%" }}>
          {outputAssets.map((asset) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: asset.delay, duration: 0.6 }}
            >
              <motion.div
                animate={{ x: [-80, 0, 0] }}
                transition={{ delay: asset.delay + 0.2, duration: 2.5, repeat: Infinity }}
                style={{
                  background: "#fff",
                  border: "1.5px solid #3b82f6",
                  borderRadius: 12,
                  padding: "0.75rem 1rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#2563eb",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                <span>{asset.icon}</span>
                <span>{asset.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connecting lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
        {/* Left to center */}
        <motion.path
          d="M 100 150 Q 250 100 350 150"
          fill="none"
          stroke="url(#leftGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Right from center */}
        <motion.path
          d="M 450 150 Q 600 100 700 150"
          fill="none"
          stroke="url(#rightGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
        />
        <defs>
          <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
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
                  <div style={{ borderRadius: 32, overflow: "hidden", background: "transparent", padding: 0, boxShadow: "none", border: "none" }}>
                    <img src={step.image} alt={step.title} style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 32, display: "block" }} referrerPolicy="no-referrer" />
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