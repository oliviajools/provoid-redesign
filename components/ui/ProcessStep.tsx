interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <span className="text-sm font-semibold uppercase tracking-wider text-text-muted">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-text-primary mb-2">{title}</h4>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
