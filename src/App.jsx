import React from "react";
import Home from "./components/jsx-pages/Home";
import "./App.scss";
import InfoContextProvider from "./components/infoContext/InfoContextProvider";

function App() {
  return (
    <div>
      <InfoContextProvider>
        <Home />
      </InfoContextProvider>
    </div>
  );
}

export default App;
