"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Shield,
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
  FileText,
  User,
  AlertTriangle,
} from "lucide-react"

export default function IndividualContractPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="individual" />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-white scroll-mt-24" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="mb-8">

              <h1 className="text-6xl md:text-8xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)] text-balance tracking-tight">
                Contracts, made <span className="text-emerald">clear</span>.
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-balance font-[family-name:var(--font-inter)]">
                Reviewed by <span className="text-emerald font-semibold">real lawyers</span>, not algorithms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-10 py-7 bg-gradient-emerald  shadow-2xl hover:shadow-emerald-500/25  transform text-white font-semibold">
                <a href="#contact">
                  Start your review
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 bg-white border-2 border-emerald text-emerald hover:bg-emerald hover:text-white  font-semibold">
                <a href="#pricing">See pricing</a>
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <Button asChild variant="ghost" className="text-emerald hover:text-emerald/80 hover:bg-emerald/10 ">
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
                className="px-6 py-3 bg-white border border-gold text-gold hover:bg-gold hover:text-white  font-medium"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Flat Pricing
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-emerald text-emerald hover:bg-emerald hover:text-white  font-medium"
              >
                <Shield className="mr-2 h-4 w-4" />
                NDA-First Workflow
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-white border border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white  font-medium"
              >
                <Clock className="mr-2 h-4 w-4" />
                48h Turnaround
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Report Section */}
      <div id="sample-report" className="py-16 bg-gradient-to-br from-gold-50/30 to-white relative overflow-hidden">
        
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
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate mb-2">Executive Summary</h3>
                  <p className="text-slate-600 text-sm">Plain-English overview of key risks and opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate mb-2">Clause-by-Clause Analysis</h3>
                  <p className="text-slate-600 text-sm">Detailed breakdown of each important section</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate mb-2">Red Flags & Recommendations</h3>
                  <p className="text-slate-600 text-sm">Specific issues to address and suggested changes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border-2 border-slate-200 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate">Sample Report</h4>
                  <p className="text-sm text-slate-500">Employment Contract Review</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Pages:</span>
                  <span className="font-medium">6-10 pages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Format:</span>
                  <span className="font-medium">Microsoft Word</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Turnaround:</span>
                  <span className="font-medium">24 hours</span>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-gold hover:bg-gold/90 text-white">
                <a href="#contact">Get your report</a>
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Why LegalEyes Section */}
      <div className="py-24 bg-gradient-to-br from-emerald-50/30 to-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              Why <span className="text-emerald">LegalEyes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
              Personal contracts, employment agreements, and service contracts reviewed by lawyers who understand your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-emerald/50  hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald/30 bg-white  ">
                  <User className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Personal Focus
                </h3>
                <p className="text-slate-600 text-lg">
                  We understand individual concerns and explain everything in plain English you can actually understand.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-gold/50  hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-gold/30 bg-white  ">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Your Privacy First
                </h3>
                <p className="text-slate-600 text-lg">
                  NDA-first workflow ensures your personal documents stay completely confidential and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-slate-200 hover:border-deep-blue/50  hover:shadow-2xl hover:-translate-y-3 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm border border-deep-blue/30 bg-white  ">
                  <Clock className="h-8 w-8 text-deep-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Fast Turnaround
                </h3>
                <p className="text-slate-600 text-lg">
                  Get your contract reviewed and explained within 24-48 hours, so you can make informed decisions quickly.
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

      {/* How It Works Section */}
      <div className="py-24 bg-gradient-to-br from-gold-50/30 to-white scroll-mt-24 relative overflow-hidden" id="how">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              How It <span className="text-emerald">Works</span>
            </h2>
            <p className="text-xl text-slate">
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

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald/5 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-y-48 translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2  ">
              <div className="text-4xl md:text-5xl font-bold text-emerald font-[family-name:var(--font-merriweather)]  ">2,500+</div>
              <div className="text-lg text-slate-300">Individual contracts reviewed</div>
            </div>
            <div className="space-y-2  ">
              <div className="text-4xl md:text-5xl font-bold text-gold font-[family-name:var(--font-merriweather)]  ">24h</div>
              <div className="text-lg text-slate-300">Average turnaround time</div>
            </div>
            <div className="space-y-2  ">
              <div className="text-4xl md:text-5xl font-bold text-deep-blue font-[family-name:var(--font-merriweather)]  ">99%</div>
              <div className="text-lg text-slate-300">Clients feel more confident signing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-gold-50/30 to-white relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-6 font-[family-name:var(--font-merriweather)]">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              Real people, real results. See how LegalEyes has helped individuals protect themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-slate-200 hover:border-emerald/50  hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current  " viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate mb-6 text-lg leading-relaxed">
                  "I was about to sign a freelance contract that would have locked me into terrible terms. LegalEyes caught the red flags and saved me from a huge mistake. Worth every rupee!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mr-4  ">
                    <User className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate">Priya S.</div>
                    <div className="text-sm text-slate-600">Freelance Designer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-slate-200 hover:border-emerald/50  hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current  " viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate mb-6 text-lg leading-relaxed">
                  "The employment contract review was incredibly detailed. They explained every clause in simple terms and helped me negotiate better terms. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mr-4  ">
                    <User className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate">Rajesh K.</div>
                    <div className="text-sm text-slate-600">Software Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-slate-200 hover:border-emerald/50  hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white  ">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current  " viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate mb-6 text-lg leading-relaxed">
                  "I was nervous about my rental agreement, but LegalEyes made it so clear and easy to understand. The consultation call was the cherry on top - felt like having a lawyer friend!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mr-4  ">
                    <User className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate">Anita M.</div>
                    <div className="text-sm text-slate-600">Marketing Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-br from-white to-slate-50 scroll-mt-24 relative overflow-hidden" id="pricing">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold text-slate mb-6 font-[family-name:var(--font-merriweather)]">
              <span className="text-emerald">Simple</span> Pricing
            </h2>
            <p className="text-xl text-slate">
              One price per contract. <span className="text-emerald font-semibold">No subscriptions</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-slate-200 hover:border-emerald/50  hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white relative overflow-hidden h-full flex flex-col">
              <CardContent className="pt-6 relative flex flex-col h-full">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Basic Review
                </h3>
                <p className="text-slate-600 mb-6 text-lg min-h-[3rem] flex items-center">Standard contract review</p>
                <div className="text-5xl font-bold text-emerald mb-6 flex items-baseline">
                  ₹499
                  <span className="text-sm font-normal text-slate-500 ml-2">per contract</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
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
                <Button asChild className="w-full bg-emerald hover:bg-emerald/90 hover:scale-105 shadow-xl hover:shadow-emerald-500/25  text-lg py-6 font-semibold mt-auto">
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-emerald/30 hover:border-emerald/60  hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-emerald-50/30 to-white hover:bg-gradient-to-br hover:from-emerald-50/50 hover:to-white relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-4 right-4">
                <Badge className="bg-emerald text-white px-4 py-2 font-semibold">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="pt-6 relative flex flex-col h-full">
                <h3 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-merriweather)] text-slate">
                  Premium Review
                </h3>
                <p className="text-slate-600 mb-6 text-lg min-h-[3rem] flex items-center">Everything in Basic plus consultation</p>
                <div className="text-5xl font-bold text-gold mb-6 flex items-baseline">
                  ₹4999
                  <span className="text-sm font-normal text-slate-500 ml-2">per contract</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
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
                <Button asChild className="w-full bg-gold hover:bg-gold/90 hover:scale-105 shadow-xl hover:shadow-gold-500/25  text-lg py-6 font-semibold mt-auto">
                  <a href="#contact">Get Started</a>
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
      <div id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know before getting your contract reviewed.</p>
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
           
          </Accordion>
        </div>
      </div>

      {/* Closing CTA Section */}
      <div className="py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-balance text-slate">
            Contracts you understand.
          </h2>
          <p className="text-xl mb-8 text-slate max-w-2xl mx-auto text-balance">
            Contracts vetted by humans you can speak to.
          </p>
          <Button
            asChild
            size="lg"
            className="text-xl px-10 py-6 bg-emerald text-white hover:bg-emerald/90 shadow-xl hover:shadow-emerald-500/20 transition-colors font-semibold"
          >
              <a href="#contact">
                Start your review
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
          </Button>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-slate">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Send us your contract details and we'll get back to you quickly with a detailed review.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const formData = new FormData(form)
                const name = String(formData.get('name') || '')
                const email = String(formData.get('email') || '')
                const message = String(formData.get('message') || '')
                const subject = encodeURIComponent(`Individual Contract Review Request from ${name}`)
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nContract Details:\n${message}`)
                window.location.href = `mailto:hello@legaleyes.com?subject=${subject}&body=${body}`
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald focus:ring-2 focus:ring-emerald/20 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald focus:ring-2 focus:ring-emerald/20 focus:outline-none transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Tell us about your contract
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald focus:ring-2 focus:ring-emerald/20 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your contract type (employment, rental, service, etc.), any specific concerns you have, and your preferred timeline for the review."
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-emerald hover:bg-emerald/90 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl "
                >
                  Send my contract for review
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1 border-2 border-emerald text-emerald hover:bg-emerald hover:text-white py-4 text-lg font-semibold rounded-lg "
                >
                  <a href="#pricing">View pricing</a>
                </Button>
              </div>
              
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
