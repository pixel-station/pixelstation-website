import { Resend } from "resend";

const blockedKeywords = [
  "seo services",
  "backlinks",
  "vendor",
  "website vendor",
  "guest post",
  "casino",
  "crypto",
  "rank you",
  "rank #1",
  "low budget",
  "high-budget",
  "link building",
];

const containsSpam = (text: string) => {
  const lowerText = text.toLowerCase();
  return blockedKeywords.some((keyword) => lowerText.includes(keyword));
};

export async function POST(req: Request) {
  try {
    const { name, email, phone, comment, companyWebsite } = await req.json();

    if (companyWebsite) {
      return Response.json({ success: true }, { status: 200 });
    }

    const combinedText = `${name} ${email} ${phone} ${comment}`;

    if (containsSpam(combinedText)) {
      return Response.json({ success: true }, { status: 200 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { success: false, error: "Missing Resend API key" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "Pixel Station <noreply@pixelstation.com.au>",
      to: "create@pixelstation.com.au",
      subject: `New enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
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
    console.error("EMAIL ERROR:", error);

    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}