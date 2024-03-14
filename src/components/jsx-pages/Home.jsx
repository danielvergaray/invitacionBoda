import React, { useContext } from "react";
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
import InfoContext from "../infoContext/InfoContext";
import SobreLaBoda from "./SobreLaBoda";
import DressCode from "./DressCode";
import SeccionRegalos from "./SeccionRegalos";
import SeccionFormulario from "./SeccionFormulario";
import SeccionCarousel from "./SeccionCarousel";
import SeccionContador from "./SeccionContador";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);

  return (
    <>
      <section
        className="mobile-home-hero"
        style={{
          backgroundImage: `url(${imagenHome1})`,
        }}
      >
        <div className="hero-titulo">
          {infoHomeArray.map((info, index) => (
            <div key={index}>
              <img
                className="titulo-imagen"
                src={info.tituloImagenPortada}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="hero-fecha">
          {infoHomeArray.map((info, index) => (
            <div key={index}>
              <p>{info.fecha} </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-home-contador">
        <SeccionContador />
      </section>

      <section className="mobile-sobreBoda">
        <SobreLaBoda />
      </section>

      <section className="mobile-dressCode">
        <DressCode />
      </section>

      <section className="mobile-carousel">
        <SeccionCarousel />
      </section>

      <section className="mobile-regalos">
        <SeccionRegalos />
      </section>

      <section className="mobile-formulario">
        <SeccionFormulario />
      </section>
    </>
  );
};

export default Home;
