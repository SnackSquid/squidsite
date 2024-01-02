import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold">Hello world!</h1>
        <p className="mt-5">
          I am SnackSquid. Don't think too hard about the name. This is my
          webpage where I highlight my projects and stuff. This webpage is one
          of them!!
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Home;
