import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionRegalos = () => {
  const { infoRegalosArray } = useContext(InfoContext);

  return (
    <>
      {infoRegalosArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="regalos-textos">
            <p>{info.titulo}</p>
          </div>
          <div>
            <button>{info.boton}</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default SeccionRegalos;