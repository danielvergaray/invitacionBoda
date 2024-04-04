import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { ReactTyped } from "react-typed";
import CuentaRegresiva from "../contador/CuentaRegresiva";

const SeccionContador = () => {
  const { infoContadorArray, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);
  return (
    <>
      {infoContadorArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="contador-titulo">
            {/*   <h1>{info.titulo} </h1> */}
            <h1>
              <ReactTyped strings={[info.titulo]} typeSpeed={150} loop />
            </h1>
          </div>
          <div className="contador-subtitulo">
           
            <h2
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              {info.subtitulo}
            </h2>

            
          </div>
        </div>
      ))}

      <div className="home-cuentaRegresiva">
        <CuentaRegresiva />
      </div>
    </>
  );
};

export default SeccionContador;
