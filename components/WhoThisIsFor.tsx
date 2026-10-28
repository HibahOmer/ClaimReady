import { Smartphone, Tv, Laptop, Refrigerator, Check } from "lucide-react";

export default function WhoThisIsFor() {
  const categories = [
    {
      name: "Phones & Tablets",
      icon: Smartphone,
      examples: "Smartphones, touchscreens, batteries, cameras & charging ports",
      docRef: "CAT-01",
    },
    {
      name: "TVs & Displays",
      icon: Tv,
      examples: "OLED/LED panels, soundbars, motherboards, display lines & power boards",
      docRef: "CAT-02",
    },
    {
      name: "Laptops & Computers",
      icon: Laptop,
      examples: "Keyboards, hinge damage, motherboards, displays & thermal throttling",
      docRef: "CAT-03",
    },
    {
      name: "Home Appliances",
      icon: Refrigerator,
      examples: "Washing machines, refrigerators, microwaves, dishwashers & air conditioners",
      docRef: "CAT-04",
    },
  ];

  return (
    <section id="who-this-is-for" className="py-20 md:py-32 bg-surface-muted border-y border-outline scroll-mt-20">
      <div className="max-w-shell mx-auto px-5 md:px-10">
        
        {/* Section Header Stack */}
        <div className="max-w-shell-narrow mx-auto text-left mb-12 md:mb-16">
          {/* Pill Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary-border text-primary-ink mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-medium">
              TARGET AUDIENCE
            </span>
          </div>

          {/* Headline lg */}
          <h2 className="headline-lg text-secondary tracking-[-0.035em] mb-5">
            WHO THIS IS FOR
          </h2>

          {/* Lead paragraph verbatim from content.txt */}
          <p className="body-lg text-on-surface-variant max-w-[62ch]">
            Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="bg-surface rounded-[18px] p-6 border border-outline shadow-card-resting hover:shadow-card-raised transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-surface-sunken flex items-center justify-center text-secondary">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.16em] text-on-surface-muted uppercase">
                      {cat.docRef}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-secondary tracking-tight mb-2">
                    {cat.name}
                  </h3>
                  <p className="body-sm text-on-surface-variant leading-relaxed mb-6">
                    {cat.examples}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline flex items-center gap-2 text-primary text-[12px] font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Full claim protection</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Card per DESIGN.md */}
        <div className="mt-10 bg-primary-soft border border-primary-border rounded-[18px] p-7 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
            <p className="text-[15px] font-medium text-primary-ink leading-snug">
              Every step below has been tested against real-world warranty dispute procedures.
            </p>
          </div>
          <a
            href="#before-anything-goes-wrong"
            className="text-[13.5px] font-semibold text-primary-strong hover:text-primary-ink underline underline-offset-4 shrink-0"
          >
            Go to step 1 &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
