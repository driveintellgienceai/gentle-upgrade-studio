import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore — suppress React Router v7 future flag warnings in console
const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true } as const;
import Index from "./pages/Index";
import MeetTheDoctor from "./pages/MeetTheDoctor";
import MeetOurStaff from "./pages/MeetOurStaff";
import OfficeTour from "./pages/OfficeTour";
import ContactUs from "./pages/ContactUs";
import RequestAppointment from "./pages/RequestAppointment";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import PatientResources from "./pages/PatientResources";
import Promotions from "./pages/Promotions";
import Blog from "./pages/Blog";
import BlogPost from "./pages/blog/BlogPost";
import GeneralDentistry from "./pages/services/GeneralDentistry";
import Crowns from "./pages/services/Crowns";
import TeethWhitening from "./pages/services/TeethWhitening";
import Veneers from "./pages/services/Veneers";
import ClearAligners from "./pages/services/ClearAligners";
import Enameloplasty from "./pages/services/Enameloplasty";
import Bonding from "./pages/services/Bonding";
import DentalImplantCrowns from "./pages/services/DentalImplantCrowns";
import ToothColoredFillings from "./pages/services/ToothColoredFillings";
import DentalBridges from "./pages/services/DentalBridges";
import DigitalXRays from "./pages/services/DigitalXRays";
import OralCancerScreening from "./pages/services/OralCancerScreening";
import ExamCleaning from "./pages/services/ExamCleaning";
import GumDiseaseTreatment from "./pages/services/GumDiseaseTreatment";
import TMJ from "./pages/services/TMJ";
import NightguardsSportsguards from "./pages/services/NightguardsSportsguards";
import Botox from "./pages/services/Botox";
import HolisticDentistry from "./pages/services/HolisticDentistry";
import SecondOptions from "./pages/services/SecondOptions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={routerFuture}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meet-the-doctor/" element={<MeetTheDoctor />} />
          <Route path="/meet-our-staff/" element={<MeetOurStaff />} />
          <Route path="/office-tour/" element={<OfficeTour />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/request-an-appointment/" element={<RequestAppointment />} />
          <Route path="/testimonials/" element={<Testimonials />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="/patient-resources/" element={<PatientResources />} />
          <Route path="/promotions/" element={<Promotions />} />
          <Route path="/blog/" element={<Blog />} />
          
          <Route path="/general-dentistry/" element={<GeneralDentistry />} />
          <Route path="/crowns/" element={<Crowns />} />
          <Route path="/teeth-whitening/" element={<TeethWhitening />} />
          <Route path="/veneers/" element={<Veneers />} />
          <Route path="/clear-aligners-reveal-suresmile/" element={<ClearAligners />} />
          <Route path="/enameloplasty/" element={<Enameloplasty />} />
          <Route path="/bonding/" element={<Bonding />} />
          <Route path="/dental-implant-crowns/" element={<DentalImplantCrowns />} />
          <Route path="/tooth-colored-fillings/" element={<ToothColoredFillings />} />
          <Route path="/dental-bridges/" element={<DentalBridges />} />
          <Route path="/digital-x-rays/" element={<DigitalXRays />} />
          <Route path="/oral-cancer-screening/" element={<OralCancerScreening />} />
          <Route path="/exam-cleaning/" element={<ExamCleaning />} />
          <Route path="/gum-disease-periodontal-treatment/" element={<GumDiseaseTreatment />} />
          <Route path="/tmj/" element={<TMJ />} />
          <Route path="/nightguards-sportsguards/" element={<NightguardsSportsguards />} />
          <Route path="/botox/" element={<Botox />} />
          <Route path="/holistic-dentistry/" element={<HolisticDentistry />} />
          <Route path="/second-options/" element={<SecondOptions />} />
          
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />
          
          <Route path="/gum-swelling-treatment-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/bonding-composite-teeth-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/cosmetic-teeth-reshaping-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/holistic-dentist-near-me-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/zirconia-implants-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/clear-braces-for-adults-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/gingivitis-treatment-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/teeth-grinding-treatment-sandy-springs-ga/" element={<BlogPost />} />
          <Route path="/tmj-disorder-treatment-sandy-springs-ga/" element={<BlogPost />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
