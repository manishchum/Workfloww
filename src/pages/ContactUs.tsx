import * as React from "react";
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

export default function Contact() {
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const CAL_USERNAME = "manish-chum-ovkoyi";
  const CAL_EVENT_SLUG = "book-a-demo";

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 md:pt-32 pb-12 md:pb-24 text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >

                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8">
                  Let's close <br />
                  the <span className="text-blue-500 italic">gap together.</span>
                </h1>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
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
              className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

              <div className="relative z-10">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Apply for a 30-Day Pilot</h2>
                  <p className="text-slate-600 font-light">
                    Join the Lighthouse Programme. See ground reality in 48 hours.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">

                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700">Full Name</Label>
                    <Input id="firstName" type="text" className="bg-white border-slate-200 text-slate-900 h-12" placeholder="James Smith" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobilenumber" className="text-slate-700">Mobile Number</Label>
                    <Input id="mobilenumber" type="number" className="bg-white border-slate-200 text-slate-900 h-12" placeholder="+91 1234567890" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Work Email</Label>
                    <Input id="email" type="email" className="bg-white border-slate-200 text-slate-900 h-12" placeholder="jane@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org" className="text-slate-700">Organisation</Label>
                    <Input id="org" className="bg-white border-slate-200 text-slate-900 h-12" placeholder="Retail/FMCG" required />
                  </div>



                  <Button type="submit" className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold shadow-2xl shadow-blue-600/30 transition-colors">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      <Dialog open={isCalOpen} onOpenChange={setIsCalOpen}>
        <DialogContent className="sm:max-w-5xl p-0 overflow-hidden border-none bg-white text-slate-900">
          <div className="p-8 md:p-10">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-sans">Pick a time to talk</DialogTitle>
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
    </div>
  );
}
