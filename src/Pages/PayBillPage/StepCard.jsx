export default function StepCard({ step, index, steps }) {
  const Icon = step.icon;
  const isLast = index === steps.length - 1;
  return (
    <div className="relative flex items-start gap-4 py-2 ">
      {/* Timeline Connector Line */}
      {!isLast && (
        <div
          className="absolute left-6 top-16 h-full w-0.5 bg-red-200"
          aria-hidden="true"
        />
      )}

      {/* Step Icon and Number */}
      <div className="shrink-0 relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="grow pt-2 pb-4">
        <p className="text-gray-600 text-base">{step.description}</p>
      </div>
    </div>
  );
}
