import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

interface ServicePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  bodyText: string;
  relatedServices?: { label: string; href: string }[];
}

export default function ServicePageTemplate({
  title,
  metaTitle,
  metaDescription,
  canonical,
  bodyText,
  relatedServices,
}: ServicePageProps) {
  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} />
      <PageBanner title={title} subtitle="Home » Services" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4 font-body">
              {bodyText.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {relatedServices && relatedServices.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-lg font-heading text-foreground mb-4">Related Services</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="px-4 py-2 rounded-full text-sm font-body bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 p-6 sm:p-8 bg-card rounded-xl border border-border text-center">
              <p className="text-sm sm:text-base text-muted-foreground mb-4 font-body">
                Ready to learn more about {title.toLowerCase()}? Call us at{" "}
                <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-accent hover:underline font-semibold">
                  {siteConfig.phone.newPatients}
                </a>{" "}
                or stop by the Tooth Architect Dental Care office in Sandy Springs!
              </p>
              <Button asChild className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold">
                <Link to="/request-an-appointment/">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
