import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Target,
  BarChart3,
  ShieldCheck,
  Brain,
  Database,
  Route,
  MapPin,
  Clock,
  Layout as LayoutIcon,
  MessageSquare,
  Rocket,
  ArrowRightLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LUCID_CONTENT } from "../constants";

const IconMap: Record<string, any> = {
  "⚡": Zap,
  "📍": MapPin,
  "🔄": ShieldCheck,
  "🚀": Rocket,
  "📈": BarChart3,
  "💬": MessageSquare
};

const CapabilityCard = ({ item, i }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <Card className="h-full border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 group bg-background/50 backdrop-blur-sm p-6 rounded-3xl">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-border/30">
          <span className="text-2xl">{item.icon}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed font-light">
          {item.desc}
        </p>
      </Card>
    </motion.div>
  );
};

const QuestionScroller = ({ onScrollToSolution }: { onScrollToSolution: () => void }) => {
  const questions = [
    {
      id: "01",
      text: "Your best location and your weakest location run the <span class='text-blue-400'>same process, same product, same team size.</span> The performance gap between them — can you explain it precisely?",
    },
    {
      id: "02",
      text: "You rolled out a new product, process, or campaign last quarter. <span class='text-blue-400'>Right now, today</span> — what percentage of your frontline can execute it without hesitation?",
    },
    {
      id: "03",
      text: "Your process is documented. Your people are experienced. Yet <span class='text-blue-400'>every site visit, every review, every audit</span> — the same deviations surface. Why does the gap keep coming back?",
    }
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % questions.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-navy h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10 md:gap-14 items-center text-center"
          >
            <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.5em] text-blue-500/40 uppercase font-mono">

            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white/95 leading-[1.2] max-w-4xl"
              dangerouslySetInnerHTML={{ __html: questions[index].text }}
            />

            <div className="flex items-center justify-center gap-6">
              <div className="w-1 h-12 bg-blue-600/40 rounded-full hidden md:block" />
              <p className="text-xl md:text-2xl font-light italic text-slate-500 max-w-2xl px-4">
                {questions[index].footer}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Button */}
        <motion.button 
          onClick={onScrollToSolution}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 right-8 hidden md:flex flex-col items-end gap-3 group outline-none cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase group-hover:text-blue-400 transition-colors">
            See the solution <ArrowRight className="inline-block ml-1 w-3 h-3 rotate-90" />
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-blue-600/50 to-transparent mr-4 group-hover:h-20 transition-all duration-500" />
        </motion.button>
      </div>
    </div>
  );
};

