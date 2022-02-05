import { css } from '@emotion/react';

const container = css `
    background: #dbf0f9;
    position: sticky;
    top: 0px;
    width: 100%;
    padding: 20px;

    a {
      font-family: var(--blog-font-family);
      padding: 20px;
      font-size: large;
      color: gray;
    }
    a:hover {
      color: black;
    }

    a.name {
      color: black;
      display: contents;
    }
  `

export {container}