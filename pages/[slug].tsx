import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { FormatedPost, getPosts } from "shared/get-posts"
import { MDXRemote } from 'next-mdx-remote';
import { blogCss } from "@styles/Blog";

export default function Post({
    mdxContent,
    frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
    <div css={blogCss}>
        <h1>{frontmatter.title}</h1>
        <MDXRemote compiledSource={mdxContent.compiledSource} />
    </div>
    );
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
    const { slug: routeSlug } = params as {slug: string}
    const posts = await getPosts('./posts');
    const {mdx, frontmatter} = posts.find(
        ({slug: postSlug}) => postSlug === routeSlug
    ) as FormatedPost

    return {
        props: {
            mdxContent: mdx,
            frontmatter

        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts('./posts');

    const paths = posts.map(({slug}) => ({
        params: {
            slug,
        }
    }))

    return {
        paths,
        fallback: false
    }
}
