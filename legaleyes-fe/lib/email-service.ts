// Email service configuration
export const EMAIL_CONFIG = {
  API_ENDPOINT: "/api/contact",
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  serviceType: 'business' | 'individual'
}

export interface EmailResponse { success: boolean; message: string }

export async function sendEmailViaBrevoApi(data: ContactFormData): Promise<EmailResponse> {
  try {
    const res = await fetch(EMAIL_CONFIG.API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err?.error || 'Request failed')
    }
    return { success: true, message: "Thank you! We'll get back to you within 24 hours." }
  } catch (error) {
    return { success: false, message: 'Failed to send via server.' }
  }
}

// Form validation
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name.trim()) {
    errors.push('Name is required')
  }

  if (!data.email.trim()) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!data.message.trim()) {
    errors.push('Message is required')
  } else if (data.message.trim().length < 10) {
    errors.push('Please provide more details about your contract (at least 10 characters)')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
