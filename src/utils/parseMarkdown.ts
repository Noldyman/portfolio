import { remark } from "remark";
import html from "remark-html";

export const parseMarkdown = async (markdownString: string) => {
  const processedContent = await remark().use(html).process(markdownString);
  const htmlContnent = processedContent.toString();

  return htmlContnent;
};
