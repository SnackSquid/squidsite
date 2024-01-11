import json from "@/app/data/projectList.json";
import fs from "fs"
import path from "path"
import { remark } from "remark";
import html from "remark-html"

const markdownDir = path.join(process.cwd(), "app/projects/markdown")

export default function FetchJson() {
  return json;
}

export async function FetchMarkDown(filename) {
  const files = fs.readdirSync(markdownDir)
  files.map(async (file) => {
    if (file.replace(/\.md$/, "") == filename) {
      const filePath = path.join(markdownDir, file);
      const rawMD = fs.readFileSync(filePath, "utf-8");
      const content = await remark().use(html).process(rawMD)
      console.log(content.value)
      return content.value.toString();
    }
  })
}