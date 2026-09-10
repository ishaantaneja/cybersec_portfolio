import { ArrowUpRight, Mail, Terminal } from 'lucide-react'
import { assetUrl, profile } from '../data/content'
import { LinkedInIcon } from './LinkedInIcon'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden section-pad pt-28 md:pt-36">
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan-dim/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <h1 className="hero-enter max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
          {profile.name}
        </h1>

        <p className="hero-enter hero-enter-delay-1 mt-4 font-mono text-sm text-cyan sm:text-base">
          {profile.title}
        </p>
        <p className="hero-enter hero-enter-delay-2 mt-2 font-mono text-xs text-soft/90 sm:text-sm">
          {profile.subtitle}
        </p>

        <p className="hero-enter hero-enter-delay-3 mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl text-balance">
          {profile.hook}
        </p>

        <div className="hero-enter hero-enter-delay-4 mt-10 flex flex-wrap gap-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-cyan/40 bg-cyan/10 px-4 py-2.5 text-sm font-medium text-cyan transition hover:border-cyan hover:bg-cyan/20 hover:-translate-y-0.5"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
          <a
            href={profile.links.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-2.5 text-sm font-medium text-soft transition hover:border-cyan/40 hover:text-cyan hover:-translate-y-0.5"
          >
            <Terminal className="h-4 w-4" />
            TryHackMe
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-2.5 text-sm font-medium text-soft transition hover:border-cyan/40 hover:text-cyan hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={assetUrl('resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-2.5 text-sm font-medium text-soft transition hover:border-cyan/40 hover:text-cyan hover:-translate-y-0.5"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>

        <div className="hero-enter hero-enter-delay-5 mt-14 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'Focus', v: 'SOC Analyst' },
            { k: 'Base', v: 'Dubai · Remote-ready' },
            { k: 'Cert', v: 'CompTIA Security+' },
          ].map((item) => (
            <div
              key={item.k}
              className="card-lift rounded-lg border border-line/80 bg-panel/70 px-4 py-3 glow-border"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{item.k}</p>
              <p className="mt-1 text-sm text-white">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
