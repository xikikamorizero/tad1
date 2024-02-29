import style from "./Header.module.css";
import styled from "styled-components";

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.logo}></div>
                <div className={style.navbar}>
                    <a>о нас</a>
                    <a>портфолио</a>
                    <a>ивенты</a>
                    <a>отзывы</a>
                    <a>контакты</a>
                </div>
                <div className={style.burgerContainer}>
                    <div className={style.burger}>
                        <div className={style.burgerIcon}></div>
                        <p>Меню</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Icon = styled.div<{ width: string; height: string; icon: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    flex-shrink: 0;
    background-image: url(${(props) => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
