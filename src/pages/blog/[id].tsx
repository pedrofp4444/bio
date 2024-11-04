import { GetStaticProps, GetStaticPaths } from "next";
import { getAllBlogIds, getBlogData } from "../../utility/blog";
import { ParsedUrlQuery } from "querystring";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";

interface BlogPostProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const BlogPost = ({
  title,
  subtitle,
  description,
  date,
  author,
  content,
}: BlogPostProps) => {
  return (
    <>
      <NextSeo
        title={`Pedro Pereira | Blog - ${title}`}
        description={description}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: `${siteMetadata.siteUrl}/blog/${title}`,
          title: `Pedro Pereira - ${title}`,
          description: description,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: title,
            },
          ],
          siteName: siteMetadata.siteName,
          type: "article",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: `${title}, Blog, Web Development`,
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-5xl">
          <header className="mb-8 border-b border-muted-foreground pb-8">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              {title}
            </h1>
            <h2 className="mt-2 text-xl text-muted-foreground md:text-2xl">
              {subtitle}
            </h2>
            <div className="mt-4 flex flex-col text-sm text-muted-foreground md:flex-row md:justify-between">
              <span>By {author}</span>
              <span>{date}</span>
            </div>
          </header>
          <article className="markdown prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
          <footer className="mt-12 border-t border-muted-foreground pt-8">
            <p className="text-muted-foreground">{description}</p>
          </footer>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps, Params> = async ({
  params,
}) => {
  const { id } = params as Params;
  const blogData = await getBlogData(id);

  return {
    props: {
      ...blogData,
    },
  };
};

export default BlogPost;
