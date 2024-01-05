import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";

import Markdown from "react-markdown";
import Header from "./Header";
import Footer from "./Footer";

import json from "./projects/projectList.json";

export default function Article() {
  let { path } = useParams();

  let obj;
  json.map((project) => {
    if (project["path"] == path) {
      obj = project;
    }
  });
  const project = obj;

  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold">{project.title}</h1>
        <p className="mt-5">
          <Markdown></Markdown>
        </p>
      </div>
      <Footer />
    </>
  );
}
