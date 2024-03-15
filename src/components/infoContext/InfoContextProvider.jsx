import React from "react";
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

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      seccionHome: [
        {
          imagen1: imagenHome1,
        },
        {
          imagen2: imagenHome2,
        },
        {
          tituloImagenPortada: tituloImagenPortada,
        },
        {
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

  const values = {
    infoHomeArray,
    infoContadorArray,
    infoSobreBodaArray,
    infoDressCodeArray,
    infoCarouselArray,
    infoRegalosArray,
    infoFormArray,
    infoFooterArray,
  };

  return (
    <InfoContext.Provider value={values}> {children} </InfoContext.Provider>
  );
};

export default InfoContextProvider;
