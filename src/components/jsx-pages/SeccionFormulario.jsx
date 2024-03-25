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
          <div
            className="regalos-textos"
            data-aos={animacionEntrada}
            data-aos-duration={duracionAnimacion1}
          >
            <p>{info.titulo}</p>
          </div>
        </div>
      ))}
      <form className="inputs-container" onSubmit={handleEnviar}>
        <label htmlFor="nombre"></label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y Apellido"
          value={userData.nombre}
          onChange={getUserData}
          required
        />

        <label htmlFor="respuesta"></label>
        {/*   <select
          name="respuesta"
          value={userData.respuesta}
          onChange={getUserData}
          required
        >
          <option value="">¿Asistirás?</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select> */}

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
        <button onClick={funcionAbrirPopUp} type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {abrirPopUp && <PopUpModal show={show} setShow={setShow} />}
      </form>
    </>
  );
};

export default SeccionFormulario;
