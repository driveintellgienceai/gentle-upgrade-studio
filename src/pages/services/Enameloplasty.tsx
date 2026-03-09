import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Enameloplasty() {
  return (
    <ServicePageTemplate
      title="Restore a healthier, more attractive smile with conservative enameloplasty (tooth contouring)"
      metaTitle="Enameloplasty Sandy Springs, GA | Tooth Contouring | Teeth Reshaping"
      metaDescription="Non-invasive enameloplasty (tooth contouring) at Tooth Architect Dental Care in Sandy Springs, GA. No anesthetic needed."
      canonical="https://www.tootharchitectdental.com/enameloplasty/"
      bodyText="The enameloplasty procedure is an excellent fit with the other minimalist and conservative dental procedures available at the office of Dr. Shiva Talebi: Tooth Architect Dental Care in Sandy Springs, Georgia. Among the most conservative techniques to alter a tooth, this process involves using special instruments to shape or correct the outermost tooth enamel non-invasively. Numbing anesthetic is not required for comfort."
      relatedServices={[
        { label: "Bonding", href: "/bonding/" },
        { label: "Teeth Whitening", href: "/teeth-whitening/" },
        { label: "Veneers", href: "/veneers/" },
      ]}
    />
  );
}
