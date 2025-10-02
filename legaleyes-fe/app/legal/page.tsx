"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Shield, FileText, Mail } from "lucide-react"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terms")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate mb-3 font-[family-name:var(--font-merriweather)]">Legal</h1>
          <p className="text-slate-600 max-w-2xl">Policies and terms governing the use of LegalEyes, your data, and our services.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="terms" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Terms of Service
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms" className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">Terms of Service</h2>
              <p className="text-sm text-slate-500 mb-6">Last updated: January 2025</p>
              
              <div className="space-y-6 text-slate-600">
                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">1. Acceptance of Terms</h3>
                  <p className="mb-4">By accessing and using LegalEyes services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  <p className="mb-4">These terms apply to all visitors, users, and others who access or use the service.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">2. Service Description</h3>
                  <p className="mb-4">LegalEyes provides contract review services by qualified legal professionals. Our service includes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Professional contract review and analysis</li>
                    <li>Identification of potential risks and issues</li>
                    <li>Clear explanations of contract terms</li>
                    <li>Recommendations for improvements</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">3. User Responsibilities</h3>
                  <p className="mb-4">You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Submit only documents you have the right to share</li>
                    <li>Use our services in compliance with applicable laws</li>
                    <li>Respect the confidentiality of our review process</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">4. Limitation of Liability</h3>
                  <p className="mb-4">LegalEyes provides informational services only. Our reviews are not legal advice and do not create an attorney-client relationship.</p>
                  <p className="mb-4">We recommend consulting with qualified legal counsel for specific legal advice related to your situation.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">5. Confidentiality</h3>
                  <p className="mb-4">We maintain strict confidentiality regarding all documents and information you share with us. We sign NDAs before reviewing any sensitive materials.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">6. Payment and Refunds</h3>
                  <p className="mb-4">Payment is required before service delivery. Refund policies are outlined in our service agreement.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">7. Changes to Terms</h3>
                  <p className="mb-4">We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">Privacy Policy</h2>
              <p className="text-sm text-slate-500 mb-6">Last updated: January 2025</p>
              
              <div className="space-y-6 text-slate-600">
                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">1. Information We Collect</h3>
                  <p className="mb-4">We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email, company)</li>
                    <li>Contract documents and related materials</li>
                    <li>Communication records and preferences</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">2. How We Use Information</h3>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide contract review services</li>
                    <li>Communicate about your projects</li>
                    <li>Process payments and maintain records</li>
                    <li>Improve our services and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">3. Information Sharing</h3>
                  <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">4. Data Security</h3>
                  <p className="mb-4">We implement appropriate security measures to protect your information, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure document storage and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Staff training on data protection practices</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">5. Your Rights</h3>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your information</li>
                    <li>Object to certain processing activities</li>
                    <li>Data portability where applicable</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">6. Data Retention</h3>
                  <p className="mb-4">We retain your information only as long as necessary to provide our services and comply with legal obligations. Document retention periods are specified in our service agreements.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">7. Contact Us</h3>
                  <p className="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us using the information in the Contact tab.</p>
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate mb-4 font-[family-name:var(--font-merriweather)]">Contact Information</h2>
              
              <div className="space-y-6 text-slate-600">
                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">Get in Touch</h3>
                  <p className="mb-4">Have questions about our services, policies, or need assistance? We're here to help.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate mb-2">Email</h4>
                      <p className="text-emerald hover:underline">
                        <a href="mailto:hello@legaleyes.com">hello@legaleyes.com</a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate mb-2">Business Hours</h4>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">Service Inquiries</h3>
                  <p className="mb-4">For contract review services, pricing, or project discussions:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email us with your contract details</li>
                    <li>We'll respond within 24 hours</li>
                    <li>NDA will be provided before any sensitive document review</li>
                    <li>Clear pricing and timeline will be communicated upfront</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">Privacy & Legal Questions</h3>
                  <p className="mb-4">For questions about our privacy practices, terms of service, or data handling:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email: privacy@legaleyes.com</li>
                    <li>Response time: 48 hours</li>
                    <li>All inquiries are treated confidentially</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate mb-3">Location</h3>
                  <p className="mb-4">LegalEyes operates as a digital-first service with team members across India. Our primary operations are based in:</p>
                  <p>Mumbai, Maharashtra, India</p>
                </section>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}