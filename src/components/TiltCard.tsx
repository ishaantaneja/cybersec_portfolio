import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export function TiltCard({ children, className = '', maxTilt = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  const reset = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)'
  }, [])

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!enabled) return
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotateY = (px - 0.5) * (maxTilt * 2)
      const rotateX = (0.5 - py) * (maxTilt * 2)

      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px) scale(1.01)`
      })
    },
    [enabled, maxTilt],
  )

  useEffect(
    () => () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    },
    [],
  )

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  )
}
