import React from "react";
import styles from './Hero.module.scss'
import {HeroLogo} from "../Svgs/Svgs";
import {motion} from 'framer-motion'
import studiologo from '../../assets/studiologo.jpg'

function Hero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.allinfo}>
                    <img className={styles.studiologo} src={studiologo} alt="logo"/>
                    <div className={styles.texts}>
                        <h1 className={styles.heromain}>Ваши <span>идеи</span> – наша <span>реальность</span></h1>
                        <h3 className={styles.herotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris.</h3>
                    </div>
                </div>
                <motion.div className={styles.makeorderbtn} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    Сделать заказ
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;