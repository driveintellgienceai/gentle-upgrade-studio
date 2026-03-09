import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ClearAligners() {
  return (
    <ServicePageTemplate
      title="We offer truly clear and comfortable aligners to straighten teeth effectively"
      metaTitle="Clear Aligners Sandy Springs, GA | SureSmile® | Reveal"
      metaDescription="Dr. Shiva Talebi offers SureSmile® and Reveal clear aligners for straighter teeth at Tooth Architect Dental Care in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/clear-aligners-reveal-suresmile/"
      bodyText="Dr. Shiva Talebi of Tooth Architect Dental Care is a proud holistic and preventative dentistry provider. Brands such as SureSmile® and Reveal are made from only the finest materials and use precision technologies and diagnostic principles. SureSmile® is made from a premium, proprietary, and phthalate-free plastic. Reveal is fabricated from a crystal-clear and stain-resistant material called ClearWear™."
      relatedServices={[
        { label: "General Dentistry", href: "/general-dentistry/" },
        { label: "Enameloplasty", href: "/enameloplasty/" },
      ]}
    />
  );
}
