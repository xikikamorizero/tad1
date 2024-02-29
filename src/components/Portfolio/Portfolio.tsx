import { ReactNode, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import style from "./Portfolio.module.css";
import styled from "styled-components";
import image1 from "../../assets/portfolio_1.png";
import image2 from "../../assets/portfolio_2.png";
import image3 from "../../assets/portfolio_3.png";
import image4 from "../../assets/portfolio_4.png";
import image5 from "../../assets/portfolio_5.png";
export const Portfolio = () => {
    return (
        <div className={style.wrapper}>
            <AnimText />
            <div className={style.container}>
                <div className={style.titleContainer}>
                    <h1>ЭТО ТО</h1>
                    <h1>ЧТО МЫ ДЕЛАЕМ</h1>
                    <div className={style.viewContainer}></div>
                </div>
                <div className={style.imageContainer}>
                    <Section>
                        <ImageBlock
                            className={style.portfolio_image_1}
                            src={image1}
                            alself={"flex-end"}
                            margin={"0 20% 0 0 "}
                        />
                    </Section>
                    <Section>
                        <ImageBlock
                            className={style.portfolio_image_2}
                            src={image2}
                            alself={"flex-start"}
                            margin={"200px 0 0 0 "}
                        />
                    </Section>
                    <Section>
                        <ImageBlock
                            className={style.portfolio_image_3}
                            src={image3}
                            alself={"flex-end"}
                            margin={"0 15% 0 0 "}
                        />
                    </Section>
                    <Section>
                        <ImageBlock
                            className={style.portfolio_image_4}
                            src={image4}
                            alself={"flex-start"}
                            margin={"200px 0 0 15% "}
                        />
                    </Section>
                    <Section>
                        <ImageBlock
                            className={style.portfolio_image_5}
                            src={image5}
                            alself={"flex-end"}
                            margin={"20px 15% 0 0"}
                        />
                    </Section>
                </div>
            </div>
        </div>
    );
};

function Section({ children }: { children: ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);

    return (
        <section ref={ref}>
            <span
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s",
                }}
            >
                {children}
            </span>
        </section>
    );
}

const AnimText = () => {
    return (
        <div className={style.animTextContainer}>
            <div className={style.items_wrap}>
                <div className={`${style.items} ${style.marquee}`}>
                    <p className={style.item}>ТВОРЧЕСТВО</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИССЛЕДУЕМ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИДЕАЛЬНЫЙ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>МОМЕНТ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ВОСПОМИНАНИЯ</p>
                    <div className={style.circle}></div>
                </div>
                <div
                    aria-hidden="true"
                    className={`${style.items} ${style.marquee}`}
                >
                    <p className={style.item}>ТВОРЧЕСТВО</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИССЛЕДУЕМ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИДЕАЛЬНЫЙ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>МОМЕНТ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ВОСПОМИНАНИЯ</p>
                    <div className={style.circle}></div>
                </div>
            </div>

            <div className={style.items_wrap}>
                <div
                    className={`${style.items} ${style.marquee} ${style.reverce}`}
                >
                    <p className={style.item}>ТВОРЧЕСТВО</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИССЛЕДУЕМ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИДЕАЛЬНЫЙ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>МОМЕНТ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ВОСПОМИНАНИЯ</p>
                    <div className={style.circle}></div>
                </div>
                <div
                    aria-hidden="true"
                    className={`${style.items} ${style.marquee} ${style.reverce}`}
                >
                    <p className={style.item}>ТВОРЧЕСТВО</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИССЛЕДУЕМ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ИДЕАЛЬНЫЙ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>МОМЕНТ</p>
                    <div className={style.circle}></div>
                    <p className={style.item}>ВОСПОМИНАНИЯ</p>
                    <div className={style.circle}></div>
                </div>
            </div>
        </div>
    );
};

const ImageBlock = styled.div<{
    src: string;
    margin?: string;
    alself?: string;
}>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: ${(props) => (props.margin ? props.margin : 0)};
    align-self: ${(props) => (props.alself ? props.alself : "auto")};
`;
