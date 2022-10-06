import styles from './styles.module.css';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper";

export default function CarrucelLogoApoyan() {
    return (
        <>
            <div className={styles.carrucel}>
                <Swiper
                    spaceBetween={60}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={
                        {
                            991: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                            1500: {
                                slidesPerView: 5,
                            }
                        }
                    }
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={styles.logo}>
                            <img src="/images/aliados/ev.png" alt="Logo | ev"/>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.logo}>
                            <img src="/images/aliados/esenttia.png" alt="Logo | Esenttia"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.logo}>
                            <img src="/images/aliados/mutualser.png" alt="Logo | mutualser"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.logo}>
                            <img src="/images/aliados/puerto-bahia.png" alt="Logo | puerto-bahia "/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.logo}>
                            <img src="/images/aliados/superGiros.png" alt="Logo | superGiros"/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.logo}>
                            <img src="/images/aliados/tigo-une.png" alt="Logo | tigo-une"/>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}