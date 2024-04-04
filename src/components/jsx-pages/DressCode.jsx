import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
              <div className="dressCode-textos" data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}>
                <p>{info.titulo}</p>
                <h3>{info.subtitulo}</h3>
                <h3>{info.subtitulo2}</h3>
              </div>
              <div>
              <button>
                <Link target="_blank" to="https://www.pinterest.com/pcardenas91/boda-danipao-dresscode/?invite_code=ffa5a24cc2f748dcb1c487777adc890c&sender=392728167413991478">
                  {info.boton}
                </Link>
              </button>
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
              <button>
                <Link target="_blank" to="https://www.pinterest.com/pcardenas91/boda-danipao-dresscode/?invite_code=ffa5a24cc2f748dcb1c487777adc890c&sender=392728167413991478">
                  {info.boton}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default DressCode;
