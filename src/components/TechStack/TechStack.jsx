import React from 'react';
import styles from './TechStack.module.scss'
import {Cpp, Csharp, Css, Html, Js, NodeLogo, Php, Python, ReactLogo, Ts, Vue} from "../SvgsTechStack/SvgsTechStack";

function TechStack() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.maintext}>Используем <span>современные</span> средства разработки</h2>
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
                <p className={styles.text}>Актуальный стек технологий позволяет разрабатывать
                    качественные и надежные проекты в приемлемые сроки</p>
            </div>
        </div>
    )
}

export default TechStack