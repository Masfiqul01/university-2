"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/** Matches the first numeric run in a label, e.g. `3,000` in `3,000+`. */
const NUMBER = /\d[\d,]*(\.\d+)?/

type Props = {
  /**
   * The stat exactly as it should read when the count finishes — prefix and
   * suffix included, e.g. `"3,000+"`, `"BDT 15 Cr"`, `"98%"`. Anything around
   * the number is preserved verbatim; a value with no digits renders as-is.
   */
  value: string
  /** Where the count starts. Defaults to 0. */
  from?: number
  /** Seconds. */
  duration?: number
  className?: string
}

/**
 * Counts a stat up to its final value the first time it scrolls into view.
 *
 * Takes the already-formatted string rather than a number so callers keep the
 * copy in one place, and so separators, currency prefixes and `+` suffixes
 * survive the animation untouched.
 */
export function CountUp({ value, from = 0, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(NUMBER)
    if (!match) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const raw = match[0]
    const target = Number(raw.replace(/,/g, ""))
    if (!Number.isFinite(target)) return

    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0
    const grouped = raw.includes(",")
    const before = value.slice(0, match.index)
    const after = value.slice((match.index ?? 0) + raw.length)

    const format = (n: number) => {
      const fixed = n.toFixed(decimals)
      const withSeparators = grouped
        ? Number(fixed).toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed
      return `${before}${withSeparators}${after}`
    }

    const counter = { n: from }
    el.textContent = format(from)

    const tween = gsap.to(counter, {
      n: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = format(counter.n)
      },
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
      el.textContent = value
    }
  }, [value, from, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
