import { NextRequest, NextResponse } from 'next/server'

type ServiceType = "business" | "individual"

interface ContactBody {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  serviceType: ServiceType
}

export async function POST(request: NextRequest) {
  console.log('Contact API: Request received')
  
  try {
    const body = (await request.json()) as Partial<ContactBody>
    console.log('Contact API: Parsed request data:', { 
      name: body.name, 
      email: body.email, 
      serviceType: body.serviceType,
      messageLength: body.message?.length 
    })

    // Validation
    if (!body.name || !body.email || !body.message || !body.serviceType) {
      console.log('Contact API: Validation failed - missing fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Require ALL env vars (no defaults). If any are missing -> 503 with details
    const EMAIL_API_KEY = process.env.BREVO_API_KEY
    const notificationEmail = process.env.BREVO_TO_EMAIL
    const senderEmail = process.env.BREVO_SENDER_EMAIL
    const senderName = process.env.BREVO_SENDER_NAME
    const subjectLine = process.env.EMAIL_SUBJECT_LINE

    const missing: string[] = []
    if (!EMAIL_API_KEY) missing.push('BREVO_API_KEY')
    if (!notificationEmail) missing.push('BREVO_TO_EMAIL')
    if (!senderEmail) missing.push('BREVO_SENDER_EMAIL')
    if (!senderName) missing.push('BREVO_SENDER_NAME')
    if (!subjectLine) missing.push('EMAIL_SUBJECT_LINE')
    // Only the five original keys are required; others are optional
    console.log('Contact API: env check missing=', missing)
    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'Server not configured', missing },
        { status: 503 }
      )
    }
    const emailApiKey = EMAIL_API_KEY as string

    const servicePrefix = body.serviceType === "business" ? "[B]" : "[I]"
    const subject = `${servicePrefix} ${subjectLine} ${body.name}`
    
    const textContent = `New Contract Review Request

Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ''}
${body.company ? `Company: ${body.company}` : ''}
Service Type: ${body.serviceType === "business" ? "Business" : "Individual"}
Message:
${body.message}

Sent from: LegalEyes contact form
Time: ${new Date().toLocaleString()}
Message ID: ${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #000; margin: 0 0 20px 0; font-size: 24px; border-bottom: 3px solid #000; padding-bottom: 10px;">
            New Contract Review Request
          </h1>
          
          <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #000; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${body.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${body.email}" style="color: #007bff; text-decoration: none;">${body.email}</a></p>
            ${body.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${body.phone}</p>` : ''}
            ${body.company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${body.company}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Service Type:</strong> ${body.serviceType === "business" ? "Business" : "Individual"}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border: 1px solid #dee2e6; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">
              ${body.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 14px; color: #666;">
            <p style="margin: 5px 0;"><strong>Sent from:</strong> LegalEyes contact form</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0;"><strong>Message ID:</strong> ${Date.now()}-${Math.random().toString(36).substr(2, 9)}</p>
          </div>
        </div>
      </body>
      </html>
    `

    console.log('Contact API: Sending email to Brevo API')
    console.log('Contact API: Sender email:', senderEmail)
    console.log('Contact API: Notification email:', notificationEmail)
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': emailApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: senderName!,
          email: senderEmail!,
        },
        to: [{ email: notificationEmail!, name: 'Admin' }],
        replyTo: {
          email: body.email,
          name: body.name,
        },
        subject,
        textContent,
        htmlContent,
        // Add headers for better deliverability
        headers: {
          'X-Mailin-Custom': process.env.EMAIL_CUSTOM_HEADER || 'contract-review-request',
          'X-Priority': process.env.EMAIL_PRIORITY || '1',
          'X-MSMail-Priority': process.env.EMAIL_MS_PRIORITY || 'High',
          'Importance': process.env.EMAIL_IMPORTANCE || 'high'
        }
      }),
    })
    
    console.log('Contact API: Brevo response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Contact API: Email service failed:', errorText)
      console.error('Contact API: Response headers:', Object.fromEntries(response.headers.entries()))
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    const emailResult = await response.json()
    console.log('Contact API: Email sent successfully, result:', emailResult)
    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully!'
    })

  } catch (error) {
    console.error('Contact API: Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}