import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/config/siteConfig";

export default function PatientResources() {
  return (
    <Layout>
      <SEOHead title="Patient Resources | Tooth Architect Dental Care | Sandy Springs, GA" description="Patient resources including new patient info, insurance, and financing at Tooth Architect Dental Care in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/patient-resources/" />
      <PageBanner title="Patient Resources" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
            <p>
              NEW PATIENTS: Your first visit to our office involves a few special steps so that we can get to know you. Located outside (North) of I-285, just south of Abernathy Rd, off of Roswell Road.
            </p>
            <p>
              Insurance accepted: {siteConfig.insurance.join(", ")}. Financing: CareCredit. We do not file for HMO plans.
            </p>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
