"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Angebot", href: "/#angebot" },
  { label: "Ansatz", href: "/#ansatz" },
  { label: "Prozess", href: "/#prozess" },
  { label: "Über uns", href: "/#about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/#home" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
          <img src="/Logo-provoid.png" alt="PROVOID" className="h-8" />
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-text-primary">PROVOID</span>
            <span className="text-[0.6rem] uppercase tracking-widest text-primary-accent">no brain. no gain.</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-text-primary transition-colors hover:text-primary-accent">
              {item.label}
            </Link>
          ))}
          <Link href="/#kontakt" className="rounded-editorial bg-primary-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light">
            Kontakt
          </Link>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-text-primary md:hidden" aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-border bg-surface md:hidden">
          <div className="container flex flex-col gap-4 py-5">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-text-primary" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/#kontakt" className="mt-2 inline-flex justify-center rounded-editorial bg-primary-accent px-4 py-2 text-sm font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
