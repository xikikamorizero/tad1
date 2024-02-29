import React from "react";
import style from "./Contacts.module.css";
import styled from "styled-components";
import insta from "../../assets/instagram.svg";
import faceb from "../../assets/facebook.svg";
import inico from "../../assets/in.svg";
import youtube from "../../assets/telegram.svg";

export const Contacts = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>ЕСТЬ ВОПРОСЫ?</h1>
                <h1 className={style.subtitle}>СПРАШИВАЙ</h1>
                <div className={style.contentContainer}>
                    <div className={style.contactInfo}>
                        <a>info@po4ta.ru</a>
                        <p>
                            Следите и узнавайте больше информации о нас. Следите
                            и узнавайте больше информации о нас. Следите и
                            узнавайте больше информации о нас. Следите и
                            узнавайте больше информации о нас. Следите и
                            узнавайте больше информации о нас.
                        </p>
                        <div className={style.iconContainer}>
                            <Icon icon={faceb} />
                            <Icon icon={insta} />
                            <Icon icon={inico} />
                            <Icon icon={youtube} />
                        </div>
                    </div>
                    <div className={style.buttonWrite}>Написать</div>
                </div>
            </div>
        </div>
    );
};

const Icon = styled.a<{ icon: string }>`
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`;
