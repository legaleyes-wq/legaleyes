"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact-form"
import {
  Shield,
  Users,
  CheckCircle,
  Eye,
  MessageSquare,
  AlertTriangle,
  FileText
} from "lucide-react"

import { HeroSection } from "@/components/sections/HeroSection"
import { SampleReportSection } from "@/components/sections/SampleReportSection"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { StatsRow } from "@/components/sections/StatsRow"
import { TestimonialGrid } from "@/components/sections/TestimonialGrid"
import { PricingSection, PricingTier } from "@/components/sections/PricingSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { CTASection } from "@/components/sections/CTASection"

export default function LegalEyesPage() {
  const features = [
    {
      icon: Users,
      title: "Human Expertise",
      description: "Real lawyers with decades of experience review every contract personally.",
      color: "emerald" as const
    },
    {
      icon: MessageSquare,
      title: "Plain Language",
      description: "Complex legal jargon translated into clear, actionable insights.",
      color: "gold" as const
    },
    {
      icon: Eye,
      title: "Direct Counsel",
      description: "Available in Retainer Pro for complex contracts and strategic guidance.",
      color: "deep-blue" as const
    }
  ]

  const stats = [
    { value: "5,000+", label: "Contracts reviewed", color: "emerald" as const },
    { value: "17", label: "Avg. critical issues flagged per review", color: "gold" as const },
    { value: "92%", label: "Clients approve on first pass", color: "deep-blue" as const }
  ]

  const testimonials = [
    {
      quote: "All our contracts are vetted by LegalEyes. The comfort of dealing with a human for Legal work is priceless. It's like insurance, but smarter.",
      author: "Startup Founder",
      role: "Startup Founder"
    },
    {
      quote: "This is like having your own in-house legal team on call, minus the cost.",
      author: "Business Owner",
      role: "Business Owner"
    },
    {
      quote: "As a tech startup, our priorities lie elsewhere. Outsourcing all legal to LegalEyes has saved us countless hours and exorbitant fees. Highly recommended for early-stage founders.",
      author: "Tech Startup CEO",
      role: "Tech Startup CEO"
    }
  ]

  const pricingTiers: PricingTier[] = [
    {
      title: "Per Contract",
      description: "One-time contract review",
      price: "Flat Fee",
      priceSuffix: "per contract",
      features: [
        "Complete contract review",
        "Plain-English summary",
        "48-hour turnaround"
      ],
      buttonText: "Start Review",
      color: "deep-blue"
    },
    {
      title: "Retainer",
      description: "Monthly contract reviews",
      price: "Monthly",
      priceSuffix: "subscription",
      features: [
        "Multiple contract reviews",
        "Priority support",
        "Faster turnaround"
      ],
      buttonText: "Contact Sales",
      highlight: true,
      highlightText: "Most Popular",
      color: "emerald"
    },
    {
      title: "Retainer Pro",
      description: "Everything in Retainer plus consultation",
      price: "Premium",
      priceSuffix: "pricing",
      features: [
        "Everything in Retainer",
        "1-on-1 consultation calls",
        "Dedicated attorney"
      ],
      buttonText: "Contact Sales",
      highlight: true,
      highlightText: "Pro",
      color: "gold"
    }
  ]

  const faqs = [
    {
      question: "Do you use AI for reviews?",
      answer: "We may use AI for optional pre-scanning to highlight areas of interest, but every review is performed by experienced human lawyers."
    },
    {
      question: "Will you walk me through what each clause means?",
      answer: "Yes. We provide a plain-English explanation of important clauses, why they exist, and how they affect your rights and obligations."
    },
    {
      question: "Can you suggest what to push back on or let go?",
      answer: "Absolutely. We highlight negotiable points, recommend what’s worth pushing on, and where it’s safe to accept as-is to keep deals moving."
    },
    {
      question: "Do you help with redlines and edits?",
      answer: "Yes. We can return annotated comments, redlines, or a summary with suggested language you can paste directly."
    },
    {
      question: "What is the typical turnaround time?",
      answer: "Standard turnaround is 24–48 hours for most contracts, with urgent options available when needed."
    },
    {
      question: "How do you handle confidentiality?",
      answer: "NDA-first workflow, secure storage, and least-privilege access. Your documents stay private."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="business" />

      <HeroSection
        theme="business"
        title={<span>Contracts, made <span className="text-emerald-400">clear</span>.</span>}
        subtitle={<span>Enterprise-grade contract review by <span className="text-emerald-400 font-semibold">senior legal professionals</span>.</span>}
      />

      <SampleReportSection
        theme="business"
        reportTurnaround="24-48 hours"
        reportPages="8-12 pages"
      />

      <FeatureGrid
        theme="business"
        title={<span>Why <span className="text-emerald">LegalEyes</span></span>}
        subtitle="SaaS, vendor, employment and data‑protection contracts, reviewed by lawyers who do this every day."
        features={features}
      />

      {/* Smart Investment Section - Kept custom */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              Don't get <span className="text-red-500">locked in</span> to bad terms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A small investment now can save you thousands in legal fees, penalties, and business disruption later.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate mb-2">The Cost of Not Reviewing</h3>
                  <p className="text-slate-600">Hidden fees, unfair terms, and legal disputes that could have been avoided</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate mb-2">The Value of Review</h3>
                  <p className="text-slate-600">Peace of mind, fair terms, and protection from future legal headaches</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-gold-50 rounded-xl p-6 border border-emerald-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald mb-2">₹999 vs ₹1,00,000+</div>
                  <p className="text-slate-600">Small review cost vs potential legal fees and business disruption</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-emerald" />
                </div>
                <h3 className="text-2xl font-bold text-slate mb-4">Smart Protection</h3>
                <p className="text-lg text-slate-600 mb-6">
                  <span className="font-semibold">Review before you sign.</span> Once you're locked in, it's much harder and more expensive to fix problems.
                </p>
                <div className="bg-emerald text-white rounded-xl p-4">
                  <div className="text-lg font-bold">Smart investment in your future</div>
                  <p className="text-emerald-100 text-sm mt-1">Professional review by experienced lawyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-slate-50 to-white scroll-mt-24 relative overflow-hidden" id="how">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              How It <span className="text-emerald">Works</span>
            </h2>
            <p className="text-xl text-slate-600">
              Simple, secure, and <span className="text-emerald font-semibold">straightforward</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center relative  ">
              <div className="bg-gradient-emerald rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl  ">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Upload Contract
              </h3>
              <p className="text-slate-600 text-lg">
                Share your contract securely. We'll send an NDA and upload link after you contact us.
              </p>
              <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-emerald/50 to-transparent animate-pulse"></div>
            </div>

            <div className="text-center relative  ">
              <div className="bg-gradient-gold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl  ">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Expert Review
              </h3>
              <p className="text-slate-600 text-lg">
                <span className="text-gold font-semibold">Experienced lawyers</span> review, redline, and identify key
                risks and opportunities.
              </p>
              <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-gold/50 to-transparent animate-pulse"></div>
            </div>

            <div className="text-center  ">
              <div className="bg-deep-blue rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl  ">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Get Results
              </h3>
              <p className="text-slate-600 text-lg">
                Receive detailed analysis and <span className="text-deep-blue font-semibold">plain-English summary</span>.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">NDA-first workflow. Secure storage. Confidential review.</p>
        </div>
      </div>

      <StatsRow
        theme="business"
        stats={stats}
      />

      <TestimonialGrid
        theme="business"
        title="What Our Clients Say"
        subtitle="Real people, real results. See how LegalEyes has helped businesses protect themselves."
        testimonials={testimonials}
      />

      <PricingSection
        theme="business"
        title={<span><span className="text-emerald">Transparent</span> Pricing</span>}
        subtitle={<span>No hidden charges, <span className="text-emerald font-semibold">no surprises</span></span>}
        tiers={pricingTiers}
      />

      <FAQSection
        theme="business"
        items={faqs}
      />

      <CTASection
        theme="business"
        title={<span>Contracts you understand.</span>}
        subtitle="Contracts vetted by humans you can speak to."
      />

      <div id="contact">
        <ContactForm
          serviceType="business"
          title="Ready to get started?"
          description="Send us your contract details and we'll get back to you quickly with a detailed review."
        />
      </div>

      <Footer />
    </div>
  )
}
