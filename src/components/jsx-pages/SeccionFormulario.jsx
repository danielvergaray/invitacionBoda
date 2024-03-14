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

          <form className="inputs-container">
            {info.inputs.map((input) => (
              <div>
                <label htmlFor="text"></label>
                <input type="text" 
                placeholder= {input.input}
                />
              </div>
            ))}
          </form>

          <div>
            <button>{info.boton}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionFormulario;
