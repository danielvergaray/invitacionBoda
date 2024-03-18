import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AgregarInvitados = () => {
  const invitados = [
    {
      nombre: "abrilcarazas",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "josearias",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "aimikomori",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "akiokomori",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "alexhuertas",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "carollopez",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "cesarcarazas",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "patriciaelorreaga",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "hiaradelarosa",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "libnadavila",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "lizflores",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "natalysilva",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "nathaliemendieta",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "priscilacarazas",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "rosacarcamo",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "ruthmerino",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "alonsogarrido",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "mariaferoullon",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "lunagarrido",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "claudiacardenas",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "danielvillaverde",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "maritzaarzubiaga",
      mensaje: "",
      respuesta: "",
    },

    {
      nombre: "ofeliaarzubiaga",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "diegovergaray",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "jamesterry",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "luisvergaray",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "monicavergaray",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "enriquevergaray",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "monicaescobar",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "richardvergaray",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "cliffgarcia",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "danielherold",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "maryherold",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "aurysthelapalma",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "kresstina yousef",
      mensaje: "",
      respuesta: "",
    },
    {
      nombre: "enriquelarosa",
      mensaje: "",
      respuesta: "",
    },
  ];

  const addDataToFirebase = () => {
    const db = getFirestore();

    const collectionRef = collection(db, "invitados");

    for (let item of invitados) {
      addDoc(collectionRef, item)
        .then((res) => console.log(res.id))
        .catch((err) => console.log(err));
    }

    /* ASI SE HA CREADO LOS PRODUCTOS EN LA BASE DE DATOS */
  };
  return <button onClick={addDataToFirebase}>agregar productos</button>;
};

export default AgregarInvitados;
