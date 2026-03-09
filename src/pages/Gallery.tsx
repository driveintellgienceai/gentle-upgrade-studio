import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Bonding", "Crowns", "Enameloplasty", "Teeth Whitening", "Tooth Colored Fillings", "White Spot Removal"];

const galleryItems = [
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2025/01/before-after-bonding-3.jpg", label: "Bonding" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2025/01/before-after-bonding-2.jpg", label: "Bonding" },
  { category: "Bonding", src: "/images/gallery/3-#7bonding_replacing old filling with composite bonding_after.jpg", label: "Bonding – replacing old filling with composite bonding" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-composite-bonding_fixing-small-chips-due-to-grinding-1.jpg", label: "Composite bonding – fixing small chips due to grinding" },
  { category: "Bonding", src: "/images/gallery/10-Bonding on 4 front teeth to repair enamel erosion_After.jpg", label: "Bonding – 4 front teeth repair of enamel erosion" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2025/01/before-after-bonding-1.jpg", label: "Bonding" },
  { category: "Crowns", src: "/images/gallery/5-Anterior crowns to repair broken composite bondings_after.jpg", label: "Anterior crowns to repair broken composite bondings" },
  { category: "Enameloplasty", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/marielle-enameloplasty-before-after-1.jpg", label: "Enameloplasty" },
  { category: "Enameloplasty", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/Enameloplasty_shaving-teeth-conservatively-on-the-outside-to-align.jpg", label: "Enameloplasty – shaving teeth conservatively on the outside to align" },
  { category: "Teeth Whitening", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-4-Boost-whitening.jpg", label: "Boost whitening" },
  { category: "Teeth Whitening", src: "/images/gallery/4-Rick_Boost whitening_after.jpg", label: "Boost whitening" },
  { category: "Teeth Whitening", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-whitening-shade-1.jpg", label: "Whitening shade" },
  { category: "Tooth Colored Fillings", src: "/images/gallery/7-#9 replacing old yellow restoration_after.jpg", label: "Replacing old yellow restoration" },
  { category: "White Spot Removal", src: "/images/gallery/2-Removal of white spots_no drilling_no shots_after.jpg", label: "Removal of white spots no drilling, no shots" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <Layout>
      <SEOHead title="Smile Gallery | Tooth Architect Dental Care | Sandy Springs, GA" description="View before and after smile transformation photos from Tooth Architect Dental Care in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/gallery/" />
      <PageBanner title="Gallery" subtitle="Before and after smile gallery" />
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
                <div className="rounded-xl overflow-hidden border border-border">
                  <img src={item.src} alt={item.label} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
