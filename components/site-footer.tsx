"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  Mail,
  Globe,
} from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const INSTITUTION = {
  name: "Khanjahan Ali College of Science & Technology",
  shortName: "KACST",
  location: "Khulna, Bangladesh",
  established: "2003",
  email: "khanjahanali.kln@gmail.com",
  website: "https://www.khanjahanalicst.edu.bd",
}

const QUICK_LINKS = [
  { label: "About KACST", href: "/about" },
  { label: "Academic Programs", href: "/academics/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Notice Board", href: "/notice-board" },
  { label: "Results", href: "/result" },
  { label: "Contact Us", href: "/contact" },
]

const STUDENT_LINKS = [
  { label: "Student Portal", href: "/student-portal" },
  { label: "Results Portal", href: "/result" },
  { label: "Fee Payment", href: "/pay-fees" },
  { label: "Library", href: "/library" },
  { label: "Faculty Directory", href: "/faculty" },
  { label: "Academic Calendar", href: "/academics/calendar" },
]

const ACADEMIC_LINKS = [
  { label: "Honours Programs", href: "/academics/programs" },
  { label: "Diploma Programs", href: "/academics/programs" },
  { label: "HSC (BM)", href: "/academics/programs" },
  { label: "Departments", href: "/academics/faculties" },
  { label: "Research", href: "/research" },
  { label: "Career", href: "/career" },
]

const ABOUT_LINKS = [
  { label: "History", href: "/about/history" },
  { label: "Mission & Vision", href: "/about/mission-vision" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Administration", href: "/administration" },
  { label: "IQAC", href: "/iqac" },
  { label: "Campus Life", href: "/campus-life" },
]

function FooterHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="h-4 w-0.5 shrink-0 rounded-full bg-yellow-400"
        />

        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
          {children}
        </h3>
      </div>

      <div
        aria-hidden="true"
        className="ml-3 mt-2 h-px w-7 bg-yellow-400/35"
      />
    </div>
  )
}

function FooterLinkList({
  links,
}: {
  links: { label: string; href: string }[]
}) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="
              group
              inline-flex
              max-w-full
              items-center
              gap-1.5
              text-sm
              text-white/55
              transition-all
              duration-200
              hover:translate-x-1
              hover:text-yellow-300
            "
          >
            <span className="truncate">
              {link.label}
            </span>

            <ArrowUpRight
              aria-hidden="true"
              className="
                h-3 w-3
                shrink-0
                opacity-0
                transition-all
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:opacity-100
                group-hover:text-yellow-300
              "
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

