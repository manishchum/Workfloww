import * as React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Mic,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PlanKey = "standard" | "advanced" | "pro";

type PlanFeature = {
  label: string;
};

type Plan = {
  key: PlanKey;
  name: string;
  accent: string;
  icon: React.ReactNode;
  description: string;
  buttonClassName: string;
  cardClassName: string;
  featured?: boolean;
  dark?: boolean;
  features: PlanFeature[];
};

type CapabilityCell =
  | { type: "check" }
  | { type: "text"; value: string }
  | { type: "none" };

type CapabilityRow = {
  label: string;
  standard: CapabilityCell;
  advanced: CapabilityCell;
  pro: CapabilityCell;
};

type CapabilityGroup = {
  title: string;
  rows: CapabilityRow[];
};

const plans: Plan[] = [
  {
    key: "standard",
    name: "Standard",
    accent: "text-emerald-500",
    icon: <Sparkles className="h-7 w-7" />,
    description:
      "Establish core alignment with fundamental assessments, baseline tools, and expert-in-the-loop tracking resources.",
    buttonClassName:
      "bg-[#4f3dfc] hover:bg-[#4030e7] text-white shadow-[0_14px_30px_rgba(79,61,252,0.28)]",
    cardClassName:
      "border-2 border-[#6a63ff] shadow-[0_8px_30px_rgba(73,82,255,0.12)]",
    features: [
      { label: "Lucid Studio Access" },
      { label: "Adaptive Assessment Engine" },
      { label: "Customized Reports & Analytics" },
      { label: "Expert-Guided Review & Sprint Verse" },
      { label: "Foundational Learning Profiling" },
    ],
  },
  {
    key: "advanced",
    name: "Advanced",
    accent: "text-[#584cff]",
    icon: <MessageSquare className="h-7 w-7" />,
    description:
      "Experience high-fidelity, interactive, real-time core dialogue simulator with voice and text capabilities.",
    buttonClassName:
      "bg-white border border-[#6a63ff] text-[#4f3dfc] hover:bg-[#f6f5ff]",
    cardClassName:
      "border border-slate-200 shadow-[0_10px_26px_rgba(15,23,42,0.08)]",
    featured: true,
    features: [
      { label: "Complete Standard Package" },
      { label: "Live Conversation Sandbox" },
      { label: "Voice & Text Chat Assistant for modules" },
      { label: "Accelerated Response Performance" },
    ],
  },
  {
    key: "pro",
    name: "Pro",
    accent: "text-slate-300",
    icon: <Mic className="h-7 w-7" />,
    description:
      "Specially designed to supercharge your sales teams, accelerate conversion rates, and fast-track high-value customer engagements.",
    buttonClassName:
      "bg-[#6a63ff] hover:bg-[#5a52f0] text-white shadow-[0_14px_30px_rgba(106,99,255,0.34)]",
    cardClassName:
      "bg-[#11172d] text-white shadow-[0_18px_38px_rgba(15,23,42,0.24)] border border-[#11172d]",
    dark: true,
    features: [
      { label: "All Advanced Features Included" },
      { label: "Revenue Acceleration Suite" },
      { label: "Sales Execution Workspace" },
      { label: "Category-Specific Sales Toolkits" },
      { label: "Uptime SLA & Dedicated Support" },
    ],
  },
];

