import React from "react";
import InfoContext from "./InfoContext";
import imagenHome1 from "../../assets/imagenes/FONDO_01.png";
import imagenHome2 from "../../assets/imagenes/FONDO_02.png";
import tituloImagenPortada from "../../assets/imagenes/titulos/NOMBRES_03.png";
import tituloSeccionContador from "../../assets/imagenes/titulos/LOSESPERAMOS.png";
import tituloSeccionSobreBoda from "../../assets/imagenes/titulos/SOBRELABODA.png";
import tituloSeccionDressCode from "../../assets/imagenes/titulos/DRESSCODE.png";
import tituloSeccionCarousel from "../../assets/imagenes/titulos/LOSESPERAMOS.png";
import tituloSeccionRegalos from "../../assets/imagenes/titulos/LOSREGALOS.png";
import tituloSeccionForm from "../../assets/imagenes/titulos/NOSACOMPANAS.png";
import tituloSeccionFooter from "../../assets/imagenes/titulos/LOSESPERAMOS.png";

const InfoContextProvider = ({ children }) => {
  /* const informacion = [
    {
      imagenes: [
        { imagen1: imagenHome1 },
        { imagen2: imagenHome2 },
        { tituloImagenPortada1: tituloImagenPortada },
      ],
      textos: [{ titulo: "29.06.24" }],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionContador }],
      textos: [
        {
          titulo: "nuestra gran",
          titulo2: "aventura comienza",
          subtitulo: "y queremos que seas parte",
          subtitulo2: "¡Te esperamos este día especial!",
        },
      ],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionSobreBoda }],
      textos: [
        {
          subtitulo: "fecha y hora",
          texto: "29",
          texto2: "de junio",
          texto3: "3:00",
          texto4: "de la tarde",
          texto5: "lugar",
          texto6: "Jirón La Floresta 125 - Camacho",
          texto7: "Santiado de Surco",
          boton8: "ver mapa",
        },
      ],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionDressCode }],
      textos: [
        {
          titulo: "Semiformal",
          titulo2: "no blanco, beige, crema, rojo",
          subtitulo: "amarillo o neones",
          boton: "ver ideas",
        },
      ],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionCarousel }],
      textos: [
        {
          titulo:
            "En el camino de la vida, cada paso juntos ha sido un viaje con el más bello de los paisajes, donde cada instante es un tesoro compartido que atesoro en el corazón",
        },
      ],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionRegalos }],
      textos: [
        {
          titulo:
            "Tu presencia es nuestro mejor regalo, pero si deseas, ayúdanos a hacer realidad nuestra luna de miel",
          boton: "ver datos bancarios",
        },
      ],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionForm }],
      textos: [
        {
          titulo: "Es muy importante para nosotros que confirmes tu presencia",
        },
      ],
    },
    {
      imagenes: [{ imagentitulo: tituloSeccionFooter }],
    },
  ]; */
  

 

  /*   const seccionHomeArray = Object.values(informacion.seccionHome);
  const seccionContadorArray = Object.values(informacion.seccionContador);
  const seccionSobreBodaArray = Object.values(informacion.seccionSobreBoda);
  const seccionDressCodeArray = Object.values(informacion.seccionDressCode);
  const seccionCarouselArray = Object.values(informacion.seccionCarousel);
  const seccionRegalosArray = Object.values(informacion.seccionRegalos);
  const seccionFormArray = Object.values(informacion.seccionForm);
  const seccionFooterArray = Object.values(informacion.seccionFooter); */

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
        }
      ],
      seccionContador: [
        {
          tituloImagen: tituloSeccionContador,
        },
        {
          titulo: "nuestra gran",
          titulo2: "aventura comienza",
          subtitulo: "y queremos que seas parte",
        }
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
      
      ]
      
      
    },
  ];
  
  const infoHomeArray = Object.values(informacion[0].seccionHome);
  const infoContadorArray = Object.values(informacion[0].seccionContador);
  const infoSobreBodaArray = Object.values(informacion[0].seccionSobreBoda);



  const seccionDressCode = [
    {
      imagenes: [tituloSeccionDressCode],
      textos: [
        {
          titulo: "Semiformal",
          titulo2: "no blanco, beige, crema, rojo",
          subtitulo: "amarillo o neones",
          boton: "ver ideas",
        },
      ],
    },
  ];

  const seccionCarousel = [
    {
      imagenes: [tituloSeccionCarousel],
      textos: [
        {
          titulo:
            "En el camino de la vida, cada paso juntos ha sido un viaje con el más bello de los paisajes, donde cada instante es un tesoro compartido que atesoro en el corazón",
        },
      ],
    },
  ];

  const seccionRegalos = [
    {
      imagenes: [tituloSeccionRegalos],
      textos: [
        {
          titulo:
            "Tu presencia es nuestro mejor regalo, pero si deseas, ayúdanos a hacer realidad nuestra luna de miel",
          boton: "ver datos bancarios",
        },
      ],
    },
  ];
  const seccionForm = [
    {
      imagenes: [tituloSeccionForm],
      textos: [
        {
          titulo: "Es muy importante para nosotros que confirmes tu presencia",
        },
      ],
    },
  ];
  const seccionFooter = [
    {
      imagenes: [tituloSeccionFooter],
    },
  ];
  
 // const ImagenesHomeArray = Object.values(seccionHome[0].imagenes);


  const values = {
    infoHomeArray,
    infoContadorArray,
    infoSobreBodaArray,
  };

 

  

  
  return (
    <InfoContext.Provider value={ values}> {children} </InfoContext.Provider>
  );
};

export default InfoContextProvider;
