import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="menu">
            <Link className="" to="/registrar">
                <button className="boton">Registrar</button>
            </Link>
            <Link className="" to="/">
                <button className="">Cerrar</button>
            </Link>
        </div>
    )
}