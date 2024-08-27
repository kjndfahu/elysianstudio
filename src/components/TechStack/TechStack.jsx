import React from 'react';
import styles from './TechStack.module.scss'
import {Cpp, Csharp, Css, Html, Js, NodeLogo, Php, Python, ReactLogo, Ts, Vue} from "../SvgsTechStack/SvgsTechStack";
import {Laptop} from "../SvgsForBackground/SvgsForBackground";
import {Zeus} from "../SvgsTwo/SvgsTwo";

function TechStack() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.absolutes}>
                <div className={styles.laptop}><Laptop/></div>
                <div className={styles.zeus}><Zeus/></div>
            </div>
            <div className={styles.mainlineabs}>
                <Vue/>
                <Cpp/>
                <Php/>
                <Html/>
                <Python/>
                <Csharp/>
                <NodeLogo/>
                <Js/>
                <Css/>
                <ReactLogo/>
                <Vue/>
                <Ts/>
                <NodeLogo/>
                <Python/>
            </div>
            <div className={styles.backlineabs}>
                <Python/>
                <ReactLogo/>
                <Js/>
                <Ts/>
                <Cpp/>
                <Vue/>
                <Php/>
                <Python/>
                <Csharp/>
                <Php/>
                <Js/>
                <Html/>
                <Vue/>
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                    <h2 className={styles.maintext}>Используем <span>современные</span> средства разработки</h2>
                    <p className={styles.text}>Актуальный стек технологий позволяет разрабатывать
                        качественные и надежные проекты в приемлемые сроки</p>
                </div>
            </div>
        </div>

    )
}

export default TechStack