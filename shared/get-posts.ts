import { promises as fs, readdirSync } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type PostFile = {
    filePath: string
    slug: string
}

type FrontMatter = {
    date: string,
    title: string,
    description: string
}

export type FormatedPost = {
    filePath: string,
    slug: string,
    content: string,
    frontmatter: FrontMatter,
    mdx: MDXRemoteSerializeResult
}

export interface Post {
    slug: string,
    frontmatter: FrontMatter
}

const getDirData = (source: string): PostFile[] => 
readdirSync(source).map((name) => ({
    filePath: `${source}/${name}`,
    slug: name.replace(new RegExp(path.extname(name) + '$'), ''),
}))

const formatPostList = async ({ filePath, slug}: PostFile) => {
    const mdxSource = await fs.readFile(filePath);
    const { content, data: frontmatter} = matter(mdxSource);
    const mdx = await serialize(content);

    return {
        filePath,
        slug,
        content,
        frontmatter,
        mdx
    }
}

export async function getPosts(source:string) {
    const files = getDirData(source);
    if (files.length === 0) return [];

    const content = await Promise.all(files.map(formatPostList));
    content.sort((post1, post2) => {
        const date1 = +new Date(post1.frontmatter.date);
        const date2 = +new Date(post2.frontmatter.date);

        return date2-date1;
    })
    return content;
}
