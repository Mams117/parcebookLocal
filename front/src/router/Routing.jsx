import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Inicio from "../components/layout/paginas/Inicio";
import Error from "../components/layout/paginas/Error";
import Registrarse from "../components/logica/Registrarse";
import Ingresar from "../components/logica/Ingresar";
const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Registro" element={<Registrarse />} />
        <Route path="/Ingresar" element={<Ingresar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
