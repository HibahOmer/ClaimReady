"useclient";

export default function Ticker() {
  const items = [
    "CLAIM READY",
    "A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM",
    "THE IDEA IN ONE LINE: A WARRANTY CLAIM IS DECIDED ON RECORDS",
    "KEEP YOURS, AND ASK FOR THEIRS IN WRITING",
    "15 STEPS IN THE CHECKLIST",
    "4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG",
    "1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN",
    "FREE & ACCESSIBLE FOR EVERY CONSUMER",
  ];

  return (
    <aside
      aria-label="Announcement ticker"
      className="ticker-strip bg-primary-soft text-primary-ink border-b border-primary-border py-2 overflow-hidden select-none"
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render repeated sequence to make infinite loop seamless */}
        {[...items, ...items, ...items].map((text, idx) => (
          <span
            key={idx}
            className="inline-flex items-center text-[10px] font-mono tracking-[0.16em] uppercase mx-5 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 inline-block opacity-80" />
            {text}
          </span>
        ))}
      </div>
    </aside>
  );
}
