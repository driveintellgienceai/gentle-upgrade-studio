import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

export default function OfficeTour() {
  return (
    <Layout>
      <SEOHead title="Office Tour | Tooth Architect Dental Care in Sandy Springs, GA" description="Take a virtual tour inside Tooth Architect Dental Care's mid-century modern office in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/office-tour/" />
      <PageBanner title="Office Tour" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
              Inside Tooth Architect Dental Care Office.
            </p>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
