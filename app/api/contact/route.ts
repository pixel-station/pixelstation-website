import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("CONTACT API HIT");

    const { name, email, phone, comment } = await req.json();

    console.log("FORM DATA:", { name, email, phone, comment });
    console.log("HAS API KEY:", !!process.env.RESEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);

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

    console.log("RESEND RESULT:", result);

    return Response.json({ success: true, result });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}