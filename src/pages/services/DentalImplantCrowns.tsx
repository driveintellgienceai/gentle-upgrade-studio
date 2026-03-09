import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DentalImplantCrowns() {
  return (
    <ServicePageTemplate
      title="A GUIDE TO GETTING YOUR CONFIDENT, DISTINCTIVE, AND HEALTHY SMILE BACK WITH DENTAL IMPLANTS"
      metaTitle="Dental Implant Crowns in Sandy Springs, GA - Implant Restoration"
      metaDescription="Dr. Shiva Talebi specializes in restoring dental implants with minimalist, preventative, and holistic principles in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/dental-implant-crowns/"
      bodyText="Our approach to dentistry at Tooth Architect Dental Care is deeply rooted in minimalist, preventative, and holistic principles. Dr. Shiva Talebi specializes in restoring dental implants that oral surgeons have placed. As few as four implants can be applied to stabilize an upper or lower denture for full-mouth reconstruction."
      relatedServices={[
        { label: "Crowns", href: "/crowns/" },
        { label: "Dental Bridges", href: "/dental-bridges/" },
      ]}
    />
  );
}
