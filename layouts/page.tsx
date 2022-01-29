import Head from 'next/head' 
import Header from '@components/header';
import Navigation from '@components/navigation';
import { ReactNode } from 'react';
import { useRouter } from 'next/dist/client/router';
import Main from '@components/main';

type PageProps = {
  children?: ReactNode;
}
const Page = ({ children }: PageProps) => {
  const currentURL = useRouter()
  return(
    <>
      <Head>
        <title>Aditya Singh</title>
      </Head>
      <main>
        {(currentURL.pathname !== "/") ? <Header /> : <Main/>}
        {/* <Navigation/> */}
        {children}
      </main>
    </>
  )
}

export default Page;