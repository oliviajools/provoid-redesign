import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Search, Shapes, Users, LineChart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/blog-posts";

const references = [
  {
    logo: "/FASD_Logo-768x270.png",
    alt: "FASD-Fachzentrum Hamburg",
    width: 768,
    height: 270,
    label: "Medizinische Diagnostik",
    title: "FASD-Fachzentrum Hamburg",
    description: "Digitale Fragebögen und Erhebungsabläufe, die Daten strukturiert erfassen und sich verlässlich in den Versorgungsalltag einfügen.",
  },
  {
    logo: "/deepvelop-hamburg-logo-mit-text-380x510-2.png",
    alt: "Deepvelop Hamburg",
    width: 380,
    height: 510,
    label: "Softwareentwicklung",
    title: "Deepvelop",
    description: "Konzeption und Programmierung von Software und Apps mit verständlichen Abläufen und einer möglichst geringen kognitiven Belastung.",
  },
  {
    logo: "/Scvictoria-logo.svg.webp",
    alt: "SC Victoria Hamburg",
    width: 500,
    height: 500,
    label: "Training & Vermittlung",
    title: "SC Victoria Hamburg",
    description: "Ein saisonbegleitendes Neuroathletik-Programm für vier Jugendmannschaften – von der Vermittlung bis zur Anwendung im Training.",
  },
];

