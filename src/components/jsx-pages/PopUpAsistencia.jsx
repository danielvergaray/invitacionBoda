import { useContext, useState } from "react";
import InfoContext from "../infoContext/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import imagenRama from "../../assets/imagenes/titulos/RAMA.png";

const PopUpAsistencia = ({ popUpAsistencia, setPopUpAsistencia }) => {
  const handleClose = () => setPopUpAsistencia(!popUpAsistencia);

  /* const [respuestaAsistencia, setRespuestAsistencia] = useState(""); */

  const { respuestaAsistencia, setRespuestaAsistencia, userData, setUserData } =
    useContext(InfoContext);

  const respuestaFuncion = (respuesta) => {
    setRespuestaAsistencia(respuesta);
    setUserData({
      ...userData,
      respuesta: respuesta,
    });
    handleClose();
  };

  return (
    <>
      <Modal
        show={popUpAsistencia}
        onHide={handleClose}
        style={{ top: "25vh" }}
      >
        <Modal.Header style={{backgroundColor:"white"}}>
          <div className="popup-imagenRama">
            <img src={imagenRama} alt="" />
          </div>
        </Modal.Header>
        <Modal.Title style={{textAlign:"center", backgroundColor:"white"}}>¿Asistirás?</Modal.Title>
        <Modal.Footer style={{backgroundColor:"white"}}>
          <Button variant="secondary" onClick={() => respuestaFuncion("Si")}>
            Si
          </Button>
          <Button variant="primary" onClick={() => respuestaFuncion("No")}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUpAsistencia;
