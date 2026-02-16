"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
    title: React.ReactNode
    subtitle: string
    buttonText?: string
    theme?: "business" | "individual"
}

export function CTASection({ title, subtitle, buttonText = "Start your review", theme = "business" }: CTASectionProps) {
    const bgClass = theme === "business"
        ? "bg-gradient-to-br from-emerald-50/30 to-white"
        : "bg-gradient-to-br from-emerald-50/30 to-white"

    return (
        <div className={`py-24 ${bgClass} relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full translate-y-40 -translate-x-40"></div>
            {theme === "business" && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-balance text-slate">
                        {title}
                    </h2>
                    <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto text-balance">
                        {subtitle}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="text-xl px-10 py-6 bg-emerald text-white hover:bg-emerald/90 shadow-xl hover:shadow-emerald/20 font-semibold"
                    >
                        <a href="#contact">
                            {buttonText}
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
