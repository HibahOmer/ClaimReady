export default function Stats() {
  return (
    <section className="pb-16 md:pb-24 bg-white">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        {/* Section Header Stack */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft border border-primary-border text-primary-ink mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-medium">
              KEY NUMBERS FOR THE PAGE
            </span>
          </div>
        </div>

        {/* 3 joined cells inside one rounded card with 1px hairline gaps */}
        <div className="bg-outline rounded-[18px] p-[1px] shadow-card-resting overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline rounded-[17px] overflow-hidden">
            
            {/* Cell 1: 15 steps */}
            <div className="bg-surface p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-surface-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-on-surface-muted mb-3 font-medium">
                METRIC 01 // COMPLETENESS
              </span>
              <div className="my-2">
                <span className="stat-number text-secondary block">
                  15
                </span>
              </div>
              <p className="body-sm text-on-surface-variant mt-2 font-medium">
                steps in the checklist.
              </p>
            </div>

            {/* Cell 2: 4 records */}
            <div className="bg-surface p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-surface-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-on-surface-muted mb-3 font-medium">
                METRIC 02 // ESSENTIALS
              </span>
              <div className="my-2">
                <span className="stat-number text-secondary block">
                  4
                </span>
              </div>
              <p className="body-sm text-on-surface-variant mt-2 font-medium">
                records to keep before anything goes wrong.
              </p>
            </div>

            {/* Cell 3: Hot Cell (Emerald) */}
            <div className="bg-surface p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-surface-2 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-primary-ink font-semibold">
                  METRIC 03 // THE GOLDEN RULE
                </span>
                <span className="inline-block px-2 py-0.5 rounded-full bg-primary-soft text-primary text-[10px] font-mono font-medium border border-primary-border">
                  HOT
                </span>
              </div>
              <div className="my-2">
                <span className="stat-number text-primary block">
                  1
                </span>
              </div>
              <p className="body-sm text-primary-ink mt-2 font-semibold">
                rule: if it is not in writing, it did not happen.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
