import React from "react";
import { ReactTyped } from "react-typed";
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
  const { infoHomeArray, infoContadorArray, infoSobreBodaArray } =
    useContext(InfoContext);
  /* console.log(informacion);
  console.log(informacion[0].imagenes); */
  /*  console.log(ImagenesHomeArray[0].imagen); */

  return (
    <>
      <section
        className="mobile-home-hero"
        style={{
          backgroundImage: `url(${imagenHome1})`,
        }}
      >
        <div className="hero-titulo">
          {infoHomeArray.map((info) => (
            <img
              className="titulo-imagen"
              src={info.tituloImagenPortada}
              alt=""
            />
          ))}
        </div>
        <div className="hero-fecha">
          {infoHomeArray.map((info) => (
            <p>{info.fecha} </p>
          ))}
        </div>
      </section>

      <section className="mobile-home-contador">
        {infoContadorArray.map((info) => (
          <>
            <div className="contador-imagen">
              <img src={info.tituloImagen} alt="" />
            </div>
            <div className="contador-titulo">
              <h2>{info.titulo} </h2>
              <h2>{info.titulo2}</h2>
            </div>
            <div className="contador-subtitulo">
              <p>{info.subtitulo}</p>
            </div>
          </>
        ))}
        <ReactTyped
          className="text-black"
          strings={["¡Te esperamos este día especial!"]}
          typeSpeed={40}
          loop
        />

        {/* <div className="home-cuentaRegresiva">
          <CuentaRegresiva />
        </div> */}
      </section>

      <section className="mobile-sobreBoda">
        {infoSobreBodaArray.map((info) => (
          <>
            <div className="sobreBoda-imagen">
              <img src={info.tituloImagen} alt="" />
            </div>
            <div className="sobreBoda-subtitulo">
              <p>{info.subtitulo}</p>
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

              <div className="sobreBoda-subtitulo">
                  <p>{info.subtitulo2}</p>
                </div>
                <div >
                  <p>{info.direccion}</p>
                  <p>{info.distrito}</p>
                </div>
                <div>
                  <button>{info.boton}</button>
                </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Home;
