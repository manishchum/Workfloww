import * as React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CalBooker from "../components/CalBooker";
import { useLeadEmail } from "../hooks/useLeadEmail";

// ---------------------------------------------------------------------------
// Validation Functions - Production-friendly
// ---------------------------------------------------------------------------

const validateEmail = (email: string): boolean => {
  if (!email?.trim()) return false;
  const cleaned = email.trim().toLowerCase();
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleaned);
};

const validatePhone = (phone: string): boolean => {
  if (!phone?.trim()) return false;

  // Normalize input: remove all non-digits first
  const cleanedPhone = phone.replace(/\D/g, "");

  // Handle +91 and 91 country codes
  const normalized = cleanedPhone.startsWith("91")
    ? cleanedPhone.slice(2)
    : cleanedPhone;

  // Accept only valid Indian mobile numbers (10 digits, starting with 6-9)
  return /^[6-9]\d{9}$/.test(normalized);
};

export default function Contact() {
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [cpName, setCpName] = React.useState("");
  const [cpPhone, setCpPhone] = React.useState("");
  const [cpEmail, setCpEmail] = React.useState("");
  const [cpOrg, setCpOrg] = React.useState("");
  const [cpTrap, setCpTrap] = React.useState(""); // Honeypot spam trap
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formLoadTime = React.useRef<number>(Date.now());
  const { sendEmail, status: cpStatus, error: cpError } = useLeadEmail();
  const CAL_USERNAME = "manish-chum-ovkoyi";
  const CAL_EVENT_SLUG = "book-a-demo";

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors first
    setEmailError("");
    setPhoneError("");

    // 1. Honeypot enforcement - reject if trap is filled
    if (cpTrap.trim()) {
      console.warn("[Spam] Honeypot triggered");
      return;
    }

    // 2. Timing bot protection
    const secondsTaken = (Date.now() - formLoadTime.current) / 1000;
    if (secondsTaken < 1.5) {
      console.warn("[Spam] Too fast - possible bot");
      return;
    }

    // 3. Sanitize all values
    const name = cpName.trim();
    const org = cpOrg.trim();
    const email = cpEmail.trim().toLowerCase();
    const phone = cpPhone.replace(/\D/g, "");

    // 4. Required field checks
    if (!name || !email || !org || !phone || phone.length < 10) {
      if (!name) setEmailError("Full name is required");
      if (!email) setEmailError("Email is required");
      if (!org) setEmailError("Organisation is required");
      if (!phone || phone.length < 10) setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    // 5. Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address (e.g., name@company.com)");
      return;
    }

    // 6. Phone validation
    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number (must start with 6-9)");
      return;
    }

    // All validation passed - now prevent duplicate submit
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // 7. Send request
      await sendEmail({
        source: "contact-form",
        name: name,
        phone: phone,
        email: email,
        org: org,
        website_trap: cpTrap,
      });

      // Reset form on success
      setIsCalOpen(true);
      setCpName("");
      setCpPhone("");
      setCpEmail("");
      setCpOrg("");
      setCpTrap("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen text-slate-900 flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:pt-28 sm:pb-16 sm:px-6 lg:pt-20 lg:pb-20 lg:px-8">
      <Helmet>
        <title>Contact Us – Book a Demo | Lucid by Workfloww.AI</title>
        <meta name="description" content="Get in touch with the Lucid team. Apply for the 30-day Lighthouse Programme or book a demo to see how Lucid closes the gap between strategy and frontline execution." />
        <link rel="canonical" href="https://www.workfloww.ai/contact" />
      </Helmet>
      <div className="w-full flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">

            {/* Left Column: Context & Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="py-4 px-0 sm:px-4 lg:px-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-slate-900 mb-6 sm:mb-8 leading-[1.05]">
                    Let's close <br />
                    the <span className="text-blue-500 italic">gap together.</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                    Whether you're ready to deploy the Lighthouse Programme or just want to understand how Lucid fits your scale — we're ready to talk.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-8 pt-8 border-t border-slate-200"
                >
                  {/* <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                      <p className="text-slate-600">manish.chum@workfloww.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Direct Line</h4>
                      <p className="text-slate-600">+91 8527880288</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">HQ Office</h4>
                      <p className="text-slate-600 max-w-xs">
                        ILD TRADE CENTER, 912-911, <br />
                        Badshahpur Sohna Rd, Gurugram, <br />
                        Haryana 122018
                      </p>
                    </div>
                  </div> */}
                </motion.div>

                {/* Global Mission Note removed - kept content commented out intentionally */}
              </div>
            </div>

            {/* Right Column: Interaction Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white border border-slate-200 rounded-3xl sm:rounded-[3rem] px-4 sm:px-6 py-6 sm:py-8 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-8 sm:mb-12">
                    {/* <h2 className="text-3xl font-bold text-slate-900 mb-4">Apply for a 30-Day Pilot</h2>
                    <p className="text-slate-600 font-light">
                      Join the Lighthouse Programme. See ground reality in 48 hours.
                    </p> */}
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">

                    {/* Anti-spam Honeypot field (hidden from normal users) */}
                    <div style={{ display: "none" }} aria-hidden="true">
                      <Label htmlFor="website_trap">Do not fill this field</Label>
                      <Input
                        id="website_trap"
                        type="text"
                        value={cpTrap}
                        onChange={e => setCpTrap(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700 text-sm sm:text-base">Full Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        className="bg-white border-slate-200 text-slate-900 h-11 sm:h-12 text-sm sm:text-base"
                        placeholder="James Smith"
                        required
                        value={cpName}
                        onChange={e => setCpName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobilenumber" className="text-slate-700 text-sm sm:text-base">Mobile Number</Label>
                      <Input
                        id="mobilenumber"
                        type="tel"
                        className="bg-white border-slate-200 text-slate-900 h-11 sm:h-12 text-sm sm:text-base"
                        placeholder="+91 9876543210 or 9876543210"
                        required
                        value={cpPhone}
                        onChange={e => {
                          // Allow only digits, +, spaces, and hyphens
                          const value = e.target.value;
                          const filtered = value.replace(/[^0-9+\s\-]/g, "");
                          if (filtered.length <= 14) {
                            setCpPhone(filtered);
                          }
                          if (phoneError) setPhoneError("");
                        }}
                      />
                      {phoneError && (
                        <p className="text-red-500 text-sm">{phoneError}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 text-sm sm:text-base">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-white border-slate-200 text-slate-900 h-11 sm:h-12 text-sm sm:text-base"
                        placeholder="jane@company.com"
                        required
                        value={cpEmail}
                        onChange={e => {
                          // Trim leading spaces while typing
                          const value = e.target.value;
                          const trimmedValue = value.startsWith(" ") ? value.trimStart() : value;
                          setCpEmail(trimmedValue);
                          if (emailError) setEmailError("");
                        }}
                      />
                      {emailError && (
                        <p className="text-red-500 text-sm">{emailError}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="org" className="text-slate-700 text-sm sm:text-base">Organisation</Label>
                      <Input
                        id="org"
                        className="bg-white border-slate-200 text-slate-900 h-11 sm:h-12 text-sm sm:text-base"
                        placeholder="Retail/FMCG"
                        required
                        value={cpOrg}
                        onChange={e => setCpOrg(e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={cpStatus === "loading" || isSubmitting}
                      className="w-full h-14 sm:h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-bold shadow-2xl shadow-blue-600/30 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {cpStatus === "loading" || isSubmitting ? "Sending…" : "Apply Now"}
                      {(cpStatus !== "loading" && !isSubmitting) && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>

                    {cpError && (
                      <p className="text-red-500 text-sm mt-3">{cpError}</p>
                    )}
                    {cpStatus === "success" && (
                      <p className="text-green-600 text-sm mt-3">
                        ✓ Sent! We'll be in touch within 24 hours. Booking your slot now…
                      </p>
                    )}

                  </form>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      <Dialog open={isCalOpen} onOpenChange={setIsCalOpen}>
        <DialogContent className="w-[95vw] max-w-5xl p-0 overflow-hidden border-none bg-white text-slate-900">
          <div className="p-5 sm:p-8 md:p-10">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold font-sans">Pick a time to talk</DialogTitle>
              <DialogDescription className="text-slate-600 text-sm sm:text-base">
                Select a slot and we'll confirm your meeting instantly.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-5 sm:mt-6">
              <CalBooker
                eventSlug={CAL_EVENT_SLUG}
                username={CAL_USERNAME}
                onSuccess={() => {
                  setIsCalOpen(false);
                }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}