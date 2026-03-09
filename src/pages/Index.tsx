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

// FIX #2/#3: Natural object-position per image; no tracking override on font
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
  { title: "Second Opinions",  href: "/second-options/",              icon: Diamond,      desc: "A fresh perspective on your treatment plan" },
  { title: "Botox",            href: "/botox/",                       icon: Syringe,      desc: "Therapeutic and cosmetic solutions by a certified provider" },
  { title: "TMJ Treatment",    href: "/tmj/",                         icon: BrainCircuit, desc: "Lasting relief from jaw pain and headaches" },
  { title: "Teeth Whitening",  href: "/teeth-whitening/",             icon: Sun,          desc: "Professional whitening tailored to your smile" },
  { title: "Clear Aligners",   href: "/clear-aligners-reveal-suresmile/", icon: SmilePlus, desc: "SureSmile® and Reveal clear aligners" },
  { title: "Enameloplasty",    href: "/enameloplasty/",               icon: Scissors,     desc: "Conservative tooth contouring without drilling" },
];

const techFeatures = [
  { title: "Noise Reduction",    icon: Volume2,   desc: "Electric handpieces for a quieter, more comfortable experience" },
  { title: "Precision Scanning", icon: ScanLine,  desc: "Digital impressions — no messy molds, just accuracy" },
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

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      {/* FIX #10/11: Responsive height — taller on larger screens, never clips content */}
      <section className="relative overflow-hidden" style={{ minHeight: "min(72vh, 680px)", height: "clamp(420px, 65vh, 800px)" }}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ objectPosition: slide.objectPosition }}
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* FIX #2: Neutral dark gradient — doesn't tint the photography green */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Text container — bottom-left, editorial */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 sm:px-10 md:px-16 lg:px-20 pb-8 sm:pb-12 md:pb-16">

          {/* FIX #4: Linen star instead of off-brand yellow; FIX #16: warm linen badge bg */}
          <div className="mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 bg-[#F1DDBC]/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
              <span className="text-[#F1DDBC] text-sm leading-none">★</span>
              <span className="text-white text-sm font-body font-semibold">{siteConfig.google.rating}</span>
              <span className="text-white/75 text-sm font-body">· {siteConfig.google.reviewCount} Google Reviews</span>
            </div>
          </div>

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            {/* FIX #3: Removed tracking-wide — Mostra Nuova has elegant natural letterforms */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
              {heroSlides[currentSlide].heading}
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-xl text-white/85 font-body max-w-xl">
              {heroSlides[currentSlide].text}
            </p>
          </motion.div>

          {/* CTAs — FIX #8: Primary CTA rust, secondary ghost-white */}
          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-semibold text-sm sm:text-base px-6 sm:px-8 rounded-lg shadow-lg">
              <Link to="/request-an-appointment/">Request a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/55 text-white hover:bg-white/10 font-body text-sm sm:text-base px-6 sm:px-8 rounded-lg backdrop-blur-sm bg-transparent">
              <Link to="/meet-the-doctor/">Meet Dr. Talebi</Link>
            </Button>
          </div>

          {/* FIX #11: Dots with reduced mt so they don't push content below bottom */}
          <div className="flex gap-2.5 mt-5 sm:mt-6">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-white scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WELCOME ───────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35] leading-tight"
            >
              Welcome to Tooth Architect Dental Care
            </motion.h2>
            {/* FIX #17: Thin architectural divider — brand-precise */}
            <div className="w-12 h-px bg-[#B1C6B7] mx-auto my-5 sm:my-6" />
            {/* FIX #1: Olive text (#5F5B35) = 6.5:1 on white — passes WCAG AA */}
            <p className="text-base sm:text-lg text-[#5F5B35]/80 leading-relaxed font-body">
              Welcome to Tooth Architect Dental Care, home to Atlanta's Dental Architect! Dr. Shiva Talebi knows you are one of a kind. You'll find no other dentist comparable to Dr. Talebi! Her work as an architect injects a fresh and modern perspective into dentistry. As she designed dental practices for private and military offices, Dr. Talebi had a brilliant epiphany: She would exploit her architectural and creative passion to directly care for others in this exacting, fulfilling field of dentistry. Now, she leads Tooth Architect Dental Care of Sandy Springs her way – with a commitment to conservative and holistic dentistry. A preventative approach employing minimalist treatment planning rules the day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────────────── */}
      {/* Linen wash at 8% — brand-appropriate subtle warmth */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#F1DDBC]/8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35]">Our Services</h2>
            <div className="w-12 h-px bg-[#B1C6B7] mx-auto mt-4" />
          </div>

          {/* FIX #13: p-6 md:p-8 on cards; FIX #6: rounded-xl (12px) for architectural precision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={service.href}>
                  <div className="h-full bg-white rounded-xl border border-[#B1C6B7]/25 p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 hover:border-[#D47D45]/25 transition-all duration-300 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#B1C6B7]/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#B1C6B7]/35 transition-colors">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#5F5B35]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading text-[#5F5B35] mb-2">{service.title}</h3>
                    {/* FIX #1: Olive body text at 80% opacity — readable, on-brand */}
                    <p className="text-sm text-[#5F5B35]/70 font-body leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FIX #8: Text link with arrow instead of full olive outline button */}
          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/general-dentistry/"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-body font-medium text-[#5F5B35] hover:text-[#D47D45] transition-colors group"
            >
              View All Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MEET DR. TALEBI ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* FIX #12: aspect-[4/3] on mobile, aspect-[3/4] on md+ */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <img
                  src={siteConfig.images.drTalebiPortrait}
                  alt={siteConfig.doctor}
                  className="w-full max-w-sm md:max-w-md mx-auto rounded-xl object-cover object-top aspect-[4/3] md:aspect-[3/4]"
                  loading="lazy"
                />
                {/* FIX #7: shadow-xl not shadow-2xl; FIX #6: rounded-xl */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#B1C6B7]/25 rounded-xl -z-10 hidden md:block" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35] mb-4">
                Meet {siteConfig.doctorShort}
              </h2>
              <div className="w-10 h-px bg-[#D47D45] mb-5 sm:mb-6" />
              {/* FIX #1: Olive at 80% opacity — passes WCAG, warm not harsh */}
              <p className="text-base text-[#5F5B35]/80 leading-relaxed mb-6 font-body">
                Meet Dr. Shiva Talebi, a dentist with a unique background in architecture, offering patients a distinctive blend of talents. Dr. Talebi's journey began with a B.S. in Architecture from Georgia Tech, where she launched her career designing cutting-edge dental and medical offices. However, her true calling emerged when she discovered the profound satisfaction of hands-on dentistry and direct patient care. Her passion for improving lives through oral health led her to achieve a D.M.D. from the Dental College of Georgia. Dr. Talebi's practice is deeply rooted in holistic dentistry, emphasizing the interconnectedness of oral health and overall well-being. She generously volunteers her time and dental expertise at the Ben Massell Dental Clinic.
              </p>
              {/* Secondary action: subtle olive link style, not a full CTA */}
              <Link
                to="/meet-the-doctor/"
                className="inline-flex items-center gap-2 font-body font-medium text-sm sm:text-base text-[#5F5B35] hover:text-[#D47D45] transition-colors group border border-[#5F5B35]/30 px-5 py-2.5 rounded-lg hover:border-[#D47D45]/40"
              >
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY ────────────────────────────────────────────────── */}
      {/* Dark olive section — brand's richest color creates visual anchor */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#5F5B35]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white">Advanced Technology</h2>
            <div className="w-12 h-px bg-[#F1DDBC]/35 mx-auto mt-4" />
          </div>
          {/* FIX #14: sm:grid-cols-2 lg:grid-cols-3 — proper 3-breakpoint response */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {techFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                {/* FIX #6: rounded-xl instead of rounded-2xl */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#F1DDBC]/12 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <feat.icon className="h-7 w-7 sm:h-8 sm:h-8 text-[#F1DDBC]" />
                </div>
                <h3 className="text-base sm:text-lg font-heading text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-white/70 font-body leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ───────────────────────────────────────────────── */}
      <div className="bg-[#B1C6B7]/10">
        <CredentialsBanner />
      </div>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      {/* FIX #15: max-w on paragraph controlled for all screen widths */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-[#5F5B35] mb-4">
            Ready to Transform Your Smile?
          </h2>
          <div className="w-10 h-px bg-[#D47D45] mx-auto mb-5 sm:mb-6" />
          <p className="text-sm sm:text-base text-[#5F5B35]/80 mb-7 sm:mb-8 max-w-sm sm:max-w-lg mx-auto font-body">
            Schedule a consultation with {siteConfig.doctorShort} today. New patients call{" "}
            <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="text-[#D47D45] hover:underline font-semibold">{siteConfig.phone.newPatients}</a>.
          </p>
          <Button asChild size="lg" className="bg-[#D47D45] text-white hover:bg-[#D47D45]/90 font-body font-semibold text-sm sm:text-base px-8 sm:px-10 rounded-lg shadow-md">
            <Link to="/request-an-appointment/">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Mobile nav spacer */}
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
