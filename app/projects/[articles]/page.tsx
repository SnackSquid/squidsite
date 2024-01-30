import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import SquidAPI from "@/app/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

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
      <div className="flex flex-col border-b-2 border-grey-500 border-dashed p-5">
        <div className="flex justify-center h-400">
          <Image
            height={400}
            width={400}
            src={articleInfo.hero}
            alt={articleInfo.title}
            className="object-cover dark:text-stone-100"
          />
        </div>

        <h1>{articleInfo.title}</h1>
      </div>
      <article className="flex flex-col space-y-5 m-5 dark:text-stone-200 p-5">
        <MDXRemote source={content} />
      </article>
      <Footer />
    </>
  );
}
