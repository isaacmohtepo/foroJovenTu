import styles from './styles.module.css'
import AutorSpeakers from "../autor_speakers/autor_speakers";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Grid, Pagination, Navigation} from "swiper";


export default function Speakers() {
    return (
        <>
            <div id="speakers"></div>
            <section id="" className={styles.section}>

                <div className={"container " + styles.general}>
                    <div className="row">


                        <div className={styles.general_autor}>

                            <Swiper


                                grid={{
                                    rows: 3,
                                }}

                                breakpoints={
                                    {
                                        320: {
                                            grid: {
                                                rows: 1,
                                            },
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            grid: {
                                                rows: 2,
                                            },
                                            slidesPerView: 2,
                                            },
                                        991: {
                                            grid: {
                                                rows: 2,

                                            },
                                            slidesPerView: 3,
                                        },
                                    }
                                }
                                navigation={true}
                                spaceBetween={30}
                                modules={[Grid, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/valeria-oyos.png"
                                        nombre="Valeria Ayos"
                                        tipo="HOST"
                                        cargo="Miss Universe Colombia 2021"
                                        class="host"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/jorge-correa.png"
                                        nombre="Jorge Correa"
                                        tipo="Conferencista"
                                        cargo="Founder Eat Cloud CEO"
                                        class="conferencista"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/daniela-barrio.png"
                                        nombre="Daniela Barrios"
                                        tipo="Conferencista"
                                        cargo="L??der de Talento y desarrollo organizacional Esenttia"
                                        class="conferencista"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/marco-dubbeld.png"
                                        nombre="Marco Dubbeld"
                                        tipo="Conferencista"
                                        cargo="Presidente de KRU360"
                                        class="conferencista"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/camilo-arbelaez.png"
                                        nombre="Camilo Arbel??ez"
                                        tipo="Conferencista"
                                        cargo="En Terapia"
                                        class="conferencista"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/rafael-socarras.png"
                                        nombre="Rafael Socarras"
                                        tipo="Conferencista"
                                        cargo="Vp Bodytech y Founder de Mensajeros Urbanos"
                                        class="conferencista"
                                    />
                                </SwiperSlide>


                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/francia-marquez.png"
                                        nombre="Francia M??rquez"
                                        tipo="Moderadora (Por confirmar)"
                                        cargo="VP de la Rep??blica de Colombia"
                                        class="moderador"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/veronica-alcocer.png"
                                        nombre="Ver??nica Alcocer"
                                        tipo="Invitada Especial (Por confirmar)"
                                        cargo="1ra dama de la Rep??blica de Colombia"
                                        class="especial"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/juan-pablo-velez.png"
                                        nombre="Juan Pablo V??lez"
                                        tipo="Moderador"
                                        cargo="Presidente Ejecutivo C??mara de Comercio de Cartagena"
                                        class="moderador"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/andrea-pi??a.png"
                                        nombre="Andrea Pi??a"
                                        tipo="Moderadora"
                                        cargo="VP de competitividad C??mara de Comercio de Cartagena"
                                        class="moderador"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/jairo-andres-vargas.png"
                                        nombre="Jairo Andr??s Vargas"
                                        tipo="Moderador"
                                        cargo="Consultor de Iddea Comunicaciones"
                                        class="moderador"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/francisco-rosado.png"
                                        nombre="Francisco Rosado"
                                        tipo="Conferencista"
                                        cargo="Esports"
                                        class="conferencista"
                                    />
                                </SwiperSlide>


                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/gina-bay.png"
                                        nombre="Gina Baytter"
                                        tipo="Consejera de Juventud"
                                        cargo="Cartagena"
                                        class="consejero"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/daniel-castellano.png"
                                        nombre="Daniel Castellanos"
                                        tipo="Consejero de Juventud"
                                        cargo="Cali"
                                        class="consejero"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/nathalia.png"
                                        nombre="Nathalia Acero"
                                        tipo="Consejera de Juventud"
                                        cargo="Bogot??"
                                        class="consejero"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/sergio-chacon.png"
                                        nombre="Sergio Chac??n"
                                        tipo="Consejero de Juventud"
                                        cargo="Medell??n"
                                        class="consejero"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AutorSpeakers
                                        perfil="/images/spearkers/brandon-aragon.png"
                                        nombre="Brandon Arag??n"
                                        tipo="Consejero de Juventud"
                                        cargo="Barranquilla"
                                        class="consejero"
                                    />
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className={styles.apoyo_grafico}>
                    <img src="/images/mancha-azul-apoyo-grafico.png" alt="Marchas azules | Apoyo grafico"/>
                </div>
            </section>
        </>
    )
}
