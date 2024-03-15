import React, { useState } from "react";
import style from "./Reviews.module.css";
import styled from "styled-components";
import person1 from "../../assets/portfolio_2.png";
import quotes from "../../assets/quotes.png";
import romb from "../../assets/romb.png";
import arrowL from "../../assets/ArrowL.svg";
import arrowR from "../../assets/ArrowR.svg";

export const Reviews = () => {
    const [frame, setFrame] = useState(0);
    const person = [{}, {}, {}];

    const SwitchNext = () => {
        if (frame < person.length - 2) {
            setFrame(frame + 1);
        } else {
            setFrame(-1);
        }
    };

    const SwitchPrev = () => {
        if (frame > -1) {
            setFrame(frame - 1);
        } else {
            setFrame(person.length - 2);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>ЧТО ГОВОРЯТ</h1>
                <h1 className={style.subtitle}>О НАС</h1>
                <h1 className={style.subtitle}>НАШИ КЛИЕНТЫ</h1>
                <div className={style.slaiderContainer}>
                    <div className={style.navigateSlaider}>
                        <Icon
                            width={"60px"}
                            height={"60px"}
                            icon={arrowL}
                            onClick={() => {
                                SwitchPrev();
                            }}
                        />
                        <Icon
                            width={"60px"}
                            height={"60px"}
                            icon={arrowR}
                            onClick={() => {
                                SwitchNext();
                            }}
                        />
                    </div>
                    <div className={style.slaider}>
                        <div className={style.shadowBlock}></div>
                        <SlaiderLine left={-frame * 850}>
                            {person.map((a, i) => (
                                <CardReview scaleML={i - 1 != frame} key={i} />
                            ))}
                        </SlaiderLine>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardReview = ({ scaleML }: { scaleML?: boolean }) => {
    return (
        <CardContainer scaleML={scaleML}>
            <div className={style.infoContainer}>
                <Icon
                    width={"100px"}
                    height={"100px"}
                    icon={quotes}
                    type={"'"}
                />
                <p className={style.reviews_text}>
                    Отличное ивент-агентство! Хочу выразить благодарность за их
                    профессиональный подход к организации мероприятия.
                </p>
                <div className={style.personContainer}>
                    <Icon width={"60px"} height={"60px"} icon={romb} />
                    <div className={style.personNameContainer}>
                        <p>Lewis Raymond Taylor</p>
                        <p>The Coaching Masters</p>
                    </div>
                </div>
            </div>
            <PersonImage icon={person1} />
        </CardContainer>
    );
};

const SlaiderLine = styled.div<{ left: number }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    position: absolute;
    top: 0px;
    left: ${(props) => props.left}px;
    transition: all 0.3s;
    @media (max-width: 1390px) {
        gap: 0px;
    }
`;

const CardContainer = styled.div<{ scaleML?: boolean }>`
    width: 800px;
    flex-shrink: 0;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: pink;
    scale: ${(props) => (props.scaleML ? "0.8" : "1")};
    transition: all 0.2s;
    overflow: hidden;

    @media (max-width: 1033px) {
        width: 100%;
        max-width: 400px;
        flex-direction: column-reverse;
        height: max-content;
        max-height: 570px;
        padding: 0px 25px 20px 25px;
        justify-content: start;
        align-items: center;
    }
`;

const PersonImage = styled.div<{ icon: string }>`
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    background-image: url(${(props) => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 1033px) {
        width: 100%;
        height: 350px;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;
const Icon = styled.div<{
    width: string;
    height: string;
    icon: string;
    type?: string;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    flex-shrink: 0;
    background-image: url(${(props) => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 1033px) {
        display: ${(props) => (props.type ? "none" : "block")};
    }
`;
