import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Bonding() {
  return (
    <ServicePageTemplate
      title="Conservative treatment to restore stains, chipped teeth and gaps with dental bonding"
      metaTitle="Dental Bonding Sandy Springs, GA | Fix Chipped, Gapped & Discolored Teeth"
      metaDescription="Fast, economical dental bonding from Dr. Shiva Talebi in Sandy Springs, GA to boost your smile's appearance."
      canonical="https://www.tootharchitectdental.com/bonding/"
      bodyText="Prior to leading Tooth Architect Dental Care, Dr. Shiva Talebi, worked as a professional architect. One of the fastest, most economical, and hassle-free ways to dramatically boost the appearance of your smile is with dental bonding. Dr. Talebi sculpts biocompatible material to a tooth that has been slightly buffed, etched, and conditioned. The composite is light cured and fixed securely to the tooth."
      relatedServices={[
        { label: "Tooth Colored Fillings", href: "/tooth-colored-fillings/" },
        { label: "Enameloplasty", href: "/enameloplasty/" },
        { label: "Veneers", href: "/veneers/" },
      ]}
    />
  );
}
