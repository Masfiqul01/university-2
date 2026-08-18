"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger)

/**
 * Sections whose own component already drives GSAP. The global engine detects
 * these markers, leaves those subtrees untouched, and never double-animates.
 */
const SELF_ANIMATED = [
  "[data-hero-image]",
  "[data-hero-content]",
  "[data-banner-image]",
  "[data-banner-heading]",
  "[data-banner-cta]",
  "[data-news-heading]",
  "[data-news-card]",
  "[data-why-item]",
  "[data-programs-header]",
  "[data-program-card]",
  "[data-program-filter]",
  "[data-leadership-card]",
  "[data-footer-section]",
  "[data-step]",
  "[data-motion-ignore]",
].join(",")

/** Horizontal wipe: zero width to full width. */
const WIPE_CLOSED = "inset(0% 100% 0% 0%)"
const WIPE_OPEN = "inset(0% 0% 0% 0%)"

/** Vertical wipe used for headings. */
const RISE_CLOSED = "inset(0% 0% 100% 0%)"
const RISE_OPEN = "inset(0% 0% 0% 0%)"

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === 1
}

function children(el: Element): HTMLElement[] {
  return Array.from(el.children).filter(isElement)
}

/**
 * A block of elements that reveal together off a single scroll trigger.
 * `claim` blocks every descendant from being picked up by a later recipe, which
 * is what keeps a container and its own contents from fading in against each
 * other.
 */
type Group = { trigger: Element; items: HTMLElement[]; claim: boolean }

type Recipe = {
  name: string
  /** Where the reveal starts, as a ScrollTrigger `start` value. */
  start: string
  collect: (root: HTMLElement, take: (el: Element) => boolean) => Group[]
  from: gsap.TweenVars
  to: gsap.TweenVars
}

/**
 * Ordered widest-container-first. Everything a recipe claims is invisible to
 * the recipes below it, so each element animates exactly once.
 */
