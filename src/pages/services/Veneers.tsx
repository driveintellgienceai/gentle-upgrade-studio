import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Veneers() {
  return (
    <ServicePageTemplate
      title="Considerable artistic and technological capabilities support natural-looking veneers"
      metaTitle="Dental Veneers Sandy Springs, GA | Cover Cosmetic Imperfections"
      metaDescription="Dr. Shiva Talebi blends architectural design prowess with artistic talents to create natural-looking dental veneers in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/veneers/"
      bodyText="Veneers are considered to be among the most technique-specific cosmetic procedures performed by today's dentists. Dr. Shiva Talebi was initially trained to design buildings, not smiles. She blends this extensive and long-standing design prowess with substantial artistic talents as a visual artist and painter."
      relatedServices={[
        { label: "Crowns", href: "/crowns/" },
        { label: "Bonding", href: "/bonding/" },
        { label: "Enameloplasty", href: "/enameloplasty/" },
      ]}
    />
  );
}
