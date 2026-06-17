import { openCheckout } from '../../lib/ai-metamind/razorpay';

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#051121]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6357d4]/12 via-transparent to-blue-600/8 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#6357d4]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[#6357d4] text-sm font-semibold uppercase tracking-widest mb-7">
          THE DECISION POINT
        </p>

        <h2 className="font-bold text-white text-4xl lg:text-6xl leading-tight mb-7">
          The Gap Won't Close Itself
        </h2>

        <p className="italic text-white/45 text-xl lg:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
          "Six months from now, the question won't be whether you should have learned
          AI. It'll be how much further ahead you could have been."
        </p>

        <p className="text-white/55 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          24 seats. ₹499. One live session that changes how you work. The only
          question is whether you're in it.
        </p>

        <button
          onClick={openCheckout}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-14 py-5 rounded-full transition-all duration-200 hover:scale-[1.03] shadow-2xl shadow-blue-600/25 cursor-pointer"
        >
          Reserve My Seat — ₹499
        </button>

        <p className="text-white/25 text-sm mt-7">
          Limited seats · Live on Zoom · Recording included · Full refund guarantee
        </p>
      </div>
    </section>
  );
}