const modules = [
  {
    pill: "Interactive Module",
    pillClassName:
      "bg-[#eef0ff] text-[#4f3dfc] border border-[#d9dcff]",
    title: "Conversational Role Play",
    description:
      "Simulate high-stakes business discussions, customer complaint handles, and objection loops using custom-crafted dialogue personas. Let trainees practice under highly realistic conditions.",
  },
  {
    pill: "Analytics Stream",
    pillClassName:
      "bg-[#e9fbf1] text-emerald-600 border border-[#ccefdc]",
    title: "Custom KPI & Progress Dashboard",
    description:
      "Measure workforce readiness with granular analytics, progress indicators, and operational insights. Track skill development, identify gaps, and optimize training impact with data-driven precision.",
  },
];

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "CREATOR STUDIO & CONTENT",
    rows: [
      {
        label: "Lucid Studio Editor",
        standard: { type: "check" },
        advanced: { type: "check" },
        pro: { type: "check" },
      },
    ],
  },
  {
    title: "ASSESSMENTS & MODULES",
    rows: [
      {
        label: "Module Assessments",
        standard: { type: "check" },
        advanced: { type: "check" },
        pro: { type: "check" },
      },
      {
        label: "Baseline Assessments",
        standard: { type: "check" },
        advanced: { type: "check" },
        pro: { type: "check" },
      },
      {
        label: "Learning Style Evaluation",
        standard: { type: "check" },
        advanced: { type: "check" },
        pro: { type: "check" },
      },
    ],
  },
  {
    title: "AI & CONVERSATIONAL TOOLS",
    rows: [
      {
        label: "Voice & Text Chat Assistant",
        standard: { type: "none" },
        advanced: { type: "check" },
        pro: { type: "check" },
      },
      {
        label: "Real-Time conversations sandbox",
        standard: { type: "none" },
        advanced: { type: "check" },
        pro: { type: "check" },
      },
      {
        label: "Expert in the loop",
        standard: { type: "none" },
        advanced: { type: "none" },
        pro: { type: "check" },
      },
    ],
  },
  {
    title: "METRICS & DASHBOARDS",
    rows: [
      {
        label: "Customized Reports & Analytics",
        standard: { type: "check"  },
        advanced: { type: "check"  },
        pro: { type: "check"  },
      },
      // {
      //   label: "Sprint Verse tracking systems",
      //   standard: { type: "text", value: "Included" },
      //   advanced: { type: "text", value: "Included" },
      //   pro: { type: "text", value: "Included" },
      // },
      {
        label: "Sales Acceleration Tools",
        standard: { type: "none" },
        advanced: { type: "none" },
        pro: { type: "check"  },
      },
      {
        label: "Integrated Task Management",
        standard: { type: "none" },
        advanced: { type: "none" },
        pro: { type: "check"  },
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is included in the Standard plan?',
    answer:
      "The Standard plan includes Lucid Studio Access, Adaptive Assessment Engine, Customized Reports & Analytics, Expert-Guided Review & Sprint Verse, and Foundational Learning Profiling.",
  },
  {
    question: "Is this platform useful for sales enablement teams?",
    answer:
      "Yes, the platform is designed to support sales enablement through guided learning, scenario-based workflows, task management, and category-wise sales tools.",
  },
  {
    question: "What are standalone modules and add-ons?",
    answer:
      "Standalone modules are optional feature sets that can be added to your deployment based on specific team or workflow needs.",
  },
  {
    question: 'How works the "Book a Demo" flow?',
    answer:
      "Use the sales CTA and we route you to a guided conversation so we can understand your use case, timing, and rollout requirements.",
  },
];



function renderCell(cell: CapabilityCell) {
  if (cell.type === "check") {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-50">
        <Check className="h-5 w-5 text-emerald-600 stroke-[3]" />
      </span>
    );
  }

  if (cell.type === "text") {
    return (
      <span className="text-[13px] font-semibold text-[#4f3dfc]">
        {cell.value}
      </span>
    );
  }

  // return (
  //   <X className="h-5 w-5 text-slate-300 stroke-[2.5]" />
  // );

  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-200 bg-red-50">
      <X className="h-5 w-5 stroke-[3] text-red-500" />
    </span>
  );
}

