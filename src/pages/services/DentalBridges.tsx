import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DentalBridges() {
  return (
    <ServicePageTemplate
      title="Tooth architect spans the gaps in your smile with dental bridges"
      metaTitle="Dental Bridges Sandy Springs, GA | Fill Gaps in Your Smile | Fixed Bridges"
      metaDescription="Dr. Shiva Talebi offers fixed dental bridges to replace missing teeth in Sandy Springs, GA. Prevent tooth loss with our preventative care."
      canonical="https://www.tootharchitectdental.com/dental-bridges/"
      bodyText="Dental decay and gum disease are the leading causes of tooth loss. At Tooth Architect Dental Care, we work closely with patients in Sandy Springs and from across the north Atlanta area to prevent or stop these conditions from causing permanent damage to the teeth. Bridges represent fixed (not removable) methods to replace natural teeth."
      relatedServices={[
        { label: "Dental Implant Crowns", href: "/dental-implant-crowns/" },
        { label: "Crowns", href: "/crowns/" },
      ]}
    />
  );
}
