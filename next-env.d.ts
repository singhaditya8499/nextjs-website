/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="@emotion/react/types/css-prop"/>

type RenderToStringParams = {
    components?: object;
    mdxOptions?: object;
    scope?: object;
}

type HydrateParams = {
    components?: object;
}

// declare module 'next-mdx-remote/render-to-string' {
//     function renderToString(
//         source: string,
//         RenderToStringParams?: RenderToStringParams
//     ): object

//     export default renderToString
// } 

declare module 'next-mdx-remote/hydrate' {
    function hydrate(
        mdxObject: string,
        components?: HydrateParams
    ): string

    export default hydrate
} 

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
