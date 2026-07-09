import { Resend } from "resend";
import type { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

const FROM = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
const TO = process.env.RESEND_TO_EMAIL ?? "sharma.aditya2k05@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    subject: data.subject ? escapeHtml(data.subject) : "",
    message: escapeHtml(data.message),
  };

  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject ?? "New message"} - ${data.name}`,
    html: `
      <div style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; max-width: 640px; margin: 0 auto; padding: 32px; background: #050809; color: #f4f4f4; border: 1px solid rgba(244,182,75,0.25); border-radius: 16px;">
        <div style="height: 2px; width: 180px; background: linear-gradient(90deg, #f4b64b, transparent); box-shadow: 0 0 24px rgba(244,182,75,0.45); margin-bottom: 24px;"></div>
        <h2 style="color: #f4b64b; margin: 0 0 24px; font-size: 18px; letter-spacing: 0.16em; text-transform: uppercase;">
          New Portfolio Contact
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: rgba(255,255,255,0.55); padding: 8px 0; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; width: 90px;">Name</td>
            <td style="color: #ffffff; padding: 8px 0;">${safe.name}</td>
          </tr>
          <tr>
            <td style="color: rgba(255,255,255,0.55); padding: 8px 0; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;">Email</td>
            <td style="color: #ffffff; padding: 8px 0;">${safe.email}</td>
          </tr>
          ${
            safe.subject
              ? `<tr>
            <td style="color: rgba(255,255,255,0.55); padding: 8px 0; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;">Subject</td>
            <td style="color: #ffffff; padding: 8px 0;">${safe.subject}</td>
          </tr>`
              : ""
          }
        </table>
        <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.04); border-left: 2px solid #f4b64b; border-radius: 10px;">
          <p style="color: #f4b64b; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 12px;">Message</p>
          <p style="color: rgba(255,255,255,0.82); line-height: 1.8; white-space: pre-wrap; margin: 0;">${safe.message}</p>
        </div>
        <p style="color: rgba(255,255,255,0.34); font-size: 11px; margin-top: 28px; text-align: center; letter-spacing: 0.1em;">
          Sent from Aditya Sharma portfolio
        </p>
      </div>
    `,
  });
}

export async function sendAutoReply(to: string, name: string): Promise<void> {
  const safeName = escapeHtml(name);

  await resend.emails.send({
    from: FROM,
    to,
    subject: "Got your message! - Aditya Sharma",
    html: `
      <div style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; max-width: 640px; margin: 0 auto; padding: 32px; background: #050809; color: #f4f4f4; border: 1px solid rgba(244,182,75,0.25); border-radius: 16px;">
        <div style="height: 2px; width: 180px; background: linear-gradient(90deg, #f4b64b, transparent); box-shadow: 0 0 24px rgba(244,182,75,0.45); margin-bottom: 24px;"></div>
        <h2 style="color: #f4b64b; font-size: 18px; letter-spacing: 0.12em; text-transform: uppercase;">Hey ${safeName},</h2>
        <p style="color: rgba(255,255,255,0.82); line-height: 1.8; margin-top: 16px;">
          Thanks for reaching out. I received your message and will get back to you as soon as possible.
        </p>
        <p style="color: rgba(255,255,255,0.58); line-height: 1.8; margin-top: 12px;">
          In the meantime, feel free to check out my work on <a href="https://github.com/Sharmaditya2k05" style="color: #f4b64b; text-decoration: none;">GitHub</a>.
        </p>
        <p style="color: rgba(244,182,75,0.7); margin-top: 28px;">- Aditya</p>
      </div>
    `,
  });
}
