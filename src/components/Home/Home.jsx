import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <div className="container">
            <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default Home;