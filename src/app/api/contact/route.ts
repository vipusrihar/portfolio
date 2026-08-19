import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, subject, message, } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "All fields are required.", },
                { status: 400, }
            );
        }

        const result = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL!],
            replyTo: email,
            subject: subject,
            html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        });

        if (result.error) {
            console.error("Resend error:", result.error);

            return NextResponse.json(
                { message: "Failed to send email.", },
                { status: 500, }
            );
        }

        return NextResponse.json(
            {
                message: "Email sent successfully.",
                id: result.data?.id,
            },
            { status: 202, }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            { message: "Internal server error.", },
            { status: 500, }
        );
    }
}