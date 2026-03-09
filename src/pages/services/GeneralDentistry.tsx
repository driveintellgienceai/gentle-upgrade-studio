import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function GeneralDentistry() {
  return (
    <ServicePageTemplate
      title="General dentistry that transcends ordinary: Our fresh perspective as an artistic dental architect"
      metaTitle="General Dentistry Sandy Springs, GA | Keep Your Teeth & Gums Healthy"
      metaDescription="Dr. Shiva Talebi brings a fresh architectural approach to general dentistry in Sandy Springs, GA with preventative and minimalist care."
      canonical="https://www.tootharchitectdental.com/general-dentistry/"
      bodyText="Dr. Shiva Talebi is experienced in structure and artistry. As a professional architect, Dr. Talebi's professional life after Georgia Tech started by designing, of all things, dental practices. Led by Dr. Talebi, Tooth Architect Dental Care brings a fresh approach to dentistry. Dr. Talebi focuses on preventative dentistry and practices minimalist dentistry. Her mission is to avoid invasive procedures when an effective, less-intrusive solution is available."
      relatedServices={[
        { label: "Exam & Cleaning", href: "/exam-cleaning/" },
        { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
      ]}
    />
  );
}
