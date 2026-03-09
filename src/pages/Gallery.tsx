import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Bonding", "Crowns", "Enameloplasty", "Teeth Whitening", "Tooth Colored Fillings", "White Spot Removal"];

// All images local — no broken WordPress CDN dependencies. HEIC → JPEG converted.
const galleryItems = [
  { category: "Bonding", src: "/images/gallery/13-After.jpg", label: "Bonding – resolving top yellow front tooth, no drilling" },
  { category: "Bonding", src: "/images/gallery/15-After.jpg", label: "Composite bonding – smile transformation" },
  { category: "Bonding", src: "/images/gallery/3-7bonding_replacing-old-filling-with-composite-bonding_after.jpg", label: "Bonding – replacing old filling with composite bonding" },
  { category: "Bonding", src: "/images/gallery/8-composite-bonding_fixing-small-chips-due-to-grinding_after.jpg", label: "Composite bonding – fixing chips from grinding" },
  { category: "Bonding", src: "/images/gallery/10-Bonding-on-4-front-teeth-to-repair-enamel-erosion_After.jpg", label: "Bonding – repairing enamel erosion on 4 front teeth" },
  { category: "Crowns", src: "/images/gallery/5-Anterior-crowns-to-repair-broken-composite-bondings_after.jpg", label: "Anterior crowns to repair broken composite bondings" },
  { category: "Enameloplasty", src: "/images/gallery/2-Marielle_enameloplasty_after.jpg", label: "Enameloplasty – Marielle" },
  { category: "Enameloplasty", src: "/images/gallery/11-Marielle_enameloplasty_open_after.jpg", label: "Enameloplasty – open smile result" },
  { category: "Teeth Whitening", src: "/images/gallery/6-Boost-Whitening_-4-shades-difference_after.jpg", label: "Boost whitening – 4 shades lighter" },
  { category: "Teeth Whitening", src: "/images/gallery/4-Rick_Boost-whitening_after.jpg", label: "Boost whitening result" },
  { category: "Teeth Whitening", src: "/images/gallery/9-Whitening-on-teeth-with-before-shade-comparison_after.jpg", label: "Whitening with shade comparison" },
  { category: "Tooth Colored Fillings", src: "/images/gallery/7-9-replacing-old-yellow-restoration_after.jpg", label: "Replacing old yellow restoration" },
  { category: "White Spot Removal", src: "/images/gallery/2-Removal-of-white-spots_no-drilling_no-shots_after.jpg", label: "White spot removal – no drilling, no shots" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <Layout>
      <SEOHead title="Smile Gallery | Tooth Architect Dental Care | Sandy Springs, GA" description="View patient smile transformation results from Tooth Architect Dental Care in Sandy Springs, GA — bonding, crowns, whitening, and enameloplasty." canonical="https://www.tootharchitectdental.com/gallery/" />
      <PageBanner title="Gallery" subtitle="Patient results & smile transformations" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={cn("px-4 py-2.5 rounded-full text-sm font-body transition-colors whitespace-nowrap shrink-0", active === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10")}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((item, i) => (
              <motion.div key={item.src} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="group">
                <div className="rounded-xl overflow-hidden border border-[#B1C6B7]/30 bg-[#F9F6F1]">
                  <img src={item.src} alt={item.label} className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 text-center font-body">{item.label}</p>
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
