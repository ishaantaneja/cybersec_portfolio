import { experience } from '../data/content'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section-pad border-y border-line/60 bg-panel/40">
      <div className="mx-auto max-w-6xl">
        <Reveal as="header" className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Roles that shaped the craft
          </h2>
        </Reveal>

        <div className="space-y-4">
          {experience.map((job, i) => (
            <Reveal as="article" key={`${job.org}-${job.role}`} delayMs={i * 70}>
              <div className="card-lift rounded-xl border border-line/80 bg-ink/60 p-5 sm:p-6 glow-border transition hover:border-cyan/25">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white">{job.role}</h3>
                    <p className="mt-1 text-cyan">{job.org}</p>
                  </div>
                  <div className="shrink-0 font-mono text-xs text-muted sm:text-right">
                    <p>{job.dates}</p>
                    <p className="mt-1">{job.location}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
