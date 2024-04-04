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
import imagen1 from "../../assets/imagenes/carousel/1.jpg";
import imagen2 from "../../assets/imagenes/carousel/2.jpg";
import imagen3 from "../../assets/imagenes/carousel/3.jpg";
import imagen4 from "../../assets/imagenes/carousel/4.jpg";
import imagen5 from "../../assets/imagenes/carousel/5.jpg";
import imagen6 from "../../assets/imagenes/carousel/6.jpg";
import imagen7 from "../../assets/imagenes/carousel/7.jpg";
import imagen8 from "../../assets/imagenes/carousel/8.jpg";
import imagen9 from "../../assets/imagenes/carousel/9.jpg";
import imagen10 from "../../assets/imagenes/carousel/10.jpg";
import imagenDesktop from '../../assets/imagenes/FOTODESKTOP.jpg' 

import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import "aos/dist/aos.css";

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      seccionHome: [
        {
          imagen1: imagenHome1,
          imagen2: imagenHome2,
          tituloImagenPortada: tituloImagenPortada,
          fecha: "29.06.24",
          imagenDesktop: imagenDesktop
        },
      ],
      seccionContador: [
        {
          tituloImagen: tituloSeccionContador,
          titulo: "Nos casamos",
          subtitulo:
            "Estás invitado a nuestra boda y estamos emocionados contando los días para celebrar juntos.",
        },
      ],
      seccionSobreBoda: [
        {
          tituloImagen: tituloSeccionSobreBoda,
          subtitulo: "fecha y hora",
          dia: "29",
          mes: "de junio",
          hora: "2:30",
          rango: "de la tarde",
          subtitulo2: "lugar",
          direccion: "Jirón La Floresta 125 - Camacho",
          distrito: "Santiado de Surco",
          boton: "ver mapa",
        },
      ],
      seccionSobreBodaMobile: [
        {
          subtitulo: "fecha y hora",
          dia: "29",
          mes: "de junio",
          hora: "2:30",
          rango: "de la tarde",
          diapositiva: 1,
        },
        {
          subtitulo: "lugar",
          direccion: "Jirón La Floresta 125 - Camacho",
          distrito: "Santiago de Surco",
          diapositiva: 2,
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
            "En nuestro viaje por la vida, cada paso juntos ha sido una aventura llena de paisajes increíbles. Cada momento es un tesoro que guardamos en nuestros corazones.",
          carouselImagenes: [
            {
              imagenCarousel: imagen1,
            },
            {
              imagenCarousel: imagen2,
            },
            {
              imagenCarousel: imagen3,
            },
            {
              imagenCarousel: imagen4,
            },
            {
              imagenCarousel: imagen5,
            },
            {
              imagenCarousel: imagen6,
            },
            {
              imagenCarousel: imagen7,
            },
            {
              imagenCarousel: imagen8,
            },
            {
              imagenCarousel: imagen9,
            },
            {
              imagenCarousel: imagen10,
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
          titulo:
            "Es muy importante para nosotros que confirmes tu asistencia, asegurate de hacerlo antes del 30 de abril.",
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
  const infoSobreBodaMobileArray = Object.values(
    informacion[0].seccionSobreBodaMobile
  );
  const infoDressCodeArray = Object.values(informacion[0].seccionDressCode);
  const infoCarouselArray = Object.values(informacion[0].seccionCarousel);
  const infoRegalosArray = Object.values(informacion[0].seccionRegalos);
  const infoFormArray = Object.values(informacion[0].seccionForm);
  const infoFooterArray = Object.values(informacion[0].seccionFooter);

  /* ANIMACIONES */

  const animacionEntrada = "fade-in";
  const duracionAnimacion1 = "3000";

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
            return updateDoc(docRef, {
              respuesta: userData.respuesta,
              mensaje: userData.mensaje,
            });
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
    animacionEntrada,
    duracionAnimacion1,
    infoSobreBodaMobileArray,
  };

  return (
    <InfoContext.Provider value={values}> {children} </InfoContext.Provider>
  );
};

export default InfoContextProvider;
