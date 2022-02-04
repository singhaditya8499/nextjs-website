import { css } from "@emotion/react";

export const blogCss = css `
    max-width: 810px;
    margin: auto;
    font-family: Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: calc(1.1875rem);
    -webkit-font-smoothing: antialiased;
    line-height: calc(1em + 0.725rem);
    text-align: justify;
    letter-spacing: -0.05rem;

    .image {
        text-align: center;
        margin: 5ch;
    }

    h1 {
        font-weight: 600;
        text-align: center;
        color: hsl(225deg, 15%, 15%);
        margin: 3ch;
        line-height: normal;
    }
`