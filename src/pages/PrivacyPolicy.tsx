import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageBanner title="Privacy Policy" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-muted-foreground leading-relaxed font-body space-y-6">
          <p>
            Your privacy is important to us at Tooth Architect Dental Care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or our dental practice.
          </p>
          <h2 className="text-xl font-heading text-foreground">Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you fill out forms on our website, such as your name, email address, phone number, and any other information you choose to provide.
          </p>
          <h2 className="text-xl font-heading text-foreground">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, schedule appointments, improve our website and services, and communicate with you about our dental services.
          </p>
          <h2 className="text-xl font-heading text-foreground">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> or visit our office at 6667 Vernon Woods Dr NE, Ste B 30, Sandy Springs, GA 30328.
          </p>
        </div>
      </section>
      <div className="lg:hidden h-14" />
    </Layout>
  );
}
