import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}
