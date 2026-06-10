import * as React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../Analytics";


const SalesTeam = () => {
  const [activeAssessmentTab, setActiveAssessmentTab] = React.useState("mcq");
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white pt-24">
      {/* ===== 1. HERO SECTION ===== */}
     <section style={{ padding: "9.5rem 1.25rem 11rem" }} className="relative w-full flex items-center overflow-hidden bg-white">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div className="flex flex-col justify-center gap-8 max-w-2xl">
        <h1
          className="text-4xl md:text-6xl font-black lh-text-ink leading-[0.95]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Build a Team That's Ready Before They Hit the Field
        </h1>

        <p className="text-base sm:text-lg md:text-xl lh-text-muted leading-relaxed">
          Stop hoping your frontline knows what to do. Lucid builds
          knowledge, scores readiness, and tells you exactly who is ready —
          before your team starts actual selling.
        </p>

        <Button
  onClick={() => {
    trackEvent(
      "Lead",
      "Book Demo Click",
      "Website Button"
    );

    navigate("/contact");
  }}
  className="w-fit px-8 py-6 text-base font-semibold rounded-xl"
  style={{ backgroundColor: "#5B50E8" }}
>
  Book Demo
</Button>
      </div>

      {/* Right */}
      <div className="flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-4xl">
          <img
            src="/images/salesteam1.png"
            alt="Lucid Interface"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== ONGOING SALES SECTION ===== */}
<section style={{ padding: "2.5rem 1.25rem" }} className="w-full bg-white">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <div className="inline-block w-fit">
          <p className="text-xs font-bold tracking-widest lh-accent-text uppercase">
            Ongoing Sales Training
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black lh-text-ink leading-[1.1]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Training That Keeps Up With Your Business. Not the Other Way Around.
        </h2>

        <p className="text-base md:text-lg lh-text-muted leading-relaxed">
          Product updates, process changes, new market entries — deployed as
          WhatsApp sprints the moment they matter, not at the next training day.
          Lucid keeps every rep current, continuously, without pulling them off
          the field.
        </p>

        <ul className="flex flex-col gap-5 pt-2">
          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Deploy training updates in hours — not weeks
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Role-specific content for new joiners, experienced reps, team leads
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Spaced repetition keeps knowledge fresh between sprints
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Every update tracked — who received it, who completed it, who didn't
            </span>
          </li>
        </ul>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-xl">
          <img
            src="/images/salesteam2.png"
            alt="Training Calendar"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ===== 3. STAT STRIP ===== */}
      <section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="w-full">
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Stat 1 */}
            <div className="bg-white p-6 rounded-lg border lh-border-faint text-center">
              <p className="text-3xl md:text-4xl font-black" style={{ color: "#5B50E8" }}>
                91%
              </p>
              <p className="lh-text-muted text-sm font-semibold mt-2">Sprint Completion Rate</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 rounded-lg border lh-border-faint text-center">
              <p className="text-3xl md:text-4xl font-black" style={{ color: "#1D9E75" }}>
                3.2x
              </p>
              <p className="lh-text-muted text-sm font-semibold mt-2">Knowledge Retention vs Classroom</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 rounded-lg border lh-border-faint text-center">
              <p className="text-3xl md:text-4xl font-black" style={{ color: "#EF9F27" }}>
                72 hrs
              </p>
              <p className="lh-text-muted text-sm font-semibold mt-2">Avg Time to Field Readiness</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-6 rounded-lg border lh-border-faint text-center">
              <p className="text-3xl md:text-4xl font-black" style={{ color: "#D85A30" }}>
                ↓68%
              </p>
              <p className="lh-text-muted text-sm font-semibold mt-2">Drop in Onboarding Errors</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. SKILL ASSESSMENTS SECTION ===== */}
      <section style={{ padding: "2.5rem 1.25rem" }} className="w-full bg-white">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <div className="inline-block w-fit">
          <p className="text-xs font-bold tracking-widest lh-accent-text uppercase">
            Skill Assessments
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black lh-text-ink leading-[1.1]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Measure What They Know. Not Just What They Opened.
        </h2>

        <p className="text-base md:text-lg lh-text-muted leading-relaxed">
          Lucid's assessment engine goes beyond completion ticks. Test
          knowledge through MCQs, real-world case studies, and scenario
          challenges — before and after every sprint. See the actual delta.
          Coach the actual gap.
        </p>

        <ul className="flex flex-col gap-5 pt-2">
          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              MCQ assessments auto-generated from your content
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Case study scenarios built around your real sales situations
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Pre and post sprint scoring — see knowledge delta clearly
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              KPIs tracked per rep, per team, per region in real time
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Weak areas flagged automatically for targeted re-sprints
            </span>
          </li>
        </ul>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-xl">
          <img
            src="/images/salesteam3.png"
            alt="Skill Assessment"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== 5. ONBOARDING SPRINTS SECTION ===== */}
