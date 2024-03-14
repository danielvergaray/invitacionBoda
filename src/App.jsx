import React from "react";
import InfoContextProvider from "./components/infoContext/InfoContextProvider";
import Home from "./components/jsx-pages/Home";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div>
      <InfoContextProvider>
        <Home />
        <Footer/>
      </InfoContextProvider>
    </div>
  );
}

export default App;
