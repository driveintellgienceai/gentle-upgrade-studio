import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
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

      {/* Olive banner — creates visual drama and brand presence on every service page */}
      <section className="bg-[#5F5B35] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#B1C6B7] text-sm font-body tracking-widest uppercase mb-3"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-tight max-w-4xl mx-auto"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Body — controlled reading width for long-form comfort */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-base sm:text-lg text-[#7F7947] leading-relaxed space-y-5 font-body">
              {bodyText.split("\n").filter(Boolean).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {relatedServices && relatedServices.length > 0 && (
              <div className="mt-12 pt-10 border-t border-[#B1C6B7]/30">
                <h3 className="text-lg font-heading text-[#5F5B35] mb-5">Related Services</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="px-4 py-2 rounded-full text-sm font-body bg-[#F1DDBC]/30 text-[#5F5B35] hover:bg-[#D47D45] hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA — warm linen wash, centered call to action */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F1DDBC]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-[#5F5B35] mb-3">Ready to learn more?</h2>
          <div className="w-12 h-px bg-[#D47D45] mx-auto mb-6" />
          <p className="text-base text-[#7F7947] mb-8 font-body max-w-lg mx-auto">
            Call us at{" "}
            <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-[#D47D45] font-semibold hover:underline">
              {siteConfig.phone.newPatients}
            </a>{" "}
            or request a consultation online.
          </p>
          <Button asChild size="lg" className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-semibold text-base px-10 rounded-lg shadow-md">
            <Link to="/request-an-appointment/">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
