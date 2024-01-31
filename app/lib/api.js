import fs from "fs"
import path from "path"
import matter from "gray-matter";

const markdownDir = path.join(process.cwd(), "public/markdown/")
const imgDir = path.join(process.cwd(), "public/")
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

  const GetMDX = async (filename) => {
    const filePath = path.join(markdownDir, `${filename}.mdx`);
    const rawMD = fs.readFileSync(filePath, "utf-8");
    const markdown = matter(rawMD);
    return markdown;
  }

  return {
    GetProjectList,
    GetMDX
  };
})();

export default SquidAPI;