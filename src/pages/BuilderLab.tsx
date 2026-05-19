import * as React from "react";
import { motion } from "motion/react";
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
  const [websiteTrap, setWebsiteTrap] = React.useState(""); // Anti-spam trap
  const { sendEmail, status, error } = useLeadEmail();

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !mobileNumber.trim() || !email.trim() || !organization.trim()) {
      alert("Please fill in all fields");
      return;
    }

    await sendEmail({
      source: "builder-labs-signup",
      name: fullName,
      email: email,
      phone: mobileNumber,
      org: organization,
      website_trap: websiteTrap,
    });

    // Reset form and close dialog on success
    if (status === "success" || !error) {
      setFullName("");
      setMobileNumber("");
      setEmail("");
      setOrganization("");
      setWebsiteTrap("");
      setIsDialogOpen(false);
      alert("Thank you for joining! We'll be in touch soon.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 pl-45 pr-42 overflow-hidden bg-white min-h-[100vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-7xl sm:text-8xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] text-center">
              Forge the future. <br className="hidden sm:block" />
              <span className="text-slate-400">Together, not alone.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              A sanctuary for those who want to build and create, regardless of
              technical background. We are a congregation of everyday creators
              moving past the hype to solve real human problems with AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="h-12 px-8 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20 w-full sm:w-auto justify-center mx-auto sm:mx-0">
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
                  className="bg-white rounded-2xl p-8 max-w-md w-full relative"
                >
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-2xl font-bold mb-2">Join Builder Labs</h2>
                  <p className="text-slate-600 mb-6">Fill in your details to get started</p>

                  <form onSubmit={handleJoinSubmit} className="space-y-4 text-left">
                    {/* Anti-spam Honeypot field (hidden from normal users) */}
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
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white text-left"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white text-left"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white text-left"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Your Company"
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white text-left"
                      />
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm">
                        Error: {error}
                      </div>
                    )}

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

      {/* What is Builder Labs Section */}
      <section className="py-2 md:py-4 pl-45 pr-42 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Builder Labs?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Builder Labs is a collective. It's not just another newsletter
                telling you what AI tools to buy. It is a{" "}
                <strong className="text-slate-900 font-semibold">
                  working congregation
                </strong>{" "}
                of proactive people who view AI as a material to be molded to their
                daily tasks.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-center lg:text-left">
                We share proven workflows, figure out how to get consistent results
                from AI, and build templates that take you from experimental prompts
                to reliable daily solutions you can trust.
              </p>

              <ul className="space-y-4 text-center lg:text-left">
                {[
                  "Plain-English demystification of AI tools",
                  "Collaborative problem-solving sessions",
                  "Mentorship from experienced practitioners",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
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
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: <Target className="w-6 h-6 text-slate-700" />,
                  text: "Working with real business workflows",
                  color: "bg-blue-100",
                },
                {
                  icon: <Users className="w-6 h-6 text-slate-700" />,
                  text: "Connecting with peers solving problems with AI",
                  color: "bg-yellow-100",
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-slate-700" />,
                  text: "Grow with others",
                  color: "bg-emerald-100",
                },
                {
                  icon: <Cpu className="w-6 h-6 text-slate-700" />,
                  text: "Playground for curiosity",
                  color: "bg-rose-100",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-slate-700" />,
                  text: "Sandbox of your ideas",
                  color: "bg-blue-100",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-lg font-semibold text-slate-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Needed Section */}
      <section className="py-6 md:py-10 pl-45 pr-42 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why we had to build it
            </h2>
            <p className="text-slate-600 text-lg">
              The AI space is incredibly noisy. We needed a quiet place focused on
              plain utility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

      {/* What You Get Section */}
      <section className="py-6 md:py-10 pl-45 pr-42 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get
            </h2>
            <p className="text-slate-600 text-lg">
              Clear, tangible value from day one. No fluff, just leverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

      {/* Impact Section */}
      <section className="py-6 md:py-10 pl-45 pr-42 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming the Scene
            </h2>
            <p className="text-slate-600 text-lg">
              How Builder Labs accelerates both the ambitious individual and the
              established team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="border border-slate-200 rounded-3xl p-8 bg-white relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-4 text-blue-600 relative z-10">
                For Solo Professionals & Creators
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                We turn solo thinkers into one-person agencies. By providing access
                to battle-tested templates and a network of peers, individuals can
                automate tasks, scale their output, and launch new ideas in days,
                not months.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 font-medium relative z-10">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-600" /> Amplify your
                  personal output
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-600" /> Step-by-step
                  guidance
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-600" /> Connect with
                  diverse talent
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="border border-slate-200 rounded-3xl p-8 bg-white relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-4 text-yellow-600 relative z-10">
                For Teams & Businesses
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                Companies are struggling to move past AI experiments. Builder Labs
                provides your team with repeatable patterns, practical use cases,
                and the exact strategies needed to confidently deploy AI value
                across your organization.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 font-medium relative z-10">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-yellow-600" /> Adopt safe
                  AI practices
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-yellow-600" /> Train your
                  workforce
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-yellow-600" /> Transition
                  from theory to ROI
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-6 md:py-10 pl-45 pr-42 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-[2rem] p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                You belong here.
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl">
                Whether you are writing your very first prompt to outline an email,
                or designing a complex AI workflow for your company, there is a seat
                at the table. Bring your curiosity.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsDialogOpen(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-white"
                  onFocus={(e) => {
                    setEmail(e.target.value || "");
                  }}
                />
                <button
                  type="submit"
                  className="h-12 px-6 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors whitespace-nowrap"
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
      className="flex gap-4"
    >
      <div className="mt-1 bg-slate-50 border border-slate-200 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

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
      className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
