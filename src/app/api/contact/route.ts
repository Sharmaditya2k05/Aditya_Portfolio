import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendContactEmail, sendAutoReply } from "@/lib/email";
import { contactFormSchema } from "@/lib/validations";
import type { ApiResponse } from "@/types";

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();

    // Validate with Zod
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

    // Persist to DB
    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    // Send emails (don't throw if email fails — DB record is source of truth)
    try {
      await Promise.all([
        sendContactEmail({ name, email, subject, message }),
        sendAutoReply(email, name),
      ]);
    } catch (emailError) {
      console.error("Email send failed:", emailError);
      // Still return success — message was saved
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
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
