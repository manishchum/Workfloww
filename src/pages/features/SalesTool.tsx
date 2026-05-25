import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle, FileText, BarChart3, Shield, Zap, TrendingUp, Globe, Smartphone, Clock, Swords, Target, Mic, Search, BookOpen, Microscope, Trophy, DollarSign, PhoneCall, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SalesTool = () => {
  const navigate = useNavigate();

  const salesTools = [
    {
      icon: Swords,
      title: "Battle Cards",
      desc: "Who you're up against. How to win. One card, built from live competitive intel your reps can pull mid-visit."
    },
    {
      icon: Shield,
      title: "Objection Handlers",
      desc: "The 10 things prospects always say — answered before they ask. Updated weekly from what your field is actually hearing."
    },
    {
      icon: Mic,
      title: "Talk Tracks",
      desc: "What to say, in what order, for which situation. Branch visit, cold call, renewal conversation — a track for every context."
    },
    {
      icon: Search,
      title: "Discovery Cheat Sheets",
      desc: "The right questions for the right buyer. Reps stop guessing what to ask and start uncovering real needs, fast."
    },
    {
      icon: BookOpen,
      title: "Pitch Narratives",
      desc: "The story arc that sells — not just the deck. Structured narratives that move a buyer from problem to solution to decision."
    },
    {
      icon: Microscope,
      title: "Competitor Snapshots",
      desc: "Their weakness. Your angle. Delivered before the meeting so your rep walks in knowing exactly how to position against the competition."
    },
    {
      icon: Trophy,
      title: "Proof Points",
      desc: "Customer wins by industry, by use case, ready to drop into any conversation. The right proof for the right prospect, instantly."
    },
    {
      icon: DollarSign,
      title: "Pricing Guardrails",
      desc: "What to offer, when, and how far to flex. Reps negotiate with confidence — within the boundaries leadership has approved."
    },
    {
      icon: PhoneCall,
      title: "Escalation Scripts",
      desc: "Exactly when to pull in the manager — and what to say first. Reps stop improvising at the worst possible moment."
    },
    {
      icon: Mail,
      title: "Follow-Up Templates",
      desc: "Post-meeting, post-demo, post-ghosting. Never a blank page again. The right message at the right moment, every time."
    },
  ];

  const industries = [
    { emoji: "🏦", label: "Insurance · Branch Visit", sub: "Battle card, talk track, pricing guardrails", active: true },
    { emoji: "💊", label: "Pharma · Doctor Call", sub: "Discovery sheet, pitch narrative, proof points", active: false },
    { emoji: "🍔", label: "QSR · Area Manager", sub: "Execution checklist, escalation script", active: false },
    { emoji: "🏪", label: "FMCG · Distributor Visit", sub: "Talk track, competitor snapshot, follow-up", active: false },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-navy">

      {/* 1. HERO SECTION */}
      <section style={{ padding: "13.5rem 1.25rem 11rem" }} className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-6">
                Every Rep. Every Conversation. Armed and Ready.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Lucid instantly creates, updates, and delivers 10 battle-tested sales tools — built for your industry, your channel, and what's actually happening in the field right now. Not generic. Not static. Not a PDF nobody reads.
              </p>
              <button onClick={() => navigate('/contact')} className="bg-[#6357d4] hover:bg-[#5146c7] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Book Demo <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Right Visual: Sales Arsenal Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
                {/* Topbar */}
                <div className="bg-[#1E3A5F] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#6357d4]/40 flex items-center justify-center text-base">⚔️</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Sales Arsenal · Insurance · Mumbai</div>
                    <div className="text-white/60 text-xs">10 tools · Updated today from field insights</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-green-500 text-white rounded-full">LIVE</span>
                </div>
                {/* Tool Grid */}
                <div className="p-4 bg-gray-50">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {[
                      { icon: "⚔️", name: "Battle Card", meta: "vs HDFC Life · 2hrs ago", badge: "READY", badgeColor: "bg-green-100 text-green-700" },
                      { icon: "🛡️", name: "Objection Handler", meta: "Top 10 · This week's field data", badge: "READY", badgeColor: "bg-green-100 text-green-700" },
                      { icon: "🗣️", name: "Talk Track", meta: "Premium Plan · Branch visit", badge: "NEW", badgeColor: "bg-[#6357d4] text-white" },
                      { icon: "💰", name: "Pricing Guardrails", meta: "Q3 · Approved limits", badge: "READY", badgeColor: "bg-green-100 text-green-700" },
                    ].map((tool, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                        <span className="text-base">{tool.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-navy">{tool.name}</div>
                          <div className="text-[10px] text-gray-500 leading-tight">{tool.meta}</div>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full w-fit ${tool.badgeColor}`}>{tool.badge}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#6357d4] rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="text-white text-sm">⚡</span>
                    <span className="text-white text-xs font-semibold">6 more tools available · All updated from this week's field intelligence</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE ARSENAL — SALES TOOLS GRID */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#6357d4] mb-3">The Arsenal</div>
            <h2 className="text-4xl font-bold text-navy mb-4 leading-tight">Sales Tools. Built in Minutes. Updated from the Field.</h2>
            <p className="text-lg text-gray-600">Each tool is created for your industry, your channel, and your competitive context. Not off-the-shelf. Not generic. Built from what's actually happening on your ground.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
            {salesTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-start p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#6357d4]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] flex items-center justify-center shrink-0">
                  <tool.icon className="w-5 h-5 text-[#6357d4]" />
                </div>
                <div>
                  <div className="font-bold text-navy mb-1">{tool.title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{tool.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="border-t border-slate-200">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="text-center mb-16">
            <div className="text-[11px] font-bold tracking-widest uppercase text-[#6357d4] mb-3">How It Works</div>
            <h2 className="text-4xl font-bold text-navy">From Your Intel to Their Hands — in Minutes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📥",
                step: "STEP 1",
                title: "Feed Your Intel",
                desc: "Your product data, competitive context, pricing rules, and customer wins go in. Lucid knows your world."
              },
              {
                icon: "⚡",
                step: "STEP 2",
                title: "Lucid Builds the Tool",
                desc: "AI structures the right tool for the right context — formatted for field use, not a desk. Ready in minutes, not weeks."
              },
              {
                icon: "🔄",
                step: "STEP 3",
                title: "Field Uses. Intel Flows Back.",
                desc: "Reps use the tools. What works, what gets pushed back on, what converts — feeds back in. Tools get sharper every week."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-2xl mx-auto mb-5">{step.icon}</div>
                <div className="text-xs font-bold text-[#6357d4] tracking-widest uppercase mb-2">{step.step}</div>
                <div className="text-lg font-bold text-navy mb-3">{step.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM-UP INTELLIGENCE */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#6357d4] font-semibold tracking-wide uppercase text-sm mb-3">Bottom-Up Intelligence</h3>
              <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                Your Tools Get Sharper Every Week. Automatically.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Most sales tools are built once and forgotten. Lucid's arsenal is alive. Every time a rep uses a tool — what they said, what the prospect pushed back on, what closed the deal — feeds back in. Your battle cards, objection handlers, and talk tracks improve continuously from real field data.
              </p>
              <ul className="space-y-4">
                {[
                  "Field usage patterns tracked per tool, per region, per rep",
                  "New objections surfaced from the field update the handler automatically",
                  "Winning talk tracks from top performers pushed to the full team",
                  "Underperforming tools flagged for revision before they do damage",
                  "Leadership sees which tools are being used and which are ignored"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#6357d4] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Field Intelligence Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-[#0f1117] px-6 py-4 flex items-center justify-between text-white">
                  <span className="font-semibold text-sm">🔄 Field Intelligence Loop</span>
                  <span className="text-gray-400 text-xs">This week · Auto-updating</span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  {/* Tool Usage */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs font-bold text-navy mb-4 uppercase tracking-wider">Tool Usage This Week</div>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "⚔️ Battle Card — vs HDFC Life", pct: 94, color: "bg-emerald-500", textColor: "text-emerald-600" },
                        { label: "🛡️ Objection Handler — Pricing", pct: 88, color: "bg-emerald-500", textColor: "text-emerald-600" },
                        { label: "🗣️ Talk Track — Branch Visit", pct: 61, color: "bg-amber-400", textColor: "text-amber-600" },
                        { label: "✉️ Follow-Up — Post Ghost", pct: 32, color: "bg-red-400", textColor: "text-red-600" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="text-xs text-gray-500 flex-1">{row.label}</div>
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.pct}%` }}></div>
                          </div>
                          <div className={`text-xs font-bold w-8 text-right ${row.textColor}`}>{row.pct}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Auto-updated */}
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <div className="text-xs font-bold text-emerald-800 mb-1">✨ AUTO-UPDATED THIS WEEK</div>
                    <div className="text-xs text-emerald-700">Battle Card updated — 3 new competitor weaknesses added from field reports</div>
                  </div>
                  {/* Flagged */}
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <div className="text-xs font-bold text-amber-800 mb-1">⚠️ FLAGGED FOR REVISION</div>
                    <div className="text-xs text-amber-700">Follow-Up Template — low usage · reps reporting "doesn't feel natural"</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY & CHANNEL SPECIFIC */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="border-t border-slate-200">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Industry Switcher Widget */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-[#0f1117] px-6 py-4 flex items-center justify-between text-white">
                  <span className="font-semibold text-sm">🏭 Industry Arsenal</span>
                  <span className="text-gray-400 text-xs">Select your context</span>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {industries.map((ind, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                        ind.active
                          ? 'bg-[#6357d4] border-[#6357d4]'
                          : 'bg-white border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <span className="text-xl">{ind.emoji}</span>
                      <div className="flex-1">
                        <div className={`text-sm font-bold ${ind.active ? 'text-white' : 'text-navy'}`}>{ind.label}</div>
                        <div className={`text-xs ${ind.active ? 'text-white/70' : 'text-gray-400'}`}>{ind.sub}</div>
                      </div>
                      {ind.active
                        ? <span className="text-[10px] font-bold px-2 py-1 bg-white/20 text-white rounded-full">ACTIVE</span>
                        : <span className="text-xs font-semibold text-[#6357d4]">Switch →</span>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#6357d4] font-semibold tracking-wide uppercase text-sm mb-3">Industry & Channel Specific</h3>
              <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                An Insurance Agent's Tools Are Not an FMCG Rep's Tools.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Generic sales tools are why generic results happen. Every tool Lucid creates is built for the specific industry, the specific channel, and the specific customer your rep is walking into. An insurance branch visit needs a different talk track than a pharma MR call. Lucid knows the difference.
              </p>
              <ul className="space-y-4">
                {[
                  "Industry templates for insurance, pharma, FMCG, QSR, retail",
                  "Channel-specific formats — branch visit, distributor call, cold outreach",
                  "Region-aware tools updated with local competitive intel",
                  "New industry or channel added in hours — not a new project"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#6357d4] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. DARK STAT STRIP */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#0f1117" }} className="font-sans border-y border-gray-800">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                10<span className="text-[#6357d4]"> tools</span>
              </div>
              <p className="text-gray-400 font-medium">Built and deployed per sales team — in minutes</p>
            </div>
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                100<span className="text-[#6357d4]">%</span>
              </div>
              <p className="text-gray-400 font-medium">Field-specific — not generic, not off-the-shelf</p>
            </div>
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                Live<span className="text-[#6357d4]"> updates</span>
              </div>
              <p className="text-gray-400 font-medium">Tools refresh automatically from bottom-up field intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MORE TOOL FEATURES */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">More Tool Features</h2>
            <p className="text-xl text-gray-600">Everything your enablement team needs to deploy, track, and iterate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Role-based access, data encryption, and compliance-grade infrastructure built for large enterprises."
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics Dashboard",
                desc: "Live visibility into sprint completion, assessment scores, and readiness trends across your entire field force.",
                highlight: true
              },
              {
                icon: Zap,
                title: "Automated Alerts & Escalations",
                desc: "System flags at-risk reps and unresolved gaps automatically — no manual report digging required."
              },
              {
                icon: TrendingUp,
                title: "Sales Career Maps",
                desc: "Visual career progression paths tied to sprint completion and skill milestones. Reps see exactly what it takes to grow."
              },
              {
                icon: CheckCircle2,
                title: "Sales Performance Management",
                desc: "Individual scorecards, cohort benchmarks, and trend analysis — all in one dashboard. Know who's growing."
              },
              {
                icon: Globe,
                title: "Multilingual Interface",
                desc: "Platform and content delivered in the language your team thinks in — Hindi, Tamil, Bengali, Marathi, and more."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border ${feature.highlight ? 'border-[#6357d4] shadow-xl relative' : 'border-gray-200 bg-gray-50'}`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6357d4] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Highlighted
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.highlight ? 'bg-[#6357d4] text-white' : 'bg-white text-[#6357d4] shadow-sm'}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PURPLE CTA BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="bg-[#4F46E5] rounded-[20px] p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Ready to arm your sales team with an arsenal of sales tools to win the market battles?
            </h2>
            <button onClick={() => navigate('/contact')} className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2 backdrop-blur-sm">
              Book Demo Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesTool;