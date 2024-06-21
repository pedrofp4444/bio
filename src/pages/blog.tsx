import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import BlogCard from "@/components/blog/blog-card";

export default function Blog() {
  return (
    <>
      <NextSeo
        title="Pedro Pereira | Blog"
        description="Explore the professional portfolio of Pedro Pereira, living passionate about ideas that resonate and transform."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Pedro Pereira - Computer engineer student",
          description:
            "Explore the professional portfolio of Pedro Pereira, living passionate about ideas that resonate and transform.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Pedro Pereira - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "Portfolio, Web Development, Computer Engineer Student",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Blog
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some writings that I&apos;ve realized.
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            <BlogCard
              id="example-1"
              title="Post exemplo"
              subtitle="Exemplos de Markdown"
              description="Um exemplo de post em Markdown."
              date="21-06-2024"
              author="Pedro Pereira"
            />
          </div>
        </div>
      </section>
    </>
  );
}
