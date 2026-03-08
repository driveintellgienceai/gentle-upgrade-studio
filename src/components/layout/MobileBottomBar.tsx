import { Link } from "react-router-dom";
import { Phone, CalendarDays, Stethoscope, MapPin } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-gold/20 safe-bottom">
      <div className="grid grid-cols-4 h-16">
        <a href="tel:+14046668066" className="flex flex-col items-center justify-center gap-1 text-secondary-foreground/70 active:text-primary transition-colors">
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Call</span>
        </a>
        <Link to="/request-an-appointment/" className="flex flex-col items-center justify-center gap-1 text-secondary-foreground/70 active:text-primary transition-colors">
          <CalendarDays className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Book</span>
        </Link>
        <Link to="/gallery/" className="flex flex-col items-center justify-center gap-1 text-secondary-foreground/70 active:text-primary transition-colors">
          <Stethoscope className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Gallery</span>
        </Link>
        <a href="https://maps.app.goo.gl/EtukWtX8fpsymwJN9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-secondary-foreground/70 active:text-primary transition-colors">
          <MapPin className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Find Us</span>
        </a>
      </div>
    </div>
  );
}
