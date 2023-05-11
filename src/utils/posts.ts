import fs from "fs";
import { parseMarkdown } from "./parseMarkdown";

const postsDirectory = process.cwd() + "/src/posts/";

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      post: fileName.replace(/\.md$/, ""),
    },
  }));
}

export const getPost = async (postName: string) => {
  const fullPath = postsDirectory + postName + ".md";
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const htmlContent = await parseMarkdown(fileContent);

  return htmlContent;
};
