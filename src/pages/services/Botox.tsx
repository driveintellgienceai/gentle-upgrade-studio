import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Botox() {
  return (
    <Layout>
      <PageBanner title="Botox" subtitle="Botox® treats more than lines and wrinkles" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-5 sm:space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
          <h2 className="text-xl sm:text-2xl font-heading text-foreground">Resolving TMJ troubles, other applications at the dentist's office</h2>
          <p>
            Botox® is more than a beauty treatment. In fact, Botox® originated in the 1970s as a medical treatment for strabismus (crossed eyes). Today, it is considered an effective and conservative treatment for everything from excessive sweating to incontinence. At the dentist's office, your friends at <strong>Tooth Architect Dental Care</strong> in Sandy Springs, Georgia, may expertly inject Botox® into precise points of the face to ease the pain and other symptoms of temporomandibular joint dysfunction or disorder (TMJD).
          </p>
          <p>
            As a dentist, <strong>Dr. Shiva Talebi</strong> is trained and certified by the American Academy of Facial Aesthetics (AAFE) to safely, comfortably, and precisely administer Botox®. Additionally, as a beauty treatment, her knowledge of oral anatomy and function supports the natural treatment results. Just the right amount of Botox® is injected into the targeted muscles of the face to soften lines and wrinkles. "Frozen face" and other undesirable side effects and complications are minimized when turning to a skilled and experienced professional like Dr. Talebi for treatment.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">The beauty of Botox®</h2>
          <p>
            Regardless of the specific application for Botox®, all treatments generally "work" in much the same way; Botox® is formulated with an active ingredient designed to relax the injected muscles. When these muscles are relaxed, they cannot contract. This process of muscle contraction is responsible for crow's feet, frown lines, and other wrinkles made when making an expression. In youthful, elastic skin, these expression lines are "dynamic." They are only visible when frowning, squinting, or otherwise expressing yourself with your face. Older, less elastic skin does not "bounce back" from an expression; these lines can become "static" or permanent features of the face.
          </p>
          <p>
            As a TMJD treatment, Dr. Talebi applies Botox® to relieve the muscle tension or stress placed on the joints and the surrounding tissues. Any time the joints and this interconnected system are "stressed," it can result in a range of often debilitating symptoms. These symptoms range from persistent and radiating jaw, facial, neck, back, and shoulder pain to chronic headaches, migraines, and earaches. Function can be adversely affected due to the loss of jaw mobility. Our patients may no longer enjoy eating, or their nutrition can suffer due to the difficulty and pain experienced when chewing food.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">Schedule your consultation today!</h2>
          <p>
            Following an evaluation at our office, Dr. Talebi will develop a treatment plan that gets on the right, healthy track. If Botox® is appropriate as a therapeutic or cosmetic treatment, the process is fast and can be completed in just one appointment. It should be noted that the effects of Botox® are <em>temporary.</em> You will need to maintain treatment sessions as advised by Dr. Talebi.
          </p>
          <p>
            Due to Dr. Talebi's considerable skill, <em>only those muscles responsible for your lines or pain are treated.</em> You still look natural, only refreshed, and can express yourself freely. Plus, treatment is predictable and safe when you partner with a doctor experienced at successfully administering injectable treatment like Botox®.
          </p>
          <p>
            Drop by our office in Sandy Springs, GA, or call Tooth Architect Dental Care at <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> with questions or to book your consultation.
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
