import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({
  children,
  title = 'Frontend Mentor | Officelite coming soon site'
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}
