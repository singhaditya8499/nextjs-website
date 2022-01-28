import Head from 'next/head' 
import Header from '@components/header';
import Navigation from '@components/navigation';
import { ReactNode } from 'react';

type PageProps = {
  children?: ReactNode;
}
const Page = ({ children }: PageProps) => (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>
      <main>
        <Header />
        <Navigation/>
        {children}
      </main>
    </>
)

export default Page;