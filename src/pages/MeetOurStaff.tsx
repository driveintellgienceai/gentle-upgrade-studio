import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

export default function MeetOurStaff() {
  return (
    <Layout>
      <SEOHead title="Meet Our Staff | Tooth Architect Dental Care | Sandy Springs, GA" description="Meet the friendly and experienced dental team at Tooth Architect Dental Care in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/meet-our-staff/" />
      <PageBanner title="Meet Our Staff" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
            <div>
              <h3 className="text-lg font-heading text-foreground mb-2">PATTY – FRONT DESK</h3>
              <p>'I can't wait to be a Nana to my first grandbaby and hope to have a dozen more by the time I retire!' Patty moved to Atlanta eight years ago from Delaware.</p>
            </div>
            <div>
              <h3 className="text-lg font-heading text-foreground mb-2">MICHELE – DENTAL ASSISTANT</h3>
              <p>Her favorite phrase: 'I'll sleep when I'm dead'. Michele is originally from Washington D.C.</p>
            </div>
            <div>
              <h3 className="text-lg font-heading text-foreground mb-2">SUSAN – HYGIENIST</h3>
              <p>Susan, with a wealth of experience from her journey as a traveling hygienist working in various dental offices.</p>
            </div>
            <div>
              <h3 className="text-lg font-heading text-foreground mb-2">MERCEDES – DENTAL ASSISTANT</h3>
              <p>Meet Mercedes, a dental assistant with 7 years of experience.</p>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
