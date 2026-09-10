import { Award, ExternalLink, FileText } from 'lucide-react'
import { assetUrl, certs, education, leadership, volunteering } from '../data/content'
import { Reveal } from './Reveal'

export function Certs() {
  const featured = certs.find((c) => c.featured)
  const rest = certs.filter((c) => !c.featured)

  return (
    <section id="certs" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal as="header" className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Credentials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Certs, education, community
          </h2>
        </Reveal>

        {featured?.badge && (
          <Reveal className="mb-8">
            <div className="card-lift flex flex-col gap-5 rounded-2xl border border-cyan/25 bg-gradient-to-br from-panel via-ink to-panel-2 p-5 sm:flex-row sm:items-center sm:p-6 glow-border">
              <a
                href={assetUrl(featured.badge)}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto shrink-0 sm:mx-0"
              >
                <img
                  src={assetUrl(featured.badge)}
                  alt="CompTIA Security+ certification badge"
                  className="h-36 w-auto drop-shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:scale-[1.03] sm:h-44"
                />
              </a>
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">Featured cert</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{featured.name}</h3>
                <p className="mt-2 font-mono text-xs text-muted break-all">{featured.detail}</p>
              </div>
            </div>
          </Reveal>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-2">
            {rest.map((cert, i) => (
              <Reveal key={cert.name} delayMs={i * 60}>
                {cert.href ? (
                  <a
                    href={assetUrl(cert.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-lift flex gap-4 rounded-xl border border-line/80 bg-panel/70 p-4 glow-border transition hover:border-cyan/35"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                      <FileText className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-white">{cert.name}</h3>
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan/70" />
                      </div>
                      <p className="mt-1 font-mono text-xs text-muted">{cert.detail}</p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan/80">
                        View certificate PDF
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="card-lift flex gap-4 rounded-xl border border-line/80 bg-panel/70 p-4 glow-border">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                      <Award className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{cert.name}</h3>
                      <p className="mt-1 font-mono text-xs text-muted break-all">{cert.detail}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            <Reveal delayMs={40}>
              <div className="card-lift rounded-xl border border-line/80 bg-ink/60 p-5 glow-border">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">Education</p>
                <h3 className="mt-3 text-base font-medium text-white">{education.degree}</h3>
                <p className="mt-1 text-sm text-muted">{education.school}</p>
                <p className="mt-2 font-mono text-xs text-muted">{education.dates}</p>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="card-lift rounded-xl border border-line/80 bg-ink/60 p-5 glow-border">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                  Leadership
                </p>
                <a
                  href={assetUrl(leadership.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block overflow-hidden rounded-lg border border-line/80 transition hover:border-cyan/40"
                >
                  <img
                    src={assetUrl(leadership.image)}
                    alt={leadership.title}
                    className="h-36 w-full object-cover object-top transition hover:scale-[1.02]"
                  />
                </a>
                <h3 className="mt-3 text-sm font-medium text-white">{leadership.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{leadership.detail}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan/80">
                  View full certificate
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="card-lift rounded-xl border border-line/80 bg-ink/60 p-5 glow-border">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                  Volunteering
                </p>
                <ul className="mt-3 space-y-2">
                  {volunteering.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
