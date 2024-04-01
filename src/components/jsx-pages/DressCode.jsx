import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const DressCode = () => {
  const { infoDressCodeArray, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);

  return (
    <>
      <section className="dressCode-desktop">
        {infoDressCodeArray.map((info, index) => (
          <div key={index}>
            <div
              className="contenedor-imagen"
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              <img src={info.tituloImagen} alt="" />
            </div>

            <article className="dessCode-desktop-contenido">
              
              <div className="dressCode-textos">
              <p>{info.titulo}</p>
                <h3>{info.subtitulo}</h3>
                <h3>{info.subtitulo2}</h3>
              </div>
              <div>
                <button>{info.boton}</button>
              </div>
            </article>
          </div>
        ))}
      </section>
      <section className="dressCode-mobile">
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
      </section>
    </>
  );
};

export default DressCode;
