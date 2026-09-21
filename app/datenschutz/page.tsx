import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | PROVOID",
  description: "Datenschutzerklärung der Website von PROVOID.",
};

export default function Datenschutz() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-surface py-16 md:py-24">
        <div className="container">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-accent">RECHTLICHES</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">Datenschutzerklärung</h1>
          <p className="mt-5 max-w-2xl text-lg text-text-secondary">Informationen über die Verarbeitung personenbezogener Daten beim Besuch dieser Website.</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-12 text-text-secondary">
            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">1. Verantwortliche Stelle</h2>
              <div className="space-y-1">
                <p>Olivia Bahr</p>
                <p>Beim Andreasbrunnen 6</p>
                <p>20249 Hamburg</p>
                <p>Deutschland</p>
                <p className="pt-3">E-Mail: <a href="mailto:olivia@provoid.de" className="text-primary-accent hover:text-primary-light">olivia@provoid.de</a></p>
                <p>Telefon: <a href="tel:+491744401044" className="text-primary-accent hover:text-primary-light">+49 174 440 1044</a></p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">2. Hosting und Server-Logfiles</h2>
              <div className="space-y-4 leading-relaxed">
                <p>Beim Aufruf dieser Website übermittelt Ihr Browser technisch erforderliche Daten an den Server. Hierzu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite oder Datei, übertragene Datenmenge, Browsertyp, Betriebssystem, Referrer-URL und der anfragende Provider gehören.</p>
                <p>Diese Daten werden verarbeitet, um die Website sicher und zuverlässig bereitzustellen, technische Fehler zu erkennen und Missbrauch abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb dieser Website.</p>
                <p>Server-Logfiles werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist, und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten oder sicherheitsrelevanten Gründe eine längere Speicherung erfordern.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">3. Kontaktaufnahme</h2>
              <div className="space-y-4 leading-relaxed">
                <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten, um Ihre Anfrage zu beantworten und die weitere Kommunikation zu führen.</p>
                <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage der Anbahnung oder Durchführung eines Vertrags dient. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sachgerechten Bearbeitung Ihrer Anfrage.</p>
                <p>Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">4. Cookies, Analyse und externe Inhalte</h2>
              <div className="space-y-4 leading-relaxed">
                <p>Diese Website setzt derzeit keine Analyse- oder Marketingdienste ein. Es werden keine Tracking-Cookies verwendet und keine externen Medien wie YouTube-Videos, Karten oder Social-Media-Plugins eingebettet.</p>
                <p>Die verwendete Schriftart wird durch die Website selbst bereitgestellt. Beim Seitenaufruf wird hierfür keine Verbindung zu Google Fonts hergestellt.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">5. Ihre Rechte</h2>
              <div className="space-y-4 leading-relaxed">
                <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft über Ihre personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Sie können einer Verarbeitung auf Grundlage berechtigter Interessen widersprechen und eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                <p>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a href="mailto:olivia@provoid.de" className="text-primary-accent hover:text-primary-light">olivia@provoid.de</a>.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">6. Beschwerderecht</h2>
              <p className="leading-relaxed">Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig ist insbesondere die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.</p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-text-primary">7. Aktualität dieser Erklärung</h2>
              <p className="leading-relaxed">Wir passen diese Datenschutzerklärung an, wenn sich die Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern.</p>
              <p className="mt-4 text-sm text-text-muted">Stand: September 2026</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
