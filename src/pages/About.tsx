import * as React from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-6">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <h4 className="text-2xl font-bold">{member.name}</h4>
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