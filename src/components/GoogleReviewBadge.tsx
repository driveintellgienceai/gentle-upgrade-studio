import { Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function GoogleReviewBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={siteConfig.google.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-body ${className}`}
    >
      <span className="font-semibold">{siteConfig.google.rating}</span>
      <Star className="h-4 w-4 fill-brand-rust text-brand-rust" />
      <span className="text-muted-foreground">· {siteConfig.google.reviewCount} Reviews on Google</span>
    </a>
  );
}
