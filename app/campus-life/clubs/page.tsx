"use client"

import { Clock3 } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { FilterableList } from "@/components/filterable-list"
import { ICON_MAP } from "@/lib/icon-map"
import { CLUBS, CLUB_CATEGORIES } from "@/lib/data/campus-life"

type Club = (typeof CLUBS)[number]

const CATEGORY_COLOR: Record<string, string> = {
  Academic: "bg-blue-600",
  Technology: "bg-brand-dark",
  Cultural: "bg-violet-600",
  Sports: "bg-emerald-600",
  "Community Service": "bg-amber-700",
}

function ClubCard({ club }: { club: Club }) {
  const Icon = ICON_MAP[club.icon] ?? ICON_MAP.Users
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
            CATEGORY_COLOR[club.category] ?? "bg-brand-dark"
          }`}
        >
          {club.category}
        </span>
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground text-balance">{club.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{club.description}</p>
      <p className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-xs text-muted-foreground/80">
        <Clock3 className="h-3.5 w-3.5 shrink-0" />
        {club.meets}
      </p>
    </div>
  )
}

export default function CampusClubsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Student Engagement"
        title="Clubs & Organizations"
        subtitle="Find communities where students can develop skills, friendships and leadership experience."
        crumbs={[{ label: "Home", href: "/" }, { label: "Campus Life", href: "/campus-life" }, { label: "Clubs" }]}
        image="/images/news-4.png"
      />

      <Section>
        <SectionHeading
          eyebrow="12 Active Communities"
          title="Find Your Community"
          description="Search by name or filter by category to find a club that matches your interests — from robotics and debate to sport, the arts and community service."
        />
        <FilterableList
          items={CLUBS}
          categories={CLUB_CATEGORIES}
          getCategory={(club) => club.category}
          getSearchText={(club) => `${club.name} ${club.category} ${club.description}`}
          searchPlaceholder="Search clubs by name or category..."
          renderItem={(club) => <ClubCard club={club} />}
        />
      </Section>

      <CTASection secondary={{ label: "Explore Student Life", href: "/campus-life/student-life" }} />
    </PageShell>
  )
}
