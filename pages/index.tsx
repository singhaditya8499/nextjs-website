import Page from '@layouts/page';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getPosts, Post } from 'shared/get-posts';

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("Posts are: ", posts);
  const allPosts = posts as Post[];
  return (
    <Page>
      <ul>
        {
          allPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/${post.slug}`}>
                <a>{post.frontmatter.title}</a>
              </Link>
            </li>

          ))
        }
      </ul>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const posts = await getPosts('./posts');
  const allMdx = posts.map(({slug, frontmatter}) => ({
    slug,
    frontmatter
  }))
  return {
    props: {
      posts: allMdx as Post[],
    }
  }
}
