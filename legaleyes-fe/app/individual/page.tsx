"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact-form"
import {
  Shield,
  Clock,
  User,
} from "lucide-react"

import { HeroSection } from "@/components/sections/HeroSection"
import { SampleReportSection } from "@/components/sections/SampleReportSection"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { StatsRow } from "@/components/sections/StatsRow"
import { TestimonialGrid } from "@/components/sections/TestimonialGrid"
import { PricingSection, PricingTier } from "@/components/sections/PricingSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { CTASection } from "@/components/sections/CTASection"
import { AlertTriangle, CheckCircle } from "lucide-react"

export default function IndividualContractPage() {
  const features = [
    {
      icon: User,
      title: "Personal Focus",
      description: "We understand individual concerns and explain everything in plain English you can actually understand.",
      color: "emerald" as const
    },
    {
      icon: Shield,
      title: "Your Privacy First",
      description: "NDA-first workflow ensures your personal documents stay completely confidential and secure.",
      color: "gold" as const
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your contract reviewed and explained within 24-48 hours, so you can make informed decisions quickly.",
      color: "deep-blue" as const
    }
  ]

  const stats = [
    { value: "2,500+", label: "Individual contracts reviewed", color: "emerald" as const },
    { value: "24h", label: "Average turnaround time", color: "gold" as const },
    { value: "99%", label: "Clients feel more confident signing", color: "deep-blue" as const }
  ]

  const testimonials = [
    {
      quote: "I was about to sign a freelance contract that would have locked me into terrible terms. LegalEyes caught the red flags and saved me from a huge mistake. Worth every rupee!",
      author: "Priya S.",
      role: "Freelance Designer"
    },
    {
      quote: "The employment contract review was incredibly detailed. They explained every clause in simple terms and helped me negotiate better terms. Highly recommended!",
      author: "Rajesh K.",
      role: "Software Engineer"
    },
    {
      quote: "I was nervous about my rental agreement, but LegalEyes made it so clear and easy to understand. The consultation call was the cherry on top - felt like having a lawyer friend!",
      author: "Anita M.",
      role: "Marketing Professional"
    }
  ]

  const pricingTiers: PricingTier[] = [
    {
      title: "Basic Review",
      description: "Standard contract review",
      price: "₹499",
      priceSuffix: "per contract",
      features: [
        "Complete contract analysis",
        "Plain-English summary",
        "Red flags highlighted",
        "24-hour turnaround"
      ],
      buttonText: "Get Started",
      color: "emerald"
    },
    {
      title: "Premium Review",
      description: "Everything in Basic plus consultation",
      price: "₹4999",
      priceSuffix: "per contract",
      features: [
        "Everything in Basic",
        "15-min consultation call",
        "Negotiation tips",
        "Priority support"
      ],
      buttonText: "Get Started",
      highlight: true,
      highlightText: "Most Popular",
      color: "gold"
    }
  ]

  const faqs = [
    {
      question: "What types of contracts do you review?",
      answer: "We review all types of individual contracts: employment agreements, rental leases, loan documents, service contracts, partnership deals, and more. If you're not sure, just ask us."
    },
    {
      question: "How long does the review take?",
      answer: "Most individual contracts are reviewed within 24 hours. Complex contracts with multiple pages may take up to 48 hours. We'll let you know the expected timeline when you submit."
    },
    {
      question: "Will the other party know I got this reviewed?",
      answer: "No. This is completely confidential between you and us. We don't contact the other party, and your review is private. We sign an NDA to protect your information."
    },
    {
      question: "What if I find problems in my contract?",
      answer: "We'll explain what each problematic clause means and suggest questions you can ask or changes you can request. You can negotiate before signing, or decide not to sign at all."
    },
    {
      question: "Can you help me negotiate changes?",
      answer: "We provide you with questions to ask and points to negotiate, but we don't negotiate directly with the other party. You maintain control of the process and decide what to do."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="individual" />

      <HeroSection
        theme="individual"
        title={<span>Contracts, made <span className="text-gold">clear</span>.</span>}
        subtitle={<span>Personal contract review by <span className="text-gold font-semibold">friendly legal experts</span>.</span>}
      />

      <SampleReportSection
        theme="individual"
        reportTurnaround="24 hours"
        reportPages="6-10 pages"
      />

      <FeatureGrid
        theme="individual"
        title={<span>Why <span className="text-emerald">LegalEyes</span></span>}
        subtitle="Personal contracts, employment agreements, and service contracts reviewed by lawyers who understand your needs."
        features={features}
      />

      {/* Smart Investment Section - Kept custom as it's specific enough to maybe not abstract yet, or abstract later */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              Don't get <span className="text-red-500">locked in</span> to bad terms
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A small investment now can save you thousands in legal fees, penalties, and stress later.
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
                  <div className="text-3xl font-bold text-emerald mb-2">₹499 vs ₹50,000+</div>
                  <p className="text-slate-600">Small review cost vs potential legal fees and penalties</p>
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

      <div className="py-24 bg-gradient-to-br from-emerald-50/30 to-white scroll-mt-24 relative overflow-hidden" id="how">
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
                Share Your Contract
              </h3>
              <p className="text-slate text-lg">
                Upload your contract. We'll send an NDA and secure link after you contact us.
              </p>
            </div>

            <div className="text-center relative  ">
              <div className="bg-gradient-gold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl  ">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Expert Review
              </h3>
              <p className="text-slate text-lg">
                <span className="text-emerald font-semibold">Senior lawyers</span> review every clause and flag potential issues.
              </p>
            </div>

            <div className="text-center  ">
              <div className="bg-deep-blue rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl  ">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Get Clarity
              </h3>
              <p className="text-slate text-lg">
                Receive a <span className="text-deep-blue font-semibold">plain-English summary</span> of what you're signing.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-600 mt-10">Independent review. No third-party involvement. Your privacy protected.</p>
        </div>
      </div>

      <StatsRow
        theme="individual"
        stats={stats}
      />

      <TestimonialGrid
        theme="individual"
        title="What Our Clients Say"
        subtitle="Real people, real results. See how LegalEyes has helped individuals protect themselves."
        testimonials={testimonials}
      />

      <PricingSection
        theme="individual"
        title={<span><span className="text-emerald">Simple</span> Pricing</span>}
        subtitle={<span>One price per contract. <span className="text-emerald font-semibold">No subscriptions</span></span>}
        tiers={pricingTiers}
      />

      <FAQSection
        theme="individual"
        items={faqs}
      />

      <CTASection
        theme="individual"
        title={<span>Contracts you understand.</span>}
        subtitle="Contracts vetted by humans you can speak to."
      />

      <div id="contact">
        <ContactForm
          serviceType="individual"
          title="Ready to get started?"
          description="Send us your contract details and we'll get back to you quickly with a detailed review."
        />
      </div>

      <Footer />
    </div>
  )
}
