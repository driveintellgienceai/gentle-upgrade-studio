import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
          Looking For A New Dentist?
        </h2>
        <p className="text-primary-foreground/80 font-body mb-2">
          Call us today
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8">
          <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-brand-terracotta hover:underline font-body font-semibold">
            New Patients: {siteConfig.phone.newPatients}
          </a>
          <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="text-brand-terracotta hover:underline font-body font-semibold">
            Existing Patients: {siteConfig.phone.existingPatients}
          </a>
        </div>
        <Button asChild size="lg" className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold">
          <Link to="/request-an-appointment/">Request a Consultation</Link>
        </Button>
      </div>
    </section>
  );
}
