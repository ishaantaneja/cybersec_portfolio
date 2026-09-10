import { skillGroups } from '../data/content'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="section-pad border-y border-line/60 bg-panel/40">
      <div className="mx-auto max-w-6xl">
        <Reveal as="header" className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Stack for the SOC floor
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delayMs={(i % 4) * 50}>
              <div className="card-lift h-full rounded-xl border border-line/80 bg-ink/50 p-4 glow-border">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line/90 bg-panel-2/80 px-2 py-1 text-xs text-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
