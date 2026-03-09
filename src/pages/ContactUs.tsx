import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ContactUs() {
  return (
    <Layout>
      <SEOHead title="Contact Us | Tooth Architect Dental Care | Sandy Springs, GA" description="Contact Tooth Architect Dental Care in Sandy Springs, GA. Call new patients (404) 666-8066 or existing patients (404) 255-7047." canonical="https://www.tootharchitectdental.com/contact-us/" />
      <PageBanner title="Contact Us" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading mb-4">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground font-body">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p>New Patients: <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-accent hover:underline font-semibold">{siteConfig.phone.newPatients}</a></p>
                      <p>Existing Patients: <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="text-accent hover:underline font-semibold">{siteConfig.phone.existingPatients}</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      {siteConfig.address.street}, {siteConfig.address.suite}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p>{siteConfig.hours.weekdays}</p>
                      <p>{siteConfig.hours.friday}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1!2d-84.36!3d33.952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f511fbb3e84e8f%3A0x1!2s6667+Vernon+Woods+Dr+NE%2C+Sandy+Springs%2C+GA+30328!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tooth Architect Dental Care Location"
                />
              </div>
            </div>
            {/* Quick message form */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading mb-4">Send a Message</h2>
              <form className="space-y-4 font-body" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label>Your Name *</Label>
                  <Input placeholder="Full Name" className="mt-1" />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input type="email" placeholder="email@example.com" className="mt-1" />
                </div>
                <div>
                  <Label>Phone *</Label>
                  <Input type="tel" placeholder="(404) 555-1234" className="mt-1" />
                </div>
                <div>
                  <Label>Message</Label>
                  <Textarea rows={5} placeholder="How can we help you?" className="mt-1" />
                </div>
                <Button type="submit" className="bg-brand-rust text-white hover:bg-brand-rust/90 font-body font-bold w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
