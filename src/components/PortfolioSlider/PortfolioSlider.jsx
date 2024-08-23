import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './PortfolioSlider.module.scss';
import { Navigation } from 'swiper/modules';


function PortfolioSlider() {
    return (
        <Swiper
            spaceBetween={20} // Пространство между слайдами
            slidesPerView={4} // Количество видимых слайдов
            centeredSlides={true} // Центрирование активного слайда
            loop={true} // Бесконечный режим
            navigation={true} // Навигационные стрелки
            modules={[Navigation]} // Подключение модуля навигации
            className={styles.slider}
        >
            {[...Array(8)].map((_, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                    <div className={styles.content}>
                        <div className={styles.image}>Image</div>
                        <div className={styles.text}>
                            <h2>Сайт для банка</h2>
                            <p>Какая-то доп. инфа</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


export default PortfolioSlider;