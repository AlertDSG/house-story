import React from 'react'

import s from './Main.module.css'

import quality from '../../assets/icons/quality.svg'
import arrow from '../../assets/icons/goldArrow.png'

type AboutCompany = {
    title: string
    links: string[]
}

const AboutCompany: React.FC<AboutCompany> = ({title, links}) => {
    return (
        <div className={s.bodyItem}>
            <h2 className={s.name}>{title} <img className={s.goldArrow} src={arrow} alt="arrow"/></h2>
            <div className={s.bodyLink}>
                {links.map((link, index) => {
                    return (
                        <h2 className={s.link} key={index}><img src={quality} alt="quality"/>{link}</h2>
                    )
                })}
            </div>
        </div>
    );
};

export default AboutCompany;
