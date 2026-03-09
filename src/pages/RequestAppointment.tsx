import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { siteConfig } from "@/config/siteConfig";

const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  source: z.string().min(1, "Please select one"),
});

export default function RequestAppointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: zodResolver(step1Schema) });

  const onStep1Submit = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  const onStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <Layout>
      <SEOHead title="Request an Appointment | Tooth Architect Dental Care | Sandy Springs, GA" description="Request a consultation at Tooth Architect Dental Care in Sandy Springs, GA. Dr. Shiva Talebi screens all new patients." canonical="https://www.tootharchitectdental.com/request-an-appointment/" />
      <PageBanner title="Request a Consultation" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {step < 3 && (
              <>
                <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 font-body">
                  We believe great dental care starts with understanding you as a person — your needs, your concerns, and your goals. Tell us a little about yourself so we can prepare the best experience for you.
                </p>
                <div className="flex items-center justify-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-2 w-12 rounded-full transition-colors ${s <= step ? "bg-accent" : "bg-muted"}`} />
                  ))}
                </div>
                <p className="text-center text-xs text-muted-foreground mb-6 font-body">Step {step} of 3</p>
              </>
            )}

            {step === 1 && (
              <form onSubmit={handleSubmit(onStep1Submit)} className="space-y-4 font-body">
                <div>
                  <Label>Full Name *</Label>
                  <Input {...register("name")} className="mt-1" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message as string}</p>}
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input type="email" {...register("email")} className="mt-1" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message as string}</p>}
                </div>
                <div>
                  <Label>Phone *</Label>
                  <Input type="tel" {...register("phone")} className="mt-1" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message as string}</p>}
                </div>
                <div>
                  <Label>How did you hear about us? *</Label>
                  <Select onValueChange={(v) => setValue("source", v)}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select one" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="friend">Referral from friend/family</SelectItem>
                      <SelectItem value="dentist">Referral from another dentist</SelectItem>
                      <SelectItem value="social">Social media</SelectItem>
                      <SelectItem value="drove">Drove by the office</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.source && <p className="text-xs text-destructive mt-1">{errors.source.message as string}</p>}
                </div>
                <Button type="submit" className="bg-brand-rust text-white hover:bg-brand-rust/90 font-bold w-full">Continue</Button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={onStep2Submit} className="space-y-4 font-body">
                <div>
                  <Label className="mb-3 block">What brings you to our practice? (select all that apply)</Label>
                  <div className="space-y-2">
                    {["Routine care & cleanings", "Cosmetic improvements", "Second opinion on a treatment plan", "TMJ/jaw pain", "Holistic/biocompatible dentistry", "Other"].map((opt) => (
                      <div key={opt} className="flex items-center gap-2">
                        <Checkbox id={opt} />
                        <label htmlFor={opt} className="text-sm cursor-pointer">{opt}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Is there anything specific you'd like Dr. Talebi to know? (optional)</Label>
                  <Textarea rows={4} className="mt-1" />
                </div>
                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
                  <Button type="submit" className="bg-brand-rust text-white hover:bg-brand-rust/90 font-bold flex-1">Continue</Button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center space-y-6 py-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-2xl font-heading">Thank you for reaching out, {formData.name?.split(" ")[0]}!</h2>
                <p className="text-muted-foreground font-body">
                  Our team will review your information and contact you within 1-2 business days to schedule your first visit. We look forward to getting to know you.
                </p>
                <div className="pt-4 space-y-2 text-sm text-muted-foreground font-body">
                  <p>For urgent needs, please call:</p>
                  <p>New Patients: <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-accent hover:underline font-semibold">{siteConfig.phone.newPatients}</a></p>
                  <p>Existing Patients: <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="text-accent hover:underline font-semibold">{siteConfig.phone.existingPatients}</a></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
