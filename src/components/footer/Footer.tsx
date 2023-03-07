import React from 'react'
import s from './Footer.module.css'

import logoFooter from '../../assets/icons/logofooter.png'
import main from '../../assets/icons/main.svg'
import catalog from '../../assets/icons/catalog.svg'
import shop from '../../assets/icons/shop.svg'
import blog from '../../assets/icons/blog.svg'
import service from '../../assets/icons/service.svg'
import contacts from '../../assets/icons/contacts.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/insta.svg'
import youtube from '../../assets/icons/youtube.svg'
import facebook from '../../assets/icons/facebook.svg'
import language from '../../assets/icons/language.svg'
import arrowUp from '../../assets/icons/arrowUp.svg'
import arrowgreen from '../../assets/icons/arrowgreen.svg'
import footerVideo1 from '../../assets/image/footerVideo1.png'
import footerVideo2 from '../../assets/image/footerVideo2.png'
import footerVideo3 from '../../assets/image/footerVideo3.png'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.videoBlock}>
                    <h2 className={s.footerTitle}>Видео отзывы от партнёров</h2>
                    <div className={s.videos}>
                        <img className={s.video} src={footerVideo1} alt="footerVideo1"/>
                        <img className={s.video} src={footerVideo2} alt="footerVideo2"/>
                        <img className={s.video} src={footerVideo3} alt="footerVideo3"/>
                    </div>
                    <div className={s.pointerBlock}>
                        <div className={s.pointer} style={{background: 'white'}}></div>
                        <div className={s.pointer}></div>
                        <div className={s.pointer}></div>
                        <div className={s.pointer}></div>
                    </div>
                    <div className={s.logoBody}>
                        <img src={logoFooter} alt="logo footer"/>
                        <h3><span>Alfa Digital Agency</span> – разработка высоко конверсионных сайтов</h3>
                    </div>
                </div>
                <div className={s.linksBlock}>
                    <div className={s.link}>
                        <img src={main} alt="main"/>
                        <a href="/">Главная</a>
                    </div>
                    <div className={s.link}>
                        <img src={catalog} alt="catalog"/>
                        <a href="/">Каталог готовых объектов</a>
                    </div>
                    <div className={s.link}>
                        <img src={shop} alt="shop"/>
                        <a href="/">Магазин стройматериалов</a>
                    </div>
                    <div className={s.link}>
                        <img src={blog} alt="blog"/>
                        <a href="/">Блог</a>
                    </div>
                    <div className={s.link}>
                        <img src={service} alt="service"/>
                        <a href="/">Выезд специалиста</a>
                    </div>
                    <div className={s.link}>
                        <img src={contacts} alt="contacts"/>
                        <a href="/">Контакты</a>
                    </div>
                </div>
                <div className={s.documentsBlock}>
                    <div className={s.footerTitle}>
                        <h2>Смотреть все документы </h2>
                        <img src={arrowgreen} alt="arrowgreen"/>
                    </div>

                    <div className={s.select}>
                        <h2 >Политика конфиденциальности</h2>
                        <img src={arrowUp} alt="arrowUp"/>
                    </div>
                    <div className={s.select}>
                        <div className={s.language}>
                            <img src={language} alt="language"/>
                            <span>Русский</span>
                        </div>
                        <img src={arrowUp} alt="arrowUp"/>
                    </div>
                    <div className={s.socialLinks}>
                        <img className={s.socialLink} src={whatsapp} alt="whatsapp"/>
                        <img className={s.socialLink} src={telegram} alt="telegram"/>
                        <img className={s.socialLink} src={instagram} alt="instagram"/>
                        <img className={s.socialLink} src={youtube} alt="youtube"/>
                        <img className={s.socialLink} src={facebook} alt="facebook"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};
