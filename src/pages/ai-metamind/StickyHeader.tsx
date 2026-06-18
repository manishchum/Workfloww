import { useEffect, useState } from 'react';
import { openCheckout } from '../../lib/ai-metamind/razorpay';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#051121]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-white text-lg tracking-tight">
            AI MetaMind
          </span>
          <span className="text-white/35 text-xs tracking-widest uppercase">
            HR Series
          </span>
        </div>

        <button
          onClick={() => {

    window.fbq?.("track", "InitiateCheckout");

    openCheckout();

  }}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
        >
          Reserve My Seat — ₹499
        </button>
      </div>
    </header>
  );
}
