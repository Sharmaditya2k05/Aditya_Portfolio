import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendAutoReply, sendContactEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/validations";
import type { ApiResponse } from "@/types";

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.errors[0]?.message ?? "Invalid input",
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    let emailSent = false;
    let savedToDb = false;

    try {
      await Promise.all([
        sendContactEmail({ name, email, subject, message }),
        sendAutoReply(email, name),
      ]);
      emailSent = true;
    } catch (emailError) {
      console.error("Email send failed:", emailError);
    }

    try {
      await prisma.contactMessage.create({
        data: { name, email, subject, message },
      });
      savedToDb = true;
    } catch (dbError) {
      console.error("Contact DB save failed:", dbError);
    }

    if (!emailSent && !savedToDb) {
      return NextResponse.json(
        {
          success: false,
          error: "Message could not be sent. Please email me directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: emailSent
          ? "Message sent successfully"
          : "Message saved successfully. Email delivery is not configured.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
