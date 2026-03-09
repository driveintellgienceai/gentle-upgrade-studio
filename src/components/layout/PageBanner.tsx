import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-secondary py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-primary leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#5F5B35]/80 max-w-2xl mx-auto font-body leading-relaxed px-2"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
