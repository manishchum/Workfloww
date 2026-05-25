import * as React from "react";
import { motion } from "motion/react";
import {
  Ticket,
  CheckCircle2,
  MessageSquare,
  Clock,
  Smartphone,
  BarChart3,
  ArrowRight,
  Zap,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Ticketing() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section style={{ padding: "5rem 1.25rem 3rem" }} className="relative overflow-hidden bg-white flex items-center min-h-[85vh]">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 lh-text-ink">
                Ticketing
              </h1>
              <p className="text-base sm:text-lg md:text-xl lh-text-muted mb-8 leading-relaxed">
                Streamline issue reporting and resolution for frontline staff. Track ticket
                status and response times to improve efficiency. Categorize issues to
                identify recurring problems and trends. Ensure every concern is addressed promptly and effectively.
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
                  src="https://picsum.photos/seed/ticketing-hero/800/600"
                  alt="Ticketing"
                  className="rounded-3xl shadow-2xl border border-slate-200"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 1: Easy Reporting */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/ticketing-report/800/500"
                alt="Easy Reporting"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Easy Issue Reporting
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Empower your frontline staff to report issues in seconds. With a
                mobile-first interface, they can capture photos, add descriptions,
                and submit tickets without leaving their work area.
              </p>
              <ul className="space-y-4">
                {[
                  "One-tap ticket creation",
                  "Photo and video attachments",
                  "Voice-to-text descriptions",
                  "Location-aware reporting"
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

      {/* Feature 2: Automated Routing */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Smart Automated Routing
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ensure every ticket reaches the right person instantly. Lucid's
                intelligent routing engine categorizes issues and assigns them to the
                correct department or individual based on priority and expertise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Filter className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-2">Auto-Categorization</h3>
                    <p className="text-sm text-slate-500">AI-driven sorting of tickets into predefined categories.</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-bold mb-2">Instant Assignment</h3>
                    <p className="text-sm text-slate-500">Tickets are assigned to the right team in real-time.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://picsum.photos/seed/ticketing-routing/800/500"
                alt="Automated Routing"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Status Tracking */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/ticketing-status/800/500"
                alt="Status Tracking"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Real-Time Status Tracking
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Keep everyone in the loop. Staff can track the progress of their
                tickets in real-time, receiving notifications as status changes and
                communicating directly with the resolution team.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">In-Ticket Chat</h4>
                    <p className="text-slate-600">Direct communication between the reporter and the resolver.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">SLA Monitoring</h4>
                    <p className="text-slate-600">Ensure every ticket is resolved within the target timeframe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Efficiency Analytics */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Efficiency Analytics
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Identify bottlenecks and improve operations. Lucid provides deep
                insights into ticket trends, resolution times, and recurring issues,
                allowing you to address root causes proactively.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <BarChart3 className="w-8 h-8 text-indigo-400" />
                <div>
                  <h4 className="font-bold">Trend Analysis</h4>
                  <p className="text-sm text-slate-400">Identify recurring issues across locations and departments.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://picsum.photos/seed/ticketing-analytics/800/500"
                alt="Efficiency Analytics"
                className="rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-3xl" />
      </section>

      {/* Feature 5: Feedback Loop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/ticketing-feedback/800/500"
                alt="Feedback Loop"
                className="rounded-2xl shadow-xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Continuous Improvement Loop
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Close the loop with staff feedback. Once a ticket is resolved,
                staff can rate their experience, providing valuable data to help
                you improve your support processes.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn about Support <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 text-slate-900">Sub Features of Ticketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Department Routing", icon: Filter, desc: "Custom rules for routing tickets to specific teams." },
              { title: "Resolution History", icon: Clock, desc: "Complete history of every issue and its resolution." },
              { title: "Mobile Dashboard", icon: Smartphone, desc: "A dedicated view for resolvers to manage their queue on the go." }
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to streamline your support?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join leading organizations that use Lucid to resolve issues faster and improve frontline efficiency.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold">
            Book Demo Now
          </Button>
        </div>
      </section>
    </div>
  );
}
