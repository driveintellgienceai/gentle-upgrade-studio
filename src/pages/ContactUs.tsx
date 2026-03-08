import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <Layout>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl sm:text-2xl font-heading mb-4 sm:mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" placeholder="Full Name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="email@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Contact Number *</Label>
                  <Input id="phone" type="tel" placeholder="(404) 555-1234" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="comments">Comments *</Label>
                  <Textarea id="comments" placeholder="How can we help you?" rows={5} className="mt-1" />
                </div>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold w-full">
                  Submit
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading mb-4 sm:mb-6">Get in Touch</h2>
                <div className="space-y-4 sm:space-y-5 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">Phone</p>
                      <p className="text-sm sm:text-base">New Patients: <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a></p>
                      <p className="text-sm sm:text-base">Existing Patients: <a href="tel:+14042557047" className="text-primary hover:underline">(404) 255-7047</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">Address</p>
                      <a href="https://maps.app.goo.gl/EtukWtX8fpsymwJN9" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-sm sm:text-base">
                        227 Sandy Springs Pl NE, Suite 390<br />Sandy Springs, GA 30328
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">Office Hours</p>
                      <p className="text-sm sm:text-base">Mon–Thu: 8:00 AM – 4:00 PM</p>
                      <p className="text-sm sm:text-base">Fri: 9:00 AM – 2:00 PM (by appointment)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0!2d-84.3786!3d33.9326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzU3LjQiTiA4NMKwMjInNDMuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tooth Architect Dental Care Location"
                  className="sm:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
