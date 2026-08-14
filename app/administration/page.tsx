import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { AdministrationLeadership } from "@/components/administration-leadership"
import { ArrowRight, Building2, GraduationCap, Landmark, ShieldCheck, Users, Briefcase } from "lucide-react"

const OFFICES = [
  ["Vice-Chancellor", "/administration/vice-chancellor", Users],
  ["Pro Vice-Chancellor", "/administration/pro-vice-chancellor", GraduationCap],
  ["Registrar", "/administration/registrar", Landmark],
  ["Treasurer", "/administration/treasurer", ShieldCheck],
  ["Controller of Examinations", "/administration/controller-of-examinations", Briefcase],
  ["Deans & Heads", "/administration/deans-heads", Building2],
] as const

export default function AdministrationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="University Administration"
        title="Administration & Leadership"
        subtitle="Explore the university leadership, administrative offices and key services that support academic excellence and responsible governance."
        crumbs={[{ label: "Home", href: "/" }, { label: "Administration" }]}
        image="/images/hero-campus.png"
      />

      <AdministrationLeadership />

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="University administration at a glance"
          description="The Administration menu in the main navigation opens directly to this full page. Individual offices can be edited with official names, profiles and contact details."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map(([title, href, Icon]) => (
            <Link key={href} href={href} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">View the office overview, responsibilities and editable contact information.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-dark p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Administrative Offices</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Coordinated university services</h2>
            <p className="mt-4 leading-7 text-white/75">Add official offices such as Finance, Planning, ICT, Student Affairs, Library, Transport and other administrative units here.</p>
            <Link href="/administration/offices" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-dark">Explore offices <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Quick Access</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">University portals</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href="/student-portal" className="rounded-xl border border-border p-4 font-semibold hover:bg-secondary">Student Portal</Link>
              <Link href="/teacher-portal" className="rounded-xl border border-border p-4 font-semibold hover:bg-secondary">Teacher Portal</Link>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  )
}
