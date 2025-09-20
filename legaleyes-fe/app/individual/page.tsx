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
  AlertTriangle,
  Clock,
  ArrowRight,
  FileText,
  Eye,
  MessageSquare,
  Star,
  Award,
  Zap,
  X,
  Home,
  Briefcase,
  FileCheck,
  User,
} from "lucide-react"

export default function IndividualContractPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          <a href="/" className="text-xl font-semibold text-emerald hover:text-emerald/80 transition-colors">LegalEyes</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Business</a>
            <a href="#about" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">About</a>
            <a href="#how" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">How it works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald px-4 py-2 text-white text-sm font-medium hover:bg-emerald/90 transition-colors">Get Review</a>
          </div>
          {/* subtle blinking dot */}
          <div aria-hidden className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-4 size-1.5 rounded-full bg-emerald/60 animate-ping" />
        </div>
      </header>

      {/* Hero Section */}
      <BackgroundSignature className="bg-background" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-emerald text-white px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in shadow-lg animate-pulse-glow">
                <User className="h-4 w-4" />
                <span className="font-semibold">Individual contract reviews</span>
                <Zap className="h-4 w-4" />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)] text-balance animate-fade-in-up tracking-tight">
                Contracts, <span className="text-emerald">protected</span>.
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-balance font-[family-name:var(--font-inter)] animate-fade-in-up delay-200">
                Don't sign anything <span className="text-emerald font-semibold">without knowing</span> what it means.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="text-lg px-10 py-7 bg-gradient-emerald hover:scale-110 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform text-white font-semibold animate-shimmer">
                <a href="#contact">
                  Get your contract reviewed
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 bg-white border-2 border-emerald text-emerald hover:bg-emerald hover:text-white transition-all duration-300 font-semibold">
                <a href="#pricing">See pricing</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up delay-500">
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-medium"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                From ₹199
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-emerald text-emerald hover:bg-emerald hover:text-white transition-all duration-300 font-medium"
              >
                <Shield className="mr-2 h-4 w-4" />
                Independent review
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white transition-all duration-300 font-medium"
              >
                <Clock className="mr-2 h-4 w-4" />
                24h turnaround
              </Badge>
            </div>
          </div>
        </div>
      </BackgroundSignature>

      {/* Contract Types Section */}
      <BackgroundSignature className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              What contracts do you need <span className="text-emerald">reviewed</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
              From job offers to rental agreements - <span className="text-emerald font-semibold">we've got you covered</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-emerald/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/30 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald/30 bg-white">
                  <Briefcase className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Employment Contracts
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Job offers, employment agreements, non-compete clauses
                </p>
                <div className="text-2xl font-bold text-emerald">₹199</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-yellow-50/30 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-gold/30 bg-white">
                  <Home className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Rental Agreements
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Lease agreements, rental contracts, property documents
                </p>
                <div className="text-2xl font-bold text-gold">₹199</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-deep-blue/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-deep-blue/30 bg-white">
                  <FileCheck className="h-8 w-8 text-deep-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Service Contracts
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Freelance agreements, consulting contracts, service terms
                </p>
                <div className="text-2xl font-bold text-deep-blue">₹199</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-emerald/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/30 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald/30 bg-white">
                  <FileText className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Loan Agreements
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Personal loans, credit agreements, financial contracts
                </p>
                <div className="text-2xl font-bold text-emerald">₹199</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-yellow-50/30 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-gold/30 bg-white">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Partnership Deals
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Business partnerships, joint ventures, collaboration agreements
                </p>
                <div className="text-2xl font-bold text-gold">₹199</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-deep-blue/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-white">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-deep-blue/30 bg-white">
                  <Shield className="h-8 w-8 text-deep-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Other Contracts
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Insurance policies, purchase agreements, any legal document
                </p>
                <div className="text-2xl font-bold text-deep-blue">₹199</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </BackgroundSignature>

      {/* Problem Section */}
      <BackgroundSignature className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              Why you need <span className="text-red-500">contract review</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
              Most people sign contracts <span className="text-red-500 font-semibold">without understanding</span> what they're agreeing to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate mb-2">Hidden penalties and fees</h3>
                  <p className="text-slate-600">Late fees, cancellation charges, hidden costs you didn't see</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate mb-2">Unfair terms and conditions</h3>
                  <p className="text-slate-600">One-sided clauses that favor the other party</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate mb-2">Legal jargon you can't understand</h3>
                  <p className="text-slate-600">Complex language designed to confuse you</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate mb-2">No way out clauses</h3>
                  <p className="text-slate-600">Restrictions that make it hard to exit the agreement</p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <div className="text-center">
                <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-600 mb-4">The Reality</h3>
                <p className="text-lg text-slate-700 mb-6">
                  <strong>95% of people</strong> sign contracts without reading them properly. 
                  <strong>Don't be trapped</strong> by terms you didn't understand.
                </p>
                <div className="text-3xl font-bold text-red-600">₹199 could save you ₹50,000+</div>
                <p className="text-sm text-slate-600 mt-2">in future legal fees and penalties</p>
              </div>
            </div>
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
              <div className="bg-gradient-emerald rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse-glow">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Share Your Contract
              </h3>
              <p className="text-slate-600 text-lg">
                Upload your contract. We'll send an NDA and secure link after you contact us.
              </p>
              <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-emerald/50 to-transparent"></div>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-gold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse-glow delay-200">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Expert Review
              </h3>
              <p className="text-slate-600 text-lg">
                <span className="text-gold font-semibold">Senior lawyers</span> review every clause and flag potential issues.
              </p>
              <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-gold/50 to-transparent"></div>
            </div>

            <div className="text-center">
              <div className="bg-deep-blue rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse-glow delay-500">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                Get Clarity
              </h3>
              <p className="text-slate-600 text-lg">
                Receive a <span className="text-deep-blue font-semibold">plain-English summary</span> of what you're signing.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">Independent review. No third-party involvement. Your privacy protected.</p>
        </div>
      </BackgroundSignature>

      {/* Pricing Section */}
      <BackgroundSignature className="py-24 bg-background" id="pricing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              <span className="text-emerald">Simple</span> Pricing
            </h2>
            <p className="text-xl text-slate-600">
              One price per contract. <span className="text-emerald font-semibold">No subscriptions</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-slate-200 hover:border-emerald/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Basic Review
                </h3>
                <p className="text-slate-600 mb-6 text-lg">Standard contract review</p>
                <div className="text-5xl font-bold text-emerald mb-6 flex items-baseline">
                  ₹199
                  <span className="text-sm font-normal text-slate-500 ml-2">per contract</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Complete contract analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Plain-English summary</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">Red flags highlighted</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0" />
                    <span className="text-lg">24-hour turnaround</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald hover:bg-emerald/90 hover:scale-105 shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 text-lg py-6 font-semibold">
                  <a href="#contact">Get Review</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-yellow-50/30 to-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-gold text-white px-4 py-2 font-semibold">
                  Most Popular
                </Badge>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Premium Review
                </h3>
                <p className="text-slate-600 mb-6 text-lg">Everything in Basic plus consultation</p>
                <div className="text-5xl font-bold text-gold mb-6 flex items-baseline">
                  ₹4999
                  <span className="text-sm font-normal text-slate-500 ml-2">per contract</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">15-min consultation call</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">Negotiation tips</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">Priority support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-gold hover:scale-105 shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 text-lg py-6 font-semibold">
                  <a href="#contact">Get Premium Review</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600">
              <span className="text-gold font-semibold">Pay once, review once</span> - no subscriptions, no hidden fees
            </p>
          </div>
        </div>
      </BackgroundSignature>

      {/* FAQ Section */}
      <BackgroundSignature id="faq" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know before getting your contract reviewed.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of contracts do you review?</AccordionTrigger>
              <AccordionContent>
                We review all types of individual contracts: employment agreements, rental leases, loan documents, service contracts, partnership deals, and more. If you're not sure, just ask us.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does the review take?</AccordionTrigger>
              <AccordionContent>
                Most individual contracts are reviewed within 24 hours. Complex contracts with multiple pages may take up to 48 hours. We'll let you know the expected timeline when you submit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will the other party know I got this reviewed?</AccordionTrigger>
              <AccordionContent>
                No. This is completely confidential between you and us. We don't contact the other party, and your review is private. We sign an NDA to protect your information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I find problems in my contract?</AccordionTrigger>
              <AccordionContent>
                We'll explain what each problematic clause means and suggest questions you can ask or changes you can request. You can negotiate before signing, or decide not to sign at all.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can you help me negotiate changes?</AccordionTrigger>
              <AccordionContent>
                We provide you with questions to ask and points to negotiate, but we don't negotiate directly with the other party. You maintain control of the process and decide what to do.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What if I'm not satisfied with the review?</AccordionTrigger>
              <AccordionContent>
                We offer a 100% satisfaction guarantee. If you're not happy with the quality of the review, we'll refund your payment. Your satisfaction is our priority.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </BackgroundSignature>

      {/* Closing CTA Section */}
      <BackgroundSignature className="py-24 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-balance text-slate">
            Don't sign blind.
          </h2>
          <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto text-balance">
            Get your contract reviewed by experts. Know what you're signing before it's too late.
          </p>
          <Button
            asChild
            size="lg"
            className="text-xl px-10 py-6 bg-emerald text-white hover:bg-emerald/90 shadow-xl hover:shadow-emerald/20 transition-colors font-semibold"
          >
            <a href="#contact">
              Get your contract reviewed
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </div>
      </BackgroundSignature>

      {/* Contact Section */}
      <BackgroundSignature id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-merriweather)] text-emerald">Get your review</h2>
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
              const subject = encodeURIComponent(`Individual Contract Review Request from ${name}`)
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
              placeholder="Tell us about your contract (type, any specific concerns, timeline)"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <div className="flex items-center gap-4 justify-center">
              <Button type="submit" className="bg-emerald text-white hover:bg-emerald/90">Send request</Button>
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
              <a href="/" className="text-muted-foreground hover:text-emerald hover:underline underline-offset-4 decoration-emerald/70 transition-colors">Business</a>
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
