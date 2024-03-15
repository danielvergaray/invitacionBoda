import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionFormulario = () => {
  const { infoFormArray } = useContext(InfoContext);

  return (
    <>
      {infoFormArray.map((info, index) => (
        <div key={index}>
          <div className="contenedor-imagen">
            <img src={info.tituloImagen} alt="" />
          </div>
          <div className="regalos-textos">
            <p>{info.titulo}</p>
          </div>
        </div>
      ))}
      <form className="inputs-container">
        <label htmlFor="text"></label>
        <input required type="text" placeholder="Nombre y Apellido" />
        <label htmlFor="single-select"></label>
        <select required id="single-select" placeholder="¿Asistirás?">
          <option value="">¿Asistirás?</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="text"></label>
        <textarea type="textarea" id="name" placeholder="Mensaje" required />
      </form>
      <div>
        <button>enviar</button>
      </div>
    </>
  );
};

export default SeccionFormulario;
