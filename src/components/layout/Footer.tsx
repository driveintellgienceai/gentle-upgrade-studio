import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Meet the Doctor", href: "/meet-the-doctor/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Patient Resources", href: "/patient-resources/" },
  { label: "Blog", href: "/blog/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
];

const servicesCol1 = [
  { label: "General Dentistry", href: "/general-dentistry/" },
  { label: "Exam & Cleaning", href: "/exam-cleaning/" },
  { label: "Teeth Whitening", href: "/teeth-whitening/" },
  { label: "Veneers", href: "/veneers/" },
  { label: "Enameloplasty", href: "/enameloplasty/" },
  { label: "Bonding", href: "/bonding/" },
  { label: "Crowns", href: "/crowns/" },
  { label: "Dental Implant Crowns", href: "/dental-implant-crowns/" },
  { label: "Tooth Colored Fillings", href: "/tooth-colored-fillings/" },
  { label: "Dental Bridges", href: "/dental-bridges/" },
];

const servicesCol2 = [
  { label: "Clear Aligners", href: "/clear-aligners-reveal-suresmile/" },
  { label: "Digital X-Rays", href: "/digital-x-rays/" },
  { label: "Oral Cancer Screening", href: "/oral-cancer-screening/" },
  { label: "Gum Disease Treatment", href: "/gum-disease-periodontal-treatment/" },
  { label: "Nightguards & Sportsguards", href: "/nightguards-sportsguards/" },
  { label: "TMJ Treatment", href: "/tmj/" },
  { label: "Botox", href: "/botox/" },
  { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
  { label: "Second Opinions", href: "/second-options/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#5F5B35] text-white/80">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Logo + tagline + Instagram + contact */}
          <div>
            <Link to="/">
              <img
                src={siteConfig.images.logoWhite}
                alt={siteConfig.name}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-body mb-4">
              {siteConfig.tagline}
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#F1DDBC] transition-colors mb-6"
            >
              <Instagram className="h-4 w-4" /> @tootharchitectdental
            </a>
            <div className="space-y-3 text-xs text-white/60 font-body">
              <div className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 text-[#F1DDBC] mt-0.5 shrink-0" />
                <div>
                  <p>New: <a href={"tel:" + siteConfig.phone.newPatientsTel} className="hover:text-[#F1DDBC] transition-colors">{siteConfig.phone.newPatients}</a></p>
                  <p>Existing: <a href={"tel:" + siteConfig.phone.existingPatientsTel} className="hover:text-[#F1DDBC] transition-colors">{siteConfig.phone.existingPatients}</a></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#F1DDBC] mt-0.5 shrink-0" />
                <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F1DDBC] transition-colors">
                  {siteConfig.address.street}, {siteConfig.address.suite}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 text-[#F1DDBC] mt-0.5 shrink-0" />
                <div>
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.friday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-[#F1DDBC] font-heading text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-[#F1DDBC] transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (first 10) */}
          <div>
            <h3 className="text-[#F1DDBC] font-heading text-base mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesCol1.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-[#F1DDBC] transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More Services */}
          <div>
            <h3 className="text-[#F1DDBC] font-heading text-base mb-4">More Services</h3>
            <ul className="space-y-2">
              {servicesCol2.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-[#F1DDBC] transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy/" className="hover:text-[#F1DDBC] transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy/" className="hover:text-[#F1DDBC] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
