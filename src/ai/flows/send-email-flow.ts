'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles the email sending process.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';

const SendEmailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
export type SendEmailInput = z.infer<typeof SendEmailSchema>;

export async function sendEmail(input: SendEmailInput): Promise<void> {
  await sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // Note: You can configure your email provider details in the .env file.
    // This example uses ethereal.email for testing if no credentials are found.
    // Ethereal provides a temporary SMTP server for development.
    // For production, you should use a real email service provider (e.g., Gmail, SendGrid).

    let transporter;

    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Use credentials from .env file if they exist
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: (process.env.EMAIL_SECURE || 'false') === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      // Fallback to a test account from Ethereal if no credentials are provided
      console.log("No email credentials found in .env file. Using Ethereal for testing.");
      console.log("Emails will NOT be sent to a real inbox. Check the server console for a preview link.");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    }


    const mailOptions = {
      from: `"${input.name}" <${input.email}>`,
      to: 'mnidhinsivan@gmail.com', // The email address you want to receive the messages
      subject: `New Message from ${input.name} via Portfolio Contact Form`,
      text: input.message,
      html: `
        <h1>New Message from your Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <hr>
        <p>${input.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      
      // If using Ethereal, a preview URL will be available
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
          console.log('Preview URL: %s', previewUrl);
      }

    } catch (error) {
      console.error('Error sending email:', error);
      // Re-throw the error to be caught by the client-side caller
      throw new Error('Failed to send email.');
    }
  }
);
