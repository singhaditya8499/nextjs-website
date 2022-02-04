import { css } from "@emotion/react";

const blogListCss = css `
    list-style-type:none;
    font-family: var(--blog-font-family);
    font-weight: 200;
    overflow-wrap: break-word;
    max-width: 675px;
    margin: auto;

    li {
        margin: 6ch 0;
        background: #f3f8fc;
        border-radius: 8px;
        padding: 32px;
        
    }

    a {
        font-size: x-large;
        cursor: pointer;
    }

    p {
        font-weight: 100;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        line-height: calc(1em + 0.725rem);
        letter-spacing: inherit;
    }
`

export { blogListCss }