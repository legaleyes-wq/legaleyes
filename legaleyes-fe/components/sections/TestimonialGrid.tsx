"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, User } from "lucide-react"

interface TestimonialItem {
    quote: string
    author: string
    role: string
}

interface TestimonialGridProps {
    title: string
    subtitle: string
    testimonials: TestimonialItem[]
    theme?: "business" | "individual"
}

export function TestimonialGrid({ title, subtitle, testimonials, theme = "business" }: TestimonialGridProps) {
    const isBusiness = theme === "business" || theme === undefined
    const bgClass = isBusiness
        ? "bg-gradient-to-br from-slate-50 to-white"
        : "bg-gradient-to-br from-emerald-50/30 to-white"

    return (
        <div className={`py-24 ${bgClass} relative overflow-hidden`} id="testimonials">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 -translate-x-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 translate-x-48"></div>
            {isBusiness && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-6 font-[family-name:var(--font-merriweather)]">
                        {title}
                    </h2>
                    <p className="text-xl text-slate max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className={`grid md:grid-cols-${testimonials.length > 2 ? '3' : '2'} gap-8`}>
                    {testimonials.map((t, i) => (
                        <Card key={i} className="p-8 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-card to-background">
                            <CardContent className="pt-6">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="h-5 w-5 text-gold fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-lg mb-6 text-balance italic">
                                    "{t.quote}"
                                </blockquote>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                                        {isBusiness ? <Award className="h-5 w-5 text-emerald" /> : <User className="h-5 w-5 text-emerald" />}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate">{t.author}</div>
                                        <div className="text-sm text-muted-foreground">{t.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
