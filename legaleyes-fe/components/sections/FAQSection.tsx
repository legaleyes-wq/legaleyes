"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
    question: string
    answer: string
}

interface FAQSectionProps {
    items: FAQItem[]
    theme?: "business" | "individual"
}

export function FAQSection({ items, theme = "business" }: FAQSectionProps) {
    const isBusiness = theme === "business"
    const bgClass = isBusiness
        ? "bg-gradient-to-br from-slate-50 to-white"
        : "bg-white"

    return (
        <div id="faq" className={`py-24 ${bgClass} relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald/5 rounded-full -translate-y-48 -translate-x-48"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full translate-y-40 translate-x-40"></div>
            {isBusiness && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
            )}

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground">
                        {isBusiness ? "Straight answers to the most common questions." : "Everything you need to know before getting your contract reviewed."}
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {items.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
