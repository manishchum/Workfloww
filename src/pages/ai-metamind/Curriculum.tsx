const modules = [
  {
    number: '01',
    title: 'Talent Acquisition & Sourcing',
    points: [
      'AI-powered JD writing, scoring, and iteration',
      'Candidate screening prompts and shortlist automation',
      'Employer branding copy at scale',
    ],
  },
  {
    number: '02',
    title: 'Learning & Development',
    points: [
      'Course outlines and microlearning module creation',
      'AI-generated assessments and feedback loops',
      'Onboarding content workflows you can templatize',
    ],
  },
  {
    number: '03',
    title: 'Performance & Culture',
    points: [
      'Review cycle summarization and feedback synthesis',
      'Pulse survey design and AI-assisted analysis',
      'Manager coaching prompts and communication templates',
    ],
  },
  {
    number: '04',
    title: 'HR Analytics & Reporting',
    points: [
      'Building people-insights narratives with AI',
      'Dashboard interpretation and commentary prompts',
      'Data storytelling for leadership decks',
    ],
  },
  {
    number: '05',
    title: 'Your Permanent AI Toolkit',
    points: [
      '50+ battle-tested HR prompts (yours to keep)',
      'Workflow templates — steal, adapt, deploy',
      'Tool recommendations and integration guide',
    ],
  },
  {
    number: '06',
    title: 'Live Q&A + Hot Seat',
    points: [
      'Bring your real HR challenges to Manish',
      'Live workflow building in front of the cohort',
      'Peer learning from a room of HR leaders',
    ],
  },
];

export default function Curriculum() {
  return (
    <section className="bg-[#0a1928] py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">
          WHAT YOU'LL LEARN
        </p>
        <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-4">
          What We Cover in 3 Hours
        </h2>
        <p className="text-white/55 text-lg mb-16 max-w-xl leading-relaxed">
          Six focused modules, each ending with prompts and workflows you can use the
          same day.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="bg-[#051121] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-200"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="font-bold text-[#6357d4]/50 text-4xl leading-none tabular-nums">
                  {mod.number}
                </span>
                <h3 className="font-semibold text-white text-lg leading-snug">
                  {mod.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {mod.points.map((point) => (
                  <li key={point} className="flex gap-2 items-start">
                    <span className="text-[#6357d4]/50 mt-0.5 text-sm leading-relaxed flex-shrink-0">
                      →
                    </span>
                    <span className="text-white/55 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
