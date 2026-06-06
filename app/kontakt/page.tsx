import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/ui/CTABlock";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="relative py-section-mobile md:py-section bg-surface overflow-hidden">
        <div className="frequency-line top-1/3" />
        <div className="container relative z-10">
          <div className="max-w-4xl flex items-start justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary mb-6">
                KONTAKT
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl">
                Bereit für den nächsten Schritt? Sprechen Sie mit uns über Ihr Projekt oder Ihre Frage.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/Logo-provoid.png" alt="PROVOID" className="h-24 md:h-32" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-mobile md:py-section bg-white">
        <div className="container">
          <SectionHeader label="GET IN TOUCH" title="So erreichen Sie uns" />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border border-border bg-surface p-8 rounded-card">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Direkter Kontakt</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">E-Mail</p>
                  <a href="mailto:olivia@provoid.de" className="text-lg text-primary-accent hover:text-primary-light transition-colors">olivia@provoid.de</a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Telefon</p>
                  <a href="tel:+491744401044" className="text-lg text-primary-accent hover:text-primary-light transition-colors">+49 174 440 1044</a>
                </div>
              </div>
            </div>

            <div className="border border-border bg-surface p-8 rounded-card">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Wir freuen uns auf Ihre Nachricht</h3>
              <p className="text-text-secondary mb-6">
                Egal ob Unternehmen, Sportverein oder Einzelperson: Wir beraten Sie gerne zu Ihren Anforderungen und finden gemeinsam die passende Lösung.
              </p>
              <CTABlock primary={{ text: "E-Mail schreiben", href: "mailto:olivia@provoid.de" }} secondary={{ text: "Anrufen", href: "tel:+491744401044" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-mobile md:py-section bg-surface">
        <div className="container">
          <SectionHeader label="OFFICE" title="Standort" />
          
          <div className="mt-12 border border-border bg-white p-8 rounded-card">
            <p className="text-text-secondary mb-4">
              PROVOID ist in Hamburg beheimatet und arbeitet deutschlandweit sowie digital mit Kunden zusammen.
            </p>
            <p className="text-text-secondary">
              Für persönliche Termine und Kooperationen in Hamburg kontaktieren Sie uns bitte vorab per E-Mail oder Telefon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
