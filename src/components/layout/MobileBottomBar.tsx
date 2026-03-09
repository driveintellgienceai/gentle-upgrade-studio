import { Link } from "react-router-dom";
import { Phone, CalendarDays, Stethoscope, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-bottom">
      <div className="grid grid-cols-4 h-16">
        <a href={`tel:${siteConfig.phone.newPatientsTel}`} className="flex flex-col items-center justify-center gap-1 text-foreground/70 active:text-accent transition-colors">
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Call</span>
        </a>
        <Link to="/request-an-appointment/" className="flex flex-col items-center justify-center gap-1 text-foreground/70 active:text-accent transition-colors">
          <CalendarDays className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Consultation</span>
        </Link>
        <Link to="/general-dentistry/" className="flex flex-col items-center justify-center gap-1 text-foreground/70 active:text-accent transition-colors">
          <Stethoscope className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Services</span>
        </Link>
        <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-foreground/70 active:text-accent transition-colors">
          <MapPin className="h-5 w-5" />
          <span className="text-[11px] font-body font-medium">Find Us</span>
        </a>
      </div>
    </div>
  );
}
