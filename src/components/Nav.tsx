import { useEffect, useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { nav, profile } from '../data/content'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line/80 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm tracking-wide text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan/30 bg-panel text-cyan transition group-hover:border-cyan/60">
            <Shield className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span>
            IT<span className="text-cyan">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition hover:bg-panel-2 hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.links.email}
            className="ml-2 rounded-md border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan transition hover:border-cyan hover:bg-cyan/20"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md border border-line p-2 text-soft md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-mono text-sm uppercase tracking-wider text-soft hover:bg-panel-2 hover:text-cyan"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
