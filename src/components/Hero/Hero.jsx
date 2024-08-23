import React from "react";
import styles from './Hero.module.scss'
import {HeroLogo} from "../Svgs";
import {motion} from 'framer-motion'
import {Akcia, ConfettiRoz, Stars} from "../SvgsForBackground";
import stars from '../../assets/gifs/stars.gif'
import colors from '../../assets/gifs/colors.gif'
import raketka from '../../assets/raketka.png'

function Hero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.svgs}>
                    <div className={styles.conf1}><ConfettiRoz/></div>
                    <div className={styles.akcia}><Akcia/></div>
                    <img className={styles.stars} src={stars} alt="stars"/>
                    <img className={styles.colors} src={colors} alt="colors"/>
                    <img className={styles.raketka} src={raketka} alt="raketka"/>
                </div>
                <div className={styles.allinfo}>
                <HeroLogo/>
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