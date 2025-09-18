"use client"
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type BackgroundSignatureProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  density?: "none" | "sparse" | "normal"
}

export function BackgroundSignature({ className, children, density = "sparse", ...props }: BackgroundSignatureProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 bg-[url('/subtle-legal-document-pattern-background.jpg')] opacity-5" />

      {/* Floating soft shapes for brand character */}
      <div className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 rounded-full bg-emerald/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />

      {/* Tiny animated pings for life */}
      {density !== "none" && (
        <>
          {/* emerald pings */}
          <div aria-hidden className="pointer-events-none absolute left-10 top-10 size-1.5 rounded-full bg-emerald/60 animate-ping-slow" />
          <div aria-hidden className="pointer-events-none absolute right-10 bottom-12 size-1.5 rounded-full bg-emerald/50 animate-ping-slow delay-500" />
          {/* subtle outlined boxes */}
          <div aria-hidden className="pointer-events-none absolute right-20 top-8 h-4 w-4 rotate-12 border border-emerald/20" />
          <div aria-hidden className="pointer-events-none absolute left-16 bottom-10 h-5 w-5 -rotate-6 border border-emerald/20" />
          {/* gold accent ping */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-6 size-1 rounded-full bg-gold animate-ping-slow delay-300" />
          {density === "normal" && (
            <>
              <div aria-hidden className="pointer-events-none absolute right-1/4 top-1/3 size-1 rounded-full bg-gold animate-ping-slow delay-700" />
              <div aria-hidden className="pointer-events-none absolute left-1/4 bottom-1/4 size-1 rounded-full bg-emerald/60 animate-ping-slow delay-1000" />
              {/* +20% density: add two more, offset and smaller */}
              <div aria-hidden className="pointer-events-none absolute left-[12%] top-1/2 size-1 rounded-full bg-emerald/50 animate-ping-slow delay-[1400ms]" />
              <div aria-hidden className="pointer-events-none absolute right-[12%] bottom-1/3 size-1 rounded-full bg-gold/90 animate-ping-slow delay-[1900ms]" />
            </>
          )}
        </>
      )}

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default BackgroundSignature


