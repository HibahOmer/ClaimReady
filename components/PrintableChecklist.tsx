import { ChecklistStep } from "./ChecklistSection";

interface PrintableChecklistProps {
  beforeSteps: ChecklistStep[];
  faultSteps: ChecklistStep[];
  techSteps: ChecklistStep[];
  refusedSteps: ChecklistStep[];
}

export default function PrintableChecklist({
  beforeSteps,
  faultSteps,
  techSteps,
  refusedSteps,
}: PrintableChecklistProps) {
  const renderList = (title: string, steps: ChecklistStep[]) => (
    <div className="mb-6">
      <h3 className="font-bold text-base text-black uppercase tracking-wider border-b-2 border-black pb-1 mb-3">
        {title}
      </h3>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start gap-3 text-sm">
            <div className="w-4 h-4 border-2 border-black mt-0.5 shrink-0" />
            <div>
              <span className="font-bold mr-1.5">{step.number}. {step.title}</span>
              <span className="text-gray-800">{step.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="hidden print:block p-8 bg-white text-black font-sans">
      <div className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">CLAIM READY</h1>
        <p className="text-sm text-gray-700 mt-1">
          A free checklist for anyone about to file a warranty claim.
        </p>
        <div className="mt-3 p-2 bg-gray-100 border border-gray-300 text-xs font-mono">
          <strong>THE IDEA IN ONE LINE:</strong> A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
        </div>
      </div>

      {renderList("BEFORE ANYTHING GOES WRONG", beforeSteps)}
      {renderList("WHEN THE FAULT APPEARS", faultSteps)}
      {renderList("WHEN A TECHNICIAN VISITS", techSteps)}
      {renderList("IF THE CLAIM IS REFUSED", refusedSteps)}

      <div className="mt-8 pt-4 border-t border-gray-400 text-xs text-gray-600">
        <p>
          <strong>FOOTER NOTE:</strong> Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
        </p>
      </div>
    </div>
  );
}
