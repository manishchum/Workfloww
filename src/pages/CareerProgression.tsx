import * as React from "react";
import { motion } from "motion/react";
import {
    TrendingUp,
    CheckCircle2,
    Target,
    Award,
    Users,
    BarChart3,
    ArrowRight,
    Zap,
    Map
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CareerProgression() {
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
                                Career Progression
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted mb-8 leading-relaxed">
                                Define clear career paths for your frontline employees. Automate promotions
                                based on performance and skill acquisition. Reduce turnover by showing
                                employees a future within the company. Track progress and identify
                                high-potential individuals early.
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
                                    src="https://picsum.photos/seed/career-hero/800/600"
                                    alt="Career Progression"
                                    className="rounded-3xl shadow-2xl border border-slate-200"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 1: Career Paths */}
            <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/career-paths/800/500"
                                alt="Career Path Mapping"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 lh-text-ink">
                                Define clear career paths
                            </h2>
                            <p className="text-base sm:text-lg lh-text-muted leading-relaxed mb-6">
                                Lucid allows you to map out every possible growth trajectory within your organization.
                                From entry-level associate to store manager, every step is clearly defined with
                                required competencies and performance benchmarks.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Visual career maps for every role",
                                    "Competency-based progression",
                                    "Transparent growth requirements",
                                    "Multi-directional path options"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 lh-accent-text" />
                                        <span className="lh-text-ink font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Automated Promotions */}
            <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 lh-text-ink">
                                Automate Promotions
                            </h2>
                            <p className="text-base sm:text-lg lh-text-muted leading-relaxed mb-6">
                                Remove bias and manual effort from the promotion process. Lucid automatically
                                identifies employees who have met all criteria for their next role and
                                triggers the promotion workflow.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                            <Zap className="w-6 h-6 lh-accent-text" />
                                        </div>
                                        <h3 className="font-bold mb-2 lh-text-ink">Instant Triggers</h3>
                                        <p className="text-sm lh-text-muted">Promotions are triggered as soon as criteria are met.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                            <TrendingUp className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h3 className="font-bold mb-2 lh-text-ink">Performance-Led</h3>
                                        <p className="text-sm lh-text-muted">Growth is tied directly to real-world performance data.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://picsum.photos/seed/career-auto/800/500"
                                alt="Automated Promotions"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Skill Acquisition */}
            <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/career-skills/800/500"
                                alt="Skill Acquisition Tracking"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 lh-text-ink">
                                Skill Acquisition Tracking
                            </h2>
                            <p className="text-base sm:text-lg lh-text-muted leading-relaxed mb-6">
                                Monitor the development of your workforce in real-time. Lucid tracks every
                                skill acquired, assessment passed, and certification earned, building a
                                comprehensive competency profile for every employee.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                                        <Target className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold lh-text-ink">Competency Matrix</h4>
                                        <p className="lh-text-muted">Visualize skill density across teams and locations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold lh-text-ink">Verified Skills</h4>
                                        <p className="lh-text-muted">Skills are verified through assessments and manager sign-offs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4: Retention Analytics */}
            <section style={{ padding: "2.5rem 1.25rem", background: "#0f172a", color: "white" }} className="overflow-hidden relative">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }} className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Retention Analytics
                            </h2>
                            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                                Understand the direct impact of career progression on your bottom line.
                                Lucid provides deep insights into how growth opportunities correlate with
                                reduced turnover and increased employee lifetime value.
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                                <BarChart3 className="w-8 h-8 text-blue-400" />
                                <div>
                                    <h4 className="font-bold">Turnover Reduction</h4>
                                    <p className="text-sm text-slate-400">Track how career pathing reduces attrition rates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://picsum.photos/seed/career-analytics/800/500"
                                alt="Retention Analytics"
                                className="rounded-2xl shadow-2xl border border-white/10"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl" />
            </section>

            {/* Feature 5: High-Potential Identification */}
            <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/career-hi-po/800/500"
                                alt="High-Potential Identification"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 lh-text-ink">
                                Identify High-Potential Individuals
                            </h2>
                            <p className="text-base sm:text-lg lh-text-muted leading-relaxed mb-6">
                                Never lose a future leader again. Lucid's AI-driven insights highlight
                                top performers who are ready for more responsibility, allowing you to
                                proactively nurture your internal talent pipeline.
                            </p>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                Learn about Succession <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub Features Section */}
            <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }} className="text-center">
                    <h2 className="text-3xl font-bold mb-16 lh-text-ink">Sub Features of Progression</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                        {[
                            { title: "Role Mapping", icon: Map, desc: "Visualize the entire organizational structure and growth paths." },
                            { title: "Succession Planning", icon: Users, desc: "Build a robust pipeline for critical leadership roles." },
                            { title: "Growth Dashboards", icon: BarChart3, desc: "Personalized views for employees to track their own journey." }
                        ].map((feature, i) => (
                            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-8 pb-8">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <feature.icon className="w-6 h-6 lh-accent-text" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 lh-text-ink">{feature.title}</h3>
                                    <p className="lh-text-muted">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: "2.5rem 1.25rem", background: "#2563eb", color: "white" }} className="">
                <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }} className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to nurture your talent?</h2>
                    <p className="text-base sm:text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join leading organizations that use Lucid to build transparent and motivating career paths.
                    </p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold">
                        Book Demo Now
                    </Button>
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
