import styles from './styles.module.css'
import {useEffect} from "react";

export default function Navbar() {
    //colocar box-shadow al navbar cuando se haga scroll
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar')
            if (window.scrollY > 0) {
                navbar?.classList.add(styles.navbar_shadow)
            } else {
                navbar?.classList.remove(styles.navbar_shadow)
            }
        })
    }, [])
    return (
        <>
            <nav id="navbar" className={"navbar navbar-expand-lg bg-light " + styles.navbar + " " }>
                <div className="container">
                    <a className="navbar-brand" href="/"><img src="/images/logo-forojovetu-color.png" alt=""/></a>
                    <div className={"collapse navbar-collapse " + styles.navbar_right_general} id="navbarSupportedContent">
                        <ul className={"navbar-nav me-auto mb-2 mb-lg-0 " + styles.navbar_right}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#speakers">Speakers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#agenda">Agenda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gamers">Gamers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#artistas">Artistas invitados</a>
                            </li>
                        </ul>
                        <a className={styles.btn} href="#registro">¡Regístrate!</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
