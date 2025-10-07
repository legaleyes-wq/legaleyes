import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ServiceType = "business" | "individual"

interface ContactBody {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  serviceType: ServiceType
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY
    const toEmail = process.env.BREVO_TO_EMAIL || "contact@legaleyes.co"
    const senderEmail = process.env.BREVO_SENDER_EMAIL || toEmail
    const senderName = process.env.BREVO_SENDER_NAME || "LegalEyes"
    const allowExternalFrom = process.env.BREVO_ALLOW_EXTERNAL_FROM === "true"
    const subjectTemplate = process.env.EMAIL_SUBJECT_LINE || "Contract Review Request From"

    console.log("API Key exists:", !!apiKey)
    console.log("To Email:", toEmail)
    console.log("Sender Email:", senderEmail)

    if (!apiKey) {
      return NextResponse.json(
        { error: "Server email is not configured" },
        { status: 500 }
      )
    }

    const body = (await request.json()) as Partial<ContactBody>

    // Basic validation
    if (!body.name || !body.email || !body.message || !body.serviceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const servicePrefix = body.serviceType === "business" ? "[B]" : "[I]"
    const subject = `${servicePrefix} ${subjectTemplate} ${body.name}`

    // Create SMTP transporter for Brevo
    const smtpHost = process.env.SMTP_Server || 'smtp-relay.brevo.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')
    const smtpLogin = process.env.SMTP_LOGIN
    const smtpPassword = process.env.SMTP_PASSWORD || apiKey
    
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpLogin || senderEmail, // Use SMTP login if available
        pass: smtpPassword              // Use SMTP password or API key
      }
    })

    const htmlContent = `
      <div>
        <h2>${subject}</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
        <p><strong>Service type:</strong> ${body.serviceType === "business" ? "Business" : "Individual"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${body.message}</pre>
      </div>
    `

    console.log("Sending email with nodemailer...")
    console.log("From:", allowExternalFrom ? `"${body.name}" <${body.email}>` : `"${senderName}" <${senderEmail}>`)
    console.log("To:", toEmail)
    console.log("Subject:", subject)

    await transporter.sendMail({
      from: allowExternalFrom 
        ? `"${body.name}" <${body.email}>`
        : `"${senderName}" <${senderEmail}>`,
      to: toEmail,
      replyTo: allowExternalFrom 
        ? undefined 
        : `"${body.name}" <${body.email}>`,
      subject,
      html: htmlContent,
    })
    
    console.log("Email sent successfully!")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Brevo email error", error)
    console.error("Error details:", error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}


