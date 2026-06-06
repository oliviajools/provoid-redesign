import Link from "next/link";

interface CTABlockProps {
  primary?: { text: string; href: string };
  secondary?: { text: string; href: string };
}

export function CTABlock({ primary, secondary }: CTABlockProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {primary && (
        <Link href={primary.href} className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light transition-colors rounded-editorial">
          {primary.text}
        </Link>
      )}
      {secondary && (
        <Link href={secondary.href} className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-text-primary border border-border hover:border-border2 transition-colors rounded-editorial">
          {secondary.text}
        </Link>
      )}
    </div>
  );
}
