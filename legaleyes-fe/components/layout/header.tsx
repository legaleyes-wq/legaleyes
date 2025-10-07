"use client"
import Link from "next/link"

interface HeaderProps {
  currentPage?: "business" | "individual" | "landing"
}

export function Header({ currentPage }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 ${
      currentPage === "business" 
        ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700" 
        : currentPage === "individual"
        ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 border-b border-emerald-400"
        : "bg-background/80 backdrop-blur border-b border-border"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        <Link 
          href="/" 
          className={`text-xl font-semibold transition-colors ${
            currentPage === "business" 
              ? "text-white hover:text-emerald-300" 
              : currentPage === "individual"
              ? "text-white hover:text-emerald-100"
              : "text-emerald hover:text-emerald/80"
          }`}
        >
          LegalEyes
        </Link>
        
        
        <nav className="flex items-center gap-6 text-sm">
          <div className={`flex items-center gap-2 rounded-full p-1 ${
            currentPage === "business"
              ? "bg-slate-700/50"
              : currentPage === "individual"
              ? "bg-white/20"
              : "bg-slate-100"
          }`}>
            <Link 
              href="/business" 
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                currentPage === "business" 
                  ? "bg-emerald-500 text-white shadow-md" 
                  : currentPage === "individual"
                  ? "text-emerald-100 hover:text-white hover:bg-white/20"
                  : currentPage === "landing"
                  ? "text-slate-400 hover:text-slate-600"
                  : "bg-white text-slate-600 shadow-sm"
              }`}
            >
              Business
            </Link>
            <Link 
              href="/individual" 
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                currentPage === "individual" 
                  ? "bg-white text-emerald-600 shadow-md" 
                  : currentPage === "business"
                  ? "text-slate-300 hover:text-white hover:bg-slate-600/50"
                  : currentPage === "landing"
                  ? "text-slate-400 hover:text-slate-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Individual
            </Link>
          </div>
        </nav>
        
        {/* Status indicator */}
        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full animate-ping ${
          currentPage === "business"
            ? "bg-emerald-400"
            : currentPage === "individual"
            ? "bg-white"
            : "bg-emerald/60"
        }`}></div>
      </div>
    </header>
  )
}
