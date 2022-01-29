import { css } from '@emotion/react';

const navigationStyles = css `
    position: relative;
    // top: -3ch;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    max-width: var(--page-width)
    // margin: 0 auto;
    margin-top: 60px;
    font-size: 2.5rem;
    padding: 1.5ch 5ch;
    background-color: var(--page-background);
    width: 90%;

    a:hover,
    a:focus {
        color: var(--color-links)
    }
`

export { navigationStyles }