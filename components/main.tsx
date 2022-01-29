import { css } from '@emotion/react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
const mainPageCss = css `
  h1,h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    color: rgb(0, 0, 0);
    margin: 0.4em 0;
    text-align: center;
  }
  img {
    margin: 8ch 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
  }
`
const profileImageCss = css `
`
export default function Main() {
    return (
        <>
        <div css={mainPageCss}>
            <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
            <img src="profile.png" alt="Girl in a jacket" width="240" height="230"></img> 
            <h1 >
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello human, my name is <strong>Aditya Singh</strong>.')
                .pauseFor(2500)
                .deleteAll()
                .typeString('I am a <strong>Pantomath</strong>.')
                .pauseFor(1500)
                .deleteChars(15)
                .typeString('love to <strong>code</strong>.')
                .pauseFor(1500)
                .start();
                }}
                options={{
                    // strings: ['Hello human, my name is <strong>Aditya Singh</strong>.', 'I am a Pantomath.', 'I love to think.' ],
                    autoStart: true,
                    loop: true,
                    // pauseFor: 1500,
                    skipAddStyles: true
                }}
                />
            </h1>
        </div>
        </>
    )
}