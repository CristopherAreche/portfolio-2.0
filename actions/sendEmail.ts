"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("senderMessage");
  const name = formData.get("senderName");
  const subject = formData.get("senderSubject");
  const email = formData.get("senderEmail");
  const number = formData.get("senderNumber");

  // Validate required fields
  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  if (!name || typeof name !== "string") {
    return {
      error: "Invalid name",
    };
  }

  if (!email || typeof email !== "string") {
    return {
      error: "Invalid email",
    };
  }

  if (!subject || typeof subject !== "string") {
    return {
      error: "Invalid subject",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cristopherareche764@gmail.com",
      subject: subject,
      text: message.toString(),
      reply_to: email,
    });

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      error: "Failed to send email. Please try again.",
    };
  }
};
