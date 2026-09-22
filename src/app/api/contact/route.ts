import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role, interest, fullName, company, email, message } = body;

    // Validation
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

    const cleanRole = role || 'Buyer';
    const cleanInterest = interest || 'Textile';
    const cleanCompany = company?.trim() || 'Not specified';
    const targetEmail = 'saquib@innovative-net.com';

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
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px; font-weight: 600;">${cleanRole}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Category of Interest:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #2464D4; font-size: 14px; font-weight: 600;">${cleanInterest}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Full Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px;">${fullName.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Company:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px;">${cleanCompany}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0F1E33; font-size: 14px;"><a href="mailto:${email.trim()}" style="color: #2464D4; text-decoration: none;">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px;"><strong>Received:</strong></td>
              <td style="padding: 10px 0; color: #666; font-size: 13px;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} (PKT)</td>
            </tr>
          </table>

          <div style="background-color: #F5F1EB; border-left: 4px solid #2464D4; padding: 16px; border-radius: 4px;">
            <p style="margin: 0 0 8px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #0F1E33; letter-spacing: 0.5px;">Message / Requirement:</p>
            <p style="margin: 0; color: #0F1E33; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</p>
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
Full Name: ${fullName.trim()}
Company: ${cleanCompany}
Email: ${email.trim()}
Date: ${new Date().toLocaleString()}

Requirement:
${message.trim()}
    `.trim();

    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromAddress = process.env.SMTP_FROM || process.env.RESEND_FROM || `"AAV Sourcing" <${smtpUser || 'enquiry@aavsourcing.com'}>`;

    if (resendApiKey) {
      // Send using Resend REST API
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || 'AAV Sourcing <onboarding@resend.dev>',
          to: [targetEmail],
          reply_to: email.trim(),
          subject: `New Sourcing Enquiry: ${fullName.trim()} [${cleanInterest} - ${cleanRole}]`,
          html: htmlContent,
          text: textContent,
        }),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error('[Resend Error]:', errorText);
        throw new Error('Failed to send email via Resend');
      }

      console.log(`[Contact API] Email successfully delivered to ${targetEmail} via Resend.`);
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
        replyTo: email.trim(),
        subject: `New Sourcing Enquiry: ${fullName.trim()} [${cleanInterest} - ${cleanRole}]`,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Contact API] Email successfully delivered to ${targetEmail} via SMTP.`);
    } else {
      // If neither SMTP nor Resend is set up, log payload to server terminal
      console.log('--------------------------------------------------');
      console.log('📬 NEW SOURCING ENQUIRY RECEIVED:');
      console.log(`To: ${targetEmail}`);
      console.log(`From: ${fullName.trim()} <${email.trim()}>`);
      console.log(`Role: ${cleanRole} | Category: ${cleanInterest}`);
      console.log(`Company: ${cleanCompany}`);
      console.log(`Message:\n${message.trim()}`);
      console.log('ℹ️ To deliver live emails, set RESEND_API_KEY or SMTP credentials in .env.local');
      console.log('--------------------------------------------------');
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your enquiry and will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again or reach out on WhatsApp.' },
      { status: 500 }
    );
  }
}
