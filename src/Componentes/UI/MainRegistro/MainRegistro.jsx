import React from "react";
import './MainRegistro.css';
import { Link } from "react-router-dom";
export const MainRegistro = () => {
    return (
        <div className="body">
            <h1 className="h1">Registrarse</h1>
            <div className="nombre_apellido">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellidos" />

            </div>
            <div className="campos">

                <input type="number" placeholder="Documento" />
                <input type="password" placeholder="Contraseña" />


                <select >
                    <option value="1">Rol</option>
                    <option value="1">Dosente</option>
                    <option value="2">Estudiante</option>

                </select>

                <select >
                    <option value="1">Grado</option>
                    <option value="1">6A</option>
                    <option value="2">6B</option>
                    <option value="1">7A</option>
                    <option value="2">7B</option>
                    <option value="1">8A</option>
                    <option value="2">8B</option>
                    <option value="1">9A</option>
                    <option value="2">9B</option>
                    <option value="1">10A</option>
                    <option value="2">10B</option>

                </select>
            </div>
            <Link className="" to="/administrador">
                <button className="boton2">Registrarse </button>
            </Link>

        </div>

    )
}