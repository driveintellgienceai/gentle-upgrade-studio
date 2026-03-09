import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function HolisticDentistry() {
  return (
    <ServicePageTemplate
      title="Where can I obtain holistic dentistry and sustainability near me?"
      metaTitle="Holistic Dental Care Sandy Springs GA - Biocompatible Dentistry"
      metaDescription="Dr. Shiva Talebi provides holistic dentistry with mercury-free fillings and conservative solutions in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/holistic-dentistry/"
      bodyText="At Tooth Architect Dental Care of Sandy Springs, Georgia, Dr. Shiva Talebi believes in providing holistic dentistry for safe, biological dental care. From using mercury-free fillings to treating patients with conservative solutions that maintain as much natural tooth structure as possible. Nano-hydroxyapatite is a naturally occurring mineral in your teeth and bones and a derivative of calcium phosphate — offered as a fluoride alternative."
      relatedServices={[
        { label: "General Dentistry", href: "/general-dentistry/" },
        { label: "Tooth Colored Fillings", href: "/tooth-colored-fillings/" },
      ]}
    />
  );
}
