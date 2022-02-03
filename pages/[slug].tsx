import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { FormatedPost, getPosts } from "shared/get-posts"
import { MDXRemote } from 'next-mdx-remote';

export default function Post({
    mdxContent,
    frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <MDXRemote compiledSource={mdxContent.compiledSource} />
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
    const { slug: routeSlug } = params as {slug: string}
    const posts = await getPosts('./posts');
    console.log("Posts are: ", posts[0].mdx.compiledSource);

    console.log("Params: ", params);
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
