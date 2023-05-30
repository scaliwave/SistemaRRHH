import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TrabajaConNosotros } from "./pages/TrabajaConNosotros";
import { Administrador } from "./pages/Administrador";

import "./styles/backgroundmain.css";
import { ListarUsuarios } from "./pages/Administrador.ListarUsuarios";
import { AgregarUsuarios} from './pages/Administrador.AgregarUsuarios'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/trabajaconnosotros" Component={TrabajaConNosotros} />
        <Route path="/administrador" Component={Administrador} />
        <Route path="/administrador/listar-usuarios" Component={ListarUsuarios} />
        <Route path="/administrador/agregar-usuarios" Component={AgregarUsuarios} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
