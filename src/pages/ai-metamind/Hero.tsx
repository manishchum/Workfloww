import { openCheckout } from '../../lib/ai-metamind/razorpay';

export default function Hero() {
  return (
    <section
      className="
      relative
      flex
      items-center
      justify-center
      px-6
      pt-28
      pb-12
      overflow-hidden
      bg-[#051121]
      "
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[#051121]" />

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[800px]
        h-[400px]
        bg-[#6357d4]/10
        rounded-full
        blur-3xl
        "
      />



      <div className="relative z-10 max-w-5xl mx-auto text-center">


        {/* pill */}
        <div
          className="
          inline-flex
          items-center
          gap-2
          bg-white/5
          border
          border-white/10
          rounded-full
          px-5
          py-2
          mb-8
          "
        >

          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

          <span className="text-white/65 text-sm">
            Next live session · ₹499 only
          </span>

        </div>



        {/* Heading */}
        <h1
          className="
          font-bold
          text-white
          leading-tight
          tracking-tight
          mb-6
          "
        >

          <span
            className="
            block
            text-5xl
            md:text-7xl
            "
          >
            AI Won't Replace You.
          </span>


          <span
            className="
            block
            text-5xl
            md:text-7xl
            text-[#7b70e0]
            "
          >
            Someone Using It Will.
          </span>


        </h1>



        <p
          className="
          italic
          text-white/55
          text-xl
          max-w-2xl
          mx-auto
          mb-5
          "
        >

          "The HR professionals who thrive in the next 3 years will be the ones who
          learned to work with AI — not the ones who waited."

        </p>




        <p
          className="
          text-white/65
          text-lg
          max-w-2xl
          mx-auto
          mb-8
          "
        >

          AI MetaMind HR Series is a live hands-on workshop that teaches you AI
          across recruiting, L&D and HR operations.

        </p>




        <button
          onClick={openCheckout}
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          text-lg
          px-12
          py-4
          rounded-full
          shadow-xl
          shadow-blue-600/25
          mb-8
          transition
          hover:scale-105
          "
        >

          Reserve My Seat — ₹499

        </button>




        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-5
          text-white/40
          text-sm
          "
        >

          <span>Live on Zoom</span>

          <span>•</span>

          <span>Recording provided</span>

          <span>•</span>

          <span>50+ bonus prompts</span>

          <span>•</span>

          <span>₹499 one-time</span>


        </div>



      </div>


    </section>
  );
}