import { css } from '@emotion/react';

const container = css `
    // min-height: 40vh;
    // padding: 1rem 0;
    // display: grid;
    // place-items: center;
    overflow: hidden;
  background-color: var(--page-background);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  `
const title = css `
    font-size: 4rem;
    text-align: center;
    margin-top: 0;
  `

export {container, title}