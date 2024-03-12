import React from "react";
/* import { ReactTyped } from "react-typed";
import CuentaRegresiva from "../contador/CuentaRegresiva";
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
import tituloImagen from "../../assets/imagenes/NOMBRES_03.png";
import tituloContador from "../../assets/imagenes/LOSESPERAMOS.png"; */
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
/* import SobreLaBoda from "./SobreLaBoda"; */
import InfoContext from "../infoContext/InfoContext";
import { useContext } from "react";

const Home = () => {
  const { informacion } = useContext(InfoContext);
  console.log(informacion);
  console.log(informacion[0].imagenes);
  /*  console.log(ImagenesHomeArray[0].imagen); */
  return (
    <>
      {informacion.map((seccion) => (
        <>
          {seccion.imagenes.map((imagen) => (
            <section
              className="mobile-home-hero"
              style={{
                backgroundImage: `url(${imagen.imagen1})`,
              }}
            >
              <div className="hero-titulo">
                <img
                  className="titulo-imagen"
                  src={imagen.tituloImagenPortada1}
                  alt=""
                />
              </div>
              <div className="hero-fecha">
                <p>29.06.24</p>
              </div>
            </section>
          ))}
        </>
      ))}

      {/*     <section className="mobile-home-contador">
            <div className="contador-imagen">
              <img src={tituloContador} alt="" />
            </div>
            <div className="contador-titulo">
              <h2>Nuestra gran </h2>
              <h2>aventura comienza</h2>
            </div>
            <div className="contador-subtitulo">
              <p>y queremos que seas parte</p>

              <ReactTyped
                className="text-black"
                strings={["¡Te esperamos este día especial!"]}
                typeSpeed={40}
                loop
              />
            </div>
            <div className="home-cuentaRegresiva">
              <CuentaRegresiva />
            </div>
          </section> */}

      {/*  <section className="mobile-sobreBoda">
            <SobreLaBoda />
          </section> */}
    </>
  );
};

export default Home;
