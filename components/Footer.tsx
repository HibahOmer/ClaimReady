import Link from "next/link";
import { ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-muted border-t border-outline py-16 text-on-surface-variant">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Three Columns Grid per DESIGN.md */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline">
          
          {/* Column 1: About (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 rounded-md bg-primary-soft border border-primary-border flex items-center justify-center text-primary">
                <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-[17px] tracking-[-0.035em] text-secondary">
                CLAIM READY
              </span>
            </Link>

            <p className="body-sm text-on-surface-variant max-w-[38ch] mb-4">
              A free checklist for anyone about to file a warranty claim. Decided on facts, in writing.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-outline text-[11px] font-mono text-on-surface-muted uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>EMERALD EDITORIAL SPEC</span>
            </div>
          </div>

          {/* Column 2: Checklist Sections (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-secondary font-semibold mb-2">
              CHECKLIST PHASES
            </span>
            <ul className="space-y-2 body-sm">
              <li>
                <a
                  href="#before-anything-goes-wrong"
                  className="hover:text-primary transition-colors inline-block"
                >
                  01. Before Anything Goes Wrong
                </a>
              </li>
              <li>
                <a
                  href="#when-the-fault-appears"
                  className="hover:text-primary transition-colors inline-block"
                >
                  02. When The Fault Appears
                </a>
              </li>
              <li>
                <a
                  href="#when-a-technician-visits"
                  className="hover:text-primary transition-colors inline-block"
                >
                  03. When A Technician Visits
                </a>
              </li>
              <li>
                <a
                  href="#if-the-claim-is-refused"
                  className="hover:text-primary transition-colors inline-block"
                >
                  04. If The Claim Is Refused
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Rules & Actions (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-secondary font-semibold mb-2">
              ESSENTIALS
            </span>
            <ul className="space-y-2 body-sm">
              <li>
                <a href="#who-this-is-for" className="hover:text-primary transition-colors">
                  Who This Is For
                </a>
              </li>
              <li>
                <a href="#call-to-action" className="hover:text-primary transition-colors">
                  Download Checklist
                </a>
              </li>
              <li>
                <a
                  href="#top"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary-strong font-medium mt-2"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Line (Verbatim from content.txt) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] leading-relaxed text-on-surface-muted max-w-3xl">
            <strong className="text-secondary font-semibold">FOOTER NOTE: </strong>
            Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </p>
          <span className="text-[11px] font-mono text-on-surface-muted tracking-wider shrink-0">
            OPEN CONSUMER RESOURCE
          </span>
        </div>

      </div>
    </footer>
  );
}
