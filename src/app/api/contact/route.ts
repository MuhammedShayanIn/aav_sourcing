import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Escape user input before putting it inside the HTML email
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Remove line breaks so nothing can be injected into the subject header
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role, interest, fullName, company, email, message } = body;

    // Validation
    if (!role || typeof role !== 'string' || !role.trim()) {
      return NextResponse.json(
        { error: 'Please select whether you are a Buyer or Seller ("I am a").' },
        { status: 400 }
      );
    }

    if (!interest || typeof interest !== 'string' || !interest.trim()) {
      return NextResponse.json(
        { error: 'Please select your category of interest ("Interested in").' },
        { status: 400 }
      );
    }

    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json(
        { error: 'Please enter your full name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Please enter your email address.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Please enter your requirement message.' },
        { status: 400 }
      );
    }

    const cleanRole = role.trim();
    const cleanInterest = interest.trim();
    const cleanName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const cleanCompany =
      typeof company === 'string' && company.trim() ? company.trim() : 'Not specified';
    const targetEmail = 'saquibinnovative.net@gmail.com';

    // Safe versions for HTML
    const safeRole = escapeHtml(cleanRole);
    const safeInterest = escapeHtml(cleanInterest);
    const safeName = escapeHtml(cleanName);
    const safeCompany = escapeHtml(cleanCompany);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage);

    const subject = singleLine(
      `New Sourcing Enquiry: ${cleanName} [${cleanInterest} - ${cleanRole}]`
    );

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0F1E33; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">AAV SOURCING</h1>
          <p style="color: #4FA3E3; margin: 6px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">New Website Sourcing Enquiry</p>
        </div>

        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 35%;"><strong>Role:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px; font-weight: 600;">${safeRole}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Category of Interest:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #2464D4; font-size: 14px; font-weight: 600;">${safeInterest}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Full Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Company:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #2464D4; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px;"><strong>Received:</strong></td>
              <td style="padding: 10px 0; color: #666; font-size: 13px;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} (PKT)</td>
            </tr>
          </table>

          <div style="background-color: #F5F1EB; border-left: 4px solid #2464D4; padding: 16px; border-radius: 4px;">
            <p style="margin: 0 0 8px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #0F1E33; letter-spacing: 0.5px;">Message / Requirement:</p>
            <p style="margin: 0; color: #0F1E33; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>

        <div style="background-color: #f9f9f9; border-top: 1px solid #e0e0e0; padding: 16px; text-align: center; color: #888; font-size: 12px;">
          This enquiry was submitted from the AAV Sourcing Contact Form.
        </div>
      </div>
    `;

    const textContent = `
NEW SOURCING ENQUIRY — AAV SOURCING
===================================
Role: ${cleanRole}
Category: ${cleanInterest}
Full Name: ${cleanName}
Company: ${cleanCompany}
Email: ${cleanEmail}
Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} (PKT)

Requirement:
${cleanMessage}
    `.trim();

    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromAddress =
      process.env.SMTP_FROM ||
      process.env.RESEND_FROM ||
      `"AAV Sourcing" <${smtpUser || 'enquiry@aavsourcing.com'}>`;

    if (resendApiKey) {
      // Send using Resend SDK
      const resend = new Resend(resendApiKey);
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM || 'AAV Sourcing <onboarding@resend.dev>',
        to: [targetEmail],
        replyTo: cleanEmail,
        subject,
        html: htmlContent,
        text: textContent,
      });

      if (error) {
        console.error('[Resend Error]:', error);
        return NextResponse.json(
          { error: `Email delivery failed via Resend: ${error.message}` },
          { status: 500 }
        );
      }

      console.log(
        `[Contact API] Email successfully delivered to ${targetEmail} via Resend. ID: ${data?.id}`
      );
    } else if (smtpHost && smtpUser && smtpPass) {
      // Use configured SMTP Transporter via Nodemailer
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: fromAddress,
        to: targetEmail,
        replyTo: cleanEmail,
        subject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Contact API] Email successfully delivered to ${targetEmail} via SMTP.`);
    } else {
      // If neither SMTP nor Resend is set up, log payload and notify client
      console.warn('--------------------------------------------------');
      console.warn('⚠️ EMAIL DELIVERY NOT CONFIGURED:');
      console.warn(`Target recipient: ${targetEmail}`);
      console.warn(`Enquiry From: ${cleanName} <${cleanEmail}>`);
      console.warn(`Role: ${cleanRole} | Category: ${cleanInterest} | Company: ${cleanCompany}`);
      console.warn(`Message: ${cleanMessage}`);
      console.warn(`👉 To receive live emails at ${targetEmail}, add RESEND_API_KEY to .env.local`);
      console.warn('--------------------------------------------------');

      return NextResponse.json(
        {
          error: `Email service is not yet configured. Please add your RESEND_API_KEY in .env.local to enable live delivery to ${targetEmail}.`,
        },
        { status: 503 }
      );
    }

    // Success response (this was missing before, which caused "Unexpected end of JSON input")
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      {
        error:
          'An error occurred while sending your message. Please try again or reach out on WhatsApp.',
      },
      { status: 500 }
    );
  }
}