import { Link } from "react-router-dom";
import Markdown from "react-markdown";

import Header from "./Header";
import Footer from "./Footer";

export default function Article(props) {
  const project = props.project;

  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold">{project.title}</h1>
        <p className="mt-5">
          <Markdown>{project}</Markdown>
        </p>
      </div>
      <Footer />
    </>
  );
}
