import { projects } from '../data/content'

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Labs, sims, and paths
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Hands-on defense work — detection labs, social-engineering sims, and structured SOC training.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-line/80 bg-panel/70 p-5 glow-border transition hover:border-cyan/30"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {project.date}
              </p>
              <h3 className="mt-3 text-base font-medium leading-snug text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line bg-ink/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
