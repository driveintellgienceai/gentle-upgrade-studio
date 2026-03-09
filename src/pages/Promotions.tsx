import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SEOHead from "@/components/SEOHead";

export default function Promotions() {
  return (
    <Layout>
      <SEOHead title="Promotions | Special Offers | Tooth Architect Dental Care | Georgia" description="Check out current promotions and special offers at Tooth Architect Dental Care in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/promotions/" />
      <PageBanner title="Promotions" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base text-muted-foreground font-body">Coming Soon</p>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
