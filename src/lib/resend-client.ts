/**
 * Resend Client-Side Email Handler
 * 
 * This module handles email sending directly from the client using Resend's API.
 * It's used instead of a server-side API route because GitHub Pages doesn't support
 * backend code execution.
 */

const RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

if (!RESEND_API_KEY) {
  console.warn(
    "⚠️ NEXT_PUBLIC_RESEND_API_KEY is not set. Contact form will not work in production."
  );
}

if (!CONTACT_EMAIL) {
  console.warn(
    "⚠️ NEXT_PUBLIC_CONTACT_EMAIL is not set. Contact form will not work in production."
  );
}

interface SendEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ResendResponse {
  id?: string;
  error?: {
    message: string;
  };
}

/**
 * Sends an email via Resend API
 * Handles the HTTP request directly from the client
 */
export async function sendEmailViaResend({
  name,
  email,
  subject,
  message,
}: SendEmailParams): Promise<ResendResponse> {
  if (!RESEND_API_KEY) {
    throw new Error(
      "Resend API key is not configured. Add NEXT_PUBLIC_RESEND_API_KEY to your environment."
    );
  }

  if (!CONTACT_EMAIL) {
    throw new Error(
      "Contact email is not configured. Add NEXT_PUBLIC_CONTACT_EMAIL to your environment."
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: subject,
        html: `
          <h2>New Portfolio Contact</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        error: {
          message: error.message || "Failed to send email",
        },
      };
    }

    const data = await response.json();
    return { id: data.id };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";
    return {
      error: {
        message: errorMessage,
      },
    };
  }
}
