import { lazy, Suspense, useEffect, useState } from 'react'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

export function HeroBackdrop() {
  const [ready, setReady] = useState(false)
  const [simplified, setSimplified] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const narrow = window.matchMedia('(max-width: 767px)').matches
    const saveData =
      'connection' in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)

    if (reduced || saveData) {
      setShow(false)
      return
    }

    // Mobile: skip WebGL entirely for battery / LCP
    if (narrow) {
      setShow(false)
      return
    }

    const mid = window.matchMedia('(max-width: 1023px)').matches
    setSimplified(mid)
    setShow(true)

    // Defer mount slightly so LCP text paints first
    const id = window.setTimeout(() => setReady(true), 120)
    return () => window.clearTimeout(id)
  }, [])

  if (!show || !ready) return null

  return (
    <Suspense fallback={null}>
      <HeroCanvas simplified={simplified} />
    </Suspense>
  )
}
