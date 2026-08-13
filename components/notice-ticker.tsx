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
        duration: 30,
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

    return () => {
      timelineRef.current?.kill();
      resizeObserver.disconnect();
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
          className="inline-flex shrink-0 items-center gap-2 text-slate-950 transition-colors duration-200 hover:text-[#0D0357] hover:underline focus:outline-none"
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
        <div className="flex shrink-0 items-center gap-1.5 rounded-md bg-[#0D0357] px-3 py-1 text-[0.9rem] font-black uppercase tracking-wider text-white shadow-sm">
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
          className="hidden shrink-0 items-center gap-1 rounded-md bg-[#0D0357] px-3 py-1 text-[0.99rem] font-black text-amber-300 shadow-sm transition-all duration-200 hover:bg-[#070138] hover:text-white focus:outline-none md:flex"
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