import styles from './styles.module.css'

export default function BannerHeader() {
    return (
        <>
            <div className={styles.banner_header}>
                <div className={styles.container_content}>
                    <div className={styles.content}>
                        <h1><img src="/images/VII-foro-joven-tu.png" alt="VII foro joven tu"/></h1>
                        <h2>Te damos la </h2>
                        <h2><span>Bienvenida a bordo</span></h2>
                        <p>Juntos cambiaremos el mundo</p>
                        <hr/>
                        <div className={styles.apertura}>
                            <p>Sábado, 29 de octubre </p>
                            <p><strong>Teatro Adolfo Mejía</strong></p>
                            <p>Hora de apertura 7:00 a.m.</p>
                        </div>
                        <a href="#registro"><strong>¡Quiero unirme!</strong></a>
                    </div>
                    <div className={styles.container_img}>
                        <img src="/images/Fotos-Jovenes.png" alt="Foto jovenes | emprendedores"/>
                    </div>
                </div>
                <div className={styles.apoyo_grafico}>
                    <img src="/images/mancha-rosada-apoyo-grafico.png" alt="Mancha rosada | Apoyo grafico"/>
                </div>
            </div>

        </>
    )
}