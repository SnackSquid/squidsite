import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Home from "./Home";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="text-l md:text-xl font-bold dark:text-zinc-100">Ope!</h1>
        <p className="mt-5 mb-1 dark:text-stone-200">
          Sorry, an unexpected error has occurred:
        </p>
        <p className="mb-5 dark:text-stone-200">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded duration-500">
            Go Home
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
