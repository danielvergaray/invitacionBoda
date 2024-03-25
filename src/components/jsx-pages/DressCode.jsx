import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const DressCode = () => {
  const { infoDressCodeArray, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);

  return (
    <>
      {infoDressCodeArray.map((info, index) => (
        <div key={index}>
          <div
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
          <div
            className="dressCode-textos"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <p>{info.titulo}</p>
            <h3>{info.subtitulo}</h3>
            <h3>{info.subtitulo2}</h3>
          </div>
          <div
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <button>{info.boton}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default DressCode;
