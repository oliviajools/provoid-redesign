import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  cta: string;
  href: string;
  accent?: boolean;
}

export function ProductCard({ title, description, cta, href, accent = false }: ProductCardProps) {
  return (
    <div className={`border ${accent ? 'border-primary-accent' : 'border-border'} ${accent ? 'bg-surface' : 'bg-black'} p-8 rounded-card hover:${accent ? 'border-primary-accent' : 'border-border2'} transition-colors`}>
      <h3 className={`text-2xl font-semibold mb-4 ${accent ? 'text-text-primary' : 'text-white'}`}>{title}</h3>
      <p className={`${accent ? 'text-text-secondary' : 'text-gray-300'} mb-6`}>{description}</p>
      <Link href={href} className={`inline-flex items-center text-sm font-medium ${accent ? 'text-primary-accent' : 'text-white'} hover:opacity-80 transition-opacity`}>
        {cta} →
      </Link>
    </div>
  );
}
