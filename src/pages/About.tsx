import * as React from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-6 leading-relaxed"
        >
          At <span className="text-blue-600">Workfloww.ai</span>, We Work At The Intersection Of <span className="text-blue-600">AI And Organization Performance</span> — Consulting Organizations On How To Deploy <span className="text-blue-600">AI Meaningfully</span> And Building Products That Prove It's Possible.

        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-semibold text-muted-foreground"
        >
          We are not just building with AI . We are fixing the priorities.
        </motion.p>
      </div>

      {/* <div className="max-w-5xl mx-auto text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">The dream team</h3>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Channelling insights from our teaching and retail experience, we are a bunch of Ed-tech enthusiasts building Lucid - a B2B SaaS company changing how business and revenue facing roles work.
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-6 shadow-none group-hover:shadow-none">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-2xl font-bold">{member.name}</h4>
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
                <Linkedin className="w-5 h-5" style={{ color: '#2563eb' }} />
              </button>
            </div>
            <p className="text-lg text-muted-foreground">{member.role}</p>
            {member.bio && (
              <p className="text-base text-muted-foreground leading-relaxed mt-4 whitespace-pre-line">
                {member.bio}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}