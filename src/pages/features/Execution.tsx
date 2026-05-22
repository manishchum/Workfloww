import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, ClipboardCheck, BookOpen, Trophy, CheckCircle2, TrendingUp, AlertCircle, Clock, Smartphone, BarChart3, Users, Shield, CalendarClock, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Execution = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] text-sm font-bold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1D9E75]"></span>
                PILLAR 3
              </div> */}
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Close the Gap Between What's Trained and What's Done
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Knowing and doing are two different things. Lucid's execution layer nudges, verifies, and scores field behavior — closing the gap between what you deployed and what actually happens on the ground.
              </p>
              
              <button onClick={() => navigate('/contact')} className="bg-[#6357d4] hover:bg-[#5146c7] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Book Demo <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Right Visual: Execution Nudge Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[340px]"
            >
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>
              <div className="relative bg-[#f7f8fa] border-[8px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden h-[700px] flex flex-col">
                {/* Phone Header */}
                <div className="bg-[#1a5e40] px-6 pt-12 pb-4 text-white relative shadow-md z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">Execution Nudge</h3>
                      <p className="text-emerald-100 text-sm opacity-90">Pre-shift · 9:00 AM</p>
                    </div>
                  </div>
                </div>

                {/* Phone Content / Nudge Rows */}
                <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                  
                  {/* Row 1 */}
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5">🎯</div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-900">Today's Target Reminder</h4>
                          <span className="text-xs text-slate-400">9:00</span>
                        </div>
                        <p className="text-sm text-slate-600">4 demos · 2 follow-ups · 1 referral ask</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Row 2 */}
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5">📋</div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-900">Pre-Visit Checklist Due</h4>
                          <span className="text-xs text-slate-400">9:00</span>
                        </div>
                        <p className="text-sm text-slate-600">TATA AIG visit at 10:30 AM — 3 items pending</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Row 3 */}
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5">📚</div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-900">Sprint Reminder</h4>
                          <span className="text-xs text-slate-400">9:00</span>
                        </div>
                        <p className="text-sm text-slate-600">Compliance update — 6 mins — complete before 11 AM</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Row 4 */}
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5">🏆</div>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-900">Leaderboard Update</h4>
                          <span className="text-xs text-emerald-600 font-medium">9:01</span>
                        </div>
                        <p className="text-sm text-emerald-700 font-medium">You're #3 in Mumbai West this week!</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. NUDGE ENGINE */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-[#6357d4] font-semibold tracking-wide uppercase text-sm mb-3">Nudge Engine</h3>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Automated Follow-Through — No Manager Chasing
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Lucid's nudge engine sends the right message at the right moment in the rep's day. Before the shift. Mid-visit. Post-meeting. Automated behavioral triggers that drive action without manager intervention.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "40+ configurable notification types across the sales day",
                  "Pre-shift, mid-day, and post-visit trigger sequences",
                  "Escalation alerts when a rep hasn't completed critical tasks",
                  "Zero manager time spent on reminders or follow-ups"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1D9E75] shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* Notification Registry Widget */}
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col">
                <div className="bg-[#0f1117] px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-white text-lg">Notification Registry</h3>
                  </div>
                  <span className="text-slate-400 text-sm font-medium">40 active nudges</span>
                </div>
                
                <div className="p-6 space-y-4 bg-slate-50 flex-1">
                  {/* Registry Rows */}
                  {[
                    { icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100", title: "Pre-Shift Sprint Nudge", desc: "Sent at 8:30 AM · before first visit" },
                    { icon: Target, color: "text-purple-600", bg: "bg-purple-100", title: "Visit Check-in Reminder", desc: "Triggered when rep enters geo-zone" },
                    { icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100", title: "Mid-Day Performance Check", desc: "Sent at 1:00 PM · target vs actuals" },
                    { icon: AlertCircle, color: "text-rose-600", bg: "bg-rose-100", title: "Incomplete Sprint Escalation", desc: "Alerts manager if sprint missed by EOD" }
                  ].map((row, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg ${row.bg} flex items-center justify-center shrink-0`}>
                          <row.icon className={`w-5 h-5 ${row.color}`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{row.title}</h4>
                          <p className="text-sm text-slate-500">{row.desc}</p>
                        </div>
                      </div>
                      <div className="bg-[#DCFCE7] text-[#166534] text-xs font-bold px-3 py-1 rounded-full ml-4 shrink-0">
                        ON
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#EEEDFE] px-6 py-4 flex items-center justify-center gap-2 text-[#6357d4] font-semibold text-sm">
                  <Zap className="w-4 h-4" fill="currentColor" />
                  3,240 nudges sent this week across 54 reps
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. KPI-MAPPED PERFORMANCE */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              {/* KPI Impact Report Widget */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
                <div className="bg-[#0f1117] px-6 py-5 flex items-center justify-between">
                  <h3 className="font-bold text-white text-lg">KPI Impact Report</h3>
                  <span className="text-slate-400 text-sm font-medium">Q3 · Post Sprint Analysis</span>
                </div>
                
                <div className="p-6">
                  {/* Sprint Impact Box */}
                  <div className="border border-slate-200 rounded-2xl p-5 mb-6">
                    <span className="inline-block bg-[#EEEDFE] text-[#6357d4] text-xs font-bold px-2 py-1 rounded mb-3 tracking-wide">SPRINT IMPACT</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Objection Handling Sprint → Close Rate</h4>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-1 bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                        <span className="text-xs font-bold text-slate-400 block mb-1">BEFORE</span>
                        <span className="text-xl font-bold text-rose-500">18%</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-300 shrink-0" />
                      <div className="flex-1 bg-emerald-50 rounded-xl p-3 border border-emerald-100 text-center">
                        <span className="text-xs font-bold text-emerald-600 block mb-1">AFTER</span>
                        <span className="text-xl font-bold text-emerald-600">31%</span>
                      </div>
                      <div className="bg-[#1D9E75] text-white font-bold text-lg px-4 py-3 rounded-xl shadow-sm">
                        +72%
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="text-2xl font-extrabold text-slate-900 mb-1">4.2x</div>
                        <div className="text-sm font-bold text-slate-700">Training ROI</div>
                        <div className="text-xs text-[#1D9E75] font-medium mt-1">vs 1.1x benchmark</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="text-2xl font-extrabold text-slate-900 mb-1">₹2.4Cr</div>
                        <div className="text-sm font-bold text-slate-700">Incremental revenue</div>
                        <div className="text-xs text-[#1D9E75] font-medium mt-1">Attributed to sprints</div>
                      </div>
                    </div>
                  </div>

                  {/* Top Performing Sprints Table */}
                  <div>
                    <h5 className="font-bold text-slate-900 mb-3 text-sm">Top Performing Sprints</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-sm font-medium text-slate-700">Product Launch Pitch</span>
                        <span className="text-sm font-bold text-[#1D9E75]">+41% conv</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="text-sm font-medium text-slate-700">Upsell Techniques</span>
                        <span className="text-sm font-bold text-[#1D9E75]">+28% ATV</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium text-slate-700">Compliance Refresh</span>
                        <span className="text-sm font-bold text-rose-500">-94% errors</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-[#6357d4] font-semibold tracking-wide uppercase text-sm mb-3">KPI-Mapped Performance</h3>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                See What Deployment Moved the Needle and What Didn't
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Every sprint in Lucid is mapped to a business KPI. Product launch sprint → conversion rate. Compliance sprint → error rate. Objection handling → close rate. You finally see the ROI of deployment in numbers your CFO cares about.
              </p>
              <ul className="space-y-4">
                {[
                  "Map each sprint to a specific business metric",
                  "See KPI movement pre and post sprint deployment",
                  "Identify which content drives revenue vs which is noise",
                  "Share ROI reports with leadership automatically"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6357d4] shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. DARK STAT STRIP */}
      <section className="bg-[#0f1117] py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-heading font-extrabold text-white mb-2">
                40<span className="text-[#AFA9EC]">+</span>
              </div>
              <p className="text-slate-400 font-medium">Configurable nudge types across the sales day</p>
            </div>
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-heading font-extrabold text-white mb-2">
                4.2<span className="text-[#AFA9EC]">x</span>
              </div>
              <p className="text-slate-400 font-medium">Average execution ROI reported across enterprise clients</p>
            </div>
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-heading font-extrabold text-white mb-2">
                0 <span className="text-[#AFA9EC]">hrs</span>
              </div>
              <p className="text-slate-400 font-medium">Manager time spent chasing sprint completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORE EXECUTION FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">More Execution Features</h2>
            <p className="text-xl text-slate-600">The full stack of tools to close the execution gap at scale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CalendarClock,
                title: "Sprint Scheduling & Sequencing",
                desc: "Deploy the right content at the right moment in the sales cycle — new product, new market, new quarter."
              },
              {
                icon: TrendingUp,
                title: "Reinforcement Loops",
                desc: "Spaced repetition keeps knowledge fresh. Learning doesn't stop at completion — it compounds."
              },
              {
                icon: ClipboardCheck,
                title: "Execution Proof via Checklist",
                desc: "Field reps submit photo or checklist proof of task completion. No more \"it's done\" with nothing to show for it."
              },
              {
                icon: MessageCircle,
                title: "Ground-Level Voice Insights",
                desc: "What your frontline is actually saying — surfaced from WhatsApp responses automatically."
              },
              {
                icon: Trophy,
                title: "Leaderboards & Contests",
                desc: "Drive healthy competition. Sprint completion and KPI performance ranked in real time."
              },
              {
                icon: BarChart3,
                title: "Manager Reports",
                desc: "Automated daily and weekly reports sent to team leads. No dashboard login required."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#EEEDFE] flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#6357d4]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PURPLE CTA BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="bg-[#4F46E5] rounded-[20px] p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Ready to close the gap between deployment and execution?
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

export default Execution;
