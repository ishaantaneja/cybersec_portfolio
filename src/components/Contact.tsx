import { Mail, Terminal } from 'lucide-react'
import { profile } from '../data/content'
import { LinkedInIcon } from './LinkedInIcon'

const channels = [
  {
    label: 'Email',
    href: profile.links.email,
    value: profile.links.emailLabel,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    href: profile.links.linkedin,
    value: 'linkedin.com/in/ishaantaneja',
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'TryHackMe',
    href: profile.links.tryhackme,
    value: 'tryhackme.com/p/ishaan.taneja',
    icon: Terminal,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line/60 bg-panel/40">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-panel via-ink to-panel-2 p-8 sm:p-10 glow-border">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Contact</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
            Let&apos;s talk SOC Analyst L1 roles in Dubai
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Open to L1 analyst seats where alert triage, investigation discipline, and clear documentation matter.
            Reach out via email, LinkedIn, or TryHackMe.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group rounded-xl border border-line/80 bg-ink/70 p-4 transition hover:border-cyan/40"
                >
                  <div className="flex items-center gap-2 text-cyan">
                    <Icon className="h-4 w-4" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
                      {channel.label}
                    </span>
                  </div>
                  <p className="mt-3 break-all text-sm text-soft group-hover:text-white">
                    {channel.value}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
