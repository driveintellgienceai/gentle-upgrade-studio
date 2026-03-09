import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

// Office Tour: ONLY verified architectural/interior photos — no people, no portraits.
// Each image verified as a room photo from screenshots or confirmed source.
const officePhotos = [
  { src: "/images/office/Console-and-light-lobby.jpeg",       alt: "Reception area with console and ambient lighting",  span: "col-span-2 row-span-2", position: "center 45%" },
  { src: "/images/office/lobby-blue-painting.jpeg",            alt: "Lobby featuring signature blue painting",             position: "center center" },
  { src: "/images/office/Lobby-2-books.jpeg",                  alt: "Welcoming lobby seating area",                    position: "center center" },
  { src: "/images/office/console-lobby.jpeg",                  alt: "Reception console detail",                        position: "center center" },
  { src: "/images/office/DSC_2143.jpeg",                       alt: "Treatment room with natural light",               span: "col-span-2", position: "center 45%" },
  { src: "/images/office/DSC_2147.jpeg",                       alt: "Modern office interior",                          position: "center center" },
  { src: "/images/office/DSC_2004.jpeg",                       alt: "Dental operatory",                                position: "center center" },
  { src: "/images/office/DSC_0060-edited-levels.jpeg",         alt: "Office atmosphere",                               position: "center 35%" },
  { src: "/images/office/loby-1-book.jpeg",                    alt: "Lobby reading nook",                              position: "center center" },
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

      <section className="py-12 md:py-16">
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
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: Math.min(i * 0.06, 0.4) }}
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
