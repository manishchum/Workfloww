import * as React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Smartphone
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

export default function MobileLearning() {
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo request submitted! Our team will contact you shortly.");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-blue-500/10 to-transparent -z-10 blur-[120px]" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
                Mobile Learning built for Frontline teams
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Deliver bite-sized learning modules that your frontline teams can consume on the go. Perfect for product updates, safety tips, and quick refreshers. Boost engagement with a mobile-first interface designed for the flow of work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-blue-600 hover:bg-blue-700 transition-colors text-white">
                        Book Demo
                      </Button>
                    }
                  />
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">Book Demo</DialogTitle>
                      <DialogDescription>
                        See how Lucid can accelerate your workforce outcomes.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleDemoSubmit} className="grid gap-6 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="s-name">Full Name</Label>
                        <Input id="s-name" placeholder="John Doe" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="s-email">Work Email</Label>
                        <Input id="s-email" type="email" placeholder="john@company.com" required />
                      </div>
                      <Button type="submit" className="w-full mt-2">
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
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl bg-white p-2">
                <img
                  src="https://picsum.photos/seed/mobile-learning/1200/800"
                  alt="Mobile Learning Interface"
                  className="w-full h-auto rounded-[1.5rem] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Learning that fits in the pocket</h2>
            <p className="text-lg text-muted-foreground">
              Lucid's mobile learning platform is built specifically for the needs of a deskless workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Micro-learning Modules",
                description: "Short, focused lessons that can be completed in 5 minutes or less."
              },
              {
                title: "Offline Access",
                description: "Download content for viewing even when an internet connection is unavailable."
              },
              {
                title: "Gamified Experience",
                description: "Drive engagement with points, badges, and leaderboards."
              },
              {
                title: "Video-first Content",
                description: "Deliver high-impact training through short, engaging video clips."
              },
              {
                title: "Instant Assessments",
                description: "Verify knowledge retention with quick quizzes and interactive exercises."
              },
              {
                title: "Personalised Feed",
                description: "Recommend content based on the user's role, location, and performance."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
                Ready to empower your mobile workforce?
              </h2>
              <Button size="lg" className="rounded-full px-12 py-8 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-transform">
                Book Demo Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
