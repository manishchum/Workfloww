import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── Types ────────────────────────────────────────────────────────────── */
type PillarKey = "team" | "tools" | "execution" | "content";

const TABS: { key: PillarKey; label: string }[] = [
  { key: "team",      label: "Sales Team" },
  { key: "tools",     label: "Sales Tools" },
  { key: "execution", label: "Sales Execution" },
  { key: "content",   label: "Sales Content" },
];

/* ─── Reusable primitives ───────────────────────────────────────────────── */

/** Pill badge above hero headline */
function HeroBadge({ pillar, label }: { pillar: string; label: string }) {
  const colours: Record<string, string> = {
    "Pillar 1": "bg-blue-50 text-blue-600",
    "Pillar 2": "bg-amber-100 text-amber-800",
    "Pillar 3": "bg-emerald-100 text-emerald-800",
    "Pillar 4": "bg-rose-100 text-rose-800",
  };
  const dotColours: Record<string, string> = {
    "Pillar 1": "bg-blue-600",
    "Pillar 2": "bg-amber-700",
    "Pillar 3": "bg-emerald-700",
    "Pillar 4": "bg-rose-700",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${colours[pillar]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColours[pillar]}`} />
      {label}
    </span>
  );
}

/** Left check-list item */
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-600">
      <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-3 h-3 text-blue-600" />
      </span>
      {text}
    </li>
  );
}

/** Small feature card for the sub-features grid */
function SFCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg mb-4">{icon}</div>
      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h4>
      <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/** Dark stat banner strip */
function StatBanner({ stats }: { stats: { num: string; suffix: string; label: string }[] }) {
  return (
    <div className="bg-slate-900 py-12 px-8">
      <div className="lucid-container grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl font-extrabold tracking-tight text-white leading-none mb-1.5">
              {s.num}<span className="text-blue-300">{s.suffix}</span>
            </div>
            <div className="text-sm text-slate-400 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** CTA strip at bottom of each pillar */
function CTAStrip({ headline }: { headline: string }) {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 py-12 px-8">
      <div className="lucic-container bg-blue-700 rounded-2xl py-14 px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-8">{headline}</h2>
        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/70 text-white font-bold text-sm px-8 py-3 rounded-xl transition-all"
        >
          Book Demo Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/** Sub-features section with grey background */
function SubFeatures({ title, sub, cards }: { title: string; sub: string; cards: { icon: string; title: string; desc: string }[] }) {
  return (
    <div className="bg-slate-50 py-16 px-8">
      <div className="lucid-container">
        <h3 className="text-xl font-extrabold text-center text-slate-900 mb-2">{title}</h3>
        <p className="text-center text-sm text-slate-600 mb-10">{sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => <SFCard key={i} {...c} />)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   APP MOCKUP COMPONENTS
   These render the inline phone/dashboard UI shown in the reference HTML.
   All colours follow the mapping table above.
───────────────────────────────────────────────────────────────────────── */

/** WhatsApp-style sprint conversation (Pillar 1 hero) */
function MockupWhatsAppSprint() {
  return (
    <div className="bg-slate-900 rounded-[28px] overflow-hidden max-w-[240px] mx-auto shadow-2xl" style={{ aspectRatio: "9/16" }}>
      {/* Top bar */}
      <div className="bg-blue-600 px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-xs font-bold text-white">L</div>
        <div>
          <div className="text-xs font-bold text-white">Lucid Training</div>
          <div className="text-[10px] text-white/70">WhatsApp · Official</div>
        </div>
        <span className="ml-auto bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">LIVE</span>
      </div>
      {/* Chat body */}
      <div className="bg-slate-50 p-3 flex flex-col gap-2 flex-1 overflow-hidden">
        {[
          { side: "left",  text: "👋 Good morning, Ravi! Your Product Sprint #3 is ready. Takes ~8 mins." },
          { side: "left",  text: "🎯 Today's topic: Handling objections on premium plans.\n\nTap START when ready 👇" },
          { side: "right", text: "START" },
          { side: "left",  text: "Q1 of 5: A customer says the plan is too expensive. What do you say first?\n\nA) Offer a discount\nB) Ask about their budget\nC) Highlight the value" },
          { side: "right", text: "C" },
          { side: "left",  text: "✅ Correct! Great thinking. Let's continue..." },
        ].map((m, i) => (
          <div key={i} className={`flex gap-1.5 ${m.side === "right" ? "flex-row-reverse" : ""}`}>
            {m.side === "left" && (
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[8px] font-bold text-blue-600 shrink-0 self-end">L</div>
            )}
            <div className={`max-w-[75%] px-2.5 py-1.5 rounded-xl text-[10px] leading-snug whitespace-pre-line ${
              m.side === "right"
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-800"
            }`}>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Onboarding progress tracker mockup (Pillar 1 feature 1) */
function MockupOnboardingProgress() {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-blue-600 px-4 py-2.5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center text-xs font-bold text-white">R</div>
        <div>
          <div className="text-[11px] font-bold text-white">Ravi Kumar — Day 3 Onboarding</div>
          <div className="text-[9px] text-white/70">Insurance Sales · Mumbai Region</div>
        </div>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        {[
          { tag: "WEEK 1 SPRINT", title: "Product Knowledge: Term Plans", sub: "5 modules · 22 mins total", pct: 100, status: "✅ Completed", statusColor: "text-emerald-600" },
          { tag: "WEEK 1 SPRINT", title: "Objection Handling Basics",     sub: "4 modules · 18 mins total", pct: 60,  status: "In progress",   statusColor: "text-blue-600" },
          { tag: "WEEK 2 SPRINT", title: "Customer Conversation Roleplay", sub: "Unlocks after Week 1 complete", pct: 0, status: "Locked", statusColor: "text-slate-400", locked: true },
        ].map((s, i) => (
          <div key={i} className={`bg-white rounded-xl p-3 border border-slate-200 ${s.locked ? "opacity-50" : ""}`}>
            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1.5 inline-block">{s.tag}</span>
            <div className="text-[11px] font-bold text-slate-900">{s.title}</div>
            <div className="text-[9px] text-slate-500 mb-1.5">{s.sub}</div>
            <div className="h-1 bg-slate-100 rounded-full mb-1"><div className="h-full rounded-full bg-blue-600" style={{ width: `${s.pct}%` }} /></div>
            <div className="flex justify-between text-[9px]">
              <span className={s.statusColor}>{s.status}</span>
              <span className="font-bold text-slate-900">{s.pct}%</span>
            </div>
          </div>
        ))}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-2.5 text-white">
          <div className="text-[9px] font-semibold opacity-80">ONBOARDING READINESS SCORE</div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold">72</span>
            <span className="text-[9px] opacity-75">/ 100 · Progressing well 🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** AI Roleplay chat mockup (Pillar 1 feature 2) */
function MockupAIRoleplay() {
  return (
    <div className="bg-slate-900 rounded-[28px] overflow-hidden max-w-[240px] mx-auto shadow-2xl" style={{ aspectRatio: "9/16" }}>
      <div className="bg-slate-900 px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center text-xs font-bold text-white">AI</div>
        <div>
          <div className="text-xs font-bold text-white">AI Roleplay</div>
          <div className="text-[10px] text-white/70">Practice Mode · Scenario 3</div>
        </div>
        <span className="ml-auto bg-yellow-500/20 text-yellow-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">LIVE</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2 overflow-hidden">
        <div className="bg-violet-100 rounded-lg p-2 mb-1">
          <div className="text-[9px] font-bold text-violet-700 mb-1">SCENARIO</div>
          <div className="text-[10px] text-violet-800">Customer: "I already have a policy. Why do I need another?"</div>
        </div>
        {[
          { side: "left",    text: "I already have a policy from LIC. Why would I need yours?",   bg: "bg-slate-200 text-slate-800" },
          { side: "right",   text: "Sir, that's great! Your existing policy likely covers basic risk, but does it protect your family's income for the full 30 years?", bg: "bg-blue-600 text-white" },
          { side: "left",    text: "✅ Good reframe! You acknowledged their plan and pivoted to a gap. Score: 8.5/10", bg: "bg-emerald-100 text-emerald-800" },
        ].map((m, i) => (
          <div key={i} className={`flex gap-1.5 ${m.side === "right" ? "flex-row-reverse" : ""}`}>
            {m.side === "left" && (
              <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center text-[8px] font-bold text-violet-600 shrink-0 self-end">AI</div>
            )}
            <div className={`max-w-[75%] px-2.5 py-1.5 rounded-xl text-[10px] leading-snug ${m.bg}`}>{m.text}</div>
          </div>
        ))}
        <div className="bg-white border border-slate-200 rounded-lg p-2">
          <div className="text-[9px] font-bold text-slate-900 mb-1">COACH FEEDBACK</div>
          <div className="text-[9px] text-slate-600">💡 Next time, mention a specific number — "30-year income protection" is stronger.</div>
        </div>
      </div>
    </div>
  );
}

/** WhatsApp channel mockup (Pillar 2 hero) */
function MockupWhatsAppChannel() {
  return (
    <div className="bg-slate-900 rounded-[28px] overflow-hidden max-w-[240px] mx-auto shadow-2xl" style={{ aspectRatio: "9/16" }}>
      <div className="bg-emerald-800 px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">📱</div>
        <div>
          <div className="text-xs font-bold text-white">Lucid · WhatsApp</div>
          <div className="text-[10px] text-white/70">Business Account · Verified ✓</div>
        </div>
      </div>
      <div className="bg-[#E5DDD5] p-3 flex flex-col gap-2 overflow-hidden">
        {[
          { side: "left",  bg: "bg-white text-slate-800",                    text: "🚀 Sprint Alert!\nNew menu launch training is live.\nComplete before your shift today.\n\nTap READY to start" },
          { side: "right", bg: "bg-[#DCF8C6] text-slate-800",               text: "READY" },
          { side: "left",  bg: "bg-white text-slate-800",                    text: "Q1: The new Mango Fusion drink — which base does it use?\n\n1️⃣ Coconut milk\n2️⃣ Oat milk\n3️⃣ Regular milk\n4️⃣ Almond milk" },
          { side: "right", bg: "bg-[#DCF8C6] text-slate-800",               text: "2" },
          { side: "left",  bg: "bg-white text-slate-800",                    text: "✅ Correct! Oat milk base — our new hero SKU this quarter." },
        ].map((m, i) => (
          <div key={i} className={`flex gap-1.5 ${m.side === "right" ? "flex-row-reverse" : ""}`}>
            {m.side === "left" && (
              <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[8px] font-bold text-white shrink-0 self-end">W</div>
            )}
            <div className={`max-w-[75%] px-2.5 py-1.5 rounded-xl text-[10px] leading-snug whitespace-pre-line ${m.bg}`}>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** AI Content Studio mockup (Pillar 2 feature 1) */
function MockupAIContentStudio() {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-slate-900 px-4 py-2 flex justify-between items-center">
        <span className="text-[11px] font-bold text-white">⚡ AI Content Studio</span>
        <span className="text-[9px] text-slate-400">Processing...</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        <div className="bg-white rounded-lg p-2.5 border border-slate-200">
          <div className="text-[9px] font-bold text-slate-900 mb-2">📄 SOURCE DOCUMENT</div>
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5">
            <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-sm shrink-0">📋</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-900 truncate">Q3_Product_Launch_SOP.pdf</div>
              <div className="text-[9px] text-slate-500">14 pages · uploaded 2 mins ago</div>
            </div>
            <span className="text-[8px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">PROCESSING</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2.5 border border-slate-200">
          <div className="text-[9px] font-bold text-slate-900 mb-2">✨ AI GENERATED SPRINTS</div>
          {[
            { icon: "🎯", name: "Sprint 1: Product Overview",   meta: "5 Q&A · 8 mins", badge: "READY",      badgeCls: "bg-emerald-100 text-emerald-700" },
            { icon: "💬", name: "Sprint 2: Customer Pitch",     meta: "6 scenarios · 10 mins", badge: "READY", badgeCls: "bg-emerald-100 text-emerald-700" },
            { icon: "📊", name: "Sprint 3: Objection Handling", meta: "Generating...", badge: "AI WORKING", badgeCls: "bg-blue-50 text-blue-600" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 mb-1.5 last:mb-0">
              <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-sm shrink-0">{s.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold text-slate-900 truncate">{s.name}</div>
                <div className="text-[9px] text-slate-500">{s.meta}</div>
              </div>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded shrink-0 ${s.badgeCls}`}>{s.badge}</span>
            </div>
          ))}
        </div>
        <div className="bg-blue-600 rounded-lg px-3 py-2 flex items-center gap-2 text-white">
          <span className="text-base">⏱️</span>
          <div>
            <div className="text-[10px] font-bold">Est. completion: 4.5 hours</div>
            <div className="text-[9px] opacity-80">3 sprints ready for your review</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Team readiness dashboard mockup (Pillar 2 feature 2) */
