import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SobreLaBoda = () => {
  const { infoSobreBodaArray, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);

  return (
    <>
      {infoSobreBodaArray.map((info, index) => (
        <div key={index}>
          <div
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
          <div
            className="sobreBoda-subtitulo"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <h3>{info.subtitulo}</h3>
          </div>
          <div className="sobreBoda-fecha-hora-container">
            <div
              className="sobreBoda-fecha-hora"
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              <div className="sobreBoda-fecha">
                <p>{info.dia}</p>
                <p>{info.mes}</p>
              </div>
              <div className="sobreBoda-span">
                <span></span>
              </div>
              <div className="sobreBoda-hora">
                <p>{info.hora}</p>
                <p>{info.rango}</p>
              </div>
            </div>

            <div className="sobreBoda-lugar">
              <h3
                data-aos={animacionEntrada}
                data-aos-duration={duracionAnimacion1}
              >
                {info.subtitulo2}
              </h3>

              <div
                className="sobreBoda-lugar-ubicacion"
                data-aos={animacionEntrada}
                data-aos-duration={duracionAnimacion1}
              >
                <h2>{info.direccion}</h2>
                <h2>{info.distrito}</h2>
              </div>
              <div
                data-aos={animacionEntrada}
                data-aos-duration={duracionAnimacion1}
              >
                <button>{info.boton}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SobreLaBoda;
