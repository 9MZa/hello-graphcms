import { gql } from "@apollo/client";
import client from "../apolloClient";
import Card from "../components/Card";

export default function Index({ posts }) {
  return (
    <>
      <h1>Next.JS & GraphCMS</h1>
      {posts.map((post, i) => {
        return (
          <Card key={i} post={post} />
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query {
        posts(orderBy: createdAt_DESC) {
          title
        }
      }      
  `
  });

  const { posts } = data;

  return {
    props: {
      posts
    }
  };
}
