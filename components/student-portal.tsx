"use client"

import { useState, type ReactNode } from "react"
import { imageUrl } from "@/lib/site-assets"
import { ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors"
import { ArrowRight, BarChart3, BookOpen, CalendarDays, CheckCircle2, FileText, GraduationCap, Headphones, Megaphone, UserRound, UsersRound, X } from "lucide-react"

const SERVICES = [
  { title: "Student Login", description: "Login to your student account and access your dashboard.", icon: UserRound, panel: "login" },
  { title: "Course Registration", description: "Register for courses and manage your enrollment.", icon: FileText, panel: "registration" },
  { title: "Results", description: "View your examination results and academic performance.", icon: BarChart3, panel: "results" },
  { title: "Exam Routine", description: "Check exam schedules and important dates.", icon: CalendarDays, panel: "routine" },
  { title: "Notices", description: "Stay updated with latest notices and announcements.", icon: Megaphone, panel: "notices" },
  { title: "Academic Information", description: "Access academic calendar, syllabus and policies.", icon: BookOpen, panel: "academic" },
  { title: "Student Services", description: "Explore student services and support facilities.", icon: UsersRound, panel: "services" },
  { title: "Help & Support", description: "Get help and support for any academic queries.", icon: Headphones, panel: "support" },
] as const

const COURSES = [
  ["CSE 2101", "Data Structures", "3 credits"],
  ["CSE 2207", "Web Engineering", "3 credits"],
  ["CSE 3103", "Database Systems", "3 credits"],
  ["CSE 3205", "Software Engineering", "3 credits"],
] as const

export function StudentPortal() {
  const [active, setActive] = useState<string | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])
  const [registered, setRegistered] = useState(false)
  const [supportSubmitted, setSupportSubmitted] = useState(false)

  function toggleCourse(code: string) {
    setSelectedCourses((current) => current.includes(code) ? current.filter((item) => item !== code) : [...current, code])
    setRegistered(false)
  }

  function renderPanel() {
    if (!active) return null

    if (active === "login") return (
      <InfoPanel title="Student Login">
        <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true) }} className="mx-auto max-w-xl space-y-4">
          <input required className="w-full rounded-xl border border-input px-4 py-3 outline-none focus:ring-2 focus:ring-brand/20" placeholder="Student ID" />
          <input required type="password" className="w-full rounded-xl border border-input px-4 py-3 outline-none focus:ring-2 focus:ring-brand/20" placeholder="Password" />
          <button className="w-full rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">{loggedIn ? "Logged In" : "Sign In"}</button>
          {loggedIn && <p className="rounded-xl bg-green-50 p-3 text-sm font-medium text-green-700">Login demo successful. Connect this form to your real authentication API.</p>}
        </form>
      </InfoPanel>
    )

    if (active === "registration") return (
      <InfoPanel title="Course Registration">
        <div className="space-y-3">
          {COURSES.map(([code, name, credit]) => (
            <label key={code} className="flex cursor-pointer items-center gap-4 rounded-2xl border border-border p-4 hover:bg-secondary">
              <input type="checkbox" checked={selectedCourses.includes(code)} onChange={() => toggleCourse(code)} className="h-4 w-4 accent-brand" />
              <span className="flex-1"><span className="block font-semibold">{code} · {name}</span><span className="text-xs text-muted-foreground">{credit}</span></span>
              <CheckCircle2 className={`h-5 w-5 ${selectedCourses.includes(code) ? "text-brand" : "text-slate-300"}`} />
            </label>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground">{selectedCourses.length} course(s) selected</span>
          <button disabled={!selectedCourses.length} onClick={() => setRegistered(true)} className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Confirm Registration</button>
        </div>
        {registered && <p className="mt-4 rounded-xl bg-green-50 p-3 text-sm font-medium text-green-700">Registration saved for this demo session.</p>}
      </InfoPanel>
    )

    if (active === "results") return (
      <InfoPanel title="Results">
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-3 bg-secondary px-4 py-3 text-xs font-bold uppercase tracking-wide"><span>Course</span><span>Grade</span><span>GPA</span></div>
          {[["Data Structures","A","4.00"],["Database Systems","A-","3.70"],["Web Engineering","B+","3.30"],["Discrete Mathematics","A","4.00"]].map((row) => (
            <div key={row[0]} className="grid grid-cols-3 border-t border-border px-4 py-4 text-sm"><span>{row[0]}</span><span className="font-semibold">{row[1]}</span><span>{row[2]}</span></div>
          ))}
        </div>
      </InfoPanel>
    )

    if (active === "routine") return (
      <InfoPanel title="Exam Routine">
        <div className="space-y-3">
          {[["18 Aug 2026","CSE 2101","10:00 AM","Room 301"],["21 Aug 2026","CSE 2207","10:00 AM","Room 204"],["25 Aug 2026","CSE 3103","02:00 PM","Room 401"],["28 Aug 2026","CSE 3205","10:00 AM","Room 302"]].map((row) => (
            <div key={row[1]} className="grid gap-2 rounded-2xl bg-secondary p-4 sm:grid-cols-4"><span className="font-semibold">{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span><span className="text-muted-foreground">{row[3]}</span></div>
          ))}
        </div>
      </InfoPanel>
    )

    if (active === "notices") return (
      <InfoPanel title="Latest Notices">
        <div className="space-y-3">
          {["Course registration window is now open.","Mid-term examination routine has been published.","Students are requested to update emergency contact information.","Library extended hours will continue through examination week."].map((notice, i) => (
            <div key={notice} className="flex gap-3 rounded-2xl border border-border p-4"><Megaphone className="mt-0.5 h-5 w-5 shrink-0 text-brand" /><div><p className="font-semibold">{notice}</p><p className="mt-1 text-xs text-muted-foreground">13 Aug 2026 · Notice {i + 1}</p></div></div>
          ))}
        </div>
      </InfoPanel>
    )

    if (active === "academic") return (
      <InfoPanel title="Academic Information">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Academic Calendar","/academics/calendar"],
            ["Course Syllabus","/academics/programs"],
            ["Examination Policy","/notice-board"],
            ["Grading Policy","/academics"],
            ["Semester Registration","#registration"],
            ["Student Handbook","/about"],
          ].map(([item, href]) =>
            href.startsWith("#")
              ? <button key={item} onClick={() => setActive("registration")} className="flex items-center justify-between rounded-2xl border border-border p-4 text-left font-semibold hover:bg-secondary"><span>{item}</span><ArrowRight className="h-4 w-4 text-brand" /></button>
              : <a key={item} href={href} className="flex items-center justify-between rounded-2xl border border-border p-4 text-left font-semibold hover:bg-secondary"><span>{item}</span><ArrowRight className="h-4 w-4 text-brand" /></a>
          )}
        </div>
      </InfoPanel>
    )

    if (active === "services") return (
      <InfoPanel title="Student Services">
        <div className="grid gap-3 sm:grid-cols-2">
          {[["Academic Advising","/contact"],["Scholarship Information","/admissions"],["Library Services","/library"],["Student ID Services","/contact"],["Counselling & Wellbeing","/contact"],["Clubs & Organizations","/campus-life/clubs"]].map(([item, href]) => (
            <a key={item} href={href} className="rounded-2xl bg-secondary p-4 transition hover:bg-white hover:shadow-sm"><p className="font-semibold">{item}</p><p className="mt-1 text-xs text-muted-foreground">Open service information.</p></a>
          ))}
        </div>
      </InfoPanel>
    )

    return (
      <InfoPanel title="Help & Support">
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="mailto:info@kacst.edu.bd" className="rounded-2xl border border-border p-5 hover:bg-secondary"><Headphones className="h-5 w-5 text-brand" /><p className="mt-3 font-semibold">Email Support</p><p className="mt-1 text-xs text-muted-foreground">info@kacst.edu.bd</p></a>
          <a href="tel:+880000000000" className="rounded-2xl border border-border p-5 hover:bg-secondary"><Headphones className="h-5 w-5 text-brand" /><p className="mt-3 font-semibold">Call Support</p><p className="mt-1 text-xs text-muted-foreground">+880 000 000000</p></a>
          <a href="#support-form" className="rounded-2xl border border-border p-5 hover:bg-secondary"><FileText className="h-5 w-5 text-brand" /><p className="mt-3 font-semibold">Submit Query</p><p className="mt-1 text-xs text-muted-foreground">Open support form</p></a>
        </div>
        <form id="support-form" onSubmit={(e) => { e.preventDefault(); setSupportSubmitted(true) }} className="mt-6 grid gap-3 sm:grid-cols-2">
          <input required className="rounded-xl border border-input px-4 py-3" placeholder="Your name" />
          <input required type="email" className="rounded-xl border border-input px-4 py-3" placeholder="Email" />
          <textarea required className="min-h-28 rounded-xl border border-input px-4 py-3 sm:col-span-2" placeholder="Describe your query" />
          <button type="submit" className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white sm:col-span-2">Submit Support Request</button>
          {supportSubmitted && <p className="rounded-xl bg-green-50 p-3 text-sm font-medium text-green-700 sm:col-span-2">Your support request has been recorded in this demo session.</p>}
        </form>
      </InfoPanel>
    )
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark">
        <img src={imageUrl("/images/hero-campus.png")} alt="University campus" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />
        <div className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="mb-7 flex items-center gap-2 text-sm text-white/80"><a href="/" className="hover:text-white">Home</a><span>›</span><span>Student Portal</span></div>
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white"><GraduationCap className="h-5 w-5" /> Student Services</div>
            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white md:text-6xl">Student Portal</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/90 md:text-lg">Quick access to academic information, registration, results, notices and student services.</p>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-[-5%] h-10 w-[110%] rounded-[50%] border-t-4 border-brand-accent bg-[#f7faff]" />
      </section>

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 lg:px-8 lg:pt-12">
        <div className="pointer-events-none absolute inset-0 opacity-30"><div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-blue-100 blur-3xl" /><div className="absolute right-0 top-80 h-72 w-72 rounded-full bg-amber-50 blur-3xl" /></div>
        <div className="relative mx-auto max-w-[980px]">
          <div className="mx-auto -mt-12 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f7faff] bg-brand text-white shadow-lg"><GraduationCap className="h-7 w-7" /></div>
          <div className="mt-7 text-center">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand"><span className="h-px w-8 bg-brand" /> Student Services <span className="h-px w-8 bg-brand" /></p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark md:text-4xl">Everything students need in one place</h2>
            <div className="mx-auto mt-3 flex items-center justify-center gap-3 text-brand-accent"><span className="h-px w-8 bg-slate-300" />✦<span className="h-px w-8 bg-slate-300" /></div>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">Access all your academic resources, results, notices and services quickly and easily.</p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({title, description, icon: Icon, panel}, index) => {
              const color = lightTileIcon(index)

              return (
              <article key={title} className="group rounded-2xl border border-slate-200 bg-white/90 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}><Icon className="h-8 w-8" /></div>
                <h3 className="mt-4 font-bold text-brand-dark">{title}</h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">{description}</p>
                <button onClick={() => setActive(panel)} className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brand-dark">Access Now <ArrowRight className="h-3.5 w-3.5" /></button>
              </article>
              )
            })}
          </div>

          {active && (
            <div className="mt-7" id="student-service-panel">
              <div className="mb-3 flex justify-end"><button onClick={() => setActive(null)} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold hover:bg-secondary">Close <X className="h-4 w-4" /></button></div>
              {renderPanel()}
            </div>
          )}

          <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
            <div><p className="text-sm font-bold text-brand">Secure · Reliable · Accessible Anytime</p><p className="mt-1 text-xs text-slate-500">Your one-stop portal for all academic needs</p></div>
          </div>
        </div>
      </section>
    </>
  )
}

function PanelTitle({ title }: { title: string }) {
  return <div className="mb-6 flex items-center gap-3"><span className="h-8 w-1 rounded-full bg-brand-accent" /><h3 className="font-serif text-2xl font-bold text-brand-dark">{title}</h3></div>
}

function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-3xl border border-border bg-white p-6 shadow-xl sm:p-8"><PanelTitle title={title} />{children}</div>
}
