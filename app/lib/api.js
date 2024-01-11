import fs from "fs"
import path from "path"
import html from "remark-html"
import matter from "gray-matter";

import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";


const markdownDir = path.join(process.cwd(), "app/projects/markdown")
const SquidAPI = (() => {

  const GetProjectList = async () => {
    const filenames = fs.readdirSync(markdownDir);
    const projects = filenames.map((filename) => {
      const filePath = path.join(markdownDir, filename);
      const rawMD = fs.readFileSync(filePath, "utf-8");
      const data = matter(rawMD);
      return data.data
    })
    return projects;
  };

  const GetMarkDownFile = async (filename) => {
    const filePath = path.join(markdownDir, `${filename}.md`);
    const rawMD = fs.readFileSync(filePath, "utf-8");
    const data = matter(rawMD);
    return data;
  }

  const ConvertMarkDown = async (rawMD) => {
    const convertedMD = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(await rawMD);

    return convertedMD.value;
  }

  return {
    GetProjectList,
    GetMarkDownFile,
    ConvertMarkDown
  };
})();

export default SquidAPI;