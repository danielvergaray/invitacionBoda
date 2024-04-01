// SeccionRegalos.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfoContext from "../infoContext/InfoContext";
import DatosBancarios from "./DatosBancarios";

const SeccionRegalos = () => {
  const { infoRegalosArray, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setShowPopup(true);
    // Cambiar la ruta al abrir el popup
    window.history.replaceState(null, "", "/datos-bancarios");
    /* null por que no se esta usando el estado */
  };

  const closePopup = () => {
    setShowPopup(false);
    // Cambiar la ruta al cerrar el popup
    window.history.replaceState(null, "", "/");
  };

  return (
    <>
      <div className="home-content">
        {/* Contenido del Home */}
        {infoRegalosArray.map((info, index) => (
          <div key={index}>
            <div
              className="contenedor-imagen"
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              <img src={info.tituloImagen} alt="" />
            </div>

            <article className="regalos-contenido">
              <div
                className="regalos-textos"
                data-aos={animacionEntrada}
                data-aos-duration={duracionAnimacion1}
              >
                <p>{info.titulo}</p>
              </div>
              <div
                data-aos={animacionEntrada}
                data-aos-duration={duracionAnimacion1}
              >
                <button onClick={openPopup}>{info.boton}</button>
              </div>
            </article>
          </div>
        ))}
      </div>

      {showPopup && (
        <div>
          <div>
            <DatosBancarios onClose={closePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default SeccionRegalos;
