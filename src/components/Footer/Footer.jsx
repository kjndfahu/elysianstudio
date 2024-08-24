import React from 'react';
import styles from './Footer.module.scss'
import {HeroLogo, QRcode, TelegramGrey, TelegramLogo} from "../Svgs/Svgs";
import mockupfooter1 from '../../assets/mockupfooter1.png'
import mockupfooter2 from '../../assets/mockupfooter2.png'
import byehand from '../../assets/gifs/byehand.gif'
import {motion} from 'framer-motion'

function Footer() {
    const telegramName = '@immorrtalz'
    return (
        <div className={styles.wrapper}>
            <div className={styles.absolutes}>
                <img className={styles.byehand} src={byehand} alt="byehand"/>
                <img className={styles.mockup1} src={mockupfooter1} alt="iphone"/>
                <img className={styles.mockup2} src={mockupfooter2} alt="iphone"/>
            </div>
            <div className={styles.content}>
                <div className={styles.allinfo}>
                    <div className={styles.texts}>
                        <h1 className={styles.heromain}>Свяжитесь с нами<br/> <span>прямо сейчас! </span></h1>
                        <h3 className={styles.herotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris.</h3>
                    </div>
                    <QRcode/>
                </div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={styles.makeorderbtn}>
                    <TelegramLogo/>
                    Сделать заказ
                </motion.div>
            </div>

            <div className={styles.lastblock}>
                <h5>© 2024 ElysianStudio</h5>
                <div className={styles.lasttext}>
                    <h5>Designed by</h5>
                    <TelegramGrey/>
                    <h5>{telegramName}</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;