function MockupTeamDashboard() {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-slate-900 px-4 py-2 flex justify-between items-center">
        <span className="text-[11px] font-bold text-white">📊 Team Readiness Dashboard</span>
        <span className="text-[9px] text-slate-400">Today · 8:45 AM</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        <div className="bg-white rounded-lg p-3 border border-slate-200 flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center shrink-0">
            <span className="text-base font-extrabold text-white leading-none">78</span>
            <span className="text-[7px] text-white/80">Score</span>
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-bold text-slate-900 mb-0.5">Team Readiness · Mumbai West</div>
            <div className="text-[9px] text-slate-500 mb-2">12 reps · 9 ready · 3 need attention</div>
            <div className="flex flex-col gap-1">
              {[
                { name: "Ravi K",   pct: 95, color: "bg-blue-600" },
                { name: "Sneha M",  pct: 88, color: "bg-blue-600" },
                { name: "Arjun P",  pct: 42, color: "bg-amber-500" },
                { name: "Priya R",  pct: 28, color: "bg-red-500" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-[8px] text-slate-500 w-10 shrink-0">{r.name}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full">
                    <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-[8px] font-bold text-slate-800 w-7 text-right">{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-center">
            <div className="text-lg font-extrabold text-slate-900">9/12</div>
            <div className="text-[8px] text-slate-500">Sprints completed today</div>
            <div className="text-[8px] font-semibold text-emerald-600">↑ vs yesterday</div>
          </div>
          <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-center">
            <div className="text-lg font-extrabold text-red-500">3</div>
            <div className="text-[8px] text-slate-500">Reps need attention</div>
            <div className="text-[8px] font-semibold text-red-500">⚠ Before shift</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Execution nudge notifications mockup (Pillar 3 hero) */
function MockupNudges() {
  const nudges = [
    { bg: "bg-emerald-50",  icon: "🎯", title: "Today's Target Reminder",  sub: "4 demos · 2 follow-ups · 1 referral ask", time: "9:00" },
    { bg: "bg-amber-50",    icon: "📋", title: "Pre-Visit Checklist Due",   sub: "TATA AIG visit at 10:30 AM — 3 items pending", time: "9:00" },
    { bg: "bg-blue-50",     icon: "📚", title: "Sprint Reminder",           sub: "Compliance update — 6 mins — complete before 11 AM", time: "9:00" },
    { bg: "bg-violet-50",   icon: "🏆", title: "Leaderboard Update",        sub: "You're #3 in Mumbai West this week!", time: "9:01" },
  ];
  return (
    <div className="bg-slate-900 rounded-[28px] overflow-hidden max-w-[240px] mx-auto shadow-2xl" style={{ aspectRatio: "9/16" }}>
      <div className="bg-emerald-900 px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">⚡</div>
        <div>
          <div className="text-xs font-bold text-white">Execution Nudge</div>
          <div className="text-[10px] text-white/70">Pre-shift · 9:00 AM</div>
        </div>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        {nudges.map((n, i) => (
          <div key={i} className={`flex items-start gap-2 rounded-xl p-2.5 border border-slate-100 shadow-sm ${n.bg}`}>
            <div className="w-7 h-7 rounded-lg bg-white/60 flex items-center justify-center text-sm shrink-0">{n.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-900">{n.title}</div>
              <div className="text-[9px] text-slate-600 mt-0.5">{n.sub}</div>
            </div>
            <span className="text-[8px] text-slate-400 shrink-0">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Notification registry mockup (Pillar 3 feature 1) */
function MockupNudgeRegistry() {
  const items = [
    { bg: "bg-emerald-50", icon: "🌅", title: "Pre-Shift Sprint Nudge",       sub: "Sent at 8:30 AM · before first visit" },
    { bg: "bg-amber-50",   icon: "📍", title: "Visit Check-in Reminder",      sub: "Triggered when rep enters geo-zone" },
    { bg: "bg-blue-50",    icon: "📊", title: "Mid-Day Performance Check",    sub: "Sent at 1:00 PM · target vs actuals" },
    { bg: "bg-red-50",     icon: "⚠️", title: "Incomplete Sprint Escalation", sub: "Alerts manager if sprint missed by EOD" },
  ];
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-slate-900 px-4 py-2 flex justify-between">
        <span className="text-[11px] font-bold text-white">⚡ Notification Registry</span>
        <span className="text-[9px] text-slate-400">40 active nudges</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        {items.map((n, i) => (
          <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 ${n.bg}`}>{n.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-900">{n.title}</div>
              <div className="text-[9px] text-slate-500">{n.sub}</div>
            </div>
            <span className="text-[8px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded shrink-0">ON</span>
          </div>
        ))}
        <div className="bg-blue-50 rounded-xl px-3 py-2 flex items-center gap-2">
          <span className="text-sm">📬</span>
          <span className="text-[10px] font-semibold text-blue-700">3,240 nudges sent this week across 54 reps</span>
        </div>
      </div>
    </div>
  );
}

/** KPI impact report mockup (Pillar 3 feature 2) */
function MockupKPIReport() {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-slate-900 px-4 py-2 flex justify-between">
        <span className="text-[11px] font-bold text-white">📈 KPI Impact Report</span>
        <span className="text-[9px] text-slate-400">Q3 · Post Sprint Analysis</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        <div className="bg-white rounded-lg p-3 border border-slate-200">
          <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-2 inline-block">SPRINT IMPACT</span>
          <div className="text-[11px] font-bold text-slate-900 mb-2">Objection Handling Sprint → Close Rate</div>
          <div className="flex items-center gap-3">
            <div><div className="text-[8px] text-slate-500">BEFORE</div><div className="text-xl font-extrabold text-red-500">18%</div></div>
            <div className="text-lg font-bold text-slate-400">→</div>
            <div><div className="text-[8px] text-slate-500">AFTER</div><div className="text-xl font-extrabold text-emerald-600">31%</div></div>
            <div className="ml-auto bg-emerald-100 rounded-lg px-2.5 py-1.5 text-center">
              <div className="text-sm font-extrabold text-emerald-700">+72%</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-center">
            <div className="text-lg font-extrabold text-slate-900">4.2x</div>
            <div className="text-[8px] text-slate-500">Training ROI</div>
            <div className="text-[8px] font-semibold text-emerald-600">vs 1.1x benchmark</div>
          </div>
          <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-center">
            <div className="text-lg font-extrabold text-slate-900">₹2.4Cr</div>
            <div className="text-[8px] text-slate-500">Incremental revenue</div>
            <div className="text-[8px] font-semibold text-emerald-600">Attributed to sprints</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2.5 border border-slate-200">
          <div className="text-[9px] font-bold text-slate-900 mb-1.5">TOP PERFORMING SPRINTS</div>
          {[
            ["Product Launch Pitch",  "+41% conv"],
            ["Upsell Techniques",     "+28% ATV"],
            ["Compliance Refresh",    "-94% errors"],
          ].map(([label, val], i) => (
            <div key={i} className="flex justify-between text-[9px] mb-0.5">
              <span className="text-slate-700">{label}</span>
              <span className="font-bold text-emerald-600">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Content library mockup (Pillar 4 hero) */
function MockupContentLibrary() {
  return (
    <div className="bg-slate-900 rounded-[28px] overflow-hidden max-w-[240px] mx-auto shadow-2xl" style={{ aspectRatio: "9/16" }}>
      <div className="bg-rose-800 px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">📁</div>
        <div>
          <div className="text-xs font-bold text-white">Content Library</div>
          <div className="text-[10px] text-white/70">Sales Content · Live</div>
        </div>
        <span className="ml-auto bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">24 active</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2 overflow-hidden">
        <div className="text-[9px] font-bold text-slate-900 mb-0.5">RECENTLY DEPLOYED</div>
        {[
          { icon: "🎯", name: "Q3 Product Launch Sprints",    meta: "3 sprints · 847 reps assigned", badge: "LIVE",    badgeCls: "bg-emerald-100 text-emerald-700" },
          { icon: "💬", name: "Objection Handling Roleplay",  meta: "5 scenarios · All regions",     badge: "LIVE",    badgeCls: "bg-emerald-100 text-emerald-700" },
          { icon: "📋", name: "Compliance Update — July",     meta: "1 sprint · 2 mins · Mandatory", badge: "PENDING", badgeCls: "bg-amber-100 text-amber-700" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-1.5">
            <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-sm shrink-0">{c.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-900 truncate">{c.name}</div>
              <div className="text-[9px] text-slate-500">{c.meta}</div>
            </div>
            <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded shrink-0 ${c.badgeCls}`}>{c.badge}</span>
          </div>
        ))}
        <div className="text-[9px] font-bold text-slate-900 mt-1 mb-0.5">IN CREATION</div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-1.5">
          <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-sm shrink-0">🤖</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold text-slate-900 truncate">New FMCG Distribution Sprint</div>
            <div className="text-[9px] text-slate-500">AI generating from SOP...</div>
          </div>
          <span className="text-[8px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded shrink-0">AI WORKING</span>
        </div>
      </div>
    </div>
  );
}

/** Content ingestion mockup (Pillar 4 feature 1) */
function MockupContentIngestion() {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-slate-900 px-4 py-2 flex justify-between">
        <span className="text-[11px] font-bold text-white">📥 Content Ingestion</span>
        <span className="text-[9px] text-slate-400">All formats supported</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-3">
        <div className="bg-white rounded-lg p-3 border border-slate-200">
          <div className="text-[9px] font-bold text-slate-900 mb-2">UPLOAD YOUR KNOWLEDGE</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: "📄", name: "PDF / Word",   sub: "SOPs, manuals" },
              { icon: "📊", name: "PowerPoint",   sub: "Decks, playbooks" },
              { icon: "🎙️", name: "Voice Notes",  sub: "Trainer insights" },
              { icon: "🔗", name: "URLs",          sub: "Web pages, docs" },
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-2 text-center border border-dashed border-slate-300">
                <div className="text-lg mb-0.5">{f.icon}</div>
                <div className="text-[9px] font-semibold text-slate-900">{f.name}</div>
                <div className="text-[8px] text-slate-500">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[10px] text-slate-500 shrink-0">AI processes in under 6 hours</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-sm shrink-0">✨</div>
          <div className="flex-1">
            <div className="text-[10px] font-bold text-slate-900">Ready-to-deploy WhatsApp Sprint</div>
            <div className="text-[9px] text-slate-500">Questions, scenarios & assessments included</div>
          </div>
          <span className="text-[8px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded shrink-0">READY</span>
        </div>
      </div>
    </div>
  );
}

/** Voice insights report mockup (Pillar 4 feature 2) */
function MockupVoiceInsights() {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
      <div className="bg-slate-900 px-4 py-2 flex justify-between">
        <span className="text-[11px] font-bold text-white">🎙️ Voice Insights Report</span>
        <span className="text-[9px] text-slate-400">This week · 234 responses</span>
      </div>
      <div className="bg-slate-50 p-3 flex flex-col gap-2">
        <div className="bg-white rounded-lg p-3 border border-slate-200">
          <div className="text-[9px] font-bold text-slate-900 mb-2">TOP FIELD CHALLENGES THIS WEEK</div>
          {[
            { bg: "bg-amber-50",   title: "Pricing Objections · 47 mentions",  sub: "\"Customers say competitors are 20% cheaper\"", titleCls: "text-amber-800", subCls: "text-amber-700" },
            { bg: "bg-blue-50",    title: "Product Confusion · 31 mentions",   sub: "\"Reps unsure about new feature differences\"", titleCls: "text-blue-800",  subCls: "text-blue-700" },
            { bg: "bg-emerald-50", title: "Positive Signal · 28 mentions",     sub: "\"Customers responding well to demo video\"",   titleCls: "text-emerald-800", subCls: "text-emerald-700" },
          ].map((t, i) => (
            <div key={i} className={`rounded-lg px-2.5 py-2 mb-1.5 last:mb-0 ${t.bg}`}>
              <div className={`text-[9px] font-bold ${t.titleCls}`}>{t.title}</div>
              <div className={`text-[8px] mt-0.5 ${t.subCls}`}>{t.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-blue-600 rounded-lg px-3 py-2 text-white">
          <div className="text-[9px] font-bold mb-1">💡 AI RECOMMENDATION</div>
          <div className="text-[9px] opacity-90">Deploy "Competitive Pricing" sprint to all 847 reps — estimated impact: +12% conversion</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   PILLAR DEFINITIONS
───────────────────────────────────────────────────────────────────────── */

type FeatureAlt = {
  label: string;
  title: string;
  body: string;
  checks: string[];
  visual: React.ReactNode;
  reverse?: boolean;
  grayBg?: boolean;
};

type PillarDef = {
  badge: string;
  badgeLabel: string;
  heroTitle: string;
  heroBody: string;
  heroMockup: React.ReactNode;
  features: FeatureAlt[];
  stats: { num: string; suffix: string; label: string }[];
  subTitle: string;
  subSub: string;
  subCards: { icon: string; title: string; desc: string }[];
  ctaHeadline: string;
};

const PILLARS: Record<PillarKey, PillarDef> = {
  team: {
    badge: "Pillar 1", badgeLabel: "Pillar 1",
    heroTitle: "Build a Team That's Ready Before They Hit the Field",
    heroBody: "Stop hoping your frontline knows what to do. Lucid builds knowledge, scores readiness, and tells you exactly who is ready — before the shift begins.",
    heroMockup: <MockupWhatsAppSprint />,
    features: [
      {
        label: "Onboarding Sprints",
        title: "New Joiners Ready in Days, Not Weeks",
        body: "Deploy structured onboarding sprints on WhatsApp the moment someone joins. No classroom. No LMS login. Just a message that gets them ready for their first customer interaction.",
        checks: [
          "Role-specific sprint sequences from day one",
          "Progress tracked automatically — no follow-up calls needed",
          "Managers see who's completed, who's stuck, in real time",
          "Multilingual — train in Hindi, Tamil, Bengali and more",
        ],
        visual: <MockupOnboardingProgress />,
      },
      {
        label: "AI Roleplay",
        title: "Practice the Pitch Before They Face the Customer",
        body: "Lucid's AI roleplay engine puts your rep in a real sales conversation before they step into the field. They face objections, tough questions, and pressure scenarios — safely, on WhatsApp, as many times as they need.",
        checks: [
          "Vertical-specific scenarios — insurance, QSR, pharma, FMCG",
          "AI scores the response, gives instant feedback",
          "Managers see who passed, who needs more practice",
          "Scales across 1,000 reps without manager bandwidth",
        ],
        visual: <MockupAIRoleplay />,
        reverse: true, grayBg: true,
      },
    ],
    stats: [
      { num: "3", suffix: "–4x",  label: "Higher completion vs traditional LMS" },
      { num: "72", suffix: "hrs", label: "Average new joiner goes field-ready" },
      { num: "91", suffix: "%",   label: "Sprint completion rate across enterprise pilots" },
    ],
    subTitle: "More Team Features",
    subSub: "Every capability your people team needs to build a field-ready workforce",
    subCards: [
      { icon: "🌐", title: "Multilingual Delivery",       desc: "Train in Hindi, Tamil, Bengali, Marathi and more. Your frontline learns in the language they think in." },
      { icon: "📊", title: "Workforce Readiness Score",   desc: "Not completion rates — a real readiness score that tells you who's truly ready and who needs support." },
      { icon: "🏆", title: "Certifications & Badges",     desc: "Reward completion with verifiable digital certificates reps can share. Drives motivation at scale." },
      { icon: "🔁", title: "Spaced Repetition",           desc: "Learning doesn't stop after the sprint. Reinforcement nudges keep knowledge fresh week over week." },
      { icon: "📋", title: "Pre & Post Assessments",      desc: "Measure knowledge before and after every sprint. See the actual delta — not just who clicked through." },
      { icon: "🎯", title: "Role-Based Learning Paths",   desc: "Different paths for new joiners, experienced reps, and team leads. The right content for the right person." },
    ],
    ctaHeadline: "Ready to build a field-ready sales team?",
  },

  tools: {
    badge: "Pillar 2", badgeLabel: "Pillar 2",
    heroTitle: "The Only Tool Your Team Will Actually Use",
    heroBody: "No app download. No login. No resistance. Lucid lives on WhatsApp — the one channel your frontline opens 40 times a day — and turns it into a full sales enablement platform.",
    heroMockup: <MockupWhatsAppChannel />,
    features: [
      {
        label: "AI Content Engine",
        title: "Upload Your SOP. Get a Sprint in 6 Hours.",
        body: "Lucid's AI reads your existing SOPs, PDFs, PPTs, and voice notes — and converts them into structured WhatsApp micro-sprints. No L&D team required. No content agency. Just upload and approve.",
        checks: [
          "Supports PDF, PPT, Word, voice notes, and URLs",
          "AI generates questions, scenarios, and knowledge checks",
          "Your team reviews and approves before deployment",
          "70% reduction in content creation time",
        ],
        visual: <MockupAIContentStudio />,
      },
      {
        label: "Manager Dashboard",
        title: "Your Team Lead Sees It All — Before the Shift Starts",
        body: "Lucid's manager dashboard gives frontline leaders real-time visibility into team readiness. Who completed the sprint. Who is stuck. Who needs a call before they go to their first customer today.",
        checks: [
          "Live readiness scores per rep, per region",
          "Sprint completion rates in real time",
          "Red flags surfaced automatically — no report digging",
          "Compare teams, cohorts, and branches",
        ],
        visual: <MockupTeamDashboard />,
        reverse: true, grayBg: true,
      },
    ],
    stats: [
      { num: "6",  suffix: "hrs",    label: "From SOP upload to live sprint deployment" },
      { num: "0",  suffix: " apps",  label: "Downloaded. Zero. Runs entirely on WhatsApp." },
      { num: "70", suffix: "%",      label: "Reduction in content creation time vs manual" },
    ],
    subTitle: "More Tool Features",
    subSub: "Everything your enablement team needs to deploy, track, and iterate",
    subCards: [
      { icon: "📱", title: "WhatsApp Business API",      desc: "Deployed on verified WhatsApp Business — secure, scalable, and instantly familiar to your team." },
      { icon: "✍️", title: "Sprint Editor",              desc: "Review AI-generated content, edit questions, reorder modules — full control before you hit deploy." },
      { icon: "✅", title: "Execution Proof via Checklist", desc: "Field reps submit photo or checklist proof of task completion. No more 'it\\'s done' with nothing to show." },
      { icon: "🔗", title: "CRM & HRMS Integration",     desc: "Connects with your existing systems. Readiness scores flow into your reporting stack automatically." },
      { icon: "🔒", title: "Enterprise Security",         desc: "Role-based access, data encryption, and compliance-grade infrastructure built for large enterprises." },
      { icon: "📦", title: "Multi-format Ingestion",      desc: "PDF, PPT, Word, voice notes, URLs — whatever format your knowledge lives in, Lucid converts it." },
    ],
    ctaHeadline: "Ready to give your team the tools they'll actually use?",
  },

  execution: {
    badge: "Pillar 3", badgeLabel: "Pillar 3",
    heroTitle: "Close the Gap Between What's Trained and What's Done",
    heroBody: "Knowing and doing are two different things. Lucid's execution layer nudges, verifies, and scores field behavior — closing the gap between what you trained and what actually happens on the ground.",
    heroMockup: <MockupNudges />,
    features: [
      {
        label: "Nudge Engine",
        title: "Automated Follow-Through — No Manager Chasing",
        body: "Lucid's nudge engine sends the right message at the right moment in the rep's day. Before the shift. Mid-visit. Post-meeting. Automated behavioral triggers that drive action without manager intervention.",
        checks: [
          "40+ configurable notification types across the sales day",
          "Pre-shift, mid-day, and post-visit trigger sequences",
          "Escalation alerts when a rep hasn't completed critical tasks",
          "Zero manager time spent on reminders or follow-ups",
        ],
        visual: <MockupNudgeRegistry />,
      },
      {
        label: "KPI-Mapped Performance",
        title: "See What Training Moved the Needle and What Didn't",
        body: "Every sprint in Lucid is mapped to a business KPI. Product launch sprint → conversion rate. Compliance sprint → error rate. Objection handling → close rate. You finally see the ROI of training in numbers your CFO cares about.",
        checks: [
          "Map each sprint to a specific business metric",
          "See KPI movement pre and post sprint deployment",
          "Identify which content drives revenue vs which is noise",
          "Share ROI reports with leadership automatically",
        ],
        visual: <MockupKPIReport />,
        reverse: true, grayBg: true,
      },
    ],
    stats: [
      { num: "40",  suffix: "+",    label: "Configurable nudge types across the sales day" },
      { num: "4.2", suffix: "x",    label: "Average training ROI reported across enterprise clients" },
      { num: "0",   suffix: " hrs", label: "Manager time spent chasing sprint completion" },
    ],
    subTitle: "More Execution Features",
    subSub: "The full stack of tools to close the execution gap at scale",
    subCards: [
      { icon: "📅", title: "Sprint Scheduling & Sequencing", desc: "Deploy the right content at the right moment in the sales cycle — new product, new market, new quarter." },
      { icon: "🔁", title: "Reinforcement Loops",            desc: "Spaced repetition keeps knowledge fresh. Learning doesn't stop at completion — it compounds." },
      { icon: "📸", title: "Proof of Execution",             desc: "Reps submit photo or checklist proof of field tasks. Ground truth — not a manager's assumption." },
      { icon: "🌡️", title: "Ground-Level Voice Insights",   desc: "What your frontline is actually saying — surfaced from WhatsApp responses automatically." },
      { icon: "🎯", title: "Behavior Nudges at Scale",       desc: "Trigger-based reminders that drive execution — no manager overhead, complete automation." },
      { icon: "📈", title: "KPI Attribution & Analytics",    desc: "Link every sprint to business outcomes. Prove ROI with data your CFO can trust." },
    ],
    ctaHeadline: "Ready to close the execution gap at scale?",
  },

  content: {
    badge: "Pillar 4", badgeLabel: "Pillar 4",
    heroTitle: "Turn Your Content Into a Competitive Advantage",
    heroBody: "Your best knowledge is locked in SOPs, videos, and people's heads. Lucid unlocks it — converting it into deployable micro-learning that your entire team can access, learn from, and execute on.",
    heroMockup: <MockupContentLibrary />,
    features: [
      {
        label: "Content Ingestion",
        title: "Upload Once. Deploy Everywhere.",
        body: "Lucid's AI reads your existing knowledge — SOPs, PDFs, PowerPoints, voice notes, even web pages — and converts them into structured micro-sprints. No rewriting. No L&D overhead. Just upload and approve.",
        checks: [
          "Supports every format: PDF, PPT, Word, voice notes, URLs, videos",
          "AI extracts knowledge and structures it as WhatsApp sprints",
          "Your team reviews and approves before deployment",
          "Reduce content creation cycle from weeks to hours",
        ],
        visual: <MockupContentIngestion />,
      },
      {
        label: "Voice Insights",
        title: "What Your Field Is Actually Saying",
        body: "Your frontline tells you what's broken, what's working, and what they need — all on WhatsApp. Lucid listens, extracts patterns from field responses, and recommends the next sprint your team should deploy.",
        checks: [
          "Automatic analysis of WhatsApp responses from 1,000+ reps",
          "Surface field challenges and opportunities in real time",
          "AI recommends the next sprint topic based on field signals",
          "Close the feedback loop between frontline and training",
        ],
        visual: <MockupVoiceInsights />,
        reverse: true, grayBg: true,
      },
    ],
    stats: [
      { num: "6",  suffix: "hrs",  label: "From SOP upload to live deployment" },
      { num: "∞",  suffix: "",     label: "Formats supported — anything your team uses" },
      { num: "1",  suffix: "000+", label: "Concurrent reps learning from the same content" },
    ],
    subTitle: "More Content Features",
    subSub: "The complete toolkit to build, deploy, and optimize your content at scale",
    subCards: [
      { icon: "🎨", title: "Template Library",              desc: "Pre-built sprint templates by vertical — QSR, pharma, FMCG, insurance. Accelerate from day one." },
      { icon: "🔍", title: "Content Versioning",            desc: "Track every iteration of your sprints. Revert, compare, and publish with full audit trails." },
      { icon: "👥", title: "Collaborative Authoring",       desc: "Your L&D, product, and sales teams edit sprints together. One place. Real-time. No email chains." },
      { icon: "📊", title: "Performance Analytics",         desc: "See which sprints drive completion, which drive KPI movement, which need work." },
      { icon: "🤖", title: "AI Content Optimization",       desc: "Lucid recommends question rewrites, scenario improvements, and content gaps — all AI-powered." },
      { icon: "📦", title: "Content Marketplace",           desc: "Access templates, sprints, and scenarios built by other teams and industry experts." },
    ],
    ctaHeadline: "Ready to turn your knowledge into competitive advantage?",
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   FEATURE SECTION (alternating layout)
───────────────────────────────────────────────────────────────────────── */

function FeatureSection({ feature, pillar }: { feature: FeatureAlt; pillar: PillarKey }) {
  const pillarColors: Record<PillarKey, string> = {
    team: "blue",
    tools: "amber",
    execution: "emerald",
    content: "rose",
  };
  const color = pillarColors[pillar];
  const bgClass = feature.grayBg ? "bg-slate-50" : "bg-white";

  return (
    <section className={`${bgClass} py-16 px-8`}>
      <div className="lucid-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${feature.reverse ? "lg:grid-cols-2 lg:[&>:first-child]:order-2" : ""}`}>
          {/* Left: Text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 block mb-3">{feature.label}</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">{feature.title}</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">{feature.body}</p>
            <ul className="space-y-3">
              {feature.checks.map((check, i) => <CheckItem key={i} text={check} />)}
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center">
            {feature.visual}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────────────── */

function PillarHero({ pillar }: { pillar: PillarKey }) {
  const p = PILLARS[pillar];
  return (
    <section className="bg-white py-16 px-8">
      <div className="lucid-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <HeroBadge pillar={p.badge} label={p.badgeLabel} />
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{p.heroTitle}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{p.heroBody}</p>
          </div>

          {/* Right: Mockup */}
          <div className="flex justify-center">
            {p.heroMockup}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   TAB SWITCHER
───────────────────────────────────────────────────────────────────────── */

function TabSwitcher({ active, onSwitch }: { active: PillarKey; onSwitch: (k: PillarKey) => void }) {
  const tabColors: Record<PillarKey, string> = {
    team: "data-[active]:bg-blue-100 data-[active]:text-blue-700",
    tools: "data-[active]:bg-amber-100 data-[active]:text-amber-700",
    execution: "data-[active]:bg-emerald-100 data-[active]:text-emerald-700",
    content: "data-[active]:bg-rose-100 data-[active]:text-rose-700",
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSwitch(tab.key)}
          data-active={tab.key === active ? "true" : "false"}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 border-2 ${
            tab.key === active
              ? `${tabColors[tab.key]} border-current`
              : "border-slate-200 text-slate-600 hover:border-slate-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────────────────── */

export default function Features() {
  const [active, setActive] = useState<PillarKey>("team");
  const p = PILLARS[active];

  return (
    <div className="bg-white min-h-screen">
      {/* Tab Switcher */}
      <div className="bg-slate-50 py-12 px-8">
        <div className="lucid-container">
          <TabSwitcher active={active} onSwitch={setActive} />
        </div>
      </div>

      {/* Animated Pillar Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero */}
          <PillarHero pillar={active} />

          {/* Features */}
          {p.features.map((feat, i) => (
            <FeatureSection key={i} feature={feat} pillar={active} />
          ))}

          {/* Stats */}
          <StatBanner stats={p.stats} />

          {/* Sub-features Grid */}
          <SubFeatures title={p.subTitle} sub={p.subSub} cards={p.subCards} />

          {/* CTA Strip */}
          <CTAStrip headline={p.ctaHeadline} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
