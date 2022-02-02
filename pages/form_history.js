import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function FormHistory() {

    return ( 
        
        <Layout home = { true } >

            <Head>
                <title>Historique</title>
            </Head>

            <header>
                <h2 className={utilStyles.headingLg}>
                    Historique de Calcul de l'IMC
                    {' -- '}
                    <Link href="/form">
                        <a>
                            <button className="btn btn-sm btn-success" title='Nouveau Calcul' >{' '}+ Nouveau{' '}</button>
                        </a>
                    </Link>
                </h2>
                <hr/>
                <table className='table'>

                    <thead>
                        <tr>
                            <th width='60%'>Noms</th>
                            <th>IMC</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    </tbody>

                    <tfoot>
                        
                    </tfoot>

                </table>
            </header>

        </Layout>
    )
}