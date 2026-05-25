import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useLeadEmail } from "../hooks/useLeadEmail";

// Inject DM Sans font once
if (typeof document !== "undefined") {
  const linkId = "dm-sans-font";
  if (!document.getElementById(linkId)) {
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,800&display=swap";
    document.head.appendChild(link);
  }
}

const linkedInSignals = ["linkedin", "lnkd.in"];

const isLinkedInVisit = () => {
  const params = new URLSearchParams(window.location.search);
  const urlSignals = [
    params.get("utm_source"),
    params.get("source"),
    params.get("ref"),
    params.get("from"),
    params.get("lead_source"),
  ];

  return (
    linkedInSignals.some((source) =>
      document.referrer.toLowerCase().includes(source)
    ) ||
    urlSignals.some(
      (value) =>
        value &&
        linkedInSignals.some((source) =>
          value.toLowerCase().includes(source)
        )
    )
  );
};

const validateEmail = (email: string) =>
  /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const validatePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.startsWith("91") ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(normalized);
};

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  org?: string;
};

export default function LinkedInLeadPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [trap, setTrap] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const [submitted, setSubmitted] = React.useState(false);
  const { sendEmail, status, error } = useLeadEmail();

  React.useEffect(() => {
    if (
      !isLinkedInVisit() ||
      sessionStorage.getItem("linkedinLeadSubmitted")
    )
      return;

    const timer = window.setTimeout(() => setIsOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  // Per-field live validation on blur
  const handleBlurEmail = () => {
    if (email.trim() && !validateEmail(email.trim().toLowerCase())) {
      setFieldErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setFieldErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleBlurPhone = () => {
    if (phone.trim() && !validatePhone(phone.trim())) {
      setFieldErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit Indian mobile number.",
      }));
    } else {
      setFieldErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (trap.trim()) return;

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanOrg = org.trim();
    const cleanPhone = phone.trim();

    const errors: FieldErrors = {};

    if (!cleanName) errors.name = "Name is required.";
    if (!cleanEmail) {
      errors.email = "Email is required.";
    } else if (!validateEmail(cleanEmail)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!cleanPhone) {
      errors.phone = "Phone number is required.";
    } else if (!validatePhone(cleanPhone)) {
      errors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }
    if (!cleanOrg) errors.org = "Organization is required.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

    const result = await sendEmail({
      source: "linkedin-post-popup",
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone.replace(/\D/g, ""),
      org: cleanOrg,
      message: "Lead captured from the LinkedIn post popup.",
      website_trap: trap,
    });

    if (!result) return;

    sessionStorage.setItem("linkedinLeadSubmitted", "true");
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setOrg("");
    setTrap("");
    window.setTimeout(() => setIsOpen(false), 1400);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-h-[calc(100vh-2rem)] overflow-y-auto border border-blue-100 bg-white p-0 shadow-2xl shadow-blue-950/20 sm:max-w-lg"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-8">
          <DialogHeader>
            {/* Workfloww logo */}
            <div className="mb-3 flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Workfloww.ai logo"
                className="h-11 w-auto object-contain"
                draggable={false}
              />
              <span className="text-lg font-bold text-black" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                workfloww.ai
              </span>
            </div>

            <DialogTitle
              className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 800 }}
            >
              Thanks For Your Interest In AI Mixer Event.
            </DialogTitle>
            <DialogDescription
              className="text-base text-slate-600"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Please Share Your Details Our Team Will Reach Out And Share The Next Step.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4" noValidate>
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="linkedin-website-trap">Do not fill this field</Label>
              <Input
                id="linkedin-website-trap"
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name */}
            <div className="space-y-1">
              <Label htmlFor="linkedin-name" className="text-slate-700">
                Name
              </Label>
              <Input
                id="linkedin-name"
                className={cn(
                  "h-12 bg-white text-slate-900",
                  fieldErrors.name && "border-red-500 focus-visible:ring-red-400"
                )}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name)
                    setFieldErrors((prev) => ({ ...prev, name: undefined }));
                }}
                autoComplete="name"
              />
              {fieldErrors.name && (
                <p className="text-xs text-red-500">{fieldErrors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="linkedin-email" className="text-slate-700">
                Email
              </Label>
              <Input
                id="linkedin-email"
                className={cn(
                  "h-12 bg-white text-slate-900",
                  fieldErrors.email && "border-red-500 focus-visible:ring-red-400"
                )}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email)
                    setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }}
                onBlur={handleBlurEmail}
                autoComplete="email"
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-500">{fieldErrors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="linkedin-phone" className="text-slate-700">
                Number
              </Label>
              <Input
                id="linkedin-phone"
                className={cn(
                  "h-12 bg-white text-slate-900",
                  fieldErrors.phone && "border-red-500 focus-visible:ring-red-400"
                )}
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/[^0-9+\s-]/g, ""));
                  if (fieldErrors.phone)
                    setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                onBlur={handleBlurPhone}
                autoComplete="tel"
                inputMode="tel"
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-500">{fieldErrors.phone}</p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-1">
              <Label htmlFor="linkedin-org" className="text-slate-700">
                Organization
              </Label>
              <Input
                id="linkedin-org"
                className={cn(
                  "h-12 bg-white text-slate-900",
                  fieldErrors.org && "border-red-500 focus-visible:ring-red-400"
                )}
                value={org}
                onChange={(e) => {
                  setOrg(e.target.value);
                  if (fieldErrors.org)
                    setFieldErrors((prev) => ({ ...prev, org: undefined }));
                }}
                autoComplete="organization"
              />
              {fieldErrors.org && (
                <p className="text-xs text-red-500">{fieldErrors.org}</p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 w-full rounded-full bg-blue-600 text-base font-bold text-white hover:bg-blue-700 disabled:opacity-60"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>
            </div>

            {(error || submitted) && (
              <p
                className={cn(
                  "text-sm",
                  submitted ? "text-emerald-600" : "text-red-500"
                )}
                role="status"
              >
                {submitted
                  ? "Thank you. We have received your details."
                  : error}
              </p>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}