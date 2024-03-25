import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionRegalos = () => {
  const { infoRegalosArray, animacionEntrada, duracionAnimacion1 } = useContext(InfoContext);

  return (
    <>
      {infoRegalosArray.map((info, index) => (
        <div key={index}>
          <div
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
          <div
            className="regalos-textos"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <p>{info.titulo}</p>
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

export default SeccionRegalos;
