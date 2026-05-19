import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, company, service, message } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 }
      );
    }

    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;

    if (!user || !pass) {
      console.error("Missing Zoho SMTP credentials in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Configure the Nodemailer transport for Zoho
    // Note: If you registered in the US data center, use smtp.zoho.com instead of smtp.zoho.in
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", 
      port: 465,
      secure: true, // use SSL
      auth: {
        user: user,
        pass: pass,
      },
    });

    // 1. Send Notification Email to You (info@aadithyatech.com)
    const notificationMailOptions = {
      from: `"${fullName} (via Website)" <${user}>`, // Sent from your authenticated email to avoid spam blocks
      replyTo: email, // If you hit "Reply", it goes to the customer
      to: user, // Send to yourself
      subject: `New Enquiry from ${fullName} - Aadithya Tech`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service of Interest:</strong> ${service || "Not provided"}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br/>') : "No message provided."}</p>
      `,
    };

    // 2. Send Auto-Reply Email to the Customer
    const autoReplyMailOptions = {
      from: `"Aadithya Tech" <${user}>`,
      to: email,
      subject: "Thank you for contacting Aadithya Tech",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #800000;">Thank you for reaching out!</h2>
          <p>Dear ${fullName},</p>
          <p>We have received your enquiry and our engineering team will review your details shortly. We typically respond within 24 hours.</p>
          <br/>
          <p><strong>Your Details:</strong></p>
          <p>Service of Interest: ${service || "N/A"}</p>
          <br/>
          <p>If you have any urgent questions, please feel free to reply directly to this email.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>The Aadithya Tech Team</strong></p>
          <p><a href="https://aadithyatech.com">www.aadithyatech.com</a></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(notificationMailOptions);
    await transporter.sendMail(autoReplyMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