<section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="w-full">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <div className="inline-block w-fit">
          <p className="text-xs font-bold tracking-widest lh-accent-text uppercase">
            Onboarding Sprints
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black lh-text-ink leading-[1.1]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          New Joiners Ready in Days, Not Weeks
        </h2>

        <p className="text-base md:text-lg lh-text-muted leading-relaxed">
          Deploy structured onboarding sprints the moment someone joins.
          No classroom. No LMS login. Just a message that gets them ready
          for their first customer interaction.
        </p>

        <ul className="flex flex-col gap-5 pt-2">
          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Role-specific sprint sequences from day one
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Progress tracked automatically — no follow-up calls needed
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Managers see who's completed, who's stuck, in real time
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Multilingual — train in Hindi, Tamil, Bengali and more
            </span>
          </li>
        </ul>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-xl">
          <img
            src="/images/salesteam4.png"
            alt="Onboarding Sprints"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== 6. AI VOICE AGENTS SECTION ===== */}
<section style={{ padding: "2.5rem 1.25rem" }} className="w-full bg-white">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left: Image */}
      <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
        <div className="w-full max-w-xl">
          <img
            src="/images/salesteam5.png"
            alt="AI Voice Agent"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="flex flex-col gap-6 order-1 lg:order-2">

        <div className="inline-block w-fit">
          <p className="text-xs font-bold tracking-widest lh-accent-text uppercase">
            AI Voice Agents
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black lh-text-ink leading-[1.1]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          A Coach in Their Pocket. Available 24/7.
        </h2>

        <p className="text-base md:text-lg lh-text-muted leading-relaxed">
          Your best sales manager can't be everywhere. Lucid's AI Voice
          Agent can. Field reps get instant answers to product queries,
          objection guidance, and process help — mid-visit, in their own
          language. No waiting. No escalation.
        </p>

        <ul className="flex flex-col gap-5 pt-2">
          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Instant answers to product, pricing, and process questions
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Objection scripts served in real time during customer visits
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Multilingual voice and text support across regions
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Every query logged — surfaces your team's biggest knowledge gaps
            </span>
          </li>
        </ul>

      </div>

    </div>
  </div>
</section>
      {/* ===== 7. AI ROLEPLAY SECTION ===== */}
<section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="w-full">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <div className="inline-block w-fit">
          <p className="text-xs font-bold tracking-widest lh-accent-text uppercase">
            AI Roleplay
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black lh-text-ink leading-[1.1]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Practice the Pitch Before They Face the Customer
        </h2>

        <p className="text-base md:text-lg lh-text-muted leading-relaxed">
          Lucid's AI roleplay engine puts your rep in a real sales
          conversation before they step into the field. They face objections,
          tough questions, and pressure scenarios — safely, as many times as
          they need.
        </p>

        <ul className="flex flex-col gap-5 pt-2">
          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Vertical-specific scenarios — insurance, QSR, pharma, FMCG
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              AI scores the response and gives instant feedback
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Managers see who passed and who needs more practice
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Scales across 1,000 reps without manager bandwidth
            </span>
          </li>
        </ul>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center lg:justify-end items-center">
        <div className="w-full max-w-xl">
          <img
            src="/images/salesteam6.png"
            alt="AI Roleplay"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== 8. SALES KPI MANAGEMENT SECTION ===== */}
<section style={{ padding: "2.5rem 1.25rem" }} className="w-full bg-white">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left Image */}
      <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
        <div className="w-full max-w-xl">
          <img
            src="/images/salesteam7.png"
            alt="Sales KPI Dashboard"
            className="w-full h-auto rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </div>

      {/* Right Text */}
      <div className="flex flex-col gap-6 order-1 lg:order-2">
        <div className="inline-block w-fit">
          <p className="text-xs font-bold tracking-widest lh-accent-text uppercase">
            Sales KPI Management
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black lh-text-ink leading-[1.1]"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Map Every Sprint to a Number Your Leadership Cares About
        </h2>

        <p className="text-base md:text-lg lh-text-muted leading-relaxed">
          Conversion rate, call count, deal size, revenue per rep — every
          sprint in Lucid is mapped to a KPI. Reps see their targets.
          Managers see progress. Leadership sees ROI. Learning stops being
          a cost centre and starts becoming a growth lever.
        </p>

        <ul className="flex flex-col gap-5 pt-2">
          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Map each sprint to a specific sales KPI
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Reps see personal targets alongside sprint progress
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Managers get team KPI dashboards updated in real time
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Leadership sees ROI in revenue terms — not completion %
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span style={{ color: "#5B50E8" }} className="font-bold text-lg">✓</span>
            <span className="lh-text-ink">
              Auto-flag reps whose KPIs lag behind sprint completion
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
     {/* ===== DARK STATS STRIP ===== */}
