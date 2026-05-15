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
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Your <span className="text-primary">Partner</span> in Upskilling. <br />
          World's only SaaS built exclusively for <span className="text-primary">Frontline teams!</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-semibold text-muted-foreground"
        >
          Connect. Learn. Operate. Grow
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">The dream team</h3>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Channelling insights from our teaching and retail experience, we are a bunch of Ed-tech enthusiasts building Lucid - a B2B SaaS company changing how business and revenue facing roles work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {[
          { name: "Manish", role: "Founder", image: "/images/manish.png", linkedin: "https://www.linkedin.com/in/manishchum/", bio: "Lucid was built to solve the last 100 feet of execution — where strategies often break down between leadership and frontline teams.\n\nAfter two decades across Airtel, EY, Maersk, Tech Mahindra, and Whirlpool, Manish identified a critical gap: teams were expected to deliver outcomes without the systems to enable them. That insight became the foundation of Lucid — a platform designed to turn plans into consistent execution at scale." },
          { name: "Shilpa", role: "Co-Founder", image: "/images/shilpa.png", linkedin: "https://www.linkedin.com/in/shilpachitkara/", bio: "Lucid's technology foundation is led by Shilpa Chitkara, who brings 20+ years of experience across Infosys, L&T Infotech, Genesis BCW, and Workfloww.ai.\n\nWith deep expertise in digital transformation, automation, and Agentic AI, she architects the systems that turn organizational knowledge into scalable execution.\n\nWhere the problem was identified from years of operational experience, Shilpa is building the AI-powered engine that enables Lucid to solve it." },
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