import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SecondOptions() {
  return (
    <ServicePageTemplate
      title="Second Options"
      metaTitle="Second Opinion on Dental Care Sandy Springs, GA | Tooth Architect Dental Care"
      metaDescription="Get a trustworthy second opinion on dental treatment at Tooth Architect Dental Care in Sandy Springs, GA with Dr. Shiva Talebi."
      canonical="https://www.tootharchitectdental.com/second-options/"
      bodyText="When it comes to your teeth and gums, and when it comes to dentists, it is not uncommon for there to be differences of opinion as to the best way to proceed with treatment. We are always happy to offer a 2nd opinion to the patient, to help clarify what options may be available."
      relatedServices={[
        { label: "General Dentistry", href: "/general-dentistry/" },
        { label: "Crowns", href: "/crowns/" },
      ]}
    />
  );
}
