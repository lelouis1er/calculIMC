import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>Calcul IMC </title>
        <meta name="description" content="Calcul de l'IMC" />
        <link rel="icon" href="/imc.png" />
      </Head>

      <h1 className={utilStyles.heading2Xl}>
        <Link href="/form">
          <a>
            <button className={utilStyles.btn}>
              <span>+ Nouveau</span>
            </button>
          </a>
        </Link>
        <br/>
        Historique des calculs

      </h1>
      

    </Layout>
  )
}

export async function getStaticProps() {
      
}
