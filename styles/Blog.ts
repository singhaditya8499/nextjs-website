import { css } from "@emotion/react";

export const blogCss = css `
    max-width: 75%;
    margin: auto;
    font-family: Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: calc(1.1875rem);
    -webkit-font-smoothing: antialiased;
    line-height: calc(1em + 0.725rem);
    text-align: initial;
    letter-spacing: -0.05rem;

    .image {
        text-align: center;
        margin: 5ch;
    }

    img {
        max-width: 50%;
    }

    h1 {
        font-weight: 600;
        text-align: center;
        color: hsl(225deg, 15%, 15%);
        margin: 1%;
        line-height: normal;
    }

    .video_container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
      }
      .video_container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      code {
        color: darkviolet;
        
      }
`