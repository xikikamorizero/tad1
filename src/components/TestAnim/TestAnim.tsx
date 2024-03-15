import { useState, useEffect } from "react";
import styled from "styled-components";
import style from "./TestAnim.module.css";

export const TestAnim = () => {
    const [scrollPercentage, setScrollPercentage] = useState<any>(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const percentageScrolled = (scrollTop / scrollHeight) * 1000;
            setScrollPercentage(percentageScrolled.toFixed(2));
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    console.log(scrollPercentage);

    return (
        <div className={style.wrapper}>
                <AnimeC>
                    Web fusion
                    <AnimeT height={`${scrollPercentage}%`}>
                        <p>WELCOME TO XAVIER VEGA’S DESIGN</p>
                        <p>& DEVELOPMENT STUDIO</p>
                    </AnimeT>
                </AnimeC>
        </div>
    );
};

const AnimeC = styled.div`
    width: 100%;
    height: 100vh;
    flex-shrink: 0;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 12vw;
    color: #fff;
`;
const AnimeT = styled.div<{ height: string }>`
    width: 100%;
    height: ${(props) => props.height};
    max-height: 100vh;
    overflow: hidden;
    background-color: #fff;
    color: #000;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    transition: all 0.3s;

    text-transform: uppercase;
    white-space: nowrap;
    font-size: 5vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
