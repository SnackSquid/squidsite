import json from "@/app/data/projectList.json";
import fs from "fs"
import path from "path"
import { remark } from "remark";
import html from "remark-html"
import matter from "gray-matter";

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
    const convertedMD = await remark().use(html).process(rawMD)
    return convertedMD.value.toString();
  }

  return {
    GetProjectList,
    GetMarkDownFile,
    ConvertMarkDown
  };
})();

export default SquidAPI;