import { css } from '@emotion/react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { profileLinks } from '../public/profileData';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
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
const profileLinksCss = css `
text-align: center;
margin: 4ch;
  a {
      margin: 0 2ch;
  }
`

const navigationLinksCss = css `
    position: relative;
    display: flex;
    justify-content: center;
    a {
        font-family: 'Raleway', sans-serif;
        margin: 8ch 2ch;
        font-weight: 700;
        font-size: larger;
        letter-spacing: 1px;
        text-align: center;
        display: fixed;
        color: rgb(0,0,0);
    }
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
        <div css={profileLinksCss}>
                <a
                    href="https://github.com/singhaditya8499"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://img.icons8.com/ios-filled/50/000000/github.png" width="64" height="64"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/singhaditya8499/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"/>
                </a>
                <a
                    href="https://www.hackerrank.com/white_whale"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" width="64" height="64"/>
                </a>
                <a
                    href="mailto:singh.aditya8499@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-mail-mail-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-22.png" width="64" height="64"/>
                </a>
            </div>
            <div css={navigationLinksCss}>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        </>
    )
}