import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + description */}
          <div>
            <img 
              src="https://www.tootharchitectdental.com/wp-content/uploads/2022/05/logo-new.svg" 
              alt="Tooth Architect Dental Care" 
              className="h-12 w-auto mb-4 brightness-0 invert" 
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-body mb-4">
              {siteConfig.tagline}
            </p>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-[#F1DDBC] transition-colors">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[#F1DDBC] font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Contact Us", href: "/contact-us/" },
                { label: "Privacy Policy", href: "/privacy-policy/" },
                { label: "Cookie Policy", href: "/cookie-policy/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-[#F1DDBC] transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-[#F1DDBC] font-heading text-lg mb-4">Contact & Hours</h3>
            <div className="space-y-4 text-sm text-primary-foreground/70 font-body">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#F1DDBC] mt-0.5 shrink-0" />
                <div>
                  <p>New Patients: <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="hover:text-[#F1DDBC]">{siteConfig.phone.newPatients}</a></p>
                  <p>Existing: <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="hover:text-[#F1DDBC]">{siteConfig.phone.existingPatients}</a></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#F1DDBC] mt-0.5 shrink-0" />
                <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F1DDBC]">
                  {siteConfig.address.full}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#F1DDBC] mt-0.5 shrink-0" />
                <div>
                  {siteConfig.hours.schedule.map((h) => (
                    <p key={h.days}>{h.days}: {h.hours}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy/" className="hover:text-brand-terracotta transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy/" className="hover:text-brand-terracotta transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