const HowItWorksDark = () => {
  const howItWorks = (LUCID_CONTENT as any).howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <Badge variant="outline" className="mb-4 px-3 py-1 rounded-full text-blue-400 border-blue-400/20 bg-blue-400/5 font-bold tracking-wider uppercase text-[10px]">
            {howItWorks.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-white">
            {howItWorks.title}
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            {howItWorks.description}
          </p>
        </div>

        <div className="space-y-40">
          {howItWorks.steps.map((step: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-6">
                    STEP 0{index + 1}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-8 tracking-tight leading-tight text-white">
                    {step.heading.split(" Lucid ").map((part: string, i: number, arr: any) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <><br /><span className="text-blue-500">Lucid </span></>}
                      </span>
                    ))}
                  </h3>
                  <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
                    {step.description}
                  </p>
                  <ul className="space-y-6 mb-12">
                    {step.points.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                        <span className="text-slate-400 text-lg leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div className="relative rounded-[2rem] overflow-hidden bg-white/5 p-2 shadow-2xl border border-white/5">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full object-cover aspect-[4/3] rounded-[1.5rem] grayscale-[0.2] opacity-80"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const heroRef = React.useRef<HTMLDivElement>(null);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo request submitted! Our team will contact you shortly.");
  };

  const scrollToSolution = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const content = LUCID_CONTENT as any;

  return (
    <div className="bg-navy min-h-screen">
      <QuestionScroller onScrollToSolution={scrollToSolution} />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[calc(100vh-80px)] flex flex-col text-white justify-center py-12 md:py-20 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-blue-400 mb-8 md:mb-12">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                {content.hero.subtitle}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 md:mb-12 leading-[0.85]">
                The operating system <br />
                your <span className="text-blue-500 font-extrabold italic">business runs on.</span> <br />
                <span className="text-slate-500">From decision to execution.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 md:mb-16 leading-relaxed font-light">
                Not a feature. Not a dashboard. The <span className="text-white font-semibold">operating layer between what your organization decides and what actually happens</span> — at the counter, on the floor, in the field, on the line.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button size="lg" className="h-14 md:h-16 px-10 rounded-2xl text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-2xl shadow-blue-500/30">
                        See Lucid in action
                      </Button>
                    }
                  />
                  <DialogContent className="sm:max-w-[425px] bg-navy border-slate-800 text-white font-sans">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">See Lucid in Action</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        Schedule a personalized tour of the Lucid OS.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleDemoSubmit} className="grid gap-6 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="h-name" className="text-slate-300">Full Name</Label>
                        <Input id="h-name" className="bg-slate-900 border-slate-800 text-white" placeholder="John Doe" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="h-email" className="text-slate-300">Work Email</Label>
                        <Input id="h-email" className="bg-slate-900 border-slate-800 text-white" type="email" placeholder="john@company.com" required />
                      </div>
                      <Button type="submit" className="w-full h-12 bg-blue-500 text-white hover:bg-blue-600">Request Demo</Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" size="lg" className="h-14 md:h-16 px-10 rounded-2xl text-lg font-bold bg-white border-white text-black hover:bg-slate-100 transition-all">
                  Request a 30-day pilot
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Strip - Flowing naturally to avoid overlap on mobile/tablet */}
        <div className="border-t border-white/5 bg-white/[0.02] py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {content.hero.stats.map((stat: any, i: number) => (
                <div key={i} className="flex flex-col items-center justify-center text-center h-full">
                  <div className="text-5xl font-extrabold mb-2 flex items-baseline justify-center text-white">
                    {stat.label.replace(stat.sub, '')}
                    <span className="text-blue-500 text-2xl ml-1">{stat.sub === "." ? "." : stat.sub}</span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Text Block */}
      <section className="py-32 bg-navy text-white relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-slate-400 mb-16">
              The way <span className="text-white font-semibold italic">Instagram became non-negotiable for marketing at scale</span> — Lucid is becoming non-negotiable for <span className="text-white font-semibold italic">sales and operations execution.</span> Organizations running on Lucid don't debate whether to use it. They can't imagine operating without it.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="px-6 py-4 rounded-full border border-white/10 bg-white/5 text-slate-500 text-sm italic">
                {content.comparison.before}
              </div>
              <div className="px-8 py-4 rounded-full bg-blue-600 text-white text-sm font-bold shadow-2xl shadow-blue-600/20">
                {content.comparison.after}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="results" className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <div className="text-blue-500 font-bold tracking-widest text-[10px] uppercase mb-6">
              {content.capabilities.subtitle}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white leading-tight">
              {content.capabilities.title}
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl font-light leading-relaxed">
              {content.capabilities.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.capabilities.items.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-white/5 bg-white/[0.03] shadow-sm hover:shadow-xl transition-all duration-300 group p-6 rounded-3xl">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksDark />

      {/* Final CTA Strip */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                Your execution gap <br /> 
                has a <span className="text-blue-500">cost.</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl mb-16 leading-relaxed font-light">
                Every week without Lucid is a week where your strategy stays at the top and your <span className="text-white font-medium">ground reality stays unknown.</span> The Lighthouse Programme gives you 30 days to find out exactly what's possible.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="h-16 px-12 rounded-2xl text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-600/20">
                  Apply for the Lighthouse Programme
                </Button>
                <Button variant="ghost" size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold text-slate-300 hover:text-white hover:bg-white/5">
                  Talk to us first →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