/* =========================================================
   FACEBOOK ICON
========================================================= */

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />

      <path d="M12.03 2C6.5 2 2 6.5 2 12.03c0 1.9.53 3.68 1.44 5.2L2 22l4.9-1.4a9.98 9.98 0 0 0 5.13 1.41h.01c5.53 0 10.02-4.5 10.02-10.02C22.06 6.5 17.57 2 12.03 2Zm0 18.2h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-2.91.83.83-2.83-.19-.3a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.66-8.15 8.17-8.15a8.1 8.1 0 0 1 5.78 2.4 8.08 8.08 0 0 1 2.39 5.75c0 4.5-3.66 8.15-8.16 8.15Z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801717803684",
    icon: WhatsAppIcon,
  },
  {
    label: "Website",
    href: INSTITUTION.website,
    icon: Globe,
  },
  {
    label: "Email",
    href: `mailto:${INSTITUTION.email}`,
    icon: Mail,
  },
]

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-footer-item]",
      )

      if (!items.length) return

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: 16,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true,
          },
        },
      )
    }, footer)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="w-full overflow-hidden bg-brand-dark text-white"
    >
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-10

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12

            lg:grid-cols-12
            lg:gap-x-10
            xl:gap-x-14
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <div
            data-footer-item
            className="
              min-w-0
              col-span-2
              lg:col-span-4
            "
          >
            <div className="flex items-start gap-3.5 sm:gap-4">

              {/* Logo */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/15
                  bg-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-yellow-400/60
                  hover:shadow-yellow-400/10
                  sm:h-14
                  sm:w-14
                "
              >
                <img
                  src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp"
                  alt="Khanjahan Ali College of Science & Technology logo"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Institution */}
              <div className="min-w-0 pt-0.5">
                <p className="text-base font-bold leading-tight text-white sm:text-lg">
                  {INSTITUTION.shortName}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white/45
                    sm:text-xs
                    sm:tracking-[0.16em]
                  "
                >
                  {INSTITUTION.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-white/60
                sm:mt-6
                sm:leading-7
              "
            >
              Khanjahan Ali College of Science &amp; Technology (KACST),
              established in {INSTITUTION.established}, provides higher and
              technical education with a focus on practical learning,
              technology and career-oriented skills.
            </p>

{/* Social Links */}
<div className="mt-6 flex items-center gap-3 sm:mt-6 sm:gap-4">
  {SOCIAL_LINKS.map((social) => {
    const Icon = social.icon

    return (
      <a
        key={social.label}
        href={social.href}
        target={
          social.href.startsWith("http")
            ? "_blank"
            : undefined
        }
        rel={
          social.href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
        aria-label={social.label}
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.05]
          text-white/70
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-yellow-400/50
          hover:bg-yellow-400
          hover:text-brand-dark
          hover:shadow-lg
          hover:shadow-yellow-400/10
          sm:h-10
          sm:w-10
        "
      >
        <span className="flex h-5 w-5 items-center justify-center">
          <Icon />
        </span>
      </a>
    )
  })}
</div>
</div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div
            data-footer-item
            className="
              min-w-0
              col-span-1
              lg:col-span-2
            "
          >
            <FooterHeading>
              Quick Links
            </FooterHeading>

            <FooterLinkList links={QUICK_LINKS} />
          </div>

          {/* =================================================
              STUDENT SERVICES
          ================================================== */}

          <div
            data-footer-item
            className="
              min-w-0
              col-span-1
              lg:col-span-2
            "
          >
            <FooterHeading>
              Student Services
            </FooterHeading>

            <FooterLinkList links={STUDENT_LINKS} />
          </div>

          {/* =================================================
              ACADEMICS
          ================================================== */}

          <div
            data-footer-item
            className="
              min-w-0
              col-span-1
              lg:col-span-2
            "
          >
            <FooterHeading>
              Academics
            </FooterHeading>

            <FooterLinkList links={ACADEMIC_LINKS} />
          </div>

          {/* =================================================
              ABOUT
          ================================================== */}

          <div
            data-footer-item
            className="
              min-w-0
              col-span-1
              lg:col-span-2
            "
          >
            <FooterHeading>
              About KACST
            </FooterHeading>

            <FooterLinkList links={ABOUT_LINKS} />
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="border-t border-white/10">

        <div
          data-footer-item
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-3
            px-4
            py-5
            sm:px-6
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
          "
        >

          {/* Copyright */}
          <p
            className="
              text-center
              text-[11px]
              leading-5
              text-white/40
              sm:text-xs
              lg:text-left
            "
          >
            © {new Date().getFullYear()} {INSTITUTION.name}. All Rights Reserved.
          </p>

          {/* Institutional Links */}
          <nav
            aria-label="Footer navigation"
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-2
              text-[11px]
              sm:gap-x-5
              sm:text-xs
              lg:justify-end
            "
          >
            <Link
              href="/privacy"
              className="
                text-white/40
                transition-colors
                duration-200
                hover:text-yellow-300
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                text-white/40
                transition-colors
                duration-200
                hover:text-yellow-300
              "
            >
              Terms &amp; Conditions
            </Link>

            <Link
              href="/contact"
              className="
                text-white/40
                transition-colors
                duration-200
                hover:text-yellow-300
              "
            >
              Contact
            </Link>

            <Link
              href="/notice-board"
              className="
                text-white/40
                transition-colors
                duration-200
                hover:text-yellow-300
              "
            >
              Notices
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  )
}