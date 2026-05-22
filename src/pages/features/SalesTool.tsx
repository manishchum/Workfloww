import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle, FileText, BarChart3, Shield, Zap, TrendingUp, Globe, Smartphone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SalesTool = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen font-sans text-navy">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF3D0] text-[#92641A] font-semibold text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#92641A]"></span>
                PILLAR 2
              </div> */}
              <h1 className="text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-6">
                The Only Tool Your Team Will Actually Use
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                No app download. No login. No resistance. Lucid lives on WhatsApp — the one channel your frontline opens 40 times a day — and turns it into a full sales enablement platform.
              </p>
              
                <button onClick={() => navigate('/contact')} className="bg-[#6357d4] hover:bg-[#5146c7] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Book Demo <ArrowRight className="w-5 h-5" />
                </button>
            </motion.div>

            {/* Right Visual: WhatsApp Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-sm"
            >
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-gray-800 border-4 relative">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20"></div>
                {/* Screen */}
                <div className="bg-[#ece5dd] rounded-[2.5rem] overflow-hidden relative h-[600px] flex flex-col">
                  {/* WhatsApp Header */}
                  <div className="bg-[#1a7553] px-4 py-3 flex items-center gap-3 z-10 text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[15px] flex items-center gap-1">
                        Lucid
                        <svg className="w-4 h-4 text-[#00E676]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
                      </div>
                      <div className="text-[11px] opacity-90 leading-tight">Business Account</div>
                    </div>
                  </div>
                  
                  {/* Chat Content */}
                  <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
                    {/* Date pill */}
                    <div className="flex justify-center">
                      <span className="bg-[#e1f3fb] text-gray-600 text-[11px] px-3 py-1 rounded-lg shadow-sm">Today</span>
                    </div>

                    {/* Bot Message */}
                    <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[85%] shadow-sm relative self-start text-[14px] text-gray-800">
                      🚀 <b>Sprint Alert!</b> New menu launch sprint is live. Complete before your shift today.<br/><br/>
                      Tap READY to start
                    </div>

                    {/* User Reply */}
                    <div className="bg-[#d9fdd3] rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm relative self-end text-[14px] text-gray-800">
                      READY
                      <span className="text-[10px] text-gray-500 float-right mt-2 ml-2">08:45 ✓✓</span>
                    </div>

                    {/* Bot Message 2 */}
                    <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[85%] shadow-sm relative self-start text-[14px] text-gray-800">
                      <b>Q1:</b> The new Mango Fusion drink — which base does it use?<br/><br/>
                      1️⃣ Coconut milk<br/>
                      2️⃣ Oat milk<br/>
                      3️⃣ Regular milk<br/>
                      4️⃣ Almond milk
                    </div>
                    
                    {/* User Action */}
                    <div className="self-end mr-2">
                      <div className="w-8 h-8 rounded-full bg-[#6357d4] text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:scale-105 transition-transform">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. AI CONTENT ENGINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-[#6357d4] font-semibold tracking-wide uppercase text-sm mb-3">AI Content Engine</h3>
              <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                Upload Your SOP. Get a Sprint in 6 Hours.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Lucid's AI reads your existing SOPs, PDFs, PPTs, and voice notes — and converts them into structured WhatsApp micro-sprints. No L&D team required. No content agency. Just upload and approve.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Supports PDF, PPT, Word, voice notes, and URLs",
                  "AI generates questions, scenarios, and knowledge checks",
                  "Your team reviews and approves before deployment",
                  "70% reduction in content creation time"
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

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* Studio Widget */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#0f1117] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">AI Content Studio</span>
                  <div className="flex items-center gap-2 text-xs text-[#6357d4] bg-[#6357d4]/10 px-2 py-1 rounded-full border border-[#6357d4]/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6357d4] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6357d4]"></span>
                    </span>
                    Processing...
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Source Document */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <FileText className="w-4 h-4" /> Source Document
                    </h4>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded text-red-600">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-navy">Q3_Product_Launch_SOP.pdf</div>
                          <div className="text-xs text-gray-500">14 pages · uploaded 2 mins ago</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                        PROCESSING
                      </span>
                    </div>
                  </div>

                  {/* Generated Sprints */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <Zap className="w-4 h-4" /> AI Generated Sprints
                    </h4>
                    <div className="space-y-3">
                      {[
                        { title: "Sprint 1: Product Overview", meta: "5 Q&A · 8 mins", status: "READY", color: "green" },
                        { title: "Sprint 2: Customer Pitch", meta: "6 scenarios · 10 mins", status: "READY", color: "green" },
                        { title: "Sprint 3: Objection Handling", meta: "Generating...", status: "AI WORKING", color: "amber" }
                      ].map((sprint, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                          <div>
                            <div className="font-medium text-sm text-navy">{sprint.title}</div>
                            <div className="text-xs text-gray-500">{sprint.meta}</div>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                            sprint.color === 'green' ? 'bg-green-100 text-green-700' : 
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {sprint.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-[#6357d4] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#5146c7] transition-colors flex items-center justify-center gap-2">
                    Deploy to Team <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MANAGER DASHBOARD */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Dashboard Widget */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#0f1117] px-6 py-4 flex items-center justify-between text-white">
                  <span className="font-semibold text-sm">Team Readiness Dashboard</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3"/> Today · 8:45 AM</span>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-end mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Mumbai West</h4>
                      <div className="text-2xl font-bold text-navy">12 reps</div>
                      <div className="text-sm text-gray-500 mt-1">9 ready · 3 need attention</div>
                    </div>
                    {/* Score Circle */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6357d4" strokeWidth="3" strokeDasharray="78, 100" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-lg font-bold text-navy leading-none">78</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4 mb-6">
                    {[
                      { name: "Ravi K", score: 95, color: "bg-[#6357d4]" },
                      { name: "Sneha M", score: 88, color: "bg-[#6357d4]" },
                      { name: "Arjun P", score: 42, color: "bg-[#EF9F27]" },
                      { name: "Priya R", score: 28, color: "bg-[#D85A30]" },
                    ].map((rep, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-navy">{rep.name}</span>
                          <span className="text-gray-500">{rep.score}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full ${rep.color} rounded-full`} style={{ width: `${rep.score}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">Sprints Completed</div>
                      <div className="font-bold text-navy flex items-center gap-2">
                        9/12 <span className="text-green-500 text-xs flex items-center">↑ vs yesterday</span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="text-xs text-red-600 mb-1">Need Attention</div>
                      <div className="font-bold text-red-700 flex items-center gap-2">
                        3 Reps <span className="text-red-500 text-xs flex items-center">▲ Before shift</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0f1117] text-white p-3 rounded-lg text-xs flex gap-2 items-start">
                    <span className="text-amber-400 mt-0.5">⚠️</span>
                    <p>Priya R and Arjun P haven't completed today's sprint. Shift starts in 40 mins.</p>
                  </div>
                </div>
               </div>
            </motion.div>

            {/* Right Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#6357d4] font-semibold tracking-wide uppercase text-sm mb-3">Manager Dashboard</h3>
              <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                Your Team Lead Sees It All — Before the Shift Starts
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Lucid's manager dashboard gives frontline leaders real-time visibility into team readiness. Who completed the sprint. Who is stuck. Who needs a call before they go to their first customer today.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Live readiness scores per rep, per region",
                  "Sprint completion rates in real time",
                  "Red flags surfaced automatically — no report digging",
                  "Compare teams, cohorts, and branches"
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

      {/* 4. DARK STAT STRIP */}
      <section className="bg-[#0f1117] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                6<span className="text-[#6357d4]">hrs</span>
              </div>
              <p className="text-gray-400 font-medium">From SOP upload to live sprint deployment</p>
            </div>
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                0 <span className="text-[#6357d4]">apps</span>
              </div>
              <p className="text-gray-400 font-medium">Downloaded. Zero. Runs entirely on WhatsApp.</p>
            </div>
            <div className="p-4">
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">
                70<span className="text-[#6357d4]">%</span>
              </div>
              <p className="text-gray-400 font-medium">Reduction in content creation time vs manual</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORE TOOL FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* 6. PURPLE CTA BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="bg-[#4F46E5] rounded-[20px] p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Ready to give your team the tools they'll actually use?
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