const roadmap = [
  {
    icon: Search,
    number: "01",
    title: "Verstehen",
    description: "Wir sprechen mit den Menschen, betrachten bestehende Abläufe und klären, wo KI konkret helfen kann – und wo nicht.",
  },
  {
    icon: Shapes,
    number: "02",
    title: "Erproben",
    description: "Wir wählen einen überschaubaren Anwendungsfall, richten passende Werkzeuge ein und testen sie im Arbeitsalltag.",
  },
  {
    icon: Users,
    number: "03",
    title: "Befähigen",
    description: "Lehrkräfte, Teams und Lernende erhalten das Wissen und die Sicherheit, KI selbstständig und verantwortungsvoll zu nutzen.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Verankern",
    description: "Wir werten Erfahrungen aus, verbessern den Einsatz und schaffen klare Regeln für die langfristige Nutzung.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home" className="scroll-mt-16 overflow-hidden bg-surface py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary-accent">KI in Bildung und Organisationen</p>
              <h1 className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                KI einführen.<br />Menschen mitnehmen.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                Wir helfen Bildungseinrichtungen und Organisationen, KI sinnvoll in ihren Alltag zu integrieren – mit klaren Anwendungsfällen, praxisnahen Schulungen und einem Blick auf die Menschen, die damit arbeiten.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-editorial bg-primary-accent px-6 py-3 font-medium text-white transition-colors hover:bg-primary-light">
                  Erstgespräch vereinbaren <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#angebot" className="inline-flex items-center justify-center rounded-editorial border border-border px-6 py-3 font-medium text-text-primary transition-colors hover:border-primary-accent">
                  Angebot ansehen
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute inset-8 rounded-full bg-primary-accent/10 blur-3xl" />
              <Image src="/brain.png" alt="Illustration eines Gehirns" width={768} height={768} priority className="relative h-auto w-full drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="referenzen" className="scroll-mt-16 border-y border-border bg-white py-16 md:py-20">
        <div className="container">
          <SectionHeader label="AUS DER PRAXIS" title="Projekte, die bereits funktionieren." description="Wir entwickeln nicht nur Konzepte. Wir setzen digitale Lösungen um, begleiten ihre Einführung und arbeiten direkt mit den Menschen vor Ort." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {references.map((reference) => (
              <article key={reference.title} className="rounded-card border border-border bg-surface p-6">
                <div className="mb-6 flex h-20 items-center justify-start">
                  <Image src={reference.logo} alt={reference.alt} width={reference.width} height={reference.height} className="max-h-16 w-auto max-w-[12rem] object-contain object-left" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-accent">{reference.label}</p>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">{reference.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{reference.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="angebot" className="scroll-mt-16 bg-surface py-section-mobile md:py-section">
        <div className="container">
          <SectionHeader label="ANGEBOT" title="Von der ersten Idee bis zum sicheren Einsatz." description="Unser Angebot richtet sich an Schulen, Hochschulen, Bildungsträger und andere Organisationen, die KI nicht nur ausprobieren, sondern sinnvoll nutzen möchten." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-card bg-black p-8 text-white">
              <p className="mb-4 text-sm font-semibold text-primary-accent">01</p>
              <h3 className="mb-3 text-2xl font-semibold">Orientierung</h3>
              <p className="mb-6 text-gray-300">Wir finden die Anwendungsfälle, bei denen KI im Alltag tatsächlich Zeit spart oder Lernen verbessert.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Bedarfs- und Prozessanalyse</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Auswahl geeigneter Werkzeuge</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Klare, realistische Roadmap</li>
              </ul>
            </article>
            <article className="rounded-card border border-primary-accent bg-black p-8 text-white">
              <p className="mb-4 text-sm font-semibold text-primary-accent">02</p>
              <h3 className="mb-3 text-2xl font-semibold">Schulung</h3>
              <p className="mb-6 text-gray-300">Wir machen Lehrkräfte, Lernende und Teams handlungsfähig – verständlich, konkret und nah an ihrer Praxis.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Fortbildungen für Lehrkräfte</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Workshops für Schüler:innen</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Trainings für Teams und Leitung</li>
              </ul>
            </article>
            <article className="rounded-card bg-black p-8 text-white">
              <p className="mb-4 text-sm font-semibold text-primary-accent">03</p>
              <h3 className="mb-3 text-2xl font-semibold">Umsetzung</h3>
              <p className="mb-6 text-gray-300">Wir begleiten Pilotprojekte, entwickeln bei Bedarf eigene digitale Lösungen und verbessern, was im Alltag noch nicht passt.</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Begleitete Pilotprojekte</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Web- und App-Entwicklung</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-accent" />Evaluation und Optimierung</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="ansatz" className="scroll-mt-16 bg-white py-section-mobile md:py-section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-accent">UNSER ANSATZ</p>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">Technologie muss zum Menschen passen – nicht umgekehrt.</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
              <p><strong className="text-text-primary">Neurofreundlich</strong> bedeutet für uns: Digitale Werkzeuge sind verständlich, überfordern nicht mit unnötigen Informationen und unterstützen Aufmerksamkeit, Lernen und Entscheidungen.</p>
              <p>Neurowissenschaft ist dabei kein Selbstzweck und kein Etikett. Sie hilft uns zu verstehen, wie Menschen Informationen verarbeiten und warum eine technisch gute Lösung im Alltag trotzdem scheitern kann.</p>
              <p>Deshalb beginnen wir nicht bei einem Tool, sondern bei den Menschen, ihren Aufgaben und ihrem Umfeld.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="prozess" className="scroll-mt-16 bg-surface py-section-mobile md:py-section">
        <div className="container">
          <SectionHeader label="ZUSAMMENARBEIT" title="Ein klarer Weg von der Frage zur Anwendung." description="Jede Zusammenarbeit ist anders. Der Ablauf bleibt bewusst einfach und nachvollziehbar." />
          <div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-5">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border md:block" />
            {roadmap.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="relative">
                  <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary-accent bg-white text-primary-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-primary-accent">{step.number}</p>
                  <h3 className="mb-3 text-xl font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 bg-white py-section-mobile md:py-section">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-black">
              <Image src="/olivia-bahr.jpg" alt="Olivia Bahr bei der Präsentation eines Forschungsprojekts" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-center" />
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-accent">ÜBER PROVOID</p>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">Praktische Erfahrung trifft wissenschaftliche Neugier.</h2>
              <div className="space-y-5 leading-relaxed text-text-secondary">
                <p>PROVOID wurde 2025 von Olivia Bahr in Hamburg gegründet. Die Arbeit verbindet Erfahrungen aus Neurowissenschaft, medizinischer Datenerhebung und Softwareentwicklung mit der Frage, wie neue Technologie im Alltag wirklich hilfreich wird.</p>
                <p>Olivia sammelte klinische Praxis am UKE und in der ambulanten Neurologie, entwickelte digitale Erhebungsinstrumente für medizinische Einrichtungen und arbeitet an Web- und App-Projekten. Unterstützt wird PROVOID durch ein Team und einen pädagogischen Beirat.</p>
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-medium text-primary-accent hover:text-primary-light">
                Team und Hintergrund <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-16 border-t border-border bg-surface py-section-mobile md:py-section">
        <div className="container">
          <SectionHeader label="EINBLICKE" title="Woran wir arbeiten und was wir lernen." />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} title={post.title} excerpt={post.excerpt} slug={post.id} date={post.date} tags={post.tags} />
            ))}
          </div>
          <Link href="/insights" className="mt-8 inline-flex items-center gap-2 font-medium text-primary-accent hover:text-primary-light">
            Alle Beiträge ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-16 bg-black py-16 text-white md:py-24">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-accent">KONTAKT</p>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight md:text-5xl">Wo könnte KI bei Ihnen konkret helfen?</h2>
              <p className="text-lg text-gray-300">In einem ersten Gespräch klären wir Ihre Ausgangslage und ob PROVOID der passende Partner ist.</p>
            </div>
            <Link href="/kontakt" className="inline-flex shrink-0 items-center gap-2 rounded-editorial bg-primary-accent px-6 py-3 font-medium text-white transition-colors hover:bg-primary-light">
              Gespräch vereinbaren <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
