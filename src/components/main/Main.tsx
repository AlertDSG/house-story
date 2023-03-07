import React from 'react'

import owner from '../../assets/image/owner.png'
import fire from '../../assets/icons/fire.svg'
import arrow from '../../assets/icons/arowforbutton.svg'

import s from './Main.module.css'
import {Owner} from "./Owner";
import AboutCompany from "./AboutCompany";

export const Main = () => {
    return (
        <main>
            <div className={s.container}>
                <Owner/>
                <section className={s.service}>
                    <AboutCompany
                        title={'О компании'}
                        links={['Основная информация ', 'История компании ']}
                    />
                    <AboutCompany
                        title={'Стройка и ремонт'}
                        links={['Кейсы наших клиентов', 'Услуги которые мы оказываем', 'Часто задаваемые вопросы']}
                    />
                    <AboutCompany
                        title={'Покупка недвижимости'}
                        links={['Кейсы наших клиентов', 'Топ 30 вопросов инвесторов']}
                    />
                    <AboutCompany
                        title={'Маркетинговые услуги'}
                        links={['Кейсы наших клиентов', 'Услуги которые мы оказываем']}
                    />
                </section>
            </div>
        </main>
    );
};
