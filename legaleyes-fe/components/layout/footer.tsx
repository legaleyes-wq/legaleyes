export function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-emerald mb-1 font-[family-name:var(--font-merriweather)]">LegalEyes</h3>
            <p className="text-muted-foreground text-sm">Contracts, made clear.</p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/legal" className="text-muted-foreground hover:text-emerald transition-colors">Legal</a>
          </nav>
          <div className="text-sm text-muted-foreground">© 2025 LegalEyes</div>
        </div>
      </div>
    </footer>
  )
}
