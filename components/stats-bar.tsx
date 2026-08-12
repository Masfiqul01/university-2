import { Building2, Users, GraduationCap, BookOpen, FlaskConical, Trees } from "lucide-react"

// Editable placeholder figures — replace with official KKJSTU data.
const STATS = [
  { icon: Building2, value: "5+", label: "Faculties" },
  { icon: BookOpen, value: "20+", label: "Programs" },
  { icon: Users, value: "Growing", label: "Student Body" },
  { icon: GraduationCap, value: "Dedicated", label: "Faculty Members" },
  { icon: FlaskConical, value: "Modern", label: "Research Labs" },
  { icon: Trees, value: "Beautiful", label: "Green Campus" },
]

export function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 lg:px-8">
      <div className="grid grid-cols-2 gap-y-8 rounded-2xl bg-white px-6 py-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
