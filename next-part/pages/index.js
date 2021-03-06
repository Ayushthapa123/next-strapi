import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Nav/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Home page!</a>
          
        </h1>
        <h3><Link href='/blogs'><a>Go to Blog page</a></Link></h3>

  
      </main>

    </div>
  )
}
