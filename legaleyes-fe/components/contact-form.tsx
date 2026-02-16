"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MessageCircle } from "lucide-react"
import { ContactFormData, sendEmailViaBrevoApi, validateContactForm } from "@/lib/email-service"

interface ContactFormProps {
  serviceType: 'business' | 'individual'
  title?: string
  description?: string
}

export function ContactForm({
  serviceType,
  title = "Ready to get started?",
  description = "Send us your contract details and we'll get back to you quickly with a detailed review."
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType
  })
  const [showEmailForm, setShowEmailForm] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: React.ReactNode
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setSubmitStatus({
        type: 'error',
        message: validation.errors.join(', ')
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Try server-side Brevo route first
      const apiResult = await sendEmailViaBrevoApi(formData)

      if (apiResult.success) {
        setSubmitStatus({
          type: 'success',
          message: apiResult.message
        })

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          serviceType
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: (
            <span>
              Unable to send automatically. Please <a href="mailto:contact@legaleyes.co" className="underline font-semibold">email us directly</a> at contact@legaleyes.co
            </span>
          )
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: (
          <span>
            Unable to send automatically. Please <a href="mailto:contact@legaleyes.co" className="underline font-semibold">email us directly</a> at contact@legaleyes.co
          </span>
        )
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-merriweather)] text-slate">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            {description}
          </p>

          {/* Primary Choice Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://wa.me/917039123025" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant={showEmailForm ? "secondary" : "outline"}
              className={`font-semibold px-8 py-6 text-lg w-full sm:w-auto transition-all ${showEmailForm
                  ? "bg-slate-100 text-slate-800"
                  : "bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              onClick={() => setShowEmailForm(true)}
            >
              <Mail className="h-6 w-6 mr-2" />
              Send an Email
            </Button>
          </div>
        </div>

        {showEmailForm && (
          <Card className="shadow-xl border border-slate-200 animate-fade-in-up">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {serviceType === 'business' && (
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Contract Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Please describe your contract, key terms you're concerned about, timeline, and any specific questions you have..."
                  />
                  <p className="text-sm text-slate-500 mt-2">
                    The more details you provide, the better we can help you.
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus.type === 'success'
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <div className="text-sm">{submitStatus.message}</div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4" />
                    <span>We'll respond within 24 hours</span>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-emerald hover:bg-emerald/90 text-white font-semibold px-8 py-3 w-full sm:w-auto min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Email
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
