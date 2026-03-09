import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ExamCleaning() {
  return (
    <ServicePageTemplate
      title="How routine exams and cleanings protect the health and beauty of your teeth and gums"
      metaTitle="Dental Exams & Cleanings Sandy Springs, GA | Regular Dentist Check-ups"
      metaDescription="Proactive preventative dentistry with comprehensive exams and thorough cleanings at Tooth Architect Dental Care in Sandy Springs, GA."
      canonical="https://www.tootharchitectdental.com/exam-cleaning/"
      bodyText="Oral problems like dental decay and tooth disease are among the most common health conditions affecting youth and adults alike near us in Atlanta and worldwide. As a practice that is proactive in preventative dentistry, Tooth Architect Dental Care serves families in Sandy Springs and beyond with comprehensive exams and thorough cleanings."
      relatedServices={[
        { label: "General Dentistry", href: "/general-dentistry/" },
        { label: "Digital X-Rays", href: "/digital-x-rays/" },
        { label: "Oral Cancer Screening", href: "/oral-cancer-screening/" },
      ]}
    />
  );
}
