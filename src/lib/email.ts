import { Resend } from "resend";
import type { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

const FROM = process.env.RESEND_FROM_EMAIL ?? "portfolio@adityasharma.dev";
const TO = process.env.RESEND_TO_EMAIL ?? "sharma.aditya2k05@gmail.com";

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject ?? "New message"} — ${data.name}`,
    html: `
      <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 32px; background: #080C0A; color: #E8F0EA; border-radius: 8px;">
        <h2 style="color: #3DFF7A; margin-bottom: 24px; font-size: 18px; letter-spacing: 0.1em; text-transform: uppercase;">
          New Portfolio Contact
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #8FA898; padding: 8px 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 80px;">Name</td>
            <td style="color: #E8F0EA; padding: 8px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="color: #8FA898; padding: 8px 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Email</td>
            <td style="color: #E8F0EA; padding: 8px 0;">${data.email}</td>
          </tr>
          ${data.subject ? `
          <tr>
            <td style="color: #8FA898; padding: 8px 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Subject</td>
            <td style="color: #E8F0EA; padding: 8px 0;">${data.subject}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #141E18; border-left: 2px solid #3DFF7A; border-radius: 4px;">
          <p style="color: #8FA898; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 12px;">Message</p>
          <p style="color: #E8F0EA; line-height: 1.8; white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #4A6052; font-size: 11px; margin-top: 32px; text-align: center; letter-spacing: 0.1em;">
          Sent from adityasharma.dev portfolio
        </p>
      </div>
    `,
  });
}

export async function sendAutoReply(to: string, name: string): Promise<void> {
  await resend.emails.send({
    from: FROM,
    to,
    subject: "Got your message! — Aditya Sharma",
    html: `
      <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 32px; background: #080C0A; color: #E8F0EA; border-radius: 8px;">
        <h2 style="color: #3DFF7A; font-size: 18px; letter-spacing: 0.1em; text-transform: uppercase;">Hey ${name},</h2>
        <p style="color: #E8F0EA; line-height: 1.8; margin-top: 16px;">
          Thanks for reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.
        </p>
        <p style="color: #8FA898; line-height: 1.8; margin-top: 12px;">
          In the meantime, feel free to check out my work on <a href="https://github.com/Sharmaditya2k05" style="color: #3DFF7A; text-decoration: none;">GitHub</a>.
        </p>
        <p style="color: #4A6052; margin-top: 32px;">— Aditya</p>
      </div>
    `,
  });
}
