import styles from './styles.module.css'

export default function AutorSpeakers(props: any) {
    return (
        <>
            <div className={styles.autor}>
                <div className="container_img">
                    <img src={props.perfil} alt="Perfil | speakers"/>
                    <div className={styles.info}>
                        <h3 className={`${styles[props.class]}`
                        }>{props.nombre}</h3>
                        <h4>{props.tipo}</h4>
                        <h5>{props.cargo}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}