import { siteConfig } from "@/config/siteConfig";

export default function CredentialsBanner() {
  return (
    <section className="py-8 md:py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {siteConfig.affiliations.map((name) => (
            <span
              key={name}
              className="text-xs md:text-sm font-body text-muted-foreground whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
