import * as React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { trackEvent } from "../Analytics";
import {
  Sparkles,
  Cpu,
  Users,
  Wrench,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  Target,
  BookOpen,
  Gift,
  X,
} from "lucide-react";
import { ReactNode } from "react";
import { useLeadEmail } from "../hooks/useLeadEmail";

export default function BuilderLab() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [websiteTrap, setWebsiteTrap] = React.useState("");
  const { sendEmail, status, error } = useLeadEmail();

  const handleJoinSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !fullName.trim() ||
    !mobileNumber.trim() ||
    !email.trim() ||
    !organization.trim()
  ) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await sendEmail({
      source: "builder-labs-signup",
      name: fullName,
      email,
      phone: mobileNumber,
      org: organization,
      website_trap: websiteTrap,
    });

    trackEvent(
      "Lead",
      "Builder Labs Form Submitted",
      "Builder Labs Signup Form"
    );

    setFullName("");
    setMobileNumber("");
    setEmail("");
    setOrganization("");
    setWebsiteTrap("");
    setIsDialogOpen(false);

    alert("Thank you for joining! We'll be in touch soon.");
  } catch (err) {
    console.error("Form submit failed", err);
  }
};

  return (
    <div className="font-sans">
      <Helmet>
        <title>Builder Labs – AI Community for Everyday Creators | Workfloww.AI</title>
        <meta name="description" content="Builder Labs is a community for people who want to build with AI. Get proven workflows, templates, mentorship and peer support to solve real business problems with AI." />
        <link rel="canonical" href="https://www.workfloww.ai/builder-labs" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.25rem 3rem" }} className="relative overflow-hidden bg-white min-h-[100vh] flex items-center pt-24">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 sm:mb-8 leading-[1.1] text-center">
              Forge the future. <br className="hidden sm:block" />
              <span className="text-slate-400">Together, not alone.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              A sanctuary for those who want to build and create, regardless of
              technical background. We are a congregation of everyday creators
              moving past the hype to solve real human problems with AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
  onClick={() => {
    trackEvent(
      "Lead",
      "Join Builder Labs Click",
      "Builder Labs Hero CTA"
    );

    setIsDialogOpen(true);
  }}
  className="h-12 px-8 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20 w-full sm:w-auto justify-center mx-auto sm:mx-0"
>
  Join the Builder Labs <ArrowRight className="w-4 h-4" />
</button>
            </div>

            {/* Join Dialog Modal */}
            {isDialogOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto"
                >
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Join Builder Labs</h2>
                  <p className="text-slate-600 mb-5 sm:mb-6">Fill in your details to get started</p>

                  <form onSubmit={handleJoinSubmit} className="space-y-4 text-left">
                    {/* Anti-spam Honeypot */}
                    <div style={{ display: "none" }} aria-hidden="true">
                      <label htmlFor="b_website_trap">Do not fill this field</label>
                      <input
                        id="b_website_trap"
                        type="text"
                        value={websiteTrap}
                        onChange={(e) => setWebsiteTrap(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {[
                      { label: "Full Name", type: "text", value: fullName, setter: setFullName, placeholder: "John Doe" },
                      { label: "Mobile Number", type: "tel", value: mobileNumber, setter: setMobileNumber, placeholder: "+1 (555) 123-4567" },
                      { label: "Email", type: "email", value: email, setter: setEmail, placeholder: "john@example.com" },
                      { label: "Organization", type: "text", value: organization, setter: setOrganization, placeholder: "Your Company" },
                    ].map(({ label, type, value, setter, placeholder }) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-slate-900 mb-2">{label}</label>
                        <input
                          type={type}
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          placeholder={placeholder}
                          className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white text-left"
                        />
                      </div>
                    ))}

                    {error && <div className="text-red-600 text-sm">Error: {error}</div>}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-10 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── What is Builder Labs ────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white border-b border-slate-200">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6">
                What is Builder Labs?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                Builder Labs is a collective. It's not just another newsletter telling
                you what AI tools to buy. It is a{" "}
                <strong className="text-slate-900 font-semibold">working congregation</strong>{" "}
                of proactive people who view AI as a material to be molded to their daily tasks.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                We share proven workflows, figure out how to get consistent results
                from AI, and build templates that take you from experimental prompts
                to reliable daily solutions you can trust.
              </p>

              <ul className="space-y-3 sm:space-y-4 text-center lg:text-left">
                {[
                  "Plain-English demystification of AI tools",
                  "Collaborative problem-solving sessions",
                  "Mentorship from experienced practitioners",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              {[
                { icon: <Target className="w-6 h-6 text-slate-700" />, text: "Working with real business workflows", color: "bg-blue-100" },
                { icon: <Users className="w-6 h-6 text-slate-700" />, text: "Connecting with peers solving problems with AI", color: "bg-yellow-100" },
                { icon: <Sparkles className="w-6 h-6 text-slate-700" />, text: "Grow with others", color: "bg-emerald-100" },
                { icon: <Cpu className="w-6 h-6 text-slate-700" />, text: "Playground for curiosity", color: "bg-rose-100" },
                { icon: <Wrench className="w-6 h-6 text-slate-700" />, text: "Sandbox of your ideas", color: "bg-blue-100" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-slate-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Needed ─────────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="border-t border-slate-200">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why we had to build it
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              The AI space is incredibly noisy. We needed a quiet place focused on
              plain utility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <Card
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              title="Escaping the Hype Cycle"
              desc="Social media algorithms reward hype, not substance. We created a space optimized for deep, practical discussions, where learning and doing matter more than 'announcing'."
            />
            <Card
              icon={<Users className="w-6 h-6 text-blue-500" />}
              title="The Frustrated Creator"
              desc="Figuring out AI on your own can be isolating. When you hit a wall or can't get the AI to give you consistent results, you need peers who have successfully figured it out."
            />
            <Card
              icon={<BookOpen className="w-6 h-6 text-emerald-500" />}
              title="Too Fast to Follow"
              desc="Best practices change weekly. Our community serves as a living, easy-to-read library of what actually works in the real world today, saving you countless hours."
            />
          </div>
        </div>
      </section>

      {/* ── What You Get ───────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What You Get
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Clear, tangible value from day one. No fluff, just leverage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <FeatureItem
              icon={<Wrench className="w-6 h-6 text-blue-500" />}
              title="Curated Blueprints & Templates"
              desc="Ready-to-use AI workflows across marketing, operations, and product generation, so you never have to start staring at a blank screen."
            />
            <FeatureItem
              icon={<Users className="w-6 h-6 text-yellow-500" />}
              title="Office Hours & Expert Mentorship"
              desc="Direct access to practitioners who break down complex AI concepts into actionable, plain-English steps."
            />
            <FeatureItem
              icon={<Target className="w-6 h-6 text-emerald-500" />}
              title="Peer Feedback & Showcases"
              desc="A safe space to share your ideas, get constructive feedback, and see how others are solving business problems similar to yours."
            />
            <FeatureItem
              icon={<Gift className="w-6 h-6 text-rose-500" />}
              title="Exclusive Tool Sandbox"
              desc="Access community-vetted tools and shared environments where you can experiment risk-free without buying endless subscriptions."
            />
          </div>
        </div>
      </section>

      {/* ── Impact ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="border-t border-slate-200">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Transforming the Scene
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              How Builder Labs accelerates both the ambitious individual and the
              established team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <motion.div
              className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-600 relative z-10">
                For Solo Professionals & Creators
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 sm:mb-6 relative z-10 text-sm sm:text-base">
                We turn solo thinkers into one-person agencies. By providing access
                to battle-tested templates and a network of peers, individuals can
                automate tasks, scale their output, and launch new ideas in days,
                not months.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 font-medium relative z-10">
                {[
                  "Amplify your personal output",
                  "Step-by-step guidance",
                  "Connect with diverse talent",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-600 relative z-10">
                For Teams & Businesses
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 sm:mb-6 relative z-10 text-sm sm:text-base">
                Companies are struggling to move past AI experiments. Builder Labs
                provides your team with repeatable patterns, practical use cases,
                and the exact strategies needed to confidently deploy AI value
                across your organization.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 font-medium relative z-10">
                {[
                  "Adopt safe AI practices",
                  "Train your workforce",
                  "Transition from theory to ROI",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-yellow-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

            {/* ── Join ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-[2rem] p-8 sm:p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                You belong here.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
                Whether you are writing your very first prompt to outline an email,
                or designing a complex AI workflow for your company, there is a seat
                at the table. Bring your curiosity.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md"
                onSubmit={(e) => {
                  e.preventDefault();

                  trackEvent(
                    "Lead",
                    "Builder Labs Email CTA Click",
                    "Bottom Email Form"
                  );

                  setIsDialogOpen(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white w-full"
                />

                <button
                  type="submit"
                  className="h-12 px-5 sm:px-6 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  Join the Builder Labs
                </button>

              </form>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}


/* FEATURE ITEM */

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex gap-3 sm:gap-4"
    >
      <div className="mt-1 bg-slate-50 border border-slate-200 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
          {title}
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}


/* CARD */

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-slate-100">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
        {desc}
      </p>
    </motion.div>
  );
}