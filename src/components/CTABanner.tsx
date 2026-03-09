import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export default function CTABanner() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#5F5B35]">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white mb-3 sm:mb-4">
          Looking For A New Dentist?
        </h2>
        <p className="text-white/75 font-body mb-4 text-sm sm:text-base">
          Call us today
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-7 sm:mb-8">
          <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-[#D47D45] hover:underline font-body font-semibold text-sm sm:text-base">
            New Patients: {siteConfig.phone.newPatients}
          </a>
          <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="text-[#D47D45] hover:underline font-body font-semibold text-sm sm:text-base">
            Existing Patients: {siteConfig.phone.existingPatients}
          </a>
        </div>
        <Button asChild size="lg" className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-semibold text-sm sm:text-base px-8 sm:px-10 rounded-lg shadow-md">
          <Link to="/request-an-appointment/">Request a Consultation</Link>
        </Button>
      </div>
    </section>
  );
}
