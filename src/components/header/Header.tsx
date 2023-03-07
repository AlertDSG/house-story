import React from 'react';
import {HeaderTop} from "./HeaderTop";
import {HeaderBottom} from "./HeaderBottom";

import s from './Header.module.css'
import {Main} from "../main/Main";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <HeaderTop/>
                <HeaderBottom/>
            </div>
        </header>
    );
};
