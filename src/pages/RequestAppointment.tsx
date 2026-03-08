import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function RequestAppointment() {
  return (
    <Layout>
      <PageBanner title="Request an Appointment" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xl sm:text-2xl font-heading mb-4 sm:mb-6">Appointment Form</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label>Appointment Date *</Label>
                  <Input type="date" className="mt-1" />
                </div>
                <div>
                  <Label>Time *</Label>
                  <Select>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Are You A New Patient? *</Label>
                  <Select>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Your Name *</Label>
                  <Input placeholder="Full Name" className="mt-1" />
                </div>
                <div>
                  <Label>Email Address *</Label>
                  <Input type="email" placeholder="email@example.com" className="mt-1" />
                </div>
                <div>
                  <Label>Contact Number *</Label>
                  <Input type="tel" placeholder="(404) 555-1234" className="mt-1" />
                </div>
                <div>
                  <Label>Comments *</Label>
                  <Textarea placeholder="Any additional information..." rows={4} className="mt-1" />
                </div>
                <p className="text-xs text-muted-foreground">
                  By submitting the above form you agree and accept our{" "}
                  <Link to="/privacy-policy/" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold w-full">
                  Submit
                </Button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4">Call Us</h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <p>New Patients: <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <p>Existing Patients: <a href="tel:+14042557047" className="text-primary hover:underline">(404) 255-7047</a></p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-heading mb-2 sm:mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" /> Office Hours
                </h3>
                <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <p>Monday: 08:00 AM – 04:00 PM</p>
                  <p>Tuesday: 08:00 AM – 04:00 PM</p>
                  <p>Wednesday: 08:00 AM – 04:00 PM</p>
                  <p>Thursday: 08:00 AM – 04:00 PM</p>
                  <p>Friday: 09:00 AM – 02:00 PM <span className="text-xs">(By Appointment Only)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
