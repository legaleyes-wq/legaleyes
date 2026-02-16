"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export interface PricingTier {
    title: string
    description: string
    price: string
    priceSuffix: string
    features: string[]
    buttonText: string
    highlight?: boolean
    highlightText?: string
    color: "emerald" | "gold" | "deep-blue"
}

interface PricingSectionProps {
    title: React.ReactNode
    subtitle: React.ReactNode
    tiers: PricingTier[]
    theme?: "business" | "individual"
}

export function PricingSection({ title, subtitle, tiers, theme = "business" }: PricingSectionProps) {
    const isBusiness = theme === "business"
    const bgClass = isBusiness
        ? "bg-gradient-to-br from-white to-slate-50"
        : "bg-gradient-to-br from-white to-slate-50"

    const gridCols = tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
    const maxW = tiers.length === 3 ? "max-w-6xl" : "max-w-4xl"

    return (
        <div className={`py-24 ${bgClass} scroll-mt-24 relative overflow-hidden`} id="pricing">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 translate-x-40"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 -translate-x-48"></div>
            {isBusiness && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600">
                        {subtitle}
                    </p>
                </div>

                <div className={`grid ${gridCols} gap-8 ${maxW} mx-auto`}>
                    {tiers.map((tier, i) => {
                        const borderColor = tier.color === "emerald" ? "border-emerald/30 hover:border-emerald/60"
                            : tier.color === "gold" ? "border-gold/30 hover:border-gold/60"
                                : "border-slate-200 hover:border-deep-blue/50"

                        const buttonClass = tier.color === "emerald"
                            ? "bg-emerald hover:bg-emerald/90 shadow-xl hover:shadow-emerald-500/25"
                            : tier.color === "gold"
                                ? "bg-gradient-gold shadow-xl hover:shadow-yellow-500/25"
                                : "bg-emerald hover:bg-emerald/90 shadow-xl hover:shadow-emerald-500/25"

                        const textColor = `text-${tier.color}`

                        return (
                            <Card key={i} className={`p-8 border-2 ${borderColor} hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white relative overflow-hidden h-full flex flex-col`}>
                                {tier.highlight && (
                                    <div className="absolute top-4 right-4">
                                        <Badge className={`bg-${tier.color} text-white px-4 py-2 font-semibold`}>
                                            {tier.highlightText || "Most Popular"}
                                        </Badge>
                                    </div>
                                )}
                                {/* Decoration blob */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${tier.color}/10 rounded-full -translate-y-16 translate-x-16`}></div>

                                <CardContent className="pt-6 relative flex flex-col h-full">
                                    <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                                        {tier.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 text-lg min-h-[3rem] flex items-center">{tier.description}</p>
                                    <div className={`text-5xl font-bold ${textColor} mb-6 flex items-baseline`}>
                                        {tier.price}
                                        <span className="text-sm font-normal text-slate-500 ml-2">{tier.priceSuffix}</span>
                                    </div>
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {tier.features.map((feature, j) => (
                                            <li key={j} className="flex items-center">
                                                <CheckCircle className={`h-6 w-6 ${textColor} mr-3 flex-shrink-0`} />
                                                <span className="text-lg">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild className={`w-full text-lg py-6 font-semibold mt-auto ${buttonClass}`}>
                                        <a href="#contact">{tier.buttonText}</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="text-center mt-8">
                    <p className="text-slate">
                        <span className="text-emerald font-semibold">Pay once, review once</span> - no subscriptions, no hidden fees
                    </p>
                </div>
            </div>
        </div>
    )
}
