import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ToothColoredFillings() {
  return (
    <ServicePageTemplate
      title="A conservative, cosmetic way to repair cavities and restore healthy, beautiful smiles without silver metals"
      metaTitle="Tooth-Colored Fillings Sandy Springs, GA | Metal-free White Fillings"
      metaDescription="Tooth-colored composite fillings mimic natural teeth. Dr. Shiva Talebi offers metal-free fillings in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/tooth-colored-fillings/"
      bodyText="At Tooth Architect Dental Care, all our patients in and around Sandy Springs, are entitled to dental solutions that not only emulate the appearance of natural teeth but also offer optimal functionality. Dental composites are a great replacement for previously used silver mercury fillings. This blend of tooth-colored resin (plastic) and glass-like particles is designed to mimic the aesthetics of healthy, natural teeth."
      relatedServices={[
        { label: "Bonding", href: "/bonding/" },
        { label: "General Dentistry", href: "/general-dentistry/" },
      ]}
    />
  );
}
