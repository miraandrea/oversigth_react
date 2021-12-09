import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="menu">
            <Link className="btnPrincipal" to="/registrar">
                <button className="btnRegistrar">Registrar</button>
            </Link>
            <Link className="btnPrincipal" to="/">
                <button className="btnCerrar">Cerrar</button>
            </Link>
        </div>
    )
}