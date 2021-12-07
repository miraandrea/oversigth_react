import React from "react";
import './Main1.css';
import { Link } from 'react-router-dom';

export const Main1 = () => {
    return (
        <>
            <div className="borde">
                <h1>Login</h1>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />

                <Link className="" to="/administrador">
                    <button className="boton">Login</button>
                </Link>
            </div>
        </>
    )
}