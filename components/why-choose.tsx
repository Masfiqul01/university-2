import { GraduationCap, Users, Building2, Globe, Clock } from "lucide-react"

const REASONS = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Industry-driven curriculum with practical learning.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from qualified and dedicated faculty members.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "State-of-the-art labs, library and smart classrooms.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "International collaborations and exchange programs.",
  },
  {
    icon: Clock,
    title: "Placement Support",
    description: "Career guidance and 500+ recruiter connections.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Why KKJSTU
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Why Choose KKJSTU?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-sm font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
