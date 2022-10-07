import styles from './styles.module.css';

export default function Gamers() {
    return (
        <>
            <div id="gamers"></div>
            <section id="" className={styles.section}>
                <div className={styles.cruz_roja}><img src="/images/cruz-roja.png" alt=""/></div>
                <div className={styles.carita_triste}><img src="/images/carita-triste.png" alt="Carita triste"/></div>
                <div className={styles.lineas_azul}><img src="/images/flechas-azul.png" alt="Flechas azul"/></div>
                <div className={styles.puntos}>
                    <img src="/images/puntos-apoyo.png" alt=""/>
                </div>
                <div className={styles.general}>

                    <div className={styles.content_general}>
                        <div className={styles.content}>
                            <h2>Esports</h2>
                            <h3>¡NO ES SOLO UN JUEGO!</h3>
                            <p><span>Prepárate para vivir una experiencia fuera de serie como un GAMER profesional. </span>
                                Jugar videojuegos dejó de ser solo una entretención. Conoce las nuevas profesiones y los
                                nuevos atletas virtuales, pero sobre todo, cómo tú puedes convertirte en uno.

                            </p>
                            <div className={styles.cruz_azul}><img src="/images/cruz-azul.png" alt=""/></div>
                            <span className={styles.hastag}>#Somos<strong>Gamers</strong></span>
                        </div>

                    </div>

                    <div className={styles.multimedia_general}>

                        <div className={styles.multimedia}>
                            <div className={styles.pestaña_play}>
                                <img src="/images/pestanas-play.png" alt="Pestañas | Play"/>
                            </div>
                            <div className={styles.lineas_rosadas}>
                                <img src="/images/flechas-rosadas.png" alt=""/>
                            </div>


                            <img className={styles.pantalla} src="/images/pantalla-gamers.png" alt="Pantalla Gamers"/>

                        </div>

                    </div>
                </div>
                <div className={styles.call_to_action}>
                </div>
                <div className={styles.apoyo_grafico}>
                    <img src="/images/mancha-rosada-apoyo-grafico.png" alt=""/>
                </div>
                <div className={styles.cruz_roja_left}>
                    <img src="/images/cruz-roja-left.png" alt=""/>
                </div>
                <div className={styles.carita_sopresa}><img src="/images/carita-sopresa.png" alt="Carita sorpresa"/>
                </div>
            </section>
        </>
    );
}
