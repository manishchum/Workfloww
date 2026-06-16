import { useState } from 'react';

const faqs = [
  {
    q: 'Who is this workshop designed for?',
    a: "Built specifically for HR professionals — HRBPs, Talent Acquisition leads, L&D managers, CHROs, and HR generalists — who want to apply AI to their actual day-to-day workflows. You don't need technical experience, only a willingness to implement.",
  },
  {
    q: 'Do I need any technical or coding background?',
    a: "None. This workshop is entirely non-technical. You'll use AI tools through simple text interfaces — no code, no data science, no prior AI experience required. If you can write an email, you can do this.",
  },
  {
    q: "What if I can't attend the live session?",
    a: "The recording is available for 90 days after the session. We strongly recommend attending live — the Q&A and hot-seat segments are where most of the breakthrough moments happen — but the recording gives you full replay access.",
  },
  {
    q: 'What AI tools will we be working with?',
    a: "The workshop is tool-agnostic, but we primarily work with ChatGPT (GPT-4) and Claude. Both have free tiers that are more than sufficient for everything we cover. You'll also get a guide on specialized HR-adjacent tools worth exploring.",
  },
  {
    q: 'How long is the workshop, and what is the format?',
    a: "3 hours live on Zoom, split across 5 implementation modules and a live Q&A. It's interactive — not a lecture. Expect to have AI tools open and build workflows alongside Manish in real time.",
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#0a1928] py-24 lg:py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">
          FAQ
        </p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-16">
          Common Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#051121] border border-white/8 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-7 py-6 flex items-start justify-between gap-4 hover:bg-white/[0.025] transition-colors duration-200 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-white text-lg leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`text-[#6357d4] text-2xl leading-none flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
