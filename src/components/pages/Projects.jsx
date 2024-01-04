import Header from "../Header";
import Footer from "../Footer";
import DisplayCard from "../DisplayCard";
import json from "../projects/projectList.json";

const projects = Object.values(json);

export default function Projects() {
  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold mb-2 mt-2 md:mt-5 md:mb-5 dark:text-zinc-100">
          Projects and assorted goofing off
        </h1>
      </div>
      <div className="flex justify-center flex-col gap-y-5 m-5">
        <DisplayCard list={projects} />
      </div>

      <Footer />
    </>
  );
}
