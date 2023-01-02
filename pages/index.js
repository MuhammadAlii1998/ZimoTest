import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Card from './components/Card'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZIMO Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card />
      </main>
    </div>
  )
}

