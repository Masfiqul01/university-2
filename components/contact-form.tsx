"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-brand" />
        <h3 className="font-serif text-xl font-bold text-foreground">Message Sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. This is a demo form — no message was actually sent.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="name">
            Full Name
          </label>
          <input id="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="phone">
            Phone
          </label>
          <input id="phone" className={inputClass} placeholder="Optional" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="subject">
            Subject
          </label>
          <input id="subject" required className={inputClass} placeholder="How can we help?" />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="message">
          Message
        </label>
        <textarea id="message" required rows={5} className={inputClass} placeholder="Write your message..." />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
