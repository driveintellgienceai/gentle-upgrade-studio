import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SecondOptions() {
  return (
    <Layout>
      <PageBanner title="Second Opinions" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-sm sm:text-base text-muted-foreground space-y-4 sm:space-y-6 font-body leading-relaxed">
            <p>
              When it comes to your teeth and gums, and when it comes to dentists, it is not uncommon for there to be differences of opinion as to the best way to proceed with treatment. Sometimes there will be variations in how different dentists will treat (or not treat) the same problems. Sometimes there will be differences in interpretation of what the problems actually are, and sometimes there will be differences in how conservative or aggressive treatment solutions are decided. That is not to say that one dentist is necessarily right or wrong. Every patient has certain ideas or preconceptions for treatment solutions that may or may not fit their lifestyle, and for this reason, every treatment decision must be tailored to the <strong>individual</strong>, not just the mouth that walks into the dental office.
            </p>
            <p>
              We are always happy to offer a 2nd opinion to the patient, to help clarify what options may be available. Sometimes, it is necessary to take some new x-rays, or to fabricate dental models of the teeth to help in a proper treatment plan, and these procedures do add some cost. But before going anywhere, it is always useful to have a map to help us know where we are going, and to know when we have arrived, and proper dental records are that map.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold w-full sm:w-auto">
              <Link to="/request-an-appointment/">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
