import { css } from "@emotion/react";

export const aboutStyle = css `
height: 100%;
width: 160px;
position: fixed;
z-index: 0;
bottom: 0;
display: flex;
justify-content: flex-end;
flex-direction: column;

a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
`

export const paraStyle = css `
max-width: 780px;
margin: auto;
font-family: Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif;
font-size: calc(1.1875rem);
-webkit-font-smoothing: antialiased;
line-height: calc(1em + 0.725rem);
text-align: justify;
letter-spacing: -0.05rem;
padding: 2rem 0;

.quote {
  text-align: center;
  font-weight: 600;
}
.whoSaid {
  text-align: right;
  font-weight: 400;
  font-size: initial;
}

img {
  padding: 2ch 0;
  max-width: 100%;
}
`