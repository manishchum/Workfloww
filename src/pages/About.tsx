import * as React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="lh-page min-h-screen pt-24">
      <Helmet>
        <title>About Us – Workfloww.AI | The Team Behind Lucid</title>
        <meta name="description" content="Meet the team behind Lucid. Workfloww.AI works at the intersection of AI and organisation performance — consulting on AI deployment and building products that prove it's possible." />
        <link rel="canonical" href="https://www.workfloww.ai/about" />
      </Helmet>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="bg-white"
        style={{ padding: "2.5rem 1.25rem" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lh-display font-semibold tracking-tight mb-6 leading-relaxed lh-text-ink"
            >
              At <span className="lh-accent-text">Workfloww.ai</span>, We Work At The Intersection Of <span className="lh-accent-text">AI And Organization Performance</span> — Consulting Organizations On How To Deploy <span className="lh-accent-text">AI Meaningfully</span> And Building Products That Prove It's Possible.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold lh-text-muted"
            >
              We are not just building with AI. We are fixing the priorities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section
        className="lh-bg-paper"
        style={{ padding: "2.5rem 1.25rem" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {[
              { name: "Manish Chum", role: "Founder", image: "/images/manish.png", linkedin: "https://www.linkedin.com/in/manishchum/", bio: "Two decades across Airtel, EY, Maersk, Tech Mahindra, and Whirlpool. Across every organisation, one pattern kept repeating — the gap between what was planned and what actually happened on the ground. That gap became the obsession. Workfloww.ai is built around closing it — through AI consulting, and products that make execution real. Lucid is the first." },
              { name: "Shilpa Chitkara", role: "Co-Founder & CTO", image: "/images/shilpa.png", linkedin: "https://www.linkedin.com/in/shilpachitkara/", bio: "20+ years across Infosys, L&T Infotech, Genesis BCW, and Workfloww.ai. Shilpa architects the technology layer that makes Workfloww.ai's products work in the real world — digital transformation, automation, and Agentic AI are her domain. At Lucid, she builds the systems that turn organisational knowledge into frontline execution, at scale." },
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl lh-bg-paper mb-6 border lh-border-faint group-hover:border-sky-300 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl sm:text-2xl lh-display font-semibold lh-text-ink">{member.name}</h4>
                  <button
                    onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      border: '1px solid #e2e8f0',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    aria-label={`Visit ${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 lh-accent-text" />
                  </button>
                </div>
                <p className="text-base sm:text-lg lh-text-muted font-medium">{member.role}</p>
                {member.bio && (
                  <p className="text-sm sm:text-base lh-text-muted leading-relaxed mt-4">
                    {member.bio}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          section[style*="padding: 2.5rem 1.25rem"] {
            padding: 3rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}