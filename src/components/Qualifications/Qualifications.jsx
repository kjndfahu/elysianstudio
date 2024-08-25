import React from 'react';
import styles from './Qualifications.module.scss'
import SpecialitiesText from "../SpeacialitiesText/SpecialitiesText";
import {TelegramLogo} from "../Svgs/Svgs";
import {motion} from 'framer-motion'

function Qualifications() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.maintext}><span>Квалификации</span> наших работников</h2>
                <div className={styles.workers}>
                    <div className={styles.developers}>
                        <h4 className={styles.workerstext}>Разработчики</h4>
                        <div className={styles.manycards}>
                            <div className={styles.juniordev}>
                                <SpecialitiesText title="Junior"
                                                  p1="Опыт работы: до 2 лет"
                                                  p2="Стоимость: ниже средней"
                                                  p3="Энергия и свежий взгляд на задачи"/>
                            </div>
                            <div className={styles.middledev}>
                                <SpecialitiesText title="Middle"
                                                  p1="Опыт работы: от 1 года до 4 лет"
                                                  p2="Стоимость: средняя"
                                                  p3="Уверенные навыки и самостоятельность"/>
                            </div>
                            <div className={styles.seniordev}>
                                <SpecialitiesText title="Senior"
                                                  p1="Опыт работы: от 5 лет"
                                                  p2="Стоимость: выше средней"
                                                  p3="Глубокие знания и опыт, эффективность"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.designers}>
                        <h4 className={styles.workerstext}>Дизайнеры</h4>
                        <div className={styles.manycards}>
                            <div className={styles.juniordev}>
                                <SpecialitiesText title="Junior"
                                                  p1="Опыт работы: до 2 лет"
                                                  p2="Стоимость: ниже средней"
                                                  p3="Энергия и свежий взгляд на задачи"/>
                            </div>
                            <div className={styles.middledev}>
                                <SpecialitiesText title="Middle"
                                                  p1="Опыт работы: от 1 года до 4 лет"
                                                  p2="Стоимость: средняя"
                                                  p3="Уверенные навыки и самостоятельность"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*//TODO: пофиксить пробелы, исправить блоки*/}

                <div className={styles.lastitems}>
                    <p className={styles.paragraph}>Убедитесь в качестве наших услуг, сделав заказ:</p>
                    <motion.div className={styles.makeorderbtn} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TelegramLogo/>
                        Сделать заказ
                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Qualifications;