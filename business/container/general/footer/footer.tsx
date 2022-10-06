import styles from './styles.module.css';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>¡Contáctanos!</h2>
                        <h3><a href="mailto:info@forojoventu.com">info@forojoventu.com</a></h3>
                    </div>
                    <hr/>
                    <div className={styles.social}>
                        <a target="_blank" href="https://www.facebook.com/camcartagena/"><i
                            className='bx bxl-facebook'></i></a>
                        <a target="_blank" href="https://instagram.com/jovenes_cartagenacc?igshid=YmMyMTA2M2Y="> <i
                            className='bx bxl-instagram'></i></a>
                        <a target="_blank" href="https://twitter.com/camcartagena?s=21&t=ZJYHo4s4Wl_5po-AQYYrKw"><i
                            className='bx bxl-twitter'></i></a>
                    </div>
                    <div className={styles.Copyright}>
                        <span>Desarrollado por <strong>KRU</strong> 🚀</span>
                    </div>
                </div>
            </footer>
            <noscript>
                <img height="1" width="1" alt=""
                     src="https://www.facebook.com/tr?id=820593452471013&ev=PageView&noscript=1"/>
            </noscript>
        </>
    )
}