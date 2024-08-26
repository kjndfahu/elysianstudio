import React from 'react'
import styles from './Portfolio.module.scss'
import {TelegramLogo} from "../Svgs/Svgs";
import {motion} from 'framer-motion'
import PortfolioSlider from "../PortfolioSlider/PortfolioSlider";
import {Flame} from "../SvgsForBackground/SvgsForBackground";


function Portfolio() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.absolutes}>
                <div className={styles.flam1e}><Flame/></div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.maintext}>Наши <span>работы</span></h2>
                <PortfolioSlider/>
                <div className={styles.textandbtn}>
                    <p className={styles.paragraph}>Подробнее с кейсами можно ознакомиться по кнопке ниже:</p>
                    <motion.div className={styles.makeorderbtn} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TelegramLogo/>
                        Канал-портфолио
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio