import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TMJ() {
  return (
    <Layout>
      <PageBanner title="TMJ" subtitle="Get real and lasting relief from the pain of TMJ disorders" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-5 sm:space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
          <p>
            As a practitioner of holistic dentistry, <strong>Dr. Shiva Talebi</strong> acknowledges the connections between the teeth and gums and other parts of the face, head, and body. Dr. Talebi is certified in TMJ disorder treatment and pain management, with trigger point treatment training. She is certified under AAFE for both. Dr. Talebi is a trusted resource for relieving pain and other distressing symptoms associated with the temporomandibular joints.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">Getting to the root of TMJ troubles</h2>
          <p>
            At Tooth Architect Dental Care, Dr. Talebi conducts many TMJ consults. As with all services and treatment at our office in Sandy Springs, Georgia, it is essential first to understand the nature and extent of the problem. Issues with the TM joints located on both sides of the face can present numerous disruptive or debilitating symptoms. These signs of TMJ dysfunction or disorders include:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Chronic migraines and tension headaches</li>
            <li>Referred pain that may be felt in other areas, such as the temples, ears, shoulders, neck, lower back, and dental pain that feels like a need for a root canal</li>
            <li>Persistent and intense facial and jaw pain</li>
          </ul>
          <p>
            Additionally, since these joints function as hinges to support jaw movement, patients with untreated TMJDs may also notice a clicking or popping sound whenever they open or close their mouths. It may be difficult to comfortably and efficiently chew food. The jaw's mobility may be affected and "lock" in place. Without appropriate treatment, these effects only get worse.
          </p>

          <h2 className="text-xl sm:text-2xl font-heading text-foreground">Lasting relief</h2>
          <p>
            Any time the joints and their interconnected "system" of ligaments, muscles, and tissue become "stressed," the symptoms of TMJDs can arise. Factors affecting the function of these tissues and structures range from behaviors like teeth grinding (bruxism) to degenerative diseases like arthritis. The recommended treatment depends on the underlying source of the problem. Depending on what Dr. Talebi finds during an evaluation at our office, she may recommend one or a combination of the following therapeutic intervention(s):
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Botox® — more than a beauty treatment, this injectable formulation is precisely administered to relax the muscles responsible for pain and other persistent TMJ symptoms. As a functional muscle, 1-3 treatments can train the muscles not to contract and engage in grinding teeth</li>
            <li>Lifestyle guidance, such as recommendations for jaw exercises, massage, and relaxation techniques to relieve muscle tension</li>
            <li>Oral appliances such as nightguards or splints are designed to soften the blow and resulting pressure placed on the joints from bruxism</li>
            <li>Bite correction with everything from orthodontic treatment and tooth contouring to the repair of old or worn dental restorations</li>
          </ul>
          <p>
            TMJ pain does not have to be a way of life. Restore your well-being and quality of life with a consultation at our Sandy Springs, GA office. We welcome your call at <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> or just stop by!
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
