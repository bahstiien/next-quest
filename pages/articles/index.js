import moment from "moment";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getArticles } from "../../models/article";

export default function ArticleListPage({ articles }) {
  return (
    <Layout pageTitle="Articles">
      <h1>Articles</h1>
      <ul>
        {articles.map(({ id, title }) => {
          const href = "/articles/" + id;
          return (
            <li key={id}>
              <Link href={href}>
                <a href={href}>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getArticles(0, 5);

  return {
    props: {
      articles,
    },
  };
}
