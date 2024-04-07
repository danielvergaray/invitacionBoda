import React from "react";
import Home from "./Home";
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
import tituloImagenPortada from "../../assets/imagenes/titulos/NOMBRES_03.png";
import tituloSeccionContador from "../../assets/imagenes/titulos/";
import tituloSeccionSobreBoda from "../../assets/imagenes/SOBRELABODA.png";
import tituloSeccionDressCode from "../../assets/imagenes/titulos/DRESSCODE.png";
import tituloSeccionCarousel from "../../assets/imagenes/titulos/";
import tituloSeccionRegalos from "../../assets/imagenes/titulos/LOSREGALOS.png";
import tituloSeccionForm from "../../assets/imagenes/titulos/NOSACOMPANAS.png";
import tituloSeccionFooter from "../../assets/imagenes/titulos/LOSESPERAMOS.png";


const informacion = {
  seccionHome: {
    imagenes: [
      {
        imagen: imagenHome1,
      },
      {
        imagen: imagenHome2,
      },
      {
        imagentitulo: tituloImagenPortada,
      },
    ],
    textos: [
      {
        titulo: "29.06.24",
      },
    ],
  },

  seccionContador: {
    imagenes: [
      {
        imagentitulo: tituloSeccionContador,
      },
    ],
    textso: [
      {
        titulo: "nuestra gran",
        titulo: "aventura comienza",
        subtitulo: "y queremos que seas parte",
        subtitulo: "¡Te esperamos este día especial!",
      },
    ],
  },

  seccionSobreBoda: {
    imagenes: [
      {
        imagentitulo: tituloSeccionSobreBoda,
      },
    ],
    textos: [
      {
        subtitulo: "fecha y hora",
        texto: "29",
        texto: "de junio",
        texto: "3:00",
        texto: "de la tarde",
        texto: "lugar",
        texto: "Jirón La Floresta 125 - Camacho",
        texto: "Santiago de Surco",
        boton: "ver mapa",
      },
    ],
  },

  seccionDressCoder: {
    imagenes: [
      {
        imagentitulo: tituloSeccionDressCode,
      },
    ],
    textos: [
      {
        titulo: "Semiformal",
        titulo: "no blanco, beige, crema, rojo",
        subtitulo: "amarillo o neones",
        boton: "ver ideas",
      },
    ],
  },

  seccionDressCarousel: {
    imagenes: [
      {
        imagentitulo: tituloSeccionCarousel,
      },
    ],
    textos: [
      {
        titulo:
          "En el camino de la vida, cada paso juntos ha sido un viaje con el más bello de los paisajes, donde cada instante es un tesoro compartido que atesoro en el corazón",
      },
    ],
  },

  seccionRegalos: {
    imagenes: [
      {
        imagentitulo: tituloSeccionRegalos,
      },
    ],
    textos: [
      {
        titulo:
          "Tu presencia es nuestro mejor regalo, pero si deseas, ayúdanos a hacer realidad nuestra luna de miel",

        boton: "ver datos bancarios",
      },
    ],
  },

  seccionForm: {
    imagenes: [
      {
        imagentitulo: tituloSeccionForm,
      },
    ],
    textos: [
      {
        titulo: "Es muy importante para nosotros que confirmes tu presencia",
      },
    ],
  },

  seccionFooter: {
    imagenes: [
      {
        imagentitulo: tituloSeccionFooter,
      },
    ],
  },
};

const HomeContainer = () => {
  return <Home />;
};

export default HomeContainer;
