import React, { useContext, useEffect, useState, useRef } from "react";
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
import imagenHome2 from "../../assets/imagenes/FONDO_02.png";
import InfoContext from "../infoContext/InfoContext";
import SobreLaBoda from "./SobreLaBoda";
import DressCode from "./DressCode";
import SeccionRegalos from "./SeccionRegalos";
import SeccionFormulario from "./SeccionFormulario";
import SeccionCarousel from "./SeccionCarousel";
import SeccionContador from "./SeccionContador";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);

  const [fondoInicio, setFondoInicio] = useState(true);

  let tiempoDeCarga = useRef();

  /* useEffect(() => {
    tiempoDeCarga = setTimeout(() => {
      setFondoInicio(false);
    }, 2000);
    return () => clearTimeout(tiempoDeCarga);
  }, []); */

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      <section className="mobile-home-hero-fondo1"></section>
      <section
        className="mobile-home-hero"
        data-aos-easing="linear"
        data-aos="fade-up"
        data-aos-duration="2000"
        
      >
        <div
          className="hero-titulo"
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
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
        <div
          className="hero-fecha"
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
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
