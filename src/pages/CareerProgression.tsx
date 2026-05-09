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
                                Career Progression
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
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
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Define clear career paths
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
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
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Automated Promotions */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Automate Promotions
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Remove bias and manual effort from the promotion process. Lucid automatically
                                identifies employees who have met all criteria for their next role and
                                triggers the promotion workflow.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                            <Zap className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold mb-2">Instant Triggers</h3>
                                        <p className="text-sm text-slate-500">Promotions are triggered as soon as criteria are met.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                            <TrendingUp className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h3 className="font-bold mb-2">Performance-Led</h3>
                                        <p className="text-sm text-slate-500">Growth is tied directly to real-world performance data.</p>
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
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Skill Acquisition Tracking
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
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
                                        <h4 className="font-bold text-slate-900">Competency Matrix</h4>
                                        <p className="text-slate-600">Visualize skill density across teams and locations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Verified Skills</h4>
                                        <p className="text-slate-600">Skills are verified through assessments and manager sign-offs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4: Retention Analytics */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Retention Analytics
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
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
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Identify High-Potential Individuals
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
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
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-16 text-slate-900">Sub Features of Progression</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Role Mapping", icon: Map, desc: "Visualize the entire organizational structure and growth paths." },
                            { title: "Succession Planning", icon: Users, desc: "Build a robust pipeline for critical leadership roles." },
                            { title: "Growth Dashboards", icon: BarChart3, desc: "Personalized views for employees to track their own journey." }
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to nurture your talent?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join leading organizations that use Lucid to build transparent and motivating career paths.
                    </p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold">
                        Book Demo Now
                    </Button>
                </div>
            </section>
        </div>
    );
}
