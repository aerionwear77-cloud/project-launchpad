import { describe, it, expect } from "vitest";
import { inquirySchema, createInquiryDraft, type Inquiry } from "@/lib/inquiry";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { processSteps } from "@/components/site/ProcessSteps";

const valid: Inquiry = { name: "Test Visitor", email: "visitor@example.com", whatsapp: "", business: "", department: "design", service: "logo-design", description: "A logo for a new brand", budget: "discuss", amount: "", deadline: "", time: "", references: "", additional: "" };
describe("Inquiry rules", () => {
  it("requires a full name", () => { expect(inquirySchema.safeParse({ ...valid, name: " " }).success).toBe(false); });
  it("validates email format", () => { expect(inquirySchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false); });
  it("requires a project description", () => { expect(inquirySchema.safeParse({ ...valid, description: "" }).success).toBe(false); });
  it("requires a specific service", () => { expect(inquirySchema.safeParse({ ...valid, service: "" }).success).toBe(false); });
  it("only accepts a service in the selected department", () => { expect(inquirySchema.safeParse({ ...valid, department: "motion" }).success).toBe(false); });
  it("allows optional WhatsApp to be omitted", () => { expect(inquirySchema.safeParse(valid).success).toBe(true); });
  it("rejects non-web reference links", () => { expect(inquirySchema.safeParse({ ...valid, references: "javascript:alert(1)" }).success).toBe(false); });
  it("exports a specified budget in INR", () => { expect(createInquiryDraft({ ...valid, budget: "specified", amount: "5000" })).toContain("INR 5000"); });
  it("rejects a non-positive specified budget", () => { expect(inquirySchema.safeParse({ ...valid, budget: "specified", amount: "0" }).success).toBe(false); });
  it("does not invent fixed service prices", () => { expect(services.every((s) => s.startingPrice === null)).toBe(true); });
  it("does not advertise placeholder turnaround times", () => { expect(services.every((s) => s.turnaround === "Confirmed after scope review")).toBe(true); });
  it("omits unverified contact and social destinations", () => { expect(site.contact.email).toBeNull(); expect(site.social).toEqual([]); });
  it("uses the four requested process stages", () => { expect(processSteps.map((step) => step.title)).toEqual(["Discover", "Plan", "Create", "Deliver"]); });
});