import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

// Curated image list — ordered by visual impact and aesthetic fit.
// HDR/Edit versions are used over raw DSC files for richer color.
// objectPosition controls the crop focal point for each portrait or tall image.
// span controls the masonry grid layout: col-span-2 creates horizontal emphasis.
const officePhotos = [
  {
    src: "/images/photoshoot/_DSC_4486-HDR-2-Edit-3.jpg",
    alt: "Patient consultation area — sage cabinetry, warm light",
    span: "col-span-2 row-span-2",
    position: "center 40%",
  },
  { src: "/images/photoshoot/_DSC_4570-HDR-Edit.jpg", alt: "Waiting area with pendant lighting", position: "center 35%" },
  { src: "/images/office/lobby blue painting.jpeg", alt: "Lobby with signature blue painting — mid-century art", position: "center center" },
  { src: "/images/photoshoot/_DSC_4591-HDR-Edit.jpg", alt: "Architectural vanity detail", position: "center 30%" },
  { src: "/images/office/Console and light lobby.jpeg", alt: "Reception console and ambient lighting", position: "center 45%", span: "col-span-2" },
  { src: "/images/photoshoot/_DSC_4382-HDR-2-Edit.jpg", alt: "Treatment room — clean and calm", position: "center 40%" },
  { src: "/images/photoshoot/_DSC_4415-HDR.jpg", alt: "Mid-century sconce lighting detail", position: "center center" },
  { src: "/images/office/Lobby 2 books.jpeg", alt: "Lobby reading area — books and greenery", position: "center center" },
  { src: "/images/photoshoot/DSC_4405-HDR-Edit.jpg", alt: "Treatment room overview", position: "center 40%", span: "col-span-2" },
  { src: "/images/office/loby 1 book.jpeg", alt: "Lobby reading nook", position: "center center" },
  { src: "/images/office/DSC_0060 edited levels.jpeg", alt: "Office atmosphere — warm color palette", position: "center 35%" },
  { src: "/images/office/DSC_2143.jpeg", alt: "Treatment room — natural light", position: "center 45%" },
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

      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-base sm:text-lg text-[#7F7947] leading-relaxed font-body">
              Designed by a dentist who began her career as an architect, our Sandy Springs office feels less like a clinic and more like a calm, curated home. Mid-century modern lines, warm earth tones, and natural light invite you to slow down and breathe.
            </p>
          </div>

          {/*
            Masonry-style grid: auto-rows gives fixed row heights.
            col-span-2 / row-span-2 on key images creates visual anchors.
            Per-image objectPosition acts as CSS art direction —
            portrait photos in a 4:3 container need precise cropping.
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
            {officePhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.06, 0.5) }}
                className={`overflow-hidden rounded-xl bg-[#F1DDBC]/20 ${photo.span || ""}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: photo.position }}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
