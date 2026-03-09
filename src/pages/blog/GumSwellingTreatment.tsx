import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function GumSwellingTreatment() {
  return (
    <Layout>
      <PageBanner title="Blog" />
      <section className="py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6 sm:mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-muted-foreground font-body">October 17, 2025 · Dr. Shiva Talebi</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-heading text-foreground leading-tight mb-4 sm:mb-6">
            How to deal with early-stage gingivitis, and what treatment options are available for gum swelling and redness
          </h1>

          <img
            src="https://www.tootharchitectdental.com/wp-content/uploads/2025/10/gum-swelling-treatment-sandy-springs-ga.jpg"
            alt="Gum Swelling Treatment Sandy Springs GA"
            className="w-full h-auto rounded-lg mb-6 sm:mb-8"
            loading="lazy"
          />

          <article className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
            <p>
              Let's face it—nobody wants puffy gums or an unsightly smile, right? Gingivitis, especially in its early stages, might not sound like a big deal, but catching and treating it early can help keep your gums healthy and happy. We've compiled some of the most frequently asked questions about early-stage gingivitis and common issues such as gum swelling and redness. Plus, we'll share why <Link to="/meet-the-doctor/" className="text-primary hover:underline">Dr. Shiva Talebi</Link> and her amazing team at Tooth Architect Dental Care in Sandy Springs, Georgia, are ready to help you tackle gingivitis. Hence, you can smile confidently every day!
            </p>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">What is gingivitis, and how does it start?</h2>
            <p>
              Gingivitis is the earliest stage of gum disease, in which plaque, a sticky film of bacteria, builds up along the gumline. If left unchecked, this plaque can irritate the gums, leading to redness, swelling, and even bleeding, especially when brushing or flossing.
            </p>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">What are the most common signs and symptoms of early-stage gingivitis?</h2>
            <p>
              The early symptoms are subtle, but they include red, swollen gums, tenderness, and occasional bleeding. You might also notice some persistent bad breath. The key is not to ignore these signs, as early action means easier treatment!
            </p>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">Can gingivitis go away on its own?</h2>
            <p>
              Unfortunately, gingivitis won't just go away on its own. But the good news is that with proper daily oral hygiene habits, regular dental checkups, and professional cleanings, it can be reversed before it progresses to more serious, irreversible gum disease.
            </p>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">How is early-stage gingivitis treated?</h2>
            <p>
              Luckily, treating gingivitis is a straightforward process. The treatment typically starts with a professional dental cleaning to remove plaque and tartar buildup. From there, maintaining thorough at-home oral care is key. This means brushing at least twice daily, flossing daily, and using an antiseptic mouthwash when you finish.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 sm:p-6 text-center space-y-3">
              <p className="font-heading text-foreground font-semibold text-sm sm:text-base">Call Our Office for More Information</p>
              <p className="text-xs sm:text-sm">
                New Patients: <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> | Existing Patients: <a href="tel:+14042557047" className="text-primary hover:underline">(404) 255-7047</a>
              </p>
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-gold-dark font-body font-bold">
                <Link to="/request-an-appointment/">Request An Appointment</Link>
              </Button>
            </div>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">What happens if gingivitis isn't treated?</h2>
            <p>
              If left untreated, gingivitis often evolves into periodontitis, a more severe gum disease. This can lead to gum recession, infections, bone loss, or even tooth loss. Catching it early keeps things simple and saves you a lot of trouble down the road!
            </p>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">Why should I choose Dr. Talebi for my gingivitis treatment?</h2>
            <p>
              Dr. Talebi and her team combine their expertise with genuine care and a friendly approach to make you feel right at home. They use the latest technology and personalized care plans to ensure your gums are in tip-top shape while making your visit as comfortable as possible.
            </p>

            <h2 className="text-lg sm:text-xl font-heading text-foreground pt-2">How can I take the first step towards healthier gums?</h2>
            <p>
              Your smile deserves the very best care, and <Link to="/meet-the-doctor/" className="text-primary hover:underline">Dr. Shiva Talebi</Link> and her team at Tooth Architect Dental Care are here to help. Whether preventing or reversing gingivitis in its early stages, they're committed to providing exceptional care in Sandy Springs, GA. Schedule your appointment today and give your gums the love they deserve! The office is located at 6667 Vernon Woods Dr NE, Suite B30, and is open to new and established patients who call <a href="tel:+14046668066" className="text-primary hover:underline">(404) 666-8066</a> to <Link to="/request-an-appointment/" className="text-primary hover:underline">request an upcoming consultation visit</Link>.
            </p>
          </article>

          {/* Author box */}
          <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <img
              src="/images/team/Shiva_Color_DSC_2860.jpeg"
              alt="Dr. Shiva Talebi"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0"
              loading="lazy"
            />
            <div>
              <h3 className="font-heading text-base sm:text-lg text-foreground mb-2">Dr. Shiva Talebi</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Dr. Shiva Talebi combines her architectural background with a passion for dentistry, offering a unique approach to patient care. She graduated with the highest honors as a Gamma Beta Phi Honors Society member with recognition in Who's Who Among American Students from Georgia Tech and earned her DMD from the Dental College of Georgia. Dr. Talebi emphasizes holistic dentistry, prioritizing patient comfort and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
