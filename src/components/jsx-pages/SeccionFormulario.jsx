import React, { useContext, useEffect, useState } from "react";
import InfoContext from "../infoContext/InfoContext";
import PopUpModal from "../modal/PopUpModal";
import PopUpAsistencia from "./PopUpAsistencia";
import "bootstrap/dist/css/bootstrap.min.css";

const SeccionFormulario = () => {
  const {
    infoFormArray,
    loading,
    getUserData,
    getUserDataName,
    handleEnviar,
    userData,
    respuestaAsistencia,
    animacionEntrada,
    duracionAnimacion1,
  } = useContext(InfoContext);

  const [abrirPopUp, setAbrirPopUp] = useState(false);

  const [show, setShow] = useState(false);

  const funcionAbrirPopUp = () => {
    setTimeout(() => {
      setAbrirPopUp(true);
      setShow(true);
    }, 2000); // Mostrar el modal después de 3 segundos
  };

  const [popUpAsistencia, setPopUpAsistencia] = useState(false);

  const abrirPopUpAsistencia = () => {
    setPopUpAsistencia(true);
  };

  return (
    <>
      {infoFormArray.map((info, index) => (
        <div key={index}>
          <div
            className="contenedor-imagen"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <img src={info.tituloImagen} alt="" />
          </div>
          <article className="formulario-contenido">
            <div
              className="regalos-textos"
              data-aos={animacionEntrada}
              data-aos-duration={duracionAnimacion1}
            >
              <p>{info.titulo}</p>
            </div>

            <form className="inputs-container" onSubmit={(e)=>handleEnviar(e, respuestaAsistencia)}>
              <label htmlFor="nombre"></label>
              <input
                type="text"
                name="nombre"
                 pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
        title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
                placeholder="Nombre y Apellido"
                value={userData.nombre}
                onChange={getUserDataName}
                required
              />

              <label htmlFor="respuesta"></label>
              <input
                onClick={abrirPopUpAsistencia}
                placeholder={`¿Asistirás? ${respuestaAsistencia}`}
                value={userData.respuesta}
                onChange={getUserData}
                type="text"
              />

              {popUpAsistencia ? (
                <PopUpAsistencia
                  popUpAsistencia={popUpAsistencia}
                  setPopUpAsistencia={setPopUpAsistencia}
                />
              ) : null}

              <label htmlFor="mensaje"></label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje"
                value={userData.mensaje}
                onChange={getUserData}
                required
              />
              <button
                onClick={funcionAbrirPopUp}
                type="submit"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {!respuestaAsistencia ? (
                <PopUpModal show={show} setShow={setShow} respuestaAsistencia="sinRespuesta" />
              ) : (
                abrirPopUp && <PopUpModal show={show} setShow={setShow} respuestaAsistencia="" />
              )}
            </form>
          </article>
        </div>
      ))}
    </>
  );
};

export default SeccionFormulario;
