"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { NOTICES } from "@/lib/data";

type Notice = (typeof NOTICES)[number];

interface NoticeTickerProps {
  onSelectNotice: (notice: Notice) => void;
  onOpenOnlineApply: () => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({
  onSelectNotice,
  onOpenOnlineApply,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group || NOTICES.length === 0) return;

    const setupMarquee = () => {
      // Kill previous animation before recalculating
      timelineRef.current?.kill();

      // Reset position
      gsap.set(track, {
        x: 0,
      });

      // Width of one complete notice group
      const groupWidth = group.offsetWidth;

      if (!groupWidth) return;

      // GSAP infinite marquee
      timelineRef.current = gsap.to(track, {
        x: -groupWidth,
        duration: window.matchMedia("(max-width: 1023px)").matches ? 55 : 40,
        ease: "none",
        repeat: -1,
        force3D: true,
      });
    };

    setupMarquee();

    // Recalculate when window/container size changes
    const resizeObserver = new ResizeObserver(() => {
      setupMarquee();
    });

    resizeObserver.observe(group);
    window.addEventListener("resize", setupMarquee);

    return () => {
      timelineRef.current?.kill();
      resizeObserver.disconnect();
      window.removeEventListener("resize", setupMarquee);
    };
  }, []);

  const tickerGroup = (groupIndex: number) => (
    <div
      ref={groupIndex === 0 ? groupRef : undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {NOTICES.map((notice, index) => (
        <button
          key={`${groupIndex}-${notice.title}-${index}`}
          type="button"
          onClick={() => onSelectNotice(notice)}
          className="inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-950 transition-colors duration-200 hover:text-[#0D0357] hover:underline focus:outline-none sm:gap-2 sm:text-sm lg:text-base"
        >
          {/* Bullet */}
          <span
            className="font-black text-[#0D0357]"
            aria-hidden="true"
          >
            •
          </span>

          {/* Date */}
          <span className="font-extrabold text-[#0D0357]">
            [{notice.date}]
          </span>

          {/* Title */}
          <span className="font-semibold">
            {notice.title}
          </span>
        </button>
      ))}
    </div>
  );

  const handleMouseEnter = () => {
    timelineRef.current?.pause();
  };

  const handleMouseLeave = () => {
    timelineRef.current?.resume();
  };

  return (
    <section
      className="relative z-20 my-3 w-full overflow-hidden border-b border-amber-600/30 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-4 py-5 text-slate-950 shadow-sm"
      aria-label="Latest university notices"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3">

        {/* Latest Notice Badge */}
        <div className="flex shrink-0 items-center rounded-md bg-[#0D0357] px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm sm:px-2.5 sm:text-[11px] lg:px-2.5 lg:text-sm lg:tracking-wider">
          <span>Latest Notice</span>
        </div>

        {/* Marquee Container */}
        <div
          className="relative min-w-0 flex-1 overflow-hidden whitespace-nowrap"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* GSAP Track */}
          <div
            ref={trackRef}
            className="flex w-max items-center will-change-transform"
          >
            {tickerGroup(0)}
            {tickerGroup(1)}
            {tickerGroup(2)}
          </div>
        </div>

        {/* Apply Online Button */}
        <button
          type="button"
          onClick={onOpenOnlineApply}
          className="hidden shrink-0 items-center gap-1 rounded-md bg-[#0D0357] px-2.5 py-1 text-xs font-black text-amber-300 shadow-sm transition-all duration-200 hover:bg-[#070138] hover:text-white focus:outline-none md:flex lg:px-3 lg:text-[0.99rem]"
        >
          <span>Apply Online</span>

          <ArrowRight
            className="h-3 w-3"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};
