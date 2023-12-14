/**
 * This file is responsible for generating a sitemap for the application. 
 * A sitemap is a file that provides information about the pages, videos, 
 * and other files on your site, and the relationships between them. 
 * This information is used by search engines like Google to more intelligently 
 * crawl your site.
 *
 * The function `sitemap` queries the database to get a list of users and 
 * then generates a URL for each user. These URLs, along with the root URL 
 * of the site, are returned as an array of objects, each representing a URL 
 * in the sitemap. Each URL object also includes a `lastModified` field, 
 * which indicates when the URL was last updated.
 *
 * This sitemap generation function helps improve the SEO (Search Engine Optimization) 
 * of your application by making it easier for search engines to find and index your pages.
 */


import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://www.kronews.at",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://www.kronews.at/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}