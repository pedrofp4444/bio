import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "src/data/blog");

interface BlogMetadata {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
}

interface BlogData extends BlogMetadata {
  content: string;
}

export function getAllBlogIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
}

export function getAllBlogMetadata(): BlogMetadata[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    } as BlogMetadata;
  });

  return allBlogsData.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getBlogData(id: string): Promise<BlogData> {
  const fullPath = path.join(blogDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Process the content with remark
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    ...data,
    content: contentHtml,
  } as BlogData;
}
