import { useEffect } from "react";
import style from "./Header.module.css";
import { motion } from "framer-motion";

export const Burger = ({setBurger}:{setBurger:(a:boolean)=>void}) => {
    const pageVariants = {
        initial: {
            width: "0px",
        },
        enter: {
            width: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        exit: {
            width: "0px",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className={style.burgerContainer}
        >
            <div className={style.navbarBurger}>
                <a onClick={()=>{setBurger(false)}} href={"#portfolio"}>ивенты</a>
                <a onClick={()=>{setBurger(false)}} href={"#review"}>отзывы</a>
                <a onClick={()=>{setBurger(false)}} href={"#contacts"}>контакты</a>
                <a onClick={()=>{setBurger(false)}}>о нас</a>
            </div>
        </motion.div>
    );
};
