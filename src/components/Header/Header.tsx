import { useState } from "react";
import style from "./Header.module.css";
import styled from "styled-components";
import { Burger } from "./Burger";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [burger, setBurger] = useState(false);

    const pageVariants = {
        initial: {
            width: "0px",
        },
        enter: {
            width: "100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            width: "0px",
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <a className={style.logo} href={"#"}></a>
                <div className={style.navbar}>
                    <a href={"#portfolio"}>ивенты</a>
                    <a href={"#review"}>отзывы</a>
                    <a href={"#contacts"}>контакты</a>
                    <a>о нас</a>
                </div>
                <AnimatePresence>
                    {burger && (
                        <motion.div
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={pageVariants}
                        >
                            <Burger setBurger={setBurger} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* <BurgerCont></BurgerCont> */}
                {/* <div className={style.burgerContainer}></div> */}
                <div className={style.burgerButtonContainer}>
                    <div
                        className={style.burger}
                        onClick={() => {
                            setBurger(!burger);
                        }}
                    >
                        <div className={style.burgerIcon}></div>
                        <p>{burger ? "Закрыть" : "Меню"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BurgerCont = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.3s;
    z-index: 8;
`;
