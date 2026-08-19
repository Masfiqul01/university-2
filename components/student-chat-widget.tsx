"use client"

import { useEffect, useRef, useState } from "react"
import {
  IdCard,
  MessageSquare,
  Send,
  User,
  X,
} from "lucide-react"

/*
  ============================================================
  STUDENT CHAT WIDGET
  ============================================================

  Fixed bottom-right launcher, present on every page.

  Flow:
    1. closed   — just the floating button
    2. form     — student fills name / age / roll / HSC + SSC reg
    3. chat     — message thread opens

  The details and thread are kept in sessionStorage so moving between
  pages (or a refresh) does not throw the student back to the form.
*/

type Student = {
  name: string
  age: string
  roll: string
  hscRegistration: string
  sscRegistration: string
}

type ChatMessage = {
  id: number
  from: "student" | "system"
  text: string
}

const EMPTY_STUDENT: Student = {
  name: "",
  age: "",
  roll: "",
  hscRegistration: "",
  sscRegistration: "",
}

const STUDENT_KEY = "kacst.chat.student"
const THREAD_KEY = "kacst.chat.thread"

const FIELDS: {
  key: keyof Student
  label: string
  placeholder: string
  inputMode?: "numeric"
}[] = [
  { key: "name", label: "Student Name", placeholder: "Full name" },
  { key: "age", label: "Age", placeholder: "e.g. 18", inputMode: "numeric" },
  { key: "roll", label: "Roll", placeholder: "Class roll", inputMode: "numeric" },
  {
    key: "hscRegistration",
    label: "HSC Registration",
    placeholder: "HSC registration no.",
    inputMode: "numeric",
  },
  {
    key: "sscRegistration",
    label: "SSC Registration",
    placeholder: "SSC registration no.",
    inputMode: "numeric",
  },
]

/**
 * Sent once the form is submitted. It deliberately does not pretend an
 * adviser is already reading the thread — nothing is wired to a backend
 * yet, so promising a live reply would be a lie to the student.
 */
const INTRO_MESSAGE =
  "Thanks — your details are saved. Write your question below and the Academic Office will follow up using the contact details on record."

