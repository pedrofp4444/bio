import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
{
  /*import ProjectShowcase from "@/components/projects/project-showcase";*/
}
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
{
  /*import { PROJECT_SHOWCASE } from "@/data/projects";*/
}
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <NextSeo
        title="Pedro Pereira | Home"
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
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      {/*<ProjectShowcase projects={PROJECT_SHOWCASE} />*/}
    </>
  );
}
