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
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-brand-olive/10 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logos/tadc-primary-full-color-rgb.svg"
              alt="Tooth Architect Dental Care"
              className="h-8 sm:h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-brand-olive hover:text-brand-rust transition-colors">
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-brand-olive/10 rounded-md shadow-xl py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm text-brand-olive/70 hover:text-brand-rust hover:bg-brand-linen/30 transition-colors",
                            location.pathname === child.href && "text-brand-rust"
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
                    "px-3 py-2 text-sm font-body text-brand-olive hover:text-brand-rust transition-colors",
                    location.pathname === link.href && "text-brand-rust"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+14046668066" className="flex items-center gap-2 text-sm text-brand-olive font-body">
              <Phone className="h-4 w-4" />
              (404) 666-8066
            </a>
            <Button asChild className="bg-brand-rust text-white hover:bg-brand-rust/90 font-body font-bold">
              <Link to="/request-an-appointment/">Request a Consultation</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-secondary-foreground p-2 -mr-2 relative z-[70]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu - full screen overlay (outside header) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-[60] overflow-y-auto pb-24 bg-white">
          <nav className="px-6 py-6 flex flex-col gap-0">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full text-left py-4 text-lg font-body text-brand-olive flex items-center justify-between border-b border-brand-olive/10"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-5 w-5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 bg-brand-linen/20">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block py-3.5 px-2 text-base font-body text-brand-olive/70 hover:text-brand-rust border-b border-brand-olive/5",
                            location.pathname === child.href && "text-brand-rust"
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
                    "py-4 text-lg font-body text-brand-olive hover:text-brand-rust border-b border-brand-olive/10",
                    location.pathname === link.href && "text-brand-rust"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-8 flex flex-col gap-4">
              <a href="tel:+14046668066" className="flex items-center gap-3 text-lg text-brand-olive font-body">
                <Phone className="h-5 w-5" />
                (404) 666-8066
              </a>
              <Button asChild size="lg" className="bg-brand-rust text-white hover:bg-brand-rust/90 font-body font-bold w-full text-base">
                <Link to="/request-an-appointment/">
                  Request a Consultation
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
