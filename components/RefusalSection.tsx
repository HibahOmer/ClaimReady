"use client";

import React from "react";
import { Check, Copy, CheckCheck, AlertTriangle } from "lucide-react";
import { ChecklistStep } from "./ChecklistSection";

interface RefusalSectionProps {
  steps: ChecklistStep[];
  checkedItems: Record<number, boolean>;
  onToggle: (stepNumber: number) => void;
}

export default function RefusalSection({
  steps,
  checkedItems,
  onToggle,
}: RefusalSectionProps) {
  const [copiedStep, setCopiedStep] = React.useState<number | null>(null);

  const handleCopy = (e: React.MouseEvent, step: ChecklistStep) => {
    e.stopPropagation();
    const text = `${step.number}. ${step.title} ${step.description}`;
    navigator.clipboard.writeText(text);
    setCopiedStep(step.number);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <section
      id="if-the-claim-is-refused"
      className="py-20 md:py-32 bg-secondary text-on-secondary scroll-mt-20 relative overflow-hidden"
    >
      {/* Subtle background glow/ambient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-bright/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-shell mx-auto px-5 md:px-10 relative z-10">
        
        {/* Section Header Stack per DESIGN.md:
            mono pill label with bright emerald, 16px, headline, 20px, lead (white 70-80%) */}
        <div className="max-w-shell-narrow mx-auto text-left mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-primary-bright/30 text-primary-bright mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-ping" />
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-semibold">
              DISPUTE ESCALATION PROTOCOL
            </span>
          </div>

          <h2 className="headline-lg text-white tracking-[-0.035em] mb-5">
            IF THE CLAIM IS REFUSED
          </h2>

          <p className="body-lg text-white/80 max-w-[62ch]">
            Calm, written records are what a consumer forum or regulator will look at.
          </p>
        </div>

        {/* Steps List / Dark cards */}
        <div className="max-w-shell-narrow mx-auto flex flex-col gap-4">
          {steps.map((step) => {
            const isChecked = !!checkedItems[step.number];

            return (
              <div
                key={step.number}
                onClick={() => onToggle(step.number)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    onToggle(step.number);
                  }
                }}
                className={`checklist-item group relative rounded-[18px] p-6 md:p-7 border transition-all duration-200 cursor-pointer select-none ${
                  isChecked
                    ? "bg-white/[0.14] border-primary-bright/40"
                    : "bg-white/[0.06] hover:bg-white/[0.1] border-white/10 hover:border-white/20 hover:-translate-y-0.5"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-bright`}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  {/* Step Number Badge & Custom Checkbox */}
                  <div className="flex flex-col items-center gap-2 pt-0.5 shrink-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isChecked
                          ? "bg-primary-bright text-secondary font-bold"
                          : "border-2 border-white/30 bg-transparent group-hover:border-primary-bright"
                      }`}
                    >
                      {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>

                    <span className="text-[10px] font-mono tracking-[0.16em] text-white/50 font-medium">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Step Text verbatim from content.txt */}
                  <div className="flex-1 pr-2">
                    <h3
                      className={`text-[17px] md:text-[18px] font-bold tracking-tight mb-1.5 transition-colors ${
                        isChecked ? "text-primary-bright line-through opacity-90" : "text-white"
                      }`}
                    >
                      {step.number}. {step.title}
                    </h3>
                    <p
                      className={`body-md leading-relaxed text-[15px] md:text-[16px] ${
                        isChecked ? "text-white/60" : "text-white/80"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Action button */}
                  <div className="shrink-0 flex items-center self-start">
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, step)}
                      aria-label="Copy step details"
                      title="Copy step text"
                      className="p-2 rounded-full text-white/40 hover:text-primary-bright hover:bg-white/10 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                    >
                      {copiedStep === step.number ? (
                        <CheckCheck className="w-4 h-4 text-primary-bright" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Callout inside dark section */}
        <div className="max-w-shell-narrow mx-auto mt-10 p-6 rounded-[18px] bg-white/[0.05] border border-white/10 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-primary-bright shrink-0 mt-0.5" />
          <p className="text-[14px] text-white/70 leading-relaxed">
            <strong className="text-white font-semibold">Important Rule: </strong>
            Never hand over original receipts or warranty cards during an escalation. Only provide clear photocopies or digital PDF scans.
          </p>
        </div>

      </div>
    </section>
  );
}
