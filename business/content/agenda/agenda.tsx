import styles from './styles.module.css'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Agenda() {

    const width100 = {
        width: '100%'
    }

    const width50 = {
        width: '50%'
    }


    return (
        <>
            <div id="agenda"></div>
            <section id="" className={styles.section}>
                <div className={"container " + styles.general}>
                    <div className="row">
                        <div className={styles.title}>
                            <h2>Ag<span>e</span>nda</h2>
                        </div>
                    </div>

                    <div className={styles.general_agenda}>
                        <Tabs className={styles.tabs}>
                            <TabList>
                                <Tab><span className={styles.textMorado}>¡A toda máquina!</span></Tab>
                                <Tab><span className={styles.textRosa}>Segmento #1</span></Tab>
                                <Tab><span className={styles.textAmarillo}>Segmento #2</span></Tab>
                                <Tab><span className={styles.textAzul}>Segmento #3</span></Tab>
                                <Tab><span className={styles.textVerde}>Segmento #4</span></Tab>
                            </TabList>
                            <TabPanel>
                                <div className={styles.card + " " + styles.morado}>
                                    <div className={styles.subCard + " " + styles.movil_atodamaquina}>
                                        <img className={styles.cuadroImg} src="/images/cuadro-blanco-borde.png" alt="Marco blanco"/>
                                        <img className={styles.logo}
                                             src="/images/logo-agenda-joven-tu-el-proyecto-protagonista-eres-tu.png"
                                             alt="Logo el protagonista eres tu"/>
                                        <div className={styles.title + " " + styles.tabVerde}>
                                            <h2>Instalación</h2>
                                        </div>
                                        <div className={styles.card_time_general + " " + styles.movil_atodamaquina}>
                                            <div className={styles.card_left + " " + styles.width50} >
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>7:00 am</span>
                                                        <span>8:00 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Inscripciones
                                                            <br/>& registro</strong></p>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>8:00 am</span>
                                                        <span>8:10 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Muestra cultural <br/>
                                                            Baile (IPCC)
                                                        </strong></p>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>8:10 am</span>
                                                        <span>8:15 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Presentación Foro <br/>
                                                            + Videos</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.card_right}>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>8:15 am</span>
                                                        <span>8:30 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Instalación del Foro:</strong> Verónica Alcocer</p>
                                                        <span>Primera dama de la República de Colombia</span>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>8:30 am</span>
                                                        <span>8:45 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Bienvenida al Foro</strong></p>
                                                        <span>Juan Pablo Vélez- Presidente Ejecutivo CCC</span>
                                                        <span>VC presidente CE /Directora  CE</span>
                                                        <span>Coordinadora de Jóvenes CCC</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className={styles.card + " " + styles.rosa}>
                                    <div className={styles.subCard + " " +styles.segmento_movil}>
                                        <img className={styles.cuadroImg} src="/images/cuadro-blanco-borde.png" alt=""/>
                                        <img className={styles.logo}
                                             src="/images/logo-agenda-joven-tu-el-proyecto-protagonista-eres-tu.png"
                                             alt="Logo el protagonista eres tu"/>
                                        <div className={styles.title + " " + styles.tabAmarillo}>
                                            <h2>Educación y empleo</h2>
                                        </div>
                                        <div className={styles.card_time_general}>
                                            <div className={styles.card_left}>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>8:45 am</span>
                                                        <span>9:00 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Impact Talk 1 :</strong> Superación y tecnología</p>
                                                        <p><span>Capitán:</span> Rafael Socaras</p>
                                                        <h6>VP Bodytech & Founder de Mensajeros Urbanos</h6>

                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>9:00 am</span>
                                                        <span>9:15 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Impact Talk 2 :</strong></p>
                                                        <p><span>Capitán:</span> Daniela Barrios</p>
                                                        <h6> Líder de Talento y Desarrollo Organizacional - ESSENTIA</h6>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>9:15 am</span>
                                                        <span>9:40 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Conversación:</strong> Entre expertos y jóvenes</p>
                                                        <p><span>Moderador:</span> Juan Pablo Vélez - Presidente CCC</p>
                                                        <h6>Panelistas: Rafael Socarras, Daniela Barrios, Joven 1 y Joven
                                                            2</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className={styles.card + " " + styles.amarillo}>
                                    <div className={styles.subCard + " " +styles.segmento_movil}>
                                        <img className={styles.cuadroImg} src="/images/cuadro-blanco-borde.png" alt=""/>
                                        <img className={styles.logo}
                                             src="/images/logo-agenda-joven-tu-el-proyecto-protagonista-eres-tu.png"
                                             alt="Logo el protagonista eres tu"/>
                                        <div className={styles.title + " " + styles.tabRosa}>
                                            <h2>Salud</h2>
                                        </div>
                                        <div className={styles.card_time_general}>
                                            <div className={styles.card_left} style={width100}>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>9:40 am</span>
                                                        <span>9:55 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Impact Talk 3:</strong> Emprender en Salud Mental: Cuando el propósito está por encima del miedo.</p>
                                                        <p><span>Capitán:</span> Camilo Arbeláez</p>
                                                        <h6>En Terapia</h6>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>9:55 am</span>
                                                        <span>10:10 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Impact Talk 4:</strong> Sustancias psicoactivas -
                                                            Legalización
                                                        </p>
                                                        <p><span>Capitán:  </span>Por definir</p>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>10:10 am</span>
                                                        <span>10:35 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Conversación:</strong> Entre expertos y jóvenes</p>
                                                        <p><span>Moderador:</span> Jairo Andrés Vargas</p>
                                                        <h6>Panelistas: Camilo Arbelaez, Speaker 2 Joven 1 y Joven
                                                            2</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className={styles.card + " " + styles.azul}>
                                    <div className={styles.subCard}>
                                        <img className={styles.cuadroImg} src="/images/cuadro-blanco-borde.png" alt=""/>
                                        <img className={styles.logo}
                                             src="/images/logo-agenda-joven-tu-el-proyecto-protagonista-eres-tu.png"
                                             alt="Logo el protagonista eres tu"/>
                                        <div className={styles.title + " " + styles.tabMorado}>
                                            <h2>Participación ciudadana</h2>
                                        </div>
                                        <div className={styles.card_time_general}>
                                            <div className={styles.card_left}>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>10:35 am</span>
                                                        <span>11:35 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Panel:</strong> Sostenibilidad e inclusión de la
                                                            juventud</p>
                                                        <p><span>Capitán:</span> Francia Márquez (por confirmar)</p>
                                                        <p><strong>Panelistas</strong></p>
                                                        <h5>Consejera 1: Gina Vanessa Baytter Alvarado – Cartagena </h5>
                                                        <h5>Consejera 2: Nathalia Alexandra Acero- Bogotá</h5>
                                                        <h5>Consejero 3: Brandon Aragón – Barranquilla</h5>
                                                        <h5>Consejero 4: Daniel Castellanos - Cali</h5>
                                                        <h5>Consejero 5: Sergio Chacón – Medellín</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className={styles.card + " " + styles.verde}>
                                    <div className={styles.subCard + " " +styles.segmento4}>
                                        <img className={styles.cuadroImg} src="/images/cuadro-blanco-borde.png" alt=""/>
                                        <img className={styles.logo}
                                             src="/images/logo-agenda-joven-tu-el-proyecto-protagonista-eres-tu.png"
                                             alt="Logo el protagonista eres tu"/>
                                        <div className={styles.title + " " + styles.tabMorado}>
                                            <h2>Nuevas tecnologías</h2>
                                        </div>
                                        <div className={styles.card_time_general}>
                                            <div className={styles.card_left}>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>11:35 am</span>
                                                        <span>11:50 am</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Impact Talk 5:</strong> El poder de la tecnología
                                                            para generar impacto</p>
                                                        <p><span>Capitán:</span> Jorge Correa</p>
                                                        <h6>Founder Eat Cloud CEO</h6>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>11:50 am</span>
                                                        <span>12:05 pm</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Impact Talk 6 :</strong> El cohete de tu startup</p>
                                                        <p><span>Capitán:</span> Marco Dubbeld</p>
                                                        <h6>Presidente de KRU360</h6>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>12:05 pm</span>
                                                        <span>12:30 pm</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>Conversación:</strong> Entre expertos y jóvenes</p>
                                                        <p><span>Moderador:</span> Andrea Piña - VP de Competitividad  Cámara de Comercio de Cartagena</p>
                                                        <h6>Panelistas: Jorge Correa, Marc Dubbeld, Joven 1 y Joven
                                                            2</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.card_right}>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>12:30 pm</span>
                                                        <span>12:55 pm</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>E+V Sports:</strong> Esports <br/>
                                                            ¡Ya no son un juego!</p>
                                                        <p><span>Capitán:</span> Francisco Rosado </p>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>12:55 pm</span>
                                                        <span>1:25 pm</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>DEMODAY :</strong> Class 2022</p>
                                                    </div>
                                                </div>
                                                <div className={styles.time_general}>
                                                    <div className={styles.time}>
                                                        <img src="/images/reloj.png" alt="Reloj"/>
                                                        <span>1:25 pm</span>
                                                        <span>1:55 pm</span>
                                                    </div>
                                                    <div className={styles.content_time}>
                                                        <p><strong>ARTISTA DE CIERRE SORPRESA</strong></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                <div className={styles.apoyo_grafico}>
                    <img src="/images/mancha-azul-apoyo-grafico.png" alt="Manchas azules | apoyo grafico"/>
                </div>
            </section>
        </>
    )
}
