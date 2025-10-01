"use client"
import Link from "next/link"

export default function CookiesPolicyPage() {
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
        <h1 className="text-4xl font-bold text-slate mb-6">Cookies Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-6 text-slate-700">
        We use cookies and similar technologies to provide essential site functionality and to understand how our
        website is used. This policy explains what cookies are and how you can control them.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">1. What are cookies?</h2>
      <p className="mb-4 text-slate-700">Cookies are small text files stored on your device when you visit a website.</p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">2. Types of cookies we use</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2">
        <li>Strictly necessary cookies for core functionality</li>
        <li>Preference cookies to remember choices (e.g., theme)</li>
        <li>Analytics cookies to improve our site performance (optional)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">3. Managing cookies</h2>
      <p className="mb-4 text-slate-700">
        You can manage cookies through your browser settings. Disabling certain cookies may impact site functionality.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-6 mb-4">4. Third‑party cookies</h2>
      <p className="mb-4 text-slate-700">
        If we use analytics or payment providers, they may set their own cookies. See their policies for details.
      </p>

        <div className="text-sm text-muted-foreground space-x-4 mt-10">
          <Link href="/privacy" className="underline">Privacy Policy</Link>
          <Link href="/terms" className="underline">Terms of Service</Link>
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


