import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { imageUrl } from "@/lib/site-assets"
import { ArrowRight, Calendar } from "lucide-react"
import { NEWS } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger);

export function NewsEvents() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        "[data-news-heading]",
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Animate cards
      gsap.fromTo(
        "[data-news-card]",
        { autoAlpha: 0, y: 24, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = NEWS.slice(0, 4)
  return (
<section
  ref={sectionRef}
  className="relative mx-auto w-full overflow-hidden bg-white px-4 py-20 lg:px-8"
>
  {/* =====================================================
      BACKGROUND PATTERN
      ===================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0"
  >
    <div
      className="absolute inset-0 bg-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://www.iiuc.ac.bd/assets/backpattern-SdO-ezZO.png')",
        backgroundSize: "920px auto",
        opacity: 0.055,
      }}
    />
  </div>

  {/* =====================================================
      CONTENT
      ===================================================== */}
  <div className="relative z-10">
    {/* HEADER */}
    <div
      data-news-heading
      className="mb-10 flex flex-wrap items-end justify-between gap-4"
    >
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          News &amp; Events
        </p>

        <h2 className="font-serif text-3xl font-bold text-black md:text-4xl">
          Latest News &amp; Events
        </h2>
      </div>

      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
      >
        View All News
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {/* =====================================================
        NEWS GRID
        ===================================================== */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.slug}
          data-news-card
          href={`/news/${item.slug}`}
          className="group flex flex-col"
        >
          {/* IMAGE */}
          <div className="relative mb-4 overflow-hidden rounded-xl">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* CATEGORY */}
            <span className="absolute left-3 top-3 rounded bg-brand-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {item.category}
            </span>
          </div>

          {/* DATE */}
          <p className="mb-1.5 flex items-center gap-1.5 text-xs text-black">
            <Calendar className="h-3.5 w-3.5 text-black" />
            {item.date}
          </p>

          {/* TITLE */}
          <h3 className="mb-2 font-serif text-base font-bold leading-snug text-balance text-black">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed text-black">
            {item.excerpt}
          </p>
        </Link>
      ))}
    </div>
  </div>
</section>
  )
}
