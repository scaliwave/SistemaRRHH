import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TrabajaConNosotros } from "./pages/TrabajaConNosotros";
import { Administrador } from "./pages/Administrador";
import { Analista } from "./pages/Analista";

import "./styles/backgroundmain.css";
import { ListarUsuarios } from "./pages/Administrador.ListarUsuarios";
import { AgregarUsuarios } from "./pages/Administrador.AgregarUsuarios";
import { GestionEmpleados } from "./pages/Analista.GestionEmpleados";
import { NotFound } from "./pages/NotFound";
import { TestInicial } from "./pages/TestInicial";
import { PlantillaDatosPostulante } from "./pages/PlantillaDatosPostulante";
import { GestionVacantes } from "./pages/Analista.GestionVacantes";
import { GestionPostulantes } from "./pages/Analista.GestionPostulantes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/trabajaconnosotros" Component={TrabajaConNosotros} />
        <Route path="/administrador" Component={Administrador} />
        <Route
          path="/administrador/listar-usuarios"
          Component={ListarUsuarios}
        />
        <Route
          path="/administrador/agregar-usuarios"
          Component={AgregarUsuarios}
        />
        <Route path="/analista" Component={Analista} />
        <Route
          path="/analista/gestion-de-empleados"
          Component={GestionEmpleados}
        />
        <Route
          path="/analista/gestion-de-vacantes"
          Component={GestionVacantes}
        />
        <Route
          path="/analista/gestion-de-postulantes"
          Component={GestionPostulantes}
        />
        <Route
          path="/trabajaconnosotros/test-de-conocimientos"
          Component={TestInicial}
        />
        <Route
          path="/trabajaconnosotros/plantilla-de-registro"
          Component={PlantillaDatosPostulante}
        />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
