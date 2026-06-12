const credentials = [
  { value: '20+', label: 'Years in HR & Talent' },
  { value: '5,000+', label: 'HR Pros Trained' },
  { value: '50+', label: 'Enterprise Clients' },
];

export default function Coach() {
  return (
    <section className="bg-[#051121] py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-14">
          YOUR FACILITATOR
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder + credentials */}
          <div>
            <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden mb-6 border border-white/8 bg-white/5">
              <img
                src="/images/ai-metamind/manish.png"
                alt="Manish Chum"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="bg-[#0a1928] border border-white/8 rounded-xl p-4 text-center"
                >
                  <p className="font-bold text-white text-xl leading-none mb-1">
                    {c.value}
                  </p>
                  <p className="text-white/35 text-xs leading-snug">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-2">
              Manish Chum
            </h2>
            <p className="text-[#6357d4] text-lg mb-10 font-medium">
              HR Transformation Practitioner
            </p>

            <div className="space-y-5 text-white/65 text-lg leading-relaxed">
              <p>
                Manish has spent two decades inside the HR function — leading talent
                strategy, building L&D programs, and navigating organizational change
                at enterprise scale.
              </p>
              <p>
                Today, he works with HR teams to move them from passive observers of
                the AI revolution to active practitioners. Every workshop he runs is
                built on one principle:{' '}
                <span className="text-white font-medium">no theory, only implementation.</span>
              </p>
              <p>
                He doesn't teach AI from the outside. He's built the workflows, tested
                the tools, and made the mistakes — so you don't have to.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-[#6357d4] pl-6">
              <p className="italic text-white/55 text-xl leading-relaxed">
                "My goal is simple: you leave this workshop with AI skills you can use
                on Monday morning. Not someday. This Monday."
              </p>
              <cite className="text-white/30 text-sm mt-3 block not-italic">
                — Manish Chum
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
