import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TeethWhitening() {
  return (
    <Layout>
      <PageBanner title="Teeth Whitening" subtitle="Exceptional artistic talent supports professional teeth whitening designed to boost your one-of-a-kind smile" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 text-muted-foreground leading-relaxed font-body">
          <p>
            Individuals and their families in and around Sandy Springs, Georgia, benefit from the unique expertise and talents of <strong>Dr. Shiva Talebi</strong> at <strong>Tooth Architect Dental Care</strong>. As a trained architect and talented visual artist and painter, Dr. Talebi is in the best possible position to design smiles that look natural and suit each patient's one-of-a-kind characteristics and features.
          </p>
          <p>
            Notably, she and her team also work closely with patients, focusing on preventative and conservative dentistry to eliminate the need of future cosmetic dental needs. Minimalist or traditional dentistry is fundamental to our practice. With regular hygiene visits and cleanings, our team removes surface stains and prevents discoloration that can add years to the appearance of your smile.
          </p>

          {/* Before & After */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-4-Boost-whitening.jpg", label: "Boost whitening" },
              { src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-Boost-Whitening.jpg", label: "Boost whitening" },
              { src: "https://www.tootharchitectdental.com/wp-content/uploads/2024/05/before-after-whitening-shade-1.jpg", label: "Whitening shade" },
            ].map((img) => (
              <div key={img.src} className="rounded-lg overflow-hidden border border-border">
                <img src={img.src} alt={img.label} className="w-full h-auto" loading="lazy" />
                <p className="text-xs text-center py-2">{img.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading text-foreground">Restore the healthy, beautiful brilliance of your teeth!</h2>
          <p>
            Dr. Talebi may recommend either in-office or home whitening for patients with stubborn discoloration and stains. Some patients may even benefit from a blend of both "chairside" or power whitening and treatment applied from the comfort of home with special "trays" or oral appliances. As with all services and treatments available at our office, Dr. Talebi schedules a consultation. During the consult, she works one-on-one with the patient to find the best options to beautify their smiles. <em>All</em> professional whitening services must also be performed on healthy teeth and gums.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>In-office whitening</strong> is the most effective and controlled technique that can be completed in as little as 20 minutes to 1 hour. It causes minimal post-treatment sensitivity due to the lack of lighting teeth, which dries the tooth structure. This technique also provides prolonged whitening after the whitening session.</li>
            <li><strong>At-home whitening</strong> – we offer custom trays that can be reused and refilled for a lifetime (as long as the trays are intact and no new dental work is done). We provide different levels of concentration for varying degrees of sensitivities.</li>
            <li><strong>Premade trays</strong> – we also offer premade trays with different concentration levels but in lower doses, since they're not as custom or selective.</li>
          </ul>
          <p>
            Regardless of the whitening method that is most appropriate for you, all treatments are <em>effective</em> due to our use of highly concentrated gels with clinically proven, peroxide-based ingredients. Our treatments are also <em>comfortable and safe</em> due to the professional oversight of Dr. Talebi.
          </p>
          <p>
            We strive to form partnerships with each patient and work one-on-one with them to sustain the dazzling results from treatment. To learn more, call Tooth Architect Dental Care at <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a>. Or simply stop by our office in Sandy Springs, GA, today!
          </p>

          <div className="text-center pt-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold">
              <Link to="/request-an-appointment/">Request an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-14" />
    </Layout>
  );
}