const RECIPES: Recipe[] = [
  {
    // Card grids: feature tiles, stat rows, faculty and program listings.
    name: "grid",
    start: "top 85%",
    collect: (root, take) =>
      Array.from(root.querySelectorAll<HTMLElement>("[class~='grid']"))
        .filter(take)
        .map((grid) => ({ trigger: grid, items: children(grid), claim: true }))
        .filter((group) => group.items.length >= 2),
    from: { y: 46, autoAlpha: 0, scale: 0.97 },
    to: { y: 0, autoAlpha: 1, scale: 1, duration: 0.85, ease: "power3.out", stagger: 0.08 },
  },
  {
    // Standalone panels: CTA bands, callouts, highlight boxes. Transform only
    // and deliberately non-claiming, so the panel drifts up as a slab while the
    // heading, copy and buttons inside it still get their own reveals.
    name: "panel",
    start: "top 84%",
    collect: (root, take) =>
      Array.from(root.querySelectorAll<HTMLElement>("[class~='rounded-3xl'], [class~='rounded-2xl']"))
        .filter((panel) => panel.querySelector("h1, h2, h3, h4, p") && !panel.querySelector("section"))
        .filter(take)
        .map((panel) => ({ trigger: panel, items: [panel], claim: false })),
    from: { y: 52, scale: 0.985 },
    to: { y: 0, scale: 1, duration: 0.95, ease: "power3.out" },
  },
  {
    // Bullet and checklist rows peel in one after another.
    name: "list",
    start: "top 88%",
    collect: (root, take) =>
      Array.from(root.querySelectorAll<HTMLElement>("ul, ol, dl"))
        .filter(take)
        .map((list) => ({ trigger: list, items: children(list), claim: true }))
        .filter((group) => group.items.length > 0),
    from: { x: -18, autoAlpha: 0 },
    to: { x: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out", stagger: 0.07 },
  },
  {
    // Button and link clusters land last, after the copy they belong to.
    name: "actions",
    start: "top 90%",
    collect: (root, take) =>
      Array.from(root.querySelectorAll<HTMLElement>("[class~='flex'], [class~='inline-flex']"))
        .filter((row) => {
          const items = children(row)
          return items.length > 0 && items.every((item) => item.matches("a, button"))
        })
        .filter(take)
        .map((row) => ({ trigger: row, items: children(row), claim: true })),
    from: { y: 20, autoAlpha: 0, scale: 0.94 },
    to: { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)", stagger: 0.09 },
  },
  {
    // Headings wipe upward from their own baseline.
    name: "heading",
    start: "top 90%",
    collect: (root, take) =>
      Array.from(root.querySelectorAll<HTMLElement>("h1, h2, h3, h4"))
        .filter(take)
        .map((heading) => ({ trigger: heading, items: [heading], claim: true })),
    from: { clipPath: RISE_CLOSED, y: 30, autoAlpha: 0 },
    to: {
      clipPath: RISE_OPEN,
      y: 0,
      autoAlpha: 1,
      duration: 0.95,
      ease: "power3.out",
      clearProps: "clipPath",
    },
  },
  {
    // Everything else that carries copy.
    name: "copy",
    start: "top 92%",
    collect: (root, take) =>
      Array.from(root.querySelectorAll<HTMLElement>("p, blockquote, table, figure, form"))
        .filter(take)
        .map((el) => ({ trigger: el, items: [el], claim: true })),
    from: { y: 24, autoAlpha: 0 },
    to: { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" },
  },
]

export function PageMotion() {
  const pathname = usePathname()
  const lenis = useRef<Lenis | null>(null)
  const firstRun = useRef(true)

  // Smooth scrolling lives for the life of the app, not the life of a route.
  // ScrollTrigger reads Lenis' virtual position instead of the native one, so
  // every reveal above stays in sync with the eased scroll.
  useEffect(() => {
    if (prefersReducedMotion()) return

    const instance = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenis.current = instance

    const update = () => ScrollTrigger.update()
    const raf = (time: number) => instance.raf(time * 1000)

    instance.on("scroll", update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      instance.off("scroll", update)
      gsap.ticker.remove(raf)
      gsap.ticker.lagSmoothing(500, 33)
      instance.destroy()
      lenis.current = null
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("main")
    const html = document.documentElement
    const disarm = () => html.classList.remove("motion-armed")

    // Some routes render their own shell without a <main> wrapper, and there is
    // nothing for the global engine to scope itself to.
    if (!root) {
      disarm()
      return
    }

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll("img"), { clearProps: "clipPath" })
      disarm()
      return
    }

    const isFirstRun = firstRun.current
    firstRun.current = false

    if (!isFirstRun) lenis.current?.scrollTo(0, { immediate: true })

    const context = gsap.context(() => {
      // 1. Fence off every block that animates itself.
      root.querySelectorAll("[data-motion-skip]").forEach((el) => el.removeAttribute("data-motion-skip"))

      const blocks = new Set<HTMLElement>([
        ...children(root),
        ...Array.from(root.querySelectorAll<HTMLElement>("section")),
      ])
      blocks.forEach((block) => {
        if (block.matches(SELF_ANIMATED) || block.querySelector(SELF_ANIMATED)) {
          block.setAttribute("data-motion-skip", "")
        }
      })

      const claimed = new WeakSet<Element>()
      const isClaimed = (el: Element) => {
        for (let node: Element | null = el; node && node !== root; node = node.parentElement) {
          if (claimed.has(node)) return true
        }
        return false
      }
      /** True when this recipe may own the element, and no later one may. */
      const take = (el: Element) => !el.closest("[data-motion-skip]") && !isClaimed(el)

      // 2. Hero band: the wipe carries the backdrop, the copy follows it in.
      // The fence applies here too — the homepage ships its own hero timeline,
      // and running both against the same nodes leaves them stuck hidden.
      const firstBlock = children(root)[0]
      const hero = firstBlock && take(firstBlock) ? firstBlock : null
      const heroImage = hero?.querySelector<HTMLImageElement>("img") ?? null
      const heroIsBackdrop = heroImage != null && getComputedStyle(heroImage).position === "absolute"

      if (hero && heroImage && heroIsBackdrop) {
        claimed.add(hero)

        const heroChildren = children(hero)
        const overlays = heroChildren.filter(
          (child) => child !== heroImage && getComputedStyle(child).position === "absolute",
        )
        const content = heroChildren.find(
          (child) => child !== heroImage && getComputedStyle(child).position !== "absolute",
        )
        const copy = content ? children(content) : []
        const inner = copy.length === 1 && copy[0].childElementCount > 1 ? children(copy[0]) : copy

        const intro = gsap.timeline({ defaults: { ease: "expo.out" } })

        intro.fromTo(
          heroImage,
          { clipPath: WIPE_CLOSED, scale: 1.12 },
          { clipPath: WIPE_OPEN, scale: 1, duration: 1.5 },
        )

        if (overlays.length) {
          intro.fromTo(overlays, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9 }, "-=1.1")
        }

        if (inner.length) {
          intro.fromTo(
            inner,
            { clipPath: RISE_CLOSED, y: 34, autoAlpha: 0 },
            {
              clipPath: RISE_OPEN,
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.09,
              clearProps: "clipPath",
            },
            "-=0.95",
          )
        }

        gsap.to(heroImage, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
        })
      }

      // 3. Structural reveals, widest container first.
      RECIPES.forEach((recipe) => {
        recipe.collect(root, take).forEach((group) => {
          if (group.claim) group.items.forEach((item) => claimed.add(item))

          gsap.fromTo(group.items, recipe.from, {
            ...recipe.to,
            scrollTrigger: { trigger: group.trigger, start: recipe.start, once: true },
          })
        })
      })

      // 4. Details that ride on top of a container reveal. These only touch
      // properties the recipes leave alone, and start later so the block they
      // sit in is already on screen.

      // Every image opens from zero width to full width.
      const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"))

      gsap.set(
        images.filter((image) => image.closest("[data-motion-skip]") || image === heroImage),
        { clearProps: "clipPath" },
      )

      images
        .filter((image) => !image.closest("[data-motion-skip]") && image !== heroImage)
        .forEach((image) => {
          gsap.fromTo(
            image,
            { clipPath: WIPE_CLOSED, scale: 1.08 },
            {
              clipPath: WIPE_OPEN,
              scale: 1,
              duration: 1.25,
              ease: "expo.out",
              scrollTrigger: { trigger: image, start: "top 78%", once: true },
            },
          )
        })

      // Icon badges spring out of their tile.
      root.querySelectorAll<HTMLElement>("span > svg").forEach((icon) => {
        const badge = icon.parentElement
        if (!badge || badge.closest("[data-motion-skip]")) return

        gsap.fromTo(
          icon,
          { scale: 0.4, rotate: -12 },
          {
            scale: 1,
            rotate: 0,
            duration: 0.7,
            ease: "back.out(2.2)",
            scrollTrigger: { trigger: badge, start: "top 80%", once: true },
          },
        )
      })

      // Stat figures count up to their printed value.
      root.querySelectorAll<HTMLElement>("p, span, dd, h2, h3").forEach((el) => {
        if (el.childElementCount > 0 || el.closest("[data-motion-skip]")) return

        let text = el.getAttribute("data-original-text")
        if (!text) {
          text = el.textContent?.trim() ?? ""
          el.setAttribute("data-original-text", text)
        } else {
          el.textContent = text
        }
        const match = /^(\d[\d,]*)(\D*)$/.exec(text)
        if (!match) return

        const target = Number(match[1].replace(/,/g, ""))
        const suffix = match[2]
        if (!Number.isFinite(target) || target === 0) return
        // Years, room numbers and the like read as gibberish while counting.
        if (target >= 1900 && target <= 2100) return

        const counter = { value: 0 }
        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.value).toLocaleString()}${suffix}`
          },
          onComplete: () => {
            el.textContent = text
          },
        })
      })

      // 5. Client-side navigation gets a short cross-fade into the new page.
      if (!isFirstRun) {
        gsap.fromTo(root, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" })
      }

      ScrollTrigger.refresh()
    }, root)

    disarm()

    return () => context.revert()
  }, [pathname])

  return null
}
