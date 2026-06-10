import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadEmail } from "../hooks/useLeadEmail";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import CalBooker from "./CalBooker";
import LinkedInLeadPopup from "./LinkedInLeadPopup";
import { Logo } from "./Logo";
import { LUCID_CONTENT } from "../constants";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Validation Functions - Production-friendly
// ---------------------------------------------------------------------------

/**
 * FIX: Stricter email regex that explicitly whitelists safe characters.
 * Previous regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/ was too permissive and
 * allowed invalid special chars like *, #, !, etc.
 *
 * This regex allows:
 *   - Local part: a-z, 0-9, . _ % + -  (covers john+sales@company.com)
 *   - Domain:     a-z, 0-9, . -
 *   - TLD:        2+ letters only
 *
 * Rejects: monalika.*#@gmail.com, test!@x.co, etc.
 */
const validateEmail = (email: string): boolean => {
  if (!email?.trim()) return false;
  const cleaned = email.trim().toLowerCase();
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(cleaned);
};

/**
 * FIX: validatePhone is unchanged — logic was already correct.
 * The bug was that the /contact page form was NOT calling this function.
 * Ensure this is imported and used in the contact page component as well.
 *
 * Accepts:
 *   - 10-digit Indian mobile starting with 6-9  (e.g. 9876543210)
 *   - With +91 prefix                           (e.g. +919876543210)
 *   - With 91  prefix                           (e.g. 919876543210)
 * Rejects: single digits like "8", short numbers, landlines starting with 1-5.
 */
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

// Suspicious content detection
const suspiciousPatterns = [
  "test",
  "asdf",
  "qwerty",
  "123456",
  "hello"
];

