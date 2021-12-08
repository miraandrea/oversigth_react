import './App.css';

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Home } from './Componentes/Pege/Home/Home';
import { Administrador } from './Componentes/Pege/Administrador/Administrador';
import { AdministradorRegistro } from './Componentes/Pege/AdministradorRegistro/AdministradorRegistro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/registrar" element={<AdministradorRegistro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
