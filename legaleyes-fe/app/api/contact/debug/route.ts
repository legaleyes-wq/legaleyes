import { NextResponse } from "next/server"

export async function GET() {
  try {
    const report = {
      hasApiKey: Boolean(process.env.BREVO_API_KEY),
      hasToEmail: Boolean(process.env.BREVO_TO_EMAIL),
      hasSenderEmail: Boolean(process.env.BREVO_SENDER_EMAIL),
      hasSenderName: Boolean(process.env.BREVO_SENDER_NAME),
      hasEmailSubjectLine: Boolean(process.env.EMAIL_SUBJECT_LINE),
      required: ['BREVO_API_KEY','BREVO_TO_EMAIL','BREVO_SENDER_EMAIL','BREVO_SENDER_NAME','EMAIL_SUBJECT_LINE'],
      missing: [
        !process.env.BREVO_API_KEY ? 'BREVO_API_KEY' : null,
        !process.env.BREVO_TO_EMAIL ? 'BREVO_TO_EMAIL' : null,
        !process.env.BREVO_SENDER_EMAIL ? 'BREVO_SENDER_EMAIL' : null,
        !process.env.BREVO_SENDER_NAME ? 'BREVO_SENDER_NAME' : null,
        !process.env.EMAIL_SUBJECT_LINE ? 'EMAIL_SUBJECT_LINE' : null,
      ].filter(Boolean),
      runtime: process.env.VERCEL ? "vercel" : "node",
      // Helpful to know which build is running without leaking secrets
      timestamp: new Date().toISOString(),
    }
    return NextResponse.json({ ok: true, report })
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


