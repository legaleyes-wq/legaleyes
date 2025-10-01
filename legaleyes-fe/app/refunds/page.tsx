"use client"
import Link from "next/link"

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-background">
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate mb-6">Refunds & Cancellations</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">1. Service nature</h2>
      <p className="mb-4 text-slate-700">
        Our services involve professional time and expertise. Once review work has started, refunds may be partial or
        unavailable depending on the stage of completion.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">2. Cancellation before start</h2>
      <p className="mb-4 text-slate-700">Full refund if cancellation is requested before we confirm review commencement.</p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">3. Cancellation after start</h2>
      <p className="mb-4 text-slate-700">
        If cancellation occurs after work begins, we may provide a prorated refund based on time spent and deliverables
        already provided.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">4. Rush/expedite fees</h2>
      <p className="mb-4 text-slate-700">Rush fees are non‑refundable once the expedited review window has begun.</p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">5. Quality concerns</h2>
      <p className="mb-4 text-slate-700">
        If you are dissatisfied, contact us within 7 days of delivery. We will prioritize revisions to address specific
        concerns. Refunds are considered on a case‑by‑case basis.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">6. How to request</h2>
      <p className="mb-10 text-slate-700">
        Email <a className="text-emerald underline" href="mailto:hello@legaleyes.com">hello@legaleyes.com</a> with your
        ticket ID and reason for the request.
      </p>

        <div className="text-sm text-muted-foreground space-x-4">
          <Link href="/terms" className="underline">Terms of Service</Link>
          <Link href="/privacy" className="underline">Privacy Policy</Link>
        </div>
      </main>

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


