import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionCarousel = () => {
  const { infoCarouselArray, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);
  return (
    <>
      {infoCarouselArray.map((info, index) => (
        <div key={index}>
          <div
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
          <div
            className="contador-titulo"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <p>{info.titulo} </p>
          </div>

          <div className="carousel-contenedor">
            {info.carouselImagenes.map((imagen, index) => (
              <img key={index} src={imagen.imagenCarousel} alt="" />
            ))}
            {info.carouselImagenes.map((imagen, index) => (
              <img key={index} src={imagen.imagenCarousel} alt="" />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionCarousel;


/* <div className="slider">
            <div className="slider-track">
              {info.carouselImagenes.map((imagen, index) => (
                <div className="slide" key={index}>
                  <img src={imagen.imagenCarousel} alt="" />
                </div>
              ))}
              {info.carouselImagenes.map((imagen, index) => (
                <div className="slide" key={index}>
                  <img src={imagen.imagenCarousel} alt="" />
                </div>
              ))}
            </div>
          </div> */
