import styles from './styles.module.css';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import {Navigation} from "swiper";

export default function Invitacion() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>¡Si <span>capitán</span>, estamos listos!</h2>
                        <p>Para embarcarnos una vez más al foro de jóvenes más grande de Colombia, donde aprenderemos
                            cómo ser líderes que impactan, conoceremos y escucharemos historias transformadoras,
                            aprenderemos conceptos que nos ayudarán a cambiar la forma en la que vemos el mundo y sobre
                            todas las cosas, ¡nos divertiremos mucho! </p>
                    </div>
                    <div className={styles.card_genera}>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <div className={styles.video}>
                                    <video className={styles.video} src="/videos/2019_foro.mp4" controls={true}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.video}>
                                    <video className={styles.video} src="/videos/2018_foro.mp4" controls={true}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.video}>
                                    <video className={styles.video} src="/videos/protagonista_del_ambio.mp4"
                                           controls={true}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}