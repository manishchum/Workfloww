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
import { Logo } from "./Logo";
import { LUCID_CONTENT } from "../constants";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [forceDarkHeader, setForceDarkHeader] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const darkHeaderRoutes = [
    "/features",
    "/onboarding",
    "/mobile-learning",
    "/communication",
  ];
  const solidHeaderRoutes = ["/use-cases", "/industries"];
  const isSolidHeader = solidHeaderRoutes.some((path) => location.pathname.startsWith(path));
  const isDarkHeader =
    forceDarkHeader ||
    (!scrolled && darkHeaderRoutes.some((path) => location.pathname.startsWith(path)));

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

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo request submitted! Our team will contact you shortly.");
    setIsDemoModalOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactModalOpen(false);
    setIsCalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/20 selection:text-blue-600">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || location.pathname !== "/" || isSolidHeader
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
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
                  isDarkHeader ? "text-white" : "text-slate-900"
                )}
              >
                {LUCID_CONTENT.name}
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-[0.3em] uppercase mt-1 transition-colors duration-300",
                  isDarkHeader ? "text-slate-300" : "text-slate-400"
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
                          <NavigationMenuTrigger className="bg-transparent transition-colors text-slate-700 hover:text-blue-500 data-[state=open]:text-blue-500 px-2">
                            {name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-white border-slate-200 shadow-xl">
                            <ul className="grid w-[240px] gap-1 p-3">
                              {item.items.map((subItem: string) => {
                                // Keep existing link logic
                                const getLink = (name: string) => {
                                  switch (name) {
                                    case "About": return "/about";
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
                                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:text-blue-400 focus:text-blue-400"
                                        >
                                          <div className="text-sm font-medium leading-none text-slate-700">{subItem}</div>
                                        </Link>
                                      ) : (
                                        <a
                                          href="#"
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
            <Button onClick={() => navigate('/contact')} className="h-10 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20 transition-colors">
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
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
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
                                  case "Self-Learning": return "/features/self-learning";
                                  case "Seamless Training": return "/features/seamless-training";
                                  case "SOP/Audits": return "/features/sop-audits";
                                  case "Rewards & Recognition": return "/features/rewards-recognition";
                                  case "Ticketing": return "/features/ticketing";
                                  case "Onboarding": return "/onboarding";
                                  case "CEO": return "/use-cases/ceo";
                                  case "CHRO": return "/use-cases/chro";
                                  case "Sales Head": return "/use-cases/sales-head";
                                  case "Operations Head": return "/use-cases/operations-head";
                                  case "Career Progression": return "/features/career-progression";
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
                                  className="text-left text-lg text-slate-600 hover:text-blue-500"
                                >
                                  {subItem}
                                </Link>
                              ) : (
                                <a
                                  key={subItem}
                                  href="#"
                                  className="text-lg text-slate-600 hover:text-blue-500"
                                >
                                  {subItem}
                                </a>
                              );
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="c-first" className="text-slate-700">First name</Label>
                    <Input id="c-first" className="bg-white border-slate-200 text-slate-900" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-last" className="text-slate-700">Last name</Label>
                    <Input id="c-last" className="bg-white border-slate-200 text-slate-900" placeholder="Last name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="c-email" className="text-slate-700">Work email</Label>
                    <Input id="c-email" className="bg-white border-slate-200 text-slate-900" type="email" placeholder="Work email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-org" className="text-slate-700">Organisation</Label>
                    <Input id="c-org" className="bg-white border-slate-200 text-slate-900" placeholder="Organisation" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-message" className="text-slate-700">How can we help you?</Label>
                  <Textarea id="c-message" className="bg-white border-slate-200 text-slate-900 min-h-[120px]" placeholder="Your message" required />
                </div>

                <div className="space-y-4 pt-4">
                  <Button type="submit" className="w-full md:w-auto px-12 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20">
                    Submit form
                  </Button>
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
                Select a slot and we’ll confirm your meeting instantly.
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
        <div className="container mx-auto px-6">
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
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {LUCID_CONTENT.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-slate-500 hover:text-blue-500">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
