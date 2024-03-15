import React from "react";
import style from "./Footer.module.css";
import styled from "styled-components";
import arrow from '../../assets/input_arrow.svg';

export const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.footer_desktop}>
                    <h1>Агенство</h1>
                    <div className={style.subContentBlock}>
                        <div className={style.contactBlock}>
                            <a target={"_blank"}>info@po4ta.ru</a>
                            <div className={style.contacts}>
                                <p>Adress:?????????????</p>
                                <p>Phone: 7777777777</p>
                            </div>
                        </div>
                        <h1 className={style.nameCompany}>Tad1</h1>
                    </div>
                </div>
                <div className={style.footer_mob}>
                    <div className={style.infoContainer_mob}>
                        <h1 className={style.title_mob}>TAD1</h1>
                        <div className={style.subtitleContainer_mob}>
                            <h1>ЕСТЬ ВОПРОСЫ?</h1>
                            <h1 className={style.subtitle_mob}>СПРАШИВАЙ</h1>
                        </div>
                        <div className={style.sloganContainer_mob}>
                            <p>Мы помогаем вам</p>
                            <p>расти и рассказывать их истории миру.</p>
                            <br />
                            <a className={style.mail} target={"_blank"}>info@po4ta.ru</a>
                        </div>
                    </div>
                    <div className={style.contactInfoContainer_mob}>
                        <p>Новостная рассылка</p>
                        <div className={style.inputContainer}>
                            <input
                                type={"text"}
                                placeholder={
                                    "Введите свой адрес электронной почты"
                                }
                            />
                            <Icon icon={arrow} />
                        </div>
                        <p className={style.contactSubtitle_mob}>Соц.сети</p>
                        <div className={style.contactContainer_mob}>
                            <div>
                                <a target={"_blank"}>Instagram</a>
                                <a target={"_blank"}>Telegram</a>
                            </div>
                            <div>
                                <a target={"_blank"}>Facebook</a>
                                <a target={"_blank"}>YouTube</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.credits}>
                    <p>Design by</p>
                    <p>Developed by</p>
                </div>
            </div>
        </div>
    );
};

const Icon = styled.div<{icon?: string }>`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    background-image: url(${(props) => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translate(0%, -50%);
    cursor: pointer;
`;
