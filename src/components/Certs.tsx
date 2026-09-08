import { Award } from 'lucide-react'
import { certs, education, volunteering } from '../data/content'

export function Certs() {
  return (
    <section id="certs" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Credentials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Certs, education, community
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-3">
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="flex gap-4 rounded-xl border border-line/80 bg-panel/70 p-4 glow-border"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                  <Award className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-medium text-white">{cert.name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted break-all">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-line/80 bg-ink/60 p-5 glow-border">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">Education</p>
              <h3 className="mt-3 text-base font-medium text-white">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-2 font-mono text-xs text-muted">{education.dates}</p>
            </div>

            <div className="rounded-xl border border-line/80 bg-ink/60 p-5 glow-border">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">Volunteering</p>
              <ul className="mt-3 space-y-2">
                {volunteering.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
