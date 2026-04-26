"use client"

import { useEffect, useRef } from "react"

export function HeroBgText() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const hero = el.closest('.hero')
    if (!hero) return

    let raf = null
    let tX = 0, tY = 0, cX = 0, cY = 0

    function onMove(e) {
      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      tX = x * 3
      tY = y * -2
    }

    function onLeave() {
      tX = 0
      tY = 0
    }

    function tick() {
      cX += (tX - cX) * 0.06
      cY += (tY - cY) * 0.06
      el.style.transform = `perspective(1000px) rotateY(${cX}deg) rotateX(${cY}deg)`
      raf = requestAnimationFrame(tick)
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="hero__bg-text" aria-hidden="true">
      ATREIDES
    </div>
  )
}