function FeatureList({ plan }: { plan: Plan }) {
  return (
    <div
      className={`mt-8 rounded-[24px] border-t border-white/10 pt-8 ${
        plan.dark ? "border-white/10" : "border-slate-100"
      }`}
    >
      <p
        className={`text-[13px] font-extrabold tracking-[0.18em] uppercase ${
          plan.dark ? "text-[#8791cb]" : "text-[#4f3dfc]"
        }`}
      >
        {plan.key === "standard"
          ? "Features included in Standard:"
          : plan.key === "advanced"
            ? "Everything in Standard, plus:"
            : "Everything in Advanced, plus:"}
      </p>
      <ul className="mt-5 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                plan.dark ? "bg-white/10 text-white" : "bg-emerald-50 text-emerald-500"
              }`}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span
              className={`text-[15px] leading-6 ${
                plan.dark ? "text-white" : "text-slate-700"
              }`}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanCard({ plan, onTalkToSales }: { plan: Plan; onTalkToSales: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className={`relative overflow-hidden rounded-[30px] p-8 md:p-10 ${
        plan.cardClassName
      } ${plan.dark ? "" : "bg-white"}`}
    >
      {plan.featured && (
        <div className="absolute right-6 top-6 rounded-full bg-[#4f3dfc] px-4 py-2 text-[13px] font-extrabold tracking-[0.12em] text-white shadow-lg shadow-[#4f3dfc]/25">
          RECOMMENDED
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
            plan.dark
              ? "border-white/10 bg-white/5 text-[#a6b0ff]"
              : plan.key === "standard"
                ? "border-emerald-200 bg-emerald-50 text-emerald-500"
                : "border-[#d3d0ff] bg-[#f5f3ff] text-[#5c56ff]"
          }`}
        >
          {plan.icon}
        </div>
        <div className="pt-1">
          <h3 className={`text-[30px] font-extrabold leading-none ${plan.dark ? "text-white" : "text-slate-900"}`}>
            {plan.name}
          </h3>
          <p
            className={`mt-2 text-[13px] font-extrabold tracking-[0.18em] uppercase ${
              plan.dark ? "text-[#8fa0ff]" : "text-[#4f3dfc]"
            }`}
          >
            Lucid Suite
          </p>
        </div>
      </div>

      <p
        className={`mt-8 text-[16px] leading-7 ${
          plan.dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {plan.description}
      </p>

      <div
        className={`my-8 h-px ${plan.dark ? "bg-white/10" : "bg-slate-100"}`}
      />

      <div
        className={`text-[28px] font-extrabold leading-none ${
          plan.dark ? "text-white" : "text-slate-900"
        }`}
      >
        {/* Custom Enterprise Solution */}
      </div>
      <p className={`mt-2 text-[15px] ${plan.dark ? "text-slate-300" : "text-slate-600"}`}>
        {/* Contact us for standard seat-based quotation */}
      </p>

      <div className={`my-8 h-px ${plan.dark ? "bg-white/10" : "bg-slate-100"}`} />

      <Button
        onClick={onTalkToSales}
        className={`h-14 w-full rounded-2xl text-[16px] font-extrabold ${plan.buttonClassName}`}
      >
        <span className="flex items-center gap-2">
          Talk to Sales
          <Phone className="h-4 w-4" />
        </span>
      </Button>

      <FeatureList plan={plan} />
    </motion.article>
  );
}

export default function Pricing() {
  const navigate = useNavigate();

  const onTalkToSales = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="px-4 pb-20 pt-28 sm:px-6 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-[#d8d7ff] bg-[#f4f3ff] px-4 py-2 text-[13px] font-extrabold tracking-[0.34em] text-[#4f3dfc]"
          >
            CAPABILITY ROADMAPS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[64px]"
          >
            Choose the plan aligned with your organizational goals.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-slate-500"
          >
            Explore how Lucid models, Studio assessments, and roleplay workflows integrate to empower your workforce.
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto grid max-w-[1360px] gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} onTalkToSales={onTalkToSales} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#d8d7ff] bg-[#f4f3ff] px-4 py-2 text-[13px] font-extrabold tracking-[0.34em] text-[#4f3dfc]">
            STANDALONE MODULES & ADD-ONS
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Modular Scaling Features
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[18px] leading-8 text-slate-500">
            Ready to construct singular feature setups? These specific high-fidelity modules can be added into your platform deployment.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1110px] gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4 }}
              className="rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
            >
              <span
                className={`inline-flex rounded-full px-4 py-2 text-[14px] font-bold ${module.pillClassName}`}
              >
                {module.pill}
              </span>
              <h3 className="mt-8 text-3xl font-black tracking-tight text-slate-950">
                {module.title}
              </h3>
              <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-500">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Full Capability Breakdown
          </h2>
          <p className="mt-4 text-[18px] leading-8 text-slate-500">
            Compare deep specifications and module parameters item by item
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1320px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
          <div className="overflow-x-auto">
            <table className="min-w-[1180px] w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="w-[33%] px-6 py-8 text-left text-[15px] font-bold text-slate-500">
                    Key Platform Features
                  </th>
                  <th className="px-6 py-8 text-center">
                    <div className="text-[28px] font-extrabold leading-none text-[#4f3dfc]">
                      Standard
                    </div>
                    <div className="mt-2 text-[13px] text-slate-500">
                      Fundamental assessments
                    </div>
                    <button
                      type="button"
                      onClick={onTalkToSales}
                      className="mt-2 text-[13px] font-bold text-[#4f3dfc] hover:underline"
                    >
                      Talk to Sales
                    </button>
                  </th>
                  <th className="relative bg-[#f3efff] px-6 py-8 text-center">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4f3dfc] px-3 py-1 text-[12px] font-black tracking-[0.14em] text-white">
                      
                    </span>
                    <div className="text-[28px] font-extrabold leading-none text-slate-900">
                      Advanced
                    </div>
                    <div className="mt-2 text-[13px] text-slate-500">
                      + Interactive Conversational Agent
                    </div>
                    <button
                      type="button"
                      onClick={onTalkToSales}
                      className="mt-2 text-[13px] font-bold text-[#4f3dfc] hover:underline"
                    >
                      Talk to Sales
                    </button>
                  </th>
                  <th className="px-6 py-8 text-center">
                    <div className="text-[28px] font-extrabold leading-none text-slate-900">
                      Pro
                    </div>
                    <div className="mt-2 text-[13px] text-slate-500">
                      + Enterprise Sales Acceleration
                    </div>
                    <button
                      type="button"
                      onClick={onTalkToSales}
                      className="mt-2 text-[13px] font-bold text-[#4f3dfc] hover:underline"
                    >
                      Talk to Sales
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {capabilityGroups.map((group) => (
                  <React.Fragment key={group.title}>
                    <tr className="border-b border-slate-200 bg-white/95">
                      <td colSpan={4} className="px-6 py-4 text-[13px] font-black tracking-[0.18em] text-[#4f3dfc]">
                        {group.title}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-b border-slate-200 last:border-b-0">
                        <td className="px-6 py-5 text-[14px] font-medium text-slate-900">
                          <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-slate-400">
                            <CircleHelp className="h-3 w-3" />
                          </span>
                          {row.label}
                        </td>
                        <td className="px-6 py-5 text-center">
                          {renderCell(row.standard)}
                        </td>
                        <td className="bg-[#f3efff] px-6 py-5 text-center">
                          {renderCell(row.advanced)}
                        </td>
                        <td className="px-6 py-5 text-center">
                          {renderCell(row.pro)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8d7ff] bg-[#f4f3ff] px-4 py-2 text-[13px] font-extrabold tracking-[0.18em] text-[#4f3dfc]">
            <CircleHelp className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Frequently Answered Inquiries
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[18px] leading-8 text-slate-500">
            Clear answers to help you choose the right plan with confidence.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1050px]">
          <Accordion type="single" collapsible className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-b border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-7 text-left text-[20px] font-bold text-slate-900 hover:no-underline">
                  <span className="pr-6">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-7 pt-0 text-[16px] leading-8 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-slate-950 px-8 py-12 text-center text-white shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
          <p className="text-[13px] font-black tracking-[0.24em] text-[#8fa0ff]">
            READY TO TALK?
          </p>
          <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            Let’s shape the right enterprise plan for your rollout.
          </h3>
          {/* <p className="mx-auto mt-4 max-w-3xl text-[17px] leading-8 text-slate-300">
            We can map features, module tiers, and rollout support to the exact shape of your organization.
          </p> */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={onTalkToSales}
              className="h-12 rounded-2xl bg-[#6a63ff] px-8 text-[15px] font-extrabold text-white hover:bg-[#5a52f0]"
            >
              Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              variant="outline"
              className="h-12 rounded-2xl border-white/20 bg-white/5 px-8 text-[15px] font-extrabold text-white hover:bg-white/10 hover:text-white"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
