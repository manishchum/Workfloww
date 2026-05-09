import * as React from "react";
import { motion } from "motion/react";
import {
  Trophy,
  CheckCircle2,
  Gift,
  Award,
  Users,
  BarChart3,
  ArrowRight,
  Zap,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RewardsRecognition() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
                Rewards & Recognition
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Boost morale with instant recognition for a job well done. Gamify the workplace
                with points, badges, and leaderboards. Allow employees to redeem points for
                real-world rewards. Foster a culture of appreciation and healthy competition.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Book Demo
              </Button>
            </motion.div>
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10">
                <img
                  src="https://picsum.photos/seed/rewards-hero/800/600"
                  alt="Rewards & Recognition"
                  className="rounded-3xl shadow-2xl border border-slate-200"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-200/50 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-200/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 1: Gamification */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/rewards-gamify/800/500"
                alt="Gamification"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Gamify the workplace
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Turn daily tasks into rewarding experiences. Lucid's gamification engine
                assigns points for completing training, achieving sales targets, and
                following SOPs, making work more engaging and fun.
              </p>
              <ul className="space-y-4">
                {[
                  "Customizable point systems",
                  "Unlockable badges and levels",
                  "Real-time progress tracking",
                  "Department-specific challenges"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Leaderboards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Dynamic Leaderboards
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Foster healthy competition with live leaderboards. Whether it's store-wide,
                regional, or national, employees can see where they stand and strive for the top spot.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <Trophy className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-bold mb-2">Live Rankings</h3>
                    <p className="text-sm text-slate-500">Rankings update instantly as points are earned.</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-2">Team Competitions</h3>
                    <p className="text-sm text-slate-500">Encourage collaboration through team-based goals.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://picsum.photos/seed/rewards-leaderboard/800/500"
                alt="Leaderboards"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Redeemable Rewards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/rewards-redeem/800/500"
                alt="Redeemable Rewards"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Real-World Rewards
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Points aren't just for show. Lucid's integrated marketplace allows employees
                to redeem their hard-earned points for gift cards, merchandise, or
                company-specific perks.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Gift className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Reward Catalog</h4>
                    <p className="text-slate-600">A wide range of rewards to suit every employee's preference.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Instant Fulfillment</h4>
                    <p className="text-slate-600">Digital rewards are delivered instantly to the employee's app.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Peer Recognition */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Peer-to-Peer Recognition
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Empower your team to appreciate each other. Lucid's social recognition
                feature allows employees to send "shout-outs" and points to their colleagues,
                building a stronger, more connected culture.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <Star className="w-8 h-8 text-yellow-400" />
                <div>
                  <h4 className="font-bold">Social Shout-outs</h4>
                  <p className="text-sm text-slate-400">Public recognition that everyone can see and celebrate.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://picsum.photos/seed/rewards-peer/800/500"
                alt="Peer Recognition"
                className="rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-600/10 blur-3xl" />
      </section>

      {/* Feature 5: Milestone Celebrations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/rewards-milestone/800/500"
                alt="Milestone Celebrations"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Celebrate Every Milestone
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Never miss a work anniversary or birthday. Lucid automatically celebrates
                important milestones with personalized messages and bonus points,
                making every employee feel valued.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn about Engagement <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 text-slate-900">Sub Features of Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Budget Management", icon: BarChart3, desc: "Set and track recognition budgets across departments." },
              { title: "Custom Badges", icon: Award, desc: "Create unique badges that reflect your company values." },
              { title: "Engagement Analytics", icon: Users, desc: "Monitor participation rates and the impact on morale." }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-500">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to boost team morale?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join leading organizations that use Lucid to create a culture of appreciation and high performance.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold">
            Book Demo Now
          </Button>
        </div>
      </section>
    </div>
  );
}
