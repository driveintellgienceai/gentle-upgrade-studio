import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DigitalXRays() {
  return (
    <ServicePageTemplate
      title="How digital x-rays support a comfortable experience and, effective treatment planning"
      metaTitle="Digital Dental X-Rays Sandy Springs, GA | Dental Radiography"
      metaDescription="Tooth Architect Dental Care uses digital x-rays with 80-90% less radiation exposure for safe, effective treatment planning in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/digital-x-rays/"
      bodyText="At Tooth Architect Dental Care, our team appreciates that we cannot treat what we do not know. We use the latest digital x-rays to non-invasively and quickly gather images of oral structures and tissues. Digital x-rays are associated with up to 80 to 90% less radiation exposure than conventional film-based processes."
      relatedServices={[
        { label: "Exam & Cleaning", href: "/exam-cleaning/" },
        { label: "Oral Cancer Screening", href: "/oral-cancer-screening/" },
      ]}
    />
  );
}
