import { NextResponse } from "next/server"

export async function GET() {
  try {
    const report = {
      hasApiKey: Boolean(process.env.BREVO_API_KEY),
      hasToEmail: Boolean(process.env.BREVO_TO_EMAIL),
      senderEmail: process.env.BREVO_SENDER_EMAIL ? "set" : "missing",
      senderName: process.env.BREVO_SENDER_NAME ? "set" : "missing",
      emailSubjectLine: process.env.EMAIL_SUBJECT_LINE ? "set" : "missing",
      runtime: process.env.VERCEL ? "vercel" : "node",
      // Helpful to know which build is running without leaking secrets
      timestamp: new Date().toISOString(),
    }
    return NextResponse.json({ ok: true, report })
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


