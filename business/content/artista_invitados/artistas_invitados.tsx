import styles from './styles.module.css';
export default function ArtistasInvitados() {
    return (
        <>
            <section id="artistas" className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>¡Artistas Invitados!</h2>
                        <p>Tripulación, ¿ya saben quiénes son nuestros invitados especiales? </p>
                        <p><span>¿No? ¡Te dejamos unas pistas!</span></p>
                    </div>

                    <div className={styles.general_artistas}>
                        <div className={styles.circle_artista_local}>
                            <div className={styles.back}><h2>Artistas <span>locales</span></h2></div>
                            <div className={styles.front}><h2>Artistas <span>locales</span></h2></div>
                        </div>
                        <div className={styles.circle_artista_tiktok}>
                            <div className={styles.back}><h2>¡Los amamos en <span>TikTok!</span></h2></div>
                            <div className={styles.front}><h2>¡Los amamos en <span>TikTok!</span></h2></div>
                        </div>
                        <div className={styles.mucho_flow}>
                            <div className={styles.back}><h2>¡Mucho <span>flow!</span></h2></div>
                            <div className={styles.front}><h2>¡Mucho <span>flow!</span></h2></div>
                        </div>

                        <div className={styles.cicle_grande_rosa}>
                            <img src="/images/circle-rosa-grande.png" alt="Cirsulo rosado"/>
                        </div>
                        <div className={styles.cicle_pequeño_morado}>
                            <img src="/images/circle-morado-pequeño.png" alt="Circulo morado"/>
                        </div>
                        <div className={styles.cicle_grande_blanca}>
                            <img src="/images/circle-blanca-grande.png" alt="Circulo blanco"/>
                        </div>
                        <div className={styles.cicle_grande_morado}>
                            <img src="/images/circle-morado-grande.png" alt="Circulo morado"/>
                        </div>
                        <div className={styles.cicle_pequeño_rosa}>
                            <img src="/images/circle-rosa-pequeño.png" alt="Circulo pequeño"/>
                        </div>
                    </div>
                </div>

                <div className={styles.apoyo_grafico}>
                    <img src="/images/mancha-azul-apoyo-grafico.png" alt="Mancha azul"/>
                </div>
            </section>
        </>
    )
}
