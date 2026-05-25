import * as React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function Onboarding() {
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo request submitted! Our team will contact you shortly.");
  };

  return (
    <div className="lh-page min-h-screen pt-24">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-white relative overflow-hidden" style={{ padding: "2.5rem 1.25rem" }}>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] lh-bg-light rounded-full blur-[120px] -z-10 opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lh-display font-semibold tracking-tight mb-6 sm:mb-8 leading-[1.1] lh-text-ink">
                Digitised Onboarding built for Frontline teams
              </h1>
              <p className="text-base sm:text-lg md:text-xl lh-text-muted mb-8 sm:mb-10 leading-relaxed">
                Streamline the onboarding process for your frontline staff. Deliver training, documents, and compliance checks directly to their mobile devices. Reduce time-to-productivity and ensure a consistent first-day experience across all locations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button size="lg" className="rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold lh-bg-accent hover:opacity-90 transition-opacity text-white">
                        Book Demo
                      </Button>
                    }
                  />
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold lh-text-ink">Book Demo</DialogTitle>
                      <DialogDescription className="lh-text-muted">
                        See how Lucid can accelerate your workforce outcomes.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleDemoSubmit} className="grid gap-6 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="s-name" className="font-medium lh-text-ink">Full Name</Label>
                        <Input id="s-name" placeholder="John Doe" required className="border lh-border-faint" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="s-email" className="font-medium lh-text-ink">Work Email</Label>
                        <Input id="s-email" type="email" placeholder="john@company.com" required className="border lh-border-faint" />
                      </div>
                      <Button type="submit" className="w-full mt-2 lh-bg-accent hover:opacity-90 text-white font-semibold">
                        Request Demo
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border lh-border-faint shadow-2xl bg-white p-2">
                <img
                  src="https://picsum.photos/seed/onboarding/1200/800"
                  alt="Onboarding Dashboard"
                  className="w-full h-auto rounded-xl lg:rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section className="lh-bg-paper" style={{ padding: "2.5rem 1.25rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold mb-6 lh-text-ink">Everything you need for a great start</h2>
            <p className="text-base sm:text-lg md:text-xl lh-text-muted">
              Lucid's onboarding module helps you welcome new hires and get them up to speed faster than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {[
              {
                title: "Paperless Documentation",
                description: "Collect all necessary documents and signatures digitally before the first day."
              },
              {
                title: "Structured Learning Paths",
                description: "Guide new hires through a step-by-step onboarding journey with videos and quizzes."
              },
              {
                title: "Compliance Tracking",
                description: "Ensure that all mandatory safety and policy training is completed and recorded."
              },
              {
                title: "Welcome Content",
                description: "Share company culture, values, and team introductions through engaging media."
              },
              {
                title: "Manager Dashboards",
                description: "Give managers visibility into the onboarding progress of their new team members."
              },
              {
                title: "Automated Workflows",
                description: "Trigger tasks and notifications automatically based on the new hire's start date."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl lg:rounded-3xl border lh-border-faint hover:border-sky-300 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl lh-bg-light flex items-center justify-center mb-5 sm:mb-6">
                  <UserPlus className="w-6 h-6 lh-accent-text" />
                </div>
                <h3 className="text-lg sm:text-xl lh-display font-semibold mb-3 sm:mb-4 lh-text-ink">{feature.title}</h3>
                <p className="text-sm sm:text-base lh-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="bg-white border lh-border-faint shadow-xl rounded-2xl lg:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-80 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, #e0f2fe 0%, transparent 60%)" }} />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lh-display font-semibold lh-text-ink mb-6 sm:mb-8 lg:mb-10">
                Ready to revolutionise your onboarding?
              </h2>
              <Button size="lg" className="rounded-full px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg font-semibold lh-bg-ink hover:opacity-90 text-white shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
                Book Demo Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          section[style*="padding: 2.5rem 1.25rem"] {
            padding: 3rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
