"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Mail, Phone, Send } from "lucide-react"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 ease-out hover:border-blue-300 hover:shadow-sm focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"

  const labelClass =
    "mb-2 block text-[13px] font-semibold tracking-[-0.01em] text-slate-800"

  if (sent) {
    return (
      <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 animate-in fade-in zoom-in-95 duration-500">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-200 bg-blue-50 shadow-sm">
            <CheckCircle2 className="h-9 w-9 text-blue-600" strokeWidth={1.8} />
          </div>

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Thank You
          </p>

          <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Message Sent Successfully
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            Thank you for contacting us. Your message has been received and our
            team will get back to you as soon as possible.
          </p>

          <button
            type="button"
            onClick={() => setSent(false)}
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-600/15"
          >
            Send Another Message
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="contact-card group relative overflow-visible rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_30px_90px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10"
    >
      {/* =====================================================
          OUTER ANIMATED BORDER
          Blue light moves around the OUTSIDE edge
      ====================================================== */}

      {/* Static outer glow */}
      <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[29px] bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 blur-sm" />

      {/* Moving light */}
      <div className="pointer-events-none absolute -inset-[4px] z-0 overflow-hidden rounded-[32px]">
        <div className="animate-spin-border absolute inset-[-200%]" />
        <div className="absolute inset-[2px] z-10 rounded-[30px] bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      </div>

      {/* Subtle animated outer glow */}
      <div className="pointer-events-none absolute -inset-[2px] -z-[1] rounded-[30px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[30px] bg-blue-500/10 blur-md" />
      </div>

      {/* Soft ambient blue lighting */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl transition-transform duration-700 group-hover:scale-110" />

      <div className="pointer-events-none absolute -bottom-32 -left-28 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Top accent */}
      <div className="pointer-events-none absolute inset-x-10 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 border-b border-slate-200/80 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Contact Us
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
              Send Us a Message
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Have a question or need assistance? Share your details below and our
              team will be happy to help.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-slate-400 shadow-sm sm:flex">
            <Mail className="h-4 w-4" />
            <span className="text-xs font-medium">We’re here to help</span>
          </div>
        </div>

        {/* Form fields */}
        <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <label className={labelClass} htmlFor="contact-name">
              Full Name <span className="text-blue-600">*</span>
            </label>

            <input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-75">
            <label className={labelClass} htmlFor="contact-email">
              Email Address <span className="text-blue-600">*</span>
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
            <label className={labelClass} htmlFor="contact-phone">
              Phone Number
            </label>

            <div className="relative">
              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={`${inputClass} pl-11`}
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
            <label className={labelClass} htmlFor="contact-subject">
              Subject <span className="text-blue-600">*</span>
            </label>

            <input
              id="contact-subject"
              name="subject"
              required
              className={inputClass}
              placeholder="How can we help?"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-5 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
          <label className={labelClass} htmlFor="contact-message">
            Your Message <span className="text-blue-600">*</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            className={`${inputClass} min-h-[150px] resize-y`}
            placeholder="Write your message here..."
          />
        </div>

        {/* Footer */}
        <div className="mt-7 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-400">
            Fields marked with{" "}
            <span className="font-semibold text-blue-600">*</span> are required.
          </p>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-600/15 sm:w-auto"
          >
            Send Message

            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        /*
         * Keep the animated stroke outside the card so it reads as one
         * continuous line travelling around the perimeter.
         */

        .animate-spin-border {
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 30%,
            rgba(253, 153, 0, 0.18) 42%,
            rgba(253, 153, 0, 1) 55%,
            rgba(253, 153, 0, 0.5) 65%,
            transparent 70%,
            transparent 100%
          );
          animation: spin-border 5.5s linear infinite;
          box-shadow: 0 0 16px rgba(253, 153, 0, 0.24),
            0 0 32px rgba(253, 153, 0, 0.12);
          will-change: transform;
        }

        @keyframes spin-border {
          100% {
            transform: rotate(360deg);
          }
        }

        .contact-card {
          isolation: isolate;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-spin-border {
            animation: none !important;
            opacity: 0.55;
          }

          :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </form>
  )
}