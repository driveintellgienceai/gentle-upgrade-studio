import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Meet the Doctor", href: "/meet-the-doctor/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Request Appointment", href: "/request-an-appointment/" },
];

const serviceLinks = [
  { label: "Second Opinions", href: "/second-options/" },
  { label: "Botox", href: "/botox/" },
  { label: "TMJ Treatment", href: "/tmj/" },
  { label: "Teeth Whitening", href: "/teeth-whitening/" },
  { label: "Clear Aligners", href: "/clear-aligners-reveal-suresmile/" },
  { label: "Enameloplasty", href: "/enameloplasty/" },
];

const hours = [
  { day: "Monday", time: "08:00 AM – 04:00 PM" },
  { day: "Tuesday", time: "08:00 AM – 04:00 PM" },
  { day: "Wednesday", time: "08:00 AM – 04:00 PM" },
  { day: "Thursday", time: "08:00 AM – 04:00 PM" },
  { day: "Friday", time: "09:00 AM – 02:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://www.tootharchitectdental.com/wp-content/uploads/2022/05/logo-new.svg"
              alt="Tooth Architect Dental Care"
              className="h-10 sm:h-14 w-auto mb-4 sm:mb-6"
            />
            <p className="text-xs sm:text-sm text-secondary-foreground/60 leading-relaxed">
              Holistic and preventative dental care in Sandy Springs, Georgia,
              led by Dr. Shiva Talebi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-heading text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-xs sm:text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary font-heading text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-xs sm:text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-primary font-heading text-base sm:text-lg mb-3 sm:mb-4">Contact & Hours</h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-secondary-foreground/60">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p>New Patients: <a href="tel:+14046668066" className="hover:text-primary">(404) 666-8066</a></p>
                  <p>Existing: <a href="tel:+14042557047" className="hover:text-primary">(404) 255-7047</a></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/EtukWtX8fpsymwJN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  227 Sandy Springs Pl NE, Suite 390, Sandy Springs, GA 30328
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  {hours.map((h) => (
                    <p key={h.day}>
                      <span className="text-secondary-foreground/40">{h.day}:</span> {h.time}
                    </p>
                  ))}
                  <p className="text-[10px] sm:text-xs text-secondary-foreground/40 mt-1">(Friday by appointment only)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-secondary-foreground/40">
          <p>© {new Date().getFullYear()} Tooth Architect Dental Care. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy/" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
