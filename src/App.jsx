import React from "react";
import InfoContextProvider from "./components/infoContext/InfoContextProvider";
import Home from "./components/jsx-pages/Home";
import Footer from "./components/footer/Footer";
import AgregarInvitados from "./components/agregarInvitados/AgregarInvitados";
import "./App.scss";

function App() {
  return (
    <div>
      <InfoContextProvider>
        <Home />
        {/* <AgregarInvitados/>  Para agregar invitados de forma dinamica*/}
        <Footer />
      </InfoContextProvider>
    </div>
  );
}

export default App;
