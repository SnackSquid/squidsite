import json from "@/app/data/projectList.json";
import fs from "fs"
import path from "path"

const markdownDir = path.join(process.cwd(), "app/projects/markdown")

export default function FetchJson() {
  return json;
}

export function FetchMarkDown(filename) {
  const files = fs.readdirSync(markdownDir)
  files.map((file) => {
    if (file.replace(/\.md$/, "") == filename) {
      const filePath = path.join(markdownDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      console.log(content)
    }
  })
}