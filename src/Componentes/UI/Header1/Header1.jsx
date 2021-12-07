import React from 'react';
import './Header1.css';
import logo from '../../../Imagen/logo.jpeg';

export const Header1 = () => {
    return (
        <>
            <div className="logo">
                <div className="Header">
                    <img className="logo1" src={logo} alt="Logo" />
                </div>
            </div>
        </>
    )
}