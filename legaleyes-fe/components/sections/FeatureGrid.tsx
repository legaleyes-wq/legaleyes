"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface FeatureItem {
    icon: LucideIcon
    title: string
    description: string
    color: "emerald" | "gold" | "deep-blue"
}

interface FeatureGridProps {
    title: React.ReactNode
    subtitle: string
    features: FeatureItem[]
    theme?: "business" | "individual"
}

export function FeatureGrid({ title, subtitle, features, theme = "business" }: FeatureGridProps) {
    const isBusiness = theme === "business"
    const bgClass = isBusiness
        ? "bg-gradient-to-br from-slate-50 to-white"
        : "bg-gradient-to-br from-emerald-50/30 to-white"

    return (
        <div className={`py-24 ${bgClass} relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full translate-y-40 -translate-x-40"></div>
            {isBusiness && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        const borderColor = feature.color === "emerald" ? "hover:border-emerald/50"
                            : feature.color === "gold" ? "hover:border-gold/50"
                                : "hover:border-deep-blue/50"
                        const iconBgColor = feature.color === "emerald" ? "border-emerald/30"
                            : feature.color === "gold" ? "border-gold/30"
                                : "border-deep-blue/30"
                        const iconColor = `text-${feature.color}`

                        return (
                            <Card key={i} className={`text-center p-8 border-2 border-slate-200 ${borderColor} hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white`}>
                                <CardContent className="pt-6">
                                    <div className={`rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border ${iconBgColor} bg-white`}>
                                        <Icon className={`h-8 w-8 ${iconColor}`} />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