export function StudentChatWidget() {
  const [open, setOpen] = useState(false)
  const [student, setStudent] = useState<Student | null>(null)
  const [form, setForm] = useState<Student>(EMPTY_STUDENT)
  const [errors, setErrors] = useState<Partial<Record<keyof Student, boolean>>>({})
  const [thread, setThread] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState("")

  const panelRef = useRef<HTMLDivElement>(null)
  const threadEndRef = useRef<HTMLDivElement>(null)

  /* Restore a previous session so the form is only asked once. */
  useEffect(() => {
    try {
      const savedStudent = sessionStorage.getItem(STUDENT_KEY)
      const savedThread = sessionStorage.getItem(THREAD_KEY)
      if (savedStudent) setStudent(JSON.parse(savedStudent))
      if (savedThread) setThread(JSON.parse(savedThread))
    } catch {
      /* Corrupt or unavailable storage just means starting fresh. */
    }
  }, [])

  /* Escape closes the panel. */
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  /* Keep the newest message in view. */
  useEffect(() => {
    if (!open || !student) return
    threadEndRef.current?.scrollIntoView({ block: "end" })
  }, [open, student, thread])

  const persist = (nextStudent: Student, nextThread: ChatMessage[]) => {
    try {
      sessionStorage.setItem(STUDENT_KEY, JSON.stringify(nextStudent))
      sessionStorage.setItem(THREAD_KEY, JSON.stringify(nextThread))
    } catch {
      /* Storage being unavailable must not break the widget. */
    }
  }

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault()

    const missing: Partial<Record<keyof Student, boolean>> = {}
    FIELDS.forEach(({ key }) => {
      if (!form[key].trim()) missing[key] = true
    })

    if (Object.keys(missing).length > 0) {
      setErrors(missing)
      return
    }

    const opening: ChatMessage[] = [
      { id: Date.now(), from: "system", text: INTRO_MESSAGE },
    ]

    setErrors({})
    setStudent(form)
    setThread(opening)
    persist(form, opening)
  }

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text || !student) return

    const next: ChatMessage[] = [
      ...thread,
      { id: Date.now(), from: "student", text },
    ]

    setThread(next)
    setDraft("")
    persist(student, next)
  }

  const resetSession = () => {
    try {
      sessionStorage.removeItem(STUDENT_KEY)
      sessionStorage.removeItem(THREAD_KEY)
    } catch {
      /* ignore */
    }
    setStudent(null)
    setThread([])
    setForm(EMPTY_STUDENT)
    setErrors({})
    setDraft("")
  }

  return (
    <>
      {/* ================= LAUNCHER ================= */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close student chat" : "Open student chat"}
        className="fixed bottom-5 right-5 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-white shadow-[0_16px_40px_rgba(13,3,87,0.35)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
        {!open && (
          <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-brand-dark bg-amber-400" />
        )}
      </button>

      {/* ================= PANEL ================= */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Student chat"
        className={`fixed bottom-24 right-4 z-[200] flex w-[min(calc(100vw-2rem),380px)] flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(13,3,87,0.22)] transition-all duration-200 sm:right-6 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {/* Brand accent */}
        <div
          aria-hidden="true"
          className="h-[3px] w-full bg-gradient-to-r from-[#0D0357] via-amber-400 to-[#0D0357]"
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 bg-brand-dark px-4 py-3.5 text-white">
          <div className="min-w-0">
            <p className="text-sm font-bold">Student Help Desk</p>
            <p className="mt-0.5 text-[11px] text-white/65">
              {student
                ? `Signed in as ${student.name}`
                : "Fill in your details to start"}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {student && (
              <button
                type="button"
                onClick={resetSession}
                className="rounded-lg px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                Reset
              </button>
            )}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!student ? (
          /* ================= STEP 1: FORM ================= */
          <form
            onSubmit={submitForm}
            noValidate
            className="max-h-[60vh] overflow-y-auto overscroll-contain p-4"
            data-lenis-prevent
          >
            <div className="mb-4 flex items-start gap-2.5 rounded-xl bg-slate-50 p-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <IdCard className="h-4 w-4" />
              </span>
              <p className="text-[11px] leading-5 text-slate-500">
                Enter your student details so the Academic Office can identify
                your record before replying.
              </p>
            </div>

            <div className="space-y-3">
              {FIELDS.map(({ key, label, placeholder, inputMode }) => (
                <div key={key}>
                  <label
                    htmlFor={`chat-${key}`}
                    className="mb-1 block text-[11px] font-semibold text-[#0D0357]"
                  >
                    {label}
                  </label>

                  <input
                    id={`chat-${key}`}
                    value={form[key]}
                    inputMode={inputMode}
                    placeholder={placeholder}
                    onChange={(event) => {
                      setForm((current) => ({
                        ...current,
                        [key]: event.target.value,
                      }))
                      setErrors((current) => ({ ...current, [key]: false }))
                    }}
                    className={`h-10 w-full rounded-xl border bg-slate-50/60 px-3 text-[13px] text-[#0D0357] outline-none transition-colors placeholder:text-slate-400 focus:bg-white ${
                      errors[key]
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-amber-400"
                    }`}
                  />

                  {errors[key] && (
                    <p className="mt-1 text-[10px] font-medium text-rose-500">
                      {label} is required.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-dark text-sm font-bold text-white transition-colors hover:bg-[#120A80]"
            >
              Start Chat
              <MessageSquare className="h-4 w-4" />
            </button>
          </form>
        ) : (
          /* ================= STEP 2: CHAT ================= */
          <>
            <div
              className="flex max-h-[46vh] min-h-[220px] flex-1 flex-col gap-2.5 overflow-y-auto overscroll-contain p-4"
              data-lenis-prevent
            >
              {/* Student record chip */}
              <div className="mb-1 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <User className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[11px] font-bold text-[#0D0357]">
                    {student.name} · Age {student.age}
                  </p>
                </div>

                <dl className="mt-2 grid grid-cols-3 gap-2 text-[10px]">
                  {[
                    ["Roll", student.roll],
                    ["HSC Reg", student.hscRegistration],
                    ["SSC Reg", student.sscRegistration],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0">
                      <dt className="font-semibold uppercase tracking-wider text-slate-400">
                        {label}
                      </dt>
                      <dd className="truncate font-medium text-slate-600">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {thread.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-5 ${
                    message.from === "student"
                      ? "self-end bg-brand-dark text-white"
                      : "self-start bg-slate-100 text-slate-600"
                  }`}
                >
                  {message.text}
                </div>
              ))}

              <div ref={threadEndRef} />
            </div>

            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 border-t border-slate-200 p-3"
            >
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Write your question..."
                aria-label="Message"
                className="h-10 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50/60 px-3 text-[13px] text-[#0D0357] outline-none transition-colors placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
              />

              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white transition-colors hover:bg-[#120A80] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </>
  )
}
