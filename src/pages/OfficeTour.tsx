import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

const officePhotos = [
  { src: "/images/office/Console and light lobby.jpeg", alt: "Lobby reception area with console and lighting" },
  { src: "/images/office/lobby blue painting.jpeg", alt: "Lobby with signature blue painting" },
  { src: "/images/office/Lobby 2 books.jpeg", alt: "Welcoming lobby seating area" },
  { src: "/images/office/loby 1 book.jpeg", alt: "Lobby detail" },
  { src: "/images/office/console lobby.jpeg", alt: "Reception console" },
  { src: "/images/office/DSC_2143.jpeg", alt: "Treatment room" },
  { src: "/images/office/DSC_2147.jpeg", alt: "Treatment room view" },
  { src: "/images/office/DSC_2961.jpeg", alt: "Office interior" },
  { src: "/images/office/DSC_2004.jpeg", alt: "Office space" },
  { src: "/images/office/DSC_2140.jpeg", alt: "Interior detail" },
  { src: "/images/office/DSC_0056.JPG", alt: "Office overview" },
  { src: "/images/office/DSC_0060 edited levels.jpeg", alt: "Office atmosphere" },
];

export default function OfficeTour() {
  return (
    <Layout>
      <SEOHead
        title="Office Tour | Tooth Architect Dental Care in Sandy Springs, GA"
        description="Take a virtual tour inside Tooth Architect Dental Care's mid-century modern office in Sandy Springs, GA."
        canonical="https://www.tootharchitectdental.com/office-tour/"
      />
      <PageBanner title="Office Tour" />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
              Our Sandy Springs office was designed with the same care and intentionality we bring to every patient interaction. Mid-century modern design, warm earth tones, and natural light create a calm, comfortable environment from the moment you walk in.
            </p>
          </div>

          {/* Photo grid — 3 cols desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {officePhotos.map((photo, i) => (
              <div key={i} className="overflow-hidden rounded-lg aspect-[4/3] bg-[#F1DDBC]/20">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
