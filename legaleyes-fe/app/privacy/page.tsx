"use client"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl font-bold text-slate mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-6 text-slate-700">
        This Privacy Policy explains how LegalEyes collects, uses, and protects your information. We prioritize
        confidentiality and operate with an NDA‑first workflow for sensitive documents.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">1. Information we collect</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2">
        <li>Contact information (name, email, company)</li>
        <li>Documents and files you choose to share</li>
        <li>Communications and support messages</li>
        <li>Usage data (device, browser, pages visited)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">2. How we use information</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2">
        <li>Provide and improve contract review services</li>
        <li>Communicate updates, deliverables, and support</li>
        <li>Process payments and invoicing</li>
        <li>Meet legal, regulatory, and security obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">3. Data storage and security</h2>
      <p className="mb-4 text-slate-700">
        We use reputable cloud providers with encryption in transit and at rest. Access is restricted on a
        least‑privilege basis. For uploads, we encourage secure file‑request links instead of email attachments.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">4. Sharing and disclosure</h2>
      <p className="mb-4 text-slate-700">
        We do not sell your data. We share information only with service providers necessary to deliver our services
        (e.g., email, storage, invoicing) under confidentiality obligations, or where required by law.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">5. Data retention</h2>
      <p className="mb-4 text-slate-700">
        Documents and personal data are retained only as long as necessary for the stated purpose, contractual
        obligations, or legal requirements. You can request deletion subject to applicable law and retention needs.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">6. Your rights</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2">
        <li>Access, correction, and deletion of your information</li>
        <li>Objection or restriction of certain processing</li>
        <li>Data portability where applicable</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">7. Cookies</h2>
      <p className="mb-4 text-slate-700">
        We use essential cookies for site functionality and may use analytics cookies to improve the service. See our
        <Link href="/cookies" className="text-emerald underline"> Cookies Policy</Link> for details and controls.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">8. International transfers</h2>
      <p className="mb-4 text-slate-700">
        Data may be processed in locations outside your country. We implement appropriate safeguards consistent with
        applicable laws.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">9. Contact</h2>
      <p className="mb-10 text-slate-700">
        For privacy inquiries, email <a className="text-emerald underline" href="mailto:hello@legaleyes.com">hello@legaleyes.com</a>.
      </p>

        <div className="text-sm text-muted-foreground space-x-4">
          <Link href="/terms" className="underline">Terms of Service</Link>
          <Link href="/refunds" className="underline">Refunds & Cancellations</Link>
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


