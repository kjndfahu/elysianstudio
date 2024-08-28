import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './InfiniteLogosTwo.module.scss'
import {Cpp, Csharp, Css, Html, Js, NodeLogo, Php, Python, ReactLogo, Ts, Vue} from "../SvgsTechStack/SvgsTechStack";

const SliderNumber = () => {
    const data = [<Vue/>, <Cpp/>, <Php/>, <Html/>, <Python/>, <Csharp/>, <NodeLogo/>, <Js/>, <Css/>, <ReactLogo/>, <Vue/>, <Ts/>, <NodeLogo/>, <Python/>]
    return (
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <Marquee direction="left" speed={100} delay={5}>
                    {data.map((item) => (
                        <div className={styles.slide}>
                            {item}
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default SliderNumber;