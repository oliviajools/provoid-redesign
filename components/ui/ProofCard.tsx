interface ProofCardProps {
  title: string;
  field: string;
  result: string;
  relevance: string;
  link?: string;
}

export function ProofCard({ title, field, result, relevance, link }: ProofCardProps) {
  return (
    <div className="border border-border bg-surface p-6 rounded-card hover:border-border2 transition-colors">
      <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">{field}</p>
      <h3 className="text-lg font-semibold text-text-primary mb-3">{title}</h3>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-1">Kernergebnis</p>
          <p className="text-sm text-text-secondary">{result}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-1">Relevanz</p>
          <p className="text-sm text-text-secondary">{relevance}</p>
        </div>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-primary-accent hover:opacity-80 transition-opacity">
          Studie ansehen →
        </a>
      )}
    </div>
  );
}
