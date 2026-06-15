const testimonials = [
  {
    quote:
      "I came in skeptical — I'd tried ChatGPT and thought I understood AI. Three hours with Manish and I realised I hadn't even scratched the surface. My JD workflow alone now saves me 4 hours a week.",
    name: 'Sarah Menon',
    role: 'HRBP, Fortune 500 Tech',
    initials: 'SM',
  },
  {
    quote:
      "What Manish teaches isn't 'here's a prompt, good luck.' It's system-level thinking for HR workflows. I walked out with a complete L&D content pipeline I've used every week since.",
    name: 'Priya Desai',
    role: 'L&D Manager, Global Services',
    initials: 'PD',
  },
  {
    quote:
      "The ROI on ₹499 is honestly embarrassing. I've saved more time than I can calculate. More importantly, I can now have intelligent AI strategy conversations with our CHRO.",
    name: 'Rajesh Sharma',
    role: 'Talent Acquisition Lead, Startup',
    initials: 'RS',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#6357d4" aria-hidden="true">
          <path d="M7 1l1.66 3.36 3.71.54L9.86 7.3l.64 3.7L7 9.25l-3.5 1.84.64-3.7L1.63 4.9l3.71-.54L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0a1928] py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">
          WHAT PARTICIPANTS SAY
        </p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-16 max-w-xl">
          From HR Professionals Like You
        </h2>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="bg-[#051121] rounded-2xl p-8 border border-white/5 flex flex-col"
            >
              <Stars />
              <blockquote className="italic text-white/65 text-lg leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6357d4]/15 border border-[#6357d4]/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#6357d4] text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{t.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
