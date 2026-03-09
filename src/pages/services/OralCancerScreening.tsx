import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function OralCancerScreening() {
  return (
    <ServicePageTemplate
      title="How oral cancer screening at our office saves lives"
      metaTitle="Oral Cancer Screening Sandy Springs, GA | Early Detection Saves Lives"
      metaDescription="Early detection through oral cancer screenings at Tooth Architect Dental Care in Sandy Springs, GA. HPV-related cancers have high survival rates when caught early."
      canonical="https://www.tootharchitectdental.com/oral-cancer-screening/"
      bodyText="Tooth Architect Dental Care was built on a solid foundation of preventative dentistry. Few dental services demonstrate the power of this proactive approach, quite like oral cancer screenings. The number of mouth and throat cancers linked to HPV (human papillomavirus) has risen dramatically over the past 20 years. These cancers have high survival rates when detected and addressed early."
      relatedServices={[
        { label: "Exam & Cleaning", href: "/exam-cleaning/" },
        { label: "Digital X-Rays", href: "/digital-x-rays/" },
      ]}
    />
  );
}
