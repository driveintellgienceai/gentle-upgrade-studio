import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, ScanLine, Minimize2, Diamond, Syringe, BrainCircuit, Sun, SmilePlus, Scissors } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/CTABanner";
import CredentialsBanner from "@/components/CredentialsBanner";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/config/siteConfig";

const heroSlides = [
  {
    image: siteConfig.images.heroSlide1,
    heading: "CONSERVATIVE DENTISTRY",
    text: "with a preventative approach and minimalist treatment planning",
    objectPosition: "center center",
  },
  {
    image: siteConfig.images.heroSlide2,
    heading: "OUR MISSION IS",
    text: "to provide the highest quality dentistry and patient care available",
    objectPosition: "center center",
  },
  {
    image: siteConfig.images.heroSlide3,
    heading: "DENTAL EXPERTS",
    text: "committed to the dental health of you and your family",
    objectPosition: "center 40%",
  },
];

const services = [
  { title: "Second Opinions", href: "/second-options/", icon: Diamond, desc: "A fresh perspective on your treatment plan" },
  { title: "Botox", href: "/botox/", icon: Syringe, desc: "Therapeutic and cosmetic solutions by a certified provider" },
  { title: "TMJ Treatment", href: "/tmj/", icon: BrainCircuit, desc: "Lasting relief from jaw pain and headaches" },
  { title: "Teeth Whitening", href: "/teeth-whitening/", icon: Sun, desc: "Professional whitening tailored to your smile" },
  { title: "Clear Aligners", href: "/clear-aligners-reveal-suresmile/", icon: SmilePlus, desc: "SureSmile® and Reveal clear aligners" },
  { title: "Enameloplasty", href: "/enameloplasty/", icon: Scissors, desc: "Conservative tooth contouring without drilling" },
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
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Layout>
      <SEOHead
        title="Dentist Sandy Springs, GA | Tooth Architect Dental Care | Holistic Dentistry"
        description="Conservative and holistic dentistry in Sandy Springs, GA. Dr. Shiva Talebi offers preventative dental care with minimalist treatment planning."
        canonical="https://www.tootharchitectdental.com/"
      />

      {/* ─── Hero Carousel ─────────────────────────────────────────────── */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[72vh] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
              style={{ objectPosition: slide.objectPosition }}
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Gradient: clear at top, darkens at bottom where text lives */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5F5B35]/85 via-[#5F5B35]/25 to-transparent" />
          </div>
        ))}

        {/* Text — bottom-left, editorial */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-20 pb-10 sm:pb-14 md:pb-16">
          {/* Review badge */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-yellow-400 text-sm leading-none">★</span>
              <span className="text-white text-sm font-body font-semibold">{siteConfig.google.rating}</span>
              <span className="text-white/75 text-sm font-body">· {siteConfig.google.reviewCount} Google Reviews</span>
            </div>
          </div>

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight tracking-wide">
              {heroSlides[currentSlide].heading}
            </h1>
            <p className="mt-3 text-base md:text-xl text-white/85 font-body max-w-xl">
              {heroSlides[currentSlide].text}
            </p>
          </motion.div>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-semibold text-base px-8 rounded-lg shadow-lg">
              <Link to="/request-an-appointment/">Request a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 font-body text-base px-8 rounded-lg backdrop-blur-sm bg-transparent">
              <Link to="/meet-the-doctor/">Meet Dr. Talebi</Link>
            </Button>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2.5 mt-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-white scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Welcome ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35] leading-tight"
            >
              Welcome to Tooth Architect Dental Care
            </motion.h2>
            <div className="w-16 h-px bg-[#B1C6B7] mx-auto my-6" />
            <p className="text-base sm:text-lg text-[#7F7947] leading-relaxed font-body">
              Welcome to Tooth Architect Dental Care, home to Atlanta's Dental Architect! Dr. Shiva Talebi knows you are one of a kind. You'll find no other dentist comparable to Dr. Talebi! Her work as an architect injects a fresh and modern perspective into dentistry. As she designed dental practices for private and military offices, Dr. Talebi had a brilliant epiphany: She would exploit her architectural and creative passion to directly care for others in this exacting, fulfilling field of dentistry. Now, she leads Tooth Architect Dental Care of Sandy Springs her way – with a commitment to conservative and holistic dentistry. A preventative approach employing minimalist treatment planning rules the day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F1DDBC]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35]">Our Services</h2>
            <div className="w-16 h-px bg-[#B1C6B7] mx-auto mt-4" />
          </div>
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
                  <div className="h-full bg-white rounded-2xl border border-[#B1C6B7]/20 p-8 hover:shadow-lg hover:-translate-y-1 hover:border-[#D47D45]/20 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#B1C6B7]/20 flex items-center justify-center mb-5 group-hover:bg-[#B1C6B7]/35 transition-colors">
                      <service.icon className="h-7 w-7 text-[#5F5B35]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#5F5B35] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#7F7947] font-body leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-[#5F5B35] text-[#5F5B35] hover:bg-[#5F5B35] hover:text-white font-body px-8 rounded-lg">
              <Link to="/general-dentistry/">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Meet Dr. Talebi ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <img
                  src={siteConfig.images.drTalebiPortrait}
                  alt={siteConfig.doctor}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]"
                  loading="lazy"
                />
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#B1C6B7]/25 rounded-2xl -z-10 hidden md:block" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35] mb-4">
                Meet {siteConfig.doctorShort}
              </h2>
              <div className="w-12 h-px bg-[#D47D45] mb-6" />
              <p className="text-base text-[#7F7947] leading-relaxed mb-6 font-body">
                Meet Dr. Shiva Talebi, a dentist with a unique background in architecture, offering patients a distinctive blend of talents. Dr. Talebi's journey began with a B.S. in Architecture from Georgia Tech, where she launched her career designing cutting-edge dental and medical offices. However, her true calling emerged when she discovered the profound satisfaction of hands-on dentistry and direct patient care. Her passion for improving lives through oral health led her to achieve a D.M.D. from the Dental College of Georgia. Dr. Talebi's practice is deeply rooted in holistic dentistry, emphasizing the interconnectedness of oral health and overall well-being. She generously volunteers her time and dental expertise at the Ben Massell Dental Clinic.
              </p>
              <Button asChild className="border-[#5F5B35] text-[#5F5B35] hover:bg-[#5F5B35] hover:text-white font-body px-8 rounded-lg" variant="outline">
                <Link to="/meet-the-doctor/">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Technology — dark olive section ───────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#5F5B35]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white">Advanced Technology</h2>
            <div className="w-16 h-px bg-[#F1DDBC]/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {techFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F1DDBC]/15 flex items-center justify-center mx-auto mb-5">
                  <feat.icon className="h-8 w-8 text-[#F1DDBC]" />
                </div>
                <h3 className="text-lg font-heading text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-white/70 font-body leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Credentials ───────────────────────────────────────────────── */}
      <div className="bg-[#B1C6B7]/10">
        <CredentialsBanner />
      </div>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35] mb-4">
            Ready to Transform Your Smile?
          </h2>
          <div className="w-12 h-px bg-[#D47D45] mx-auto mb-6" />
          <p className="text-base text-[#7F7947] mb-8 max-w-xl mx-auto font-body">
            Schedule a consultation with {siteConfig.doctorShort} today. New patients call{" "}
            <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-[#D47D45] hover:underline font-semibold">{siteConfig.phone.newPatients}</a>.
          </p>
          <Button asChild size="lg" className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-semibold text-base px-10 rounded-lg shadow-lg">
            <Link to="/request-an-appointment/">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </Layout>
  );
}
