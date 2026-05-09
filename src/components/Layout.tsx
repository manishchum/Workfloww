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
import { Logo } from "./Logo";
import { LUCID_CONTENT } from "../constants";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    alert("Message sent! We'll get back to you soon.");
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-navy font-sans selection:bg-blue-500/20 selection:text-blue-400">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || location.pathname !== "/" ? "bg-navy/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo 
              className={cn(
                "w-8 h-8 transition-colors duration-300",
                !scrolled && location.pathname === "/" ? "text-blue-400" : "text-blue-500"
              )} 
            />
            <span className="text-2xl font-black tracking-tighter text-white transition-colors duration-300">
              {LUCID_CONTENT.name}
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
                          <NavigationMenuTrigger className="bg-transparent transition-colors text-slate-300 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 px-2">
                            {name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-navy border-slate-800">
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
                                    case "Mobile Learning": return "/mobile-learning";
                                    case "Communication": return "/communication";
                                    case "Retail": return "/industries/retail";
                                    case "QSR & Cloud Kitchens": return "/industries/qsr-cloud-kitchens";
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
                                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white"
                                        >
                                          <div className="text-sm font-medium leading-none text-slate-300 group-hover:text-white">{subItem}</div>
                                        </Link>
                                      ) : (
                                        <a 
                                          href="#" 
                                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white"
                                        >
                                          <div className="text-sm font-medium leading-none text-slate-300 group-hover:text-white">{subItem}</div>
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
                              className="group inline-flex h-9 w-max items-center justify-center rounded-lg px-2 py-1.5 text-sm font-medium transition-colors text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
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
            {/* CTA buttons removed as per user request to keep only About, Industries, Contact Us */}
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
              <Accordion type="single" collapsible className="w-full">
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
                                  case "Career Progression": return "/features/career-progression";
                                  case "SOP/Audits": return "/features/sop-audits";
                                  case "Rewards & Recognition": return "/features/rewards-recognition";
                                  case "Ticketing": return "/features/ticketing";
                                  case "Onboarding": return "/onboarding";
                                  case "Career Progression": return "/features/career-progression";
                                  case "Mobile Learning": return "/mobile-learning";
                                  case "Communication": return "/communication";
                                  case "Retail": return "/industries/retail";
                                  case "QSR & Cloud Kitchens": return "/industries/qsr-cloud-kitchens";
                                  case "Supermarkets": return "/industries/supermarkets-grocery";
                                  case "Delivery Partners": return "/industries/delivery-partners";
                                  case "BPO & Contact Centre": return "/industries/bpo-contact-centres";
                                  case "Insurance & Banking": return "/industries/insurance-banking";
                                   case "Hospitality": return "/industries/hospitality";
                                  case "Contact Sales":
                                  case "Contact Us":
                                  case "Contact": return "/contact";
                                  default: return null;
                                }
                              };

                              const link = getLink(subItem);

                              return link ? (
                                <Link 
                                  key={subItem}
                                  to={link}
                                  className="text-left text-lg text-muted-foreground hover:text-primary"
                                >
                                  {subItem}
                                </Link>
                              ) : (
                                <a 
                                  key={subItem} 
                                  href="#" 
                                  className="text-lg text-muted-foreground hover:text-primary"
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
                      className="text-2xl font-semibold border-b border-white/10 py-6 text-white"
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
        <DialogContent className="sm:max-w-6xl p-0 overflow-hidden border-none bg-navy text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Interested in Lucid? <br />
                <span className="text-blue-500">Send us a message</span>
              </h2>
              <p className="text-lg text-slate-400 mb-12">
                Let's change how you and your teams work.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-slate-400">manish.chum@workfloww.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone support</h4>
                    <p className="text-slate-400">+91 8527880288</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our location</h4>
                    <p className="text-slate-400 max-w-xs">
                      Gurugram, Haryana 122018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white/5 p-8 md:p-12 lg:p-16 border-l border-white/5">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="c-first" className="text-slate-300">First name</Label>
                    <Input id="c-first" className="bg-slate-900 border-slate-800 text-white" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-last" className="text-slate-300">Last name</Label>
                    <Input id="c-last" className="bg-slate-900 border-slate-800 text-white" placeholder="Last name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="c-email" className="text-slate-300">Work email</Label>
                    <Input id="c-email" className="bg-slate-900 border-slate-800 text-white" type="email" placeholder="Work email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-org" className="text-slate-300">Organisation</Label>
                    <Input id="c-org" className="bg-slate-900 border-slate-800 text-white" placeholder="Organisation" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-message" className="text-slate-300">How can we help you?</Label>
                  <Textarea id="c-message" className="bg-slate-900 border-slate-800 text-white min-h-[120px]" placeholder="Your message" required />
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

      {/* Footer */}
      <footer className="bg-navy border-t border-white/5 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <Link to="/" className="flex items-center gap-2 mb-12">
              <Logo className="w-10 h-10 text-blue-500" />
              <span className="text-4xl font-black tracking-tighter text-white">
                {LUCID_CONTENT.name}
              </span>
            </Link>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Industries</h4>
                <ul className="space-y-4">
                  {LUCID_CONTENT.footer.industries.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Features</h4>
                <ul className="space-y-4">
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
                          <Link to={link} className="text-slate-400 hover:text-blue-400 transition-colors">{item}</Link>
                        ) : (
                          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Use Case</h4>
                <ul className="space-y-4">
                  {LUCID_CONTENT.footer.useCases.map((item) => {
                    const getLink = (name: string) => {
                      switch (name) {
                        case "Onboarding": return "/onboarding";
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
                          <Link to={link} className="text-slate-400 hover:text-blue-400 transition-colors">{item}</Link>
                        ) : (
                          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Company</h4>
                <ul className="space-y-4">
                  {LUCID_CONTENT.footer.company.map((item) => (
                    <li key={item}>
                      {item === "About" ? (
                        <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</Link>
                      ) : item === "Contact" ? (
                        <Link 
                          to="/contact"
                          className="text-slate-400 hover:text-blue-400 transition-colors"
                        >
                          {item}
                        </Link>
                      ) : (
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {LUCID_CONTENT.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-blue-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
