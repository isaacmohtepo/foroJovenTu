import styles from './styles.module.css'
import Head from "next/head";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import {useEffect} from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    useEffect(() => {
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
    },  [])
    return (
        <>
            <Head>
                <meta name="facebook-domain-verification" content="rjfqh4qp08f0qtj0dm1itdj4xhmfdy" />
                <link rel="icon" type="image/png" sizes="50x50" href="/images/favicon.png"/>
                <meta name="keywords" content="ForoJovenTú, Emprendimiento, Tecnologías, Crecimiento, Jóvenes." />
                <title>ForoJovenTú - Foro de jóvenes de la Cámara de Comercio Cartagena</title>
                <meta name="description" content="ForoJovenTÚ, El foro de jóvenes más grande de Colombia está listo para zarpar rumbo al cambio, y este año ya sabemos que el protagonista eres tú. En este foro hablaremos de educación y empleo, salud, participación ciudadana y nuevas tecnologías. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="canonical" href="https://forojoventu.com"/>


            </Head>
            <Navbar/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </>
    )
}