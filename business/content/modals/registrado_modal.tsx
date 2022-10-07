import styles from './styles.module.css';

export default function Registrado_modal() {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal_content_2}>
                   <div className={styles.title}>
                       <img className={styles.logo} src="/images/logo-registrado.png" alt="Logo Registrado"/>
                       <br/>
                       <br/>
                       <h2>Tu registro fue exitoso</h2>
                       <p>¡Bienvenido a bordo!</p>
                   </div>
                    <div className={styles.content}>
                        <p>No olvides revisar tu correo, te estaremos
                            enviando toda la información necesaria.</p>
                    </div>
                </div>
            </div>
        </>
    )
}