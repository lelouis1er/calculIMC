import Layout from '../components/layout'
import HomeStyles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import { useState } from 'react'
import ImcForm from '../components/imc_form'

export default function Form() {

    return (
        <Layout home={false}>

            <Head>
                <title>calcul de l'imc</title>
            </Head>
            <header>
                <h2 className={utilStyles.headingLg}>
                    Calcul de l'IMC
                </h2>
            </header>
            <div className={HomeStyles.card}>

                <h3>
                    Formulaire de calcul de l'imc
                </h3>

                <hr />


                <ImcForm />


            </div>

        </Layout>
    )
}