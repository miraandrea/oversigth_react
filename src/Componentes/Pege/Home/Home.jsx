import React from "react";
import { Main } from "../../Layouts/Main/Main";
import { Header } from "../../Layouts/Header/Header"; 
import './Home.css';

export const Home = () => {
    return (
        <div className="body" >
            <Header />
            <Main />
        </div>
    )
}