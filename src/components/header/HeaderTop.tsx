import React from 'react';

import logo from '../../assets/icons/logo.svg'
import phone from '../../assets/icons/phone.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/insta.svg'
import facebook from '../../assets/icons/facebook.svg'
import email from '../../assets/icons/email.svg'
import burger from '../../assets/icons/burger.svg'

import s from './Header.module.css'


 export const HeaderTop = () => {
    return (
        <div className={s.headerTop}>
            <img src={logo} alt="House story"/>
            <div>
                <div className={s.phoneBody}>
                    <img src={phone} alt="phone"/>
                    <span className={s.number}>+34 624 36 23 26</span>
                </div>
                <div className={s.titleBody}>
                    <div className={s.point}></div>
                    <span className={s.span}>Звоните, мы онлайн</span>
                </div>
            </div>
            <div className={s.socialBlock}>
                <div className={s.socialBody}>
                    <img className={s.socialLink} src={whatsapp} alt="whatsapp"/>
                    <img className={s.socialLink} src={telegram} alt="telegram"/>
                    <img className={s.socialLink} src={instagram} alt="instagram"/>
                    <img className={s.socialLink} src={facebook} alt="facebook"/>
                    <img className={s.socialLink} src={email} alt="email"/>
                </div>
                <div className={s.titleBody}>
                    <div className={s.point}></div>
                    <span className={s.span}>Пишите, мы онлайн</span>
                </div>
            </div>
            <input className={s.input} type="text" placeholder={'Записаться на экскурсию'}/>
            <div className={s.bodyBurger}>
                <img className={s.burger} src={burger} alt="burger"/>
            </div>
        </div>
    );
};
