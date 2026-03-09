import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

export default function MeetTheDoctor() {
  return (
    <Layout>
      <SEOHead title="Meet Our Doctors | Tooth Architect Dental Care | Sandy Springs, GA" description="Meet Dr. Shiva Talebi, a dentist with a unique background in architecture offering holistic dental care in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/meet-the-doctor/" />
      <PageBanner title="DR. SHIVA TALEBI, D.M.D." subtitle="General Dentist" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <img src={siteConfig.images.drTalebiPortrait} alt={siteConfig.doctor} className="rounded-xl shadow-xl w-full max-w-sm mx-auto md:sticky md:top-24" loading="lazy" />
            </div>
            <div className="md:col-span-3 space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
              <p>
                Meet Dr. Shiva Talebi, a dentist with a unique background in architecture, offering patients a distinctive blend of talents. Dr. Talebi's journey began with a B.S. in Architecture from Georgia Tech, where she launched her career designing cutting-edge dental and medical offices. However, her true calling emerged when she discovered the profound satisfaction of hands-on dentistry and direct patient care. Her passion for improving lives through oral health led her to achieve a D.M.D. from the Dental College of Georgia. Dr. Talebi's practice is deeply rooted in holistic dentistry, emphasizing the interconnectedness of oral health and overall well-being. She generously volunteers her time and dental expertise at the Ben Massell Dental Clinic.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold">
                  <Link to="/request-an-appointment/">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
