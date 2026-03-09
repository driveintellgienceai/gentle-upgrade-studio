import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Botox() {
  return (
    <ServicePageTemplate
      title="Botox® treats more than lines and wrinkles: Resolving TMJ troubles, other applications at the dentist's office"
      metaTitle="Botox Dentist Sandy Springs, GA | TMJ/TMD Treatment | Chronic Headaches"
      metaDescription="Dr. Shiva Talebi is certified by AAFE to administer Botox® for TMJ relief and cosmetic treatments in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/botox/"
      bodyText="Botox® is more than a beauty treatment. At the dentist's office, your friends at Tooth Architect Dental Care in Sandy Springs, Georgia, may expertly inject Botox® into precise points of the face to ease the pain and other symptoms of temporomandibular joint dysfunction or disorder (TMJD). Dr. Shiva Talebi is trained and certified by the American Academy of Facial Aesthetics (AAFE) to safely administer Botox®."
      relatedServices={[
        { label: "TMJ", href: "/tmj/" },
        { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
      ]}
    />
  );
}
