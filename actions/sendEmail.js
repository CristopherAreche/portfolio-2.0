"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const message = formData.get("senderMessage");
  const name = formData.get("senderName");
  const subject = formData.get("senderSubject");
  const email = formData.get("senderEmail");
  const number = formData.get("senderNumber");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }
  try {
    resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cristopherareche764@gmail.com",
      subject: subject,
      text: message.toString(),
      reply_to: email,
    });
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
