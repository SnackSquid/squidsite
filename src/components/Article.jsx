import Header from "./Header";
import Footer from "./Footer";

export default function Article(props) {
  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold">Hello world!</h1>
        <p className="mt-5"></p>
      </div>
      <Footer />
    </>
  );
}
