import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.tootharchitectdental.com/wp-json/wp/v2/posts?per_page=10&page=1&_embed")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <SEOHead title="Dental Blog Sandy Springs, GA | Oral Health Tips and News" description="Read the latest dental health tips, news, and insights from Tooth Architect Dental Care in Sandy Springs, GA." canonical="https://www.tootharchitectdental.com/blog/" />
      <PageBanner title="Latest From Our Blog" />
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-muted-foreground font-body">Loading posts...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} to={`/${post.slug}/`}>
                  <Card className="h-full hover:shadow-md transition-shadow rounded-xl">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-heading mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <p className="text-xs text-muted-foreground mb-3 font-body">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </p>
                      <div className="text-sm text-muted-foreground font-body line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <div className="lg:hidden h-16" />
    </Layout>
  );
}
