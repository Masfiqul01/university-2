"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight, ChevronDown, ExternalLink } from "lucide-react"
import { NAV_ITEMS } from "@/lib/nav"
import { LOGO_URL } from "@/lib/site-assets"
import { usePathname } from "next/navigation";

/*
  ============================================================
  KKJSTU WEBSITE HEADER
  ============================================================

  এই file-এর কাজ:
  - Top utility bar দেখানো
  - Main navbar দেখানো
  - Administration hover mega-menu দেখানো
  - Mobile menu control করা
  - Logo URL থেকে logo নেওয়া

  IMPORTANT:
  NAV_ITEMS-এর ভিতরের menu data এখানে পরিবর্তন করা হয়নি।
  তাই existing navigation / links আগের মতোই কাজ করবে।
*/


function Logo({ light = true }: { light?: boolean }) {
  /*
    ------------------------------------------------------------
    LOGO
    ------------------------------------------------------------

    lib/site-assets.ts-এর LOGO_URL-এ direct image URL দিলে
    website-এর logo এখান থেকে automatically replace হবে।

    Example:
    export const LOGO_URL = "https://example.com/logo.png"
  */

  return (
    <Link href="/" className="flex shrink-0 items-center gap-1">
  {LOGO_URL ? (
    <img
      src={LOGO_URL}
      alt="KACST logo"
      className="-ml-4 h-16 w-16 object-contain"
    />
  ) : (
    <div
      className={`-ml-2 flex h-16 w-16 items-center justify-center rounded-full border-2 text-[11px] font-bold tracking-tight ${
        light
          ? "border-white/80 bg-brand-dark text-white"
          : "border-brand bg-brand text-white"
      }`}
    >
      KACST
    </div>
  )}

  <div
    className={`hidden leading-tight sm:block ${
      light ? "text-white" : "text-foreground"
    }`}
  >
    <p className="text-[12px] font-semibold tracking-wide">
      Khanjahan Ali College
    </p>

    <p className="text-[12px] font-semibold tracking-wide">
      of Science & Technology
    </p>
  </div>
</Link>
  )
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  /*
    ------------------------------------------------------------
    HEADER POSITION
    ------------------------------------------------------------

    Homepage/hero section হলে overlay=true হবে এবং header
    hero image-এর উপরে থাকবে।

    অন্য page-এ sticky header থাকবে।
  */

  const wrapperClass = overlay
    ? "absolute inset-x-0 top-0 z-50"
    : "sticky top-0 z-50"

  return (
    <header className={wrapperClass}>
      {/* ======================================================
          TOP UTILITY BAR
          Screenshot-এর একদম উপরের ছোট green bar
          ====================================================== */}

  <div className="h-6 bg-brand-dark">
  <div className="mx-auto flex h-full max-w-[1540px] items-center justify-between px-4 lg:px-6">
    
    {/* বাম পাশের অংশ: হেল্পলাইন এবং কোডগুলো */}
    <div className="flex items-center gap-4 text-[11px] font-medium text-white/90">
      
      {/* হেল্পলাইন */}
      <div className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Helpline: <strong className="text-white">+880 1711-042194</strong></span>
      </div>

      <span className="text-white/20">|</span>

      {/* EIIN, NU, BTEB ব্যাজ */}
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px]">
        <svg className="h-3 w-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>EIIN: 134211 • NU: 0309 • BTEB: 54095</span>
      </div>
    </div>

    {/* ডান পাশের অংশ: ট্র্যাক স্ট্যাটাস, রেজাল্ট পোর্টাল, পে ফিজ এবং লগইন লিংক */}
    <div className="flex items-center gap-4 text-[11px] font-medium text-white/90">
      
      {/* Track Status */}
      <Link href="/track-status" className="flex items-center gap-1.5 transition-colors hover:text-white">
        <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Track Status</span>
      </Link>

      {/* Result Portal */}
      <Link href="/result" className="flex items-center gap-1.5 transition-colors hover:text-white">
        <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Result Portal</span>
      </Link>

      {/* Pay Fees */}
      <Link href="/pay-fees" className="flex items-center gap-1.5 transition-colors hover:text-white">
        <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <span>Pay Fees</span>
      </Link>

      {/* HOD Login */}
      <Link href="/hod-login" className="flex items-center gap-1.5 font-semibold text-amber-400 transition-colors hover:text-amber-300">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>HOD Login</span>
      </Link>

    </div>
  </div>
</div>

      {/* ======================================================
          MAIN HEADER AREA
          Screenshot-এর logo + center navbar + login area
          ====================================================== */}

      <div
        className={
          overlay
            ? "bg-white/20 backdrop-blur-[10px]"
            : "bg-brand-dark/90 backdrop-blur-md"
        }
      >
        <div className="mx-auto flex h-[72px] max-w-[1540px] items-center justify-between px-5 lg:px-8">
          {/* --------------------------------------------------
              LEFT: LOGO
              -------------------------------------------------- */}

          <Logo light />

          {/* --------------------------------------------------
              CENTER: DESKTOP NAVBAR

              White pill design screenshot-এর মতো।
              NAV_ITEMS-এর existing data ব্যবহার করা হচ্ছে।
              -------------------------------------------------- */}

 <nav className="hidden items-center justify-center md:flex">
  <div className="flex items-center rounded-full px-1.5 py-2.5">
    {NAV_ITEMS.map((item) => {
      const pathname = usePathname();

      const isActive =
        pathname === item.href ||
        (item.href !== "/" && pathname.startsWith(`${item.href}/`));

      return (
        <div
          key={item.label}
          className="group relative"
        >
          {/* Main navigation item */}

          <Link
            href={item.href}
            className={`flex -translate-y-0.5 items-center gap-0.5 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 md:text-[14.5px] ${
              isActive
                ? "bg-brand-dark text-white shadow-md"
                : "text-white hover:bg-brand-dark hover:text-white hover:shadow-md"
            }`}
          >
            {item.label}

            {item.children && (
              <ChevronDown
                className={`h-3 w-3 opacity-70 transition-transform duration-200 group-hover:rotate-180 ${
                  isActive ? "text-white" : "text-white"
                }`}
              />
            )}
          </Link>

          {/* DROPDOWN / MEGA MENU */}

          {item.children && (
            <div
              className={`invisible absolute top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 ${
                item.mega
                  ? "left-1/2 w-[680px] -translate-x-1/2"
                  : "left-0 w-52"
              }`}
            >
              {item.mega ? (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-2xl">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand">
                        University Administration
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Leadership, offices and university portals
                      </p>
                    </div>

                    <Link
                      href="/administration"
                      className="rounded-full bg-brand px-3 py-2 text-[20px] font-semibold text-white transition-colors hover:bg-brand-dark"
                    >
                      View Administration
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-brand/10 hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white py-1.5 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 text-xs text-slate-700 transition-colors hover:bg-brand/10 hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    })}
  </div>
</nav>

          {/* --------------------------------------------------
              RIGHT SIDE
              Screenshot-এর Login + 9 dots
              -------------------------------------------------- */}

          <div className="flex items-center gap-4">
            {/* Login button */}

            {/* <Link
              href="/login"
              className="hidden rounded-full bg-brand-dark px-7 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-accent md:inline-flex"
            >
              Log in
            </Link> */}

            {/* 9-dot applications menu */}

            <button
              type="button"
              aria-label="Applications menu"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-brand-dark transition-colors hover:bg-white/30 md:flex"
            >
              <span className="grid grid-cols-3 gap-[4px]">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[5px] w-[5px] rounded-full bg-brand-dark"
                  />
                ))}
              </span>
            </button>

            {/* Mobile menu button */}

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white md:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================
          MOBILE MENU
          ====================================================== */}

      {open && (
        <div className="mx-4 mb-4 max-h-[70vh] overflow-y-auto rounded-2xl bg-brand-dark/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="border-b border-white/10 last:border-none"
              >
                {item.children ? (
                  <>
                    {/* Menu item + expand button */}

                    <div className="flex items-center justify-between px-3 py-2">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm font-medium text-white/90"
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        aria-label={`Expand ${item.label}`}
                        onClick={() =>
                          setExpanded((v) =>
                            v === item.label ? null : item.label
                          )
                        }
                        className="rounded-lg p-2 text-white/80 hover:bg-white/10"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu */}

                    {expanded === item.label && (
                      <div className="flex flex-col pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="px-6 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-medium text-white/90"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Login */}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="m-2 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-dark"
            >
              Log in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}