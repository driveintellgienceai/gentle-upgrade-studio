import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

export default function BlogPost() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\/|\/$/g, "");
  const [post, setPost] = useState<{ title: { rendered: string }; content: { rendered: string } } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.tootharchitectdental.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setPost(data[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  return (
    <Layout>
      <SEOHead
        title={post ? `${post.title.rendered} | Tooth Architect Dental Care` : "Blog Post | Tooth Architect Dental Care"}
        description="Read this dental health article from Tooth Architect Dental Care in Sandy Springs, GA."
        canonical={`https://www.tootharchitectdental.com/${slug}/`}
      />
      {post ? (
        <>
          <PageBanner title={post.title.rendered} />
          <section className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-sm sm:prose font-body text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </section>
        </>
      ) : loading ? (
        <section className="py-24 text-center text-muted-foreground font-body">Loading...</section>
      ) : (
        <section className="py-24 text-center text-muted-foreground font-body">Post not found.</section>
      )}
      <CTABanner />
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
