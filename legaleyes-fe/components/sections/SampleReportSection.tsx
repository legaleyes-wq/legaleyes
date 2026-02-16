"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, FileText } from "lucide-react"

interface SampleReportSectionProps {
    theme?: "business" | "individual"
    subtitle?: string
    reportTitle?: string
    reportPages?: string
    reportTurnaround?: string
}

export function SampleReportSection({
    theme = "business",
    subtitle = "A comprehensive Word document with detailed analysis and actionable insights",
    reportTitle = "Employment Contract Review",
    reportPages = "8-12 pages",
    reportTurnaround = "24-48 hours"
}: SampleReportSectionProps) {
    const isBusiness = theme === "business"
    const bgClass = isBusiness
        ? "bg-gradient-to-br from-emerald-50/30 to-white"
        : "bg-gradient-to-br from-gold-50/30 to-white"

    const iconColor = isBusiness ? "text-emerald" : "text-gold"
    const iconBg = isBusiness ? "bg-emerald/10" : "bg-gold/10"
    const buttonClass = isBusiness ? "bg-emerald hover:bg-emerald/90" : "bg-gold hover:bg-gold/90 text-white"

    return (
        <div id="sample-report" className={`py-16 ${bgClass} relative overflow-hidden`}>
            {isBusiness && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">
                        Here's exactly what you'll receive
                    </h2>
                    <p className="text-lg text-slate-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                                <CheckCircle className={`h-5 w-5 ${iconColor}`} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate mb-2">Executive Summary</h3>
                                <p className="text-slate-600 text-sm">Plain-English overview of key risks and opportunities</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                                <CheckCircle className={`h-5 w-5 ${iconColor}`} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate mb-2">Clause-by-Clause Analysis</h3>
                                <p className="text-slate-600 text-sm">Detailed breakdown of each important section</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                                <CheckCircle className={`h-5 w-5 ${iconColor}`} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate mb-2">Red Flags & Recommendations</h3>
                                <p className="text-slate-600 text-sm">Specific issues to address and suggested changes</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border-2 border-slate-200 p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}>
                                <FileText className={`h-4 w-4 ${iconColor}`} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate">Sample Report</h4>
                                <p className="text-sm text-slate-500">{reportTitle}</p>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-600">Pages:</span>
                                <span className="font-medium">{reportPages}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600">Format:</span>
                                <span className="font-medium">Microsoft Word</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600">Turnaround:</span>
                                <span className="font-medium">{reportTurnaround}</span>
                            </div>
                        </div>
                        <Button asChild className={`w-full mt-4 ${buttonClass}`}>
                            <a href="#contact">Get your report</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
