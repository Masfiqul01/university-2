"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight, ChevronDown, ExternalLink } from "lucide-react"
import { NAV_ITEMS } from "@/lib/nav"
import { LOGO_URL } from "@/lib/site-assets"

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
    <Link href="/" className="flex shrink-0 items-center gap-3">
      {LOGO_URL ? (
        <img
          src={LOGO_URL}
          alt="KACST logo"
          className="h-12 w-12 object-contain"
        />
      ) : (
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-[10px] font-bold tracking-tight ${
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
            <p className="text-[10px] font-semibold tracking-wide">
              Khanjahan Ali College
            </p>

            <p className="text-[10px] font-semibold tracking-wide">
              of Science & Technology (KACST)
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
  <div className="mx-auto flex h-full max-w-[1540px] items-center justify-end px-4 lg:px-6">
    <div className="flex items-center gap-4 text-[11px] font-medium text-white/90">
      <Link
        href="/iqac"
        className="transition-colors hover:text-white"
      >
        IQAC
      </Link>

      <Link
        href="/contact"
        className="transition-colors hover:text-white"
      >
        Contacts
      </Link>

      <Link
        href="/transport"
        className="transition-colors hover:text-white"
      >
        Transport
      </Link>

      <Link
        href="/career"
        className="transition-colors hover:text-white"
      >
        Career
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
  <div className="flex items-center rounded-full bg-white px-1.5 py-2.5 shadow-lg ring-1 ring-black/5">
    {NAV_ITEMS.map((item) => (
      <div
        key={item.label}
        className="group relative"
      >
        {/* Main navigation item */}

        <Link
          href={item.href}
          className="flex items-center gap-0.5 rounded-full px-3 py-2 text-sm md:text-[14.5px] font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-brand-dark"
        >
          {item.label}

          {item.children && (
            <ChevronDown className="h-3 w-3 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
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
    ))}
  </div>
</nav>

          {/* --------------------------------------------------
              RIGHT SIDE
              Screenshot-এর Login + 9 dots
              -------------------------------------------------- */}

          <div className="flex items-center gap-4">
            {/* Login button */}

            <Link
              href="/login"
              className="hidden rounded-full bg-brand-dark px-7 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-accent md:inline-flex"
            >
              Log in
            </Link>

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