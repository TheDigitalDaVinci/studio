'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles the email sending process.
 * - SendEmailSchema - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';

export const SendEmailSchema = z.object({
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
    // Note: You need to configure your email provider details here.
    // This example uses ethereal.email for testing, which provides a temporary SMTP server.
    // For production, you should use a real email service provider (e.g., Gmail, SendGrid).
    // Store your credentials securely in environment variables.

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: (process.env.EMAIL_SECURE || 'false') === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Ethereal user
        pass: process.env.EMAIL_PASS, // Ethereal password
      },
    });

    const mailOptions = {
      from: `"${input.name}" <${input.email}>`,
      to: 'mnidhinsivan@gmail.com',
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
      // You can see a preview of the sent email at the URL provided by Ethereal
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error('Error sending email:', error);
      // Re-throw the error to be caught by the client-side caller
      throw new Error('Failed to send email.');
    }
  }
);