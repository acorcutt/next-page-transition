import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Transition / Home</title>
        <meta name="description" content="Test page transition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>

        <p className={styles.description}>Navigate between pages to see page transition.</p>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>Home</h2>
              <p>Home page test.</p>
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About</h2>
              <p>About page test.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
