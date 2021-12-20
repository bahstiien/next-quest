import { useRouter } from "next/router";
import { getArticles, getSingleArticle } from "../../models/article";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function ArticleDetailPage({ title, body, pictureUrl }) {
  const router = useRouter();
  return (
    <Layout>
      <>
        <Link href="/articles">Back </Link>
        <h1>{title}</h1>
        <Image
          alt="Picture representing the content of the article. Or not."
          width={600}
          height={400}
          src={pictureUrl}
        />
        <p>{body}</p>
      </>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = await getArticles(0, 3);
  const paths = articles.map((a) => ({ params: { id: a.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { title, body, pictureUrl } = await getSingleArticle(params.id);

  return {
    props: {
      title,
      body,
      pictureUrl,
    },
    revalidate: 2,
  };
}
