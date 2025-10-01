"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileText, RefreshCw, Truck, Cookie, Mail } from "lucide-react"

const legalLinks = [
  {
    href: "/terms",
    title: "Terms of Service",
    description: "Rules for using LegalEyes and important limitations.",
    Icon: FileText,
    border: "border-slate-200 hover:border-emerald/50",
  },
  {
    href: "/privacy",
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data.",
    Icon: Shield,
    border: "border-slate-200 hover:border-gold/50",
  },
  {
    href: "/refunds",
    title: "Refunds & Cancellations",
    description: "Eligibility, timelines, and how to request a refund.",
    Icon: RefreshCw,
    border: "border-slate-200 hover:border-deep-blue/50",
  },
  {
    href: "/service-delivery",
    title: "Service Delivery",
    description: "Process, timelines, and deliverables for reviews.",
    Icon: Truck,
    border: "border-slate-200 hover:border-emerald/50",
  },
  {
    href: "/cookies",
    title: "Cookies Policy",
    description: "What cookies we use and your choices.",
    Icon: Cookie,
    border: "border-slate-200 hover:border-gold/50",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Reach our team for questions about these policies.",
    Icon: Mail,
    border: "border-slate-200 hover:border-deep-blue/50",
  },
]

export default function LegalHubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          <a href="/" className="text-xl font-semibold text-emerald hover:text-emerald/80 transition-colors">LegalEyes</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/individual" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Individual</a>
            <a href="/#about" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">About</a>
            <a href="/#how" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">How it works</a>
            <a href="/#pricing" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Pricing</a>
            <a href="/#faq" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">FAQ</a>
            <a href="/#contact" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="/#contact" className="inline-flex items-center rounded-md bg-emerald px-4 py-2 text-white text-sm font-medium hover:bg-emerald/90 transition-colors">Get Started</a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate mb-3 font-[family-name:var(--font-merriweather)]">Legal</h1>
          <p className="text-slate-600 max-w-2xl">Policies and terms governing the use of LegalEyes, your data, and our services.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {legalLinks.map(({ href, title, description, Icon, border }) => (
            <Link key={href} href={href} className="group">
              <Card className={`h-full transition-all duration-300 ${border} border-2 bg-white hover:-translate-y-1 hover:shadow-2xl hover:bg-gradient-to-br hover:from-emerald-50/40 hover:to-white`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full border mb-4 flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 text-emerald" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate mb-2 font-[family-name:var(--font-merriweather)]">{title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-emerald mb-1 font-[family-name:var(--font-merriweather)]">LegalEyes</h3>
              <p className="text-muted-foreground text-sm">Contracts, made clear.</p>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="/individual" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Individual</a>
              <a href="/#about" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">About</a>
              <a href="/#how" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">How it works</a>
              <a href="/#pricing" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Pricing</a>
              <a href="/#faq" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">FAQ</a>
              <a href="/#contact" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Contact</a>
              <a href="/legal" className="text-muted-foreground hover:text-emerald transition-colors">Legal</a>
            </nav>
            <div className="text-sm text-muted-foreground">© 2025 LegalEyes</div>
          </div>
        </div>
      </footer>
    </div>
  )
}


