import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SEOHead from "@/components/SEOHead";

export default function CookiePolicy() {
  return (
    <Layout>
      <SEOHead title="Cookie Policy | Tooth Architect Dental Care" description="Cookie policy for Tooth Architect Dental Care website." canonical="https://www.tootharchitectdental.com/cookie-policy/" />
      <PageBanner title="Cookie Policy" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-muted-foreground leading-relaxed font-body space-y-6">
          <p>
            This Cookie Policy explains how Tooth Architect Dental Care uses cookies and similar technologies when you visit our website.
          </p>
          <h2 className="text-xl font-heading text-foreground">What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>
          <h2 className="text-xl font-heading text-foreground">How We Use Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. By continuing to use our website, you consent to our use of cookies.
          </p>
          <h2 className="text-xl font-heading text-foreground">Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some functionality may no longer be available.
          </p>
          <h2 className="text-xl font-heading text-foreground">Contact Us</h2>
          <p>
            If you have questions about our Cookie Policy, please contact us at <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a>.
          </p>
        </div>
      </section>
      <div className="lg:hidden h-14" />
    </Layout>
  );
}
