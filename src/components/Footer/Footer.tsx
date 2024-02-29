import React from "react";
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Агенство</h1>
                <div className={style.subContentBlock}>
                    <div className={style.contactBlock}>
                        <a>info@po4ta.ru</a>
                        <div className={style.contacts}>
                            <p>Adress:?????????????</p>
                            <p>Phone: 7777777777</p>
                        </div>
                    </div>
                    <h1 className={style.nameCompany}>Tad1</h1>
                </div>
                <div className={style.credits}>
                    <p>Design by</p>
                    <p>Developed by</p>
                </div>
            </div>
        </div>
    );
};
