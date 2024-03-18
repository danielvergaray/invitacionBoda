import React, { useContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import InfoContext from "../infoContext/InfoContext";

const SeccionFormulario = () => {
  const { infoFormArray } = useContext(InfoContext);

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    nombre: "",
    respuesta: "",
    mensaje: "",
  });

  const getUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEnviar = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setLoading(true);
    const db = getFirestore();

    // Convertir el nombre a minúsculas
    const nombreMinusculas = userData.nombre.toLowerCase().split(" ").join("");

    /******************  OBTENCION DE INVITADOS DESDE FIREBASE */

    // Verificar si el nombre ya está registrado en Firebase

    const invitadosFirebase = collection(db, "invitados");
    const buscarInvitado = query(
      invitadosFirebase,
      where("nombre", "==", nombreMinusculas)
    );
    getDocs(buscarInvitado)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // Si el nombre ya está registrado
          const docRef = querySnapshot.docs[0].ref; //accede al primer documento devuelto en la consulta y devuelve una referencia del documento.
          const existingData = querySnapshot.docs[0].data(); //evuelve los datos del documento en forma de objeto

          if (existingData.respuesta) {
            //Verifica que el invitado ya haya respondido anteriormente
            console.log("Este invitado ya ha respondido anteriormente");
            // Aquí podrías mostrar un mensaje al usuario indicando que ya ha respondido
          } else {
            // Actualizar la respuesta del invitado
            return updateDoc(docRef, { respuesta: userData.respuesta });
          }
        } else {
          // Si el nombre no está registrado
          console.log(
            "Lo siento, su nombre no se encuentra en la lista de invitados"
          );
          // Aquí podrías mostrar un mensaje al usuario indicando que su nombre no está en la lista
        }
      })

      .then(() => {
        // Limpiar los campos después de enviar
        setUserData({
          nombre: "",
          respuesta: "",
          mensaje: "",
        });
        console.log("Respuesta actualizada correctamente en Firebase");
      })
      .catch((error) => {
        console.error("Error al enviar datos a Firebase: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
        <select
          name="respuesta"
          value={userData.respuesta}
          onChange={getUserData}
          required
        >
          <option value="">¿Asistirás?</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="mensaje"></label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={userData.mensaje}
          onChange={getUserData}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </>
  );
};

export default SeccionFormulario;
