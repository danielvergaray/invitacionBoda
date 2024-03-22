import React, { useState } from "react";
import InfoContext from "./InfoContext";
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
import imagenHome2 from "../../assets/imagenes/FONDO_02.png";
import tituloImagenPortada from "../../assets/imagenes/titulos/NOMBRES_03.png";
import tituloSeccionContador from "../../assets/imagenes/titulos/RAMA.png";
import tituloSeccionSobreBoda from "../../assets/imagenes/titulos/SOBRELABODA.png";
import tituloSeccionDressCode from "../../assets/imagenes/titulos/DRESSCODE.png";
import tituloSeccionCarousel from "../../assets/imagenes/titulos/RAMA.png";
import tituloSeccionRegalos from "../../assets/imagenes/titulos/LOSREGALOS.png";
import tituloSeccionForm from "../../assets/imagenes/titulos/NOSACOMPANAS.png";
import tituloSeccionFooter from "../../assets/imagenes/titulos/LOSESPERAMOS.png";
import imagenCarousel1 from "../../assets/imagenes/carousel/Carousel-img-1.jpeg";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      seccionHome: [
        {
          imagen1: imagenHome1,
          imagen2: imagenHome2,
          tituloImagenPortada: tituloImagenPortada,
          fecha: "29.06.24",
        },
      ],
      seccionContador: [
        {
          tituloImagen: tituloSeccionContador,
          titulo: "nuestra gran aventura comienza",
          subtitulo: "y queremos que seas parte",
        },
      ],
      seccionSobreBoda: [
        {
          tituloImagen: tituloSeccionSobreBoda,
          subtitulo: "fecha y hora",
          dia: "29",
          mes: "de junio",
          hora: "3:00",
          rango: "de la tarde",
          subtitulo2: "lugar",
          direccion: "Jirón La Floresta 125 - Camacho",
          distrito: "Santiado de Surco",
          boton: "ver mapa",
        },
      ],
      seccionDressCode: [
        {
          tituloImagen: tituloSeccionDressCode,
          titulo: "Semiformal",
          subtitulo: "no blanco, beige, crema, rojo",
          subtitulo2: "amarillo o neones",
          boton: "ver ideas",
        },
      ],
      seccionCarousel: [
        {
          tituloImagen: tituloSeccionCarousel,
          titulo:
            "En el camino de la vida, cada paso juntos ha sido un viaje con el más bello de los paisajes, donde cada instante es un tesoro compartido que atesoro en el corazón",
          carouselImagenes: [
            {
              imagenCarousel: imagenCarousel1,
            },
            {
              imagenCarousel: imagenCarousel1,
            },
            {
              imagenCarousel: imagenCarousel1,
            },
          ],
        },
      ],
      seccionRegalos: [
        {
          tituloImagen: tituloSeccionRegalos,
          titulo:
            "Tu presencia es nuestro mejor regalo, pero si deseas, ayúdanos a hacer realidad nuestra luna de miel",
          boton: "ver datos bancarios",
        },
      ],
      seccionForm: [
        {
          tituloImagen: tituloSeccionForm,
          titulo: "Es muy importante para nosotros que confirmes tu presencia",
          /*  inputs: [
            {
              input: "Nombre y Apellido",
              label
            },
            {
              input: "¿Asistirás?",
            },
            {
              input: "Escribe tu mensaje",
            },
          ], */

          boton: "enviar",
        },
      ],
      seccionFooter: [
        {
          tituloImagen: tituloSeccionFooter,
        },
      ],
    },
  ];

  const infoHomeArray = Object.values(informacion[0].seccionHome);
  const infoContadorArray = Object.values(informacion[0].seccionContador);
  const infoSobreBodaArray = Object.values(informacion[0].seccionSobreBoda);
  const infoDressCodeArray = Object.values(informacion[0].seccionDressCode);
  const infoCarouselArray = Object.values(informacion[0].seccionCarousel);
  const infoRegalosArray = Object.values(informacion[0].seccionRegalos);
  const infoFormArray = Object.values(informacion[0].seccionForm);
  const infoFooterArray = Object.values(informacion[0].seccionFooter);

  /* FORMULARIO */

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

  const [invitadoRegistrado, setInvitadoRegistrado] = useState("");

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
            setInvitadoRegistrado("repetido");
            // Aquí podrías mostrar un mensaje al usuario indicando que ya ha respondido
            return updateDoc(docRef, {respuesta: userData.respuesta,
              mensaje: userData.mensaje });
          } else {
            // Actualizar la respuesta del invitado
            console.log("Respuesta actualizada correctamente en Firebase");
            setInvitadoRegistrado("si");
            return updateDoc(docRef, {
              respuesta: userData.respuesta,
              mensaje: userData.mensaje,
            });
          }
        } else {
          // Si el nombre no está registrado
          setInvitadoRegistrado("no");
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
      })
      .catch((error) => {
        console.error("Error al enviar datos a Firebase: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [respuestaAsistencia, setRespuestaAsistencia] = useState("");

  const values = {
    infoHomeArray,
    infoContadorArray,
    infoSobreBodaArray,
    infoDressCodeArray,
    infoCarouselArray,
    infoRegalosArray,
    infoFormArray,
    infoFooterArray,
    loading,
    getUserData,
    setUserData,
    userData,
    handleEnviar,
    invitadoRegistrado,
    setInvitadoRegistrado,
    respuestaAsistencia,
    setRespuestaAsistencia,
  };

  return (
    <InfoContext.Provider value={values}> {children} </InfoContext.Provider>
  );
};

export default InfoContextProvider;
