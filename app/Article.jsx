import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";

import Markdown from "react-markdown";
import Header from "./header";
import Footer from "./Footer";

import json from "./projects/projectList.json";

function getMDUrl(name) {
  return new URL(`./markdown/${name}.md`, import.meta.url).href
}

export default function Article(props) {
  const { path } = useParams();

  const project = json[path]
  const md = getMDUrl(project.key);

  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold mb-5 dark:text-stone-100">{project.title}</h1>
        <p className="mt-5 dark:text-stone-200">
          <Markdown>{md}</Markdown>
        </p>
      </div>
      <Footer />
    </>
  );
}
