import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MeetTheDoctor from "./pages/MeetTheDoctor";
import ContactUs from "./pages/ContactUs";
import RequestAppointment from "./pages/RequestAppointment";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import SecondOptions from "./pages/services/SecondOptions";
import Botox from "./pages/services/Botox";
import TMJ from "./pages/services/TMJ";
import TeethWhitening from "./pages/services/TeethWhitening";
import ClearAligners from "./pages/services/ClearAligners";
import Enameloplasty from "./pages/services/Enameloplasty";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import GumSwellingTreatment from "./pages/blog/GumSwellingTreatment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meet-the-doctor/" element={<MeetTheDoctor />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/request-an-appointment/" element={<RequestAppointment />} />
          <Route path="/testimonials/" element={<Testimonials />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="/second-options/" element={<SecondOptions />} />
          <Route path="/botox/" element={<Botox />} />
          <Route path="/tmj/" element={<TMJ />} />
          <Route path="/teeth-whitening/" element={<TeethWhitening />} />
          <Route path="/clear-aligners-reveal-suresmile/" element={<ClearAligners />} />
          <Route path="/enameloplasty/" element={<Enameloplasty />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />
          <Route path="/gum-swelling-treatment-sandy-springs-ga/" element={<GumSwellingTreatment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
