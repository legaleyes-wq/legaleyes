"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Building2,
  User,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="landing" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 scroll-mt-24 relative overflow-hidden" id="hero">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gold/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-deep-blue/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)] text-balance tracking-tight">
                Contracts, made <span className="text-emerald">clear</span>.
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-balance font-[family-name:var(--font-inter)]">
                Professional contract review by <span className="text-emerald font-semibold">real lawyers</span>, not algorithms.
              </p>
              
              {/* Key Differentiator */}
              <div className="bg-gradient-to-r from-emerald-50 to-gold-50 border border-emerald-200 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate">Human Expertise, Not AI</h3>
                </div>
                <p className="text-slate-600 text-center">
                  Every contract is personally reviewed by experienced lawyers who understand context, nuance, and real-world implications. 
                  <span className="font-semibold text-emerald"> No automated templates. No generic responses.</span>
                </p>
              </div>
            </div>

            {/* Service Selection Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* Business Card */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-slate-300 bg-gradient-to-br from-slate-50 to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">
                    Business Services
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg">
                    Enterprise contracts, vendor agreements, and complex deals reviewed by <span className="font-semibold text-slate-700">senior legal professionals</span> with decades of business law experience.
                  </p>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-center gap-2 bg-slate-100 rounded-full px-3 py-2">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-700 font-medium">Strategic legal counsel</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-slate-100 rounded-full px-3 py-2">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-700 font-medium">Volume discounts & retainers</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-slate-100 rounded-full px-3 py-2">
                      <CheckCircle className="h-4 w-4 text-slate-600" />
                      <span className="text-slate-700 font-medium">Enterprise-grade security</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-lg">
                    <a href="/business">
                      Choose Business
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Individual Card */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-emerald-300 bg-gradient-to-br from-emerald-50 to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">
                    Individual Services
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg">
                    Personal contracts, employment agreements, and life decisions reviewed by <span className="font-semibold text-emerald-700">friendly legal experts</span> who speak your language.
                  </p>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-center gap-2 bg-emerald-100 rounded-full px-3 py-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Plain English explanations</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-emerald-100 rounded-full px-3 py-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">24-hour turnaround</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-emerald-100 rounded-full px-3 py-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Simple, affordable pricing</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-emerald hover:bg-emerald/90 text-white font-semibold shadow-lg">
                    <a href="/individual">
                      Choose Individual
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-emerald" />
                <span className="text-slate-600 font-medium">NDA-First Workflow</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 text-emerald" />
                <span className="text-slate-600 font-medium">48h Turnaround</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 text-emerald" />
                <span className="text-slate-600 font-medium">Flat Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why LegalEyes Section */}
      <div className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
            Why <span className="text-emerald">LegalEyes</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            In a world of AI and automated legal tools, we believe in the irreplaceable value of <span className="font-semibold text-emerald">human judgment, experience, and empathy</span>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate mb-3">Human Expertise</h3>
              <p className="text-slate-600">Real lawyers with decades of experience review every contract personally. No algorithms. No templates. Just human judgment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate mb-3">Context & Nuance</h3>
              <p className="text-slate-600">We understand the real-world implications of contract terms, not just the legal text. Experience matters.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate mb-3">Personal Touch</h3>
              <p className="text-slate-600">Get explanations tailored to your situation, not generic responses. We speak your language.</p>
            </div>
          </div>

          {/* Anti-AI Message */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">
              Why Not AI?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              While AI can process text, it cannot understand context, predict real-world outcomes, or provide the nuanced judgment that comes from years of legal practice.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">❌ AI Limitations:</h4>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• Generic, template-based responses</li>
                  <li>• No understanding of business context</li>
                  <li>• Cannot predict real-world implications</li>
                  <li>• No personal relationship or trust</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">✅ Human Advantages:</h4>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• Personalized, contextual advice</li>
                  <li>• Understanding of your specific situation</li>
                  <li>• Real-world experience and judgment</li>
                  <li>• Trusted relationship and accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-emerald-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose the service that's right for you and get your contract reviewed by experienced lawyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              <a href="/business">
                Business Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-semibold">
              <a href="/individual">
                Individual Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
