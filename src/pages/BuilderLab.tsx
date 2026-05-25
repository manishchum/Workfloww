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
  const [websiteTrap, setWebsiteTrap] = React.useState("");
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
    <div className="lh-page min-h-screen pt-24">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-white relative overflow-hidden flex items-center min-h-[85vh]" style={{ padding: "5rem 1.25rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl lh-display font-semibold tracking-tight lh-text-ink mb-6 sm:mb-8 leading-[1.1]">
              Forge the future. <br className="hidden sm:block" />
              <span className="lh-text-muted">Together, not alone.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl lh-text-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              A sanctuary for those who want to build and create, regardless of
              technical background. We are a congregation of everyday creators
              moving past the hype to solve real human problems with AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="h-12 sm:h-14 px-8 sm:px-10 rounded-full lh-bg-accent text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
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
                  className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto border lh-border-faint"
                >
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-4 right-4 lh-text-muted hover:lh-text-ink"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-xl sm:text-2xl lh-display font-semibold mb-2 lh-text-ink">Join Builder Labs</h2>
                  <p className="lh-text-muted mb-5 sm:mb-6 text-sm">Fill in your details to get started</p>

                  <form onSubmit={handleJoinSubmit} className="space-y-4 text-left">
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
                        <label className="block text-sm font-semibold lh-text-ink mb-2">{label}</label>
                        <input
                          type={type}
                          value={value}
                          onChange={(e) => setter(e.target.value)}
                          placeholder={placeholder}
                          className="w-full h-10 px-3 rounded-lg border lh-border-faint focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-shadow bg-white text-left"
                        />
                      </div>
                    ))}

                    {error && <div className="text-red-600 text-sm">Error: {error}</div>}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-10 lh-bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* ── What You Get ───────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold lh-text-ink mb-4">What You Get</h2>
            <p className="text-base sm:text-lg lh-text-muted max-w-2xl mx-auto">
              A comprehensive toolkit to help you build, learn, and grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {[
              {
                icon: Sparkles,
                title: "Creative Freedom",
                description: "Build without constraints. Experiment, fail fast, and iterate.",
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Connect with like-minded builders and makers from around the world.",
              },
              {
                icon: Wrench,
                title: "Tools & Resources",
                description: "Access to templates, guides, and best practices from experts.",
              },
              {
                icon: Zap,
                title: "Real-time Feedback",
                description: "Get instant feedback on your ideas from the community.",
              },
              {
                icon: Target,
                title: "Mentorship",
                description: "Learn from experienced practitioners and industry leaders.",
              },
              {
                icon: BookOpen,
                title: "Knowledge Base",
                description: "Curated content on AI, no-code tools, and building for impact.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border lh-border-faint bg-gradient-to-br from-lh-bg-paper to-white hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 lh-accent-text mb-4" />
                  <h3 className="text-lg font-semibold lh-text-ink mb-2">{feature.title}</h3>
                  <p className="text-sm lh-text-muted">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Impact ───────────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold lh-text-ink mb-4">The Impact</h2>
            <p className="text-base sm:text-lg lh-text-muted max-w-2xl mx-auto">
              See what our community has built and achieved
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                number: "500+",
                label: "Active Members",
                description: "A growing community of builders and creators",
              },
              {
                number: "150+",
                label: "Projects Launched",
                description: "From prototypes to production-ready solutions",
              },
              {
                number: "50+",
                label: "Success Stories",
                description: "Real-world impact and transformations",
              },
              {
                number: "10K+",
                label: "Hours Mentored",
                description: "Knowledge shared and expertise transferred",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border lh-border-faint bg-white"
              >
                <div className="text-4xl font-bold lh-accent-text mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold lh-text-ink mb-2">{stat.label}</h3>
                <p className="text-sm lh-text-muted">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="bg-white">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lh-display font-semibold lh-text-ink mb-4">Ready to Join?</h2>
            <p className="text-base sm:text-lg lh-text-muted max-w-2xl mx-auto mb-8">
              Become part of a community changing how we build with AI
            </p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="h-12 sm:h-14 px-8 sm:px-10 rounded-full lh-bg-accent text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg mx-auto"
            >
              Join Builder Labs <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
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
