import { lazy, Suspense, useEffect, useState } from 'react'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

export function HeroBackdrop() {
  const [ready, setReady] = useState(false)
  const [simplified, setSimplified] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData =
      'connection' in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)

    // Only skip WebGL for accessibility / explicit data-saver — still show CSS fallback layers
    if (reduced || saveData) {
      setShow(false)
      return
    }

    const narrow = window.matchMedia('(max-width: 767px)').matches
    const mid = window.matchMedia('(max-width: 1023px)').matches
    // Mobile + tablet: simplified scene (1 orb + rings), lower dpr — still visible
    setSimplified(narrow || mid)
    setShow(true)

    // Defer mount slightly so LCP text paints first
    const id = window.setTimeout(() => setReady(true), 100)
    return () => window.clearTimeout(id)
  }, [])

  if (!show || !ready) return null

  return (
    <Suspense fallback={null}>
      <HeroCanvas simplified={simplified} />
    </Suspense>
  )
}
