import Page from "@layouts/page";
import { blogListCss } from "@styles/BlogList";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getPosts, Post } from "shared/get-posts";

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const allPosts = posts as Post[];
    return (
      <Page>
          <ul css={blogListCss}>
          {
            allPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <a>
                    {post.frontmatter.title}
                    <p>{post.frontmatter.description}</p>
                  </a>
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