import React from 'react';
import Slider from 'react-slick';
import styles from './PortfolioSlider.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6, // Отображаем 6 блоков на экране
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, // На экранах поменьше показываем 4 блока
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // На экранах еще меньше показываем 2 блока
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // На мобильных устройствах показываем 1 блок
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slides = [
        'Сайт для банка 1',
        'Сайт для банка 2',
        'Сайт для банка 3',
        'Сайт для банка 4',
        'Сайт для банка 5',
        'Сайт для банка 6',
        'Сайт для банка 7',
        'Сайт для банка 8'
    ];

    return (
        <div className={styles.slidercontainer}>
            <div className={styles.blurleft} />

            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slideritem}>
                        <div className={styles.imageplaceholder}>Image</div>
                        <div className={styles.title}>{slide}</div>
                        <div className={styles.subtitles}>Какая-то доп. инфа</div>
                    </div>
                ))}
            </Slider>

            <div className={styles.blurright} />
        </div>
    );

};

export default PortfolioSlider;