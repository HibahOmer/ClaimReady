"use client";

import { useState } from "react";
import { Download, Share2, Check, Printer, Bookmark } from "lucide-react";

export default function CallToAction() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Claim Ready — Free Warranty Checklist",
          text: "A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.",
          url,
        });
        return;
      } catch {
        // User cancelled share or share failed; fall back to clipboard
      }
    }

    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="call-to-action" className="py-20 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Section Header Stack */}
        <div className="max-w-shell-narrow mx-auto text-left mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary-border text-primary-ink mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-medium">
              NEXT STEPS
            </span>
          </div>

          <h2 className="headline-lg text-secondary tracking-[-0.035em] mb-5">
            CALL TO ACTION
          </h2>

          <p className="body-lg text-on-surface-variant max-w-[62ch]">
            Take these two immediate steps to safeguard your purchase and protect your consumer rights.
          </p>
        </div>

        {/* 2 Action Cards per content.txt */}
        <div className="max-w-shell-narrow mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Action 1: Download & Keep with Invoices */}
          <div className="bg-surface rounded-[18px] p-8 border border-outline shadow-card-resting hover:shadow-card-raised transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary mb-6">
                <Bookmark className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Exact wording from content.txt */}
              <h3 className="text-[20px] font-bold text-secondary tracking-tight mb-3">
                Download the checklist and keep it with your invoices.
              </h3>

              <p className="body-md text-on-surface-variant text-[15px] mb-8">
                Keep a printed or digital copy stored next to your original sales receipts and warranty cards so you are prepared if a defect arises.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-strong text-on-primary text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-card-raised hover:-translate-y-0.5 transition-all duration-200 min-h-[48px]"
              >
                <Printer className="w-4 h-4" />
                <span>Print or Save as PDF</span>
              </button>
            </div>
          </div>

          {/* Action 2: Share with a friend */}
          <div className="bg-surface rounded-[18px] p-8 border border-outline shadow-card-resting hover:shadow-card-raised transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-surface-sunken border border-outline-strong flex items-center justify-center text-secondary mb-6">
                <Share2 className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Exact wording from content.txt */}
              <h3 className="text-[20px] font-bold text-secondary tracking-tight mb-3">
                Share it with a friend who just bought something expensive.
              </h3>

              <p className="body-md text-on-surface-variant text-[15px] mb-8">
                Most claims fail because basic records were not kept from day one. Send this guide to someone with a new phone, TV, or appliance.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-muted text-secondary border border-outline text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-card-resting hover:-translate-y-0.5 transition-all duration-200 min-h-[48px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-primary font-bold">Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-on-surface-variant" />
                    <span>Share Checklist Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
