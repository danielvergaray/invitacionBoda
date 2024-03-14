import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SobreLaBoda = () => {
  const { infoSobreBodaArray } = useContext(InfoContext);

  return (
    <>
      {infoSobreBodaArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="sobreBoda-subtitulo">
            <h3>{info.subtitulo}</h3>
          </div>
          <div className="sobreBoda-fecha-hora-container">
            <div className="sobreBoda-fecha-hora">
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
              <h3>{info.subtitulo2}</h3>

              <div className="sobreBoda-lugar-ubicacion">
                <p>{info.direccion}</p>
                <p>{info.distrito}</p>
              </div>
              <div>
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