import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Bonding", "Crowns", "Enameloplasty", "Teeth Whitening", "Tooth Colored Fillings", "White Spot Removal"];

const galleryItems = [
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2025/01/before-after-bonding-3.jpg", label: "Bonding" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2025/01/before-after-bonding-2.jpg", label: "Bonding" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-bonding_replacing-old-filling-with-composite-bonding.jpg", label: "Bonding – replacing old filling with composite bonding" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-composite-bonding_fixing-small-chips-due-to-grinding-1.jpg", label: "Composite bonding – fixing small chips due to grinding" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/Bonding-on-4-front-teeth-to-repair-enamel-erosion-1.jpg", label: "Bonding – 4 front teeth repair of enamel erosion" },
  { category: "Bonding", src: "https://www.tootharchitectdental.com/wp-content/uploads/2025/01/before-after-bonding-1.jpg", label: "Bonding" },
  { category: "Crowns", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-anterior-crowns-to-repair-broken-composite-bondings.jpg", label: "Anterior crowns to repair broken composite bondings" },
  { category: "Enameloplasty", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/marielle-enameloplasty-before-after-1.jpg", label: "Enameloplasty" },
  { category: "Enameloplasty", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/Enameloplasty_shaving-teeth-conservatively-on-the-outside-to-align.jpg", label: "Enameloplasty – shaving teeth conservatively on the outside to align" },
  { category: "Teeth Whitening", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-4-Boost-whitening.jpg", label: "Boost whitening" },
  { category: "Teeth Whitening", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-Boost-Whitening.jpg", label: "Boost whitening" },
  { category: "Teeth Whitening", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-whitening-shade-1.jpg", label: "Whitening shade" },
  { category: "Tooth Colored Fillings", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-replacing-old-yellow-restoration.jpg", label: "Replacing old yellow restoration" },
  { category: "White Spot Removal", src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-2-Removal-of-white-spots-no-drilling.jpg", label: "Removal of white spots no drilling, no shots" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <Layout>
      <PageBanner title="Gallery" subtitle="Real patients, real results" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Filter tabs - horizontally scrollable on mobile */}
          <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-sm font-body transition-colors whitespace-nowrap shrink-0",
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="rounded-lg overflow-hidden border border-border">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 text-center">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
