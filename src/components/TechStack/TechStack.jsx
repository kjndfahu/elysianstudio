import React from 'react';
import styles from './TechStack.module.scss'
import laptop from '../../assets/gifs/laptop.gif'
import flame from '../../assets/gifs/flame.gif'

function TechStack() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.absolutes}>
                <img className={styles.laptop} src={laptop} alt="laptop"/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.maintext}>Используем <span>современные</span> средства разработки</h2>
                <p className={styles.text}>Актуальный стек технологий позволяет разрабатывать
                    качественные и надежные проекты в приемлемые сроки</p>
            </div>
        </div>
    )
}

export default TechStack