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
        title="Meet Dr. Shiva Talebi | Tooth Architect Dental Care | Sandy Springs, GA"
        description="Meet Dr. Shiva Talebi, a dentist with a unique background in architecture offering holistic dental care in Sandy Springs, GA."
        canonical="https://www.tootharchitectdental.com/meet-the-doctor/"
      />
      <PageBanner title="DR. SHIVA TALEBI, D.M.D." subtitle="General Dentist" />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">

            {/* Portrait — sticky on desktop */}
            <div className="md:col-span-2">
              <img
                src={siteConfig.images.drTalebiPortrait}
                alt={siteConfig.doctor}
                className="rounded-xl shadow-xl w-full max-w-sm mx-auto md:sticky md:top-24"
                loading="lazy"
              />
            </div>

            {/* Bio + credentials */}
            <div className="md:col-span-3 space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
              <p>
                Since opening Tooth Architect Dental Care in 2013, Dr. Shiva Talebi has been blending art, science and holistic philosophies for a unique, patient-centered dental experience. Her journey began with a B.S. in Architecture from the Georgia Institute of Technology, where she designed cutting-edge dental and medical offices.
              </p>
              <p>
                Her true calling emerged when she discovered the profound satisfaction of hands-on dentistry and direct patient care. She earned her D.M.D. from the Dental College of Georgia at Augusta University, graduating with the highest honors as a Gamma Beta Phi Honors Society member, with recognition in Who's Who Among American Students.
              </p>
              <p>
                Dr. Talebi's architectural background gives her an exceptional eye for detail and structure, which she applies to every aspect of dental care — from designing treatment plans to performing precise procedures. She approaches dentistry not just as a science, but as an art form.
              </p>
              <p>
                Her practice is deeply rooted in holistic dentistry, focusing on the overall well-being of her patients rather than just their dental health. She believes in treating the whole person, taking into account how oral health impacts overall health and vice versa.
              </p>

              <h3 className="font-heading text-[#5F5B35] text-lg pt-2">Professional Affiliations</h3>
              <ul className="list-none space-y-1.5">
                {siteConfig.affiliations.map((affiliation) => (
                  <li key={affiliation} className="flex items-start gap-2">
                    <span className="text-[#D47D45] mt-1 shrink-0">–</span>
                    <span>{affiliation}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-[#5F5B35] text-lg pt-2">Community Involvement</h3>
              <p>
                Beyond her practice, Dr. Talebi is passionate about giving back. She volunteers at the Ben Massell Dental Clinic, providing dental care to those in need. She is also an AmeriCorps alumna and serves through Jewish Family & Career Services (JFCS), reflecting her belief that everyone deserves access to quality dental care.
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
