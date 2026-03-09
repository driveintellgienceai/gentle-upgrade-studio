import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function NightguardsSportsguards() {
  return (
    <ServicePageTemplate
      title="Proactive oral appliance therapy: Protect your smile from teeth grinding and sports injuries with custom guards"
      metaTitle="Nightguards & Sports Guards Sandy Springs, GA | Protect Your Mouth"
      metaDescription="Custom-made nightguards and sports guards from Tooth Architect Dental Care in Sandy Springs, GA protect teeth and jaw health."
      canonical="https://www.tootharchitectdental.com/nightguards-sportsguards/"
      bodyText="Led by Dr. Shiva Talebi, the office of Tooth Architect Dental Care in Sandy Springs, Georgia, appreciates that you are more than a set of teeth and gums. Oral appliances, such as our custom-made nightguards and sports guards, protect the teeth and keep the interconnected system of jaw joints, muscles, and other tissues and structures in good working order."
      relatedServices={[
        { label: "TMJ", href: "/tmj/" },
        { label: "General Dentistry", href: "/general-dentistry/" },
      ]}
    />
  );
}
