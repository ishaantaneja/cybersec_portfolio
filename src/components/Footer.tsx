import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line/60 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted/80">
          CompTIA Security+ · SOC Analyst · Dubai
        </p>
      </div>
    </footer>
  )
}
