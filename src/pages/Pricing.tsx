import * as React from "react";
import { motion } from "motion/react";
import { Check, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PlanType = "monthly" | "annual";

interface PricingPlan {
  name: string;
  subtitle: string;
  price: number;
  priceAnnual: number;
  description: string;
  recommended?: boolean;
  features: string[];
  buttonText: string;
  buttonStyle?: "primary" | "secondary";
}

interface FeatureRow {
  category: string;
  items: FeatureItem[];
}

interface FeatureItem {
  name: string;
  details?: Record<string, string>;
}

export default function Pricing() {
  const [billingType, setBillingType] = React.useState<PlanType>("monthly");
  const [expandedFaq, setExpandedFaq] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      subtitle: "LUCID SUITE",
      price: 39,
      priceAnnual: 39 * 12 * 0.8,
      description: "Unlock standard course creation and student testing mechanics.",
      features: [
        "Full Access to Lucid Studio",
        "Dynamic Module Assessments",
        "Standard Text Outputs",
        "Up to 10 active modules",
        "Email support",
      ],
      buttonText: "Talk to Sales",
      buttonStyle: "secondary",
    },
    {
      name: "Standard",
      subtitle: "LUCID SUITE",
      price: 99,
      priceAnnual: 99 * 12 * 0.8,
      description: "Enhance learning with real-time conversational sandboxes.",
      recommended: true,
      features: [
        "Lucid Studio & Assessments",
        "Interactive Module Chat",
        "Enhanced AI Assistant response speed",
        "Up to 30 active modules",
        "Priority Email & Chat support",
      ],
      buttonText: "Talk to Sales",
      buttonStyle: "primary",
    },
    {
      name: "Plus",
      subtitle: "LUCID SUITE",
      price: 239,
      priceAnnual: 239 * 12 * 0.8,
      description: "Track progression against enterprise KPIs and outcomes.",
      features: [
        "Standard subscription benefits",
        "Full KPI Dashboard Analytics",
        "Student Skill Matrix & Mapping",
        "Up to 100 active modules",
        "Dedicated Account assistance",
      ],
      buttonText: "Talk to Sales",
      buttonStyle: "secondary",
    },
    {
      name: "Pro",
      subtitle: "LUCID SUITE",
      price: 479,
      priceAnnual: 479 * 12 * 0.8,
      description: "Ultimate immersive simulation with natural voice training.",
      features: [
        "Plus subscription benefits",
        "Interactive Roleplay Simulator",
        "Direct Speech-to-Speech audio sandbox",
        "Unlimited modules and assessment grids",
        "SLA-backed uptime & customized integrations",
      ],
      buttonText: "Talk to Sales",
      buttonStyle: "primary",
    },
  ];

  const featureComparison: FeatureRow[] = [
    {
      category: "KEY PLATFORM FEATURES",
      items: [
        { name: "Lucid Studio Editor" },
        { name: "Active simulations limit", details: { Starter: "Up to 10 modules", Standard: "Up to 30 modules", Plus: "Up to 100 modules", Pro: "Unlimited modules" } },
      ],
    },
    {
      category: "CREATOR STUDIO & CONTENT",
      items: [
        { name: "Lucid Studio Editor" },
        { name: "Active simulations limit", details: { Starter: "Up to 10 modules", Standard: "Up to 30 modules", Plus: "Up to 100 modules", Pro: "Unlimited modules" } },
      ],
    },
    {
      category: "ASSESSMENTS & MODULES",
      items: [
        { name: "Module Assessments" },
      ],
    },
    {
      category: "AI & CONVERSATIONAL TOOLS",
      items: [
        { name: "Module AI Chat" },
        { name: "Conversational Roleplay Simulator" },
        { name: "Speech-to-Speech Sandbox" },
        { name: "Custom AI Voice profiles", details: { Pro: "All voice assets" } },
      ],
    },
    {
      category: "METRICS & DASHBOARDS",
      items: [
        { name: "KPI & Progress Dashboard" },
        { name: "Analytics API & PDF Exports", details: { Plus: "PDF Reports", Pro: "PDF & API Stream" } },
      ],
    },
    {
      category: "HOSTING & ENTERPRISE SUPPORT",
      items: [
        { name: "Dedicated cloud sandbox", details: { Starter: "Shared cloud", Standard: "Shared cloud", Plus: "Shared cloud", Pro: "Available addon" } },
      ],
    },
  ];

  const faqs = [
    {
      question: 'What constitutes a "Module" in the Lucid Platform?',
      answer: "A Module in the Lucid Platform represents a self-contained learning unit that can include content, assessments, and interactive elements.",
    },
    {
      question: "How does the Speech-to-Speech simulation function?",
      answer: "The Speech-to-Speech simulation uses advanced AI to enable realistic voice-based interactions, allowing users to practice conversational skills in real-world scenarios.",
    },
    {
      question: "Can I train the roleplay simulator on our custom script or playbooks?",
      answer: "Yes, the Pro plan includes the ability to customize the roleplay simulator with your custom scripts and playbooks for organization-specific training.",
    },
    {
      question: "Is there a contract required, and can we upgrade at any point?",
      answer: "Contracts and upgrade flexibility depend on your plan. Contact our sales team to discuss custom arrangements that fit your needs.",
    },
    {
      question: 'How works the "Talk to Sales" demo flow?',
      answer: "The Talk to Sales demo flow connects you with our sales team to demonstrate the platform capabilities tailored to your organization's needs.",
    },
    {
      question: "Is student progress tracking GDPR/SOC-2 compliant?",
      answer: "Yes, all student progress tracking and data storage meets GDPR and SOC-2 compliance standards to ensure data security and privacy.",
    },
  ];

  const handleContactRedirect = () => {
    navigate("/contact");
  };

  const displayPrice = (plan: PricingPlan) => {
    const price = billingType === "annual" ? plan.priceAnnual : plan.price;
    return Math.round(price).toLocaleString();
  };

  const getSavings = (plan: PricingPlan) => {
    if (billingType === "annual") {
      const monthlyTotal = plan.price * 12;
      const annualPrice = plan.priceAnnual;
      const savings = Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100);
      return savings;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900"
          >
            Plans for any rollout size.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            Deploy interactive, live simulation features smoothly. Choose an optimization config built for true team alignment.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-3 bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setBillingType("monthly")}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  billingType === "monthly"
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingType("annual")}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  billingType === "annual"
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Annual Billing
              </button>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-sm font-semibold text-teal-700">
              Save up to 20% on Annual Pricing Plans
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 transition-all ${
                  plan.recommended
                    ? "lg:scale-105 bg-gradient-to-b from-blue-50 to-white border-2 border-blue-500 shadow-2xl"
                    : "bg-white border border-slate-200 hover:shadow-lg"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">{plan.subtitle}</p>
                  <p className="text-sm text-slate-600 mb-6">{plan.description}</p>

                  <div className="mb-2">
                    <span className="text-4xl font-bold text-slate-900">${displayPrice(plan)}</span>
                    <span className="text-slate-600 ml-1">/ month</span>
                  </div>
                  {billingType === "annual" && getSavings(plan) > 0 && (
                    <p className="text-sm text-teal-600 font-semibold">SAVE {getSavings(plan)}%</p>
                  )}
                </div>

                <Button
                  onClick={handleContactRedirect}
                  className={`w-full mb-8 h-12 rounded-lg font-bold transition-all ${
                    plan.buttonStyle === "primary"
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300"
                  }`}
                >
                  {plan.buttonText}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6"
            >
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-bold text-slate-900 mb-3">SOC-2 & GDPR Protected</h3>
              <p className="text-slate-600 text-sm">
                We encrypt all student dialogue streams, scores, and business playbooks securely. Trainee logs remain completely isolated.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-slate-900 mb-3">Enterprise Scalability</h3>
              <p className="text-slate-600 text-sm">
                Provision thousands of active simulation seats instantly. Integration API streams let you feed compliance pipelines smoothly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-bold text-slate-900 mb-3">99.9% Jitter Free Audio</h3>
              <p className="text-slate-600 text-sm">
                Our Pro plan streams voice packets with sub-100ms processing times, guaranteeing real-world phone simulator responses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Full Capability Breakdown</h2>
            <p className="text-lg text-slate-600">
              Compare deep specifications and module parameters item by item
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Key Platform Features</th>
                    <th className="text-center px-4 py-4 font-bold text-slate-600">Starter</th>
                    <th className="text-center px-4 py-4 font-bold text-slate-600">Standard</th>
                    <th className="text-center px-4 py-4 font-bold text-slate-600">Plus</th>
                    <th className="text-center px-4 py-4 font-bold text-slate-600">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-slate-50 border-t border-slate-200">
                        <td colSpan={5} className="px-6 py-3 font-bold text-blue-600 text-xs uppercase tracking-wider">
                          {row.category}
                        </td>
                      </tr>
                      {row.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="border-b border-slate-200 hover:bg-slate-50">
                          <td className="px-6 py-4 text-sm text-slate-900 font-medium">{item.name}</td>
                          {plans.map((plan) => (
                            <td key={plan.name} className="text-center px-4 py-4">
                              {item.details && item.details[plan.name] ? (
                                <span className="text-sm text-slate-700">{item.details[plan.name]}</span>
                              ) : (
                                <Check className="w-5 h-5 text-teal-500 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a customized integration or massive seat package?
          </h2>
          <p className="text-slate-600 mb-8">
            We offer custom API workflows, SOC2 compliance, and dedicated team trainings on enterprise standards.
          </p>
          <Button
            onClick={handleContactRedirect}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Talk to Enterprise Sales
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Answered Inquiries</h2>
            <p className="text-lg text-slate-600">
              Learn how Lucid LMS models, Studio assessment logic, and roleplay workflows function on your codebase.
            </p>
          </div>

          <Accordion className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                className="bg-white border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to get started with Lucid?
          </h2>
          <p className="text-slate-600 mb-8">
            Join leading organizations transforming their operations with real-time execution visibility and AI-powered learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContactRedirect}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-600/20"
            >
              Schedule a Demo
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-3 rounded-lg font-bold border-2 border-slate-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
