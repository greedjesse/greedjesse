import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_YRoc3qYh_NGU3yg8surn1NcuTNPuv27Fi")

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Send email using Resend - directly to your business email
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "greed.jesse.business@gmail.com",
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr>
        <p><small>Sent from greedjesse.com contact form</small></p>
        <p><small>Reply to: ${email}</small></p>
      `,
      reply_to: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
