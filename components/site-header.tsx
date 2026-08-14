"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { NAV_ITEMS } from "@/lib/nav"
import { LOGO_URL } from "@/lib/site-assets"
import { usePathname } from "next/navigation";

const ADMINISTRATION_PROFILES = [
  {
    role: "Chancellor",
    name: "Official name to be updated",
    designation: "Chancellor, KKJSTU",
    href: "/administration",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707383/principal.webp",
  },
  {
    role: "Vice-Chancellor",
    name: "Official name to be updated",
    designation: "Vice-Chancellor, KKJSTU",
    href: "/administration/vice-chancellor",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707390/fac_1785751849.jpg",
  },
  {
    role: "Pro Vice-Chancellor",
    name: "Official name to be updated",
    designation: "Pro Vice-Chancellor, KKJSTU",
    href: "/administration/pro-vice-chancellor",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707395/faculty_1786563553_747.jpg",
  },
  {
    role: "Treasurer",
    name: "Official name to be updated",
    designation: "Treasurer, KKJSTU",
    href: "/administration/treasurer",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707399/faculty_1786173440_602.jpg",
  },
]

function AdministrationMegaMenu({
  links,
  onNavigate,
}: {
  links: { label: string; href: string }[]
  onNavigate: () => void
}) {
  const [chancellor, ...leadership] = ADMINISTRATION_PROFILES

  return (
    <div
      role="region"
      aria-label="University administration leadership"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(13,3,87,0.18)]"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-emerald-500 to-brand" />

      <div className="max-h-[min(680px,calc(100vh-9rem))] overflow-y-auto overscroll-contain scroll-smooth [scrollbar-color:rgb(203_213_225)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
        <div className="border-b border-slate-100 bg-white px-5 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-8">
          <Link
            href={chancellor.href}
            onClick={onNavigate}
            className="group/profile flex flex-col items-center rounded-2xl px-4 py-2 text-center transition-colors hover:bg-emerald-50/70"
          >
            <div className="h-24 w-24 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm sm:h-28 sm:w-28">
              <img src={chancellor.image} alt={chancellor.role} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/profile:scale-105" />
            </div>
            <p className="mt-3 text-sm font-bold text-emerald-700 sm:text-base">{chancellor.role}</p>
            <h3 className="mt-1 font-serif text-xl font-bold text-slate-800 sm:text-2xl">{chancellor.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{chancellor.designation}</p>
          </Link>

          <div className="my-5 h-px bg-slate-200 sm:my-6" />

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {leadership.map((profile) => (
              <Link
                key={profile.role}
                href={profile.href}
                onClick={onNavigate}
                className="group/profile flex min-w-0 flex-col items-center rounded-2xl p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-sm"
              >
                <div className="h-20 w-20 overflow-hidden rounded-lg bg-slate-100 shadow-sm sm:h-24 sm:w-24">
                  <img src={profile.image} alt={profile.role} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/profile:scale-105" />
                </div>
                <p className="mt-3 text-sm font-bold text-emerald-700">{profile.role}</p>
                <h3 className="mt-1 text-sm font-bold leading-5 text-slate-800 sm:text-base">{profile.name}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{profile.designation}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">University Administration</p>
          <h3 className="mt-2 font-serif text-xl font-bold text-slate-800">Leadership &amp; University Offices</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Explore leadership, offices and university services supporting academic and institutional excellence.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className="group/link flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-200 px-3.5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-brand"
              >
                <span className="min-w-0">{link.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-emerald-600 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const pathname = usePathname()

  /*
    ------------------------------------------------------------
    HEADER POSITION
    ------------------------------------------------------------

    Homepage/hero section হলে overlay=true হবে এবং header
    hero image-এর উপরে থাকবে।

    অন্য page-এ sticky header থাকবে।
  */

 const wrapperClass = "sticky top-0 z-50";

  return (
    <header className={wrapperClass}>
      {/* ======================================================
          TOP UTILITY BAR
          Screenshot-এর একদম উপরের ছোট green bar
          ====================================================== */}


<div className="min-h-6 bg-brand-dark">
  <div className="mx-auto flex min-h-6 w-full max-w-[1540px] flex-col items-stretch justify-between gap-2 px-3 py-1.5 sm:px-4 md:flex-row md:items-center md:gap-3 md:py-1 lg:px-6">

    {/* বাম পাশের অংশ: হেল্পলাইন এবং কোডগুলো */}
    <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium text-white/90 sm:text-[11px] md:flex-nowrap md:gap-4">

      {/* হেল্পলাইন */}
      <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
        <svg
          className="h-3.5 w-3.5 shrink-0 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>

        <span>
          Helpline:{" "}
          <strong className="text-white">+880 1711-042194</strong>
        </span>
      </div>

      <span className="hidden text-white/20 sm:inline">|</span>

      {/* EIIN, NU, BTEB ব্যাজ */}
      <div className="flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] sm:text-[10px]">
        <svg
          className="h-3 w-3 shrink-0 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>

        <span className="whitespace-nowrap">
          EIIN: 134211 • NU: 0309 • BTEB: 54095
        </span>
      </div>
    </div>

    {/* ডান পাশের অংশ: ট্র্যাক স্ট্যাটাস, রেজাল্ট পোর্টাল, পে ফিজ এবং লগইন লিংক */}
    <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium text-white/90 sm:text-[11px] md:justify-end md:gap-4">

      {/* Track Status */}
      <Link
        href="/track-status"
        className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
      >
        <svg
          className="h-3.5 w-3.5 shrink-0 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span>Track Status</span>
      </Link>

      {/* Result Portal */}
      <Link
        href="/result"
        className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
      >
        <svg
          className="h-3.5 w-3.5 shrink-0 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <span>Result Portal</span>
      </Link>

      {/* Pay Fees */}
      <Link
        href="/pay-fees"
        className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
      >
        <svg
          className="h-3.5 w-3.5 shrink-0 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <span>Pay Fees</span>
      </Link>

      {/* HOD Login */}
      <Link
        href="/hod-login"
        className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-semibold text-amber-400 transition-colors hover:text-amber-300"
      >
        <svg
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
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
      ? "bg-[#0D0357]/75 backdrop-blur-md border-b border-white/10"
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

<nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
  <div className="flex min-w-0 items-center gap-0.5 rounded-full px-0.5 py-1 lg:gap-1.5 xl:gap-2">
    {NAV_ITEMS.map((item) => {
      const isActive =
        pathname === item.href ||
        (item.href !== "/" && pathname.startsWith(`${item.href}/`));

      return (
        <div
          key={item.label}
          className="group relative"
          onMouseEnter={() => item.mega && setOpenMegaMenu(item.label)}
          onMouseLeave={() => item.mega && setOpenMegaMenu(null)}
        >
          {/* Main navigation item */}
          <Link
            href={item.href}
            onClick={(event) => {
              if (item.mega) {
                event.preventDefault()
                setOpenMegaMenu(item.label)
              }
            }}
            aria-expanded={item.mega ? openMegaMenu === item.label : undefined}
            className={`flex -translate-y-0.5 items-center gap-0.5 rounded-full px-2 py-1.5 font-bold transition-all duration-200 whitespace-nowrap text-[11px] lg:px-2.5 lg:py-1.5 lg:text-xs xl:px-3 xl:text-[13px] 2xl:px-3.5 2xl:text-[14px] ${
              isActive
  ? "bg-amber-400 text-[#0D0357] shadow-md"
  : "text-white hover:bg-amber-400 hover:text-[#0D0357] hover:shadow-md"
            }`}
          >
            {item.label}

            {item.children && (
              <ChevronDown
                className={`h-2.5 w-2.5 opacity-70 transition-transform duration-200 lg:h-3 lg:w-3 ${
                  item.mega && openMegaMenu === item.label ? "rotate-180" : "group-hover:rotate-180"
                } ${
                  isActive ? "text-white" : "text-white"
                }`}
              />
            )}
          </Link>

          {/* DROPDOWN / MEGA MENU */}
         {item.children && (
  <div
    className={`absolute top-full pt-3 transition-all duration-200 ease-out ${
      item.mega
        ? `left-1/2 w-[min(940px,calc(100vw-2rem))] -translate-x-1/2 ${
            openMegaMenu === item.label ? "visible translate-y-0 opacity-100" : "invisible translate-y-1.5 opacity-0"
          }`
        : "invisible left-0 w-56 translate-y-1.5 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:w-60"
    }`}
  >
    {item.mega ? (
      <AdministrationMegaMenu links={item.children ?? []} onNavigate={() => setOpenMegaMenu(null)} />
    ) : (
      /* =========================================================
         STANDARD DROPDOWN
      ========================================================= */
      <div
        role="region"
        aria-label="Submenu navigation"
        className="relative overflow-hidden rounded-[16px] border border-slate-200/90 bg-white p-1.5 shadow-[0_20px_55px_rgba(13,3,87,0.14)]"
      >
        {/* Brand accent */}
        <div
          aria-hidden="true"
          className="absolute inset-x-5 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />

        <ul className="list-none p-0 pt-1">
          {item.children.map((child, index) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-slate-50 xl:py-3"
              >
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[9px] font-bold text-slate-400 transition-all duration-200 group-hover/item:bg-amber-400 group-hover/item:text-[#0D0357]"
                >
                  {index + 1}
                </span>

                {/* Label */}
                <span className="min-w-0 flex-1 text-[10px] font-semibold text-slate-600 transition-colors duration-200 group-hover/item:text-[#0D0357] xl:text-[11px]">
                  {child.label}
                </span>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="translate-x-[-3px] text-[11px] text-amber-500 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
  className="hidden h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20 xl:flex"
>
  <span className="grid grid-cols-3 gap-[4px]">
    {Array.from({ length: 9 }).map((_, index) => (
      <span
        key={index}
        className="h-[5px] w-[5px] rounded-full bg-white"
      />
    ))}
  </span>
</button>

            {/* Mobile menu button */}

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white xl:hidden"
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
        <div className="mx-4 mb-4 max-h-[70vh] overflow-y-auto rounded-2xl bg-brand-dark/95 p-2 shadow-2xl backdrop-blur-xl xl:hidden">
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
                      item.mega ? (
                        <div className="space-y-2 px-3 pb-3">
                          {ADMINISTRATION_PROFILES.map((profile) => (
                            <Link
                              key={profile.role}
                              href={profile.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-xl bg-white/10 p-2.5 transition-colors hover:bg-white/15"
                            >
                              <img src={profile.image} alt={profile.role} className="h-12 w-12 shrink-0 rounded-lg object-cover object-top" />
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-emerald-300">{profile.role}</span>
                                <span className="block break-words text-xs text-white/75">{profile.name}</span>
                              </span>
                            </Link>
                          ))}
                          <div className="border-t border-white/10 pt-2">
                            <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wide text-white/50">Administration information</p>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
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
                      )
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
