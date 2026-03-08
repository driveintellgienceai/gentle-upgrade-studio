import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { label: "Second Opinions", href: "/second-options/" },
  { label: "Botox", href: "/botox/" },
  { label: "TMJ Treatment", href: "/tmj/" },
  { label: "Teeth Whitening", href: "/teeth-whitening/" },
  { label: "Clear Aligners", href: "/clear-aligners-reveal-suresmile/" },
  { label: "Enameloplasty", href: "/enameloplasty/" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Meet the Doctor", href: "/meet-the-doctor/" },
  { label: "Services", href: "#", children: services },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact-us/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://www.tootharchitectdental.com/wp-content/uploads/2022/05/logo-new.svg"
            alt="Tooth Architect Dental Care"
            className="h-8 sm:h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-secondary-foreground/80 hover:text-primary transition-colors">
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-secondary border border-gold/20 rounded-md shadow-xl py-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm text-secondary-foreground/70 hover:text-primary hover:bg-navy-light transition-colors",
                          location.pathname === child.href && "text-primary"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-body text-secondary-foreground/80 hover:text-primary transition-colors",
                  location.pathname === link.href && "text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+14046668066" className="flex items-center gap-2 text-sm text-primary">
            <Phone className="h-4 w-4" />
            (404) 666-8066
          </a>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold">
            <Link to="/request-an-appointment/">Request Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-secondary-foreground p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu - full screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-secondary z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full text-left px-3 py-4 text-base font-body text-secondary-foreground/80 flex items-center justify-between border-b border-gold/10"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-5 w-5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 bg-navy-light/30">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block px-3 py-3.5 text-base font-body text-secondary-foreground/60 hover:text-primary border-b border-gold/5",
                            location.pathname === child.href && "text-primary"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-4 text-base font-body text-secondary-foreground/80 hover:text-primary border-b border-gold/10",
                    location.pathname === link.href && "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-6 flex flex-col gap-4">
              <a href="tel:+14046668066" className="flex items-center gap-3 px-3 text-base text-primary font-body">
                <Phone className="h-5 w-5" />
                (404) 666-8066
              </a>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold w-full">
                <Link to="/request-an-appointment/">
                  Request Appointment
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
