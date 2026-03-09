import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

const officePhotos = [
  // Professional photoshoot — landscape, high quality
  { src: "/images/photoshoot/_DSC_4486-HDR-2-Edit-3.jpg", alt: "Patient consultation area with sage green cabinetry", featured: true },
  { src: "/images/photoshoot/_DSC_4570-HDR-Edit.jpg", alt: "Welcoming waiting area with pendant light" },
  { src: "/images/photoshoot/_DSC_4382-HDR-2-Edit.jpg", alt: "Treatment room with Dr. Talebi's diploma" },
  { src: "/images/photoshoot/_DSC_4591-HDR-Edit.jpg", alt: "Vanity detail with copper sink and mirror" },
  { src: "/images/photoshoot/_DSC_4415-HDR.jpg", alt: "Mid-century sconce lighting" },
  { src: "/images/photoshoot/DSC_4405-HDR-Edit.jpg", alt: "Treatment room overview" },
  // Office photos
  { src: "/images/office/Console and light lobby.jpeg", alt: "Lobby console and lighting" },
  { src: "/images/office/lobby blue painting.jpeg", alt: "Lobby with signature blue painting" },
  { src: "/images/office/Lobby 2 books.jpeg", alt: "Comfortable waiting area" },
  { src: "/images/office/loby 1 book.jpeg", alt: "Lobby reading corner" },
  { src: "/images/office/DSC_2143.jpeg", alt: "Treatment room" },
  { src: "/images/office/DSC_2961.jpeg", alt: "Office detail" },
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
            <p className="text-base sm:text-lg text-[#7F7947] leading-relaxed font-body">
              Our Sandy Springs office was designed with the same care and intentionality we bring to every patient interaction. Mid-century modern design, warm earth tones, and natural light create a calm, comfortable environment from the moment you walk in.
            </p>
          </div>

          {/* Photo grid — first image featured (2 cols wide) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {officePhotos.map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl bg-[#F1DDBC]/20 ${
                  photo.featured ? "col-span-2 row-span-1 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
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
