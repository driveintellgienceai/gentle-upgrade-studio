import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  type?: string;
}

export default function SEOHead({ title, description, canonical, type = "website" }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonical, "property");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // JSON-LD
    let script = document.getElementById("json-ld") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: "Tooth Architect Dental Care",
      url: "https://www.tootharchitectdental.com",
      telephone: "+14046668066",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6667 Vernon Woods Dr NE, Ste B 30",
        addressLocality: "Sandy Springs",
        addressRegion: "GA",
        postalCode: "30328",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "195",
      },
    });
  }, [title, description, canonical, type]);

  return null;
}
