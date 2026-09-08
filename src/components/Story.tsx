import { story } from '../data/content'

export function Story() {
  return (
    <section id="story" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Story arc</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From builder to defender
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Four beats — engineering craft, the AI inflection, deliberate defense training, and the path ahead.
          </p>
        </header>

        <ol className="relative space-y-0 border-l border-line/80 ml-3 sm:ml-4">
          {story.map((beat) => (
            <li key={beat.phase} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-cyan bg-ink shadow-[0_0_12px_rgba(34,211,238,0.55)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan/80">
                Phase {beat.phase}
              </p>
              <h3 className="mt-2 text-xl font-medium text-white">{beat.title}</h3>
              <p className="mt-2 max-w-2xl text-muted leading-relaxed">{beat.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
