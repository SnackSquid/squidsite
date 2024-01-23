import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import SquidAPI from "@/app/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";

type Params = {
  params: {
    articles: string;
  };
};

export default async function Page(params: Params) {
  const key = params.params.articles;

  const MDX = await SquidAPI.GetMDX(key);
  const content = MDX.content;
  const articleInfo = MDX.data;

  return (
    <>
      <Header />
      <div className="flex items-center border-b-2 border-grey-500 border-dashed p-5">
        <h1>
          {articleInfo.title}
        </h1>
      </div>
      <article
        className="flex flex-col space-y-5 m-5 dark:text-stone-200 p-5"
      > <MDXRemote source={content} /> </article>
      <Footer />
    </>
  );
}