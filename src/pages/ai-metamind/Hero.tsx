import { openCheckout } from '../../lib/ai-metamind/razorpay';

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center pt-24 pb-28 px-6 overflow-hidden bg-[#051121]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#051121]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] bg-[#6357d4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6357d4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Live announcement pill */}
        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-14">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
          <span className="text-white/65 text-sm font-dm">
            Next live session · Limited to 24 seats · ₹499 only
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-sans font-bold text-white leading-[1.04] tracking-tight mb-7">
          <span className="block text-5xl sm:text-7xl lg:text-8xl">
            AI Won't Replace You.
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl text-[#7b70e0] mt-2">
            Someone Using It Will.
          </span>
        </h1>

        {/* Editorial pull-quote */}
        <p className="italic text-white/55 text-xl lg:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed">
          "The HR professionals who thrive in the next 3 years will be the ones who
          learned to work with AI — not the ones who waited."
        </p>

        {/* Body copy */}
        <p className="text-white/65 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          AI MetaMind HR Series is a live, hands-on workshop that teaches you to apply
          AI across recruiting, L&D, and HR operations — with workflows you can
          implement by next Monday.
        </p>

        {/* Primary CTA */}
        <button
          onClick={openCheckout}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] shadow-2xl shadow-blue-600/30 mb-10 cursor-pointer"
        >
          Reserve My Seat — ₹499
        </button>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/35 text-sm">
          {['Live on Zoom', 'Recording provided', '50+ bonus prompts', '₹499 one-time'].map(
            (item, i, arr) => (
              <span key={item} className="flex items-center gap-6">
                {item}
                {i < arr.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
                )}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
