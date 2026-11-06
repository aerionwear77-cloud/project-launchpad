import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft, Download, FileText, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { departments, services } from "@/data/services";
import { budgetOptions } from "@/config/inquiries";
import { inquirySchema, createInquiryDraft, type Inquiry } from "@/lib/inquiry";

export function InquiryForm({ initialService, consultation = false }: { initialService?: string; consultation?: boolean }) {
  const selected = services.find((s) => s.slug === initialService || s.name === initialService || s.orderService === initialService);
  const [draft, setDraft] = useState<string | null>(null);
  const [failure, setFailure] = useState("");
  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<Inquiry>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", whatsapp: "", business: "", department: selected?.department ?? "design", service: selected?.slug ?? "", description: "", budget: "discuss", amount: "", deadline: "", time: "", references: "", additional: "" },
  });
  const department = watch("department");
  const field = (name: keyof Inquiry, label: string, type = "text", optional = false, maxLength = 150) => (
    <div className="space-y-2">
      <Label htmlFor={name}>{label} {optional && <span className="font-normal text-slate">(optional)</span>}</Label>
      <Input id={name} type={type} maxLength={maxLength} autoComplete={name === "name" ? "name" : name === "email" ? "email" : name === "whatsapp" ? "tel" : undefined} {...register(name)} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} className="h-12 rounded-none bg-paper" />
      {errors[name] && <p id={`${name}-error`} className="text-sm text-destructive">{errors[name]?.message}</p>}
    </div>
  );
  const area = (name: "description" | "references" | "additional", label: string, optional = false) => (
    <div className="space-y-2">
      <Label htmlFor={name}>{label} {optional && <span className="font-normal text-slate">(optional)</span>}</Label>
      <Textarea id={name} {...register(name)} maxLength={name === "description" ? 5000 : name === "references" ? 2000 : 3000} rows={name === "description" ? 5 : 3} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} className="rounded-none bg-paper text-base" />
      {errors[name] && <p id={`${name}-error`} className="text-sm text-destructive">{errors[name]?.message}</p>}
    </div>
  );
  const download = () => {
    if (!draft) return;
    try {
      const url = URL.createObjectURL(new Blob([draft], { type: "text/plain;charset=utf-8" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = consultation ? "consultation-request-draft.txt" : "project-brief-draft.txt";
      anchor.click();
      URL.revokeObjectURL(url);
      setFailure("");
    } catch { setFailure("The download could not start. Your details are still here; please try again."); }
  };
  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <aside>
          <p className="eyebrow text-orange-deep">{consultation ? "A conversation, first" : "Your next chapter"}</p>
          <h2 className="display-md mt-5">{consultation ? "Make room for your idea." : "Good work starts with a good brief."}</h2>
          <p className="mt-6 text-slate">{consultation ? "Discuss your goals, creative direction, available materials and the scope of your project." : "Share what you need, who it's for and the direction you have in mind."}</p>
          <dl className="mt-8 space-y-5 border-t border-hairline pt-6 text-sm">
            <div><dt className="font-semibold">{consultation ? "Time zone" : "Project pricing"}</dt><dd className="mt-1 text-slate">{consultation ? "India Standard Time · Asia/Kolkata" : "Quoted individually in INR after scope review."}</dd></div>
            {consultation && <div><dt className="font-semibold">Call duration</dt><dd className="mt-1 text-slate">To be confirmed with your appointment.</dd></div>}
            <div><dt className="font-semibold">No commitment yet</dt><dd className="mt-1 text-slate">A brief is not a paid order. A preferred call time is not a confirmed appointment.</dd></div>
          </dl>
        </aside>
        <div className="min-w-0">
          <div className="mb-10 flex items-start gap-3 border-l-2 border-orange bg-beige p-5 text-sm text-charcoal" role="note">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-deep" />
            <p>Online delivery is not connected yet. You can prepare and download a draft; nothing is sent to the studio.</p>
          </div>
          {draft ? (
            <div>
              <FileText className="h-8 w-8 text-orange-deep" />
              <h2 className="display-md mt-5">Your unsent draft</h2>
              <p className="mt-4 text-slate" role="status">Your details are ready to review. No inquiry has been sent{consultation ? " and no call has been booked" : ""}.</p>
              <pre className="my-8 whitespace-pre-wrap break-words border-y border-hairline py-8 font-sans text-sm leading-relaxed">{draft}</pre>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="ink" size="xl" onClick={download}><Download /> Download draft</Button>
                <Button variant="inkOutline" size="xl" onClick={() => setDraft(null)}><ArrowLeft /> Edit details</Button>
              </div>
              {failure && <p className="mt-4 text-destructive" role="alert">{failure}</p>}
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit((data) => setDraft(createInquiryDraft(data, consultation)))} className="space-y-12">
              <fieldset className="space-y-6"><legend className="mb-6 font-display text-3xl">01 / About you</legend>
                <div className="grid gap-6 sm:grid-cols-2">{field("name", "Full name", "text", false, 100)}{field("email", "Email address", "email", false, 255)}{field("whatsapp", "WhatsApp number", "tel", true, 30)}{field("business", "Business or brand name", "text", true)}</div>
              </fieldset>
              <fieldset className="space-y-6 border-t border-hairline pt-8"><legend className="pr-4 font-display text-3xl">02 / The project</legend>
                <div><Label>Service department</Label><div className="mt-3 grid grid-cols-2 gap-3" role="group" aria-label="Service department">
                  {(["design", "motion"] as const).map((dep) => <Button key={dep} type="button" size="xl" variant={department === dep ? "ink" : "inkOutline"} aria-pressed={department === dep} onClick={() => { setValue("department", dep); setValue("service", ""); }}>{dep === "design" ? "Design" : "Motion"}</Button>)}
                </div></div>
                <div className="space-y-2"><Label htmlFor="service">Specific service</Label><select id="service" {...register("service")} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} className="form-select"><option value="">Choose a service</option>{services.filter((s) => s.department === department).map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select>{errors.service && <p id="service-error" className="text-sm text-destructive">{errors.service.message}</p>}<p className="text-xs text-slate">{departments[department].label}</p></div>
                {area("description", "Project description")}
              </fieldset>
              <fieldset className="space-y-6 border-t border-hairline pt-8"><legend className="pr-4 font-display text-3xl">03 / The details</legend>
                <div className="space-y-2"><Label htmlFor="budget">Budget preference</Label><select id="budget" {...register("budget")} className="form-select">{budgetOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>
                {watch("budget") === "specified" && field("amount", "Budget (INR)", "number", false, 12)}
                <div className="grid gap-6 sm:grid-cols-2">{field("deadline", consultation ? "Preferred call date" : "Preferred deadline", "date", true)}{consultation && field("time", "Preferred time (IST)", "time", true)}</div>
                {area("references", "Reference links", true)}{area("additional", "Additional requirements", true)}
              </fieldset>
              <div className="border-t border-hairline pt-8"><Button type="submit" variant="ink" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">{isSubmitting ? "Preparing draft…" : "Review draft"}<ArrowRight /></Button><p className="mt-4 text-xs text-slate">Details remain on this page only. Nothing is sent or saved online.</p></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}