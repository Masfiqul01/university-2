"use client";

import Link from "next/link"
import { MapPin, Phone, Mail, Globe, BadgeCheck, UserCog, UserLock } from "lucide-react"
import type { SVGProps } from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type FooterLink = {
  label: string
  href: string
  icon?: typeof MapPin
  variant?: "highlight" | "muted"
}

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About KACST", href: "/about" },
  { label: "KACST Wikipedia Page", href: "#", icon: Globe, variant: "highlight" },
  { label: "Academic Programs", href: "/academics/programs" },
  { label: "Online Admission 2026", href: "/admissions/apply" },
  { label: "Track Application Status", href: "/track-status" },
  { label: "Tuition Fees & Waiver", href: "/pay-fees" },
  { label: "College Notice Board", href: "/notice-board" },
]

const STUDENT_SERVICES: FooterLink[] = [
  { label: "Student Result Portal", href: "/result" },
  { label: "Download Centre", href: "#" },
  { label: "Admission FAQ", href: "#" },
  { label: "Campus Facilities", href: "/campus-life/facilities" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Admission", href: "/terms" },
  { label: "HOD Portal Login", href: "/hod-login", icon: UserCog, variant: "highlight" },
  { label: "Admin", href: "#", icon: UserLock, variant: "muted" },
]

const CODES = [
  { label: "NU Professional Code:", value: "0309" },
  { label: "BTEB Polytechnic Code:", value: "54095" },
]

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />
      <path d="M12.03 2C6.5 2 2 6.5 2 12.03c0 1.9.53 3.68 1.44 5.2L2 22l4.9-1.4a9.98 9.98 0 0 0 5.13 1.41h.01c5.53 0 10.02-4.5 10.02-10.02C22.06 6.5 17.57 2 12.03 2Zm0 18.2h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-2.91.83.83-2.83-.19-.3a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.66-8.15 8.17-8.15a8.1 8.1 0 0 1 5.78 2.4 8.08 8.08 0 0 1 2.39 5.75c0 4.5-3.66 8.15-8.16 8.15Z" />
    </svg>
  )
}

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: WhatsappIcon, href: "#", label: "WhatsApp" },
  { icon: Globe, href: "#", label: "Wikipedia" },
  { icon: Mail, href: "mailto:info@khanjahanalicst.edu.bd", label: "Email" },
]

function Underline() {
  return <span aria-hidden="true" className="mt-2 block h-0.5 w-8 rounded-full bg-brand-accent" />
}

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <li key={`${link.href}-${link.label}`} className="min-w-0">
            <Link
              href={link.href}
              className={`flex items-center gap-2 break-words text-sm transition-colors ${
                link.variant === "highlight"
                  ? "font-semibold text-brand-accent hover:text-white"
                  : link.variant === "muted"
                  ? "text-white/40 hover:text-white/60"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function SiteFooter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Subtle fade in for footer sections
      gsap.fromTo(
        "[data-footer-section]",
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  });
  return (
    <footer
      ref={sectionRef}
      className="w-full overflow-hidden bg-brand-dark text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-8 lg:px-8">
        <div
          data-footer-section
          className="
            grid
            grid-cols-2
            gap-x-4
            gap-y-10
            sm:gap-x-6
            lg:grid-cols-5
            lg:gap-x-8
          "
        >
          {/* BRAND */}
          <div className="col-span-2 min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/80">
                <img
                  src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp"
                  alt="KACST"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="text-base font-bold text-white">KACST Khulna</p>
                <Underline />
              </div>
            </div>

            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/70">
              Khanjahan Ali College of Science &amp; Technology (KACST) is
              Khulna&apos;s premier engineering college in Khulna (Estd. 2003)
              operating under Government EIIN: <strong className="text-white">134211</strong>.
            </p>

            <ul className="mb-5 space-y-2 text-sm">
              {CODES.map((code) => (
                <li key={code.label} className="flex items-center gap-2 text-brand-accent">
                  <BadgeCheck className="h-4 w-4 shrink-0" />
                  <span>
                    {code.label} <strong>{code.value}</strong>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    social.label === "Email"
                      ? "bg-brand-accent text-white hover:bg-brand-accent/80"
                      : "bg-white/10 text-brand-accent hover:bg-brand-accent hover:text-white"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="min-w-0">
            <h4 className="mb-1 text-sm font-bold text-white">Quick Links</h4>
            <Underline />
            <div className="mt-4">
              <LinkList links={QUICK_LINKS} />
            </div>
          </div>

          {/* STUDENT SERVICES */}
          <div className="min-w-0">
            <h4 className="mb-1 text-sm font-bold text-white">Student Services</h4>
            <Underline />
            <div className="mt-4">
              <LinkList links={STUDENT_SERVICES} />
            </div>
          </div>

          {/* CONTACT US */}
          <div className="min-w-0">
            <h4 className="mb-1 text-sm font-bold text-white">Contact Us</h4>
            <Underline />
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex min-w-0 gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span className="break-words">
                  Mujgunni R/A, Boyra Main Road, Khulna-9000, Bangladesh
                </span>
              </li>

              <li className="flex min-w-0 gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href="tel:+8801711042194" className="break-words transition-colors hover:text-white">
                  Helpline: +880 1711-042194
                </a>
              </li>

              <li className="flex min-w-0 gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href="tel:+8801717803684" className="break-words transition-colors hover:text-white">
                  Phone 2: +880 1717-803684
                </a>
              </li>

              <li className="flex min-w-0 gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <a href="mailto:info@khanjahanalicst.edu.bd" className="break-all transition-colors hover:text-white">
                  info@khanjahanalicst.edu.bd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          data-footer-section
          className="
            mx-auto flex max-w-7xl
            flex-col items-center
            justify-between
            gap-3
            px-4 py-5
            text-center
            text-xs text-white/60
            sm:px-6
            md:px-8
            lg:flex-row
            lg:text-left
            xl:px-8
          "
        >
          <p className="leading-relaxed">
            © 2026 Khanjahan Ali College of Science & Technology.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-end">
            <Link
              href="/privacy"
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              href="/accessibility"
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              Accessibility
            </Link>

            <Link
              href="/sitemap"
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
