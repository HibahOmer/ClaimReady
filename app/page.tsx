"use client";

import { useEffect, useState } from "react";
import Ticker from "@/components/Ticker";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ChecklistSection, { ChecklistStep } from "@/components/ChecklistSection";
import RefusalSection from "@/components/RefusalSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import PrintableChecklist from "@/components/PrintableChecklist";
import { CheckCircle2, RotateCcw } from "lucide-react";

const beforeSteps: ChecklistStep[] = [
  {
    number: 1,
    title: "Keep the invoice.",
    description:
      "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
  },
  {
    number: 2,
    title: "Register the product.",
    description:
      "Many brands ask you to register on their website or app; some add extra warranty when you do.",
  },
  {
    number: 3,
    title: "Read the warranty card once.",
    description:
      "Note how long it lasts, what it covers, and what it excludes.",
  },
  {
    number: 4,
    title: "Record the condition.",
    description:
      "Take a few dated photos of the product once it is installed or unboxed.",
  },
];

const faultSteps: ChecklistStep[] = [
  {
    number: 5,
    title: "Record the fault.",
    description:
      "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
  },
  {
    number: 6,
    title: "Raise the complaint in writing.",
    description:
      "Use email, the brand's website or its app, not only a phone call, so there is a record.",
  },
  {
    number: 7,
    title: "Note every reference number.",
    description:
      "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
  },
];

const techSteps: ChecklistStep[] = [
  {
    number: 8,
    title: "Ask for the job sheet.",
    description:
      "Ask the technician for a copy of the visit report or job sheet before they leave.",
  },
  {
    number: 9,
    title: "Ask what was tested.",
    description:
      "Ask which test or instrument was used to reach the diagnosis.",
  },
  {
    number: 10,
    title: "Take your own photos.",
    description:
      "Photograph the product and anything the technician points to, during the visit.",
  },
];

const refusedSteps: ChecklistStep[] = [
  {
    number: 11,
    title: "Ask for the reason in writing.",
    description:
      "Request a written explanation that names the exact cause and the evidence for it.",
  },
  {
    number: 12,
    title: "Ask for the technical report.",
    description:
      "If the refusal rests on an inspection, ask for that inspection report.",
  },
  {
    number: 13,
    title: "Escalate inside the company.",
    description:
      "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
  },
  {
    number: 14,
    title: "Keep it factual.",
    description:
      "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
  },
  {
    number: 15,
    title: "Know your consumer helpline.",
    description:
      "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
  },
];

const STORAGE_KEY = "claimready_checked_v1";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch {
      // LocalStorage not available or parse error
    }
    setIsLoaded(true);
  }, []);

  const toggleStep = (stepNumber: number) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [stepNumber]: !prev[stepNumber] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage full or unavailable
      }
      return next;
    });
  };

  const resetAll = () => {
    if (window.confirm("Reset all checked items in the checklist?")) {
      setCheckedItems({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Storage clear error
      }
    }
  };

  const totalSteps = 15;
  const completedSteps = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  return (
    <main id="top" className="min-h-screen bg-white">
      {/* Printable Version for clean PDF download / print */}
      <PrintableChecklist
        beforeSteps={beforeSteps}
        faultSteps={faultSteps}
        techSteps={techSteps}
        refusedSteps={refusedSteps}
      />

      {/* Screen Website */}
      <div className="print:hidden">
        {/* Ticker strip above header */}
        <Ticker />

        {/* Sticky Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Key Numbers / Stat Grid */}
        <Stats />

        {/* Who This Is For Section */}
        <WhoThisIsFor />

        {/* Interactive Progress Indicator Bar */}
        {isLoaded && completedSteps > 0 && (
          <aside
            aria-label="Checklist completion status"
            className="sticky top-[72px] z-40 bg-primary-soft/95 backdrop-blur border-y border-primary-border py-2.5 px-5 transition-all duration-300"
          >
            <div className="max-w-shell mx-auto flex items-center justify-between text-xs md:text-sm font-medium text-primary-ink">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Checklist Progress: <strong>{completedSteps}</strong> of{" "}
                  <strong>{totalSteps}</strong> completed ({progressPercent}%)
                </span>
              </div>
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center gap-1.5 text-xs text-primary-strong hover:text-primary font-mono uppercase tracking-wider underline hover:no-underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </aside>
        )}

        {/* Section 1: BEFORE ANYTHING GOES WRONG */}
        <ChecklistSection
          id="before-anything-goes-wrong"
          phaseLabel="CHECKLIST PHASE 01"
          title="BEFORE ANYTHING GOES WRONG"
          leadParagraph="4 records to keep before anything goes wrong."
          steps={beforeSteps}
          checkedItems={checkedItems}
          onToggle={toggleStep}
          background="white"
        />

        {/* Section 2: WHEN THE FAULT APPEARS */}
        <ChecklistSection
          id="when-the-fault-appears"
          phaseLabel="CHECKLIST PHASE 02"
          title="WHEN THE FAULT APPEARS"
          leadParagraph="Take immediate written actions the moment an issue develops."
          steps={faultSteps}
          checkedItems={checkedItems}
          onToggle={toggleStep}
          background="muted"
        />

        {/* Section 3: WHEN A TECHNICIAN VISITS */}
        <ChecklistSection
          id="when-a-technician-visits"
          phaseLabel="CHECKLIST PHASE 03"
          title="WHEN A TECHNICIAN VISITS"
          leadParagraph="Secure official diagnosis documents during any technician visit."
          steps={techSteps}
          checkedItems={checkedItems}
          onToggle={toggleStep}
          background="white"
        />

        {/* Section 4: IF THE CLAIM IS REFUSED (Dark Section) */}
        <RefusalSection
          steps={refusedSteps}
          checkedItems={checkedItems}
          onToggle={toggleStep}
        />

        {/* CALL TO ACTION */}
        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
