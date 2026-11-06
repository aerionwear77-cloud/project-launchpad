import { z } from "zod";
import { services } from "@/data/services";

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  whatsapp: z.string().trim().max(30).refine((v) => !v || /^[+\d\s()-]{7,30}$/.test(v), "Enter a valid phone number."),
  business: z.string().trim().max(150),
  department: z.enum(["design", "motion"]),
  service: z.string().min(1, "Choose a service."),
  description: z.string().trim().min(1, "Tell us about your project.").max(5000),
  budget: z.enum(["discuss", "specified", "flexible"]),
  amount: z.string().max(12),
  deadline: z.string().max(10),
  time: z.string().max(5),
  references: z.string().trim().max(2000).refine((v) => !v || v.split(/\s+/).every((link) => { try { return ["https:", "http:"].includes(new URL(link).protocol); } catch { return false; } }), "Use full http or https links, separated by spaces or new lines."),
  additional: z.string().trim().max(3000),
}).superRefine((value, ctx) => {
  if (!services.some((s) => s.slug === value.service && s.department === value.department)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["service"], message: "Choose a service in this department." });
  }
  if (value.budget === "specified" && (!/^\d+(\.\d{1,2})?$/.test(value.amount) || Number(value.amount) <= 0)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["amount"], message: "Enter a positive budget in INR." });
  }
});

export type Inquiry = z.infer<typeof inquirySchema>;

export function createInquiryDraft(input: Inquiry, consultation = false) {
  const data = inquirySchema.parse(input);
  const service = services.find((s) => s.slug === data.service);
  return [
    `BAPARDEKAR CREATIVE — ${consultation ? "Consultation request" : "Project brief"}`,
    "UNSENT DRAFT — no request has been delivered and no appointment is confirmed.",
    `Name: ${data.name}`, `Email: ${data.email}`, `WhatsApp: ${data.whatsapp || "Not provided"}`,
    `Business: ${data.business || "Not provided"}`, `Department: ${data.department}`, `Service: ${service?.name ?? data.service}`,
    `Project: ${data.description}`, `Budget: ${data.budget === "specified" ? `INR ${data.amount}` : data.budget}`,
    `Preferred ${consultation ? "call date" : "deadline"}: ${data.deadline || "To discuss"}`,
    ...(consultation ? [`Preferred time: ${data.time || "To discuss"} (Asia/Kolkata)`] : []),
    `References: ${data.references || "None"}`, `Additional requirements: ${data.additional || "None"}`,
  ].join("\n\n");
}