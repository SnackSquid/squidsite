import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import DisplayCard from "./displaycard";
import SquidAPI from "@/app/lib/api";

export default async function Projects() {
  const projects = await SquidAPI.GetProjectList();
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
