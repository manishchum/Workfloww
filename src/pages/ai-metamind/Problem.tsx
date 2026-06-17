const problems = [
  {
    icon: '⚡',
    title: 'Your peers are outpacing you with AI',
    body: 'Junior colleagues are shipping AI-powered work in hours that used to take experienced HR professionals days. The speed gap is real, visible, and widening every week.',
  },
  {
    icon: '📊',
    title: "HR isn't at the AI table — yet",
    body: "Leadership is making AI strategy decisions without HR. Not because you're irrelevant — because you haven't signalled AI fluency to the business. That's fixable.",
  },
  {
    icon: '🔄',
    title: "You've \"tried\" AI. That's not the same as using it",
    body: 'Playing with ChatGPT isn\'t an AI skill. Building repeatable, cross-functional workflows that genuinely change how HR operates — that\'s what this workshop is about.',
  },
  {
    icon: '⏳',
    title: 'Every week of delay is compounding',
    body: 'The professionals who build AI fluency now will set the benchmark for what HR looks like in 2026. The ones who wait will spend years trying to catch up.',
  },
];

export default function Problem() {
  return (
    <section className="bg-[#0a1928] py-10 lg:py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">
          WHY THIS MATTERS NOW
        </p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-4 max-w-2xl">
          HR Is at an Inflection Point
        </h2>
        <p className="text-white/55 text-lg max-w-xl mb-16 leading-relaxed">
          And most HR professionals are watching it happen rather than leading it.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-[#051121] rounded-2xl p-8 border border-white/5 hover:border-[#6357d4]/25 transition-colors duration-300 group"
            >
              <span className="text-3xl mb-5 block">{p.icon}</span>
              <h3 className="font-semibold text-white text-xl mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
