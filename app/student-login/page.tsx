"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  AlertCircle,
  Eye,
  EyeOff,
  IdCard,
  Loader2,
  Lock,
  LogIn,
  ShieldCheck,
} from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { ICON_MAP } from "@/lib/icon-map"
import { STUDENT_DEMO_ACCOUNTS, STUDENT_LOGIN_CONTENT } from "@/lib/data/student-portal"
import { STUDENT_SESSION_KEY } from "@/lib/student-session"

/*
  ============================================================
  STUDENT LOGIN
  ============================================================

  No authentication backend exists yet, so this validates against the small
  demo account list in lib/data/student-portal.ts and stores the signed-in
  student in sessionStorage. Swap `STUDENT_DEMO_ACCOUNTS` for a real API
  call once the university issues student accounts — the form, loading and
  error states are already wired for that swap.
*/

export default function StudentLoginPage() {
  const router = useRouter()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  /* Already signed in — skip straight to the portal. */
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STUDENT_SESSION_KEY)) router.replace("/student-portal")
    } catch {
      /* Storage being unavailable just means showing the login form. */
    }
  }, [router])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const trimmedId = id.trim()
    if (!trimmedId || !password) {
      setError(STUDENT_LOGIN_CONTENT.missingMessage)
      return
    }

    setError("")
    setLoading(true)

    window.setTimeout(() => {
      const account = STUDENT_DEMO_ACCOUNTS.find(
        (a) => a.id.toLowerCase() === trimmedId.toLowerCase() && a.password === password,
      )

      if (!account) {
        setLoading(false)
        setError(STUDENT_LOGIN_CONTENT.errorMessage)
        return
      }

      try {
        sessionStorage.setItem(
          STUDENT_SESSION_KEY,
          JSON.stringify({
            id: account.id,
            name: account.name,
            program: account.program,
            year: account.year,
            loginAt: new Date().toISOString(),
          }),
        )
      } catch {
        /* Session won't persist across a refresh, but this sign-in still proceeds. */
      }

      router.push("/student-portal")
    }, 600)
  }

  function fillDemo(account: (typeof STUDENT_LOGIN_CONTENT.demoAccounts)[number]) {
    setId(account.id)
    setPassword(account.password)
    setError("")
  }

  return (
    <PageShell>
      <div className="bg-page-pattern">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  {STUDENT_LOGIN_CONTENT.eyebrow}
                </span>
                <span className="h-px w-8 bg-brand-accent" />
              </div>

              <h1 className="font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                {STUDENT_LOGIN_CONTENT.title}
              </h1>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                {STUDENT_LOGIN_CONTENT.description}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              {/* ================= BRAND / HIGHLIGHTS PANEL ================= */}
              <div className="flex flex-col justify-between rounded-3xl bg-brand-dark p-8 text-white">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-accent">
                    <ShieldCheck className="h-6 w-6" />
                  </span>

                  <h2 className="mt-6 font-serif text-2xl font-bold">
                    Secure student access
                  </h2>

                  <div className="mt-8 space-y-6">
                    {STUDENT_LOGIN_CONTENT.highlights.map((item) => {
                      const Icon = ICON_MAP[item.icon]
                      return (
                        <div key={item.title} className="flex gap-4">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="mt-1 text-sm leading-6 text-white/70">{item.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <p className="mt-10 text-xs leading-5 text-white/50">
                  Looking for a different portal?{" "}
                  <Link href="/teacher-login" className="font-semibold text-white/80 hover:text-white">
                    Teacher Portal
                  </Link>{" "}
                  ·{" "}
                  <Link href="/hod-login" className="font-semibold text-white/80 hover:text-white">
                    HOD Login
                  </Link>
                </p>
              </div>

              {/* ================= FORM PANEL ================= */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-5">
                    <label className="block text-sm font-semibold" htmlFor="student-id">
                      {STUDENT_LOGIN_CONTENT.idLabel}
                      <div className="relative mt-2">
                        <IdCard className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="student-id"
                          name="student-id"
                          autoComplete="username"
                          className="w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-brand/20"
                          placeholder={STUDENT_LOGIN_CONTENT.idPlaceholder}
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                          aria-invalid={Boolean(error)}
                        />
                      </div>
                    </label>

                    <label className="block text-sm font-semibold" htmlFor="student-password">
                      {STUDENT_LOGIN_CONTENT.passwordLabel}
                      <div className="relative mt-2">
                        <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="student-password"
                          name="student-password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          className="w-full rounded-xl border border-input bg-background py-3 pl-11 pr-11 outline-none focus:ring-2 focus:ring-brand/20"
                          placeholder={STUDENT_LOGIN_CONTENT.passwordPlaceholder}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          aria-invalid={Boolean(error)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </label>

                    {error && (
                      <div
                        role="alert"
                        className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {STUDENT_LOGIN_CONTENT.submitLoadingLabel}
                        </>
                      ) : (
                        <>
                          <LogIn className="h-4 w-4" />
                          {STUDENT_LOGIN_CONTENT.submitLabel}
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 rounded-xl bg-secondary p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {STUDENT_LOGIN_CONTENT.demoNote}
                  </p>
                  <div className="mt-3 space-y-2">
                    {STUDENT_LOGIN_CONTENT.demoAccounts.map((account) => (
                      <button
                        key={account.id}
                        type="button"
                        onClick={() => fillDemo(account)}
                        className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5 text-left text-xs transition-colors hover:border-brand/30 hover:bg-brand/5"
                      >
                        <span className="font-medium text-foreground">{account.label}</span>
                        <span className="font-mono text-muted-foreground">{account.id}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