const hasSuspiciousContent = (text: string): boolean => {
  const lowercased = text.toLowerCase().trim();
  return suspiciousPatterns.some(pattern => lowercased.includes(pattern));
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [forceDarkHeader, setForceDarkHeader] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [cFirst, setCFirst] = React.useState("");
  const [cLast, setCLast] = React.useState("");
  const [cEmail, setCEmail] = React.useState("");
  const [cOrg, setCOrg] = React.useState("");
  const [cMessage, setCMessage] = React.useState("");
  const [cPhone, setCPhone] = React.useState("");
  const [cTrap, setCTrap] = React.useState(""); // Anti-spam honeypot
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const formLoadTime = React.useRef<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { sendEmail: sendContactEmail, status: contactStatus, error: contactError } = useLeadEmail();
  const location = useLocation();
  const navigate = useNavigate();

  const darkHeaderRoutes = [
    "/features",
    "/onboarding",
    "/mobile-learning",
    "/communication",
  ];
  const solidHeaderRoutes = ["/use-cases", "/industries"];
  const isDarkRoute = darkHeaderRoutes.some((path) => location.pathname.startsWith(path));
  const isSolidHeader = solidHeaderRoutes.some((path) => location.pathname.startsWith(path));
  const isDarkHeader =
    forceDarkHeader ||
    (!scrolled && isDarkRoute);

  const CAL_USERNAME = "manish-chum-ovkoyi";
  const CAL_EVENT_SLUG = "book-a-demo";

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleHeaderEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ dark?: boolean }>;
      setForceDarkHeader(Boolean(customEvent.detail?.dark));
    };

    window.addEventListener("lucid:header", handleHeaderEvent);
    return () => window.removeEventListener("lucid:header", handleHeaderEvent);
  }, []);

  // Reset form load time when contact modal opens
  React.useEffect(() => {
    if (isContactModalOpen) {
      formLoadTime.current = Date.now();
    }
  }, [isContactModalOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDemoModalOpen(false);
    setIsContactModalOpen(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors first
    setEmailError("");
    setPhoneError("");
    setMessageError("");

    // 1. Honeypot enforcement - reject if trap is filled
    if (cTrap.trim()) {
      console.warn("[Spam] Honeypot triggered");
      return;
    }

    // 2. Smarter timing bot protection (avoid blocking autofill users)
    const secondsTaken = (Date.now() - formLoadTime.current) / 1000;
    if (secondsTaken < 1.5 && cMessage.length < 5) {
      console.warn("[Spam] Too fast - possible bot");
      return;
    }

    // 3. Sanitize all values
    const first = cFirst.trim();
    const last = cLast.trim();
    const email = cEmail.trim().toLowerCase();
    const org = cOrg.trim();
    const message = cMessage.trim();
    const phone = cPhone.replace(/\D/g, "");

    // 4. Required field checks
    if (!first || !last || !email || !org || !message || !phone || phone.length < 10) {
      console.log("[DEBUG] Validation failed at required fields check:", { first, last, email, org, message, phone, phoneLength: phone.length });
      if (!first) setEmailError("First name is required");
      if (!last) setEmailError("Last name is required");
      if (!email) setEmailError("Email is required");
      if (!org) setEmailError("Organisation is required");
      if (!message) setMessageError("Message is required");
      if (!phone || phone.length < 10) setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    // 5. Length limits validation
    if (first.length > 50) {
      setEmailError("First name cannot exceed 50 characters");
      return;
    }
    if (last.length > 50) {
      setEmailError("Last name cannot exceed 50 characters");
      return;
    }
    if (org.length > 100) {
      setEmailError("Organisation cannot exceed 100 characters");
      return;
    }
    if (message.length > 1000) {
      setMessageError("Message cannot exceed 1000 characters");
      return;
    }

    // 6. Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address (e.g., name@company.com)");
      return;
    }

    // 7. Phone validation
    console.log("[DEBUG] Phone before validation:", { cPhone, phone, phoneLength: phone.length });
    if (!validatePhone(phone)) {
      console.error("[DEBUG] Phone validation failed. Value:", phone);
      setPhoneError("Please enter a valid 10-digit Indian mobile number (must start with 6-9)");
      return;
    }

    // 8. Suspicious content check
    if (hasSuspiciousContent(message)) {
      setMessageError("Your message contains suspicious patterns. Please try again.");
      return;
    }

    // All validation passed - now prevent duplicate submit
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // 9. Send request
      await sendContactEmail({
        source: "nav-modal",
        name: `${first} ${last}`,
        email: email,
        org: org,
        phone: phone,
        message: message,
        website_trap: cTrap,
      });

      // TODO: Backend integration - IP rate limiting
      // Implement on backend to track submissions per IP address
      // Recommended: Use Redis with sliding window or similar pattern
      // Max 5 submissions per IP per 24 hours

      // TODO: Backend integration - Cloudflare Turnstile or reCAPTCHA v3
      // Add CAPTCHA token validation before sendContactEmail

      // TODO: Backend integration - Email verification API
      // After successful submission, send verification email
      // Use SendGrid, AWS SES, or similar for verification

      // 10. Reset form on success
      setIsContactModalOpen(false);
      setIsCalOpen(true);
      setCFirst("");
      setCLast("");
      setCEmail("");
      setCOrg("");
      setCMessage("");
      setCPhone("");
      setCTrap("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/20 selection:text-blue-600">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || location.pathname !== "/" || isSolidHeader || isDarkRoute
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-[1180px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Go to Lucid home"
            onClick={() => navigate("/")}
          >
            <Logo
              className={cn(
                "w-8 h-8 transition-colors duration-300",
                !scrolled && location.pathname === "/" ? "text-blue-400" : "text-blue-500"
              )}
            />
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "text-2xl font-extrabold tracking-tighter transition-colors duration-300",
                  isDarkHeader && !isDarkRoute ? "text-white" : "text-slate-900"
                )}
              >
                {LUCID_CONTENT.name}
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-[0.3em] uppercase mt-1 transition-colors duration-300",
                  isDarkHeader && !isDarkRoute ? "text-slate-300" : "text-slate-400"
                )}
              >
                workfloww.ai
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {LUCID_CONTENT.nav.map((item: any) => {
                  const name = item.name;
                  const hasItems = item.items;

                  return (
                    <NavigationMenuItem key={name}>
                      {hasItems ? (
                        <>
                          <NavigationMenuTrigger
                            className="bg-transparent transition-colors text-slate-700 hover:text-blue-500 data-[state=open]:text-blue-500 px-2"
                            onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
                          >
                            {name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-white border-slate-200 shadow-xl">
                            <ul className="grid w-[240px] gap-1 p-3">
                              {item.items.map((subItem: string) => {
                                const getLink = (name: string) => {
                                  switch (name) {
                                    case "About": return "/about";
                                    case "Pricing": return "/pricing";
                                    case "Lucid Ready": return "/features/sales-team";
                                    case "Lucid Arsenal": return "/features/sales-tool";
                                    case "Lucid Field": return "/features/execution";
                                    case "Lucid Studio": return "/features/content-engine";
                                    case "Self-Learning": return "/features/self-learning";
                                    case "Seamless Training": return "/features/seamless-training";
                                    case "Career Progression": return "/features/career-progression";
                                    case "SOP/Audits": return "/features/sop-audits";
                                    case "Rewards & Recognition": return "/features/rewards-recognition";
                                    case "Ticketing": return "/features/ticketing";
                                    case "Onboarding": return "/onboarding";
                                    case "CEO": return "/use-cases/ceo";
                                    case "CHRO": return "/use-cases/chro";
                                    case "Sales Head": return "/use-cases/sales-head";
                                    case "Operations Head": return "/use-cases/operations-head";
                                    case "Mobile Learning": return "/mobile-learning";
                                    case "Communication": return "/communication";
                                    case "Retail": return "/industries/retail";
                                    case "QSR & Retail": return "/industries/qsr-cloud-kitchens";
                                    case "FMCG & Beverages": return "/industries/fmcg-beverages";
                                    case "Manufacturing & Industrial": return "/industries/manufacturing-industrial";
                                    case "Supermarkets": return "/industries/supermarkets-grocery";
                                    case "Delivery Partners": return "/industries/delivery-partners";
                                    case "Contact Us":
                                    case "Contact": return "/contact";
                                    default: return null;
                                  }
                                };
                                const link = getLink(subItem);
                                return (
                                  <li key={subItem}>
                                    <NavigationMenuLink
                                      render={link ? (
                                        <Link
                                          to={link}
                                          onClick={() => setOpenDropdown(null)}
                                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:text-blue-400 focus:text-blue-400"
                                        >
                                          <div className="text-sm font-medium leading-none text-slate-700">{subItem}</div>
                                        </Link>
                                      ) : (
                                        <a
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setOpenDropdown(null);
                                          }}
                                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:text-blue-400 focus:text-blue-400"
                                        >
                                          <div className="text-sm font-medium leading-none text-slate-700">{subItem}</div>
                                        </a>
                                      )}
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          render={
                            <Link
                              to={item.href || "#"}
                              className="group inline-flex h-9 w-max items-center justify-center px-2 py-1.5 text-sm font-medium transition-colors text-slate-700 hover:text-blue-500 focus:outline-none"
                            >
                              {name}
                            </Link>
                          }
                        />
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
  onClick={() => {
    trackEvent(
      "Lead",
      "book_demo_click",
      "CTA Button"
    );

    navigate("/contact");
  }}
  className="h-10 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20 transition-colors"
>
  Book a Demo
</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 transition-colors text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-4 sm:px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <Accordion className="w-full">
                {LUCID_CONTENT.nav.map((item) => {
                  const name = typeof item === 'string' ? item : item.name;
                  const hasItems = typeof item !== 'string' && item.items;

                  if (hasItems) {
                    return (
                      <AccordionItem key={name} value={name} className="border-none">
                        <AccordionTrigger className="text-2xl font-semibold py-4 hover:no-underline">
                          {name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-4 pl-4 pt-2">
                            {item.items.map((subItem) => {
                              const getLink = (name: string) => {
                                switch (name) {
                                  case "About": return "/about";
                                  case "Pricing": return "/pricing";
                                  case "Lucid Ready": return "/features/sales-team";
                                  case "Lucid Arsenal": return "/features/sales-tool";
                                  case "Lucid Field": return "/features/execution";
                                  case "Lucid Studio": return "/features/content-engine";
                                  case "Self-Learning": return "/self-learning";
                                  case "Seamless Training": return "/seamless-training";
                                  case "SOP/Audits": return "/sop-audits";
                                  case "Rewards & Recognition": return "/rewards-recognition";
                                  case "Ticketing": return "/ticketing";
                                  case "Onboarding": return "/onboarding";
                                  case "CEO": return "/use-cases/ceo";
                                  case "CHRO": return "/use-cases/chro";
                                  case "Sales Head": return "/use-cases/sales-head";
                                  case "Operations Head": return "/use-cases/operations-head";
                                  case "Career Progression": return "/career-progression";
                                  case "Mobile Learning": return "/mobile-learning";
                                  case "Communication": return "/communication";
                                  case "Retail": return "/industries/retail";
                                  case "QSR & Retail": return "/industries/qsr-cloud-kitchens";
                                  case "FMCG & Beverages": return "/industries/fmcg-beverages";
                                  case "Manufacturing & Industrial": return "/industries/manufacturing-industrial";
                                  case "Supermarkets": return "/industries/supermarkets-grocery";
                                  case "Delivery Partners": return "/industries/delivery-partners";
                                  case "BPO & Contact Centre": return "/industries/bpo-contact-centres";
                                  case "Insurance & Banking": return "/industries/insurance-banking";
                                  case "Hospitality": return "/industries/hospitality";
                                  case "Contact Sales":
                                  // case "Contact Us":
                                  // case "Contact": return "/contact";
                                  default: return null;
                                }
                              };

                              const link = getLink(subItem);

                              return link ? (
                                <Link
                                  key={subItem}
                                  to={link}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-left text-lg text-slate-600 hover:text-blue-500"
                                >
                                  {subItem}
                                </Link>
                              ) : null;
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }

                  return (
                    <Link
                      key={name}
                      to={item.href || "#"}
                      className="text-2xl font-semibold border-b border-slate-200 py-6 text-slate-900 hover:text-blue-500"
                    >
                      {name}
                    </Link>
                  );
                })}
              </Accordion>
              {/* Mobile CTA removed as per user request */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>
      <LinkedInLeadPopup />

      {/* Contact Sales Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="sm:max-w-6xl p-0 overflow-hidden border-none bg-white text-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Interested in Lucid? <br />
                <span className="text-blue-500">Send us a message</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                Let's change how you and your teams work.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-slate-600">manish.chum@workfloww.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone support</h4>
                    <p className="text-slate-600">+91 8527880288</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our location</h4>
                    <p className="text-slate-600 max-w-xs">
                      Gurugram, Haryana 122018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-slate-50 p-8 md:p-12 lg:p-16 border-l border-slate-200">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Anti-spam Honeypot field (hidden from normal users) */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <Label htmlFor="c_website_trap">Do not fill this field</Label>
                  <Input
                    id="c_website_trap"
                    type="text"
                    value={cTrap}
                    onChange={e => setCTrap(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="c-first" className="text-slate-700">First name</Label>
                    <Input id="c-first" className="bg-white border-slate-200 text-slate-900" placeholder="First name" required value={cFirst} onChange={e => setCFirst(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-last" className="text-slate-700">Last name</Label>
                    <Input id="c-last" className="bg-white border-slate-200 text-slate-900" placeholder="Last name" required value={cLast} onChange={e => setCLast(e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="c-email" className="text-slate-700">Work email</Label>
                    <Input
                      id="c-email"
                      className={cn(
                        "bg-white border-slate-200 text-slate-900",
                        emailError && "border-red-500"
                      )}
                      type="email"
                      placeholder="Work email"
                      required
                      value={cEmail}
                      onChange={e => {
                        // Trim leading spaces while typing
                        const value = e.target.value;
                        const trimmedValue = value.startsWith(" ") ? value.trimStart() : value;
                        setCEmail(trimmedValue);
                        if (emailError) setEmailError("");
                      }}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-org" className="text-slate-700">Organisation</Label>
                    <Input id="c-org" className="bg-white border-slate-200 text-slate-900" placeholder="Organisation" required value={cOrg} onChange={e => setCOrg(e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-phone" className="text-slate-700">Phone (Indian mobile number)</Label>
                  <Input
                    id="c-phone"
                    className={cn(
                      "bg-white border-slate-200 text-slate-900",
                      phoneError && "border-red-500"
                    )}
                    type="tel"
                    placeholder="+91 9876543210 or 9876543210"
                    required
                    value={cPhone}
                    onChange={e => {
                      // Allow only digits, +, spaces, and hyphens
                      const value = e.target.value;
                      const filtered = value.replace(/[^0-9+\s\-]/g, "");
                      // FIX: cap input length to prevent absurdly long numbers
                      // +91 (3) + space (1) + 10 digits = 14 chars max with formatting
                      if (filtered.replace(/\D/g, "").length <= 12) {
                        setCPhone(filtered);
                      }
                      if (phoneError) setPhoneError("");
                    }}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-message" className="text-slate-700">How can we help you?</Label>
                  <Textarea
                    id="c-message"
                    className={cn(
                      "bg-white border-slate-200 text-slate-900 min-h-[120px]",
                      messageError && "border-red-500"
                    )}
                    placeholder="Your message"
                    required
                    value={cMessage}
                    onChange={e => {
                      setCMessage(e.target.value);
                      if (messageError) setMessageError("");
                    }}
                  />
                  {messageError && (
                    <p className="text-red-500 text-sm mt-1">{messageError}</p>
                  )}
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    type="submit"
                    disabled={contactStatus === "loading" || isSubmitting}
                    className="w-full md:w-auto px-12 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactStatus === "loading" || isSubmitting ? "Sending…" : "Submit form"}
                  </Button>
                  {contactError && (
                    <p className="text-red-500 text-sm mt-2">{contactError}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isCalOpen} onOpenChange={setIsCalOpen}>
        <DialogContent className="sm:max-w-5xl p-0 overflow-hidden border-none bg-white text-slate-900">
          <div className="p-8 md:p-10">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Pick a time to talk</DialogTitle>
              <DialogDescription className="text-slate-600">
                Select a slot and we'll confirm your meeting instantly.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
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

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 text-slate-900">
        <div className="max-w-[1180px] mx-auto w-full px-4 sm:px-6">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                {LUCID_CONTENT.name}
              </span>
            </Link>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-base mb-4 text-slate-900">Industries</h4>
                <ul className="space-y-2">
                  {LUCID_CONTENT.footer.industries.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-base mb-4 text-slate-900">Features</h4>
                <ul className="space-y-2">
                  {LUCID_CONTENT.footer.features.map((item) => {
                    const getLink = (name: string) => {
                      switch (name) {
                        case "Self-Learning": return "/features/self-learning";
                        case "Seamless Training": return "/features/seamless-training";
                        case "Career Progression": return "/features/career-progression";
                        case "SOP/Audits": return "/features/sop-audits";
                        case "Rewards & Recognition": return "/features/rewards-recognition";
                        case "Ticketing": return "/features/ticketing";
                        default: return null;
                      }
                    };
                    const link = getLink(item);
                    return (
                      <li key={item}>
                        {link ? (
                          <Link to={link} className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</Link>
                        ) : (
                          <a href="#" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-base mb-4 text-slate-900">Use Case</h4>
                <ul className="space-y-2">
                  {LUCID_CONTENT.footer.useCases.map((item) => {
                    const getLink = (name: string) => {
                      switch (name) {
                        case "Onboarding": return "/onboarding";
                        case "CEO": return "/use-cases/ceo";
                        case "CHRO": return "/use-cases/chro";
                        case "Sales Head": return "/use-cases/sales-head";
                        case "Operations Head": return "/use-cases/operations-head";
                        case "Career Progression": return "/features/career-progression";
                        case "Mobile Learning": return "/mobile-learning";
                        case "Communication": return "/communication";
                        default: return null;
                      }
                    };
                    const link = getLink(item);
                    return (
                      <li key={item}>
                        {link ? (
                          <Link to={link} className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</Link>
                        ) : (
                          <a href="#" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-base mb-4 text-slate-900">Company</h4>
                <ul className="space-y-2">
                  {LUCID_CONTENT.footer.company.map((item) => (
                    <li key={item}>
                      {item === "About" ? (
                        <Link to="/about" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</Link>
                      ) : item === "Contact" ? (
                        <Link
                          to="/contact"
                          className="text-sm text-slate-600 hover:text-blue-500 transition-colors"
                        >
                          {item}
                        </Link>
                      ) : (
                        <a href="#" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">{item}</a>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Ask AI How Lucid Works - Below Company */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h5 className="font-bold text-sm mb-3 text-slate-900 uppercase">Know more about workfloww.ai</h5>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        name: "ChatGPT",
                        src: "/images/chatgpt_logo.png",
                        url: "https://chatgpt.com",
                        prompt: "Analyze https://www.workfloww.ai and explain how Workfloww.ai helps organizations adopt AI, transform business workflows, upskill teams, and achieve measurable business results. Include target customers, use cases, and key benefits.",
                        color: "bg-slate-100 hover:bg-slate-200"
                      },

                      {
                        name: "Perplexity",
                        src: "/images/perplexity_logo.png",
                        url: "https://www.perplexity.ai",
                        prompt: "Analyze https://www.workfloww.ai and explain how Workfloww.ai helps organizations adopt AI, transform business workflows, upskill teams, and achieve measurable business results. Include target customers, use cases, and key benefits.",
                        color: "bg-gray-100 hover:bg-gray-200"
                      },
                      {
                        name: "Gemini",
                        src: "/images/gemini_logo.png",
                        url: "https://gemini.google.com",
                        prompt: "Analyze https://www.workfloww.ai and explain how Workfloww.ai helps organizations adopt AI, transform business workflows, upskill teams, and achieve measurable business results. Include target customers, use cases, and key benefits.",
                        color: "bg-grey-600 hover:bg-white-700"
                      },
                      {
                        name: "Claude",
                        src: "/images/claude_logo.png",
                        url: "https://claude.ai/new",
                        prompt: "Analyze https://www.workfloww.ai and explain how Workfloww.ai helps organizations adopt AI, transform business workflows, upskill teams, and achieve measurable business results. Include target customers, use cases, and key benefits.",
                        color: "bg-amber-50 hover:bg-amber-100"
                      },
                      // {
                      //   name: "Copilot",
                      //   icon: "💫",
                      //   url: "https://www.bing.com/chat",
                      //   prompt: "Describe Lucid's approach to operational execution visibility and team training",
                      //   color: "bg-slate-700 hover:bg-slate-800"
                      // }
                    ].map((ai) => (
                      <div key={ai.name} className="relative">
                        <a
                          href={ai.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            const encodedPrompt = encodeURIComponent(ai.prompt);
                            let finalUrl = ai.url;
                            if (ai.name === "ChatGPT") {
                              finalUrl = `https://chatgpt.com/?q=${encodedPrompt}`;
                            } else if (ai.name === "Perplexity") {
                              finalUrl = `https://www.perplexity.ai/?q=${encodedPrompt}`;
                            } else if (ai.name === "Claude") {
                              finalUrl = `https://claude.ai/new?q=${encodedPrompt}`;
                            } else if (ai.name === "Gemini") {
                              // finalUrl = `https://www.google.com/search?q=${encodedPrompt}`;
                              finalUrl = `https://www.google.com/search?q=${encodedPrompt}&udm=50`;
                            } else if (ai.name === "Copilot") {
                              finalUrl = `https://copilot.microsoft.com/?q=${encodedPrompt}`;
                            }
                            window.open(finalUrl, "_blank", "noopener,noreferrer");
                          }}
                          className={`flex items-center justify-center w-10 h-10 rounded-lg ${ai.color} transition-all transform hover:scale-110 cursor-pointer`}
                          title={`Ask ${ai.name} about Lucid`}
                        >
                          <img
                            src={ai.src}
                            alt={`${ai.name} logo`}
                            className="w-6 h-6 object-contain"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {LUCID_CONTENT.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-slate-500 hover:text-blue-500">Terms of Service</a>
              <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-blue-500">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}