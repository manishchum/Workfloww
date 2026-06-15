import { Helmet } from 'react-helmet-async';
import StickyHeader from './ai-metamind/StickyHeader';
import Hero from './ai-metamind/Hero';
import Problem from './ai-metamind/Problem';
import Outcome from './ai-metamind/Outcome';
import Curriculum from './ai-metamind/Curriculum';
import Coach from './ai-metamind/Coach';
import Testimonials from './ai-metamind/Testimonials';
import Pricing from './ai-metamind/Pricing';
import FAQ from './ai-metamind/FAQ';
import FinalCTA from './ai-metamind/FinalCTA';

export default function AiMetamind() {
  return (
    <div className="bg-[#051121] min-h-screen text-white">
      <Helmet>
        <title>AI MetaMind HR Series - Live AI Workshop for HR Professionals</title>
        <meta 
          name="description" 
          content="Learn to apply AI across recruiting, L&D, and HR operations in this 3-hour live workshop with Manish Chum. Get 50+ prompts and workflows ready to use Monday."
        />
        <meta name="og:title" content="AI MetaMind HR Series" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://workfloww.ai/ai-metamind" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <StickyHeader />
      <Hero />
      <Problem />
      <Outcome />
      <Curriculum />
      <Coach />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      
      {/* Simple footer */}
      <footer className="bg-[#051121] border-t border-white/8 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="font-bold text-white">AI MetaMind</span>
            <span className="text-white/30 ml-2 text-sm">HR Series</span>
            <p className="text-white/25 text-xs mt-1">
              Live AI upskilling for HR professionals
            </p>
          </div>

          <nav className="flex gap-6 text-sm text-white/30">
            <a href="/privacy-policy" className="hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-white/60 transition-colors duration-200">
              Contact
            </a>
          </nav>

          <p className="text-white/20 text-xs">© 2026 Workfloww. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
