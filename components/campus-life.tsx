import Link from "next/link"
import { ArrowRight, BookOpen, Trophy, PartyPopper, Leaf } from "lucide-react"
import { imageUrl } from "@/lib/site-assets"

const GALLERY = [
  { image: "/images/campus-library.png", label: "Modern Library", icon: BookOpen, href: "/library" },
  { image: "/images/campus-sports.png", label: "Sports Facilities", icon: Trophy, href: "/campus-life/facilities" },
  { image: "/images/campus-activities.png", label: "Student Activities", icon: PartyPopper, href: "/campus-life/student-life" },
  { image: "/images/campus-green.png", label: "Green Environment", icon: Leaf, href: "/campus-life" },
]

export function CampusLife() {
  return (
    <section className="bg-brand-dark py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_2fr] lg:px-8">
        <div className="text-white">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Campus Life
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">Life at KACST</h2>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/80">
            A vibrant campus life that helps students learn, grow and lead.
          </p>
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/80"
          >
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map(({ image, label, icon: Icon, href }) => (
            <Link key={label} href={href} className="group relative overflow-hidden rounded-xl">
              <img
                src={imageUrl(image)}
                alt={label}
                className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                <Icon className="h-3.5 w-3.5" />
                <span className="text-xs font-semibold">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
