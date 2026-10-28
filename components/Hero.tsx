"use client";

import { ArrowRight, CheckCircle2, FileText, Printer } from "lucide-react";

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy (~55%) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Label (Eyebrow) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary-border text-primary-ink mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-medium">
                CONSUMER PROTECTION PROTOCOL
              </span>
            </div>

            {/* Headline Display */}
            <h1 className="headline-display text-secondary tracking-[-0.035em] mb-5">
              CLAIM READY
            </h1>

            {/* Lead text verbatim from content.txt */}
            <p className="body-lg text-on-surface-variant max-w-[62ch] mb-8">
              A free checklist for anyone about to file a warranty claim.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#before-anything-goes-wrong"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-strong text-on-primary text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-card-raised hover:-translate-y-0.5 transition-all duration-200 min-h-[48px]"
              >
                <span>Start The Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-muted text-secondary border border-outline text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-card-resting hover:-translate-y-0.5 transition-all duration-200 min-h-[48px]"
              >
                <Printer className="w-4 h-4 text-on-surface-variant" />
                <span>Print / Save PDF</span>
              </button>
            </div>

            {/* Key trust indicators */}
            <div className="pt-6 border-t border-outline w-full flex flex-wrap items-center gap-6 text-on-surface-muted text-[13.5px]">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                15 actionable steps
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Covers phones, TVs, laptops & appliances
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-bright" />
                100% free & open
              </span>
            </div>
          </div>

          {/* Right Column: Visual / Headline Card (~45%) */}
          <div className="lg:col-span-5 w-full">
            {/* Headline Card as specified in DESIGN.md:
                "a dark ink panel with a 26px radius holding one short sentence in large mono type
                 with a faint horizontal scanline texture. Used once, at the top of a page." */}
            <div className="scanline-bg rounded-[26px] p-8 md:p-10 border border-white/10 shadow-card-float text-white relative overflow-hidden group">
              {/* Subtle top ambient indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-bright border border-primary-bright/20">
                  <span className="w-2 h-2 rounded-full bg-primary-bright animate-ping" />
                  <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-semibold">
                    THE IDEA IN ONE LINE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-white/50 tracking-wider">
                  DOC: CR-01
                </span>
              </div>

              {/* Exact wording from content.txt */}
              <blockquote className="my-2">
                <p className="font-sans text-[22px] md:text-[25px] font-bold leading-[1.3] text-white tracking-[-0.02em]">
                  &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                </p>
              </blockquote>

              {/* Document footer card inside */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-primary-bright" />
                  <span>CORE PRINCIPLE</span>
                </div>
                <span className="text-primary-bright tracking-widest text-[11px]">
                  FACTS &gt; PROMISES
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
