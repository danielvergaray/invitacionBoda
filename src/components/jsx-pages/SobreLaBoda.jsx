import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../infoContext/InfoContext";
import Carousel from "react-bootstrap/Carousel";

const SobreLaBoda = () => {
  const {
    infoSobreBodaArray,
    infoSobreBodaMobileArray,
    animacionEntrada,
    duracionAnimacion1,
  } = useContext(InfoContext);

  return (
    <>
      <section className="sobreBoda-desktop">
        {infoSobreBodaArray.map((info, index) => (
          <div
            key={index}
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
        ))}

        <Carousel interval={null} data-bs-theme="dark">
          <Carousel.Item>
            <div
              className="sobreBoda-subtitulo"
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              <h3>fecha y hora</h3>
            </div>

            <div
              className="sobreBoda-fecha-hora"

              /*  data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1} */
            >
              <div className="sobreBoda-fecha">
                <p>29</p>
                <p>de junio</p>
              </div>
              <div className="sobreBoda-span">
                <span></span>
              </div>
              <div className="sobreBoda-hora">
                <p>2:30</p>
                <p>de la tarde</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="sobreBoda-subtitulo"
              /*    data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1} */
            >
              <h3>lugar</h3>
            </div>
            <div
              className="sobreBoda-lugar-ubicacion"
              /*  data-aos={animacionEntrada}
                data-aos-duration={duracionAnimacion1} */
            >
              <h2>Jirón La Floresta 125 - Camacho</h2>
              <h2>Santiado de Surco</h2>
            </div>
            <div className="sobreBoda-btn"
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              <button>
                <Link
                  target="_blank"
                  to="https://maps.app.goo.gl/KBWfrP3hXLg3M3ty5"
                >
                  VER MAPA
                </Link>
              </button>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="sobreBoda-mobile">
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
                  <button>
                    <Link
                      target="_blank"
                      to="https://maps.app.goo.gl/KBWfrP3hXLg3M3ty5"
                    >
                      {info.boton}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SobreLaBoda;
