import React from 'react';
import s from './Header.module.css';

export const HeaderBottom = () => {
    return (
        <div className={s.headerBottom}>
            <a className={s.navLink} href="/">Выполненные работы</a>
            <a className={s.navLink} href="/">Каталог готовых объектов</a>
            <a className={s.navLink} href="/">Магазин стройматериалов</a>
            <a className={s.navLink} href="/">Блог</a>
            <a className={s.navLink} href="/">О нас</a>
        </div>
    );
};
