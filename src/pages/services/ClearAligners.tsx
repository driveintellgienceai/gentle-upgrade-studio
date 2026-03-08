import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ClearAligners() {
  return (
    <Layout>
      <PageBanner title="Clear Aligners" subtitle="Truly clear and comfortable aligners to straighten teeth effectively" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-5 sm:space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
          <p>
            <strong>Dr. Shiva Talebi of Tooth Architect Dental Care</strong> is a proud holistic and preventative dentistry provider. As such, Dr. Talebi and our Sandy Springs, Georgia, team readily appreciate and integrate diagnostics and therapies that transcend tooth structure and gums and support early intervention. With this approach at heart and fundamental to everything that we do, our practice may be able to help patients avoid the need for orthodontic treatment later in life.
          </p>
          <p>
            Additionally, should treated teeth shift later in life or new challenges to even spacing and a balanced bite arise, the <strong>clear aligner</strong> options available for treatment at our office are second to none.
          </p>
          <p>
            Brands such as <strong>SureSmile®</strong> and <strong>Reveal</strong> are made from only the finest materials and use precision technologies and diagnostic principles. The result is aligners or orthodontic appliances that are truly clear (highly cosmetic) and custom-fit to sustain comfort and the most effective and efficient treatment process.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">Straight talk about clear aligners</h2>
          <p>
            Clear aligners to straighten teeth have been around since the late 1990s. Since then, different types of aligners have been developed, raising the bar for this alternative to conventional braces.
          </p>
          <p>
            Braces generally work by using a system of silver-colored metal brackets and wires and special bands or rings to place consistent force on the teeth. Braces are "fixed" and can only be removed or adjusted by the orthodontist or dentist. These constant forces and adjustments gradually straighten the teeth and move them into proper, healthy positions over time.
          </p>
          <p>
            Clear aligners, too, place consistent force on the teeth to incrementally reposition them. They are, however, removable. Since these custom appliances can slip in and out of the mouth easily, patients can maintain healthy eating and oral hygiene habits without "hardware" getting in the way.
          </p>
          <p>
            Teens and adults alike appreciate that aligners are generally made from transparent plastic. This plastic is not only cosmetic (not visible in the smile) but also flexible and smooth for a comfortable fit – no poking wires to contend with!
          </p>
          <p>
            Throughout treatment, a series of aligners will be worn. They need to be worn in the correct order, and they should only be removed when eating, brushing, and flossing.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">The SureSmile®, Reveal difference</h2>
          <p>
            Not all clear aligners are created equal. Dr. Talebi has carefully vetted the products and materials used at her office. So, you have considerable peace of mind that SureSmile® and Reveal are among the most advanced options available for realignment and bite correction.
          </p>
          <p>
            The former option is made from a premium, proprietary, and phthalate-free plastic. These SureSmile® aligners are designed to fade into the teeth and tend to hold their shape exceptionally well – optimizing the process of moving the teeth and supporting a comfortable experience.
          </p>
          <p>
            The latter option is fabricated from a crystal-clear and stain-resistant material called ClearWear™ for optimal aesthetics. Additionally, Reveal aligners are specifically made to minimize the need for attachments that are glued to the teeth and noticeable in the smile. Here again, these characteristics support a comfortable, hassle-free experience of getting straighter teeth and a healthier bite.
          </p>
          <p>
            <em>Have your teeth shifted over time? Are crowded, crooked, and gapped teeth detracting from your best smile?</em> Call <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> to schedule your evaluation with Dr. Talebi at Tooth Architect Dental Care. Or stop by our office in Sandy Springs, GA, and say, "Hi!"
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
