import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import styled from "styled-components";
import { Slogan } from "./components/Slogan/Slogan";
import { Contacts } from "./components/Contacts/Contacts";
import { Reviews } from "./components/Reviews/Reviews";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { TestAnim } from "./components/TestAnim/TestAnim";

function App() {
    return (
        <div className="App">
            <Header />
            <Center>
                <TestAnim />
                {/* <Main /> */}
                <Slogan />
                <Portfolio />
                <Reviews />
                <Contacts />
            </Center>
            <Footer />
        </div>
    );
}

const Center = styled.div`
    width: 100%;
    flex: 1 1 auto;
`;

export default App;
