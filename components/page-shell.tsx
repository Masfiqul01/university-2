import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

export function EditableNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 inline-block rounded-md bg-brand/5 px-3 py-1.5 text-xs italic text-brand">
      {children}
    </p>
  )
}
