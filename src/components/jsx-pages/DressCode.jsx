import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const DressCode = () => {
  const { infoDressCodeArray } = useContext(InfoContext);

  return (
    <>
      {infoDressCodeArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="dressCode-textos">
            <p>{info.titulo}</p>
            <h3>{info.subtitulo}</h3>
            <h3>{info.subtitulo2}</h3>
          </div>
          <div>
            <button>{info.boton}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default DressCode;
