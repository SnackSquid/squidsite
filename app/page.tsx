import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1>Hello world!</h1>
        <p className="mt-5 dark:text-stone-200">
          I am SnackSquid. Don&apos;t think too hard about the name. This is my
          webpage where I highlight my projects and stuff. This webpage is one
          of them!!
        </p>
      </div>

      <Footer />
    </>
  );
}
