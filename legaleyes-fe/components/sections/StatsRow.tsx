"use client"

interface StatItem {
    value: string
    label: string
    color: "emerald" | "gold" | "deep-blue"
}

interface StatsRowProps {
    stats: StatItem[]
    theme?: "business" | "individual"
}

export function StatsRow({ stats, theme = "business" }: StatsRowProps) {
    const isBusiness = theme === "business"

    // Background style
    // Business: dark slate bg
    // Individual: slate-900 to slate-800 (same as business in original code actually)
    const bgClass = "bg-gradient-to-r from-slate-900 to-slate-800"

    return (
        <div className={`py-16 ${bgClass} relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 -translate-x-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 translate-x-48"></div>
            {isBusiness && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <div className={`text-4xl md:text-5xl font-bold text-${stat.color} font-[family-name:var(--font-merriweather)]`}>
                                {stat.value}
                            </div>
                            <div className="text-lg text-slate-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
