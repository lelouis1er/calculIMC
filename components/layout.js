
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import HomeStyles from '../styles/Home.module.css'

const author = "Louis STARK"
const name = "Calcul de l'IMC"
export const siteTitle = 'Calcul de l\'IMC'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/imc.png" />
        <meta
          name="description"
          content="Calcul de l'IMC avec Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <Image
              priority
              src="/imc.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
        
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/form_history">
            <a>← Retour à l'historique</a>
          </Link>
        </div>
      )}

        <>
        <br/>
        </>

      <footer className={HomeStyles.footer}>
        <a
          href="https://github.com/lelouis1er"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <img className={HomeStyles.logo} src="https://avatars.githubusercontent.com/u/37287345?v=4" alt="GitHub Logo"/>
          </span>
          {' '}
          {author}
        </a>
      </footer>

    </div>

  )
}