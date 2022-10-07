import styles from './styles.module.css';
import CarrucelLogoApoyan from "../carrucel_logo_apoyan/carrucel_logo_apoyan";

export default function Organizado() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>

                    <div className={styles.organizado_ejecturado}>
                        <div className={styles.organizado}>
                            <div className={styles.title}>
                                <h2>Organiz<span>a</span>do por:</h2>
                            </div>

                            <div className={styles.logo}>
                                <img src="/images/logos-organizadores.png" alt="logos | organizadores"/>
                            </div>
                        </div>
                        <div className={styles.ejecturado}>
                            <div className={styles.title}>
                                <h2>Ejec<span>u</span>tado por:</h2>
                            </div>

                            <div className={styles.logo}>
                                <img width={120} src="/images/kru360.png" alt="Logo Kru"/>
                            </div>
                        </div>
                    </div>


                    <div className={styles.apoyo}>
                        <div className={styles.title}>
                            <h2>Ap<span>o</span>yan:</h2>
                        </div>

                       <div className={styles.card_logos}>
                           <CarrucelLogoApoyan/>
                       </div>
                    </div>

                </div>
            </section>
        </>
    )
}