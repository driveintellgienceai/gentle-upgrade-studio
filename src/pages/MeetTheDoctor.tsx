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
      <SEOHead
        title="Meet Our Doctors | Tooth Architect Dental Care | Sandy Springs, GA"
        description="Meet Dr. Shiva Talebi, a dentist with a unique background in architecture offering holistic dental care in Sandy Springs, GA."
        canonical="https://www.tootharchitectdental.com/meet-the-doctor/"
      />
      <PageBanner title="DR. SHIVA TALEBI, D.M.D." subtitle="General Dentist" />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-10 md:gap-14">

            {/* Portrait — aspect-[3/4] keeps the frame elegant; sticky on scroll */}
            <div className="md:col-span-2">
              <div className="relative md:sticky md:top-28">
                <img
                  src={siteConfig.images.drTalebiPortrait}
                  alt={siteConfig.doctor}
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
                  style={{ objectPosition: "center 20%" }}
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#B1C6B7]/25 rounded-2xl -z-10 hidden md:block" />
              </div>
            </div>

            {/* Bio + credentials */}
            <div className="md:col-span-3 space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
              <p>
                Meet Dr. Shiva Talebi, a dentist with a unique background in architecture, offering patients a distinctive blend of talents. Dr. Talebi's journey began with a B.S. in Architecture from Georgia Tech, where she launched her career designing cutting-edge dental and medical offices. However, her true calling emerged when she discovered the profound satisfaction of hands-on dentistry and direct patient care. Her passion for improving lives through oral health led her to achieve a D.M.D. from the Dental College of Georgia.
              </p>
              <p>
                Dr. Talebi's practice is deeply rooted in holistic dentistry, emphasizing the interconnectedness of oral health and overall well-being. She takes the time to engage with each patient, delving into their habits and lifestyle to understand their unique dental and systemic needs. Recognizing the barriers of dental anxiety and judgment, she places patient comfort at the forefront and offers compassionate, empathetic care throughout all procedures. Her unwavering focus is on creating a pain-free and comfortable experience for every patient.
              </p>
              <p>
                Committed to excellence, Dr. Talebi provides state-of-the-art, bio-neutral, and minimally invasive solutions. Through continuous, rigorous education, she remains at the cutting edge of dental technology and the latest techniques. Beyond her practice, she generously volunteers her time and dental expertise at the Ben Massell Dental Clinic, where she serves the underprivileged in Atlanta.
              </p>
              <p>
                Outside of her professional life, Dr. Talebi is an avid explorer who maintains an active lifestyle, engaging in activities like acrylic/oil painting, cooking, and hiking. She has a passion for travel and has adventurously ventured through more than 20 countries, often as a solo backpacker.
              </p>
              <p>
                With a commitment to both patient well-being and a life rich in experiences, Dr. Shiva Talebi is not just a dentist but a compassionate guide on the journey to your best possible oral and overall health.
              </p>

              <div className="pt-4">
                <Button asChild className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-bold">
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
