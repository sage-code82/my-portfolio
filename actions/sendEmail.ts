"use server";

import { Resend } from "resend";
import { valString } from "@/lib/helper";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!valString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!valString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "sagelvl40@gmail.com",
    subject: "Portfolio Contact",
    reply_to: senderEmail as string,
    text: message as string,
  });
};
