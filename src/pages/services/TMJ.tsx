import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function TMJ() {
  return (
    <ServicePageTemplate
      title="Get real and lasting relief from the pain of TMJ disorders"
      metaTitle="TMJ Treatment Sandy Springs, GA | Find Relief from Jaw Pain & Migraines"
      metaDescription="Dr. Shiva Talebi is certified in TMJ disorder treatment and pain management in Sandy Springs, GA. Find lasting relief from jaw pain."
      canonical="https://www.tootharchitectdental.com/tmj/"
      bodyText="As a practitioner of holistic dentistry, Dr. Shiva Talebi acknowledges the connections between the teeth and gums and other parts of the face, head, and body. Dr. Talebi is certified in TMJ disorder treatment and pain management, with trigger point treatment training. She is certified under AAFE for both. TMJ pain does not have to be a way of life."
      relatedServices={[
        { label: "Botox", href: "/botox/" },
        { label: "Nightguards & Sportsguards", href: "/nightguards-sportsguards/" },
        { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
      ]}
    />
  );
}
