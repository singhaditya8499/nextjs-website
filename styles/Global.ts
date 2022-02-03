import { css } from '@emotion/react';

const global = css `
:root {
  --page-background: rgb(255, 255, 255);
  --page-text: rgb(40, 40, 40);
  --page-width: 800px;
  --color-links: rgb(240, 64, 10);
  --blog-font-family: "Wotfard",Futura,-apple-system,sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: var(--page-background);
  color: var(--page-text);

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

export { global }
