import { Link } from "react-router-dom";
import { Phone, CalendarDays, Stethoscope, MapPin } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-gold/20">
      <div className="grid grid-cols-4 h-14">
        <a href="tel:+14046668066" className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 hover:text-primary">
          <Phone className="h-4 w-4" />
          <span className="text-[10px]">Call</span>
        </a>
        <Link to="/request-an-appointment/" className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 hover:text-primary">
          <CalendarDays className="h-4 w-4" />
          <span className="text-[10px]">Appointment</span>
        </Link>
        <Link to="/gallery/" className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 hover:text-primary">
          <Stethoscope className="h-4 w-4" />
          <span className="text-[10px]">Treatments</span>
        </Link>
        <a href="https://maps.app.goo.gl/EtukWtX8fpsymwJN9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 hover:text-primary">
          <MapPin className="h-4 w-4" />
          <span className="text-[10px]">Find Us</span>
        </a>
      </div>
    </div>
  );
}
