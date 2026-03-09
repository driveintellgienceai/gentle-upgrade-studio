import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Meet the Doctor", href: "/meet-the-doctor/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Request a Consultation", href: "/request-an-appointment/" },
];

const serviceGroups = [
  {
    heading: "General Care",
    links: [
      { label: "General Dentistry", href: "/general-dentistry/" },
      { label: "Exam & Cleaning", href: "/exam-cleaning/" },
      { label: "Digital X-Rays", href: "/digital-x-rays/" },
      { label: "Oral Cancer Screening", href: "/oral-cancer-screening/" },
    ],
  },
  {
    heading: "Cosmetic",
    links: [
      { label: "Teeth Whitening", href: "/teeth-whitening/" },
      { label: "Veneers", href: "/veneers/" },
      { label: "Enameloplasty", href: "/enameloplasty/" },
      { label: "Bonding", href: "/bonding/" },
    ],
  },
  {
    heading: "Restorative",
    links: [
      { label: "Crowns", href: "/crowns/" },
      { label: "Dental Implant Crowns", href: "/dental-implant-crowns/" },
      { label: "Tooth Colored Fillings", href: "/tooth-colored-fillings/" },
      { label: "Dental Bridges", href: "/dental-bridges/" },
    ],
  },
  {
    heading: "Preventative & Pain",
    links: [
      { label: "Gum Disease Treatment", href: "/gum-disease-periodontal-treatment/" },
      { label: "Nightguards & Sportsguards", href: "/nightguards-sportsguards/" },
      { label: "TMJ Treatment", href: "/tmj/" },
      { label: "Botox", href: "/botox/" },
    ],
  },
  {
    heading: "Specialty",
    links: [
      { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
      { label: "Second Opinions", href: "/second-options/" },
    ],
  },
];

const officeHours = [
  { day: "Mon–Thu", time: "8:00 AM – 4:00 PM" },
  { day: "Friday", time: "9:00 AM – 2:00 PM*" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-olive text-white">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <img
              src="/logos/tadc-wordmark-white-rgb.svg"
              alt="Tooth Architect Dental Care"
              className="h-8 sm:h-10 w-auto mb-5"
            />
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-5">
              Holistic and conservative dental care in Sandy Springs, Georgia,
              led by Dr. Shiva Talebi, D.M.D.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-white/60">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-brand-rust mt-0.5 shrink-0" />
                <div>
                  <p>New Patients: <a href="tel:+14046668066" className="hover:text-brand-rust transition-colors">(404) 666-8066</a></p>
                  <p>Existing: <a href="tel:+14042557047" className="hover:text-brand-rust transition-colors">(404) 255-7047</a></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-rust mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=6667+Vernon+Woods+Dr+NE+Ste+B+30+Sandy+Springs+GA+30328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-rust transition-colors"
                >
                  6667 Vernon Woods Dr NE, Ste B 30<br />Sandy Springs, GA 30328
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-brand-rust mt-0.5 shrink-0" />
                <div>
                  {officeHours.map((h) => (
                    <p key={h.day}>
                      <span className="text-white/40">{h.day}:</span> {h.time}
                    </p>
                  ))}
                  <p className="text-[10px] text-white/40 mt-1">*Friday by appointment only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-brand-linen text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-xs sm:text-sm text-white/60 hover:text-brand-rust transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 columns of grouped links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-brand-linen text-base sm:text-lg mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {serviceGroups.map((group) => (
                <div key={group.heading}>
                  <p className="text-[10px] uppercase tracking-widest text-brand-eucalyptus mb-2">{group.heading}</p>
                  <ul className="space-y-1.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href} className="text-xs text-white/60 hover:text-brand-rust transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-white/30">
          <p>© {new Date().getFullYear()} Tooth Architect Dental Care. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy/" className="hover:text-brand-rust transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy/" className="hover:text-brand-rust transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
