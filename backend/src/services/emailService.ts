import nodemailer from 'nodemailer';
import { appConfig } from '../config/env';
import { logger } from '../lib/logger';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    // Only initialize if SMTP credentials are provided
    if (!appConfig.email.host || !appConfig.email.user || !appConfig.email.pass) {
      logger.warn('Email service not configured. SMTP credentials missing.');
      return;
    }

    try {
      this.transporter = nodemailer.createTransport({
        host: appConfig.email.host,
        port: appConfig.email.port || 587,
        secure: appConfig.email.port === 465, // true for 465, false for other ports
        auth: {
          user: appConfig.email.user,
          pass: appConfig.email.pass,
        },
      });

      logger.info('Email service initialized successfully');
    } catch (error) {
      logger.error('Failed to initialize email service', error);
    }
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.transporter) {
      logger.warn('Email service not available. Skipping email send.');
      return false;
    }

    try {
      const info = await this.transporter.sendMail({
        from: appConfig.email.from || appConfig.email.user,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      logger.info(`Email sent successfully: ${info.messageId}`);
      return true;
    } catch (error) {
      logger.error('Failed to send email', error);
      return false;
    }
  }

  async sendContactNotification(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<boolean> {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #0a0a0f;
              color: #e0e0e0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #1a1a2e;
              border: 2px solid #00BFFF;
              border-radius: 8px;
              padding: 30px;
            }
            .header {
              border-bottom: 2px solid #00BFFF;
              padding-bottom: 20px;
              margin-bottom: 20px;
            }
            .header h1 {
              color: #00BFFF;
              margin: 0;
              font-size: 24px;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              color: #8B00FF;
              font-weight: bold;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .value {
              color: #e0e0e0;
              margin-top: 5px;
              padding: 10px;
              background-color: #252540;
              border-left: 3px solid #00BFFF;
              border-radius: 4px;
            }
            .message-box {
              background-color: #252540;
              border: 1px solid #00BFFF;
              border-radius: 4px;
              padding: 15px;
              margin-top: 10px;
              line-height: 1.6;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #00BFFF;
              text-align: center;
              color: #a0a0b0;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
            </div>
            
            <div class="field">
              <div class="label">From</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${data.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Subject</div>
              <div class="value">${data.subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your portfolio contact form</p>
              <p>Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Timestamp: ${new Date().toLocaleString()}
    `;

    return this.sendEmail({
      to: appConfig.email.user || 'your-email@example.com',
      subject: `Portfolio Contact: ${data.subject}`,
      text: textContent,
      html: htmlContent,
    });
  }

  async sendConfirmationEmail(data: {
    name: string;
    email: string;
  }): Promise<boolean> {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #0a0a0f;
              color: #e0e0e0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #1a1a2e;
              border: 2px solid #8B00FF;
              border-radius: 8px;
              padding: 30px;
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
              margin-bottom: 20px;
              border-bottom: 2px solid #8B00FF;
            }
            .header h1 {
              color: #8B00FF;
              margin: 0;
              font-size: 28px;
            }
            .content {
              line-height: 1.8;
              color: #e0e0e0;
            }
            .highlight {
              color: #00BFFF;
              font-weight: bold;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #8B00FF;
              text-align: center;
              color: #a0a0b0;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✓ Message Received!</h1>
            </div>
            
            <div class="content">
              <p>Hi <span class="highlight">${data.name}</span>,</p>
              
              <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
              
              <p>In the meantime, feel free to check out my latest projects and connect with me on social media.</p>
              
              <p>Best regards,<br>
              <span class="highlight">Roman Jean-Elie</span></p>
            </div>
            
            <div class="footer">
              <p>This is an automated confirmation email</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
Hi ${data.name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

In the meantime, feel free to check out my latest projects and connect with me on social media.

Best regards,
Roman Jean-Elie

---
This is an automated confirmation email
    `;

    return this.sendEmail({
      to: data.email,
      subject: 'Thanks for reaching out!',
      text: textContent,
      html: htmlContent,
    });
  }
}

export const emailService = new EmailService();
