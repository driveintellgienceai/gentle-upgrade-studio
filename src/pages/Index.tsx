import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Volume2, ScanLine, Minimize2, Diamond, Syringe, BrainCircuit, Sun, SmilePlus, Scissors } from "lucide-react";
import Layout from "@/components/layout/Layout";

const heroSlides = [
  {
    title: "Holistic Dentistry",
    subtitle: "A whole-body approach to oral health in Sandy Springs, GA",
    cta: "Meet Dr. Talebi",
    href: "/meet-the-doctor/",
  },
  {
    title: "Minimally Invasive Care",
    subtitle: "Preserving your natural tooth structure with conservative techniques",
    cta: "Our Services",
    href: "/gallery/",
  },
  {
    title: "Request an Appointment",
    subtitle: "New patients welcome — call (404) 666-8066",
    cta: "Book Now",
    href: "/request-an-appointment/",
  },
];

const services = [
  { title: "Second Opinions", href: "/second-options/", icon: Diamond, desc: "Get a fresh perspective on your dental treatment plan" },
  { title: "Botox", href: "/botox/", icon: Syringe, desc: "Therapeutic and cosmetic Botox® by a certified provider" },
  { title: "TMJ Treatment", href: "/tmj/", icon: BrainCircuit, desc: "Lasting relief from jaw pain and TMJ disorders" },
  { title: "Teeth Whitening", href: "/teeth-whitening/", icon: Sun, desc: "Professional whitening designed for your unique smile" },
  { title: "Clear Aligners", href: "/clear-aligners-reveal-suresmile/", icon: SmilePlus, desc: "SureSmile® and Reveal clear aligners for straighter teeth" },
  { title: "Enameloplasty", href: "/enameloplasty/", icon: Scissors, desc: "Conservative tooth contouring to restore your smile" },
];

const techFeatures = [
  { title: "Noise Reduction", icon: Volume2, desc: "Electric handpieces for a quieter, more comfortable experience" },
  { title: "Precision Scanning", icon: ScanLine, desc: "Digital impressions — no messy molds, just accuracy" },
  { title: "Minimally Invasive", icon: Minimize2, desc: "Conservative approaches that preserve your natural teeth" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-heading text-primary leading-tight">
              {heroSlides[0].title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-secondary-foreground/70 font-body leading-relaxed">
              {heroSlides[0].subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold">
                <Link to="/request-an-appointment/">Request Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 font-body">
                <Link to="/meet-the-doctor/">
                  Meet Dr. Talebi <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* Welcome */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading text-foreground"
            >
              Welcome to <span className="text-primary">Tooth Architect</span> Dental Care
            </motion.h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over a decade of experience, Dr. Shiva Talebi combines her background in architecture and passion for art with state-of-the-art dental care. At our Sandy Springs, Georgia office, we take a holistic, whole-body approach to oral health — prioritizing minimally invasive techniques that preserve your natural tooth structure.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're here for a routine cleaning or a complex treatment plan, you'll find a warm, judgement-free environment where your comfort and well-being come first.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={service.href}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://www.tootharchitectdental.com/wp-content/uploads/2023/11/Dr.-ShivaTalebi-745x1024.jpg"
                alt="Dr. Shiva Talebi"
                className="rounded-lg shadow-xl max-w-sm w-full mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading mb-6">
                Meet <span className="text-primary">Dr. Shiva Talebi</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Shiva Talebi combines her architectural background with a passion for dentistry, offering a unique approach to patient care. She graduated with the highest honors as a Gamma Beta Phi Honors Society member with recognition in Who's Who Among American Students from Georgia Tech and earned her DMD from the Dental College of Georgia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Talebi emphasizes holistic dentistry, prioritizing patient comfort and overall well-being. An active member of the ADA and HDA and recipient of the Hinman Scholarship, she remains committed to rigorous continuing education.
              </p>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-body">
                <Link to="/meet-the-doctor/">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-primary mb-12">
            Advanced Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feat.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading text-secondary-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-secondary-foreground/60">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Ready to <span className="text-primary">Transform</span> Your Smile?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a consultation with Dr. Talebi today. New patients call (404) 666-8066.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold">
            <Link to="/request-an-appointment/">Request an Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Spacer for mobile bottom bar */}
      <div className="lg:hidden h-14" />
    </Layout>
  );
}
