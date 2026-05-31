import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  inquiryType?: unknown;
  message?: unknown;
};

const allowedInquiryTypes = new Set(["Project Inquiry", "Job Opportunity", "Consulting", "Partnership"]);

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSenderEmail(configuredFromEmail: string | undefined, fallbackEmail: string) {
  const fromEmail = cleanText(configuredFromEmail)
    .replaceAll('\\"', '"')
    .replace(/^["']+|["']+$/g, "");
  const bracketEmail = fromEmail.match(/<([^<>]+)>/)?.[1]?.trim();

  if (bracketEmail && isValidEmail(bracketEmail)) {
    return fromEmail;
  }

  if (isValidEmail(fromEmail)) {
    return fromEmail;
  }

  return fallbackEmail;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const fullName = cleanText(payload.fullName);
  const email = cleanText(payload.email);
  const inquiryType = cleanText(payload.inquiryType);
  const message = cleanText(payload.message);

  if (!fullName || !email || !inquiryType || !message) {
    return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!allowedInquiryTypes.has(inquiryType)) {
    return NextResponse.json({ error: "Please select a valid inquiry type." }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: "Please keep your message under 2000 characters." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "naveedk09@gmail.com";
  const fromEmail = getSenderEmail(process.env.CONTACT_FROM_EMAIL, toEmail);

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Contact email is not configured yet. Please use Schedule a Call for now." },
      { status: 503 }
    );
  }

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio contact: ${inquiryType} from ${fullName}`,
      html
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Resend email send failed.", {
      status: response.status,
      body: errorBody,
      fromEmail,
      toEmail
    });

    return NextResponse.json(
      { error: "The message could not be sent right now. Please try again or schedule a call." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Thanks. Your message has been sent." });
}