<section
  style={{ padding: "2.5rem 1.25rem", backgroundColor: "#0f1117" }}
  className="w-full"
>
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">

      {/* Stat 1 */}
      <div className="text-center flex flex-col items-center">
        <p
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-none"
          style={{ color: "#5B50E8" }}
        >
          3–4x
        </p>

        <p className="text-white text-base md:text-lg font-semibold mt-4 max-w-[260px] leading-relaxed">
          Higher completion vs traditional LMS
        </p>
      </div>

      {/* Stat 2 */}
      <div className="text-center flex flex-col items-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none">
          72hrs
        </p>

        <p className="text-white text-base md:text-lg font-semibold mt-4 max-w-[260px] leading-relaxed">
          Average new joiner goes field-ready
        </p>
      </div>

      {/* Stat 3 */}
      <div className="text-center flex flex-col items-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none">
          91%
        </p>

        <p className="text-white text-base md:text-lg font-semibold mt-4 max-w-[260px] leading-relaxed">
          Sprint completion rate across enterprise pilots
        </p>
      </div>

    </div>
  </div>
</section>
      {/* ===== 10. MORE TEAM FEATURES ===== */}
<section style={{ padding: "2.5rem 1.25rem", background: "#f8fafc" }} className="w-full">
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

    {/* Header */}
    <div className="text-center mb-10 md:mb-12">
      <h2
        className="text-3xl md:text-5xl font-black lh-text-ink mb-4 leading-tight"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        More Team Features
      </h2>

      <p className="lh-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Every capability your people team needs to build a field-ready workforce
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>

      {/* Card 1 */}
      <div className="bg-white rounded-3xl border lh-border-faint p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ backgroundColor: "#f0e8ff" }}
        >
          <span className="text-2xl">📚</span>
        </div>

        <h3 className="text-xl font-bold lh-text-ink mb-3">
          Skill Assessments
        </h3>

        <p className="lh-text-muted text-sm md:text-base leading-relaxed">
          Pre and post sprint assessments that measure actual knowledge
          delta — not just who clicked through. See the gap, close the gap.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl border lh-border-faint p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ backgroundColor: "#f0e8ff" }}
        >
          <span className="text-2xl">🗺️</span>
        </div>

        <h3 className="text-xl font-bold lh-text-ink mb-3">
          Sales Career Maps
        </h3>

        <p className="lh-text-muted text-sm md:text-base leading-relaxed">
          Define progression paths from junior rep to team lead. Every
          sprint earned moves the rep visibly along their career journey.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl border lh-border-faint p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ backgroundColor: "#f0e8ff" }}
        >
          <span className="text-2xl">📈</span>
        </div>

        <h3 className="text-xl font-bold lh-text-ink mb-3">
          Sales Performance Management
        </h3>

        <p className="lh-text-muted text-sm md:text-base leading-relaxed">
          Individual rep scorecards, cohort benchmarking, and trend
          analysis — all in one place. Spot top performers and at-risk
          reps early.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ===== 11. CTA BANNER ===== */}
<section style={{ padding: "2.5rem 1.25rem" }} className="w-full">
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <div
      className="rounded-[36px] py-10 md:py-14 lg:py-16 px-6 md:px-12 text-center shadow-2xl overflow-hidden relative"
      style={{ backgroundColor: "#0f1117" }}
    >
      {/* subtle glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2
          className="text-3xl md:text-5xl font-black text-white leading-tight mb-5"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Ready to build a <span style={{ color: "#a78bfa" }}>field-ready</span> sales team?
        </h2>

        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Build readiness, improve execution, and help every rep perform
          better from day one.
        </p>

        <Button
  onClick={() => {
    trackEvent(
      "Lead",
      "Book Demo Now Click",
      "Homepage CTA"
    );

    navigate("/contact");
  }}
  className="px-8 md:px-10 py-6 text-base font-semibold rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
  style={{
    backgroundColor: "white",
    color: "#1a1a1a",
  }}
>
  Book Demo Now
</Button>
      </div>
    </div>
  </div>
</section>
      </div>
    );
};

export default SalesTeam;

<style>{`
  @media (min-width: 1024px) {
    section[style*="padding: 2.5rem 1.25rem"] {
      padding: 3rem 2rem !important;
    }
  }
`}</style>