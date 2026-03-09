import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const reviews = [
  { name: "Michael R.", rating: 5, text: "Dr. Talebi is incredibly thorough and takes the time to explain everything. The office is beautiful and the staff is always friendly. Best dental experience I've ever had!" },
  { name: "Sarah K.", rating: 5, text: "I was nervous about going to the dentist, but Dr. Talebi and her team made me feel so comfortable. She takes a holistic approach that I really appreciate. Highly recommend!" },
  { name: "James L.", rating: 5, text: "The level of care and attention to detail at Tooth Architect is unmatched. Dr. Talebi's background in architecture really shows in her precise and artistic approach to dentistry." },
  { name: "Amanda W.", rating: 5, text: "I've been a patient for over 5 years and wouldn't go anywhere else. Dr. Talebi is honest, skilled, and truly cares about her patients' well-being." },
  { name: "David P.", rating: 5, text: "Dr. Talebi did an amazing job with my teeth whitening. The results were natural and exactly what I wanted. Her artistic eye makes all the difference!" },
  { name: "Jennifer M.", rating: 5, text: "I came in for a second opinion and Dr. Talebi was incredibly thorough. She took the time to review everything and gave me options I didn't know existed. So grateful!" },
  { name: "Robert H.", rating: 5, text: "The TMJ treatment I received from Dr. Talebi changed my life. After years of jaw pain and headaches, I finally have relief. Can't thank her enough." },
  { name: "Lisa T.", rating: 5, text: "Beautiful office, wonderful staff, and exceptional dental care. Dr. Talebi is patient and gentle — everything you want in a dentist." },
];

export default function Testimonials() {
  return (
    <Layout>
      <SEOHead title="Testimonials | Tooth Architect Dental Care | Sandy Springs, GA" description="Read patient testimonials from Tooth Architect Dental Care in Sandy Springs, GA. 4.9 stars from 195 Google reviews." canonical="https://www.tootharchitectdental.com/testimonials/" />
      <PageBanner title="Testimonials" subtitle={`Google Reviews — Rating: ${siteConfig.google.rating} stars (${siteConfig.google.reviewCount} reviews)`} />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reviews.map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full rounded-xl">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 font-body">"{review.text}"</p>
                    <p className="font-heading font-semibold text-sm sm:text-base text-foreground">{review.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={siteConfig.google.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline font-body">
              <Star className="h-4 w-4 fill-accent" /> View all {siteConfig.google.reviewCount} reviews on Google
            </a>
          </div>
        </div>
      </section>
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
