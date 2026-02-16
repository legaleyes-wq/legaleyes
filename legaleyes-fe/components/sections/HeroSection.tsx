"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Clock, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  theme: "business" | "individual"
  title: React.ReactNode
  subtitle: React.ReactNode
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
  sampleReportLink?: string
}

export function HeroSection({
  theme,
  title,
  subtitle,
  primaryButtonText = "Start your review",
  secondaryButtonText = "See pricing",
  primaryButtonLink = "#contact",
  secondaryButtonLink = "#pricing",
  sampleReportLink = "#sample-report"
}: HeroSectionProps) {
  const isBusiness = theme === "business"

  // Theme-specific styles
  const bgGradient = isBusiness 
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" 
    : "bg-gradient-to-br from-emerald-100 via-white to-gold-100"
  
  const titleColor = isBusiness ? "text-white" : "text-slate"
  const subtitleColor = isBusiness ? "text-slate-300" : "text-slate-600"
  
  const blob1Color = isBusiness ? "bg-emerald/10" : "bg-emerald/10"
  const blob2Color = isBusiness ? "bg-gold/10" : "bg-gold/10"
  const blob3Color = isBusiness ? "bg-deep-blue/10" : "bg-deep-blue/10"
  
  const primaryButtonClass = isBusiness
    ? "bg-gradient-emerald hover:bg-emerald/90 text-white"
    : "bg-gradient-emerald shadow-2xl hover:shadow-emerald-500/25 text-white"
    
  const secondaryButtonClass = isBusiness
    ? "bg-white border-2 border-emerald text-emerald hover:bg-emerald hover:text-white"
    : "bg-white border-2 border-emerald text-emerald hover:bg-emerald hover:text-white"

  return (
    <div className={`${bgGradient} scroll-mt-24 relative overflow-hidden`} id="about">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className={`absolute top-20 left-10 w-32 h-32 ${blob1Color} rounded-full blur-xl`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 ${blob2Color} rounded-full blur-xl`}></div>
        <div className={`absolute bottom-20 left-1/4 w-40 h-40 ${blob3Color} rounded-full blur-xl`}></div>
        {/* Pattern */}
        {isBusiness ? (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(30,58,138,0.05)_0%,transparent_50%)]"></div>
        )}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1 className={`text-6xl md:text-8xl font-bold ${titleColor} mb-6 font-[family-name:var(--font-merriweather)] text-balance tracking-tight`}>
              {title}
            </h1>

            <p className={`text-xl md:text-2xl ${subtitleColor} mb-8 max-w-3xl mx-auto text-balance font-[family-name:var(--font-inter)]`}>
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className={`text-lg px-10 py-7 font-semibold ${primaryButtonClass}`}>
              <a href={primaryButtonLink}>
                {primaryButtonText}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className={`text-lg px-10 py-7 font-semibold ${secondaryButtonClass}`}>
              <a href={secondaryButtonLink}>{secondaryButtonText}</a>
            </Button>
          </div>
          
          <div className="text-center mb-12">
            <Button asChild variant="ghost" className="text-emerald hover:text-emerald/80 hover:bg-emerald/10">
              <a href={sampleReportLink}>
                View sample report
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-slate-500 mt-2">
              See exactly what you'll receive: detailed analysis + plain-English summary
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Badge
              variant="secondary"
              className="px-6 py-3 bg-white border border-gold text-gold hover:bg-gold hover:text-white font-medium"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Flat Pricing
            </Badge>
            <Badge
              variant="secondary"
              className="px-6 py-3 bg-white border border-emerald text-emerald hover:bg-emerald hover:text-white font-medium"
            >
              <Shield className="mr-2 h-4 w-4" />
              NDA-First Workflow
            </Badge>
            <Badge
              variant="secondary"
              className="px-6 py-3 bg-white border border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-medium"
            >
              <Clock className="mr-2 h-4 w-4" />
              48h Turnaround
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
