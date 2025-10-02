"use client"
import Link from "next/link"

interface HeaderProps {
  currentPage?: "business" | "individual"
}

export function Header({ currentPage }: HeaderProps) {
  return (
    <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        <Link href="/" className="text-xl font-semibold text-emerald hover:text-emerald/80 transition-colors">
          LegalEyes
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
            <Link 
              href="/" 
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                currentPage === "business" 
                  ? "bg-white text-slate-600 shadow-sm" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Business
            </Link>
            <Link 
              href="/individual" 
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                currentPage === "individual" 
                  ? "bg-white text-slate-600 shadow-sm" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Individual
            </Link>
          </div>
        </nav>
        
        {/* subtle blinking dot */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-emerald/60 rounded-full animate-ping"></div>
      </div>
    </header>
  )
}
