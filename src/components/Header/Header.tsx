import React from "react";
import style from "./Header.module.css";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Logo logo={logo} />
                <div className={style.navbar}>
                    <a>о нас</a>
                    <a>портфолио</a>
                    <a>ивенты</a>
                    <a>отзывы</a>
                    <a>контакты</a>
                </div>
                <div className={style.burger}></div>
            </div>
        </div>
    );
};

const Logo = styled.div<{ logo: string }>`
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    background-image: url(${(props) => props.logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
