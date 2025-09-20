"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import BackgroundSignature from "@/components/background-signature"
import {
  Shield,
  Users,
  CheckCircle,
  Upload,
  Eye,
  MessageSquare,
  Star,
  ArrowRight,
  Award,
  Clock,
  AlertTriangle,
  Zap,
} from "lucide-react"

export default function LegalEyesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          <a href="/" className="text-xl font-semibold text-emerald hover:text-emerald/80 transition-colors">LegalEyes</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/individual" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Individual</a>
            <a href="#about" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">About</a>
            <a href="#how" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">How it works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald px-4 py-2 text-white text-sm font-medium hover:bg-emerald/90 transition-colors">Get Started</a>
          </div>
          {/* subtle blinking dot */}
        </div>
      </header>
      {/* Hero Section */}
      <BackgroundSignature className="bg-background" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-emerald text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-semibold">Trusted by 500+ businesses</span>
                <Zap className="h-4 w-4" />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)] text-balance tracking-tight">
                Contracts, made <span className="text-emerald">clear</span>.
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-balance font-[family-name:var(--font-inter)]">
                Reviewed by <span className="text-emerald font-semibold">real lawyers</span>, not algorithms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-10 py-7 bg-gradient-emerald hover:scale-110 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform text-white font-semibold">
                <a href="#contact">
                  Start your review
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 bg-white border-2 border-emerald text-emerald hover:bg-emerald hover:text-white transition-all duration-300 font-semibold">
                <a href="#pricing">See Pricing</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-medium"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Flat Pricing
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-emerald text-emerald hover:bg-emerald hover:text-white transition-all duration-300 font-medium"
              >
                <Shield className="mr-2 h-4 w-4" />
                NDA-First Workflow
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white transition-all duration-300 font-medium"
              >
                <Clock className="mr-2 h-4 w-4" />
                48h Turnaround
              </Badge>
            </div>
          </div>
        </div>
      </BackgroundSignature>

      {/* Why LegalEyes Section */}
      <BackgroundSignature className="py-24 bg-background">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              Why <span className="text-emerald">LegalEyes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
              SaaS, vendor, employment and data‑protection contracts, reviewed by lawyers who do this every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-emerald/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald/30 bg-white">
                  <Users className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Human Expertise
                </h3>
                <p className="text-slate-600 text-lg">
                  Real lawyers with decades of experience review every contract personally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-gold/30 bg-white">
                  <MessageSquare className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Plain Language
                </h3>
                <p className="text-slate-600 text-lg">
                  Complex legal jargon translated into clear, actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-deep-blue/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-deep-blue/30 bg-white">
                  <Eye className="h-8 w-8 text-deep-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Direct Counsel
                </h3>
                <p className="text-slate-600 text-lg">
                  Available in Retainer Pro for complex contracts and strategic guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </BackgroundSignature>

      {/* How It Works Section */}
      <BackgroundSignature className="py-24 bg-background" id="how">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              How It <span className="text-emerald">Works</span>
            </h2>
            <p className="text-xl text-slate-600">
              Simple, secure, and <span className="text-emerald font-semibold">straightforward</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="bg-gradient-emerald rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Upload Contract
              </h3>
              <p className="text-slate-600 text-lg">
                Share your contract securely. We'll send an NDA and upload link after you contact us.
              </p>
              <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-emerald/50 to-transparent"></div>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-gold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Expert Review
              </h3>
              <p className="text-slate-600 text-lg">
                <span className="text-gold font-semibold">Experienced lawyers</span> review, redline, and identify key
                risks and opportunities.
              </p>
              <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-gold/50 to-transparent"></div>
            </div>

            <div className="text-center">
              <div className="bg-deep-blue rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl">
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
      </BackgroundSignature>

      {/* Stats Section */}
      <BackgroundSignature className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-emerald font-[family-name:var(--font-merriweather)]">5,000+</div>
              <div className="text-lg text-slate-600">Contracts reviewed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gold font-[family-name:var(--font-merriweather)]">17</div>
              <div className="text-lg text-slate-600">Avg. critical issues flagged per review</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-deep-blue font-[family-name:var(--font-merriweather)]">92%</div>
              <div className="text-lg text-slate-600">Clients approve on first pass</div>
            </div>
          </div>
        </div>
      </BackgroundSignature>

      {/* Testimonials Section (moved before pricing for trust) */}
      <BackgroundSignature className="py-24 bg-background" id="testimonials">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-6 font-[family-name:var(--font-merriweather)]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "All our contracts are vetted by LegalEyes. The comfort of dealing with a human for Legal work is priceless. It's like insurance, but smarter."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Startup Founder</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "This is like having your own in-house legal team on call, minus the cost."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Business Owner</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "As a tech startup, our priorities lie elsewhere. Outsourcing all legal to LegalEyes has saved us countless hours and exorbitant fees. Highly recommended for early-stage founders."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Tech Startup CEO</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </BackgroundSignature>

      {/* Pricing Section */}
      <BackgroundSignature className="py-24 bg-background" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              <span className="text-emerald">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-slate-600">
              No hidden charges, <span className="text-emerald font-semibold">no surprises</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-slate-200 hover:border-deep-blue/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-deep-blue/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Per Contract
                </h3>
                <p className="text-slate-600 mb-6 text-lg">One-time contract review</p>
                <div className="text-5xl font-bold text-emerald mb-6 flex items-baseline">
                  Flat Fee
                  <span className="text-sm font-normal text-slate-500 ml-2">per contract</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Complete contract review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Plain-English summary</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">48-hour turnaround</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald hover:bg-emerald/90 hover:scale-105 shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 text-lg py-6 font-semibold">
                  <a href="#contact">Start Review</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-emerald/30 hover:border-emerald/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-emerald-50/30 to-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-emerald text-white px-4 py-2 font-semibold">
                  Most Popular
                </Badge>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Retainer
                </h3>
                <p className="text-slate-600 mb-6 text-lg">Monthly contract reviews</p>
                <div className="text-5xl font-bold text-emerald mb-6 flex items-baseline">
                  Monthly
                  <span className="text-sm font-normal text-slate-500 ml-2">subscription</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Multiple contract reviews</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Faster turnaround</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-emerald hover:scale-105 shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 text-lg py-6 font-semibold">
                  <a href="#contact">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-yellow-50/30 to-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-gold text-white px-4 py-2 font-semibold">
                  Pro
                </Badge>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Retainer Pro
                </h3>
                <p className="text-slate-600 mb-6 text-lg">Everything in Retainer plus consultation</p>
                <div className="text-5xl font-bold text-gold mb-6 flex items-baseline">
                  Premium
                  <span className="text-sm font-normal text-slate-500 ml-2">pricing</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">Everything in Retainer</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">1-on-1 consultation calls</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">Dedicated attorney</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-gold hover:scale-105 shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 text-lg py-6 font-semibold">
                  <a href="#contact">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600">
              Transparent pricing available in <span className="text-gold font-semibold">INR and USD</span>
            </p>
          </div>
        </div>
      </BackgroundSignature>

      {/* Testimonials Section */}
      <BackgroundSignature className="py-24 bg-background" id="testimonials">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div aria-hidden className="pointer-events-none absolute -top-3 left-1/2 size-2 rounded-full bg-emerald/30"></div>
          <div aria-hidden className="pointer-events-none absolute -bottom-4 right-10 h-5 w-5 rotate-12 border border-emerald/20"></div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-6 font-[family-name:var(--font-merriweather)]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "All our contracts are vetted by LegalEyes. The comfort of dealing with a human for Legal work is priceless. It's like insurance, but smarter."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Startup Founder</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "This is like having your own in-house legal team on call, minus the cost."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Business Owner</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-background">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "As a tech startup, our priorities lie elsewhere. Outsourcing all legal to LegalEyes has saved us
                  countless hours and exorbitant fees. Highly recommended for early-stage founders."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Tech Startup CEO</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </BackgroundSignature>

      {/* FAQ Section */}
      <BackgroundSignature id="faq" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Straight answers to the most common questions.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you use AI for reviews?</AccordionTrigger>
              <AccordionContent>
                We may use AI for optional pre-scanning to highlight areas of interest, but every review is performed by experienced human lawyers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Will you walk me through what each clause means?</AccordionTrigger>
              <AccordionContent>
                Yes. We provide a plain-English explanation of important clauses, why they exist, and how they affect your rights and obligations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you suggest what to push back on or let go?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We highlight negotiable points, recommend what’s worth pushing on, and where it’s safe to accept as-is to keep deals moving.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you help with redlines and edits?</AccordionTrigger>
              <AccordionContent>
                Yes. We can return annotated comments, redlines, or a summary with suggested language you can paste directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is the typical turnaround time?</AccordionTrigger>
              <AccordionContent>
                Standard turnaround is 24–48 hours for most contracts, with urgent options available when needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How do you handle confidentiality?</AccordionTrigger>
              <AccordionContent>
                NDA-first workflow, secure storage, and least-privilege access. Your documents stay private.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </BackgroundSignature>

      {/* Closing CTA Section */}
      <BackgroundSignature className="py-24 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-balance text-slate">
            Contracts you understand.
          </h2>
          <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto text-balance">
            Contracts vetted by humans you can speak to.
          </p>
          <Button
            asChild
            size="lg"
            className="text-xl px-10 py-6 bg-emerald text-white hover:bg-emerald/90 shadow-xl hover:shadow-emerald/20 transition-colors font-semibold"
          >
            <a href="#contact">
              Start your review
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </div>
      </BackgroundSignature>

      {/* Prominent Contact Section */}
      <BackgroundSignature id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-merriweather)] text-emerald">Get in touch</h2>
            <p className="text-lg text-muted-foreground">Let's get started</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget as HTMLFormElement
              const formData = new FormData(form)
              const name = String(formData.get('name') || '')
              const email = String(formData.get('email') || '')
              const message = String(formData.get('message') || '')
              const subject = encodeURIComponent(`Inquiry from ${name}`)
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
              window.location.href = `mailto:hello@legaleyes.com?subject=${subject}&body=${body}`
            }}
            className="max-w-2xl mx-auto grid gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us briefly about your contract or question"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <div className="flex items-center gap-4 justify-center">
              <Button type="submit" className="bg-emerald text-white hover:bg-emerald/90">Get Started</Button>
              <a href="#pricing" className="px-6 py-3 rounded-md border border-emerald text-emerald hover:bg-emerald/10 transition-colors">View pricing</a>
            </div>
          </form>
        </div>
      </BackgroundSignature>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-emerald mb-1 font-[family-name:var(--font-merriweather)]">LegalEyes</h3>
              <p className="text-muted-foreground text-sm">Contracts, made clear.</p>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="/individual" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Individual</a>
              <a href="#about" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">About</a>
              <a href="#how" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">How it works</a>
              <a href="#pricing" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Pricing</a>
              <a href="#faq" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Contact</a>
            </nav>
            <div className="text-sm text-muted-foreground">© 2025 LegalEyes</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
