import * as React from "react";
import { motion } from "motion/react";
import {
    Calendar,
    CheckCircle2,
    MapPin,
    Award,
    ClipboardCheck,
    Smartphone,
    ArrowRight,
    Clock,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SeamlessTraining() {
    return (
        <div className="lh-page min-h-screen pt-24">
            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="bg-white relative overflow-hidden" style={{ padding: "2.5rem 1.25rem" }}>
                <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] lh-bg-light rounded-full blur-[120px] -z-10 opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lh-display font-semibold tracking-tight mb-6 sm:mb-8 lh-text-ink leading-[1.1]">
                                Seamless Training
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted mb-8 sm:mb-10 leading-relaxed">
                                Transform your teams through targeted training and skill enhancement.
                                Lucid has digitised and simplified training scheduling and attendance.
                                Assign pre and post training courses and assessments to ensure maximum
                                advantage out of training sessions. Incentivise training participation
                                with points, badges and certifications.
                            </p>
                            <Button size="lg" className="rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold lh-bg-accent hover:opacity-90 text-white">
                                Book Demo
                            </Button>
                        </motion.div>
                        <motion.div
                            className="flex-1 relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative z-10">
                                <img
                                    src="https://picsum.photos/seed/training-hero/800/600"
                                    alt="Seamless Training"
                                    className="rounded-2xl lg:rounded-3xl shadow-2xl border lh-border-faint"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 lh-bg-light rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 lh-bg-light rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Invitations ────────────────────────────────────────────── */}
            <section className="bg-white" style={{ padding: "2.5rem 1.25rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-1 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/training-invites/800/500"
                                alt="Training Invitations"
                                className="rounded-2xl lg:rounded-3xl shadow-xl border lh-border-faint"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold mb-6 lh-text-ink">
                                Make training invitations simple
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted leading-relaxed mb-6">
                                Lucid empowers trainers to seamlessly schedule and digitise offline and online training events.
                                Team members can access their personalized weekly or monthly training plans at their fingertips,
                                ensuring a streamlined learning experience.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automated calendar invites",
                                    "Personalized training dashboards",
                                    "Real-time schedule updates",
                                    "Support for both online & offline events"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 lh-accent-text shrink-0" />
                                        <span className="lh-text-ink font-medium text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Attendance ────────────────────────────────────────────── */}
            <section className="lh-bg-paper" style={{ padding: "2.5rem 1.25rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold mb-6 lh-text-ink">
                                Digitise Training Attendance
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted leading-relaxed mb-8">
                                Simplify attendance management with OTP verification. Eliminate tedious Excel sheets,
                                manual efforts and participant calls with digitised attendance.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="border lh-border-faint shadow-sm hover:border-sky-300 transition-colors bg-white">
                                    <CardContent className="pt-6 p-6">
                                        <div className="w-12 h-12 lh-bg-light rounded-2xl flex items-center justify-center mb-4">
                                            <Smartphone className="w-6 h-6 lh-accent-text" />
                                        </div>
                                        <h3 className="lh-display font-semibold mb-2 lh-text-ink">OTP Verification</h3>
                                        <p className="text-sm lh-text-muted">Secure and instant attendance marking via mobile OTP.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border lh-border-faint shadow-sm hover:border-sky-300 transition-colors bg-white">
                                    <CardContent className="pt-6 p-6">
                                        <div className="w-12 h-12 lh-bg-light rounded-2xl flex items-center justify-center mb-4">
                                            <ClipboardCheck className="w-6 h-6 lh-accent-text" />
                                        </div>
                                        <h3 className="lh-display font-semibold mb-2 lh-text-ink">Real-time Sync</h3>
                                        <p className="text-sm lh-text-muted">Attendance data is instantly synced with the central dashboard.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://picsum.photos/seed/training-attendance/800/500"
                                alt="Training Attendance"
                                className="rounded-2xl lg:rounded-3xl shadow-xl border lh-border-faint"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Pre/Post Courses ────────────────────────────────────────── */}
            <section className="bg-white" style={{ padding: "2.5rem 1.25rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-1 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/training-courses/800/500"
                                alt="Pre and Post Training Courses"
                                className="rounded-2xl lg:rounded-3xl shadow-xl border lh-border-faint"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold mb-6 lh-text-ink">
                                Pre and Post-Training Courses
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted leading-relaxed mb-8">
                                Lucid enables trainers to assign users pre and post-training assessments to ensure
                                participants arrive well-prepared for training events, allowing for optimal learning outcomes.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 lh-bg-light rounded-full flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 lh-accent-text" />
                                    </div>
                                    <div>
                                        <h4 className="lh-display font-semibold lh-text-ink">Pre-Training Prep</h4>
                                        <p className="text-sm sm:text-base lh-text-muted">Ensure everyone has the baseline knowledge before the session starts.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 lh-bg-light rounded-full flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 lh-accent-text" />
                                    </div>
                                    <div>
                                        <h4 className="lh-display font-semibold lh-text-ink">Post-Training Assessment</h4>
                                        <p className="text-sm sm:text-base lh-text-muted">Verify learning retention and provide certifications upon completion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Certifications ────────────────────────────────────────────  */}
            <section className="lh-bg-paper" style={{ padding: "2.5rem 1.25rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="flex-1 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/training-cert/800/500"
                                alt="Downloadable Certifications"
                                className="rounded-2xl lg:rounded-3xl shadow-xl border lh-border-faint"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold mb-6 lh-text-ink">
                                Downloadable Certifications
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted leading-relaxed mb-8">
                                Promote team recognition and help individuals showcase their achievements and expertise
                                through certifications. Teams can conveniently download certificates upon successful
                                completion of training events on the Lucid app.
                            </p>
                            <Button variant="outline" className="border lh-border-faint lh-text-accent hover:lh-bg-light rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base font-semibold">
                                Learn about Rewards <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Sub Features ────────────────────────────────────────────── */}
            <section className="bg-white" style={{ padding: "2.5rem 1.25rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold lh-text-ink">Sub Features of Training</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                        {[
                            { title: "Trainer Management", icon: Users, desc: "Manage trainer profiles, availability and assignments." },
                            { title: "Resource Allocation", icon: ClipboardCheck, desc: "Assign venues, equipment and materials to sessions." },
                            { title: "Feedback Loop", icon: CheckCircle2, desc: "Collect and analyze participant feedback for continuous improvement." }
                        ].map((feature, i) => (
                            <Card key={i} className="border lh-border-faint shadow-sm hover:border-sky-300 transition-colors bg-white">
                                <CardContent className="pt-8 pb-8 p-6 sm:p-8">
                                    <div className="w-12 h-12 lh-bg-light rounded-full flex items-center justify-center mx-auto mb-6">
                                        <feature.icon className="w-6 h-6 lh-accent-text" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl lh-display font-semibold mb-3 lh-text-ink text-center">{feature.title}</h3>
                                    <p className="text-sm sm:text-base lh-text-muted text-center">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────────────── */}
            <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="bg-white border lh-border-faint shadow-xl rounded-2xl lg:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full opacity-80 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, #e0f2fe 0%, transparent 60%)" }} />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lh-display font-semibold lh-text-ink mb-6 sm:mb-8 lg:mb-10">Ready to transform your training?</h2>
                            <p className="text-base sm:text-lg md:text-xl lh-text-muted mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join leading organizations that use Lucid to digitise and scale their training programs.
                            </p>
                            <Button size="lg" className="rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold lh-bg-ink hover:opacity-90 text-white shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none">
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
