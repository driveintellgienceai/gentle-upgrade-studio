import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Volume2, ScanLine, Minimize2, Diamond, Syringe, BrainCircuit, Sun, SmilePlus, Scissors } from "lucide-react";
import Layout from "@/components/layout/Layout";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import CTABanner from "@/components/CTABanner";
import CredentialsBanner from "@/components/CredentialsBanner";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/config/siteConfig";

const heroSlides = [
  { image: siteConfig.images.heroSlide1, heading: "CONSERVATIVE DENTISTRY", text: "with a preventative approach and minimalist treatment planning" },
  { image: siteConfig.images.heroSlide2, heading: "OUR MISSION IS", text: "to provide the highest quality dentistry and patient care available" },
  { image: siteConfig.images.heroSlide3, heading: "DENTAL EXPERTS", text: "committed to the dental health of you and your family" },
];

const services = [
  { title: "Second Opinions", href: "/second-options/", icon: Diamond },
  { title: "Botox", href: "/botox/", icon: Syringe },
  { title: "TMJ Treatment", href: "/tmj/", icon: BrainCircuit },
  { title: "Teeth Whitening", href: "/teeth-whitening/", icon: Sun },
  { title: "Clear Aligners", href: "/clear-aligners-reveal-suresmile/", icon: SmilePlus },
  { title: "Enameloplasty", href: "/enameloplasty/", icon: Scissors },
];

const techFeatures = [
  { title: "Noise Reduction", icon: Volume2, desc: "Electric handpieces for a quieter, more comfortable experience" },
  { title: "Precision Scanning", icon: ScanLine, desc: "Digital impressions — no messy molds, just accuracy" },
  { title: "Minimally Invasive", icon: Minimize2, desc: "Conservative approaches that preserve your natural teeth" },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Layout>
      <SEOHead
        title="Dentist Sandy Springs, GA | Tooth Architect Dental Care | Holistic Dentistry"
        description="Conservative and holistic dentistry in Sandy Springs, GA. Dr. Shiva Talebi offers preventative dental care with minimalist treatment planning."
        canonical="https://www.tootharchitectdental.com/"
      />

      {/* Hero Carousel */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden rounded-b-2xl">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-brand-olive-dark/50" />
          </div>
        ))}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {heroSlides[currentSlide].heading}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto">
              {heroSlides[currentSlide].text}
            </p>
          </motion.div>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold">
              <Link to="/request-an-appointment/">Request a Consultation</Link>
            </Button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <GoogleReviewBadge className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-foreground" />
          </div>
          {/* Slide dots */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground leading-tight"
            >
              Welcome to Tooth Architect Dental Care
            </motion.h2>
            <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
              Welcome to Tooth Architect Dental Care, home to Atlanta's Dental Architect! Dr. Shiva Talebi knows you are one of a kind. You'll find no other dentist comparable to Dr. Talebi! Her work as an architect injects a fresh and modern perspective into dentistry. As she designed dental practices for private and military offices, Dr. Talebi had a brilliant epiphany: She would exploit her architectural and creative passion to directly care for others in this exacting, fulfilling field of dentistry. Now, she leads Tooth Architect Dental Care of Sandy Springs her way – with a commitment to conservative and holistic dentistry. A preventative approach employing minimalist treatment planning rules the day.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-center mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={service.href}>
                  <Card className="h-full hover:shadow-md hover:border-accent/30 transition-all duration-300 group rounded-xl">
                    <CardContent className="p-6">
                      <service.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-heading font-semibold mb-1">{service.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Dr. Talebi */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={siteConfig.images.drTalebiPortrait}
                alt={siteConfig.doctor}
                className="rounded-xl shadow-xl w-full max-w-sm mx-auto"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-6">
                Meet {siteConfig.doctorShort}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-body">
                Meet Dr. Shiva Talebi, a dentist with a unique background in architecture, offering patients a distinctive blend of talents. Dr. Talebi's journey began with a B.S. in Architecture from Georgia Tech, where she launched her career designing cutting-edge dental and medical offices. However, her true calling emerged when she discovered the profound satisfaction of hands-on dentistry and direct patient care. Her passion for improving lives through oral health led her to achieve a D.M.D. from the Dental College of Georgia. Dr. Talebi's practice is deeply rooted in holistic dentistry, emphasizing the interconnectedness of oral health and overall well-being. She generously volunteers her time and dental expertise at the Ben Massell Dental Clinic.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body">
                <Link to="/meet-the-doctor/">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-center mb-10">
            Advanced Technology
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {techFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feat.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CredentialsBanner />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto font-body">
            Schedule a consultation with {siteConfig.doctorShort} today. New patients call{" "}
            <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-accent hover:underline font-semibold">{siteConfig.phone.newPatients}</a>.
          </p>
          <Button asChild size="lg" className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold">
            <Link to="/request-an-appointment/">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </Layout>
  );
}
