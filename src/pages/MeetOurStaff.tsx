import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

const staff = [
  {
    name: "PATTY",
    role: "Front Desk",
    photo: "/images/team/Headshot_Patty_2561.jpeg",
    bio: "I can't wait to be a Nana to my first grandbaby and hope to have a dozen more by the time I retire! Patty moved to Atlanta eight years ago from Delaware.",
  },
  {
    name: "MICHELE",
    role: "Dental Assistant",
    photo: "/images/team/Headshot_Michele_2730.jpeg",
    bio: "Her favorite phrase: 'I'll sleep when I'm dead'. Michele is originally from Washington D.C. and brings energy and warmth to every appointment.",
  },
  {
    name: "SUSAN",
    role: "Hygienist",
    photo: "/images/team/Susan-welcome-board.jpg",
    bio: "Susan brings a wealth of experience from her journey as a traveling hygienist working in various dental offices across the country.",
  },
  {
    name: "MERCEDES",
    role: "Dental Assistant",
    photo: "/images/team/Mercedes-welcome-board.jpg",
    bio: "Meet Mercedes, a dental assistant with 7 years of experience. She is dedicated to making every patient feel comfortable and cared for.",
  },
];

export default function MeetOurStaff() {
  return (
    <Layout>
      <SEOHead
        title="Meet Our Staff | Tooth Architect Dental Care | Sandy Springs, GA"
        description="Meet the friendly and experienced dental team at Tooth Architect Dental Care in Sandy Springs, GA."
        canonical="https://www.tootharchitectdental.com/meet-our-staff/"
      />
      <PageBanner title="Meet Our Staff" />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-[#7F7947] font-body max-w-2xl mx-auto mb-16 text-base leading-relaxed">
            Our team is what makes every visit to Tooth Architect special. Each member brings expertise, warmth, and genuine care to every patient interaction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ y: 14 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                {/* Portrait card — aspect-[3/4] keeps faces visible and gives an editorial feel */}
                <div className="relative mb-5 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle olive gradient at bottom for name readability */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#5F5B35]/30 to-transparent" />
                </div>
                <h3 className="font-heading text-lg text-[#5F5B35] tracking-wide mb-0.5">{member.name}</h3>
                <p className="text-sm text-[#D47D45] font-body font-medium mb-3">{member.role}</p>
                <p className="text-sm text-[#7F7947] font-body leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
