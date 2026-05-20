import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { success: false, error: "Missing Resend API key" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, phone, comment } = await req.json();

    const result = await resend.emails.send({
      from: "Pixel Station <noreply@pixelstation.com.au>",
      to: "create@pixelstation.com.au",
      subject: `New enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${comment}</p>
      `,
    });

    if (result.error) {
      return Response.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return Response.json({ success: true, result });
  } catch (error) {
    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}