"use client"
import Link from "next/link"

export default function TermsOfServicePage() {
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
        <h1 className="text-4xl font-bold text-slate mb-6">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-6 text-slate-700">
        These Terms of Service ("Terms") govern your use of the LegalEyes website and services. By accessing or using our
        site and services, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">1. Nature of services</h2>
      <p className="mb-4 text-slate-700">
        LegalEyes provides contract review and plain‑language summaries. We are not a law firm and do not provide legal
        representation. Information provided is for informational purposes only and does not create an attorney‑client
        relationship.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">2. Eligibility</h2>
      <p className="mb-4 text-slate-700">You must be at least 18 years old and capable of forming a binding contract.</p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">3. Confidentiality</h2>
      <p className="mb-4 text-slate-700">
        We follow an NDA‑first workflow. Do not share confidential information until an NDA is executed. Once executed, we
        will handle documents in accordance with our Privacy Policy and Data Retention practices.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">4. Payments & refunds</h2>
      <p className="mb-4 text-slate-700">
        Fees are communicated before work begins. Refunds are governed by our Refunds & Cancellations Policy. Work may
        pause if payment is not received by the agreed time.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">5. Your responsibilities</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2">
        <li>Provide accurate information and complete documents.</li>
        <li>Ensure you have the right to share any documents.</li>
        <li>Use deliverables for lawful purposes only.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">6. Intellectual property</h2>
      <p className="mb-4 text-slate-700">
        You retain ownership of your documents. We grant you a license to use the deliverables we provide for your
        internal purposes. We retain ownership of our templates and methodologies.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">7. Disclaimers</h2>
      <p className="mb-4 text-slate-700">
        Services are provided "as is" without warranties. We do not guarantee outcomes in negotiations or third‑party
        actions.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">8. Limitation of liability</h2>
      <p className="mb-4 text-slate-700">
        To the maximum extent permitted by law, LegalEyes will not be liable for indirect, incidental, or consequential
        damages. Our total liability is limited to the amount paid for the relevant service.
      </p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">9. Governing law</h2>
      <p className="mb-4 text-slate-700">These Terms are governed by the laws of India, with venue in Pune, Maharashtra, unless agreed otherwise.</p>

      <h2 className="text-2xl font-semibold text-slate mt-10 mb-4">10. Contact</h2>
      <p className="mb-10 text-slate-700">
        Questions? Email <a className="text-emerald underline" href="mailto:hello@legaleyes.com">hello@legaleyes.com</a>.
      </p>

        <div className="text-sm text-muted-foreground space-x-4">
          <Link href="/privacy" className="underline">Privacy Policy</Link>
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


