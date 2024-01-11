import json from "@/app/data/projectList.json";
import fs from "fs"
import path from "path"
import { remark } from "remark";
import html from "remark-html"

const markdownDir = path.join(process.cwd(), "app/projects/markdown")

export default function FetchJson() {
  return json;
}

export async function GetMarkDownFile(filename) {
  const filePath = path.join(markdownDir, `${filename}.md`);
  const rawMD = fs.readFileSync(filePath, "utf-8");
  return rawMD;
}

export async function FetchMarkDown(rawMD) {
  const convertedMD = await remark().use(html).process(rawMD)
  return convertedMD.value.toString();

}