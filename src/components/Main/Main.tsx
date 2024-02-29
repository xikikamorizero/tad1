import React from "react";
import style from "./Main.module.css";

export const Main = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>МЫ</h1>
                <h1>ИВЕНТ АГЕНСТВО</h1>
                <p>
                    Мы - cпециализируемся на конференциях, презентациях, бизнес
                    встречах и форумах, всех мероприятиях связанных с
                    компаниями. Также это продумывание креативной концепции и ее
                    реализация.
                </p>
            </div>
        </div>
    );
};
