import * as React from "react";
import { Linkedin } from "lucide-react";
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
    linkedInSignals.some((source) => document.referrer.toLowerCase().includes(source)) ||
    urlSignals.some((value) => value && linkedInSignals.some((source) => value.toLowerCase().includes(source)))
  );
};

const validateEmail = (email: string) => /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const validatePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.startsWith("91") ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(normalized);
};

export default function LinkedInLeadPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [trap, setTrap] = React.useState("");
  const [fieldError, setFieldError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const { sendEmail, status, error } = useLeadEmail();

  React.useEffect(() => {
    if (!isLinkedInVisit() || sessionStorage.getItem("linkedinLeadSubmitted")) return;

    const timer = window.setTimeout(() => setIsOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFieldError("");

    if (trap.trim()) return;

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanOrg = org.trim();
    const cleanPhone = phone.trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanOrg) {
      setFieldError("Please fill all fields.");
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setFieldError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(cleanPhone)) {
      setFieldError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

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
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto border border-blue-100 bg-white p-0 text-slate-900 shadow-2xl shadow-blue-950/20 sm:max-w-lg">
        <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-8">
          <DialogHeader>
            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Linkedin className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Welcome from LinkedIn
            </DialogTitle>
            <DialogDescription className="text-base text-slate-600">
              Share your details and our team will send the next step.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="linkedin-website-trap">Do not fill this field</Label>
              <Input
                id="linkedin-website-trap"
                value={trap}
                onChange={(event) => setTrap(event.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin-name" className="text-slate-700">Name</Label>
              <Input
                id="linkedin-name"
                className="h-12 bg-white text-slate-900"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin-email" className="text-slate-700">Email</Label>
              <Input
                id="linkedin-email"
                className="h-12 bg-white text-slate-900"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin-phone" className="text-slate-700">Number</Label>
              <Input
                id="linkedin-phone"
                className="h-12 bg-white text-slate-900"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value.replace(/[^0-9+\s-]/g, ""))}
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin-org" className="text-slate-700">Organization</Label>
              <Input
                id="linkedin-org"
                className="h-12 bg-white text-slate-900"
                value={org}
                onChange={(event) => setOrg(event.target.value)}
                autoComplete="organization"
                required
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 w-full rounded-full bg-blue-600 text-base font-bold text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </Button>
            </div>

            {(fieldError || error || submitted) && (
              <p
                className={cn(
                  "text-sm",
                  submitted ? "text-emerald-600" : "text-red-500"
                )}
                role="status"
              >
                {submitted ? "Thank you. We have received your details." : fieldError || error}
              </p>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
