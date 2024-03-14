import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { ReactTyped } from "react-typed";
import CuentaRegresiva from "../contador/CuentaRegresiva";

const SeccionContador = () => {
  const { infoContadorArray } = useContext(InfoContext);
  return (
    <>
      {infoContadorArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="contador-titulo">
            <h1>{info.titulo} </h1>

          </div>
          <div className="contador-subtitulo">
            <h2>{info.subtitulo}</h2>
            <ReactTyped
              strings={["¡Te esperamos este día especial!"]}
              typeSpeed={40}
              loop
            />
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
