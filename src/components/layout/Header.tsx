import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/siteConfig";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

const servicesMega = [
  {
    category: "General",
    items: [
      { label: "General Dentistry", href: "/general-dentistry/" },
      { label: "Exam & Cleaning", href: "/exam-cleaning/" },
    ],
  },
  {
    category: "Cosmetic",
    items: [
      { label: "Teeth Whitening", href: "/teeth-whitening/" },
      { label: "Veneers", href: "/veneers/" },
      { label: "Enameloplasty", href: "/enameloplasty/" },
      { label: "Bonding", href: "/bonding/" },
    ],
  },
  {
    category: "Restorative",
    items: [
      { label: "Crowns", href: "/crowns/" },
      { label: "Dental Implant Crowns", href: "/dental-implant-crowns/" },
      { label: "Tooth Colored Fillings", href: "/tooth-colored-fillings/" },
      { label: "Dental Bridges", href: "/dental-bridges/" },
    ],
  },
  {
    category: "Preventative",
    items: [
      { label: "Digital X-Rays", href: "/digital-x-rays/" },
      { label: "Oral Cancer Screening", href: "/oral-cancer-screening/" },
      { label: "Nightguards & Sportsguards", href: "/nightguards-sportsguards/" },
    ],
  },
  {
    category: "Pain Management",
    items: [
      { label: "TMJ", href: "/tmj/" },
      { label: "Botox", href: "/botox/" },
    ],
  },
  {
    category: "Holistic",
    items: [
      { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
    ],
  },
  {
    category: "Second Opinions",
    items: [
      { label: "Second Options", href: "/second-options/" },
    ],
  },
];

const aboutDropdown = [
  { label: "Meet the Doctor", href: "/meet-the-doctor/" },
  { label: "Meet Our Staff", href: "/meet-our-staff/" },
  { label: "Office Tour", href: "/office-tour/" },
];

const resourcesDropdown = [
  { label: "Blog", href: "/blog/" },
  { label: "Patient Resources", href: "/patient-resources/" },
  { label: "Promotions", href: "/promotions/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleSection = (name: string) => {
    setOpenSection(openSection === name ? null : name);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        {/* Top bar with phones */}
        <div className="hidden lg:block border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 flex items-center justify-between py-2">
            <Link to="/" className="shrink-0">
              <img 
                src="https://www.tootharchitectdental.com/wp-content/uploads/2022/05/logo-new.svg" 
                alt="Tooth Architect Dental Care" 
                className="h-14 w-auto" 
              />
            </Link>
            <div className="flex items-center gap-6">
              <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="flex items-center gap-2 text-sm text-[#5F5B35] font-body">
                <Phone className="h-3.5 w-3.5" />
                New Patients: {siteConfig.phone.newPatients}
              </a>
              <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="flex items-center gap-2 text-sm text-[#5F5B35]/80 font-body">
                <Phone className="h-3.5 w-3.5" />
                Existing: {siteConfig.phone.existingPatients}
              </a>
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <div className="container mx-auto px-4 flex items-center justify-between h-14 lg:h-12">
          {/* Mobile logo */}
          <Link to="/" className="lg:hidden flex items-center shrink-0">
            <img src={siteConfig.images.logo} alt={siteConfig.name} className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link to="/" className="px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">Home</Link>

            {/* About Us */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">
                About Us <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-border rounded-md shadow-xl py-2 min-w-[200px]">
                  {aboutDropdown.map((item) => (
                    <Link key={item.href} to={item.href} className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services mega-menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-border rounded-xl shadow-xl p-6 min-w-[700px] grid grid-cols-3 gap-6">
                  {servicesMega.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-xs font-body font-semibold text-accent uppercase tracking-wider mb-2">{group.category}</h4>
                      {group.items.map((item) => (
                        <Link key={item.href} to={item.href} className="block py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Patient Resources */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">
                Patient Resources <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-border rounded-md shadow-xl py-2 min-w-[200px]">
                  {resourcesDropdown.map((item) => (
                    <Link key={item.href} to={item.href} className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/gallery/" className="px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">Gallery</Link>
            <Link to="/testimonials/" className="px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">Testimonials</Link>
            <Link to="/contact-us/" className="px-3 py-2 text-sm font-body text-foreground/80 hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <GoogleReviewBadge />
            <Button asChild className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold">
              <Link to="/request-an-appointment/">Request a Consultation</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground p-2 -mr-2 relative z-[70]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-[60] overflow-y-auto pb-24 bg-card">
          <nav className="px-6 py-4 flex flex-col">
            <Link to="/" className="py-4 text-lg font-body text-foreground border-b border-border">Home</Link>

            {/* About Us */}
            <button className="w-full text-left py-4 text-lg font-body text-foreground flex items-center justify-between border-b border-border" onClick={() => toggleSection("about")}>
              About Us <ChevronDown className={cn("h-5 w-5 transition-transform", openSection === "about" && "rotate-180")} />
            </button>
            {openSection === "about" && (
              <div className="pl-4 bg-muted/30">
                {aboutDropdown.map((item) => (
                  <Link key={item.href} to={item.href} className="block py-3 px-2 text-base font-body text-foreground/70 border-b border-border/50">{item.label}</Link>
                ))}
              </div>
            )}

            {/* Services */}
            <button className="w-full text-left py-4 text-lg font-body text-foreground flex items-center justify-between border-b border-border" onClick={() => toggleSection("services")}>
              Services <ChevronDown className={cn("h-5 w-5 transition-transform", openSection === "services" && "rotate-180")} />
            </button>
            {openSection === "services" && (
              <div className="pl-4 bg-muted/30">
                {servicesMega.map((group) =>
                  group.items.map((item) => (
                    <Link key={item.href} to={item.href} className="block py-3 px-2 text-base font-body text-foreground/70 border-b border-border/50">{item.label}</Link>
                  ))
                )}
              </div>
            )}

            {/* Patient Resources */}
            <button className="w-full text-left py-4 text-lg font-body text-foreground flex items-center justify-between border-b border-border" onClick={() => toggleSection("resources")}>
              Patient Resources <ChevronDown className={cn("h-5 w-5 transition-transform", openSection === "resources" && "rotate-180")} />
            </button>
            {openSection === "resources" && (
              <div className="pl-4 bg-muted/30">
                {resourcesDropdown.map((item) => (
                  <Link key={item.href} to={item.href} className="block py-3 px-2 text-base font-body text-foreground/70 border-b border-border/50">{item.label}</Link>
                ))}
              </div>
            )}

            <Link to="/gallery/" className="py-4 text-lg font-body text-foreground border-b border-border">Gallery</Link>
            <Link to="/testimonials/" className="py-4 text-lg font-body text-foreground border-b border-border">Testimonials</Link>
            <Link to="/contact-us/" className="py-4 text-lg font-body text-foreground border-b border-border">Contact</Link>

            <div className="pt-6 flex flex-col gap-3">
              <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="flex items-center gap-3 text-base text-accent font-body">
                <Phone className="h-5 w-5" /> New Patients: {siteConfig.phone.newPatients}
              </a>
              <a href={`tel:${siteConfig.phone.existingPatientsTel}`} className="flex items-center gap-3 text-base text-accent font-body">
                <Phone className="h-5 w-5" /> Existing: {siteConfig.phone.existingPatients}
              </a>
              <Button asChild size="lg" className="bg-brand-terracotta text-white hover:bg-brand-terracotta/90 font-body font-bold w-full mt-2">
                <Link to="/request-an-appointment/">Request a Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
