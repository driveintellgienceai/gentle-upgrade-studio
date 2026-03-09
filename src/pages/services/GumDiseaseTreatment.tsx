import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function GumDiseaseTreatment() {
  return (
    <ServicePageTemplate
      title="Proactive gum care fights disease, supports the sustained health and beauty of your smile"
      metaTitle="Gum Disease Treatment Sandy Springs, GA | Scaling & Root Planing"
      metaDescription="Fight gum disease with scaling and root planing from Dr. Shiva Talebi in Sandy Springs, GA. Prevent irreversible damage to bone and gums."
      canonical="https://www.tootharchitectdental.com/gum-disease-periodontal-treatment/"
      bodyText="The gums and supportive bone provide structure to the teeth and face. At Tooth Architect Dental Care, Dr. Shiva Talebi partners with patients from Sandy Springs, Georgia, to keep these essential tissues healthy. Gum disease is progressive and most of the time causes irreversible damage to bone and gums. Scaling and root planing remove tartar and other destructive substances from below the gum line."
      relatedServices={[
        { label: "Exam & Cleaning", href: "/exam-cleaning/" },
        { label: "Holistic Dentistry", href: "/holistic-dentistry/" },
      ]}
    />
  );
}
