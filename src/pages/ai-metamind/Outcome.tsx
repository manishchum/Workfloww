const outcomes = [
  'Write compelling job descriptions and screening questions in minutes using AI',
  'Build L&D content, microlearning modules, and assessments from scratch with AI',
  'Summarize performance reviews and synthesize 360° feedback in seconds',
  'Design and analyze pulse surveys without needing a data science background',
  'Build repeatable prompt workflows for your 10 most time-consuming HR tasks',
  'Know exactly which AI tools to adopt — and which to skip',
  'Speak the language of AI with leadership and influence people strategy decisions',
  'Leave with a 50+ prompt library ready to use the same week',
];

function Check() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6357d4]/15 border border-[#6357d4]/35 flex items-center justify-center mt-0.5">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path
          d="M1.5 5l2.5 2.5 4.5-4.5"
          stroke="#6357d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Outcome() {
  return (
    <section className="bg-[#051121] py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">
          TRANSFORMATION
        </p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-4 max-w-2xl">
          After This Workshop, You'll Be Different
        </h2>
        <p className="italic text-white/45 text-xl mb-16 leading-relaxed">
          Not a little different. Fundamentally more capable.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex gap-3.5 items-start">
              <Check />
              <p className="text-white/75 leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
