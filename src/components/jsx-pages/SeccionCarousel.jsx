import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionCarousel = () => {
  const { infoCarouselArray } = useContext(InfoContext);
  return (
    <>
      {infoCarouselArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="contador-titulo">
            <p>{info.titulo} </p>
          </div>

          <div className="carousel-contenedor">
            {info.carouselImagenes.map((imagen)=>(
              <img src={imagen.imagenCarousel} alt="" />
            ))}
            
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionCarousel;
