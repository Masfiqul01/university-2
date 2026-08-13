import Link from "next/link"
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react"
import type { SVGProps } from "react"

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "University",
    links: [
      { label: "About KKJSTU", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Faculties", href: "/about/faculties" },
      { label: "Administration", href: "/administration" },
      { label: "IQAC", href: "/iqac" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Programs", href: "/academics/programs" },
      { label: "Departments", href: "/academics/faculties" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Library", href: "/library" },
      { label: "Faculty Directory", href: "/faculty" },
      { label: "Research", href: "/research" },
      { label: "Research Centers", href: "/research/centers" },
      { label: "Publications", href: "/research/publications" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Undergraduate", href: "/admissions/undergraduate" },
      { label: "Postgraduate", href: "/admissions/postgraduate" },
      { label: "Requirements", href: "/admissions/requirements" },
      { label: "Apply Now", href: "/admissions/apply" },
      { label: "Track Status", href: "/track-status" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    title: "Campus & News",
    links: [
      { label: "Campus Life", href: "/campus-life" },
      { label: "Facilities", href: "/campus-life/facilities" },
      { label: "Student Life", href: "/campus-life/student-life" },
      { label: "Clubs & Organizations", href: "/campus-life/clubs" },
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Notice Board", href: "/notice-board" },
      { label: "Transport", href: "/transport" },
    ],
  },
  {
    title: "Student Services",
    links: [
      { label: "Student Portal", href: "/student-portal" },
      { label: "Teacher Portal", href: "/teacher-portal" },
      { label: "Student Dashboard", href: "/dashboard" },
      { label: "University Login", href: "/login" },
      { label: "Result Portal", href: "/result" },
      { label: "Pay Fees", href: "/pay-fees" },
      { label: "HOD Login", href: "/hod-login" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
]

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23 12s0-3.5-.45-5.18a2.6 2.6 0 0 0-1.83-1.84C19.04 4.5 12 4.5 12 4.5s-7.04 0-8.72.48a2.6 2.6 0 0 0-1.83 1.84C1 8.5 1 12 1 12s0 3.5.45 5.18a2.6 2.6 0 0 0 1.83 1.84C4.96 19.5 12 19.5 12 19.5s7.04 0 8.72-.48a2.6 2.6 0 0 0 1.83-1.84C23 15.5 23 12 23 12ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

const SOCIALS = [FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon]

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold text-white">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-white/80">
  <img
    src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp"
    alt="KACST"
    className="h-full w-full object-cover"
  />
</div>
              <div className="text-[11px] font-semibold leading-tight">
                <p>Khanjahan Ali College of </p>
                <p>Science & Technology</p>
              </div>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/70">
              Committed to excellence in science, technology, education, research and innovation for a
              better tomorrow.
            </p>
            <ul className="mb-5 space-y-2.5 text-sm text-white/70">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Khulna, Bangladesh <span className="italic opacity-70"></span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +880 000 000000 <span className="italic opacity-70"></span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                info@kacst.edu.bd <span className="italic opacity-70"></span>
              </li>
              <li className="flex gap-2.5">
                <Globe className="mt-0.5 h-4 w-4 shrink-0" />
                www.kacst.edu.bd <span className="italic opacity-70"></span>
              </li>
            </ul>
            <div className="flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-accent"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <Column key={col.title} title={col.title} links={col.links} />
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 md:flex-row lg:px-8">
          <p>© 2026Khanjahan Ali College of Science & Technology. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/accessibility" className="transition-colors hover:text-white">Accessibility</Link>
            <Link href="/sitemap" className="transition-colors hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
