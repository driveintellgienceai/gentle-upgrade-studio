import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MeetTheDoctor() {
  return (
    <Layout>
      <PageBanner title="Meet the Doctor" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <img
                src="https://www.tootharchitectdental.com/wp-content/uploads/2023/11/Dr.-ShivaTalebi-745x1024.jpg"
                alt="Dr. Shiva Talebi"
                className="rounded-lg shadow-xl w-full max-w-[280px] sm:max-w-sm mx-auto md:sticky md:top-24"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-3 space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading text-foreground">
                Dr. Shiva Talebi, DMD
              </h2>
              <p>
                Since opening Tooth Architect Dental Care back in 2013, Dr. Shiva Talebi has been blending art, science and holistic philosophies together for a unique patient centered dental experience. As a graduate of the Georgia Institute of Technology with a degree in architecture and a Doctor of Dental Medicine (DMD) from the Dental College of Georgia at Augusta University, Dr. Talebi brings a distinctive perspective to dentistry.
              </p>
              <p>
                Her architectural background gives her an exceptional eye for detail and structure, which she applies to every aspect of dental care—from designing treatment plans to performing precise procedures. This unique combination of skills allows her to approach dental care not just as a science, but as an art form, ensuring that each patient receives care that is both functionally sound and aesthetically pleasing.
              </p>
              <p>
                Dr. Talebi is deeply committed to holistic dentistry, focusing on the overall well-being of her patients rather than just their dental health. She believes in treating the whole person, taking into account how oral health impacts overall health and vice versa. This approach has earned her a loyal patient base who appreciates her thoroughness and compassion.
              </p>
              <p>
                Throughout her career, Dr. Talebi has accumulated numerous accolades. She graduated with the highest honors, was a member of the Gamma Beta Phi Honor Society, and received recognition in Who's Who Among Students in American Universities and Colleges. She is also a proud recipient of the prestigious Hinman Scholarship.
              </p>
              <p>
                As an active member of the American Dental Association (ADA), the Holistic Dental Association (HDA), and other professional organizations, Dr. Talebi stays at the forefront of dental advances and best practices.
              </p>
              <h3 className="text-lg sm:text-xl font-heading text-foreground pt-2 sm:pt-4">Community Involvement</h3>
              <p>
                Beyond her practice, Dr. Talebi is passionate about giving back to the community. She volunteers at the Ben Massell Dental Clinic providing dental care to those in need. Her commitment to community service reflects her belief that everyone deserves access to quality dental care.
              </p>
              <div className="pt-4 sm:pt-6">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold w-full sm:w-auto">
                  <Link to="/request-an-appointment/">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
