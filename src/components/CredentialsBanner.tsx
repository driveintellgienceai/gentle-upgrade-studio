import { siteConfig } from "@/config/siteConfig";

export default function CredentialsBanner() {
  return (
    <section className="py-8 sm:py-10 bg-[#B1C6B7]/10 border-y border-[#B1C6B7]/20">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-body text-[#5F5B35]/50 uppercase tracking-widest mb-4">
          Professional Affiliations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {siteConfig.affiliations.map((name) => (
            <span
              key={name}
              className="text-sm font-body text-[#5F5B35]/70 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
