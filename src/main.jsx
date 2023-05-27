import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TrabajaConNosotros } from "./pages/TrabajaConNosotros";
import { Administrador } from "./pages/Administrador";

import "./styles/backgroundmain.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/trabajaconnosotros" Component={TrabajaConNosotros} />
        <Route path="/administrador" Component={Administrador} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
