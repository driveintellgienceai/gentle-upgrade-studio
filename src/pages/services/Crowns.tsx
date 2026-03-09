import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Crowns() {
  return (
    <ServicePageTemplate
      title="A conservative, proactive, and sophisticated approach to crowns that is a breath of fresh air!"
      metaTitle="Dental Crowns Sandy Springs, GA | Protect Your Teeth from Damage"
      metaDescription="Dr. Shiva Talebi provides conservative dental crowns using digital PRIME scanner technology in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/crowns/"
      bodyText="All dentists are equipped to provide certain fundamental dental services, such as fillings and crowns. Dr. Shiva Talebi is highly trusted for second opinions not only by individuals in Sandy Springs and the mountains but also by patients who come from other states seeking her expertise. Dr. Talebi leads Tooth Architect Dental Care with a focus on minimal dentistry. We utilize digital technology using our PRIME scanner to capture precise images of your tooth."
      relatedServices={[
        { label: "Dental Implant Crowns", href: "/dental-implant-crowns/" },
        { label: "Veneers", href: "/veneers/" },
      ]}
    />
  );
}
