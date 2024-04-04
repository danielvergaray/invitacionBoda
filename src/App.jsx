import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import InfoContextProvider from "./components/infoContext/InfoContextProvider";
import Home from "./components/jsx-pages/Home";
import DatosBancarios from "./components/jsx-pages/DatosBancarios";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import AgregarInvitados from "./components/agregarInvitados/AgregarInvitados";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <InfoContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datos-bancarios" element={<DatosBancarios />} />
          {/* <AgregarInvitados/>  Para agregar invitados de forma dinámica*/}
        </Routes>
        <Footer />
      </InfoContextProvider>
    </HashRouter>
  );
}

export default App;
