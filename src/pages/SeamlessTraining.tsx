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
                                Seamless Training
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Transform your teams through targeted training and skill enhancement.
                                Lucid has digitised and simplified training scheduling and attendance.
                                Assign pre and post training courses and assessments to ensure maximum
                                advantage out of training sessions. Incentivise training participation
                                with points, badges and certifications.
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
                                    src="https://picsum.photos/seed/training-hero/800/600"
                                    alt="Seamless Training"
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

            {/* Feature 1: Invitations */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/training-invites/800/500"
                                alt="Training Invitations"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Make training invitations simple
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
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
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Attendance */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Digitise Training Attendance
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Simplify attendance management with OTP verification. Eliminate tedious Excel sheets,
                                manual efforts and participant calls with digitised attendance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                            <Smartphone className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold mb-2">OTP Verification</h3>
                                        <p className="text-sm text-slate-500">Secure and instant attendance marking via mobile OTP.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                            <ClipboardCheck className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h3 className="font-bold mb-2">Real-time Sync</h3>
                                        <p className="text-sm text-slate-500">Attendance data is instantly synced with the central dashboard.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://picsum.photos/seed/training-attendance/800/500"
                                alt="Training Attendance"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Pre/Post Courses */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/training-courses/800/500"
                                alt="Pre and Post Training Courses"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Pre and Post-Training Courses
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Lucid enables trainers to assign users pre and post-training assessments to ensure
                                participants arrive well-prepared for training events, allowing for optimal learning outcomes.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Pre-Training Prep</h4>
                                        <p className="text-slate-600">Ensure everyone has the baseline knowledge before the session starts.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Post-Training Assessment</h4>
                                        <p className="text-slate-600">Verify learning retention and provide certifications upon completion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4: Geo-Tagging
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Geo-Tag Training Events
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                Leverage the geo-tagging capability in Lucid to enable frontline teams to mark attendance
                                exclusively from the training venue. This ensures accurate and location-bound attendance
                                recording for training events.
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                                <MapPin className="w-8 h-8 text-blue-400" />
                                <div>
                                    <h4 className="font-bold">Location Verification</h4>
                                    <p className="text-sm text-slate-400">Attendance only allowed within 100m of the venue.</p>
                                </div>
                            </div>
                        </div> */}
            {/* <div className="lg:w-1/2">
                <img
                    src="https://picsum.photos/seed/training-geo/800/500"
                    alt="Geo-Tagging"
                    className="rounded-2xl shadow-2xl border border-white/10"
                    referrerPolicy="no-referrer"
                />
            </div>
        </div>
                </div >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl" />
            </section > */
            }

            {/* Feature 5: Certifications */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <img
                                src="https://picsum.photos/seed/training-cert/800/500"
                                alt="Downloadable Certifications"
                                className="rounded-2xl shadow-xl border border-slate-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Downloadable Certifications
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Promote team recognition and help individuals showcase their achievements and expertise
                                through certifications. Teams can conveniently download certificates upon successful
                                completion of training events on the Lucid app.
                            </p>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                Learn about Rewards <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub Features Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-16 text-slate-900">Sub Features of Training</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Trainer Management", icon: Users, desc: "Manage trainer profiles, availability and assignments." },
                            { title: "Resource Allocation", icon: ClipboardCheck, desc: "Assign venues, equipment and materials to sessions." },
                            { title: "Feedback Loop", icon: CheckCircle2, desc: "Collect and analyze participant feedback for continuous improvement." }
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your training?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join leading organizations that use Lucid to digitise and scale their training programs.
                    </p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-7 text-lg font-bold">
                        Book Demo Now
                    </Button>
                </div>
            </section>
        </div >
    );
}
