"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact-form"
import {
  Shield,
  Users,
  CheckCircle,
  Eye,
  MessageSquare,
  Star,
  ArrowRight,
  Award,
  Clock,
  AlertTriangle,
  FileText,
} from "lucide-react"

export default function LegalEyesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="business" />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 scroll-mt-24 relative overflow-hidden" id="about">
        {/* Business-themed background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gold/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-deep-blue/10 rounded-full blur-xl"></div>
          {/* Professional grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center">
            <div className="mb-8">

              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-[family-name:var(--font-merriweather)] text-balance tracking-tight">
                Contracts, made <span className="text-emerald-400">clear</span>.
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-balance font-[family-name:var(--font-inter)]">
                Enterprise-grade contract review by <span className="text-emerald-400 font-semibold">senior legal professionals</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-10 py-7 bg-gradient-emerald hover:bg-emerald/90 text-white font-semibold">
                <a href="#contact">
                  Start your review
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 bg-white border-2 border-emerald text-emerald hover:bg-emerald hover:text-white font-semibold">
                <a href="#pricing">See pricing</a>
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <Button asChild variant="ghost" className="text-emerald hover:text-emerald/80 hover:bg-emerald/10">
                <a href="#sample-report">
                  View sample report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-slate-500 mt-2">
                See exactly what you'll receive: detailed analysis + plain-English summary
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-gold text-gold hover:bg-gold hover:text-white font-medium"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Flat Pricing
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-emerald text-emerald hover:bg-emerald hover:text-white font-medium"
              >
                <Shield className="mr-2 h-4 w-4" />
                NDA-First Workflow
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-medium"
              >
                <Clock className="mr-2 h-4 w-4" />
                48h Turnaround
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Report Section */}
      <div id="sample-report" className="py-16 bg-gradient-to-br from-emerald-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">
              Here's exactly what you'll receive
            </h2>
            <p className="text-lg text-slate-600">
              A comprehensive Word document with detailed analysis and actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate mb-2">Executive Summary</h3>
                  <p className="text-slate-600 text-sm">Plain-English overview of key risks and opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate mb-2">Clause-by-Clause Analysis</h3>
                  <p className="text-slate-600 text-sm">Detailed breakdown of each important section</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate mb-2">Red Flags & Recommendations</h3>
                  <p className="text-slate-600 text-sm">Specific issues to address and suggested changes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border-2 border-slate-200 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald/10 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate">Sample Report</h4>
                  <p className="text-sm text-slate-500">Employment Contract Review</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Pages:</span>
                  <span className="font-medium">8-12 pages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Format:</span>
                  <span className="font-medium">Microsoft Word</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Turnaround:</span>
                  <span className="font-medium">24-48 hours</span>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-emerald hover:bg-emerald/90">
                <a href="#contact">Get your report</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why LegalEyes Section */}
      <div className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full translate-y-40 -translate-x-40"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              Why <span className="text-emerald">LegalEyes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
              SaaS, vendor, employment and data‑protection contracts, reviewed by lawyers who do this every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-emerald/50  hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald/30 bg-white  ">
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

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-gold/50  hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-gold/30 bg-white  ">
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

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-deep-blue/50  hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-deep-blue/30 bg-white  ">
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
      </div>

      {/* Smart Investment Section */}
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

      {/* How It Works Section */}
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

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 translate-x-48"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2  ">
              <div className="text-4xl md:text-5xl font-bold text-emerald font-[family-name:var(--font-merriweather)]  ">5,000+</div>
              <div className="text-lg text-slate-300">Contracts reviewed</div>
            </div>
            <div className="space-y-2  ">
              <div className="text-4xl md:text-5xl font-bold text-gold font-[family-name:var(--font-merriweather)]  ">17</div>
              <div className="text-lg text-slate-300">Avg. critical issues flagged per review</div>
            </div>
            <div className="space-y-2  ">
              <div className="text-4xl md:text-5xl font-bold text-deep-blue font-[family-name:var(--font-merriweather)]  ">92%</div>
              <div className="text-lg text-slate-300">Clients approve on first pass</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section (moved before pricing for trust) */}
      <div className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" id="testimonials">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 translate-x-48"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-6 font-[family-name:var(--font-merriweather)]">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              Real people, real results. See how LegalEyes has helped businesses protect themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl  hover:-translate-y-2 bg-gradient-to-br from-card to-background  ">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current  " />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "All our contracts are vetted by LegalEyes. The comfort of dealing with a human for Legal work is priceless. It's like insurance, but smarter."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3  ">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Startup Founder</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl  hover:-translate-y-2 bg-gradient-to-br from-card to-background  ">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current  " />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "This is like having your own in-house legal team on call, minus the cost."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3  ">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Business Owner</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl  hover:-translate-y-2 bg-gradient-to-br from-card to-background  ">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current  " />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-balance italic">
                  "As a tech startup, our priorities lie elsewhere. Outsourcing all legal to LegalEyes has saved us countless hours and exorbitant fees. Highly recommended for early-stage founders."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center mr-3  ">
                    <Award className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="text-sm text-muted-foreground">Tech Startup CEO</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-br from-white to-slate-50 scroll-mt-24 relative overflow-hidden" id="pricing">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 translate-x-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 -translate-x-48"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              <span className="text-emerald">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-slate-600">
              No hidden charges, <span className="text-emerald font-semibold">no surprises</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-slate-200 hover:border-deep-blue/50  hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white relative overflow-hidden h-full flex flex-col  ">
              <div className="absolute top-0 right-0 w-32 h-32 bg-deep-blue/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative flex flex-col h-full">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Per Contract
                </h3>
                <p className="text-slate-600 mb-6 text-lg min-h-[3rem] flex items-center">One-time contract review</p>
                <div className="text-5xl font-bold text-emerald mb-6 flex items-baseline">
                  Flat Fee
                  <span className="text-sm font-normal text-slate-500 ml-2">per contract</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
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
                <Button asChild className="w-full bg-emerald hover:bg-emerald/90  shadow-xl hover:shadow-emerald-500/25  text-lg py-6 font-semibold mt-auto">
                  <a href="#contact">Start Review</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-emerald/30 hover:border-emerald/60  hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-emerald-50/30 to-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white relative overflow-hidden h-full flex flex-col  ">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-emerald text-white px-4 py-2 font-semibold">
                  Most Popular
                </Badge>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative flex flex-col h-full">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Retainer
                </h3>
                <p className="text-slate-600 mb-6 text-lg min-h-[3rem] flex items-center">Monthly contract reviews</p>
                <div className="text-5xl font-bold text-emerald mb-6 flex items-baseline">
                  Monthly
                  <span className="text-sm font-normal text-slate-500 ml-2">subscription</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
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
                <Button asChild className="w-full bg-gradient-emerald  shadow-xl hover:shadow-emerald-500/25  text-lg py-6 font-semibold mt-auto">
                  <a href="#contact">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gold/30 hover:border-gold/60  hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-yellow-50/30 to-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white relative overflow-hidden h-full flex flex-col  ">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-gold text-white px-4 py-2 font-semibold">
                  Pro
                </Badge>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="pt-6 relative flex flex-col h-full">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Retainer Pro
                </h3>
                <p className="text-slate-600 mb-6 text-lg min-h-[3rem] flex items-center">Everything in Retainer plus consultation</p>
                <div className="text-5xl font-bold text-gold mb-6 flex items-baseline">
                  Premium
                  <span className="text-sm font-normal text-slate-500 ml-2">pricing</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
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
                <Button asChild className="w-full bg-gradient-gold  shadow-xl hover:shadow-yellow-500/25  text-lg py-6 font-semibold mt-auto">
                  <a href="#contact">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate">
              <span className="text-emerald font-semibold">Pay once, review once</span> - no subscriptions, no hidden fees
            </p>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div id="faq" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald/5 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full translate-y-40 translate-x-40"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 ">
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
      </div>

      {/* Closing CTA Section */}
      <div className="py-24 bg-gradient-to-br from-emerald-50/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full translate-y-40 -translate-x-40"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald via-gold to-deep-blue"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-balance text-slate">
              Contracts you understand.
            </h2>
            <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto text-balance">
              Contracts vetted by humans you can speak to.
            </p>
            <Button
              asChild
              size="lg"
              className="text-xl px-10 py-6 bg-emerald text-white hover:bg-emerald/90 shadow-xl hover:shadow-emerald/20   font-semibold"
            >
              <a href="#contact">
                Start your review
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactForm 
        serviceType="business"
        title="Ready to get started?"
        description="Send us your contract details and we'll get back to you quickly with a detailed review."
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
