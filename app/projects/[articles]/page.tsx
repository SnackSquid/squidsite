import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import SquidAPI from "@/app/lib/api";

type Params = {
  params: {
    articles: string;
  };
};

export default async function Page(params: Params) {
  const key = params.params.articles;
  const mdFile = await SquidAPI.GetMarkDownFile(key);
  const articleInfo = mdFile.data;
  const markDown = await SquidAPI.ConvertMarkDown(mdFile.content);

  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold mb-5 dark:text-stone-100">
          {articleInfo.title}
        </h1>
        <article
          className="mt-5 dark:text-stone-200"
          dangerouslySetInnerHTML={{ __html: markDown }}
        ></article>
      </div>
      <Footer />
    </>
  );
}

function GetMarkdownFile() {
  throw new Error("Function not implemented.");
}
/*
async function GetMarkdownFile() {
  const params = useParams<{ route: string }>();
  console.log(params);
  const md = `@/app/markdown/${route}.md`;
  const mdString = fs.readFileSync(md, "utf8");
  return mdString;
}
*/
/*
export async function generateStaticParams() {
  const posts = Object.entries(json);
  return posts.map((post) => ({
    slug: post.path,
  }));
}
*/
