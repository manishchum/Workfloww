import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { openCheckout } from "../lib/ai-metamind/razorpay";
import { Loader2 } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

const validateEmail = (email: string) =>
  /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const validatePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  // Simple validation for general numbers, at least 10 digits
  return digits.length >= 10;
};

export default function RegistrationModal({
  isOpen,
  onClose,
  source,
}: RegistrationModalProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");

  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});
  const [isLoading, setIsLoading] = React.useState(false);

  // Reset fields when modal is opened/closed
  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setDesignation("");
      setCompanyName("");
      setErrors({});
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email.trim())) {
      newErrors.email = "Invalid email format";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone.trim())) {
      newErrors.phone = "Must be at least 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await openCheckout({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        designation: designation.trim() || undefined,
        companyName: companyName.trim() || undefined,
        source: source,
      });
      // Close modal on successful checkout trigger
      onClose();
    } catch (err) {
      console.error("Checkout initiation failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="font-dm-sans max-h-[calc(100vh-2rem)] overflow-y-auto border border-white/10 bg-[#0a0f1d] text-white p-6 shadow-2xl shadow-black/50 sm:max-w-md rounded-2xl"
        showCloseButton={!isLoading}
      >
        <DialogHeader className="space-y-4">
          {/* Logo / Header */}
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="AI MetaMind logo"
              width={36}
              height={36}
              className="flex-shrink-0 w-9 h-9 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white text-base leading-tight tracking-tight">
                AI MetaMind
              </span>
              <span className="text-white/35 text-[9px] font-bold tracking-widest uppercase -mt-0.5">
                BY WORKFLOWW.AI
              </span>
            </div>
          </div>

          <div className="space-y-1.5 pt-2">
            <span className="text-[#8b7cff] text-[11px] uppercase tracking-widest font-bold block">
              REGISTRATION
            </span>
            <DialogTitle className="font-dm-sans text-3xl font-extrabold tracking-tight text-white leading-none">
              Reserve Your <span className="text-[#6357d4]">Seat</span>
            </DialogTitle>
            <DialogDescription className="text-sm text-white/50 pt-1 leading-relaxed">
              Drop your details and our team will reach out with the next steps
              for the upcoming batch.
            </DialogDescription>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="reg-name" className="text-white/80 font-medium">
              Name <span className="text-[#8b7cff]">*</span>
            </Label>
            <Input
              id="reg-name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              disabled={isLoading}
              className="bg-[#111827] border-white/5 text-white placeholder:text-white/20 h-11 px-4 focus-visible:border-[#6357d4] focus-visible:ring-[#6357d4]/20 rounded-xl"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="reg-email" className="text-white/80 font-medium">
              Email <span className="text-[#8b7cff]">*</span>
            </Label>
            <Input
              id="reg-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              disabled={isLoading}
              className="bg-[#111827] border-white/5 text-white placeholder:text-white/20 h-11 px-4 focus-visible:border-[#6357d4] focus-visible:ring-[#6357d4]/20 rounded-xl"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="reg-phone" className="text-white/80 font-medium">
              Number <span className="text-[#8b7cff]">*</span>
            </Label>
            <Input
              id="reg-phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              disabled={isLoading}
              className="bg-[#111827] border-white/5 text-white placeholder:text-white/20 h-11 px-4 focus-visible:border-[#6357d4] focus-visible:ring-[#6357d4]/20 rounded-xl"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Designation Field */}
          <div className="space-y-2">
            <Label htmlFor="reg-designation" className="text-white/80 font-medium">
              Designation
            </Label>
            <Input
              id="reg-designation"
              type="text"
              placeholder="e.g. HR Manager"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              disabled={isLoading}
              className="bg-[#111827] border-white/5 text-white placeholder:text-white/20 h-11 px-4 focus-visible:border-[#6357d4] focus-visible:ring-[#6357d4]/20 rounded-xl"
            />
          </div>

          {/* Company Name Field */}
          <div className="space-y-2">
            <Label htmlFor="reg-company" className="text-white/80 font-medium">
              Company Name
            </Label>
            <Input
              id="reg-company"
              type="text"
              placeholder="e.g. Acme Pvt. Ltd."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              disabled={isLoading}
              className="bg-[#111827] border-white/5 text-white placeholder:text-white/20 h-11 px-4 focus-visible:border-[#6357d4] focus-visible:ring-[#6357d4]/20 rounded-xl"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] hover:from-[#4338ca] hover:to-[#4f46e5] text-white font-semibold rounded-full shadow-lg transition-all duration-250 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>

          {/* Footer branding */}
          <div className="text-center text-[10px] text-white/25 pt-2 tracking-wide font-medium">
            AI MetaMind · by workfloww.ai
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
