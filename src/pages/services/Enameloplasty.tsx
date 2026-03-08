import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Enameloplasty() {
  return (
    <Layout>
      <PageBanner title="Enameloplasty" subtitle="Conservative tooth contouring to restore your smile" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-5 sm:space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
          <p>
            The enameloplasty procedure is an excellent fit with the other minimalist and conservative dental procedures available at the office of <strong>Dr. Shiva Talebi: Tooth Architect Dental Care</strong> in Sandy Springs, Georgia.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">Getting to the root of enameloplasty</h2>
          <p>
            "Enamel" refers to the protective covering of our teeth. It is the hardest and most mineralized substance in our body, even stronger than skeletal bone. Enamel is not, however, impervious to the effects of damage, trauma, and wear and tear.
          </p>
          <p>
            "Plasty" refers to reparative or restorative procedures. So, enameloplasty, quite literally, is a procedure to repair damaged tooth enamel. In doing so, Dr. Talebi restores the damaged tooth's structure, function, health, and aesthetics.
          </p>

          {/* Before & After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/marielle-enameloplasty-before-after-1.jpg", label: "Enameloplasty" },
              { src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/Enameloplasty_shaving-teeth-conservatively-on-the-outside-to-align.jpg", label: "Enameloplasty – conservative alignment" },
            ].map((img) => (
              <div key={img.src} className="rounded-lg overflow-hidden border border-border">
                <img src={img.src} alt={img.label} className="w-full h-auto" loading="lazy" />
                <p className="text-xs text-center py-2">{img.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">How it's done</h2>
          <p>
            Among the most conservative techniques to alter a tooth, this process involves using special instruments to shape or correct the outermost tooth enamel non-invasively. Since the process does not include reducing the tooth significantly, it is tolerated well by patients. Numbing anesthetic is not required for comfort. Also, due to the non-invasive nature of treatment, there is nothing to recover from, and you can generally get back to the rest of your day without missing a beat.
          </p>
          <p>Enameloplasty has both cosmetic and restorative applications. Dr. Talebi applies her considerable artistic talents and technical aptitude during this procedure to:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Repair chipped teeth</li>
            <li>Soften rough or irregular edges</li>
            <li>Resize teeth that are either overly short or long and detract from the symmetry of the smile</li>
            <li>Reshape pointy or otherwise irregularly shaped teeth</li>
            <li>Correct bite problems by restoring the teeth to a healthy, functional position</li>
            <li>Ease headaches, jaw and facial pain, and other symptoms of TMJ dysfunction by addressing bite anomalies that can stress the joints and surrounding muscles</li>
          </ul>
          <p>
            During a visit to Tooth Architect Dental Care, Dr. Talebi may discuss alternatives to enameloplasty as appropriate. These alternatives include <strong>bonding and porcelain veneers.</strong> Enameloplasty can be an attractive option because it is so minimalist. Bonding and veneers both involve introducing a dental material (composite resin or ceramic). Plus, a small amount of enamel is buffed or removed to accommodate the placement of this material. Enameloplasty keeps your tooth structure completely intact.
          </p>
          <p>
            To learn more about options to restore the health and beauty of your teeth, call <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> or stop by our office in Sandy Springs, GA.
          </p>

          <div className="text-center pt-2 sm:pt-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold w-full sm:w-auto">
              <Link to="/request-an-appointment/">Request an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
