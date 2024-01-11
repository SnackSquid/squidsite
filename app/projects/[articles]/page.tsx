import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { FetchMarkDown } from "@/app/lib/fileImporters";
import FetchJson from "@/app/lib/fileImporters";

const json = FetchJson();

export default async function Page(params: Object) {
  const key = params.params.articles;
  const articleInfo = json[key];
  console.log(articleInfo.path);
  const markDown = await FetchMarkDown(articleInfo.path);
  console.log(markDown);
  return (
    <>
      <Header />
      <div className="border-b-2 border-grey-500 border-dashed p-5">
        <h1 className="text-l md:text-xl font-bold mb-5 dark:text-stone-100">
          {articleInfo.title}
        </h1>
        <article className="mt-5 dark:text-stone-200">{markDown}</article>
      </div>
      <Footer />
    </>
  );
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
