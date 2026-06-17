import { openCheckout } from '../../lib/ai-metamind/razorpay';

const includes = [
  { icon: '🔴', label: '3-hour live workshop on Zoom' },
  { icon: '🎬', label: 'Recording access for 90 days' },
  { icon: '📝', label: '50+ battle-tested HR prompt library' },
  { icon: '🛠️', label: 'AI tool recommendations & integration guide' },
  { icon: '📋', label: 'Workflow templates — steal and adapt' },
  { icon: '🏆', label: 'Certificate of participation' },
];

export default function Pricing() {
  return (
    <section className="bg-[#051121] py-24 lg:py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Value context */}
          <div>
            <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-4">
              INVESTMENT
            </p>
            <h2 className="font-bold text-white text-4xl lg:text-5xl leading-tight mb-6">
              One Workshop.{' '}
              <span className="text-[#7b70e0]">A Career's Worth</span> of
              Advantage.
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Most AI courses cost ₹10,000–₹50,000 and take weeks. This is a live,
              practitioner-led workshop you can apply the same week — for less than a
              business lunch.
            </p>

            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item.label} className="flex items-center gap-3.5">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-white/70">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price card */}
          <div>
            <div className="bg-[#0a1928] rounded-3xl border border-white/8 p-8 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#6357d4]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Urgency */}
              <div className="relative z-10 bg-[#6357d4]/15 border border-[#6357d4]/30 rounded-xl px-4 py-2.5 mb-8 text-center">
                <p className="text-[#6357d4] text-sm font-medium">
                  ⚡ Limited to 24 seats — secure yours now
                </p>
              </div>

              <div className="relative z-10">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-white/35 text-lg line-through">₹2,999</span>
                  <span className="text-white/35 text-xs bg-white/5 rounded px-2 py-0.5">
                    Early-bird
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-white text-7xl leading-none">
                    ₹499
                  </span>
                </div>
                <p className="text-white/30 text-sm mb-8">
                  One-time payment · No subscription
                </p>

                <button
                  onClick={openCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-xl transition-colors duration-200 mb-4 cursor-pointer"
                >
                  Reserve My Seat — ₹499
                </button>

                <p className="text-white/25 text-xs text-center">
                  🔒 Secure checkout via Razorpay · SSL encrypted
                </p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="mt-4 border border-white/8 rounded-2xl p-6 bg-white/[0.02]">
              <p className="text-white/55 text-sm leading-relaxed">
                <span className="text-white font-medium">Our guarantee: </span>If you
                don't leave with at least 3 AI workflows you can implement immediately,
                email us within 24 hours for a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
