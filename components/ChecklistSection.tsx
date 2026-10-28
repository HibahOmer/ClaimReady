"use client";

import React from "react";
import { Check, Copy, CheckCheck } from "lucide-react";

export interface ChecklistStep {
  number: number;
  title: string;
  description: string;
}

interface ChecklistSectionProps {
  id: string;
  phaseLabel: string;
  title: string;
  leadParagraph?: string;
  steps: ChecklistStep[];
  checkedItems: Record<number, boolean>;
  onToggle: (stepNumber: number) => void;
  background?: "white" | "muted";
}

export default function ChecklistSection({
  id,
  phaseLabel,
  title,
  leadParagraph,
  steps,
  checkedItems,
  onToggle,
  background = "white",
}: ChecklistSectionProps) {
  const [copiedStep, setCopiedStep] = React.useState<number | null>(null);

  const handleCopy = (e: React.MouseEvent, step: ChecklistStep) => {
    e.stopPropagation();
    const text = `${step.number}. ${step.title} ${step.description}`;
    navigator.clipboard.writeText(text);
    setCopiedStep(step.number);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const bgClass =
    background === "muted"
      ? "bg-surface-muted border-y border-outline"
      : "bg-surface";

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClass} scroll-mt-20`}>
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Section Header Stack per DESIGN.md:
            mono pill label, 16px, headline, 20px, lead (~62 chars), 48-64px then content */}
        <div className="max-w-shell-narrow mx-auto text-left mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary-border text-primary-ink mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-medium">
              {phaseLabel}
            </span>
          </div>

          <h2 className="headline-lg text-secondary tracking-[-0.035em] mb-5">
            {title}
          </h2>

          {leadParagraph && (
            <p className="body-lg text-on-surface-variant max-w-[62ch]">
              {leadParagraph}
            </p>
          )}
        </div>

        {/* Steps List / Cards */}
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
                    ? "bg-primary-soft/40 border-primary-border shadow-card-resting"
                    : "bg-surface border-outline shadow-card-resting hover:shadow-card-raised hover:-translate-y-0.5"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  {/* Step Number Badge & Custom Checkbox */}
                  <div className="flex flex-col items-center gap-2 pt-0.5 shrink-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isChecked
                          ? "bg-primary text-white"
                          : "border-2 border-outline-strong bg-white group-hover:border-primary"
                      }`}
                    >
                      {isChecked && <Check className="w-4 h-4 stroke-[2.5]" />}
                    </div>

                    <span className="text-[10px] font-mono tracking-[0.16em] text-on-surface-muted font-medium">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Step Text (Verbatim from content.txt) */}
                  <div className="flex-1 pr-2">
                    <h3
                      className={`text-[17px] md:text-[18px] font-bold tracking-tight mb-1.5 transition-colors ${
                        isChecked ? "text-primary-ink line-through opacity-85" : "text-secondary"
                      }`}
                    >
                      {step.number}. {step.title}
                    </h3>
                    <p
                      className={`body-md leading-relaxed text-[15px] md:text-[16px] ${
                        isChecked ? "text-on-surface-variant/80" : "text-on-surface"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Copy Button (Action) */}
                  <div className="shrink-0 flex items-center self-start">
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, step)}
                      aria-label="Copy step details"
                      title="Copy step text"
                      className="p-2 rounded-full text-on-surface-muted hover:text-primary hover:bg-primary-soft transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                    >
                      {copiedStep === step.number ? (
                        <CheckCheck className="w-4 h-4 text-primary" />
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

      </div>
    </section>
  );
}
