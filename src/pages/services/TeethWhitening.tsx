import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function TeethWhitening() {
  return (
    <ServicePageTemplate
      title="Exceptional artistic talent supports professional teeth whitening designed to boost your one-of-a-kind smile"
      metaTitle="Teeth Whitening Sandy Springs, GA | In-office & At-Home Whitening Solutions"
      metaDescription="Professional teeth whitening in Sandy Springs, GA. In-office whitening in as little as 20 minutes, custom at-home trays for a lifetime."
      canonical="https://www.tootharchitectdental.com/teeth-whitening/"
      bodyText="Individuals and their families in and around Sandy Springs, Georgia, benefit from the unique expertise and talents of Dr. Shiva Talebi at Tooth Architect Dental Care. In-office whitening completed in as little as 20 minutes to 1 hour. Custom at-home trays can be reused and refilled for a lifetime. Premade trays also available with different concentration levels."
      relatedServices={[
        { label: "Veneers", href: "/veneers/" },
        { label: "Bonding", href: "/bonding/" },
        { label: "Enameloplasty", href: "/enameloplasty/" },
      ]}
    />
  );
}
