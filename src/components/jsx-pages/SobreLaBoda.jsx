import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import Aos from "aos";
import "aos/dist/aos.css";


const SobreLaBoda = () => {
  const { infoSobreBodaArray } = useContext(InfoContext);

const animacionEntrada= "fade-in";
const duracionAnimacion1= "2000";
const duracionAnimacion2= "2000";
const duracionAnimacion3= "2000";

  return (
    <>
      {infoSobreBodaArray.map((info, index) => (
        <div key={index}>
          <div
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration= {duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
          <div
            className="sobreBoda-subtitulo"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion2}
          >
            <h3>{info.subtitulo}</h3>
          </div>
          <div className="sobreBoda-fecha-hora-container">
            <div className="sobreBoda-fecha-hora"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion3}
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
              <h3>{info.subtitulo2}</h3>

              <div className="sobreBoda-lugar-ubicacion">
                <h2>{info.direccion}</h2>
                <h2>{info.distrito}</h2>
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
