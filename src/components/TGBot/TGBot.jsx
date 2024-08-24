import React from "react";
import styles from './TGBot.module.scss'
import mockup1 from '../../assets/iphonemock.png'
import mockup2 from '../../assets/iphonemockup2.png'
import handvictory from '../../assets/gifs/handvictory.gif'
import angel from '../../assets/gifs/angel.gif'

function TGBot() {
    const data = [
        {
            title: 'Ля ля ля',
            text: 'Ахалай махалай абра кадабра ъуъуъуъуъ какой-то рандомный ' +
                'тестовый текст на несколько строк Lorem ipsum dolor sit amet',
            img: mockup1
        },
        {
            title: 'Ля ля ля',
            text: 'Ахалай махалай абра кадабра ъуъуъуъуъ какой-то рандомный ' +
                'тестовый текст на несколько строк Lorem ipsum dolor sit amet',
            img: mockup2
        },

    ]
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.maintext}> Наш <span>Telegram бот</span></h2>
            <div className={styles.absolutes}>
                <img className={styles.hand} src={handvictory} alt="hand"/>
                <img className={styles.angel} src={angel} alt="angel"/>
            </div>
            <div className={styles.content}>
            {data.map((item) => (
                    <div className={styles.block}>
                        <div className={styles.texts}>
                            <h3 className={styles.blocktitle}>{item.title}</h3>
                            <p className={styles.blocktext}>{item.text}</p>
                        </div>
                        <img className={styles.iphonemockups} src={item.img} alt="iphone"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TGBot;