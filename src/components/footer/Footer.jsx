import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const Footer = () => {
  const { infoFooterArray } = useContext(InfoContext);

  return (
    <div className="mobile-footer">
      {infoFooterArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
         
        </div>
      ))}
    </div>
  )
}

export default Footer