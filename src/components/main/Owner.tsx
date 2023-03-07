import React from 'react';
import s from "./Main.module.css";
import fire from "../../assets/icons/fire.svg";
import arrow from "../../assets/icons/arowforbutton.svg";
import owner from "../../assets/image/owner.png";

export const Owner = () => {
    return (
        <section className={s.owner}>
            <div className={s.bodyContent}>
                <h1 className={s.title}>Все материалы о нашей компании  и услугах которые мы оказываем</h1>
                <p className={s.text}>Здесь вы найдете ответы на самые распространенные вопросы, инструкции и кейсы наших клиентов</p>
                <div className={s.form}>
                    <div className={s.subtitleBody}>
                        <h2 className={s.subtitle}>
                            <span>Хотите с нами связаться</span>, оставьте заявку и специалист свяжется с вами втечение 30минут.
                        </h2>
                        <img src={fire} alt="fire"/>
                    </div>
                    <div className={s.textAreaContainer}>
                        <input className={s.input} placeholder={'Номер телефона'}/>
                    </div>
                    <button className={s.btn}>Оставить заявку <img src={arrow} alt="arrow"/></button>
                    <h2 className={s.smallSize}>Ваши данные не будут переданы третьим лицам</h2>
                </div>
            </div>
            <img className={s.img} src={owner} alt="owner"/>
        </section>
    );
};
